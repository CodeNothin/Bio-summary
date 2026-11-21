// =====================================================================
// Widget: energy pyramid and biomagnification (Unit 6.4 slides 21, 26–29).
// Energy view: producers get E kJ; each level passes on `eff` % (5–20 %,
// typically 10 %) via calc.ts energyAtLevel. Toxin view: a persistent
// toxin's concentration goes UP each level (biomagnification); the ×10
// per level here is an illustration, not a slide number.
// Pictures: slide 22 (pyramid of energy) and slide 29 (DDT and the bald
// eagle); the computed energy numbers are listed under the picture.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
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
      <div style={{ marginTop: 8 }}>
        <SlideFig id={view === 'energy' ? 'e4-22' : 'e4-29'} />
      </div>
      {view === 'energy' && (
        <ol className="order-list">
          {levels.map((name, i) => {
            const e = energyAtLevel(E0, i + 1, eff / 100);
            return (
              <li key={name} style={{ gridTemplateColumns: 'auto 1fr auto' }}>
                <span className="num">{i + 1}</span>
                <span>{name}</span>
                <b>{e >= 1 ? round(e, 0).toLocaleString() : round(e, 2)} kJ</b>
              </li>
            );
          })}
        </ol>
      )}
      {view === 'energy' && (
        <div className="controls">
          <Slider label="ประสิทธิภาพการถ่ายทอด (ecological efficiency)" value={eff} min={5} max={20} step={1} onChange={setEff} show={`${eff}%`} />
        </div>
      )}
      <p className="small" style={{ marginTop: 6 }}>
        {view === 'energy'
          ? `ผู้ผลิต ${E0.toLocaleString()} kJ → ผู้บริโภคลำดับที่ 3 ได้เพียง ${round(energyAtLevel(E0, 4, eff / 100), 2)} kJ`
          : 'ตัวอย่างในสไลด์: DDT ทำให้เปลือกไข่นกอินทรีหัวขาวบาง (รบกวน metabolism ของแคลเซียม) ไข่แตกก่อนฟัก ประชากรลดลง — ห้ามใช้ในสหรัฐฯ ปี 1972 (ภาพ: ความเข้มข้น DDT เพิ่มขึ้นทุกขั้น จากในน้ำ 1 เท่า → นกกินปลา 10,000,000 เท่า)'}
      </p>
    </WidgetFrame>
  );
}
