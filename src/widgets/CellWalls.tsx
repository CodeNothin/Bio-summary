// =====================================================================
// Widget: parenchyma / collenchyma / sclereid / fiber side by side.
// Toggle "ย้อมสี safranin O" to see which walls turn pink-red (secondary
// walls, slides 28–32). Wall thickness is drawn to show thin-even,
// thick-uneven (thick only at the corners) and thick secondary walls.
// =====================================================================
import { useState } from 'react';
import { Toggle, WidgetFrame } from '../components/ui';

/** One cell: an outer wall path and an inner lumen; `corner` thickens corners only. */
function Cell({ x, y, size, wall, corner, stained, label, sub }: {
  x: number; y: number; size: number; wall: number; corner?: boolean; stained: boolean; label: string; sub: string;
}) {
  const wallCls = stained ? 'fill-tone tone-red' : 'fill-tone tone-tan';
  const inner = size - 2 * wall;
  return (
    <g>
      <rect x={x} y={y} width={size} height={size} rx={8} className={wallCls} />
      {corner ? (
        // collenchyma: thick corners, thin sides → inner shape is a rounded square cut at corners
        <rect x={x + 3} y={y + 3} width={size - 6} height={size - 6} rx={size * 0.32} className="fill-tone tone-water" />
      ) : (
        <rect x={x + wall} y={y + wall} width={inner} height={inner} rx={Math.max(4, 8 - wall / 2)} className="fill-tone tone-water" />
      )}
      <text x={x + size / 2} y={y + size + 16} textAnchor="middle" className="small">{label}</text>
      <text x={x + size / 2} y={y + size + 29} textAnchor="middle" className="small mut">{sub}</text>
    </g>
  );
}

export function CellWalls() {
  const [stain, setStain] = useState(false);
  return (
    <WidgetFrame
      title="ผนังเซลล์ 4 แบบ"
      notice="เปิดการย้อมสี แล้วดูว่า**เซลล์ไหนติดสีชมพูแดง** (ผนังทุติยภูมิ) · collenchyma ผนังหนาเฉพาะ**มุม** ส่วน parenchyma บางเท่ากันทุกด้าน"
      onReset={() => setStain(false)}
    >
      <svg viewBox="0 0 340 130" className="stage" role="img" aria-label="เปรียบเทียบผนังเซลล์">
        <Cell x={12} y={14} size={66} wall={3} stained={false} label="parenchyma" sub="ปฐมภูมิ บาง" />
        <Cell x={96} y={14} size={66} wall={3} corner stained={false} label="collenchyma" sub="ปฐมภูมิ หนาไม่เท่า" />
        <Cell x={180} y={14} size={66} wall={18} stained={stain} label="sclereid" sub="ทุติยภูมิ ใหญ่ สั้น" />
        {/* fiber: small and long → drawn as a tall thin cell */}
        <g>
          <rect x={282} y={6} width={30} height={82} rx={10} className={stain ? 'fill-tone tone-red' : 'fill-tone tone-tan'} />
          <rect x={293} y={14} width={8} height={66} rx={4} className="fill-tone tone-water" />
          <text x={297} y={110} textAnchor="middle" className="small">fiber</text>
          <text x={297} y={123} textAnchor="middle" className="small mut">ทุติยภูมิ เล็ก ยาว</text>
        </g>
      </svg>
      <div className="seg" style={{ marginTop: 8 }}>
        <Toggle on={stain} label="ย้อมสี safranin O" onChange={setStain} />
      </div>
      <p className="small" style={{ marginTop: 6 }}>
        {stain
          ? 'sclereid และ fiber (sclerenchyma) ติดสีชมพูแดง — parenchyma และ collenchyma ผนังปฐมภูมิไม่ติดสี'
          : 'ก่อนย้อมสี: ดูความหนาของผนัง (สีน้ำตาล) เทียบกับช่องว่างในเซลล์ (สีฟ้า)'}
      </p>
    </WidgetFrame>
  );
}
