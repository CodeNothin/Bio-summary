// =====================================================================
// The shapes of all study data: questions, topics, diagrams, glossary.
//
// Everything the site "knows" (answers, explanations, diagram labels)
// lives in plain data files under src/data/ that use these types.
// The UI only displays them, so to fix a wrong answer you edit the data
// file, never a component. `npm test` (src/data/data.test.ts) checks that
// every question is well-formed before anything is published.
//
// To add a new question type:
//   1. add an interface here and include it in the `Question` union,
//   2. add its checks to data.test.ts,
//   3. add a view for it in src/practice/QuestionView.tsx.
// =====================================================================

/** Every chapter page. The id is also the URL (#/p-transport) — never rename a published one. */
export type PageId =
  // Unit 5, plant half (ผศ.ดร.อัญชลี)
  | 'p-structure'
  | 'p-nutrition'
  | 'p-transport'
  | 'p-response'
  // Unit 5, animal half
  | 'a-organization'
  | 'a-form'
  | 'a-digestion'
  | 'a-circulation'
  | 'a-respiration'
  | 'a-control'
  | 'a-excretion'
  | 'a-applications'
  // Unit 6 (ผศ.ดร.ชาดทิพย์)
  | 'e-intro'
  | 'e-population'
  | 'e-community'
  | 'e-ecosystem'
  | 'e-issues'
  // Unit 7 (Chawatat Thanoosing, PhD)
  | 'c-museum';

/**
 * One section (card) of a chapter page. Sections double as practice TOPICS:
 * every question names the section it belongs to, so per-topic accuracy and
 * the weakest-topic drill work section by section.
 */
export interface SectionDef {
  /** unique across the whole site; also the "เข้าใจแล้ว" key and the URL part #/page/<id> */
  id: string;
  /** short Thai label for the chip row and the accuracy list */
  label: string;
}

// ------------------------------------------------------------- questions

interface QBase {
  /** unique, stable id like "pt-psi-03" — progress is saved under it */
  id: string;
  /** section id from pages.ts — the practice topic this question trains */
  topic: string;
  /** where it comes from, e.g. "พืช 5.4 สไลด์ 14" or "แบบฝึกหัด 5.4 ข้อ 40" */
  source: string;
  /** shown one at a time when the student taps "ขอคำใบ้" (at least one) */
  hints: string[];
  /** shown after answering: why the right answer is right */
  explanation: string;
  /**
   * 'needs-key' = the slides leave the answer open; the question is kept in the
   * data (with a TODO(professor-method) note) but never shown in practice.
   */
  status?: 'ready' | 'needs-key';
  /** free note for the editor, e.g. what is unclear */
  todo?: string;
}

/**
 * Multiple choice, exactly one correct option.
 *
 * Thai exams often end with "ข้อ ก และ ค ถูก". Write those as an option with
 * `combo: [0, 2]` (indexes of the options it combines) and NO text — the text is
 * built from whatever letters the options get after shuffling. Combined options
 * always stay at the end. Each plain option referenced by a combo needs `truth`
 * (is that statement itself true?), so the test can check the combo is right.
 */
export interface McqOption {
  /** option text (leave empty for combo options) */
  text?: string;
  correct?: boolean;
  /** why this option is wrong (or, for the correct one, a short "why right") */
  why: string;
  /** indexes of the options this "ข้อ ... ถูก" option combines */
  combo?: number[];
  /** for options referenced by a combo: is the statement itself true? */
  truth?: boolean;
}
export interface Mcq extends QBase {
  type: 'mcq';
  prompt: string;
  options: McqOption[];
  /** optional diagram shown above the options */
  diagram?: string;
}

/** True/false with a reason. */
export interface TrueFalse extends QBase {
  type: 'tf';
  statement: string;
  answer: boolean;
  /** why the statement is true / false (shown whichever way they answer) */
  why: string;
}

/** Put the steps in order. `steps` is written in the CORRECT order; the UI shuffles it. */
export interface Order extends QBase {
  type: 'order';
  prompt: string;
  steps: string[];
}

/** Match each term to its definition (4–6 pairs). */
export interface Match extends QBase {
  type: 'match';
  prompt: string;
  pairs: { left: string; right: string }[];
}

/** Tap the named part on a diagram from src/data/diagrams. */
export interface Label extends QBase {
  type: 'label';
  prompt: string;
  diagram: string;
  /** part id that is the answer */
  target: string;
}

/** Sort items into bins (e.g. macronutrient / micronutrient). */
export interface Sort extends QBase {
  type: 'sort';
  prompt: string;
  bins: { id: string; label: string }[];
  items: { text: string; bin: string }[];
}

/**
 * A number answer, only where the slides calculate something.
 * `compute` must return the answer from src/data/calc.ts so the test can check
 * the stored `answer` was not mistyped.
 */
export interface Numeric extends QBase {
  type: 'numeric';
  prompt: string;
  answer: number;
  unit: string;
  /** accepted relative error, e.g. 0.02 = 2 % (default 0.02) */
  tolerance?: number;
  compute: () => number;
  /** typical wrong numbers and what mistake they show */
  slips?: { value: number; msg: string }[];
}

export type Question = Mcq | TrueFalse | Order | Match | Label | Sort | Numeric;

// ------------------------------------------------------------- diagrams

/**
 * Colour names, mapped to CSS variables in styles.css (.tone-<name>).
 * "line" = outline only.
 */
export type Tone =
  | 'green' | 'dgreen' | 'brown' | 'tan' | 'red' | 'blue' | 'purple' | 'pink'
  | 'yellow' | 'orange' | 'grey' | 'water' | 'line';

export interface DiagramPart {
  /** stable id, used by label questions — never rename one a question uses */
  id: string;
  /** Thai name with English term, e.g. "ไซเลม (xylem)" */
  label: string;
  /** one-to-three sentence explanation shown when tapped */
  info: string;
  tone: Tone;
  /** where the tap point sits: [x, y] in percent of the cropped slide picture */
  at: [number, number];
}

export interface Diagram {
  id: string;
  title: string;
  /** slide picture id from src/data/figures.json, e.g. 'a5-92' */
  fig: string;
  /** boxes [x0, y0, x1, y1] (percent) that hide the slide's printed labels in label questions */
  masks?: [number, number, number, number][];
  /** tappable parts */
  parts: DiagramPart[];
  /** slide reference */
  source: string;
}

// ------------------------------------------------------------- glossary

export interface Term {
  /** Thai term */
  th: string;
  /** English term as on the slides */
  en: string;
  /** short definition in Thai */
  def: string;
  page: PageId;
  /** section id on that page, for the "อ่านต่อ" link */
  section: string;
}

/** A comparison table for the key-terms page. */
export interface Compare {
  title: string;
  page: PageId;
  head: string[];
  rows: string[][];
}
