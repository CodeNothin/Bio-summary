// =====================================================================
// Widget: one parcel of air through a bird's lungs takes 2 breaths
// (animal 5.5 slide 119). Step through inhale 1 → exhale 1 → inhale 2 →
// exhale 2 and watch where the coloured air parcel is.
// =====================================================================
import { useState } from 'react';
import { StepNav, T, WidgetFrame } from '../components/ui';

const steps = [
  { where: 'post', text: '**หายใจเข้า ครั้งที่ 1:** อากาศบางส่วนเข้าปอด แต่**ส่วนใหญ่ไปที่ posterior air sac** (ถุงลมด้านหลัง)' },
  { where: 'lung', text: '**หายใจออก ครั้งที่ 1:** อากาศจาก posterior air sac **เคลื่อนผ่านปอด** — แลกเปลี่ยนแก๊สที่ท่อเล็ก ๆ **parabronchi**' },
  { where: 'ant', text: '**หายใจเข้า ครั้งที่ 2:** อากาศก้อนเดิมไปที่ anterior air sac (ถุงลมด้านหน้า)' },
  { where: 'out', text: '**หายใจออก ครั้งที่ 2:** อากาศก้อนเดิมออกทาง trachea · ทิศทางอากาศกับเลือดเป็นแบบ **cross-current** → แลกเปลี่ยนแก๊สได้มีประสิทธิภาพสูง' },
];

export function BirdAirSacs() {
  const [i, setI] = useState(0);
  const w = steps[i].where;
  const pos = { post: [210, 90], lung: [140, 60], ant: [70, 90], out: [30, 20] }[w] as [number, number];
  return (
    <WidgetFrame
      title="ถุงลมของนก: อากาศ 1 ก้อนใช้ 2 รอบหายใจ"
      notice="นกมีถุงลม **8–9 ถุง** ทำหน้าที่คล้ายลูกสูบ อากาศไหลผ่านปอด**ทางเดียว** — ต่างจากปอดคนที่เป็นถุงตัน (เข้า–ออกทางเดิม)"
      onReset={() => setI(0)}
    >
      <svg viewBox="0 0 260 130" className="stage" role="img" aria-label="ปอดและถุงลมนก">
        <path d="M30 20 L30 50 L100 50" className="f-none stroke-tone tone-blue" strokeWidth={8} />
        <ellipse cx={70} cy={90} rx={34} ry={24} className="fill-tone tone-purple" opacity={0.5} />
        <text x={70} y={124} textAnchor="middle" className="small">anterior air sac</text>
        <rect x={100} y={40} width={80} height={36} rx={10} className="fill-tone tone-pink" />
        <text x={140} y={36} textAnchor="middle" className="small">ปอด (parabronchi)</text>
        <ellipse cx={210} cy={90} rx={36} ry={26} className="fill-tone tone-purple" opacity={0.5} />
        <text x={210} y={124} textAnchor="middle" className="small">posterior air sac</text>
        <circle cx={pos[0]} cy={pos[1]} r={10} className="fill-tone tone-yellow" stroke="var(--ink)" strokeWidth={1.5} />
      </svg>
      <div className="step-text"><T>{steps[i].text}</T></div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
