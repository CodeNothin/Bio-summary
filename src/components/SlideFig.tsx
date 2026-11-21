// =====================================================================
// Shows one slide picture (src/data/figures.ts) with optional things on
// top of it. All positions are in percent of the picture.
//
//   <SlideFig id="a5-92" />                         just the picture
//   <SlideFig id="a5-94" spot={[0, 0, 50, 40]} />   darken everything
//                                                   except this box
//   <SlideFig id="a5-92" pins={[{ id: 'ra', at: [31, 52], tone: 'blue' }]}
//             selected="ra" onPin={setSel} />        tappable points
//   masks={[[x0, y0, x1, y1]]}                       cover printed labels
//
// Pins can be numbered (`n`) and dimmed (`dim` on the pin). A pin with
// `mark` is drawn green/red (label questions). The caption names the
// slide; "ดูภาพใหญ่" opens the image alone so it can be pinch-zoomed.
// =====================================================================
import type { ReactNode } from 'react';
import { fig, type Box } from '../data/figures';
import type { Tone } from '../data/types';

export interface Pin {
  id: string;
  at: [number, number];
  tone?: Tone;
  /** short text inside the dot (a number or letter) */
  n?: string | number;
  /** accessible name */
  label?: string;
  dim?: boolean;
}

export function SlideFig({
  id, spot, pins, selected, onPin, masks, mark, maxWidth = 560, caption = true, children,
}: {
  id: string;
  /** box to highlight; everything else is darkened */
  spot?: Box | null;
  pins?: Pin[];
  selected?: string | null;
  onPin?: (id: string) => void;
  masks?: Box[];
  /** colour one pin as right/wrong (label questions) */
  mark?: { id: string; ok: boolean } | null;
  maxWidth?: number;
  caption?: boolean;
  /** extra overlay elements, positioned in the same percent box */
  children?: ReactNode;
}) {
  const f = fig(id);
  const box = (b: Box) => ({ left: `${b[0]}%`, top: `${b[1]}%`, width: `${b[2] - b[0]}%`, height: `${b[3] - b[1]}%` });
  return (
    <figure className="slide-fig" style={{ maxWidth }}>
      <div className="slide-wrap" style={{ aspectRatio: `${f.w} / ${f.h}` }}>
        <img src={f.src} alt={f.caption} loading="lazy" decoding="async" draggable={false} />
        {masks?.map((m, i) => <div key={i} className="slide-mask" style={box(m)} />)}
        {spot && <div className="slide-spot" style={box(spot)} />}
        {children}
        {pins?.map((p) => {
          const cls = [
            'slide-pin',
            p.tone ? `tone-${p.tone}` : '',
            selected === p.id ? 'sel' : '',
            p.dim ? 'dim' : '',
            mark?.id === p.id ? (mark.ok ? 'mark-ok' : 'mark-bad') : '',
          ].join(' ');
          const style = { left: `${p.at[0]}%`, top: `${p.at[1]}%` };
          return onPin ? (
            <button key={p.id} type="button" className={cls} style={style} aria-label={p.label ?? p.id} onClick={() => onPin(p.id)}>
              {p.n}
            </button>
          ) : (
            <span key={p.id} className={cls} style={style} aria-hidden="true">
              {p.n}
            </span>
          );
        })}
      </div>
      {caption && (
        <figcaption className="small mut">
          ภาพจาก{f.caption} ·{' '}
          <a href={f.src} target="_blank" rel="noreferrer">
            ดูภาพใหญ่
          </a>
        </figcaption>
      )}
    </figure>
  );
}
