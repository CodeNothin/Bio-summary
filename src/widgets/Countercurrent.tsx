// =====================================================================
// Widget: countercurrent exchange in a fish gill (animal 5.5 slides
// 114–115) using the slide's own numbers: water 100 → 70 → 40 → 15 %O₂,
// blood 90 → 60 → 30 → 5 %O₂ flowing the opposite way. Tap a position
// along the lamella to compare water and blood there.
// =====================================================================
import { useState } from 'react';
import { Arrow, WidgetFrame } from '../components/ui';

// position k = 0..3 from where WATER enters (left) to where it leaves (right)
const water = [100, 70, 40, 15];
const blood = [90, 60, 30, 5]; // blood enters at the right (5%) and leaves at the left (90%)

export function Countercurrent() {
  const [k, setK] = useState(0);
  const x = (i: number) => 50 + i * 66;
  return (
    <WidgetFrame
      title="Countercurrent exchange ที่เหงือกปลา"
      notice="แตะทีละตำแหน่ง: **ทุกจุด %O₂ ในน้ำสูงกว่าในเลือดเสมอ** (ต่างกัน ~10%) O₂ จึงแพร่เข้าเลือดได้ตลอดความยาวเหงือก — เลือดออกจากเหงือกมี O₂ ถึง 90%"
      onReset={() => setK(0)}
    >
      <svg viewBox="0 0 300 150" className="stage" role="img" aria-label="น้ำกับเลือดไหลสวนทางกัน">
        <rect x={20} y={30} width={260} height={30} rx={10} className="fill-tone tone-water" />
        <rect x={20} y={88} width={260} height={30} rx={10} className="fill-tone tone-red" opacity={0.55} />
        <Arrow x1={30} y1={22} x2={110} y2={22} cls="blue" w={2} />
        <text x={118} y={26} className="small">น้ำไหล →</text>
        <Arrow x1={270} y1={130} x2={190} y2={130} cls="red" w={2} />
        <text x={182} y={134} textAnchor="end" className="small">← เลือดไหลสวนทาง</text>
        {water.map((w, i) => (
          <g key={i} onClick={() => setK(i)} style={{ cursor: 'pointer' }} role="button" aria-label={`ตำแหน่ง ${i + 1}`}>
            <rect x={x(i) - 26} y={26} width={52} height={96} fill="transparent" />
            <text x={x(i)} y={50} textAnchor="middle" className={i === k ? 'big' : 'small'}>{w}%</text>
            <text x={x(i)} y={108} textAnchor="middle" className={i === k ? 'big' : 'small'}>{blood[i]}%</text>
            {i === k && <Arrow x1={x(i)} y1={62} x2={x(i)} y2={86} cls="accent" w={3} />}
          </g>
        ))}
      </svg>
      <p className="small" style={{ marginTop: 6 }}>
        ตำแหน่ง {k + 1}: น้ำ {water[k]}% กับเลือด {blood[k]}% → O₂ แพร่จากน้ำเข้าเลือดตาม diffusion gradient · ข้อเสียของน้ำ: มี O₂ น้อยกว่าอากาศ (โดยเฉพาะน้ำเค็มและน้ำอุ่น) เหงือกจึงต้องดึง O₂ ให้ได้มากที่สุด
      </p>
    </WidgetFrame>
  );
}
