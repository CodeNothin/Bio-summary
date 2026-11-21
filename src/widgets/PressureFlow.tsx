// =====================================================================
// Widget: step through the pressure-flow (Münch) model, plant 5.4
// slides 32–35. The drawing shows a xylem tube (left) and a sieve tube
// (right) between a source (top, leaf) and a sink (bottom, root/fruit),
// with the slide's Ψ numbers. Each step highlights what happens.
// To change wording, edit `steps`.
// =====================================================================
import { useState } from 'react';
import { Arrow, StepNav, T, WidgetFrame } from '../components/ui';

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
  const on = (k: string) => (at === k ? 1 : 0.25);
  return (
    <WidgetFrame
      title="Pressure-flow model ทีละขั้น"
      notice="น้ำตาลเข้า → น้ำตาม → แรงดันสูง → ไหลไปที่แรงดันต่ำ · ไซเลม (ซ้าย) กับโฟลเอ็ม (ขวา) ส่งน้ำวนกันไปมา"
      onReset={() => setI(0)}
    >
      <svg viewBox="0 0 300 230" className="stage" role="img" aria-label="แบบจำลอง pressure flow">
        {/* tubes */}
        <rect x={70} y={20} width={34} height={190} rx={6} className="fill-tone tone-water" />
        <rect x={170} y={20} width={34} height={190} rx={6} className="fill-tone tone-yellow" opacity={0.7} />
        <text x={87} y={14} textAnchor="middle" className="small">ไซเลม</text>
        <text x={187} y={14} textAnchor="middle" className="small">sieve tube</text>
        {/* source and sink cells */}
        <rect x={218} y={26} width={66} height={44} rx={10} className="fill-tone tone-green" opacity={0.3 + 0.7 * on('source')} />
        <text x={251} y={52} textAnchor="middle" className="small">source</text>
        <rect x={218} y={160} width={66} height={44} rx={10} className="fill-tone tone-orange" opacity={0.3 + 0.7 * on('sink')} />
        <text x={251} y={186} textAnchor="middle" className="small">sink</text>
        {/* sugar */}
        <g opacity={0.3 + 0.7 * on('source')}><Arrow x1={218} y1={48} x2={206} y2={48} cls="accent" w={3} /></g>
        <g opacity={0.3 + 0.7 * on('sink')}><Arrow x1={206} y1={182} x2={218} y2={182} cls="accent" w={3} /></g>
        {/* water from xylem in at the top, out at the bottom */}
        <g opacity={0.25 + 0.75 * on('water-in')}><Arrow x1={106} y1={56} x2={168} y2={56} cls="blue" w={3} /><text x={137} y={50} textAnchor="middle" className="small">H₂O</text></g>
        <g opacity={0.25 + 0.75 * on('water-out')}><Arrow x1={168} y1={176} x2={106} y2={176} cls="blue" w={3} /><text x={137} y={170} textAnchor="middle" className="small">H₂O</text></g>
        {/* bulk flow down the sieve tube, transpiration stream up the xylem */}
        <g opacity={0.25 + 0.75 * on('flow')}><Arrow x1={187} y1={72} x2={187} y2={156} cls="bad" w={4} head={10} /></g>
        <Arrow x1={87} y1={196} x2={87} y2={80} cls="blue" w={2} opacity={0.5} />
        {/* numbers from the slide */}
        <text x={6} y={64} className="small mut">Ψw −0.8</text>
        <text x={6} y={182} className="small mut">Ψw −0.6</text>
        <text x={110} y={92} className="small">Ψw −1.1</text>
        <text x={110} y={104} className="small">Ψp +0.6</text>
        <text x={110} y={140} className="small">Ψw −0.4</text>
        <text x={110} y={152} className="small">Ψp +0.3</text>
      </svg>
      <div className="step-text">
        <T>{steps[i].text}</T>
      </div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
