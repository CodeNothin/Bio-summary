// =====================================================================
// Small building blocks shared by every page and widget:
//   T / P / Li / Note   text with **bold**, paragraph, list item, yellow note
//   Analogy / More      a "นึกภาพแบบนี้" box and a fold-out "อ่านเพิ่ม" box
//   Section             one card on a chapter page, with the "เข้าใจแล้ว" button
//   Table               a simple comparison table that scrolls sideways if wide
//   WidgetFrame         the box around every widget (title, ลองสังเกต, reset)
//   Slider / Seg / Toggle / Readout / StepNav   widget controls
//   Arrow               an SVG arrow
// Colours come from CSS variables in styles.css.
// =====================================================================
import { Fragment } from 'react';
import type { ReactNode } from 'react';
import { toggleDone, useStore } from '../lib/store';

/** Text with **bold** pieces. (Biology needs no math renderer; use Unicode: H₂O, Ψw, Ca²⁺.) */
export function T({ children }: { children: string }) {
  const bits = children.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {bits.map((b, i) =>
        b.startsWith('**') && b.endsWith('**') && b.length > 4 ? <b key={i}>{b.slice(2, -2)}</b> : <Fragment key={i}>{b}</Fragment>,
      )}
    </>
  );
}

export const P = ({ children }: { children: string }) => (
  <p>
    <T>{children}</T>
  </p>
);

export const Li = ({ children }: { children: string }) => (
  <li>
    <T>{children}</T>
  </li>
);

/** A bulleted list from an array of strings (each may use **bold**). */
export const List = ({ items }: { items: string[] }) => (
  <ul>
    {items.map((s, i) => (
      <Li key={i}>{s}</Li>
    ))}
  </ul>
);

/** Yellow box for "watch out" points and slide-wording notes. */
export const Note = ({ children }: { children: string }) => (
  <p className="note">
    <T>{children}</T>
  </p>
);

/** "Picture it like this" box. The default tag mentions Minecraft, the user's preferred analogy world. */
export function Analogy({ tag = 'นึกภาพแบบ Minecraft', children }: { tag?: string; children: ReactNode }) {
  return (
    <aside className="analogy">
      <p className="tag">{tag}</p>
      {children}
    </aside>
  );
}

/** Fold-out box for extra detail the student can skip on first reading. */
export function More({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="worked">
      <summary>{title}</summary>
      <div style={{ marginTop: 8 }}>{children}</div>
    </details>
  );
}

/** One card on a chapter page. `id` must match a section in src/data/pages.ts. */
export function Section({ id, title, en, children }: { id: string; title: string; en?: string; children: ReactNode }) {
  const done = !!useStore().done[id];
  return (
    <section className="card section" id={`sec-${id}`}>
      <div className="section-head">
        <h2>
          {title} {en && <span className="th-en">({en})</span>}
        </h2>
        <button className={`done-btn${done ? ' on' : ''}`} onClick={() => toggleDone(id)} aria-pressed={done}>
          {done ? '✓ เข้าใจแล้ว' : 'เข้าใจแล้ว?'}
        </button>
      </div>
      {children}
    </section>
  );
}

/** A table that scrolls sideways on narrow screens instead of widening the page. */
export function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="scroll">
      <table>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>
                  <T>{c}</T>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ------------------------------------------------------------ widget kit

/** The frame around every widget: title, the "ลองสังเกต" line, and a reset button. */
export function WidgetFrame({ title, notice, onReset, children }: { title: string; notice: string; onReset: () => void; children: ReactNode }) {
  return (
    <div className="widget">
      <div className="widget-head">
        <span className="widget-title">{title}</span>
        <button className="reset-btn" onClick={onReset}>
          ↺ รีเซ็ต
        </button>
      </div>
      <p className="notice">
        <b>ลองสังเกต:</b> <T>{notice}</T>
      </p>
      {children}
    </div>
  );
}

export function Slider({
  label, value, min, max, step, onChange, show,
}: { label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void; show: string }) {
  return (
    <div className="slider">
      <label>
        <span>{label}</span>
        <b>{show}</b>
      </label>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} aria-label={label} />
    </div>
  );
}

export function Seg<V extends string>({ value, options, onChange }: { value: V; options: { value: V; label: string }[]; onChange: (v: V) => void }) {
  return (
    <div className="seg" role="group">
      {options.map((o) => (
        <button key={o.value} className={o.value === value ? 'on' : ''} aria-pressed={o.value === value} onClick={() => onChange(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Toggle({ on, label, onChange }: { on: boolean; label: string; onChange: (v: boolean) => void }) {
  return (
    <button className={on ? 'on' : ''} aria-pressed={on} onClick={() => onChange(!on)}>
      {on ? '☑' : '☐'} {label}
    </button>
  );
}

export function Readout({ k, v, hl }: { k: string; v: ReactNode; hl?: boolean }) {
  return (
    <div className={`readout${hl ? ' hl' : ''}`}>
      <div className="k">{k}</div>
      <div className="v">{v}</div>
    </div>
  );
}

/** "◀ ก่อนหน้า  2 / 5  ถัดไป ▶" buttons for step-through widgets. */
export function StepNav({ i, n, setI }: { i: number; n: number; setI: (i: number) => void }) {
  return (
    <div className="step-nav">
      <button className="btn ghost" onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0}>
        ◀ ก่อนหน้า
      </button>
      <span className="small">
        ขั้นที่ {i + 1} / {n}
      </span>
      <button className="btn" onClick={() => setI(Math.min(n - 1, i + 1))} disabled={i === n - 1}>
        ถัดไป ▶
      </button>
    </div>
  );
}

/** Arrow from (x1,y1) to (x2,y2). `cls` picks the colour class s-<cls>/f-<cls>. */
export function Arrow({ x1, y1, x2, y2, cls = 'accent', w = 2, head = 7, opacity = 1 }: {
  x1: number; y1: number; x2: number; y2: number; cls?: string; w?: number; head?: number; opacity?: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 0.5) return null;
  const ux = dx / len;
  const uy = dy / len;
  const h = Math.min(head, len * 0.6);
  const bx = x2 - ux * h;
  const by = y2 - uy * h;
  const px = -uy * h * 0.5;
  const py = ux * h * 0.5;
  return (
    <g opacity={opacity}>
      <line x1={x1} y1={y1} x2={bx} y2={by} className={`s-${cls}`} strokeWidth={w} strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${bx + px},${by + py} ${bx - px},${by - py}`} className={`f-${cls}`} />
    </g>
  );
}
