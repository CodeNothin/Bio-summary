// =====================================================================
// Widget: auxin:cytokinin ratio in tissue culture (Skoog & Miller 1957,
// plant 5.5 slide 24). High ratio → roots, low ratio → shoots, in
// between → callus (an undifferentiated lump of dividing cells).
// =====================================================================
import { useState } from 'react';
import { Slider, WidgetFrame } from '../components/ui';

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
      <svg viewBox="0 0 240 130" className="stage" role="img" aria-label="ผลของอัตราส่วนฮอร์โมน">
        <rect x={70} y={30} width={100} height={90} rx={12} className="f-none s-muted" strokeWidth={2} />
        <rect x={72} y={92} width={96} height={26} rx={8} className="fill-tone tone-yellow" opacity={0.5} />
        <ellipse cx={120} cy={88} rx={18} ry={11} className={`fill-tone ${result === 'shoots' ? 'tone-green' : 'tone-tan'}`} />
        {result === 'roots' && <path d="M108 96 L96 116 M120 98 L120 118 M132 96 L144 116" className="f-none stroke-tone tone-tan" strokeWidth={3} />}
        {result === 'shoots' && <path d="M112 78 Q106 58 98 52 M120 76 L120 48 M128 78 Q136 58 144 52" className="f-none stroke-tone tone-dgreen" strokeWidth={4} />}
        <text x={120} y={18} textAnchor="middle" className="small">
          {result === 'roots' ? 'เกิดราก (root formation)' : result === 'shoots' ? 'เกิดยอด (shoot formation)' : 'callus (กลุ่มเซลล์แบ่งตัว)'}
        </text>
      </svg>
      <div className="controls">
        <Slider label="auxin" value={auxin} min={0} max={1} step={0.01} onChange={setAuxin} show={auxin.toFixed(2)} />
        <Slider label="cytokinin" value={cyto} min={0} max={1} step={0.01} onChange={setCyto} show={cyto.toFixed(2)} />
      </div>
      <p className="small">ตัวอย่างในสไลด์: IBA 0.5 μg/ml อย่างเดียว → ราก · IBA 0.5 + tZ 2.0 μg/ml → ยอดเขียว</p>
    </WidgetFrame>
  );
}
