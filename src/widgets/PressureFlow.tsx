// =====================================================================
// Widget: step through the pressure-flow (Münch) model, plant 5.4
// slides 32–35, on the slide's own figure: xylem (left), sieve tube with
// companion cells (middle), source cell (top right), sink cell (bottom
// right), with the Ψ numbers. Each step darkens everything except the
// part it talks about (`spot`, percent of the picture).
// To change wording, edit `steps`.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { StepNav, T, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

const spots: Record<string, Box> = {
  source: [17, 2, 47, 38],
  'water-in': [0, 2, 30, 38],
  flow: [17, 30, 29, 68],
  sink: [17, 55, 47, 97],
  'water-out': [0, 60, 30, 97],
};

const steps = [
  { at: 'source', text: '**โหลดน้ำตาลที่ source:** sucrose จาก mesophyll เข้าสู่ companion cell และ sieve element (ทาง symplast และ apoplast — จาก apoplast ใช้พลังงาน: H⁺-ATPase + sucrose-H⁺ symporter)' },
  { at: 'water-in', text: '**น้ำเข้าตาม:** Ψs ใน sieve element ลดลงมาก (−1.7) → น้ำออสโมซิสจากไซเลมเข้ามา → เกิด**แรงดันบวกสูง** Ψp = +0.6 MPa' },
  { at: 'flow', text: '**ไหลแบบ bulk flow:** ความต่างของ hydrostatic pressure (0.6 → 0.3 MPa) ดัน phloem sap จาก source ไป sink' },
  { at: 'sink', text: '**ปล่อยน้ำตาลที่ sink:** น้ำตาลออกจาก sieve element ไปยังเซลล์ที่ใช้ (ตามสไลด์: แบบ diffusion) → Ψs สูงขึ้น (−0.7)' },
  { at: 'water-out', text: '**น้ำออก:** น้ำออกจาก sieve element กลับสู่ไซเลม แรงดันที่ sink จึงต่ำกว่า (Ψp = 0.3) · ระวัง: Ψw ที่ sink (−0.4) "สูงกว่า" ที่ source (−1.1) แต่ sap ไหลตาม**ความดัน**' },
];

export function PressureFlow() {
  const [i, setI] = useState(0);
  const at = steps[i].at;
  return (
    <WidgetFrame
      title="Pressure-flow model ทีละขั้น"
      notice="น้ำตาลเข้า → น้ำตาม → แรงดันสูง → ไหลไปที่แรงดันต่ำ · ไซเลม (ซ้าย) กับโฟลเอ็ม (ขวา) ส่งน้ำวนกันไปมา"
      onReset={() => setI(0)}
    >
      <SlideFig id="p4-31" spot={spots[at]} />
      <div className="step-text">
        <T>{steps[i].text}</T>
      </div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
