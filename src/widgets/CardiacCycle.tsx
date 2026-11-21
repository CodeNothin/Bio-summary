// =====================================================================
// Widget: the cardiac cycle (animal 5.4 slides 93–97). Press play or tap
// a phase: 0.4 s whole heart relaxed → 0.1 s atrial systole → 0.3 s
// ventricular systole (one beat = 0.8 s). Shows which valves are open,
// which chambers squeeze, and when "lub" and "dup" happen. The picture
// is the slide-94 cycle figure; the current phase's panel is lit up.
// =====================================================================
import { useEffect, useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { T, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

/** the three panels of the slide-94 figure (percent of the picture) */
const panels: Box[] = [
  [10, 28, 48, 84],
  [46, 8, 90, 52],
  [56, 50, 94, 100],
];

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
  return (
    <WidgetFrame
      title="วัฏจักรหัวใจ 1 รอบ = 0.8 วินาที"
      notice="ลิ้นทั้งสองชุด**ไม่เปิดพร้อมกัน**: AV valve เปิดตอนเติมเลือด, semilunar valve เปิดตอนบีบออก · **lub = AV ปิด** (ventricle เริ่มบีบ) · **dup = semilunar ปิด** (ventricle คลาย)"
      onReset={() => { setI(0); setPlay(false); }}
    >
      <SlideFig id="a5-94" spot={panels[i]} />
      <div className="readouts">
        <div className="readout"><div className="k">AV valve</div><div className="v">{p.av ? 'เปิด' : 'ปิด'}</div></div>
        <div className="readout"><div className="k">semilunar valve</div><div className="v">{p.sl ? 'เปิด' : 'ปิด'}</div></div>
        <div className="readout"><div className="k">ห้องที่บีบตัว</div><div className="v">{p.atria ? 'atrium' : p.vent ? 'ventricle' : '— (คลายหมด)'}</div></div>
      </div>
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
