// =====================================================================
// Widget: one parcel of air through a bird's lungs takes 2 breaths
// (animal 5.5 slide 119). Step through inhale 1 → exhale 1 → inhale 2 →
// exhale 2 on the slide figure (cycle 1 / cycle 2 panels); the panel of
// the current step is lit up (`spots`, percent of the picture).
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, StepNav, T, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

const spots: Record<string, Box> = {
  post: [45, 25, 67, 52],
  lung: [73, 25, 99, 52],
  ant: [45, 50, 67, 74],
  out: [73, 50, 99, 74],
};

const steps = [
  { where: 'post', text: '**หายใจเข้า ครั้งที่ 1:** อากาศบางส่วนเข้าปอด แต่**ส่วนใหญ่ไปที่ posterior air sac** (ถุงลมด้านหลัง)' },
  { where: 'lung', text: '**หายใจออก ครั้งที่ 1:** อากาศจาก posterior air sac **เคลื่อนผ่านปอด** — แลกเปลี่ยนแก๊สที่ท่อเล็ก ๆ **parabronchi**' },
  { where: 'ant', text: '**หายใจเข้า ครั้งที่ 2:** อากาศก้อนเดิมไปที่ anterior air sac (ถุงลมด้านหน้า)' },
  { where: 'out', text: '**หายใจออก ครั้งที่ 2:** อากาศก้อนเดิมออกทาง trachea · ทิศทางอากาศกับเลือดเป็นแบบ **cross-current** → แลกเปลี่ยนแก๊สได้มีประสิทธิภาพสูง' },
];

export function BirdAirSacs() {
  const [i, setI] = useState(0);
  const w = steps[i].where;
  return (
    <WidgetFrame
      title="ถุงลมของนก: อากาศ 1 ก้อนใช้ 2 รอบหายใจ"
      notice="นกมีถุงลม **8–9 ถุง** ทำหน้าที่คล้ายลูกสูบ อากาศไหลผ่านปอด**ทางเดียว** — ต่างจากปอดคนที่เป็นถุงตัน (เข้า–ออกทางเดิม)"
      onReset={() => setI(0)}
    >
      <How>กด ◀ ▶ ด้านล่างเพื่อไล่ทีละขั้น — ภาพจะเน้นถุงลม/ปอดที่อากาศอยู่ในขั้นนั้น</How>
      <SlideFig id="a5-119" spot={spots[w]} />
      <div className="step-text"><T>{steps[i].text}</T></div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
