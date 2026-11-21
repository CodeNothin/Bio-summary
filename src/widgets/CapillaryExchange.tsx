// =====================================================================
// Widget: fluid leaves the capillary at the arteriole end and comes back
// at the venule end (animal 5.4 slide 104). Slide along the capillary:
// blood pressure (CHP) falls from 35 to 18 mmHg while blood colloid
// osmotic pressure (BCOP) stays 25 mmHg. NFP = CHP − BCOP (calc.ts).
// Also: cardiac output = heart rate × stroke volume (slide 93).
// =====================================================================
import { useState } from 'react';
import { Arrow, Readout, Slider, WidgetFrame } from '../components/ui';
import { cardiacOutput, netFiltrationPressure, round } from '../data/calc';

export function CapillaryExchange() {
  const [pos, setPos] = useState(0); // 0 = arteriole end, 1 = venule end
  const chp = 35 - 17 * pos;
  const bcop = 25;
  const nfp = netFiltrationPressure(chp, bcop);
  const x = 30 + pos * 240;
  return (
    <WidgetFrame
      title="การแลกเปลี่ยนที่หลอดเลือดฝอย"
      notice="ความดันเลือดลดลงตามความยาว capillary แต่แรงดึงน้ำกลับ (BCOP) คงที่ → ด้าน **arteriole ของเหลวไหลออก** · ด้าน **venule ไหลกลับเข้า** · ส่วนที่เหลือกลับทางท่อน้ำเหลือง"
      onReset={() => setPos(0)}
    >
      <svg viewBox="0 0 300 120" className="stage" role="img" aria-label="หลอดเลือดฝอย">
        <rect x={20} y={48} width={260} height={26} rx={13} className="fill-tone tone-red" opacity={0.5} />
        <text x={20} y={100} className="small">arteriole</text>
        <text x={280} y={100} textAnchor="end" className="small">venule</text>
        <line x1={x} y1={30} x2={x} y2={92} className="s-accent" strokeWidth={2} strokeDasharray="4 3" />
        {nfp > 0.5 && <Arrow x1={x} y1={48} x2={x} y2={18} cls="accent" w={3} />}
        {nfp < -0.5 && <Arrow x1={x} y1={10} x2={x} y2={44} cls="blue" w={3} />}
        <text x={150} y={116} textAnchor="middle" className="small mut">{nfp > 0.5 ? 'ของเหลวไหลออกจาก capillary' : nfp < -0.5 ? 'ของเหลวไหลกลับเข้า capillary' : 'ไม่มีการไหลสุทธิ'}</text>
      </svg>
      <div className="controls">
        <Slider label="ตำแหน่งตามความยาว capillary" value={pos} min={0} max={1} step={0.01} onChange={setPos} show={pos < 0.1 ? 'ปลาย arteriole' : pos > 0.9 ? 'ปลาย venule' : 'กลาง'} />
      </div>
      <div className="readouts">
        <Readout k="ความดันเลือด CHP" v={`${round(chp, 1)} mmHg`} />
        <Readout k="BCOP" v={`${bcop} mmHg`} />
        <Readout k="NFP = CHP − BCOP" v={`${nfp > 0 ? '+' : ''}${round(nfp, 1)} mmHg`} hl />
      </div>
      <p className="small" style={{ marginTop: 6 }}>
        ตัวเลขตามภาพสไลด์: กรองออก 24 L/วัน ดูดกลับ 20.4 L/วัน ส่วน 3.6 L/วันกลับทางท่อน้ำเหลือง · cardiac output ตัวอย่างสไลด์ = 70 × 75 mL = {cardiacOutput(70, 75)} L/min
      </p>
    </WidgetFrame>
  );
}
