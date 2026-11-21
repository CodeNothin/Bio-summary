// =====================================================================
// Widget: the knee-jerk reflex arc, step by step (animal 5.6 slides
// 156–158). A simple leg + spinal-cord drawing; the signal (a dot) moves
// sensory receptor → sensory neuron → interneuron/integration center
// in the spinal cord → motor neuron → effector (quadriceps).
// =====================================================================
import { useState } from 'react';
import { StepNav, T, WidgetFrame } from '../components/ui';

const steps = [
  { at: [70, 150], text: '**sensory receptor:** เคาะใต้เข่า กล้ามเนื้อต้นขาด้านหน้า (quadriceps) ถูกยืด ตัวรับการยืด (stretch receptor) ถูกกระตุ้น' },
  { at: [140, 80], text: '**sensory neuron:** นำกระแสประสาทเข้าสู่ไขสันหลัง (ตัวเซลล์อยู่ใน dorsal root ganglion)' },
  { at: [212, 66], text: '**integration center / interneuron** ในไขสันหลัง (gray matter) — ส่งต่อไป motor neuron และ interneuron ยับยั้งกล้ามเนื้อด้านหลัง (hamstring)' },
  { at: [140, 120], text: '**motor neuron:** นำคำสั่งออกจากไขสันหลังไปยังกล้ามเนื้อ' },
  { at: [80, 120], text: '**effector:** กล้ามเนื้อ quadriceps หดตัว → ขาเตะ — เกิดโดยอัตโนมัติ นอกอำนาจจิตใจ (involuntary)' },
];

export function ReflexArc() {
  const [i, setI] = useState(0);
  const [x, y] = steps[i].at;
  return (
    <WidgetFrame
      title="Reflex arc (กระตุกเข่า)"
      notice="วงจรประสาทอย่างง่าย: อย่างน้อยมี **sensory neuron + motor neuron** · สัญญาณไม่ต้องขึ้นไปถึงสมองก่อน จึงตอบสนองได้เร็ว"
      onReset={() => setI(0)}
    >
      <svg viewBox="0 0 260 190" className="stage" role="img" aria-label="วงจรรีเฟล็กซ์">
        {/* spinal cord cross-section */}
        <circle cx={212} cy={74} r={34} className="fill-tone tone-grey" />
        <path d="M196 60 Q212 74 196 90 M228 60 Q212 74 228 90" className="f-none s-muted" strokeWidth={6} />
        <text x={212} y={124} textAnchor="middle" className="small">ไขสันหลัง</text>
        {/* thigh and lower leg */}
        <rect x={30} y={110} width={110} height={34} rx={14} className="fill-tone tone-pink" />
        <rect x={34} y={140} width={30} height={46} rx={10} className="fill-tone tone-pink" transform={i === 4 ? 'rotate(-35 49 142)' : undefined} />
        <rect x={40} y={112} width={90} height={14} rx={7} className="fill-tone tone-red" opacity={0.7} />
        <text x={86} y={108} textAnchor="middle" className="small">quadriceps</text>
        {/* neurons */}
        <path d="M70 118 Q120 60 190 70" className="f-none s-blue" strokeWidth={3} />
        <circle cx={150} cy={66} r={5} className="f-blue" />
        <path d="M210 80 Q170 130 90 122" className="f-none s-red" strokeWidth={3} />
        <text x={150} y={52} textAnchor="middle" className="small">sensory</text>
        <text x={150} y={140} textAnchor="middle" className="small">motor</text>
        {/* signal */}
        <circle cx={x} cy={y} r={8} className="fill-tone tone-yellow" stroke="var(--ink)" strokeWidth={1.5} />
      </svg>
      <div className="step-text"><T>{steps[i].text}</T></div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
