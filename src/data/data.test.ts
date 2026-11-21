// =====================================================================
// Well-formedness checks for ALL study data. Run with `npm test`.
//
// These catch editing mistakes before they reach classmates:
//   - ids unique, every question points at a real section
//   - mcq: exactly one correct option, every option explained,
//          "ข้อ … ถูก" options consistent with the statements they combine
//   - tf has a reason, order has ≥ 3 distinct steps, match pairs unique,
//     label targets exist in their diagram, sort items go to real bins,
//     numeric answers equal what calc.ts computes
//   - diagrams: unique part ids, every part has a label and info, a tap
//     point inside its slide picture
//   - slide figures: every crop is a real box and has an image
//   - glossary links point at real sections
// If a test fails, the message names the question id to fix.
// =====================================================================
import { describe, expect, it } from 'vitest';
import { diagrams, allDiagrams } from './diagrams';
import { figures } from './figures';
import spec from './figures.json';
import { compares, terms } from './glossary';
import { allSections, pages, sectionById } from './pages';
import { allQuestions, readyQuestions } from './questions';

const nonEmpty = (s: unknown) => typeof s === 'string' && s.trim().length > 0;

describe('pages and sections', () => {
  it('page ids and section ids are unique', () => {
    expect(new Set(pages.map((p) => p.id)).size).toBe(pages.length);
    const ids = allSections.map((s) => s.id);
    expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([]);
  });
});

describe('every question', () => {
  it('has a unique id', () => {
    const ids = allQuestions.map((q) => q.id);
    expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([]);
  });

  it.each(allQuestions.map((q) => [q.id, q] as const))('%s: topic, source, hints, explanation', (_, q) => {
    expect(sectionById(q.topic), `topic "${q.topic}" is not a section in pages.ts`).toBeTruthy();
    expect(nonEmpty(q.source)).toBe(true);
    expect(q.hints.length).toBeGreaterThan(0);
    q.hints.forEach((h) => expect(nonEmpty(h)).toBe(true));
    expect(nonEmpty(q.explanation)).toBe(true);
    if (q.status === 'needs-key') expect(q.todo ?? '', 'needs-key questions must say why').toContain('TODO(professor-method)');
  });
});

describe('question types', () => {
  for (const q of allQuestions) {
    const ready = q.status !== 'needs-key';
    switch (q.type) {
      case 'mcq':
        it(`${q.id}: mcq has exactly one correct option and consistent combos`, () => {
          expect(nonEmpty(q.prompt)).toBe(true);
          expect(q.options.length).toBeGreaterThanOrEqual(3);
          expect(q.options.length).toBeLessThanOrEqual(6);
          expect(q.options.filter((o) => o.correct).length).toBe(1);
          q.options.forEach((o, i) => {
            if (o.combo) {
              expect(o.text, `option ${i}: combo options must not have text`).toBeUndefined();
              expect(o.combo.length).toBeGreaterThanOrEqual(2);
              for (const j of o.combo) {
                expect(q.options[j], `option ${i} combines missing option ${j}`).toBeTruthy();
                expect(q.options[j].combo, 'a combo cannot combine a combo').toBeUndefined();
                expect(typeof q.options[j].truth, `option ${j} is in a combo, so it needs truth: true/false`).toBe('boolean');
              }
              // a combo is correct exactly when every statement it combines is true
              if (ready) expect(!!o.correct, `combo option ${i}`).toBe(o.combo.every((j) => q.options[j].truth === true));
            } else {
              expect(nonEmpty(o.text), `option ${i} has no text`).toBe(true);
              if (o.correct) expect(o.truth, `option ${i} is correct but marked untrue`).not.toBe(false);
            }
            if (ready) expect(nonEmpty(o.why), `option ${i} has no explanation (why)`).toBe(true);
          });
          // option texts must differ
          const texts = q.options.filter((o) => !o.combo).map((o) => o.text);
          expect(new Set(texts).size).toBe(texts.length);
          if (q.diagram) expect(diagrams[q.diagram]).toBeTruthy();
        });
        break;
      case 'tf':
        it(`${q.id}: true/false has a statement and a reason`, () => {
          expect(nonEmpty(q.statement)).toBe(true);
          expect(typeof q.answer).toBe('boolean');
          expect(nonEmpty(q.why)).toBe(true);
        });
        break;
      case 'order':
        it(`${q.id}: order has ≥ 3 distinct steps`, () => {
          expect(q.steps.length).toBeGreaterThanOrEqual(3);
          expect(new Set(q.steps).size).toBe(q.steps.length);
        });
        break;
      case 'match':
        it(`${q.id}: match has 3–6 pairs, unique on both sides`, () => {
          expect(q.pairs.length).toBeGreaterThanOrEqual(3);
          expect(q.pairs.length).toBeLessThanOrEqual(6);
          expect(new Set(q.pairs.map((p) => p.left)).size).toBe(q.pairs.length);
          expect(new Set(q.pairs.map((p) => p.right)).size).toBe(q.pairs.length);
        });
        break;
      case 'label':
        it(`${q.id}: label target exists in diagram "${q.diagram}"`, () => {
          const d = diagrams[q.diagram];
          expect(d, `no diagram "${q.diagram}"`).toBeTruthy();
          expect(d.parts.map((p) => p.id), `no part "${q.target}"`).toContain(q.target);
        });
        break;
      case 'sort':
        it(`${q.id}: sort items go to real bins, every bin used`, () => {
          const bins = q.bins.map((b) => b.id);
          expect(new Set(bins).size).toBe(bins.length);
          expect(new Set(q.items.map((i) => i.text)).size).toBe(q.items.length);
          q.items.forEach((i) => expect(bins, `item "${i.text}"`).toContain(i.bin));
          bins.forEach((b) => expect(q.items.some((i) => i.bin === b), `bin "${b}" is empty`).toBe(true));
        });
        break;
      case 'numeric':
        it(`${q.id}: numeric answer equals calc.ts`, () => {
          expect(q.compute()).toBeCloseTo(q.answer, 6);
          expect(nonEmpty(q.unit)).toBe(true);
          for (const s of q.slips ?? []) expect(Math.abs(s.value - q.answer)).toBeGreaterThan(1e-9);
        });
        break;
    }
  }
});

