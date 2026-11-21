// =====================================================================
// Widget: the 4 steps of swallowing on the slide figure (animal 5.3
// slide 59): each step darkens all but the panel it talks about
// (`spot`, percent of the picture). Edit `steps` to change wording.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { StepNav, T, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

const steps = [
  { spot: [0, 0, 37, 82] as Box, airway: 'เปิด', food: 'ปิด', text: '**ยังไม่มีอาหาร:** esophageal sphincter หดตัว · epiglottis ยกขึ้น · glottis เปิด → หายใจได้' },
  { spot: [24, 0, 62, 82] as Box, airway: 'ปิด', food: 'เปิด', text: '**อาหารมาถึงคอหอย:** กระตุ้นการกลืน กล่องเสียง (larynx) และ glottis ยกตัวขึ้น · epiglottis เคลื่อนลงมาปิด' },
  { spot: [36, 0, 76, 60] as Box, airway: 'ปิด', food: 'เปิด', text: '**esophageal sphincter คลายตัว** อาหารเคลื่อนเข้าสู่หลอดอาหาร' },
  { spot: [62, 0, 100, 100] as Box, airway: 'เปิด', food: 'ปิด', text: '**peristalsis:** กล้ามเนื้อหด–คลายตัวเป็นจังหวะ ดันอาหารจากหลอดอาหารสู่กระเพาะ · ทางเดินหายใจกลับมาเปิด' },
];

export function Swallowing() {
  const [i, setI] = useState(0);
  const s = steps[i];
  return (
    <WidgetFrame
      title="การกลืน 4 ขั้น"
      notice="epiglottis เป็น “ฝาปิด” ทางเดินหายใจ — ตอนกลืน **ทางเดินหายใจปิด ทางเดินอาหารเปิด** อาหารจึงไม่ตกลงหลอดลม"
      onReset={() => setI(0)}
    >
      <SlideFig id="a5-59" spot={s.spot} />
      <div className="readouts">
        <div className="readout"><div className="k">ทางเดินหายใจ</div><div className="v">{s.airway}</div></div>
        <div className="readout"><div className="k">ทางเดินอาหาร</div><div className="v">{s.food}</div></div>
      </div>
      <div className="step-text"><T>{s.text}</T></div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
