// =====================================================================
// Practice engine: pure functions (no React) that pick questions and
// prepare them for display — shuffling options, building the text of
// "ข้อ ก และ ค ถูก" options, and checking answers.
//
// Kept separate from the UI so engine.test.ts can check that shuffling
// never loses track of the correct answer.
// =====================================================================
import type { Mcq, Numeric, Question } from '../data/types';

/** A random-number source: returns a number in [0, 1). Math.random by default. */
export type Rng = () => number;

/** A small seeded generator (mulberry32) so tests can repeat a shuffle. */
export function seeded(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A shuffled copy (Fisher–Yates). The original array is not changed. */
export function shuffle<T>(arr: readonly T[], rng: Rng = Math.random): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Thai option letters, as used in Thai exams. */
export const LETTERS = ['ก', 'ข', 'ค', 'ง', 'จ', 'ฉ'];

export interface ShownOption {
  /** index in the original `options` array (so feedback can find its `why`) */
  orig: number;
  letter: string;
  text: string;
  correct: boolean;
  why: string;
}

/**
 * Shuffle an mcq's plain options; combo options ("ข้อ ก และ ค ถูก") stay at
 * the end and get their text from the letters the plain options landed on.
 */
export function prepareMcq(q: Mcq, rng: Rng = Math.random): ShownOption[] {
  const plain = q.options.map((o, i) => ({ o, i })).filter(({ o }) => !o.combo);
  const combos = q.options.map((o, i) => ({ o, i })).filter(({ o }) => o.combo);
  const order = shuffle(plain, rng);
  // original index → letter it got
  const letterOf = new Map<number, string>();
  order.forEach(({ i }, k) => letterOf.set(i, LETTERS[k]));
  const shown: ShownOption[] = order.map(({ o, i }, k) => ({
    orig: i,
    letter: LETTERS[k],
    text: o.text ?? '',
    correct: !!o.correct,
    why: o.why,
  }));
  combos.forEach(({ o, i }, k) => {
    const letters = (o.combo ?? []).map((j) => letterOf.get(j)!).sort((a, b) => LETTERS.indexOf(a) - LETTERS.indexOf(b));
    const text = `ข้อ ${letters.slice(0, -1).join(', ')} และ ${letters[letters.length - 1]} ถูก`;
    shown.push({ orig: i, letter: LETTERS[order.length + k], text, correct: !!o.correct, why: o.why });
  });
  return shown;
}

/**
 * Check a numeric answer. Returns 'right', a slip message (a known wrong
 * number), or 'wrong'.
 */
export function checkNumeric(q: Numeric, value: number): { ok: boolean; msg?: string } {
  const tol = q.tolerance ?? 0.02;
  const close = (a: number, b: number) => Math.abs(a - b) <= Math.max(Math.abs(b) * tol, 1e-9);
  if (close(value, q.answer)) return { ok: true };
  const slip = q.slips?.find((s) => close(value, s.value));
  return { ok: false, msg: slip?.msg };
}

/** Parse what a student typed: accepts "5,25", "−0.488", "1.2e3", spaces. */
export function parseNumber(text: string): number | null {
  const t = text.trim().replace(/\s+/g, '').replace(/,/g, '.').replace(/[−–]/g, '-');
  if (!/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(t)) return null;
  return Number(t);
}

/**
 * Pick `n` questions, preferring ones answered wrongly or never seen.
 * `weight(q)` returns a number ≥ 0 (bigger = more likely). Without weights
 * it is a plain random sample.
 */
export function pick(qs: readonly Question[], n: number, rng: Rng = Math.random, weight?: (q: Question) => number): Question[] {
  if (!weight) return shuffle(qs, rng).slice(0, n);
  // weighted sampling without replacement (Efraimidis–Spirakis keys)
  const keyed = qs.map((q) => ({ q, k: Math.pow(rng(), 1 / Math.max(weight(q), 1e-6)) }));
  keyed.sort((a, b) => b.k - a.k);
  return keyed.slice(0, n).map((x) => x.q);
}
