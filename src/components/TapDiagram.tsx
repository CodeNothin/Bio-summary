// =====================================================================
// Draws a Diagram from src/data/diagrams and lets the user tap its parts.
//
// Used two ways:
//   - in widgets: tap a part → its name and explanation appear below
//     (<DiagramExplorer id="heart" notice="…" />)
//   - in label questions: the practice page passes `onTap` and decides
//     what is right or wrong; `mark` colours a part green/red.
//
// `highlight` (list of part ids) dims every other part — step-through
// widgets use it to spotlight the parts of the current step.
// Every shape gets an invisible thick outline so small or thin parts are
// still easy to hit with a finger.
// =====================================================================
import { useState } from 'react';
import { diagrams } from '../data/diagrams';
import type { Diagram, Shape } from '../data/types';
import { T, WidgetFrame } from './ui';

function ShapeEl({ s, className }: { s: Shape; className: string }) {
  switch (s.kind) {
    case 'circle':
      return <circle cx={s.cx} cy={s.cy} r={s.r} className={className} />;
    case 'ellipse':
      return <ellipse cx={s.cx} cy={s.cy} rx={s.rx} ry={s.ry} className={className} />;
    case 'rect':
      return <rect x={s.x} y={s.y} width={s.w} height={s.h} rx={s.rx ?? 0} className={className} />;
    case 'path':
      return (
        <path
          d={s.d}
          className={`${className}${s.line ? ' line' : ''}`}
          fillRule={s.evenodd ? 'evenodd' : undefined}
          strokeWidth={s.line ? (s.w ?? 3) : undefined}
        />
      );
  }
}

export function TapDiagram({
  diagram, selected, onTap, highlight, mark, maxWidth = 360,
}: {
  diagram: Diagram;
  selected?: string | null;
  onTap?: (partId: string) => void;
  highlight?: string[];
  /** colour one part as right/wrong (label questions) */
  mark?: { id: string; ok: boolean } | null;
  maxWidth?: number;
}) {
  return (
    <svg viewBox={diagram.viewBox} className="diagram" style={{ maxWidth }} role="img" aria-label={diagram.title}>
      {diagram.decor?.map((g, i) => (
        <g key={i} className={`tone-${g.tone} decor`}>
          {g.shapes.map((s, j) => (
            <ShapeEl key={j} s={s} className="" />
          ))}
        </g>
      ))}
      {diagram.parts.map((p) => {
        const dim = highlight && !highlight.includes(p.id);
        const cls = [
          'part',
          `tone-${p.tone}`,
          selected === p.id ? 'sel' : '',
          dim ? 'dim' : '',
          mark?.id === p.id ? (mark.ok ? 'mark-ok' : 'mark-bad') : '',
        ].join(' ');
        return (
          <g
            key={p.id}
            className={cls}
            onClick={onTap ? () => onTap(p.id) : undefined}
            role={onTap ? 'button' : undefined}
            aria-label={onTap ? p.label : undefined}
          >
            {p.shapes.map((s, j) => (
              <ShapeEl key={`h${j}`} s={s} className="hit" />
            ))}
            {p.shapes.map((s, j) => (
              <ShapeEl key={j} s={s} className="fill" />
            ))}
          </g>
        );
      })}
    </svg>
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
