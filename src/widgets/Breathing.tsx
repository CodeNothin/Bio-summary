// =====================================================================
// Widget: breathing in humans (animal 5.5 slides 121–122). Drag the
// slider between "หายใจออก" and "หายใจเข้า": rib muscles and diaphragm
// contract, chest volume rises, pressure falls below 760 mmHg (Boyle's
// law V ∝ 1/P) and air flows in. Pressure numbers are illustrative.
// The picture is the slide-122 figure; the inhalation or exhalation
// half is lit up to match the slider.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Readout, Slider, WidgetFrame } from '../components/ui';

export function Breathing() {
  const [t, setT] = useState(0.5); // 0 = full exhale, 1 = full inhale, 0.5 = rest
  const v = 1 + (t - 0.5) * 0.3; // relative chest volume
  // Boyle: P ∝ 1/V around atmospheric 760 mmHg at rest (only while air is still moving)
  const p = 760 / v;
  const flow = t > 0.55 ? 'in' : t < 0.45 ? 'out' : 'none';
  return (
    <WidgetFrame
      title="กลไกการหายใจ"
      notice="หายใจเข้า: **กล้ามเนื้อระหว่างซี่โครงหดตัว + กะบังลมหดตัว (เลื่อนลง)** → ช่องอกขยาย → ความดันในทรวงอก **ต่ำกว่า** บรรยากาศ → อากาศไหลเข้า (Boyle: V ∝ 1/P) · หายใจออกกลับกัน"
      onReset={() => setT(0.5)}
    >
      <How>เลื่อนแถบด้านล่างระหว่างหายใจออก ↔ หายใจเข้า — ภาพจะเน้นฝั่งที่ตรงกับจังหวะนั้น</How>
      <SlideFig id="a5-122" spot={flow === 'in' ? [9, 2, 46, 74] : flow === 'out' ? [48, 2, 92, 74] : null} />
      <p className="small" style={{ textAlign: 'center', margin: '0 0 4px' }}>
        <b>กะบังลม{t > 0.55 ? 'หดตัว เลื่อนลง' : t < 0.45 ? 'คลายตัว เลื่อนขึ้น' : ' — พัก'}</b>
      </p>
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
