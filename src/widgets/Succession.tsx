// =====================================================================
// Widget: ecological succession step by step (Unit 6.3 slides 31–33).
// Choose primary (bare rock) or secondary (after fire / abandoned farm)
// and step through the stages to the climax community. Year labels for
// secondary succession are the slide figure's. The picture is the
// slide-32 figure; each stage's column is lit up (`x`, percent of the
// picture: primary = top strip, secondary = bottom strip).
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Seg, StepNav, WidgetFrame } from '../components/ui';

const paths = {
  primary: [
    { name: 'หินเปล่า (bare rock)', x: [2, 12] as [number, number], text: 'พื้นที่ไม่มีสิ่งมีชีวิตและไม่มีดิน เช่น ลาวาเย็นตัว เนินทราย' },
    { name: 'ไลเคน (pioneer species)', x: [11, 19] as [number, number], text: 'สิ่งมีชีวิตผู้บุกเบิกเริ่มอาศัย ช่วยผุพังหินจนเริ่มเกิดดิน' },
    { name: 'พืชล้มลุกเล็ก ๆ', x: [18, 26] as [number, number], text: 'ดินเพิ่มขึ้น พืชล้มลุกขนาดเล็กเข้ามา' },
    { name: 'หญ้าและไม้ล้มลุกหลายปี', x: [25, 34] as [number, number], text: 'สังคมพืชซับซ้อนขึ้น' },
    { name: 'ไม้พุ่ม ต้นไม้ที่ชอบแดด', x: [32, 43] as [number, number], text: 'ระยะกลาง (intermediate stages)' },
    { name: 'climax community', x: [41, 53] as [number, number], text: 'ระยะสุดท้ายที่เสถียร องค์ประกอบชนิดเปลี่ยนน้อย — ใช้เวลาหลายร้อยปี' },
  ],
  secondary: [
    { name: 'ไฟไหม้ / ไร่ร้าง (0 ปี)', x: [2, 13] as [number, number], text: 'การรบกวนกำจัดสังคมเดิม แต่**ดินยังอยู่**' },
    { name: 'พืชล้มลุก (1–2 ปี)', x: [11, 21] as [number, number], text: 'pioneer species เติบโตเร็ว' },
    { name: 'หญ้าและไม้ล้มลุกหลายปี (3–4 ปี)', x: [19, 29] as [number, number], text: 'สังคมพืชเริ่มหนาแน่น' },
    { name: 'หญ้า ไม้พุ่ม สน (5–150 ปี)', x: [27, 41] as [number, number], text: 'ระยะกลาง ต้นไม้เริ่มเข้ามา' },
    { name: 'ป่าโอ๊ก/ฮิกคอรีสมบูรณ์ (150+ ปี)', x: [39, 53] as [number, number], text: 'climax community — เร็วกว่า primary เพราะเริ่มจากดินที่มีอยู่แล้ว' },
  ],
};
type K = keyof typeof paths;

export function Succession() {
  const [k, setK] = useState<K>('primary');
  const [i, setI] = useState(0);
  const steps = paths[k];
  const s = steps[i];
  return (
    <WidgetFrame
      title="การแทนที่ทางนิเวศ (succession)"
      notice="**primary** เริ่มจากที่ว่างไม่มีดิน (หิน ทราย) จึงช้ามาก · **secondary** เริ่มหลังการรบกวน (ไฟ ไร่ร้าง) ดินยังอยู่ จึงเร็วกว่า · ทั้งสองจบที่ **climax community**"
      onReset={() => { setK('primary'); setI(0); }}
    >
      <How>เลือก Primary หรือ Secondary แล้วกด ◀ ▶ — ภาพจะเน้นระยะที่ขั้นนั้นพูดถึง</How>
      <Seg value={k} options={[{ value: 'primary', label: 'Primary' }, { value: 'secondary', label: 'Secondary' }]} onChange={(v) => { setK(v); setI(0); }} />
      <div style={{ marginTop: 8 }}>
        <SlideFig id="e3-32" spot={k === 'primary' ? [s.x[0], 3, s.x[1], 49] : [s.x[0], 49, s.x[1], 99]} />
      </div>
      <div className="step-text">
        <b>{s.name}</b>
        <br />
        {s.text}
      </div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
