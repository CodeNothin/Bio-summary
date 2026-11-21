// =====================================================================
// Widget: auxin:cytokinin ratio in tissue culture (Skoog & Miller 1957,
// plant 5.5 slide 24). High ratio → roots, low ratio → shoots, in
// between → callus (an undifferentiated lump of dividing cells).
// The picture is the slide-24 figure; the part of the Skoog & Miller
// grid that matches the sliders is highlighted (percent of the picture):
// IAA increases to the right, kinetin (a cytokinin) downwards.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Slider, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

const spots: Record<string, Box> = {
  roots: [32, 12, 53, 33],
  shoots: [14, 51, 35, 74],
  callus: [25, 32, 53, 54],
};

export function AuxinCytokinin() {
  const [auxin, setAuxin] = useState(0.5);
  const [cyto, setCyto] = useState(0.5);
  const ratio = (auxin + 0.05) / (cyto + 0.05);
  const result = ratio > 2 ? 'roots' : ratio < 0.5 ? 'shoots' : 'callus';
  return (
    <WidgetFrame
      title="ออกซิน : ไซโทไคนิน ในขวดเพาะเลี้ยง"
      notice="อัตราส่วน **auxin:cytokinin สูง → ราก** · **ต่ำ (cytokinin มาก) → ยอด** · พอ ๆ กัน → callus · cytokinin ยังกระตุ้นการแบ่งเซลล์และ **greening**"
      onReset={() => { setAuxin(0.5); setCyto(0.5); }}
    >
      <How>เลื่อนแถบ auxin และ cytokinin ด้านล่าง — ภาพจะเน้นผลที่เกิด (ราก ยอด หรือ callus)</How>
      <SlideFig id="p5-24" spot={spots[result]} />
      <p className="small" style={{ textAlign: 'center', margin: '0 0 4px' }}>
        <b>{result === 'roots' ? 'เกิดราก (root formation)' : result === 'shoots' ? 'เกิดยอด (shoot formation)' : 'callus (กลุ่มเซลล์แบ่งตัว)'}</b>
      </p>
      <div className="controls">
        <Slider label="auxin" value={auxin} min={0} max={1} step={0.01} onChange={setAuxin} show={auxin.toFixed(2)} />
        <Slider label="cytokinin" value={cyto} min={0} max={1} step={0.01} onChange={setCyto} show={cyto.toFixed(2)} />
      </div>
      <p className="small">ตัวอย่างในสไลด์: IBA 0.5 μg/ml อย่างเดียว → ราก · IBA 0.5 + tZ 2.0 μg/ml → ยอดเขียว</p>
    </WidgetFrame>
  );
}
