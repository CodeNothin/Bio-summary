// =====================================================================
// Checks the practice engine: shuffling keeps the right answer findable,
// "ข้อ ... ถูก" options get the right letters, and numeric checking works.
// =====================================================================
import { describe, expect, it } from 'vitest';
import { allQuestions } from '../data/questions';
import type { Mcq, Numeric } from '../data/types';
import { checkNumeric, parseNumber, prepareMcq, seeded } from './engine';

const mcqs = allQuestions.filter((q): q is Mcq => q.type === 'mcq');

describe('prepareMcq', () => {
  it('always shows exactly one correct option, for 50 different shuffles of every mcq', () => {
    for (const q of mcqs) {
      for (let s = 0; s < 50; s++) {
        const shown = prepareMcq(q, seeded(s));
        expect(shown.filter((o) => o.correct).length, q.id).toBe(1);
        expect(shown.length, q.id).toBe(q.options.length);
        // every original option appears once
        expect(new Set(shown.map((o) => o.orig)).size, q.id).toBe(q.options.length);
      }
    }
  });

  it('combo text names exactly the letters of the options it combines', () => {
    for (const q of mcqs.filter((q) => q.options.some((o) => o.combo))) {
      for (let s = 0; s < 20; s++) {
        const shown = prepareMcq(q, seeded(s));
        for (const o of shown.filter((o) => q.options[o.orig].combo)) {
          const want = q.options[o.orig].combo!.map((j) => shown.find((x) => x.orig === j)!.letter);
          for (const letter of want) expect(o.text, q.id).toContain(letter);
        }
      }
    }
  });

  it('combo options always come after the plain options', () => {
    for (const q of mcqs) {
      const shown = prepareMcq(q, seeded(7));
      const firstCombo = shown.findIndex((o) => q.options[o.orig].combo);
      if (firstCombo >= 0) expect(shown.slice(firstCombo).every((o) => q.options[o.orig].combo), q.id).toBe(true);
    }
  });
});

describe('numeric answers', () => {
  const nums = allQuestions.filter((q): q is Numeric => q.type === 'numeric');
  it('the stored answer is accepted and every listed slip is rejected with its message', () => {
    for (const q of nums) {
      expect(checkNumeric(q, q.answer).ok, q.id).toBe(true);
      for (const s of q.slips ?? []) {
        const r = checkNumeric(q, s.value);
        expect(r.ok, `${q.id} slip ${s.value}`).toBe(false);
        expect(r.msg, q.id).toBe(s.msg);
      }
    }
  });
  it('parses Thai-keyboard style input', () => {
    expect(parseNumber('5,25')).toBe(5.25);
    expect(parseNumber(' −0.488 ')).toBe(-0.488);
    expect(parseNumber('1.2e3')).toBe(1200);
    expect(parseNumber('abc')).toBeNull();
  });
});
