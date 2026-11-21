// =====================================================================
// Widget: parenchyma / collenchyma / sclereid / fiber, each shown with
// its slide photo (plant 5.1 slides 28–32). The photos are already
// stained with safranin O: secondary walls (sclerenchyma) are pink-red,
// primary walls are not. Pick a cell type to see its photo and facts.
// To change a fact, edit `cells`.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Readout, Seg, T, WidgetFrame } from '../components/ui';

const cells = {
  par: {
    label: 'parenchyma', fig: 'p1-28',
    wall: 'ปฐมภูมิ บาง สม่ำเสมอทุกด้าน', stain: 'ไม่ติดสี',
    note: 'พบได้ทั่วไป เช่น ในใบ — ผนังปฐมภูมิเป็นสารกลุ่มคาร์โบไฮเดรตที่**ไม่ติดสีเมื่อย้อมด้วย safranin O**',
  },
  col: {
    label: 'collenchyma', fig: 'p1-30',
    wall: 'ปฐมภูมิ หนา**ไม่สม่ำเสมอ**', stain: 'ไม่ติดสี',
    note: 'ให้ความแข็งแรง มักพบใต้ epidermis โดยเฉพาะบริเวณสันของลำต้นที่เป็นเหลี่ยม — ในภาพ ด้านล่างสีแดงคือ fiber',
  },
  scl: {
    label: 'sclereid', fig: 'p1-31',
    wall: '**ทุติยภูมิ** หนา', stain: 'ติดสีชมพูแดง',
    note: 'sclerenchyma ชนิดหนึ่ง เซลล์**ขนาดใหญ่ สั้น** เห็นลายที่ผนังเซลล์ชัดเจน (เส้นประสีเหลืองล้อมไว้ 1 เซลล์)',
  },
  fib: {
    label: 'fiber', fig: 'p1-32',
    wall: '**ทุติยภูมิ** หนา', stain: 'ติดสีชมพูแดง',
    note: 'sclerenchyma อีกชนิด เซลล์**ขนาดเล็ก ยาว** ให้ความแข็งแรงกับท่อลำเลียงอาหาร (phloem)',
  },
};
type K = keyof typeof cells;

export function CellWalls() {
  const [k, setK] = useState<K>('par');
  const c = cells[k];
  return (
    <WidgetFrame
      title="ผนังเซลล์ 4 แบบ"
      notice="ภาพทั้งหมด**ย้อมด้วย safranin O** แล้ว: เซลล์ที่มีผนัง**ทุติยภูมิ** (sclereid, fiber) ติดสีชมพูแดง · parenchyma กับ collenchyma ผนังปฐมภูมิไม่ติดสี — collenchyma หนาไม่เท่ากัน"
      onReset={() => setK('par')}
    >
      <How>เลือกชนิดเซลล์ด้านล่าง — ภาพจะเปลี่ยนเป็นภาพถ่ายเซลล์ชนิดนั้น</How>
      <Seg value={k} options={(Object.keys(cells) as K[]).map((v) => ({ value: v, label: cells[v].label }))} onChange={setK} />
      <div style={{ marginTop: 8 }}>
        <SlideFig id={c.fig} />
      </div>
      <div className="readouts">
        <Readout k="ผนังเซลล์" v={<T>{c.wall}</T>} />
        <Readout k="safranin O" v={c.stain} hl={c.stain !== 'ไม่ติดสี'} />
      </div>
      <p className="small">
        <T>{c.note}</T>
      </p>
    </WidgetFrame>
  );
}
