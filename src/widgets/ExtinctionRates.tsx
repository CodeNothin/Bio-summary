// =====================================================================
// Widget: background vs current extinction rate (Unit 6.5 slides on the
// sixth mass extinction). Background rate = 1–10 species/yr; current
// rate is 100–1000× higher (slide multipliers per group: fish 100×,
// birds 1000×, mollusks 1000×, plants 100×). Bars use a log scale so
// both fit; to change a number, edit `groups`.
// =====================================================================
import { useState } from 'react';
import { Readout, Seg, WidgetFrame } from '../components/ui';

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
  // log10 bar: 1× → 30 px, 1000× → 270 px
  const bar = (mult: number) => 30 + (Math.log10(mult) / 3) * 240;
  return (
    <WidgetFrame
      title="อัตราการสูญพันธุ์: ธรรมชาติ vs ปัจจุบัน"
      notice="อัตราตามธรรมชาติ (background) คือ **1–10 ชนิด/ปี** · ตอนนี้สูงกว่า **100–1000 เท่า** (~1000 ชนิด/ปี ≈ 2–3 ชนิด/วัน) จากฝีมือมนุษย์ → เรียกว่า **การสูญพันธุ์ครั้งใหญ่ครั้งที่ 6**"
      onReset={() => setG('fish')}
    >
      <Seg value={g} options={groups.map((x) => ({ value: x.id as G, label: x.th }))} onChange={setG} />
      <svg viewBox="0 0 300 110" className="stage" style={{ marginTop: 8 }} role="img" aria-label="แท่งเปรียบเทียบอัตราการสูญพันธุ์">
        <text x={4} y={26} className="small">ธรรมชาติ</text>
        <rect x={0} y={32} width={bar(1)} height={18} rx={4} className="fill-tone tone-green" />
        <text x={bar(1) + 6} y={46} className="small">1×</text>
        <text x={4} y={74} className="small">ปัจจุบัน ({sel.th})</text>
        <rect x={0} y={80} width={bar(sel.x)} height={18} rx={4} className="fill-tone tone-red" />
        <text x={Math.min(bar(sel.x) + 6, 262)} y={94} className="small">{sel.x}×</text>
      </svg>
      <p className="small mut" style={{ margin: '2px 0 0' }}>แกนเป็นสเกลลอการิทึม (แต่ละช่วงเท่ากับ ×10) ไม่อย่างนั้นแท่ง "ธรรมชาติ" จะเล็กจนมองไม่เห็น</p>
      <div className="readouts">
        <Readout k={`${sel.th}: ปัจจุบันเทียบกับธรรมชาติ`} v={`สูงกว่า ~${sel.x.toLocaleString()} เท่า`} hl />
        <Readout k="รวมทุกกลุ่ม (สไลด์)" v="~1000 ชนิด/ปี ≈ 2–3 ชนิด/วัน" />
        <Readout k="สาเหตุหลัก (มนุษย์)" v="ทำลายถิ่นอาศัย ใช้ประโยชน์เกินขนาด โลกร้อน มลพิษ ชนิดพันธุ์รุกราน" />
      </div>
    </WidgetFrame>
  );
}
