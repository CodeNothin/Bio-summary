// =====================================================================
// Widget: the two kidney control loops (animal 5.7 slides 136–137),
// step by step: ADH for blood osmolarity, RAAS for blood pressure/volume,
// on the slide figures; each step lights up its part (`spots`, percent
// of the slide page).
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { Seg, StepNav, T, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

const figs = { adh: 'a5-136', raas: 'a5-137' };
const spots: Record<string, Box[]> = {
  adh: [[14, 50, 37, 66], [15, 24, 82, 40], [40, 34, 58, 56], [50, 34, 94, 74], [40, 78, 64, 94]],
  raas: [[66, 35, 84, 50], [53, 46, 84, 92], [5, 52, 35, 93], [5, 35, 58, 52], [4, 24, 70, 38]],
};

const loops = {
  adh: [
    '**สิ่งเร้า:** osmolarity ของเลือดเพิ่มขึ้น (เช่น เหงื่อออกมาก)',
    '**osmoreceptor** ในไฮโปทาลามัสตรวจพบ → ไฮโปทาลามัสทำให้**กระหายน้ำ**',
    'ต่อมใต้สมองส่วนหลังปล่อย **ADH (vasopressin)**',
    'ADH เพิ่ม permeability ของ **collecting duct** → ดูดน้ำกลับมากขึ้น (ปัสสาวะเข้มข้น) + ดื่มน้ำ',
    'osmolarity กลับสู่ปกติ (~300 mOsm/L) → ADH ลดลง (negative feedback)',
  ],
  raas: [
    '**สิ่งเร้า:** ความดันหรือปริมาตรเลือดลดลง (เช่น ขาดน้ำ เสียเลือด)',
    'ตัวรับใน **JGA** (juxtaglomerular apparatus) ตรวจพบ → JGA หลั่ง **renin**',
    'renin เปลี่ยน **angiotensinogen** (จากตับ) → angiotensin I → (ACE) → **angiotensin II**',
    'angiotensin II: **หลอดเลือดแดงเล็กหดตัว** + กระตุ้น **adrenal gland** หลั่ง **aldosterone**',
    'aldosterone → distal tubule **ดูดกลับ Na⁺ และน้ำ** → ความดันและปริมาตรเลือดกลับสู่ปกติ · (ANF จากหัวใจทำงานตรงข้าม RAAS: ลดน้ำและโซเดียม)',
  ],
};
type K = keyof typeof loops;

export function KidneyControl() {
  const [k, setK] = useState<K>('adh');
  const [i, setI] = useState(0);
  const steps = loops[k];
  return (
    <WidgetFrame
      title="การควบคุมการทำงานของไต"
      notice="**ADH** ตอบสนองต่อ osmolarity (น้ำน้อย/เกลือมาก) · **RAAS** ตอบสนองต่อความดัน/ปริมาตรเลือดต่ำ · ทั้งสองเป็น negative feedback"
      onReset={() => { setK('adh'); setI(0); }}
    >
      <Seg value={k} options={[{ value: 'adh', label: 'ADH' }, { value: 'raas', label: 'RAAS' }]} onChange={(v) => { setK(v); setI(0); }} />
      <div style={{ marginTop: 8 }}>
        <SlideFig id={figs[k]} spot={spots[k][i]} />
      </div>
      <div className="step-text"><T>{steps[i]}</T></div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
