// =====================================================================
// Widget: blood vessels from aorta to vena cava (animal 5.4 slides
// 101–102). Tap a vessel type to compare total cross-sectional area,
// flow speed and blood pressure. The bar heights are relative and follow
// the shapes of the slide's graphs (pressure falls all the way; speed is
// lowest where total area is largest — the capillaries).
// =====================================================================
import { useState } from 'react';
import { WidgetFrame } from '../components/ui';

// relative values 0–1 read off the slide graphs
const vessels = [
  { name: 'aorta', area: 0.03, speed: 0.95, pressure: 0.95 },
  { name: 'artery', area: 0.05, speed: 0.8, pressure: 0.85 },
  { name: 'arteriole', area: 0.25, speed: 0.4, pressure: 0.55 },
  { name: 'capillary', area: 1, speed: 0.04, pressure: 0.28 },
  { name: 'venule', area: 0.4, speed: 0.15, pressure: 0.15 },
  { name: 'vein', area: 0.1, speed: 0.45, pressure: 0.08 },
  { name: 'vena cava', area: 0.06, speed: 0.5, pressure: 0.03 },
];

export function VesselFlow() {
  const [sel, setSel] = useState(3);
  const rows = [
    { key: 'area' as const, label: 'พื้นที่หน้าตัดรวม', tone: 'tone-tan' },
    { key: 'speed' as const, label: 'ความเร็วการไหล', tone: 'tone-blue' },
    { key: 'pressure' as const, label: 'ความดันเลือด', tone: 'tone-red' },
  ];
  const v = vessels[sel];
  return (
    <WidgetFrame
      title="พื้นที่หน้าตัด · ความเร็ว · ความดัน"
      notice="ที่ **capillary พื้นที่หน้าตัดรวมมากที่สุด → เลือดไหลช้าที่สุด** (law of continuity) จึงมีเวลาแลกเปลี่ยนสาร · ความดันลดลงตลอดทาง aorta → vena cava"
      onReset={() => setSel(3)}
    >
      <svg viewBox="0 0 300 200" className="stage" role="img" aria-label="กราฟเปรียบเทียบหลอดเลือด">
        {rows.map((r, ri) => (
          <g key={r.key} transform={`translate(0 ${ri * 62})`}>
            <text x={4} y={14} className="small">{r.label}</text>
            {vessels.map((x, k) => {
              const h = 6 + x[r.key] * 38;
              return (
                <rect key={x.name} x={10 + k * 41} y={58 - h} width={34} height={h} rx={3} className={`fill-tone ${r.tone}`} opacity={k === sel ? 1 : 0.4} onClick={() => setSel(k)} style={{ cursor: 'pointer' }} />
              );
            })}
          </g>
        ))}
      </svg>
      <div className="seg" style={{ marginTop: 6 }}>
        {vessels.map((x, k) => (
          <button key={x.name} className={k === sel ? 'on' : ''} onClick={() => setSel(k)} style={{ fontSize: '0.78rem', padding: '3px 6px', minHeight: 34 }}>
            {x.name}
          </button>
        ))}
      </div>
      <p className="small" style={{ marginTop: 6 }}>
        <b>{v.name}</b>:{' '}
        {v.name === 'capillary'
          ? 'ผนังมีเฉพาะ endothelium เส้นผ่านศูนย์กลาง 3–10 µm (RBC 7–10 µm) แลกเปลี่ยนสารกับ interstitial fluid'
          : v.name === 'aorta'
            ? 'ความดันสูงสุด — ความดันปกติผู้ใหญ่ขณะพัก 120/80 mmHg (systolic/diastolic), hypertension > 140/90'
            : v.name.startsWith('vein') || v.name === 'venule' || v.name === 'vena cava'
              ? 'collecting system นำเลือดกลับหัวใจ — vein ใหญ่มี one-way valve และอาศัยกล้ามเนื้อโครงร่างบีบ'
              : 'distributing system นำเลือดออกจากหัวใจ ผนังมี elastic fiber และกล้ามเนื้อเรียบหนา'}
      </p>
    </WidgetFrame>
  );
}
