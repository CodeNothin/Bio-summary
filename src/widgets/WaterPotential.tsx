// =====================================================================
// Widget: a plant cell dropped into a solution (plant 5.4 slides 11–15).
// Sliders set the cell's Ψs and the solution's Ψw. The widget shows which
// way water moves and the cell's turgor (Ψp) once it reaches equilibrium.
// All numbers come from src/data/calc.ts. The cell's Ψs is kept fixed,
// exactly like the slide-14 example (−0.732 MPa cell in −0.244 MPa sucrose).
// =====================================================================
import { useState } from 'react';
import { Arrow, Readout, Slider, WidgetFrame } from '../components/ui';
import { round, turgorAtEquilibrium, waterFlowDirection } from '../data/calc';

const fmt = (x: number) => `${x > 0 ? '+' : ''}${round(x, 3)} MPa`;

export function WaterPotential() {
  const [psiSCell, setPsiSCell] = useState(-0.732);
  const [psiOut, setPsiOut] = useState(-0.244);
  const psiWCell = psiSCell; // flaccid cell: Ψp = 0 at the start
  const dir = waterFlowDirection(psiOut, psiWCell); // 'a→b' = solution → cell
  const turgor = turgorAtEquilibrium(psiOut, psiSCell);
  const plasmolysed = turgor < 0; // cell would need negative Ψp: it loses water and shrinks instead
  // drawing: the cell swells when water goes in, shrinks when water goes out
  const scale = plasmolysed ? 0.8 : 1 + Math.min(turgor, 0.8) * 0.18;
  return (
    <WidgetFrame
      title="เซลล์ในสารละลาย: น้ำไปทางไหน?"
      notice="น้ำไหลจาก **Ψw สูง → Ψw ต่ำ** เสมอ · ลองตั้งให้เหมือนสไลด์ 14 (เซลล์ −0.732, สารละลาย −0.244) แล้วดู **Ψp = Ψw − Ψs = +0.488** · ถ้าสารละลายเข้มข้นกว่าเซลล์ (Ψw ต่ำกว่า) น้ำจะออกจากเซลล์"
      onReset={() => { setPsiSCell(-0.732); setPsiOut(-0.244); }}
    >
      <svg viewBox="0 0 300 170" className="stage" role="img" aria-label="เซลล์ในบีกเกอร์">
        {/* beaker */}
        <path d="M30 20 L30 150 Q30 160 40 160 L260 160 Q270 160 270 150 L270 20" className="f-none s-muted" strokeWidth={2} />
        <rect x={32} y={50} width={236} height={108} rx={6} className="fill-tone tone-water" opacity={0.6} />
        {/* cell: wall (fixed) and protoplast (scales) */}
        <rect x={110} y={68} width={80} height={70} rx={12} className="f-none s-ink" strokeWidth={3} />
        <rect
          x={150 - 36 * Math.min(scale, 1.05)}
          y={103 - 31 * Math.min(scale, 1.05)}
          width={72 * Math.min(scale, 1.05)}
          height={62 * Math.min(scale, 1.05)}
          rx={10}
          className="fill-tone tone-green"
          opacity={0.85}
        />
        <circle cx={168} cy={92} r={6} className="fill-tone tone-purple" />
        {/* arrows show water direction */}
        {dir === 'a→b' && (
          <>
            <Arrow x1={60} y1={103} x2={104} y2={103} cls="accent" w={3} />
            <Arrow x1={240} y1={103} x2={196} y2={103} cls="accent" w={3} />
          </>
        )}
        {dir === 'b→a' && (
          <>
            <Arrow x1={104} y1={103} x2={60} y2={103} cls="bad" w={3} />
            <Arrow x1={196} y1={103} x2={240} y2={103} cls="bad" w={3} />
          </>
        )}
        <text x={150} y={40} textAnchor="middle" className="small">
          {dir === 'a→b' ? 'น้ำออสโมซิสเข้าเซลล์ → เซลล์เต่ง' : dir === 'b→a' ? 'น้ำออกจากเซลล์ → เสียแรงดันเต่ง' : 'Ψw เท่ากัน → ไม่มีการเคลื่อนที่สุทธิ'}
        </text>
      </svg>
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
