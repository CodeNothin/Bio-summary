// =====================================================================
// Page-text checks. Run with `npm test`.
//
// Renders each chapter page to HTML (no browser needed) and checks that
// every ready question's `inText` phrase really appears in the text of
// its own section. This keeps the pages "everything you need to know":
// if an edit drops the answer to a practice question, the test names it.
// Every ready question must have `inText`.
// Also: every widget shows a grey "how to use" line (<How>, ui.tsx).
// =====================================================================
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { pageComponents } from '../chapters';
import { pages } from '../data/pages';
import { readyQuestions } from '../data/questions';
import '../widgets/all';
import { widgets } from '../widgets/registry';

/** section id → its plain text, for one rendered page */
function sectionTexts(html: string): Record<string, string> {
  const out: Record<string, string> = {};
  const bits = html.split(/<section [^>]*id="sec-/);
  for (const b of bits.slice(1)) {
    const id = b.slice(0, b.indexOf('"'));
    out[id] = b
      .replace(/<!--.*?-->/g, '')
      .replace(/<\/?(b|i|em|strong|span|a)\b[^>]*>/g, '') // inline tags: no gap
      .replace(/<[^>]+>/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/\s+/g, ' ');
  }
  return out;
}

describe('page text answers the practice questions', () => {
  for (const p of pages) {
    const qs = readyQuestions.filter((q) => p.sections.some((s) => s.id === q.topic));
    if (!qs.length) continue;
    it(p.id, () => {
      const C = pageComponents[p.id]!;
      expect(C, p.id).toBeTruthy();
      const text = sectionTexts(renderToString(<C />));
      for (const q of qs) {
        expect(q.inText, `${q.id}: add inText (the phrase on the page that answers it)`).toBeTruthy();
        const sec = text[q.topic] ?? '';
        for (const ph of [q.inText!].flat())
          expect(sec.replace(/\s+/g, ' ').includes(ph), `${q.id}: "${ph}" is not in section ${q.topic}`).toBe(true);
      }
    });
  }
});

describe('every widget says how to use it', () => {
  for (const [id, w] of Object.entries(widgets))
    it(id, () => {
      expect(renderToString(<w.C />), `${id}: add a <How> line`).toContain('class="how"');
    });
});
