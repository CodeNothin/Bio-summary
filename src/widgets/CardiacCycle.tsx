// =====================================================================
// Widget: the cardiac cycle (animal 5.4 slides 93–97). Press play or tap
// a phase: 0.4 s whole heart relaxed → 0.1 s atrial systole → 0.3 s
// ventricular systole (one beat = 0.8 s). Shows which valves are open,
// which chambers squeeze, and when "lub" and "dup" happen.
// =====================================================================
import { useEffect, useState } from 'react';
import { T, WidgetFrame } from '../components/ui';

const phases = [
  { name: 'ห้องหัวใจคลายตัวทั้งหมด', en: 'atrial & ventricular diastole', dur: 0.4, atria: false, vent: false, av: true, sl: false, text: 'หัวใจคลายตัวทั้งหมด → ความดันใน ventricle **ลดลง** → **AV valve เปิด** → เลือดไหลเติม ventricle', sound: 'ต้นช่วงนี้ semilunar valve ปิด → **"dup" (S2)**' },
  { name: 'atrium บีบตัว', en: 'atrial systole, ventricular diastole', dur: 0.1, atria: true, vent: false, av: true, sl: false, text: 'atrium หดตัว บีบเลือดเติม ventricle เพิ่ม', sound: '' },
  { name: 'ventricle บีบตัว', en: 'ventricular systole, atrial diastole', dur: 0.3, atria: false, vent: true, av: false, sl: true, text: 'ventricle หดตัว → **AV valve ปิด** → ความดันใน ventricle **เพิ่มขึ้น** → **semilunar valve เปิด** → เลือดถูกบีบออก', sound: 'AV valve ปิด → **"lub" (S1)**' },
];

export function CardiacCycle() {
  const [i, setI] = useState(0);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (!play) return;
    const t = setTimeout(() => setI((i + 1) % phases.length), phases[i].dur * 3000);
    return () => clearTimeout(t);
  }, [play, i]);
  const p = phases[i];
  const sq = (on: boolean) => (on ? 0.82 : 1); // squeezed chambers are drawn smaller
  return (
    <WidgetFrame
      title="วัฏจักรหัวใจ 1 รอบ = 0.8 วินาที"
      notice="ลิ้นทั้งสองชุด**ไม่เปิดพร้อมกัน**: AV valve เปิดตอนเติมเลือด, semilunar valve เปิดตอนบีบออก · **lub = AV ปิด** (ventricle เริ่มบีบ) · **dup = semilunar ปิด** (ventricle คลาย)"
      onReset={() => { setI(0); setPlay(false); }}
    >
      <svg viewBox="0 0 260 150" className="stage" role="img" aria-label="หัวใจในแต่ละระยะ">
        <g transform={`translate(130 40) scale(${sq(p.atria)}) translate(-130 -40)`}>
          <rect x={70} y={14} width={56} height={46} rx={12} className="fill-tone tone-blue" />
          <rect x={134} y={14} width={56} height={46} rx={12} className="fill-tone tone-red" />
        </g>
        <g transform={`translate(130 104) scale(${sq(p.vent)}) translate(-130 -104)`}>
          <rect x={64} y={70} width={62} height={68} rx={20} className="fill-tone tone-blue" />
          <rect x={134} y={70} width={62} height={68} rx={20} className="fill-tone tone-red" />
        </g>
        {/* AV valves */}
        <rect x={74} y={62} width={48} height={6} rx={3} className={p.av ? 'fill-tone tone-green' : 'fill-tone tone-yellow'} opacity={p.av ? 0.35 : 1} />
        <rect x={138} y={62} width={48} height={6} rx={3} className={p.av ? 'fill-tone tone-green' : 'fill-tone tone-yellow'} opacity={p.av ? 0.35 : 1} />
        {/* semilunar valves (drawn at the side exits) */}
        <rect x={40} y={88} width={22} height={6} rx={3} className={p.sl ? 'fill-tone tone-green' : 'fill-tone tone-yellow'} opacity={p.sl ? 0.35 : 1} />
        <rect x={198} y={88} width={22} height={6} rx={3} className={p.sl ? 'fill-tone tone-green' : 'fill-tone tone-yellow'} opacity={p.sl ? 0.35 : 1} />
        <text x={6} y={84} className="small">ไปปอด</text>
        <text x={206} y={84} className="small">aorta</text>
        <text x={130} y={148} textAnchor="middle" className="small mut">ลิ้นสีเหลือง = ปิด · จาง = เปิด</text>
      </svg>
      {/* timeline */}
      <div style={{ display: 'flex', gap: 3, marginTop: 6 }}>
        {phases.map((ph, k) => (
          <button key={k} onClick={() => { setI(k); setPlay(false); }} className={`chip${k === i ? ' on' : ''}`} style={{ flex: ph.dur, textAlign: 'center', whiteSpace: 'normal', fontSize: '0.75rem' }}>
            {ph.dur} s
          </button>
        ))}
      </div>
      <div className="step-text">
        <b>{p.name}</b> <span className="small">({p.en})</span>
        <br />
        <T>{p.text}</T>
        {p.sound && (<><br /><T>{p.sound}</T></>)}
      </div>
      <div className="btn-row" style={{ marginTop: 8 }}>
        <button className="btn" onClick={() => setPlay(!play)}>{play ? '⏸ หยุด' : '▶ เล่นต่อเนื่อง'}</button>
      </div>
    </WidgetFrame>
  );
}
