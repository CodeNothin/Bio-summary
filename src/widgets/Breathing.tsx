// =====================================================================
// Widget: breathing in humans (animal 5.5 slides 121–122). Drag the
// slider between "หายใจออก" and "หายใจเข้า": rib muscles and diaphragm
// contract, chest volume rises, pressure falls below 760 mmHg (Boyle's
// law V ∝ 1/P) and air flows in. Pressure numbers are illustrative.
// =====================================================================
import { useState } from 'react';
import { Arrow, Readout, Slider, WidgetFrame } from '../components/ui';

export function Breathing() {
  const [t, setT] = useState(0.5); // 0 = full exhale, 1 = full inhale, 0.5 = rest
  const v = 1 + (t - 0.5) * 0.3; // relative chest volume
  // Boyle: P ∝ 1/V around atmospheric 760 mmHg at rest (only while air is still moving)
  const p = 760 / v;
  const diaY = 150 - (t - 0.5) * 30; // diaphragm moves DOWN on inhale
  const ribW = 70 + (t - 0.5) * 20;
  const flow = t > 0.55 ? 'in' : t < 0.45 ? 'out' : 'none';
  return (
    <WidgetFrame
      title="กลไกการหายใจ"
      notice="หายใจเข้า: **กล้ามเนื้อระหว่างซี่โครงหดตัว + กะบังลมหดตัว (เลื่อนลง)** → ช่องอกขยาย → ความดันในทรวงอก **ต่ำกว่า** บรรยากาศ → อากาศไหลเข้า (Boyle: V ∝ 1/P) · หายใจออกกลับกัน"
      onReset={() => setT(0.5)}
    >
      <svg viewBox="0 0 240 190" className="stage" role="img" aria-label="ทรวงอกและกะบังลม">
        <rect x={112} y={10} width={16} height={40} rx={5} className="fill-tone tone-blue" />
        <ellipse cx={120 - ribW / 2 - 4} cy={100} rx={ribW / 2} ry={42 + (t - 0.5) * 12} className="fill-tone tone-pink" />
        <ellipse cx={120 + ribW / 2 + 4} cy={100} rx={ribW / 2} ry={42 + (t - 0.5) * 12} className="fill-tone tone-pink" />
        <path d={`M30 ${diaY} Q120 ${diaY - 40} 210 ${diaY}`} className="f-none stroke-tone tone-brown" strokeWidth={8} strokeLinecap="round" />
        {flow === 'in' && <Arrow x1={120} y1={-2} x2={120} y2={30} cls="accent" w={4} />}
        {flow === 'out' && <Arrow x1={120} y1={30} x2={120} y2={-2} cls="bad" w={4} />}
        <text x={8} y={184} className="small">กะบังลม {t > 0.55 ? 'หดตัว เลื่อนลง' : t < 0.45 ? 'คลายตัว โค้งขึ้น' : ''}</text>
      </svg>
      <div className="controls">
        <Slider label="หายใจออก ← → หายใจเข้า" value={t} min={0} max={1} step={0.01} onChange={setT} show={flow === 'in' ? 'หายใจเข้า' : flow === 'out' ? 'หายใจออก' : 'พัก'} />
      </div>
      <div className="readouts">
        <Readout k="ปริมาตรช่องอก (เทียบตอนพัก)" v={`${Math.round(v * 100)}%`} />
        <Readout k="ความดันในทรวงอก (ประมาณ)" v={`${Math.round(p)} mmHg`} hl />
        <Readout k="อากาศ" v={flow === 'in' ? 'ไหลเข้า' : flow === 'out' ? 'ไหลออก' : 'ไม่ไหล (= 760 mmHg)'} />
      </div>
    </WidgetFrame>
  );
}
