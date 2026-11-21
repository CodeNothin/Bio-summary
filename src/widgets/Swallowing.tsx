// =====================================================================
// Widget: the 4 steps of swallowing (animal 5.3 slide 59) on a simple
// side view of the throat: epiglottis, glottis/larynx, esophageal
// sphincter and the bolus. Edit `steps` to change wording or positions.
// =====================================================================
import { useState } from 'react';
import { StepNav, T, WidgetFrame } from '../components/ui';

const steps = [
  { bolusY: 30, epiUp: true, glottisUp: false, sphincterOpen: false, airway: 'เปิด', food: 'ปิด', text: '**ยังไม่มีอาหาร:** esophageal sphincter หดตัว · epiglottis ยกขึ้น · glottis เปิด → หายใจได้' },
  { bolusY: 62, epiUp: false, glottisUp: true, sphincterOpen: false, airway: 'ปิด', food: 'เปิด', text: '**อาหารมาถึงคอหอย:** กระตุ้นการกลืน กล่องเสียง (larynx) และ glottis ยกตัวขึ้น · epiglottis เคลื่อนลงมาปิด' },
  { bolusY: 100, epiUp: false, glottisUp: true, sphincterOpen: true, airway: 'ปิด', food: 'เปิด', text: '**esophageal sphincter คลายตัว** อาหารเคลื่อนเข้าสู่หลอดอาหาร' },
  { bolusY: 150, epiUp: true, glottisUp: false, sphincterOpen: false, airway: 'เปิด', food: 'ปิด', text: '**peristalsis:** กล้ามเนื้อหด–คลายตัวเป็นจังหวะ ดันอาหารจากหลอดอาหารสู่กระเพาะ · ทางเดินหายใจกลับมาเปิด' },
];

export function Swallowing() {
  const [i, setI] = useState(0);
  const s = steps[i];
  return (
    <WidgetFrame
      title="การกลืน 4 ขั้น"
      notice="epiglottis เป็น “ฝาปิด” ทางเดินหายใจ — ตอนกลืน **ทางเดินหายใจปิด ทางเดินอาหารเปิด** อาหารจึงไม่ตกลงหลอดลม"
      onReset={() => setI(0)}
    >
      <svg viewBox="0 0 240 190" className="stage" role="img" aria-label="ภาพตัดข้างคอขณะกลืน">
        {/* pharynx */}
        <rect x={90} y={10} width={60} height={60} rx={14} className="fill-tone tone-pink" opacity={0.6} />
        {/* trachea (front, left) and esophagus (back, right) */}
        <rect x={74} y={70 + (s.glottisUp ? -6 : 0)} width={30} height={110} rx={6} className="fill-tone tone-blue" opacity={0.55} />
        <text x={89} y={186} textAnchor="middle" className="small">หลอดลม</text>
        <rect x={130} y={70} width={30} height={110} rx={6} className="fill-tone tone-pink" />
        <text x={145} y={186} textAnchor="middle" className="small">หลอดอาหาร</text>
        {/* glottis opening */}
        <rect x={78} y={66 + (s.glottisUp ? -6 : 0)} width={22} height={6} rx={3} className="fill-tone tone-purple" />
        {/* epiglottis flap */}
        <path d={s.epiUp ? 'M104 66 L112 40' : 'M104 60 L76 62'} className="f-none stroke-tone tone-yellow" strokeWidth={7} strokeLinecap="round" />
        {/* esophageal sphincter */}
        <rect x={126} y={84} width={38} height={7} rx={3} className={`fill-tone ${s.sphincterOpen ? 'tone-green' : 'tone-red'}`} opacity={s.sphincterOpen ? 0.4 : 1} />
        {/* bolus */}
        <circle cx={145} cy={s.bolusY} r={11} className="fill-tone tone-brown" />
        <text x={170} y={40} className="small">epiglottis</text>
        <text x={170} y={92} className="small">sphincter</text>
      </svg>
      <div className="readouts">
        <div className="readout"><div className="k">ทางเดินหายใจ</div><div className="v">{s.airway}</div></div>
        <div className="readout"><div className="k">ทางเดินอาหาร</div><div className="v">{s.food}</div></div>
      </div>
      <div className="step-text"><T>{s.text}</T></div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
