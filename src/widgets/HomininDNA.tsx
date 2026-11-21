// =====================================================================
// Widget: what Svante Pääbo's ancient DNA showed (Unit 7 slides 13–15),
// step by step on a simple schematic map (not to scale, not the Nobel
// figure): bones from Neander (Germany) and Denisova Cave (Siberia) →
// Neanderthals west, Denisovans east → Homo sapiens leaves Africa →
// interbreeding → traces in our DNA. Edit `steps` to change the text.
// =====================================================================
import { useState } from 'react';
import { Arrow, StepNav, T, WidgetFrame } from '../components/ui';

const steps = [
  { t: 'กระดูกในพิพิธภัณฑ์/แหล่งขุด', s: 'Pääbo สกัด DNA จาก**ชิ้นกระดูก**ของมนุษย์โบราณที่สูญพันธุ์ (extinct hominins) — นี่คือ **ancient DNA (aDNA)**' },
  { t: 'นีแอนเดอร์ทัล (ตะวันตก)', s: 'ชิ้นกระดูก**นีแอนเดอร์ทัล**จากเยอรมนี — สถานที่ที่เป็นที่มาของชื่อ Neanderthal · อาศัยทาง**ตะวันตก**ของยูเรเชีย' },
  { t: 'เดนิโซวัน (ตะวันออก)', s: '**กระดูกนิ้ว**จากถ้ำเดนิโซวา ทางใต้ของไซบีเรีย — ที่มาของชื่อ Denisovan · อาศัยทาง**ตะวันออก**ของยูเรเชีย' },
  { t: 'Homo sapiens ออกจากแอฟริกา', s: '**Homo sapiens** อพยพออกจากแอฟริกาและกระจายไปทั่วโลก' },
  { t: 'ผสมพันธุ์กัน (gene flow)', s: 'เมื่อ Homo sapiens กระจายไปทั่วทวีป ได้**ผสมพันธุ์**กับนีแอนเดอร์ทัลและเดนิโซวัน' },
  { t: 'ร่องรอยใน DNA ของเรา', s: 'ร่องรอยของการผสมพันธุ์นั้น**ยังอยู่ใน DNA ของมนุษย์ปัจจุบัน** — Pääbo ได้รางวัลโนเบลสาขาสรีรวิทยาหรือการแพทย์ **ปี 2022**' },
];

export function HomininDNA() {
  const [i, setI] = useState(0);
  const on = (k: number) => (i >= k ? 1 : 0.15);
  return (
    <WidgetFrame
      title="DNA โบราณบอกอะไร (Pääbo)"
      notice="กดถัดไปทีละขั้น: กระดูกเก่า → DNA → รู้ว่าใครอยู่ที่ไหน → รู้ว่า**บรรพบุรุษเราผสมพันธุ์กับมนุษย์โบราณ** · ชื่อ 2 กลุ่มมาจาก**สถานที่ที่พบกระดูก**"
      onReset={() => setI(0)}
    >
      <svg viewBox="0 0 300 170" className="stage" role="img" aria-label="แผนที่อย่างง่าย แอฟริกาและยูเรเชีย">
        {/* simple blobs, not a real map */}
        <ellipse cx={150} cy={55} rx={135} ry={42} className="fill-tone tone-tan" opacity={0.35} />
        <ellipse cx={95} cy={130} rx={45} ry={34} className="fill-tone tone-tan" opacity={0.35} />
        <text x={150} y={22} textAnchor="middle" className="small mut">ยูเรเชีย</text>
        <text x={95} y={160} textAnchor="middle" className="small mut">แอฟริกา</text>
        <g opacity={on(1)}>
          <circle cx={70} cy={55} r={20} className="fill-tone tone-blue" opacity={0.75} />
          <text x={70} y={59} textAnchor="middle" className="small">Nean.</text>
          <text x={70} y={88} textAnchor="middle" className="small">ตะวันตก</text>
        </g>
        <g opacity={on(2)}>
          <circle cx={235} cy={50} r={20} className="fill-tone tone-purple" opacity={0.75} />
          <text x={235} y={54} textAnchor="middle" className="small">Denis.</text>
          <text x={235} y={83} textAnchor="middle" className="small">ตะวันออก</text>
        </g>
        <g opacity={on(3)}>
          <circle cx={95} cy={128} r={14} className="fill-tone tone-green" />
          <text x={95} y={132} textAnchor="middle" className="small">H.s.</text>
          <Arrow x1={110} y1={118} x2={150} y2={70} cls="good" />
        </g>
        <g opacity={on(4)}>
          <Arrow x1={150} y1={62} x2={95} y2={57} cls="accent" />
          <Arrow x1={160} y1={60} x2={210} y2={52} cls="accent" />
        </g>
        <g opacity={on(5)}>
          <rect x={196} y={112} width={58} height={22} rx={6} className="fill-tone tone-green" />
          <rect x={204} y={116} width={8} height={14} className="fill-tone tone-blue" />
          <rect x={232} y={116} width={8} height={14} className="fill-tone tone-purple" />
          <text x={225} y={150} textAnchor="middle" className="small">DNA เรา</text>
        </g>
        {i === 0 && <text x={225} y={128} textAnchor="middle" className="small">🦴 → 🧬</text>}
      </svg>
      <div className="step-text">
        <b>{i + 1}. {steps[i].t}</b>
        <br />
        <T>{steps[i].s}</T>
      </div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
