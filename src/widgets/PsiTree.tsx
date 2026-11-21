// =====================================================================
// Widget: the water-potential gradient from soil to air (plant 5.4 slide 9).
// The slide figure itself, with a tap point on each Ψ value along its
// left-hand scale (positions in percent of the picture). Tap to see
// the Ψ and which process moves water on. Values are the slide's.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, T, WidgetFrame } from '../components/ui';

const points = [
  { id: 'soil', at: [23, 91.5] as [number, number], psi: -0.3, name: 'น้ำในดิน', next: '(1) รากดูดน้ำด้วย **osmosis** — ขนรากมี Ψw ต่ำกว่าน้ำในดิน' },
  { id: 'root', at: [18.5, 86] as [number, number], psi: -0.6, name: 'ไซเลมในราก', next: 'น้ำผ่าน cortex → endodermis เข้าสู่ไซเลม แล้วถูกดึงขึ้น' },
  { id: 'trunk', at: [18.5, 60] as [number, number], psi: -0.8, name: 'ไซเลมในลำต้น', next: '(3) **transpiration pull: bulk flow** — สายน้ำยึดกันด้วย cohesion/adhesion' },
  { id: 'leafwall', at: [18.5, 35] as [number, number], psi: -1.0, name: 'ผนังเซลล์ใบ', next: 'น้ำระเหยเข้าช่องอากาศในใบ' },
  { id: 'airspace', at: [18.5, 29.5] as [number, number], psi: -7.0, name: 'ช่องอากาศในใบ', next: '(2) **transpiration: diffusion** — ไอน้ำแพร่ออกทางปากใบ' },
  { id: 'air', at: [18.5, 19.5] as [number, number], psi: -100, name: 'อากาศภายนอก', next: 'Ψ ต่ำที่สุด — ปลายทางของน้ำ' },
];

export function PsiTree() {
  const [sel, setSel] = useState('soil');
  const p = points.find((x) => x.id === sel)!;
  return (
    <WidgetFrame
      title="Ψ ลดลงจากดินสู่อากาศ"
      notice="แตะทีละจุดจากดินขึ้นไป — ค่า Ψ **ติดลบมากขึ้นเรื่อย ๆ** น้ำจึงไหลขึ้นเองตาม water potential gradient (ไซเลมใกล้รากมี Ψ สูงที่สุดในไซเลม)"
      onReset={() => setSel('soil')}
    >
      <How>แตะจุดตัวเลขบนภาพ เริ่มจากดิน (1) — ค่า Ψ ของจุดนั้นจะขึ้นใต้ภาพ</How>
      <SlideFig
        id="p4-9"
        selected={sel}
        onPin={setSel}
        pins={points.map((pt, k) => ({ id: pt.id, at: pt.at, n: k + 1, label: pt.name }))}
      />
      <div className="step-text">
        <b>{p.name}: Ψ = {p.psi} MPa</b>
        <br />
        <T>{p.next}</T>
      </div>
    </WidgetFrame>
  );
}
