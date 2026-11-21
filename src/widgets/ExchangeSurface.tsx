// =====================================================================
// Widget: why big animals need folded surfaces and a circulatory system
// (animal 5.2 slides 31–32). Make a cube-shaped "animal" bigger and watch
// surface area per volume shrink. The picture follows the size: slide
// 31 (a single cell, then an animal two cell layers thick, touch the
// water everywhere) and slide 32 (a big body needs folded internal
// surfaces and a circulatory system).
// Surface/volume of a cube of side s = 6s² / s³ = 6/s.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Readout, Slider, WidgetFrame } from '../components/ui';

export function ExchangeSurface() {
  const [s, setS] = useState(1);
  const area = 6 * s * s;
  const vol = s * s * s;
  const ratio = area / vol;
  return (
    <WidgetFrame
      title="ยิ่งตัวใหญ่ ผิวต่อปริมาตรยิ่งน้อย"
      notice="ขยายก้อนให้ใหญ่ขึ้น: พื้นที่ผิวโตตาม s² แต่ปริมาตรโตตาม s³ → **ผิวต่อปริมาตรลดลง** สัตว์ใหญ่จึงต้องมี**พื้นผิวพับไปมาภายใน** (ถุงลม วิลไล ท่อไต) และ**ระบบไหลเวียน**ส่งสารถึงทุกเซลล์"
      onReset={() => setS(1)}
    >
      <How>เลื่อนแถบขนาดด้านล่าง — ภาพจะเปลี่ยนจากสิ่งมีชีวิตตัวเล็กเป็นตัวใหญ่ และตัวเลขผิว/ปริมาตรจะคำนวณใหม่</How>
      {s <= 2 ? (
        <SlideFig id="a5-31" spot={s === 1 ? [0, 22, 32, 98] : [30, 10, 63, 98]} />
      ) : (
        <SlideFig id="a5-32" />
      )}
      <p className="small" style={{ textAlign: 'center', margin: '0 0 4px' }}>
        <b>{s === 1 ? 'เหมือนเซลล์เดียว: แลกเปลี่ยนโดยการแพร่ได้ทั่วถึง' : s <= 2 ? 'เล็ก: ทุกเซลล์ยังใกล้ผิว (เหมือนไฮดรา 2 ชั้นเซลล์)' : 'ใหญ่: เซลล์ด้านในอยู่ไกลผิว ต้องมีพื้นผิวพับภายในและระบบไหลเวียน'}</b>
      </p>
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
