// =====================================================================
// Widget: cardiac output = heart rate × stroke volume (animal 5.4
// slide 93). Uses calc.ts. Start values are the slide's example.
// =====================================================================
import { useState } from 'react';
import { Readout, Slider, WidgetFrame } from '../components/ui';
import { cardiacOutput, round } from '../data/calc';

export function CardiacOutput() {
  const [hr, setHr] = useState(70);
  const [sv, setSv] = useState(75);
  return (
    <WidgetFrame
      title="Cardiac output"
      notice="ค่าตั้งต้นคือตัวอย่างในสไลด์: 70 ครั้ง/นาที × 75 mL/ครั้ง = **5.25 L/min** · ระวังหน่วย: mL × 1/1000 = L"
      onReset={() => { setHr(70); setSv(75); }}
    >
      <div className="controls">
        <Slider label="heart rate (ครั้ง/นาที)" value={hr} min={40} max={180} step={1} onChange={setHr} show={`${hr}`} />
        <Slider label="stroke volume (mL/ครั้ง)" value={sv} min={40} max={120} step={1} onChange={setSv} show={`${sv}`} />
      </div>
      <div className="readouts">
        <Readout k="HR × SV" v={`${hr} × ${sv} = ${hr * sv} mL/min`} />
        <Readout k="cardiac output" v={`${round(cardiacOutput(hr, sv), 2)} L/min`} hl />
      </div>
    </WidgetFrame>
  );
}