describe('coverage', () => {
  it('every section has at least one ready question', () => {
    const empty = allSections.filter((s) => !readyQuestions.some((q) => q.topic === s.id)).map((s) => s.id);
    expect(empty).toEqual([]);
  });
});

describe('diagrams', () => {
  it.each(allDiagrams.map((d) => [d.id, d] as const))('%s: parts unique, labelled, explained, drawn', (_, d) => {
    expect(new Set(d.parts.map((p) => p.id)).size).toBe(d.parts.length);
    for (const p of d.parts) {
      expect(nonEmpty(p.label), p.id).toBe(true);
      expect(nonEmpty(p.info), p.id).toBe(true);
      // tap point inside the picture
      for (const v of p.at) expect(v >= 0 && v <= 100, p.id).toBe(true);
    }
    expect(figures[d.fig], `no slide figure ${d.fig}`).toBeTruthy();
    for (const m of d.masks ?? []) expect(m[0] < m[2] && m[1] < m[3], `${d.id} mask`).toBe(true);
  });
  it('diagram ids are unique', () => {
    expect(new Set(allDiagrams.map((d) => d.id)).size).toBe(allDiagrams.length);
  });
});

describe('glossary', () => {
  it('every term links to a real section on its own page', () => {
    for (const t of terms) {
      const s = sectionById(t.section);
      expect(s, `${t.en}: no section ${t.section}`).toBeTruthy();
      expect(s!.page, t.en).toBe(t.page);
      expect(nonEmpty(t.def)).toBe(true);
    }
  });
  it('comparison tables have rows as wide as their header', () => {
    for (const c of compares) for (const r of c.rows) expect(r.length, c.title).toBe(c.head.length);
  });
});

describe('slide figures', () => {
  it.each(Object.entries(spec.figures))('%s: crop box is inside the page and has an image', (id, c) => {
    const [x0, y0, x1, y1] = c as number[];
    expect(0 <= x0 && x0 < x1 && x1 <= 1 && 0 <= y0 && y0 < y1 && y1 <= 1).toBe(true);
    expect(figures[id].src, `run python scripts/crop-slides.py ${id}`).toBeTruthy();
    expect((spec.sizes as Record<string, number[]>)[id]).toBeTruthy();
  });
});
