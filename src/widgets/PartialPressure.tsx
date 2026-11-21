// =====================================================================
// Widget: partial pressures of O₂ and CO₂ around the body (animal 5.5
// slide 124, numbers in mmHg exactly as the figure). Tap a stop to see
// PO₂/PCO₂ and which way each gas diffuses next (high → low). The tap
// points sit on the figure's numbered circles (`at`, percent of the picture).
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { WidgetFrame } from '../components/ui';

const stops = [
  { id: 'in', n: 1, at: [50, 21] as [number, number], name: 'อากาศหายใจเข้า', po2: '160', pco2: '0.2', note: 'O₂ สูงมาก CO₂ แทบไม่มี' },
  { id: 'alv', n: 2, at: [50, 31.5] as [number, number], name: 'ถุงลม (alveolar spaces)', po2: '104', pco2: '40', note: 'O₂ แพร่จากถุงลม (104) เข้าเลือดที่มาจากหัวใจ (40) · CO₂ แพร่จากเลือด (45) ออกสู่ถุงลม (40)' },
  { id: 'art', n: 3, at: [50, 51] as [number, number], name: 'pulmonary vein / systemic artery', po2: '104', pco2: '40', note: 'เลือดออกจากปอดมี O₂ เท่ากับในถุงลม' },
  { id: 'tis', n: 4, at: [17.5, 67.5] as [number, number], name: 'เนื้อเยื่อร่างกาย', po2: '< 40', pco2: '> 45', note: 'O₂ แพร่จากเลือด (104) เข้าเนื้อเยื่อ (<40) · CO₂ แพร่จากเนื้อเยื่อ (>45) เข้าเลือด' },
  { id: 'ven', n: 5, at: [17.5, 44] as [number, number], name: 'systemic vein / pulmonary artery', po2: '40', pco2: '45', note: 'เลือดกลับหัวใจแล้วไปปอดอีกรอบ' },
  { id: 'out', n: 6, at: [19, 21] as [number, number], name: 'อากาศหายใจออก', po2: '120', pco2: '27', note: 'ผสมระหว่างอากาศในทางเดินหายใจกับอากาศในถุงลม' },
];

export function PartialPressure() {
  const [i, setI] = useState(1);
  const s = stops[i];
  return (
    <WidgetFrame
      title="ความดันย่อย O₂ / CO₂ (mmHg)"
      notice="แก๊สแพร่จาก**ความดันย่อยสูง → ต่ำ** เสมอ — ที่ปอด O₂ เข้าเลือด CO₂ ออก · ที่เนื้อเยื่อกลับกัน"
      onReset={() => setI(1)}
    >
      <SlideFig
        id="a5-124"
        selected={s.id}
        onPin={(id) => setI(stops.findIndex((x) => x.id === id))}
        pins={stops.map((x) => ({ id: x.id, at: x.at, n: x.n, label: x.name }))}
      />
      <p className="small" style={{ margin: '0 0 4px' }}>
        <b>{s.n}. {s.name}</b>
      </p>
      <div className="readouts">
        <div className="readout hl"><div className="k">PO₂</div><div className="v">{s.po2}</div></div>
        <div className="readout"><div className="k">PCO₂</div><div className="v">{s.pco2}</div></div>
      </div>
      <p className="step-text">{s.note}</p>
    </WidgetFrame>
  );
}
