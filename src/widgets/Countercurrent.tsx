// =====================================================================
// Widget: countercurrent exchange in a fish gill (animal 5.5 slides
// 114–115) using the slide's own numbers: water 100 → 70 → 40 → 15 %O₂,
// blood 90 → 60 → 30 → 5 %O₂ flowing the opposite way, on the slide
// figure. Pick a position along the lamella to compare water and blood.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { Readout, WidgetFrame } from '../components/ui';

// position k = 0..3 from where WATER enters (left) to where it leaves (right)
const water = [100, 70, 40, 15];
const blood = [90, 60, 30, 5]; // blood enters at the right (5%) and leaves at the left (90%)

export function Countercurrent() {
  const [k, setK] = useState(0);
  return (
    <WidgetFrame
      title="Countercurrent exchange ที่เหงือกปลา"
      notice="แตะทีละตำแหน่ง: **ทุกจุด %O₂ ในน้ำสูงกว่าในเลือดเสมอ** (ต่างกัน ~10%) O₂ จึงแพร่เข้าเลือดได้ตลอดความยาวเหงือก — เลือดออกจากเหงือกมี O₂ ถึง 90%"
      onReset={() => setK(0)}
    >
      <SlideFig id="a5-115" />
      <div className="seg">
        {water.map((_, i) => (
          <button key={i} className={i === k ? 'on' : ''} aria-pressed={i === k} onClick={() => setK(i)}>
            ตำแหน่ง {i + 1}
          </button>
        ))}
      </div>
      <div className="readouts">
        <Readout k="น้ำ (%O₂)" v={`${water[k]}%`} />
        <Readout k="เลือด (%O₂)" v={`${blood[k]}%`} />
        <Readout k="O₂ แพร่" v="น้ำ → เลือด" hl />
      </div>
      <p className="small" style={{ marginTop: 6 }}>
        ตำแหน่ง {k + 1}: น้ำ {water[k]}% กับเลือด {blood[k]}% → O₂ แพร่จากน้ำเข้าเลือดตาม diffusion gradient · ข้อเสียของน้ำ: มี O₂ น้อยกว่าอากาศ (โดยเฉพาะน้ำเค็มและน้ำอุ่น) เหงือกจึงต้องดึง O₂ ให้ได้มากที่สุด
      </p>
    </WidgetFrame>
  );
}
