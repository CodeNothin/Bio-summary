// =====================================================================
// Widget: pick an element and see its deficiency on the slide's own
// lettuce photos (plant 5.3 slides 11–19), plus WHERE it shows (old
// leaves vs young leaves/tip) and why (mobile vs immobile element).
// To change a symptom or role, edit the `elements` table below.
// Sulfur: the slide says "mobile"; per the user's instruction we keep that
// and add a note (moves easily in soil/roots/xylem, not easily via phloem).
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { T, WidgetFrame } from '../components/ui';

type Where = 'old' | 'young' | 'roots';
interface El {
  sym: string;
  name: string;
  kind: 'macro' | 'micro';
  mobile: boolean;
  form: string;
  role: string;
  symptom: string;
  where: Where;
  /** slide photo (src/data/figures.json) */
  fig: string;
  note?: string;
}

const elements: El[] = [
  { sym: 'N', name: 'ไนโตรเจน', kind: 'macro', mobile: true, form: 'NO₃⁻', role: 'องค์ประกอบของโปรตีน เอนไซม์ คลอโรฟิลล์ ฮอร์โมน กรดนิวคลีอิก', symptom: 'ต้นแคระแกร็น ใบแก่เหลือง (chlorosis)', where: 'old', fig: 'p3-10' },
  { sym: 'P', name: 'ฟอสฟอรัส', kind: 'macro', mobile: true, form: 'H₂PO₄⁻, HPO₄²⁻', role: 'องค์ประกอบของยีน เยื่อหุ้มเซลล์ (phospholipid) เอนไซม์ ATP', symptom: 'ต้นแคระแกร็น ใบแก่สีเขียวเข้ม หากรุนแรงใบเหลืองและแห้งตาย', where: 'old', fig: 'p3-11' },
  { sym: 'K', name: 'โพแทสเซียม', kind: 'macro', mobile: true, form: 'K⁺', role: 'ควบคุมสมดุลประจุของเซลล์ ค่าออสโมติก และการลำเลียงในพืช', symptom: 'ใบแก่เหลืองและแห้งตายระหว่างเส้นใบ ต้นหักล้มง่าย', where: 'old', fig: 'p3-12' },
  { sym: 'Mg', name: 'แมกนีเซียม', kind: 'macro', mobile: true, form: 'Mg²⁺', role: 'องค์ประกอบของคลอโรฟิลล์ กระตุ้นเอนไซม์ เช่น การสังเคราะห์โปรตีน', symptom: 'ใบเหลืองและแห้งตายระหว่างเส้นใบ (ใบแก่)', where: 'old', fig: 'p3-14' },
  { sym: 'S', name: 'กำมะถัน', kind: 'macro', mobile: true, form: 'SO₄²⁻', role: 'องค์ประกอบของกรดอะมิโนบางชนิด (cysteine, methionine) สำคัญในปฏิกิริยารีดอกซ์', symptom: 'ต้นแคระแกร็น ใบเหลืองสม่ำเสมอทั้งใบ', where: 'old', fig: 'p3-15', note: 'สไลด์ระบุว่า S เป็น mobile element — เคลื่อนที่ได้ดีในดิน ราก และไซเลม แต่ย้ายผ่านโฟลเอ็มไปส่วนอื่นได้ไม่ง่ายนัก' },
  { sym: 'Ca', name: 'แคลเซียม', kind: 'macro', mobile: false, form: 'Ca²⁺', role: 'องค์ประกอบของผนังเซลล์ สำคัญต่อการแบ่งเซลล์', symptom: 'ปลายยอดแห้งตาย หงิกงอ (ใบอ่อนที่เพิ่งเกิดใหม่)', where: 'young', fig: 'p3-13' },
  { sym: 'Fe', name: 'เหล็ก', kind: 'micro', mobile: false, form: 'Fe²⁺', role: 'ปฏิกิริยารีดอกซ์ การถ่ายทอดอิเล็กตรอน การสร้างคลอโรฟิลล์', symptom: 'ใบเหลืองเกิดที่ใบอ่อนก่อนใบแก่', where: 'young', fig: 'p3-16' },
  { sym: 'B', name: 'โบรอน', kind: 'micro', mobile: false, form: '—', role: 'การสร้างผนังเซลล์ และการลำเลียงน้ำตาล', symptom: 'ใบอ่อนมีสีเหลือง รูปร่างใบผิดปกติ รากไม่เติบโต', where: 'young', fig: 'p3-17' },
];

export function DeficiencyExplorer() {
  const [sym, setSym] = useState('N');
  const el = elements.find((e) => e.sym === sym)!;
  return (
    <WidgetFrame
      title="ขาดธาตุแล้วใบไหนแสดงอาการ?"
      notice="ธาตุ **mobile** ถูกย้ายจากใบแก่ไปเลี้ยงใบอ่อน → **ใบแก่ (ล่าง)** แสดงอาการก่อน · ธาตุ **immobile** ย้ายไม่ได้ → **ใบอ่อน/ยอด (บน)** แสดงอาการ"
      onReset={() => setSym('N')}
    >
      <div className="seg">
        {elements.map((e) => (
          <button key={e.sym} className={e.sym === sym ? 'on' : ''} onClick={() => setSym(e.sym)} style={{ flex: '0 0 auto', minWidth: 44 }}>
            {e.sym}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 8 }}>
        <SlideFig id={el.fig} />
      </div>
      <div className="readouts">
        <div className="readout hl">
          <div className="k">{el.sym} · {el.name} · {el.kind === 'macro' ? 'macronutrient' : 'micronutrient'}</div>
          <div className="v">{el.mobile ? 'mobile → ใบแก่' : 'immobile → ใบอ่อน/ยอด'}</div>
        </div>
        <div className="readout">
          <div className="k">รูปที่ละลายได้</div>
          <div className="v">{el.form}</div>
        </div>
      </div>
      <div className="step-text">
        <b>บทบาท:</b> <T>{el.role}</T>
        <br />
        <b>อาการขาด:</b> <T>{el.symptom}</T>
        {el.note && (
          <>
            <br />
            <span className="small">⚠️ {el.note}</span>
          </>
        )}
      </div>
    </WidgetFrame>
  );
}
