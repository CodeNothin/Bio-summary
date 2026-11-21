// =====================================================================
// Widget: mark–recapture in a pond (Unit 6.2 slide 6). The pond holds a
// hidden number of fish. Step 1: catch and mark some. Step 2: release and
// let them mix. Step 3: catch again and count marked ones. The estimate
// N = marked × caught ÷ recaptured comes from calc.ts. The slide's own
// squirrel example (slide 6) is shown at the top.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { Readout, Slider, WidgetFrame } from '../components/ui';
import { markRecapture, round } from '../data/calc';
import { seeded } from '../practice/engine';

export function MarkRecapture() {
  const [trueN, setTrueN] = useState(120);
  const [mark, setMark] = useState(30);
  const [catch2, setCatch2] = useState(40);
  const [round2, setRound2] = useState<number | null>(null); // marked fish found in 2nd catch
  const [seed, setSeed] = useState(1);

  /** Simulate the 2nd catch: draw catch2 fish without replacement from trueN, `mark` of which are marked. */
  const recapture = () => {
    const rng = seeded(seed * 7919);
    let marked = Math.min(mark, trueN);
    let left = trueN;
    let found = 0;
    for (let k = 0; k < Math.min(catch2, trueN); k++) {
      if (rng() < marked / left) { found++; marked--; }
      left--;
    }
    setRound2(found);
    setSeed(seed + 1);
  };
  const est = round2 ? markRecapture(mark, catch2, round2) : null;
  return (
    <WidgetFrame
      title="Mark–recapture ในบ่อปลา"
      notice="สัดส่วนปลาที่มีเครื่องหมายใน**การจับครั้งที่ 2** ≈ สัดส่วนในประชากรทั้งบ่อ → **N = ทำเครื่องหมาย × จับครั้งที่ 2 ÷ ที่มีเครื่องหมาย** · กดจับหลายครั้ง: ค่าประมาณแกว่งรอบค่าจริง"
      onReset={() => { setTrueN(120); setMark(30); setCatch2(40); setRound2(null); setSeed(1); }}
    >
      <SlideFig id="e2-6" />
      <p className="small" style={{ margin: '4px 0' }}>ลองเอง: บ่อปลาจำลอง</p>
      <div className="controls">
        <Slider label="จำนวนปลาจริงในบ่อ (ปกติเราไม่รู้)" value={trueN} min={40} max={400} step={10} onChange={(v) => { setTrueN(v); setRound2(null); }} show={`${trueN} ตัว`} />
        <Slider label="ครั้งที่ 1: จับและทำเครื่องหมาย" value={mark} min={5} max={80} step={1} onChange={(v) => { setMark(v); setRound2(null); }} show={`${mark} ตัว`} />
        <Slider label="ครั้งที่ 2: จับได้ทั้งหมด" value={catch2} min={5} max={80} step={1} onChange={(v) => { setCatch2(v); setRound2(null); }} show={`${catch2} ตัว`} />
      </div>
      <div className="btn-row" style={{ marginTop: 8 }}>
        <button className="btn" onClick={recapture}>🎣 ปล่อยปลา รอ แล้วจับครั้งที่ 2</button>
      </div>
      <div className="readouts">
        <Readout k="ที่มีเครื่องหมายในครั้งที่ 2" v={round2 === null ? '—' : `${round2} ตัว`} />
        <Readout k="N ≈ ทำเครื่องหมาย × จับ ÷ ที่มีเครื่องหมาย" v={round2 === null ? '—' : round2 === 0 ? 'หารด้วย 0 ไม่ได้ — จับใหม่' : `${mark} × ${catch2} ÷ ${round2} ≈ ${round(est!, 0)} ตัว`} hl />
        <Readout k="จำนวนจริง" v={`${trueN} ตัว`} />
      </div>
      <p className="small" style={{ marginTop: 6 }}>ตัวอย่างในสไลด์: ทำเครื่องหมาย 4 ตัว จับครั้งที่ 2 ได้ 6 ตัว มีเครื่องหมาย 2 ตัว → 6 ÷ 2 × 4 = 12 ตัว</p>
    </WidgetFrame>
  );
}
