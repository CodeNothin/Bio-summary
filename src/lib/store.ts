// =====================================================================
// The site's saved state (progress, scores, theme, flashcards).
//
// Everything lives in the browser's localStorage under ONE key, so
// nothing leaves the user's device and there is no server.
//
// How components use it:
//   const s = useStore();          // read (re-renders when state changes)
//   toggleDone('pl-intro');        // write through one of the helpers below
//
// To add a new saved field:
//   1. add it to `State` and to `empty` (its default value),
//   2. write a small helper like `setTheme` that calls `update(...)`.
// Old saved data without the new field still loads, because `load()`
// starts from `empty` and copies the saved fields on top.
// =====================================================================
import { useSyncExternalStore } from 'react';

/** How many first attempts at one topic were right. */
export interface TopicStat {
  correct: number;
  total: number;
}

export interface State {
  /** null = follow the phone/computer setting */
  theme: 'light' | 'dark' | null;
  /** section id → "เข้าใจแล้ว" ticked */
  done: Record<string, boolean>;
  /** topic (section) id → accuracy of first attempts */
  topics: Record<string, TopicStat>;
  /** question id → was the LAST attempt right? (used to re-show missed ones) */
  last: Record<string, boolean>;
  /** flashcard key (English term) → 'known' or 'again' */
  cards: Record<string, 'known' | 'again'>;
  /** page id the user last opened, for the "บทเรียน" tab */
  lastPage: string | null;
}

/** Bump the version number only if the shape changes in a way old data can't fill. */
const KEY = 'bioweb:v1';
const empty: State = { theme: null, done: {}, topics: {}, last: {}, cards: {}, lastPage: null };

function load(): State {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...empty, ...(JSON.parse(raw) as Partial<State>) };
  } catch {
    // private browsing or corrupted data: start fresh instead of crashing
  }
  return empty;
}

// The current state lives in this module-level variable.
// `listeners` are React's re-render callbacks (one per component using useStore).
let state: State = load();
const listeners = new Set<() => void>();

/** Replace the state with fn(old state), save it, and re-render every reader. */
export function update(fn: (s: State) => State): void {
  state = fn(state);
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // storage full or blocked: the site keeps working, it just won't remember
  }
  listeners.forEach((l) => l());
}

/** React hook: the current state. Components re-render whenever `update` runs. */
export function useStore(): State {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => state,
    () => state, // server render (used by pages.test.tsx)
  );
}

// ------------------------------------------------------------ helpers

export const toggleDone = (id: string) => update((s) => ({ ...s, done: { ...s.done, [id]: !s.done[id] } }));

/** Record one answer: `first` = first attempt at this question in this session (counts for accuracy). */
export const recordAnswer = (qid: string, topic: string, correct: boolean, first: boolean) =>
  update((s) => {
    const cur = s.topics[topic] ?? { correct: 0, total: 0 };
    return {
      ...s,
      last: { ...s.last, [qid]: correct },
      topics: first
        ? { ...s.topics, [topic]: { correct: cur.correct + (correct ? 1 : 0), total: cur.total + 1 } }
        : s.topics,
    };
  });

export const setCard = (key: string, v: 'known' | 'again') => update((s) => ({ ...s, cards: { ...s.cards, [key]: v } }));

export const setLastPage = (id: string) => {
  if (state.lastPage !== id) update((s) => ({ ...s, lastPage: id }));
};

export const setTheme = (theme: State['theme']) => update((s) => ({ ...s, theme }));

/** Wipe practice statistics (keeps theme and "เข้าใจแล้ว" ticks). */
export const resetStats = () => update((s) => ({ ...s, topics: {}, last: {}, cards: {} }));

/** The theme actually in use: the saved choice, or the device setting. */
export function effectiveTheme(s: State): 'light' | 'dark' {
  if (s.theme) return s.theme;
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
