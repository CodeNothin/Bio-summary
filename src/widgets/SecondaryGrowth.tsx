// =====================================================================
// Widget: a dicot stem going from primary to secondary growth.
// Slide "เวลา" (time): the vascular cambium links the separate bundles
// into a ring and adds secondary xylem inward and secondary phloem
// outward, so the stem gets wider (slides 38–41).
// =====================================================================
import { useState } from 'react';
import { Slider, WidgetFrame } from '../components/ui';
import { polar } from '../data/diagrams/shapes';

export function SecondaryGrowth() {
  const [t, setT] = useState(0); // 0 = primary only, 1 = several years of secondary growth
  const C = 120;
  const grow = t * 38; // how much wider the stem gets
  const R = 70 + grow; // stem radius
  const cambR = 46 + grow * 0.75; // cambium ring radius moves outward
  const ring = t > 0.15; // bundles joined into a ring once cambium works between them
  const bundles = [0, 45, 90, 135, 180, 225, 270, 315];
  const xylemRings = Math.floor(t * 3.99); // number of yearly secondary-xylem rings
  return (
    <WidgetFrame
      title="จาก primary สู่ secondary growth"
      notice="เลื่อนเวลา: vascular cambium (เส้นสีม่วง) เชื่อมมัดท่อลำเลียงเป็น**วง** แล้วสร้าง **secondary xylem เข้าด้านใน** (เป็นชั้น ๆ) และ **secondary phloem ออกด้านนอก** ลำต้นจึงขยายขนาด"
      onReset={() => setT(0)}
    >
      <svg viewBox="0 0 240 240" className="stage" role="img" aria-label="ภาคตัดขวางลำต้นขณะเติบโต">
        <circle cx={C} cy={C} r={R} className="fill-tone tone-dgreen" />
        <circle cx={C} cy={C} r={R - 6} className="fill-tone tone-green" />
        {/* secondary xylem: grows inward from the cambium as rings */}
        {ring && <circle cx={C} cy={C} r={cambR - 2} className="fill-tone tone-red" opacity={0.85} />}
        {ring && Array.from({ length: xylemRings }, (_, k) => (
          <circle key={k} cx={C} cy={C} r={26 + (k + 1) * ((cambR - 28) / (xylemRings + 1))} className="f-none s-ink" strokeWidth={0.8} opacity={0.6} />
        ))}
        {/* secondary phloem: thin band just outside the cambium */}
        {ring && <circle cx={C} cy={C} r={cambR + 8} className="f-none stroke-tone tone-orange" strokeWidth={8} />}
        {/* primary bundles (still visible early on) */}
        {!ring && bundles.map((a) => {
          const [xo, yo] = polar(C, C, 54, a);
          const [xi, yi] = polar(C, C, 38, a);
          return (
            <g key={a}>
              <circle cx={xo} cy={yo} r={8} className="fill-tone tone-orange" />
              <circle cx={xi} cy={yi} r={9} className="fill-tone tone-red" />
            </g>
          );
        })}
        {/* pith */}
        <circle cx={C} cy={C} r={26} className="fill-tone tone-tan" />
        {/* cambium */}
        {ring ? (
          <circle cx={C} cy={C} r={cambR + 2} className="f-none stroke-tone tone-purple" strokeWidth={2.5} />
        ) : (
          bundles.map((a) => {
            const [x1, y1] = polar(C, C, 46, a - 8);
            const [x2, y2] = polar(C, C, 46, a + 8);
            return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-tone tone-purple" strokeWidth={2.5} />;
          })
        )}
      </svg>
      <div className="controls">
        <Slider label="เวลา" value={t} min={0} max={1} step={0.01} onChange={setT} show={t < 0.16 ? 'primary growth (ใกล้ยอด)' : `secondary growth ~${Math.max(1, xylemRings)} ปี`} />
      </div>
      <p className="small">
        สี: <i className="dot tone-orange" /> phloem · <i className="dot tone-purple" /> vascular cambium · <i className="dot tone-red" /> xylem · <i className="dot tone-tan" /> pith
      </p>
    </WidgetFrame>
  );
}
