// =====================================================================
// Widget: blood glucose over a day (animal 5.6 slide 167 + extra deck on
// insulin resistance). Press "กินข้าว" to add a meal; insulin brings the
// level back to ~90 mg/100 mL, glucagon raises it when it falls.
// Toggle "ดื้ออินซูลิน" to see why glucose stays high in type 2 diabetes.
// This is a teaching model (simple step rules), not real physiology data.
// =====================================================================
import { useEffect, useState } from 'react';
import { Toggle, WidgetFrame } from '../components/ui';

const SET = 90; // normal level from slide 167 (mg/100 mL)

export function GlucoseSim() {
  const [g, setG] = useState<number[]>(() => Array(60).fill(SET));
  const [resist, setResist] = useState(false);
  const [running, setRunning] = useState(true);
  const now = g[g.length - 1];
  const insulin = now > SET + 5;
  const glucagon = now < SET - 5;

  // every 250 ms: move glucose toward the set point; insulin works poorly when resistant
  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      setG((arr) => {
        const cur = arr[arr.length - 1];
        let next = cur;
        if (cur > SET) next = cur - (cur - SET) * (resist ? 0.015 : 0.12);
        else if (cur < SET) next = cur + (SET - cur) * 0.12;
        next -= 0.6; // cells keep using glucose
        return [...arr.slice(1), Math.max(40, next)];
      });
    }, 250);
    return () => clearInterval(t);
  }, [running, resist]);

  const meal = () => setG((arr) => [...arr.slice(1), arr[arr.length - 1] + 60]);
  const px = (i: number) => 10 + i * 4.6;
  const py = (v: number) => 120 - (v - 40) * 0.5;
  const path = g.map((v, i) => `${i ? 'L' : 'M'}${px(i).toFixed(1)} ${py(v).toFixed(1)}`).join(' ');
  return (
    <WidgetFrame
      title="ควบคุมกลูโคสในเลือด"
      notice="กดกินข้าว: กลูโคสพุ่ง → **insulin** ดึงกลับลงมา (เซลล์รับกลูโคส ตับเก็บเป็น glycogen) · ปล่อยไว้นาน: กลูโคสต่ำ → **glucagon** สลาย glycogen · เปิด**ดื้ออินซูลิน**: เซลล์ไม่ตอบสนอง กลูโคสค้างสูง (hyperglycemia)"
      onReset={() => { setG(Array(60).fill(SET)); setResist(false); setRunning(true); }}
    >
      <svg viewBox="0 0 290 130" className="stage" role="img" aria-label="กราฟกลูโคสในเลือด">
        <line x1={10} y1={py(SET)} x2={285} y2={py(SET)} className="s-good" strokeDasharray="5 4" strokeWidth={1.5} />
        <text x={286} y={py(SET) - 4} textAnchor="end" className="small mut">ปกติ ~90</text>
        <path d={path} className="f-none s-accent" strokeWidth={2.5} />
        <text x={12} y={14} className="small">{Math.round(now)} mg/100 mL</text>
      </svg>
      <div className="readouts">
        <div className={`readout${insulin ? ' hl' : ''}`}><div className="k">insulin (ลดกลูโคส)</div><div className="v">{insulin ? (resist ? 'หลั่ง แต่เซลล์ไม่ตอบสนอง' : 'กำลังหลั่ง') : '—'}</div></div>
        <div className={`readout${glucagon ? ' hl' : ''}`}><div className="k">glucagon (เพิ่มกลูโคส)</div><div className="v">{glucagon ? 'กำลังหลั่ง' : '—'}</div></div>
      </div>
      <div className="seg" style={{ marginTop: 8 }}>
        <button className="on" onClick={meal}>🍚 กินข้าว</button>
        <Toggle on={resist} label="ดื้ออินซูลิน (T2DM)" onChange={setResist} />
        <Toggle on={!running} label="หยุดเวลา" onChange={(v) => setRunning(!v)} />
      </div>
    </WidgetFrame>
  );
}
