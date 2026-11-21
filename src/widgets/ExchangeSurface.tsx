// =====================================================================
// Widget: why big animals need folded surfaces and a circulatory system
// (animal 5.2 slides 31–32). Make a cube-shaped "animal" bigger and watch
// surface area per volume shrink: a cell or a 2-layer animal touches the
// water everywhere, a big body does not.
// Surface/volume of a cube of side s = 6s² / s³ = 6/s.
// =====================================================================
import { useState } from 'react';
import { Readout, Slider, WidgetFrame } from '../components/ui';

export function ExchangeSurface() {
  const [s, setS] = useState(1);
  const area = 6 * s * s;
  const vol = s * s * s;
  const ratio = area / vol;
  const px = 18 + s * 14; // drawn size
  return (
    <WidgetFrame
      title="ยิ่งตัวใหญ่ ผิวต่อปริมาตรยิ่งน้อย"
      notice="ขยายก้อนให้ใหญ่ขึ้น: พื้นที่ผิวโตตาม s² แต่ปริมาตรโตตาม s³ → **ผิวต่อปริมาตรลดลง** สัตว์ใหญ่จึงต้องมี**พื้นผิวพับไปมาภายใน** (ถุงลม วิลไล ท่อไต) และ**ระบบไหลเวียน**ส่งสารถึงทุกเซลล์"
      onReset={() => setS(1)}
    >
      <svg viewBox="0 0 260 150" className="stage" role="img" aria-label="ก้อนลูกบาศก์">
        <rect x={130 - px / 2} y={75 - px / 2} width={px} height={px} rx={4} className="fill-tone tone-pink" />
        {Array.from({ length: Math.min(s, 8) }, (_, k) => (
          <line key={k} x1={130 - px / 2} y1={75 - px / 2 + (k * px) / s} x2={130 + px / 2} y2={75 - px / 2 + (k * px) / s} className="s-muted" strokeWidth={0.5} />
        ))}
        <text x={130} y={145} textAnchor="middle" className="small">{s === 1 ? 'เหมือนเซลล์เดียว: แลกเปลี่ยนโดยการแพร่ได้ทั่วถึง' : s <= 2 ? 'เล็ก: ทุกเซลล์ยังใกล้ผิว (เหมือนไฮดรา 2 ชั้นเซลล์)' : 'ใหญ่: เซลล์ด้านในอยู่ไกลผิว ต้องมีระบบลำเลียง'}</text>
      </svg>
      <div className="controls">
        <Slider label="ขนาด (ด้าน s)" value={s} min={1} max={8} step={1} onChange={setS} show={`${s}`} />
      </div>
      <div className="readouts">
        <Readout k="พื้นที่ผิว 6s²" v={area} />
        <Readout k="ปริมาตร s³" v={vol} />
        <Readout k="ผิว / ปริมาตร" v={ratio.toFixed(2)} hl />
      </div>
    </WidgetFrame>
  );
}
