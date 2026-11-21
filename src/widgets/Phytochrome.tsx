// =====================================================================
// Widget: flash red (R) or far-red (FR) light at a lettuce seed and watch
// phytochrome switch between Pr (inactive) and Pfr (active).
// Plant 5.5 slides 9–13: red → Pfr, far-red → Pr, and only the LAST
// flash decides whether the seed germinates.
// =====================================================================
import { useState } from 'react';
import { WidgetFrame } from '../components/ui';

export function Phytochrome() {
  const [seq, setSeq] = useState<('R' | 'FR')[]>([]);
  const last = seq[seq.length - 1];
  const pfr = last === 'R';
  const add = (x: 'R' | 'FR') => setSeq([...seq.slice(-5), x]);
  return (
    <WidgetFrame
      title="Phytochrome: Pr ⇄ Pfr"
      notice="กดแสงสลับกันหลายครั้ง — **ดูแค่แสงสุดท้าย**: red → Pfr (active) → เมล็ดผักกาดงอก · far-red → Pr (inactive) → ไม่งอก"
      onReset={() => setSeq([])}
    >
      <svg viewBox="0 0 300 130" className="stage" role="img" aria-label="phytochrome และเมล็ด">
        {/* Pr and Pfr boxes */}
        <rect x={20} y={20} width={90} height={40} rx={10} className={pfr ? 'fill-tone tone-grey' : 'fill-tone tone-blue'} />
        <text x={65} y={45} textAnchor="middle" className="big">Pr</text>
        <rect x={190} y={20} width={90} height={40} rx={10} className={pfr ? 'fill-tone tone-red' : 'fill-tone tone-grey'} />
        <text x={235} y={45} textAnchor="middle" className="big">Pfr</text>
        <path d="M115 32 L185 32" className="f-none s-red" strokeWidth={3} markerEnd="" />
        <polygon points="185,32 177,28 177,36" className="f-red" />
        <text x={150} y={26} textAnchor="middle" className="small">red</text>
        <path d="M185 50 L115 50" className="f-none s-ink" strokeWidth={3} />
        <polygon points="115,50 123,46 123,54" className="f-ink" />
        <text x={150} y={64} textAnchor="middle" className="small">far-red</text>
        <text x={65} y={74} textAnchor="middle" className="small mut">inactive</text>
        <text x={235} y={74} textAnchor="middle" className="small mut">active</text>
        {/* seed */}
        <ellipse cx={150} cy={106} rx={20} ry={12} className="fill-tone tone-brown" />
        {pfr && <path d="M150 96 Q152 82 160 78" className="f-none stroke-tone tone-green" strokeWidth={4} />}
        <text x={190} y={110} className="small">{seq.length === 0 ? 'มืด: ไม่งอก' : pfr ? 'งอก ✓' : 'ไม่งอก'}</text>
      </svg>
      <div className="seg" style={{ marginTop: 8 }}>
        <button onClick={() => add('R')} style={{ background: 'var(--t-red)', color: '#fff' }}>💡 Red</button>
        <button onClick={() => add('FR')} style={{ background: '#5b1f1f', color: '#fff' }}>💡 Far-red</button>
      </div>
      <p className="small" style={{ marginTop: 6 }}>ลำดับแสง: {seq.length ? seq.join(' → ') : '(ยังไม่ให้แสง)'}</p>
      <p className="small">
        ใต้ร่มไม้มี far-red มาก → Pr มาก → พืชรู้ว่าแสงน้อย → ยืดลำต้นหนีร่ม (shade avoidance) · ตอนเย็น red ลด → Pfr:Ptotal ลด → ใบจามจุรีหุบ (sleep movement) · ไถพรวนหน้าดิน → เมล็ดวัชพืชได้ red → งอก
      </p>
    </WidgetFrame>
  );
}
