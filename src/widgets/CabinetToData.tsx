// =====================================================================
// Widget: from a specimen in a cabinet to research, along the two routes
// the deck calls "current research in natural history museums" (slide 10):
// Museomics (DNA) and Digitization (images + metadata). Steps and examples
// are the slides'; the step order is the site's way of laying them out.
// Each step shows the slide it comes from (`fig`). Edit `routes` to
// change a step.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { Seg, StepNav, T, WidgetFrame } from '../components/ui';

const routes = {
  dna: {
    label: '🧬 Museomics',
    steps: [
      { fig: 'c7-5', icon: '🗄️', t: 'ตัวอย่างในคลัง', s: 'ตัวอย่างสัตว์/พืชที่เก็บไว้หลายสิบถึงหลายร้อยปี พร้อม**ป้าย** (ที่ไหน เมื่อไร ใครเก็บ)' },
      { fig: 'c7-16', icon: '✂️', t: 'เก็บเนื้อเยื่อเล็กน้อย', s: 'ได้ **historical DNA (hDNA)** จากตัวอย่างพิพิธภัณฑ์/หอพรรณไม้ หรือ **ancient DNA (aDNA)** จากซากโบราณ' },
      { fig: 'c7-17', icon: '🧬', t: 'อ่านลำดับ DNA', s: 'museum + genomics = **museomics**' },
      { fig: 'c7-20', icon: '⚖️', t: 'เทียบอดีตกับปัจจุบัน', s: 'เช่น **Balto** สุนัขลากเลื่อนอะแลสกา มีบรรพบุรุษร่วมกับสายพันธุ์สุนัขเอเชียและอาร์กติกปัจจุบัน (Moon et al., 2023)' },
    ],
  },
  digi: {
    label: '💻 Digitization',
    steps: [
      { fig: 'c7-5', icon: '🗄️', t: 'ตัวอย่างในคลัง', s: 'แมลงที่ปักเข็ม นกสตัฟฟ์ ฟอสซิล พร้อมป้าย' },
      { fig: 'c7-26', icon: '📷', t: 'ถ่ายภาพ/สแกน', s: '**ALICE**: กล้องหลายตัวถ่ายตัวอย่างและป้ายพร้อมกัน · **3D scanning** เช่น กะโหลก Toxodon ที่ Darwin เก็บ' },
      { fig: 'c7-22', icon: '🏷️', t: 'บันทึก metadata', s: 'สถานที่ **georeference** (ละติจูด ลองจิจูด) ความสูง อนุกรมวิธาน เพศ เวลา ผู้เก็บ หมายเลขทะเบียน …' },
      { fig: 'c7-25', icon: '🌐', t: 'เผยแพร่ฐานข้อมูล', s: 'คลังท้องถิ่น **NHM Data Portal** → คลังระดับโลก **GBIF** (เข้าถึงฟรี) = big data' },
      { fig: 'c7-27', icon: '🤖', t: 'ใช้ AI/computer vision', s: '**ระบุชนิด**ด้วงจากภาพ (CNN) · **วัดขนาด**ปีกผีเสื้อนับแสนตัว (Mothra) เพื่อดูผลของอุณหภูมิ' },
    ],
  },
};
type R = keyof typeof routes;

export function CabinetToData() {
  const [r, setR] = useState<R>('dna');
  const [i, setI] = useState(0);
  const steps = routes[r].steps;
  return (
    <WidgetFrame
      title="จากตู้เก็บตัวอย่าง สู่งานวิจัย"
      notice="ตัวอย่างชิ้นเดียวใช้ได้ 2 ทาง: **museomics** ใช้ DNA ในตัวอย่าง · **digitization** ใช้ภาพและข้อมูลบนป้าย — ทั้งสองทางทำให้**เทียบอดีตกับปัจจุบัน**ได้"
      onReset={() => { setR('dna'); setI(0); }}
    >
      <Seg value={r} options={(Object.keys(routes) as R[]).map((k) => ({ value: k, label: routes[k].label }))} onChange={(v) => { setR(v); setI(0); }} />
      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'center', margin: '12px 0 4px', flexWrap: 'wrap' }}>
        {steps.map((s, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={s.t}
            style={{ fontSize: '1.4rem', width: 44, height: 44, borderRadius: 22, border: `2px solid ${k === i ? 'var(--accent)' : 'var(--line)'}`, background: k <= i ? 'var(--card)' : 'transparent', opacity: k <= i ? 1 : 0.4, cursor: 'pointer' }}
          >
            {s.icon}
          </button>
        ))}
      </div>
      <SlideFig id={steps[i].fig} />
      <div className="step-text">
        <b>{i + 1}. {steps[i].t}</b>
        <br />
        <T>{steps[i].s}</T>
      </div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
