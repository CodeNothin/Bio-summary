// =====================================================================
// Widget: factors that affect transpiration (plant 5.4 slide 24).
// Toggle light, drought, wind and high CO₂; the text says whether the
// stomata open or close and a bar shows the (qualitative) transpiration
// rate. The picture is the slide's photo (100 % RH inside, 70 % outside). This is a teaching
// model of the slide's four rules, not a measured relationship.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { Toggle, WidgetFrame } from '../components/ui';

export function Transpiration() {
  const [light, setLight] = useState(true);
  const [dry, setDry] = useState(false);
  const [wind, setWind] = useState(false);
  const [co2, setCo2] = useState(false);
  // stomatal opening 0–1 from the slide's rules
  let open = light ? 1 : 0.15;
  if (co2) open *= 0.5;
  if (dry) open = 0.05;
  const rate = open * (wind ? 1.5 : 1);
  const reasons = [
    light ? 'แสง → ปากใบเปิด' : 'มืด → ปากใบปิดเกือบหมด',
    dry && 'ขาดน้ำ (ความชื้นในดินต่ำ) → ปากใบปิด',
    co2 && 'CO₂ สูง → ปากใบเปิดน้อยลง',
    wind && 'ลม → พัดไอน้ำหน้าปากใบออก เพิ่มการคายน้ำ',
  ].filter(Boolean) as string[];
  return (
    <WidgetFrame
      title="ปัจจัยที่มีผลต่อการคายน้ำ"
      notice="แรงขับการคายน้ำคือ**ความต่างความเข้มข้นของไอน้ำ** (ในใบ 100% RH, นอกใบเช่น 70% RH) · ปากใบเปิดกว้าง = ไอน้ำแพร่ออกได้มาก · การคายน้ำยัง**ช่วยลดอุณหภูมิใบ**"
      onReset={() => { setLight(true); setDry(false); setWind(false); setCo2(false); }}
    >
      <SlideFig id="p4-22" />
      <p className="small" style={{ textAlign: 'center', margin: '0 0 4px' }}>
        <b>ปากใบ{open > 0.6 ? 'เปิดกว้าง' : open > 0.2 ? 'เปิดเล็กน้อย' : 'ปิด'}</b>
      </p>
      <div className="seg" style={{ marginTop: 8 }}>
        <Toggle on={light} label="มีแสง" onChange={setLight} />
        <Toggle on={dry} label="ขาดน้ำ" onChange={setDry} />
        <Toggle on={wind} label="มีลม" onChange={setWind} />
        <Toggle on={co2} label="CO₂ สูง" onChange={setCo2} />
      </div>
      <p className="small" style={{ margin: '8px 0 2px' }}>อัตราการคายน้ำ (เชิงเปรียบเทียบ)</p>
      <div className="bar">
        <i style={{ width: `${Math.min(100, rate * 66)}%` }} />
      </div>
      <ul className="small" style={{ marginTop: 6 }}>
        {reasons.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </WidgetFrame>
  );
}
