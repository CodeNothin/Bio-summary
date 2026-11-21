// =====================================================================
// Widget: energy pyramid and biomagnification (Unit 6.4 slides 21, 26–29).
// Energy view: producers get E kJ; each level passes on `eff` % (5–20 %,
// typically 10 %) via calc.ts energyAtLevel. Toxin view: a persistent
// toxin's concentration goes UP each level (biomagnification); the ×10
// per level here is an illustration, not a slide number.
// =====================================================================
import { useState } from 'react';
import { Seg, Slider, WidgetFrame } from '../components/ui';
import { energyAtLevel, round } from '../data/calc';

/** Short labels so they fit inside the narrow top bars (ผู้บริโภค n = ผู้บริโภคลำดับที่ n). */
const levels = ['ผู้ผลิต', 'ผู้บริโภค 1', 'ผู้บริโภค 2', 'ผู้บริโภค 3', 'ผู้บริโภค 4'];

export function EnergyPyramid() {
  const [view, setView] = useState<'energy' | 'toxin'>('energy');
  const [eff, setEff] = useState(10);
  const E0 = 10000;
  return (
    <WidgetFrame
      title={view === 'energy' ? 'พีระมิดพลังงาน (กฎ ~10%)' : 'Biomagnification'}
      notice={view === 'energy'
        ? 'แต่ละขั้นได้พลังงานเพียง ~10% (5–20%) ของขั้นก่อน ที่เหลือใช้หายใจระดับเซลล์ หรือย่อยไม่ได้แล้วขับออก → **ห่วงโซ่ยาวได้ไม่เกิน ~5 ระดับ** และผู้ล่าบนสุดเสี่ยงสูญพันธุ์ที่สุด'
        : 'สารที่ย่อยสลาย/ขับออกไม่ได้ (DDT, methylmercury) สะสมในตัว (bioaccumulation) และ**เข้มข้นขึ้นทุกขั้น** — ผู้ล่าบนสุดได้รับมากที่สุด'}
      onReset={() => { setView('energy'); setEff(10); }}
    >
      <Seg value={view} options={[{ value: 'energy', label: 'พลังงาน' }, { value: 'toxin', label: 'สารพิษ' }]} onChange={setView} />
      <svg viewBox="0 0 300 175" className="stage" style={{ marginTop: 8 }} role="img" aria-label="พีระมิด">
        {levels.map((name, i) => {
          const y = 140 - i * 32;
          const w = 280 - i * 46;
          const e = energyAtLevel(E0, i + 1, eff / 100);
          const tox = 0.01 * 10 ** i; // illustrative ppm
          return (
            <g key={name}>
              <rect x={150 - w / 2} y={y} width={w} height={28} rx={4} className={`fill-tone ${view === 'energy' ? ['tone-green', 'tone-yellow', 'tone-orange', 'tone-red', 'tone-purple'][i] : 'tone-grey'}`} />
              {view === 'toxin' && <rect x={150 - w / 2} y={y} width={w} height={28} rx={4} className="fill-tone tone-red" opacity={0.15 + i * 0.2} />}
              <text x={150} y={y + 13} textAnchor="middle" className="small">{name}</text>
              <text x={150} y={y + 25} textAnchor="middle" className="small">
                {view === 'energy' ? `${e >= 1 ? round(e, 0).toLocaleString() : round(e, 2)} kJ` : `${tox >= 1 ? tox : tox.toFixed(2)} ppm`}
              </text>
            </g>
          );
        })}
      </svg>
      {view === 'energy' && (
        <div className="controls">
          <Slider label="ประสิทธิภาพการถ่ายทอด (ecological efficiency)" value={eff} min={5} max={20} step={1} onChange={setEff} show={`${eff}%`} />
        </div>
      )}
      <p className="small" style={{ marginTop: 6 }}>
        {view === 'energy'
          ? `ผู้ผลิต ${E0.toLocaleString()} kJ → ผู้บริโภคลำดับที่ 3 ได้เพียง ${round(energyAtLevel(E0, 4, eff / 100), 2)} kJ`
          : 'ตัวอย่างในสไลด์: DDT ทำให้เปลือกไข่นกอินทรีหัวขาวบาง (รบกวน metabolism ของแคลเซียม) ไข่แตกก่อนฟัก ประชากรลดลง — ห้ามใช้ในสหรัฐฯ ปี 1972 (ตัวเลข ppm ในภาพเป็นตัวอย่างประกอบ)'}
      </p>
    </WidgetFrame>
  );
}
