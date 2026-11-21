// =====================================================================
// Widget: hearts of vertebrates (animal 5.4 slides 86–89). Pick an
// animal group; the drawing shows its chambers and number of circuits.
// Decision (user, TODO 3): amphibians = 3 chambers; the slide table's
// "4 (incomplete)" for turtles/lizards = ventricle only partly divided.
// =====================================================================
import { useState } from 'react';
import { Seg, T, WidgetFrame } from '../components/ui';

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
      <Seg value={k} options={(Object.keys(groups) as K[]).map((x) => ({ value: x, label: groups[x].label }))} onChange={setK} />
      <svg viewBox="0 0 240 150" className="stage" style={{ marginTop: 8 }} role="img" aria-label="ภาพหัวใจ">
        {g.atria === 1 ? (
          <rect x={80} y={16} width={80} height={44} rx={12} className="fill-tone tone-purple" />
        ) : (
          <>
            <rect x={70} y={16} width={48} height={44} rx={12} className="fill-tone tone-blue" />
            <rect x={122} y={16} width={48} height={44} rx={12} className="fill-tone tone-red" />
          </>
        )}
        {g.vent === 1 ? (
          <rect x={70} y={66} width={100} height={66} rx={22} className={`fill-tone ${g.atria === 1 ? 'tone-purple' : 'tone-purple'}`} />
        ) : (
          <>
            <rect x={70} y={66} width={48} height={66} rx={18} className="fill-tone tone-blue" />
            <rect x={122} y={66} width={48} height={66} rx={18} className="fill-tone tone-red" />
          </>
        )}
        {g.septum === 'partial' && <rect x={117} y={96} width={6} height={36} className="fill-tone tone-grey" />}
        <text x={190} y={40} className="small">atrium × {g.atria}</text>
        <text x={190} y={100} className="small">ventricle × {g.vent}</text>
        <text x={6} y={144} className="small">{g.loops === 1 ? '1 วงจร' : '2 วงจร'} · {g.atria + g.vent} ห้อง{g.septum === 'partial' ? ' (ventricle แบ่งไม่สมบูรณ์)' : ''}</text>
      </svg>
      <p className="small" style={{ marginTop: 6 }}><T>{g.text}</T></p>
    </WidgetFrame>
  );
}
