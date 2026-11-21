// =====================================================================
// Widget: the knee-jerk reflex arc, step by step (animal 5.6 slides
// 156–158) on the slide-158 figure: each step lights up its part —
// sensory receptor → sensory neuron → interneuron/integration center
// in the spinal cord → motor neuron → effector (quadriceps).
// `at` boxes are percent of the picture.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, StepNav, T, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

const steps = [
  { at: [20, 30, 42, 56] as Box, text: '**sensory receptor:** เคาะใต้เข่า กล้ามเนื้อต้นขาด้านหน้า (quadriceps) ถูกยืด ตัวรับการยืด (stretch receptor) ถูกกระตุ้น' },
  { at: [36, 26, 62, 52] as Box, text: '**sensory neuron:** นำกระแสประสาทเข้าสู่ไขสันหลัง (ตัวเซลล์อยู่ใน dorsal root ganglion)' },
  { at: [58, 28, 84, 66] as Box, text: '**integration center / interneuron** ในไขสันหลัง (gray matter) — ส่งต่อไป motor neuron และ interneuron ยับยั้งกล้ามเนื้อด้านหลัง (hamstring)' },
  { at: [38, 48, 80, 82] as Box, text: '**motor neuron:** นำคำสั่งออกจากไขสันหลังไปยังกล้ามเนื้อ' },
  { at: [16, 36, 46, 60] as Box, text: '**effector:** กล้ามเนื้อ quadriceps หดตัว → ขาเตะ — เกิดโดยอัตโนมัติ นอกอำนาจจิตใจ (involuntary)' },
];

export function ReflexArc() {
  const [i, setI] = useState(0);
  return (
    <WidgetFrame
      title="Reflex arc (กระตุกเข่า)"
      notice="วงจรประสาทอย่างง่าย: อย่างน้อยมี **sensory neuron + motor neuron** · สัญญาณไม่ต้องขึ้นไปถึงสมองก่อน จึงตอบสนองได้เร็ว"
      onReset={() => setI(0)}
    >
      <How>กด ◀ ▶ ด้านล่างเพื่อไล่ทีละขั้น — ภาพจะเน้นส่วนของ reflex arc ที่ขั้นนั้นพูดถึง</How>
      <SlideFig id="a5-158" spot={steps[i].at} />
      <div className="step-text"><T>{steps[i].text}</T></div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
