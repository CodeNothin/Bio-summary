// =====================================================================
// Widget: a plant cell dropped into a solution (plant 5.4 slides 11–15).
// Sliders set the cell's Ψs and the solution's Ψw. The widget shows which
// way water moves and the cell's turgor (Ψp) once it reaches equilibrium.
// All numbers come from src/data/calc.ts. Start values = the slide-14
// example (−0.732 MPa cell in −0.244 MPa sucrose). The picture is the
// slide-15 photo: left = cells that took water in (turgid), right =
// cells in 1 M KCl that lost water; the matching side is highlighted.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Readout, Slider, WidgetFrame } from '../components/ui';
import { round, turgorAtEquilibrium, waterFlowDirection } from '../data/calc';

const fmt = (x: number) => `${x > 0 ? '+' : ''}${round(x, 3)} MPa`;

export function WaterPotential() {
  const [psiSCell, setPsiSCell] = useState(-0.732);
  const [psiOut, setPsiOut] = useState(-0.244);
  const psiWCell = psiSCell; // flaccid cell: Ψp = 0 at the start
  const dir = waterFlowDirection(psiOut, psiWCell); // 'a→b' = solution → cell
  const turgor = turgorAtEquilibrium(psiOut, psiSCell);
  const plasmolysed = turgor < 0; // cell would need negative Ψp: it loses water and shrinks instead
  return (
    <WidgetFrame
      title="เซลล์ในสารละลาย: น้ำไปทางไหน?"
      notice="น้ำไหลจาก **Ψw สูง → Ψw ต่ำ** เสมอ · ลองตั้งให้เหมือนสไลด์ 14 (เซลล์ −0.732, สารละลาย −0.244) แล้วดู **Ψp = Ψw − Ψs = +0.488** · ถ้าสารละลายเข้มข้นกว่าเซลล์ (Ψw ต่ำกว่า) น้ำจะออกจากเซลล์"
      onReset={() => { setPsiSCell(-0.732); setPsiOut(-0.244); }}
    >
      <How>เลื่อนแถบ Ψs ของเซลล์ และ Ψw ของสารละลายด้านล่าง — ภาพจะเน้นฝั่งซ้าย (น้ำเข้า เซลล์เต่ง) หรือฝั่งขวา (น้ำออก เสียแรงดันเต่ง)</How>
      <SlideFig id="p4-14" spot={dir === 'b→a' ? [50, 0, 98, 100] : [0, 0, 50, 100]} />
      <p className="small" style={{ textAlign: 'center', margin: '0 0 6px' }}>
        <b>{dir === 'a→b' ? 'น้ำออสโมซิสเข้าเซลล์ → เซลล์เต่ง (ภาพซ้าย)' : dir === 'b→a' ? 'น้ำออกจากเซลล์ → เสียแรงดันเต่ง (ภาพขวา)' : 'Ψw เท่ากัน → ไม่มีการเคลื่อนที่สุทธิ'}</b>
      </p>
      <div className="controls">
        <Slider label="Ψs ของเซลล์ (ตัวถูกละลายในเซลล์)" value={psiSCell} min={-1.5} max={0} step={0.001} onChange={setPsiSCell} show={fmt(psiSCell)} />
        <Slider label="Ψw ของสารละลายภายนอก" value={psiOut} min={-1.5} max={0} step={0.001} onChange={setPsiOut} show={fmt(psiOut)} />
      </div>
      <div className="readouts">
        <Readout k="เซลล์ก่อนแช่ (เหี่ยว Ψp = 0)" v={`Ψw = ${fmt(psiWCell)}`} />
        <Readout k="ที่จุดสมดุล Ψw เซลล์ =" v={plasmolysed ? 'เซลล์เสียน้ำ (เหี่ยวลง)' : fmt(psiOut)} />
        <Readout k="Ψp ที่จุดสมดุล = Ψw − Ψs" v={plasmolysed ? 'ไม่เกิดแรงดันเต่ง' : fmt(turgor)} hl />
      </div>
    </WidgetFrame>
  );
}
