// =====================================================================
// Shows a Diagram from src/data/diagrams (a slide picture with tap
// points on it) and lets the user tap its parts.
//
// Used two ways:
//   - in widgets: tap a part → its name and explanation appear below
//     (<DiagramExplorer id="heart" notice="…" />)
//   - in questions: the practice page passes `onTap` and decides what is
//     right or wrong; `mark` colours a point green/red, and `quiz` covers
//     the slide's own printed labels (diagram.masks).
//
// `highlight` (list of part ids) dims every other point — step-through
// widgets use it to spotlight the parts of the current step.
// =====================================================================
import { useState } from 'react';
import { diagrams } from '../data/diagrams';
import type { Diagram } from '../data/types';
import { SlideFig } from './SlideFig';
import { T, WidgetFrame } from './ui';

export function TapDiagram({
  diagram, selected, onTap, highlight, mark, maxWidth = 520, quiz = false,
}: {
  diagram: Diagram;
  selected?: string | null;
  onTap?: (partId: string) => void;
  highlight?: string[];
  /** colour one part as right/wrong (label questions) */
  mark?: { id: string; ok: boolean } | null;
  maxWidth?: number;
  /** hide the slide's printed labels */
  quiz?: boolean;
}) {
  return (
    <SlideFig
      id={diagram.fig}
      maxWidth={maxWidth}
      masks={quiz ? diagram.masks : undefined}
      selected={selected}
      onPin={onTap}
      mark={mark}
      pins={diagram.parts.map((p) => ({
        id: p.id,
        at: p.at,
        tone: p.tone,
        label: quiz ? undefined : p.label,
        dim: highlight ? !highlight.includes(p.id) : false,
      }))}
    />
  );
}

/** A ready-made widget: tap parts of one diagram to read about them. */
export function DiagramExplorer({ id, title, notice, start }: { id: string; title?: string; notice: string; start?: string }) {
  const d = diagrams[id];
  const [sel, setSel] = useState<string | null>(start ?? null);
  const part = d.parts.find((p) => p.id === sel);
  return (
    <WidgetFrame title={title ?? d.title} notice={notice} onReset={() => setSel(start ?? null)}>
      <TapDiagram diagram={d} selected={sel} onTap={setSel} />
      <div className="part-info" aria-live="polite">
        {part ? (
          <>
            <b>{part.label}</b>
            <br />
            <T>{part.info}</T>
          </>
        ) : (
          <span className="small">แตะส่วนใดก็ได้ในภาพเพื่อดูชื่อและหน้าที่</span>
        )}
      </div>
      <div className="part-chips">
        {d.parts.map((p) => (
          <button key={p.id} className={`chip${sel === p.id ? ' on' : ''}`} onClick={() => setSel(p.id)}>
            <i className={`dot tone-${p.tone}`} /> {p.label.split(' (')[0]}
          </button>
        ))}
      </div>
    </WidgetFrame>
  );
}
