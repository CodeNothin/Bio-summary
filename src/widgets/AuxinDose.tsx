// =====================================================================
// Widget: the same auxin concentration affects root and shoot differently
// (plant 5.5 slides 19, 37). Drag the slider along the concentration
// axis; the readout says whether root and coleoptile growth is
// stimulated or inhibited. The two bell curves are drawn to match the
// slide's sketch (root peaks at a much lower concentration).
// =====================================================================
import { useState } from 'react';
import { Slider, WidgetFrame } from '../components/ui';

/** Response (−1…+1) of tissue with optimum at `peak` (on a 0–1 log-like axis). */
const response = (x: number, peak: number, width: number) => {
  const r = Math.exp(-(((x - peak) / width) ** 2)) * 1.25 - 0.25;
  return x > peak + width * 1.2 ? Math.max(-1, r - (x - peak - width * 1.2) * 3) : r;
};
const root = (x: number) => response(x, 0.25, 0.13);
const shoot = (x: number) => response(x, 0.62, 0.15);
const word = (r: number) => (r > 0.08 ? 'กระตุ้น ↑' : r < -0.08 ? 'ยับยั้ง ↓' : 'ไม่มีผล');

export function AuxinDose() {
  const [x, setX] = useState(0.6);
  const W = 280;
  const H = 140;
  const px = (v: number) => 20 + v * (W - 30);
  const py = (r: number) => 70 - r * 52;
  const path = (f: (v: number) => number) =>
    Array.from({ length: 101 }, (_, i) => i / 100).map((v, i) => `${i ? 'L' : 'M'}${px(v).toFixed(1)} ${py(Math.max(-1.2, f(v))).toFixed(1)}`).join(' ');
  return (
    <WidgetFrame
      title="ความเข้มข้นออกซิน: ราก vs ยอด"
      notice="ความเข้มข้นที่**กระตุ้นยอด (coleoptile)** มากที่สุด กลับ**ยับยั้งราก** — เนื้อเยื่อต่างกันไวต่อฮอร์โมนไม่เท่ากัน"
      onReset={() => setX(0.6)}
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="stage" role="img" aria-label="กราฟการตอบสนองต่อออกซิน">
        <line x1={20} y1={70} x2={W - 8} y2={70} className="s-muted" strokeWidth={1} />
        <text x={22} y={14} className="small mut">กระตุ้น</text>
        <text x={22} y={134} className="small mut">ยับยั้ง</text>
        <path d={path(root)} className="f-none stroke-tone tone-yellow" strokeWidth={3} />
        <path d={path(shoot)} className="f-none stroke-tone tone-green" strokeWidth={3} />
        <text x={px(0.2)} y={py(1) - 4} className="small">ราก</text>
        <text x={px(0.6)} y={py(1) - 4} className="small">ยอด</text>
        <line x1={px(x)} y1={8} x2={px(x)} y2={H - 4} className="s-accent" strokeWidth={2} strokeDasharray="4 3" />
      </svg>
      <div className="controls">
        <Slider label="ความเข้มข้นออกซิน →" value={x} min={0} max={1} step={0.01} onChange={setX} show={x < 0.35 ? 'ต่ำ' : x < 0.7 ? 'ปานกลาง' : 'สูง'} />
      </div>
      <div className="readouts">
        <div className="readout"><div className="k">ราก</div><div className="v">{word(root(x))}</div></div>
        <div className="readout"><div className="k">ยอด (coleoptile)</div><div className="v">{word(shoot(x))}</div></div>
      </div>
    </WidgetFrame>
  );
}
