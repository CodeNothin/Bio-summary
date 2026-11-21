// =====================================================================
// Widget: hearts of vertebrates (animal 5.4 slides 86–89). Pick an
// animal group; its column of the slide-89 figure is highlighted (the
// figure also has the slide's table of loops and chambers).
// Decision (user, TODO 3): amphibians = 3 chambers; the slide table's
// "4 (incomplete)" for turtles/lizards = ventricle only partly divided.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Readout, Seg, T, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

/** each group's column on slide 89 (percent of the picture) */
const cols: Record<string, Box> = {
  fish: [0, 0, 27, 68],
  frog: [26, 0, 49, 68],
  reptile: [48, 0, 71, 68],
  full: [70, 0, 99, 68],
};

const groups = {
  fish: { label: 'ปลา', loops: 1, atria: 1, vent: 1, septum: 'none', text: 'วงจรเดียว (single circulation) · หัวใจ 2 ห้อง (1A 1V) · ventricle → เหงือก → ร่างกาย → กลับหัวใจ — ความดันลดลงหลังผ่านเหงือก เลือดจึงไหลช้า' },
  frog: { label: 'กบ', loops: 2, atria: 2, vent: 1, septum: 'none', text: 'กลุ่มแรกที่เป็น 2 วงจร (pulmocutaneous + systemic) · หัวใจ **3 ห้อง** (2A 1V)' },
  reptile: { label: 'เต่า/กิ้งก่า', loops: 2, atria: 2, vent: 1, septum: 'partial', text: '2 วงจร · ตารางในสไลด์เขียน "4 (incomplete)" = ventricle มีผนังกั้น**ไม่สมบูรณ์**' },
  full: { label: 'จระเข้ นก สัตว์เลี้ยงลูกด้วยนม', loops: 2, atria: 2, vent: 2, septum: 'full', text: '2 วงจร (pulmonary + systemic) · หัวใจ **4 ห้อง** (2A 2V) เลือดที่มี O₂ สูงและต่ำไม่ปนกัน' },
} as const;
type K = keyof typeof groups;

export function VertebrateHearts() {
  const [k, setK] = useState<K>('fish');
  const g = groups[k];
  return (
    <WidgetFrame
      title="หัวใจสัตว์มีกระดูกสันหลัง"
      notice="นับ **จำนวนวงจร** (ผ่านหัวใจกี่ครั้งต่อรอบ) กับ **จำนวนห้อง** — ผนังกั้น ventricle ค่อย ๆ สมบูรณ์ขึ้นจากกบ → เต่า → สัตว์เลี้ยงลูกด้วยนม"
      onReset={() => setK('fish')}
    >
      <How>เลือกกลุ่มสัตว์ด้านล่าง — ภาพจะเน้นหัวใจของกลุ่มนั้น</How>
      <Seg value={k} options={(Object.keys(groups) as K[]).map((x) => ({ value: x, label: groups[x].label }))} onChange={setK} />
      <div style={{ marginTop: 8 }}>
        <SlideFig id="a5-89" spot={cols[k]} />
      </div>
      <div className="readouts">
        <Readout k="จำนวนวงจร" v={g.loops === 1 ? '1 วงจร' : '2 วงจร'} />
        <Readout k="จำนวนห้อง" v={`${g.atria + g.vent} ห้อง (${g.atria}A ${g.vent}V)${g.septum === 'partial' ? ' — V แบ่งไม่สมบูรณ์' : ''}`} hl />
      </div>
      <p className="small" style={{ marginTop: 6 }}><T>{g.text}</T></p>
    </WidgetFrame>
  );
}
