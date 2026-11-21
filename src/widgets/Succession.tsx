// =====================================================================
// Widget: ecological succession step by step (Unit 6.3 slides 31–33).
// Choose primary (bare rock) or secondary (after fire / abandoned farm)
// and step through the stages to the climax community. Year labels for
// secondary succession are the slide figure's.
// =====================================================================
import { useState } from 'react';
import { Seg, StepNav, WidgetFrame } from '../components/ui';

const paths = {
  primary: [
    { name: 'หินเปล่า (bare rock)', h: 0, text: 'พื้นที่ไม่มีสิ่งมีชีวิตและไม่มีดิน เช่น ลาวาเย็นตัว เนินทราย' },
    { name: 'ไลเคน (pioneer species)', h: 6, text: 'สิ่งมีชีวิตผู้บุกเบิกเริ่มอาศัย ช่วยผุพังหินจนเริ่มเกิดดิน' },
    { name: 'พืชล้มลุกเล็ก ๆ', h: 16, text: 'ดินเพิ่มขึ้น พืชล้มลุกขนาดเล็กเข้ามา' },
    { name: 'หญ้าและไม้ล้มลุกหลายปี', h: 28, text: 'สังคมพืชซับซ้อนขึ้น' },
    { name: 'ไม้พุ่ม ต้นไม้ที่ชอบแดด', h: 50, text: 'ระยะกลาง (intermediate stages)' },
    { name: 'climax community', h: 80, text: 'ระยะสุดท้ายที่เสถียร องค์ประกอบชนิดเปลี่ยนน้อย — ใช้เวลาหลายร้อยปี' },
  ],
  secondary: [
    { name: 'ไฟไหม้ / ไร่ร้าง (0 ปี)', h: 0, text: 'การรบกวนกำจัดสังคมเดิม แต่**ดินยังอยู่**' },
    { name: 'พืชล้มลุก (1–2 ปี)', h: 10, text: 'pioneer species เติบโตเร็ว' },
    { name: 'หญ้าและไม้ล้มลุกหลายปี (3–4 ปี)', h: 22, text: 'สังคมพืชเริ่มหนาแน่น' },
    { name: 'หญ้า ไม้พุ่ม สน (5–150 ปี)', h: 50, text: 'ระยะกลาง ต้นไม้เริ่มเข้ามา' },
    { name: 'ป่าโอ๊ก/ฮิกคอรีสมบูรณ์ (150+ ปี)', h: 80, text: 'climax community — เร็วกว่า primary เพราะเริ่มจากดินที่มีอยู่แล้ว' },
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
      <Seg value={k} options={[{ value: 'primary', label: 'Primary' }, { value: 'secondary', label: 'Secondary' }]} onChange={(v) => { setK(v); setI(0); }} />
      <svg viewBox="0 0 300 120" className="stage" style={{ marginTop: 8 }} role="img" aria-label="ระยะการแทนที่">
        <rect x={0} y={100} width={300} height={20} className={`fill-tone ${k === 'primary' && i === 0 ? 'tone-grey' : 'tone-brown'}`} opacity={0.6} />
        {Array.from({ length: 6 }, (_, j) => {
          const x = 30 + j * 48;
          const h = s.h * (0.7 + ((j * 37) % 30) / 100);
          if (h < 3) return null;
          return <rect key={j} x={x} y={100 - h} width={h > 40 ? 26 : 14} height={h} rx={h > 40 ? 12 : 5} className={`fill-tone ${h > 40 ? 'tone-dgreen' : 'tone-green'}`} />;
        })}
      </svg>
      <div className="step-text">
        <b>{s.name}</b>
        <br />
        {s.text}
      </div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
