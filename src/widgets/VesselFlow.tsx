// =====================================================================
// Widget: blood vessels from aorta to vena cava (animal 5.4 slides
// 101–102). Tap a vessel type to compare total cross-sectional area,
// flow speed and blood pressure on the slide-102 graphs: the chosen
// vessel's column is highlighted (`col`, percent of the picture).
// The relative values below only drive the readout words.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Readout, WidgetFrame } from '../components/ui';

// relative values 0–1 read off the slide graphs
const vessels = [
  { name: 'aorta', col: [10, 16], area: 0.03, speed: 0.95, pressure: 0.95 },
  { name: 'artery', col: [16, 21], area: 0.05, speed: 0.8, pressure: 0.85 },
  { name: 'arteriole', col: [21, 24], area: 0.25, speed: 0.4, pressure: 0.55 },
  { name: 'capillary', col: [24, 26.5], area: 1, speed: 0.04, pressure: 0.28 },
  { name: 'venule', col: [26.5, 29], area: 0.4, speed: 0.15, pressure: 0.15 },
  { name: 'vein', col: [29, 34.5], area: 0.1, speed: 0.45, pressure: 0.08 },
  { name: 'vena cava', col: [34.5, 43], area: 0.06, speed: 0.5, pressure: 0.03 },
];

export function VesselFlow() {
  const [sel, setSel] = useState(3);
  const v = vessels[sel];
  const lvl = (x: number) => (x > 0.66 ? 'สูง' : x > 0.25 ? 'ปานกลาง' : 'ต่ำ');
  return (
    <WidgetFrame
      title="พื้นที่หน้าตัด · ความเร็ว · ความดัน"
      notice="ที่ **capillary พื้นที่หน้าตัดรวมมากที่สุด → เลือดไหลช้าที่สุด** (law of continuity) จึงมีเวลาแลกเปลี่ยนสาร · ความดันลดลงตลอดทาง aorta → vena cava"
      onReset={() => setSel(3)}
    >
      <How>แตะชนิดหลอดเลือดด้านล่าง — ภาพจะเน้นคอลัมน์ของหลอดเลือดนั้นในกราฟ</How>
      <SlideFig id="a5-102" spot={[v.col[0], 9, v.col[1], 90]} />
      <div className="readouts">
        <Readout k="พื้นที่หน้าตัดรวม" v={v.area === 1 ? 'มากที่สุด' : lvl(v.area)} />
        <Readout k="ความเร็ว" v={v.speed < 0.1 ? 'ช้าที่สุด' : lvl(v.speed)} hl={v.name === 'capillary'} />
        <Readout k="ความดัน" v={v.pressure > 0.9 ? 'สูงที่สุด' : v.pressure < 0.05 ? 'ต่ำที่สุด' : lvl(v.pressure)} />
      </div>
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
