// =====================================================================
// Widget: what Svante Pääbo's ancient DNA showed (Unit 7 slides 13–15),
// step by step on the slide figures: slide 14 (map, Neandertal and
// Denisova Cave, the bone photos) for steps 1–3, slide 15 (tree with
// gene flows, globe with % of our DNA) for steps 4–6. Each step lights
// up its part (`spot`, percent of the picture). Edit `steps`.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, StepNav, T, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

const steps = [
  { fig: 'c7-14', spot: [3, 40, 82, 99] as Box, t: 'กระดูกในพิพิธภัณฑ์/แหล่งขุด', s: 'Pääbo สกัด DNA จาก**ชิ้นกระดูก**ของมนุษย์โบราณที่สูญพันธุ์ (extinct hominins) — นี่คือ **ancient DNA (aDNA)**' },
  { fig: 'c7-14', spot: [4, 42, 38, 99] as Box, t: 'นีแอนเดอร์ทัล (ตะวันตก)', s: 'ชิ้นกระดูก**นีแอนเดอร์ทัล**จากเยอรมนี — สถานที่ที่เป็นที่มาของชื่อ Neanderthal · อาศัยทาง**ตะวันตก**ของยูเรเชีย' },
  { fig: 'c7-14', spot: [44, 42, 82, 99] as Box, t: 'เดนิโซวัน (ตะวันออก)', s: '**กระดูกนิ้ว**จากถ้ำเดนิโซวา ทางใต้ของไซบีเรีย — ที่มาของชื่อ Denisovan · อาศัยทาง**ตะวันออก**ของยูเรเชีย' },
  { fig: 'c7-15', spot: [5, 70, 28, 98] as Box, t: 'Homo sapiens ออกจากแอฟริกา', s: '**Homo sapiens** อพยพออกจากแอฟริกาและกระจายไปทั่วโลก' },
  { fig: 'c7-15', spot: [3, 1, 38, 55] as Box, t: 'ผสมพันธุ์กัน (gene flow)', s: 'เมื่อ Homo sapiens กระจายไปทั่วทวีป ได้**ผสมพันธุ์**กับนีแอนเดอร์ทัลและเดนิโซวัน' },
  { fig: 'c7-15', spot: [0, 57, 37, 98] as Box, t: 'ร่องรอยใน DNA ของเรา', s: 'ร่องรอยของการผสมพันธุ์นั้น**ยังอยู่ใน DNA ของมนุษย์ปัจจุบัน** — Pääbo ได้รางวัลโนเบลสาขาสรีรวิทยาหรือการแพทย์ **ปี 2022**' },
];

export function HomininDNA() {
  const [i, setI] = useState(0);
  return (
    <WidgetFrame
      title="DNA โบราณบอกอะไร (Pääbo)"
      notice="กดถัดไปทีละขั้น: กระดูกเก่า → DNA → รู้ว่าใครอยู่ที่ไหน → รู้ว่า**บรรพบุรุษเราผสมพันธุ์กับมนุษย์โบราณ** · ชื่อ 2 กลุ่มมาจาก**สถานที่ที่พบกระดูก**"
      onReset={() => setI(0)}
    >
      <How>กด ◀ ▶ ด้านล่างเพื่อไล่ทีละขั้น — ภาพจะเปลี่ยนและเน้นส่วนที่ขั้นนั้นพูดถึง</How>
      <SlideFig id={steps[i].fig} spot={steps[i].spot} />
      <div className="step-text">
        <b>{i + 1}. {steps[i].t}</b>
        <br />
        <T>{steps[i].s}</T>
      </div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
