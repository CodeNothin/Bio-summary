// =====================================================================
// Widget: a dicot stem going from primary to secondary growth, on the
// slide photos (plant 5.1 slides 38–41, ต้นหมอน้อย): near the tip the
// bundles are separate (primary growth); further down the vascular
// cambium joins them into a ring and makes secondary xylem/phloem.
// Each step shows one photo; `spot` boxes (percent of the picture)
// point at what the step talks about. Edit `steps` to change wording.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import type { Box } from '../data/figures';
import { StepNav, T, WidgetFrame } from '../components/ui';

const steps: { fig: string; spot?: Box; t: string; s: string }[] = [
  {
    fig: 'p1-38', spot: [37, 20, 93, 98], t: 'ลำต้นส่วนใกล้ยอด: primary growth',
    s: 'ยังไม่มีการขยายขนาดด้านข้าง — vascular tissue เป็น**มัดแยกกัน** (มัดสีแดง = โฟลเอ็มด้านนอก + ไซเลมด้านใน)',
  },
  {
    fig: 'p1-39', spot: [40, 18, 99, 88], t: 'ลำต้นส่วนไกลยอด: secondary growth',
    s: '**vascular cambium** (เนื้อเยื่อเจริญด้านข้าง) แบ่งเซลล์ เซลล์ใหม่เปลี่ยนไปเป็น **secondary xylem** และ **secondary phloem** — vascular tissue **เชื่อมต่อกันเป็นวง** ลำต้นจึงขยายขนาด',
  },
  {
    fig: 'p1-41', spot: [2, 31, 98, 50], t: 'vascular cambium (ภาพขยาย)',
    s: 'ลูกศรชี้แถวเซลล์ vascular cambium — เซลล์ที่เกิดขึ้นด้านในเป็น secondary xylem (ผนังติดสีแดง) ด้านนอกเป็น secondary phloem',
  },
];

export function SecondaryGrowth() {
  const [i, setI] = useState(0);
  const s = steps[i];
  return (
    <WidgetFrame
      title="จาก primary สู่ secondary growth"
      notice="กดถัดไป: ใกล้ยอด มัดท่อลำเลียง**แยกกัน** → ไกลยอด vascular cambium ทำให้ vascular tissue **เชื่อมเป็นวง** และสร้าง secondary xylem/phloem ลำต้นจึงอ้วนขึ้น"
      onReset={() => setI(0)}
    >
      <SlideFig id={s.fig} spot={s.spot} />
      <div className="step-text">
        <b>{i + 1}. {s.t}</b>
        <br />
        <T>{s.s}</T>
      </div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
