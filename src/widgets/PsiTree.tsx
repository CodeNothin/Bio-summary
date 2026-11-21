// =====================================================================
// Widget: the water-potential gradient from soil to air (plant 5.4 slide 9).
// Tap a point on the tree to see its Ψ and which process moves water on
// to the next point. Values are exactly the slide's figure.
// =====================================================================
import { useState } from 'react';
import { T, WidgetFrame } from '../components/ui';

const points = [
  { id: 'soil', x: 70, y: 232, psi: -0.3, name: 'น้ำในดิน', next: '(1) รากดูดน้ำด้วย **osmosis** — ขนรากมี Ψw ต่ำกว่าน้ำในดิน' },
  { id: 'root', x: 120, y: 206, psi: -0.6, name: 'ไซเลมในราก', next: 'น้ำผ่าน cortex → endodermis เข้าสู่ไซเลม แล้วถูกดึงขึ้น' },
  { id: 'trunk', x: 120, y: 140, psi: -0.8, name: 'ไซเลมในลำต้น', next: '(3) **transpiration pull: bulk flow** — สายน้ำยึดกันด้วย cohesion/adhesion' },
  { id: 'leafwall', x: 150, y: 64, psi: -1.0, name: 'ผนังเซลล์ใบ', next: 'น้ำระเหยเข้าช่องอากาศในใบ' },
  { id: 'airspace', x: 176, y: 48, psi: -7.0, name: 'ช่องอากาศในใบ', next: '(2) **transpiration: diffusion** — ไอน้ำแพร่ออกทางปากใบ' },
  { id: 'air', x: 220, y: 24, psi: -100, name: 'อากาศภายนอก', next: 'Ψ ต่ำที่สุด — ปลายทางของน้ำ' },
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
      <svg viewBox="0 0 260 250" className="stage" role="img" aria-label="ต้นไม้และค่า water potential">
        <rect x={0} y={214} width={260} height={36} className="fill-tone tone-brown" opacity={0.45} />
        <rect x={112} y={70} width={16} height={146} rx={5} className="fill-tone tone-brown" />
        <path d="M120 214 L90 240 M120 214 L150 242 M120 214 L120 246" className="stroke-tone tone-brown" strokeWidth={4} />
        <ellipse cx={120} cy={60} rx={72} ry={44} className="fill-tone tone-green" opacity={0.9} />
        {points.map((pt) => (
          <g key={pt.id} onClick={() => setSel(pt.id)} style={{ cursor: 'pointer' }} role="button" aria-label={pt.name}>
            <circle cx={pt.x} cy={pt.y} r={16} fill="transparent" />
            <circle cx={pt.x} cy={pt.y} r={sel === pt.id ? 9 : 6} className={sel === pt.id ? 'f-accent' : 'f-card s-ink'} strokeWidth={1.5} />
            <text x={pt.x + 12} y={pt.y + 4} className="small">{pt.psi}</text>
          </g>
        ))}
      </svg>
      <div className="step-text">
        <b>{p.name}: Ψ = {p.psi} MPa</b>
        <br />
        <T>{p.next}</T>
      </div>
    </WidgetFrame>
  );
}
