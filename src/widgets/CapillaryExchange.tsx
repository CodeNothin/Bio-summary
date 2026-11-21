// =====================================================================
// Widget: fluid leaves the capillary at the arteriole end and comes back
// at the venule end (animal 5.4 slide 104). Slide along the capillary:
// blood pressure (CHP) falls from 35 to 18 mmHg while blood colloid
// osmotic pressure (BCOP) stays 25 mmHg. NFP = CHP − BCOP (calc.ts).
// The picture is the slide figure; a dashed line moves along its
// pressure graph (arterial end → venule end) with the slider.
// Also: cardiac output = heart rate × stroke volume (slide 93).
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { Readout, Slider, WidgetFrame } from '../components/ui';
import { cardiacOutput, netFiltrationPressure, round } from '../data/calc';

export function CapillaryExchange() {
  const [pos, setPos] = useState(0); // 0 = arteriole end, 1 = venule end
  const chp = 35 - 17 * pos;
  const bcop = 25;
  const nfp = netFiltrationPressure(chp, bcop);
  // the slide graph runs from x 5 % (arterial end) to 40 % of the picture
  const line = [5 + pos * 35, 9, 5 + pos * 35, 34];
  return (
    <WidgetFrame
      title="การแลกเปลี่ยนที่หลอดเลือดฝอย"
      notice="ความดันเลือดลดลงตามความยาว capillary แต่แรงดึงน้ำกลับ (BCOP) คงที่ → ด้าน **arteriole ของเหลวไหลออก** · ด้าน **venule ไหลกลับเข้า** · ส่วนที่เหลือกลับทางท่อน้ำเหลือง"
      onReset={() => setPos(0)}
    >
      <SlideFig id="a5-104">
        <div className="slide-vline" style={{ left: `${line[0]}%`, top: `${line[1]}%`, height: `${line[3] - line[1]}%` }} />
      </SlideFig>
      <p className="small" style={{ textAlign: 'center', margin: '0 0 4px' }}>
        <b>{nfp > 0.5 ? 'ของเหลวไหลออกจาก capillary' : nfp < -0.5 ? 'ของเหลวไหลกลับเข้า capillary' : 'ไม่มีการไหลสุทธิ'}</b>
      </p>
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
