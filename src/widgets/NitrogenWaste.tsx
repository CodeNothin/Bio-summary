// =====================================================================
// Widget: ammonia vs urea vs uric acid (animal 5.7 slides 126–127).
// Pick a waste; bars show toxicity, solubility and water needed, plus
// which animals use it. Bars are qualitative (the slides give words,
// except "urea ~100,000× less toxic than ammonia").
// The slide-126 figure is shown with the chosen waste's column lit up.
// Decision (user, TODO 9): amphibians appear under BOTH ammonia and urea.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { Seg, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

const cols: Record<string, Box> = { nh3: [14, 62, 46, 100], urea: [46, 62, 76, 100], uric: [76, 62, 100, 100] };

const wastes = {
  nh3: { label: 'แอมโมเนีย', tox: 1, sol: 1, water: 1, animals: 'สัตว์ที่อาศัยในน้ำ: ปลากระดูกแข็งส่วนใหญ่ สัตว์สะเทินน้ำสะเทินบก', why: 'เกิดเป็นตัวแรก ละลายน้ำดี พิษสูงมาก → ต้องปล่อยทันที แพร่ผ่านเยื่อเซลล์สู่น้ำรอบตัว' },
  urea: { label: 'ยูเรีย', tox: 0.35, sol: 0.75, water: 0.55, animals: 'สัตว์บก: สัตว์เลี้ยงลูกด้วยนม สัตว์สะเทินน้ำสะเทินบก ปลากระดูกอ่อน (ฉลาม) ปลากระดูกแข็งบางชนิด', why: 'ตับสร้างจากแอมโมเนีย + CO₂ · พิษต่ำกว่าแอมโมเนีย ~100,000 เท่า → เก็บไว้ที่ความเข้มข้นสูงได้' },
  uric: { label: 'กรดยูริก', tox: 0.12, sol: 0.08, water: 0.1, animals: 'สัตว์ที่ต้องเก็บรักษาน้ำมาก ๆ: แมลง นก สัตว์เลื้อยคลาน หอยทากบก', why: 'พิษต่ำ ละลายน้ำได้น้อยมาก ขับออกเป็น semisolid → เสียน้ำน้อยที่สุด' },
} as const;
type K = keyof typeof wastes;

function Bar({ label, v }: { label: string; v: number }) {
  return (
    <div className="skill-row">
      <span>{label}</span>
      <span className="small">{v > 0.66 ? 'สูง' : v > 0.3 ? 'กลาง' : 'ต่ำ'}</span>
      <div className="bar"><i style={{ width: `${v * 100}%` }} /></div>
    </div>
  );
}

export function NitrogenWaste() {
  const [k, setK] = useState<K>('nh3');
  const w = wastes[k];
  return (
    <WidgetFrame
      title="ของเสียไนโตรเจน 3 แบบ"
      notice="ยิ่ง**พิษน้อย**และ**ละลายน้ำน้อย** ยิ่ง**ใช้น้ำขับน้อย** → สัตว์ที่ต้องประหยัดน้ำใช้กรดยูริก · สัตว์น้ำใช้แอมโมเนียได้เพราะมีน้ำเจือจางรอบตัว"
      onReset={() => setK('nh3')}
    >
      <Seg value={k} options={(Object.keys(wastes) as K[]).map((x) => ({ value: x, label: wastes[x].label }))} onChange={setK} />
      <div style={{ marginTop: 8 }}>
        <SlideFig id="a5-126" spot={cols[k]} />
      </div>
      <div style={{ marginTop: 6 }}>
        <Bar label="ความเป็นพิษ" v={w.tox} />
        <Bar label="การละลายน้ำ" v={w.sol} />
        <Bar label="น้ำที่ต้องใช้ขับออก" v={w.water} />
      </div>
      <div className="step-text">
        <b>{w.label}</b>: {w.why}
        <br />
        <span className="small">พบใน: {w.animals}</span>
      </div>
    </WidgetFrame>
  );
}
