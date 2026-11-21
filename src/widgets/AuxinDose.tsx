// =====================================================================
// Widget: the same auxin concentration affects root and shoot differently
// (plant 5.5 slides 19, 37). Drag the slider along the concentration
// axis; the readout says whether root and coleoptile growth is
// stimulated or inhibited. The picture is the slide-37 graph; a dashed
// line moves across it with the slider. The response functions below
// only decide the readout words and follow the graph's shape (root
// peaks at a much lower concentration than the coleoptile).
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Slider, WidgetFrame } from '../components/ui';

/** Response (−1…+1) of tissue with optimum at `peak` (on a 0–1 log-like axis). */
const response = (x: number, peak: number, width: number) => {
  const r = Math.exp(-(((x - peak) / width) ** 2)) * 1.25 - 0.25;
  return x > peak + width * 1.2 ? Math.max(-1, r - (x - peak - width * 1.2) * 3) : r;
};
const root = (x: number) => response(x, 0.25, 0.13);
const shoot = (x: number) => response(x, 0.62, 0.15);
const word = (r: number) => (r > 0.08 ? 'กระตุ้น ↑' : r < -0.08 ? 'ยับยั้ง ↓' : 'ไม่มีผล');

export function AuxinDose() {
  const [x, setX] = useState(0.6);
  // plot area of the slide graph: x 17 %–87 %, y 15 %–97 % of the picture
  const line = [17 + x * 70, 15, 17 + x * 70, 97];
  return (
    <WidgetFrame
      title="ความเข้มข้นออกซิน: ราก vs ยอด"
      notice="ความเข้มข้นที่**กระตุ้นยอด (coleoptile)** มากที่สุด กลับ**ยับยั้งราก** — เนื้อเยื่อต่างกันไวต่อฮอร์โมนไม่เท่ากัน"
      onReset={() => setX(0.6)}
    >
      <How>เลื่อนแถบความเข้มข้นออกซินด้านล่าง — เส้นบนกราฟจะเลื่อนตาม ดูว่าราก/ตา/ลำต้นถูกกระตุ้นหรือยับยั้ง</How>
      <SlideFig id="p5-37">
        <div className="slide-vline" style={{ left: `${line[0]}%`, top: `${line[1]}%`, height: `${line[3] - line[1]}%` }} />
      </SlideFig>
      <div className="controls">
        <Slider label="ความเข้มข้นออกซิน →" value={x} min={0} max={1} step={0.01} onChange={setX} show={x < 0.35 ? 'ต่ำ' : x < 0.7 ? 'ปานกลาง' : 'สูง'} />
      </div>
      <div className="readouts">
        <div className="readout"><div className="k">ราก</div><div className="v">{word(root(x))}</div></div>
        <div className="readout"><div className="k">ยอด (coleoptile)</div><div className="v">{word(shoot(x))}</div></div>
      </div>
    </WidgetFrame>
  );
}
