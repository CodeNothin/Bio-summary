// =====================================================================
// Widget: background vs current extinction rate (Unit 6.5 slides on the
// sixth mass extinction). Background rate = 1–10 species/yr; current
// rate is 100–1000× higher (slide multipliers per group: fish 100×,
// birds 1000×, mollusks 1000×, plants 100×). The picture is the deck's
// graph of cumulative vertebrate extinctions (slide 18); to change a
// number, edit `groups`.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Readout, Seg, WidgetFrame } from '../components/ui';

const groups = [
  { id: 'fish', th: 'ปลา', x: 100 },
  { id: 'plants', th: 'พืช', x: 100 },
  { id: 'birds', th: 'นก', x: 1000 },
  { id: 'molluscs', th: 'หอย (mollusks)', x: 1000 },
] as const;
type G = (typeof groups)[number]['id'];

export function ExtinctionRates() {
  const [g, setG] = useState<G>('fish');
  const sel = groups.find((x) => x.id === g)!;
  return (
    <WidgetFrame
      title="อัตราการสูญพันธุ์: ธรรมชาติ vs ปัจจุบัน"
      notice="อัตราตามธรรมชาติ (background) คือ **1–10 ชนิด/ปี** · ตอนนี้สูงกว่า **100–1000 เท่า** (~1000 ชนิด/ปี ≈ 2–3 ชนิด/วัน) จากฝีมือมนุษย์ → เรียกว่า **การสูญพันธุ์ครั้งใหญ่ครั้งที่ 6**"
      onReset={() => setG('fish')}
    >
      <Seg value={g} options={groups.map((x) => ({ value: x.id as G, label: x.th }))} onChange={setG} />
      <div style={{ marginTop: 8 }}>
        <SlideFig id="e5-18" />
      </div>
      <How>เลือกกลุ่มสัตว์ด้านบน — ภาพไม่เปลี่ยน แต่ตัวเลขเทียบกับอัตราธรรมชาติด้านล่างจะเปลี่ยน</How>
      <p className="small" style={{ margin: '0 0 4px' }}>เส้นประ (Background) = อัตราตามธรรมชาติ · เส้นสี = การสูญพันธุ์จริงของสัตว์มีกระดูกสันหลัง ซึ่งพุ่งขึ้นหลังการปฏิวัติอุตสาหกรรม</p>
      <div className="readouts">
        <Readout k={`${sel.th}: ปัจจุบันเทียบกับธรรมชาติ`} v={`สูงกว่า ~${sel.x.toLocaleString()} เท่า`} hl />
        <Readout k="รวมทุกกลุ่ม (สไลด์)" v="~1000 ชนิด/ปี ≈ 2–3 ชนิด/วัน" />
        <Readout k="สาเหตุหลัก (มนุษย์)" v="ทำลายถิ่นอาศัย ใช้ประโยชน์เกินขนาด โลกร้อน มลพิษ ชนิดพันธุ์รุกราน" />
      </div>
    </WidgetFrame>
  );
}
