// =====================================================================
// Widget: pick an element and see WHERE its deficiency shows on the plant
// (old leaves at the bottom vs young leaves/tip at the top) and what it
// looks like. Data follows plant 5.3 slides 11–19.
// To change a symptom or role, edit the `elements` table below.
// Sulfur: the slide says "mobile"; per the user's instruction we keep that
// and add a note (moves easily in soil/roots/xylem, not easily via phloem).
// =====================================================================
import { useState } from 'react';
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
  /** how the affected leaves look: yellow, dark green, brown/dead tips, yellow between veins */
  look: 'yellow' | 'dark' | 'tipburn' | 'interveinal' | 'misshapen';
  note?: string;
}

const elements: El[] = [
  { sym: 'N', name: 'ไนโตรเจน', kind: 'macro', mobile: true, form: 'NO₃⁻', role: 'องค์ประกอบของโปรตีน เอนไซม์ คลอโรฟิลล์ ฮอร์โมน กรดนิวคลีอิก', symptom: 'ต้นแคระแกร็น ใบแก่เหลือง (chlorosis)', where: 'old', look: 'yellow' },
  { sym: 'P', name: 'ฟอสฟอรัส', kind: 'macro', mobile: true, form: 'H₂PO₄⁻, HPO₄²⁻', role: 'องค์ประกอบของยีน เยื่อหุ้มเซลล์ (phospholipid) เอนไซม์ ATP', symptom: 'ต้นแคระแกร็น ใบแก่สีเขียวเข้ม หากรุนแรงใบเหลืองและแห้งตาย', where: 'old', look: 'dark' },
  { sym: 'K', name: 'โพแทสเซียม', kind: 'macro', mobile: true, form: 'K⁺', role: 'ควบคุมสมดุลประจุของเซลล์ ค่าออสโมติก และการลำเลียงในพืช', symptom: 'ใบแก่เหลืองและแห้งตายระหว่างเส้นใบ ต้นหักล้มง่าย', where: 'old', look: 'interveinal' },
  { sym: 'Mg', name: 'แมกนีเซียม', kind: 'macro', mobile: true, form: 'Mg²⁺', role: 'องค์ประกอบของคลอโรฟิลล์ กระตุ้นเอนไซม์ เช่น การสังเคราะห์โปรตีน', symptom: 'ใบเหลืองและแห้งตายระหว่างเส้นใบ (ใบแก่)', where: 'old', look: 'interveinal' },
  { sym: 'S', name: 'กำมะถัน', kind: 'macro', mobile: true, form: 'SO₄²⁻', role: 'องค์ประกอบของกรดอะมิโนบางชนิด (cysteine, methionine) สำคัญในปฏิกิริยารีดอกซ์', symptom: 'ต้นแคระแกร็น ใบเหลืองสม่ำเสมอทั้งใบ', where: 'old', look: 'yellow', note: 'สไลด์ระบุว่า S เป็น mobile element — เคลื่อนที่ได้ดีในดิน ราก และไซเลม แต่ย้ายผ่านโฟลเอ็มไปส่วนอื่นได้ไม่ง่ายนัก' },
  { sym: 'Ca', name: 'แคลเซียม', kind: 'macro', mobile: false, form: 'Ca²⁺', role: 'องค์ประกอบของผนังเซลล์ สำคัญต่อการแบ่งเซลล์', symptom: 'ปลายยอดแห้งตาย หงิกงอ (ใบอ่อนที่เพิ่งเกิดใหม่)', where: 'young', look: 'tipburn' },
  { sym: 'Fe', name: 'เหล็ก', kind: 'micro', mobile: false, form: 'Fe²⁺', role: 'ปฏิกิริยารีดอกซ์ การถ่ายทอดอิเล็กตรอน การสร้างคลอโรฟิลล์', symptom: 'ใบเหลืองเกิดที่ใบอ่อนก่อนใบแก่', where: 'young', look: 'yellow' },
  { sym: 'B', name: 'โบรอน', kind: 'micro', mobile: false, form: '—', role: 'การสร้างผนังเซลล์ และการลำเลียงน้ำตาล', symptom: 'ใบอ่อนมีสีเหลือง รูปร่างใบผิดปกติ รากไม่เติบโต', where: 'young', look: 'misshapen' },
];

/** Leaf colours for the healthy plant and each kind of symptom. */
const tone = (look: El['look'] | 'ok') =>
  look === 'ok' ? 'tone-green' : look === 'dark' ? 'tone-dgreen' : look === 'tipburn' ? 'tone-brown' : 'tone-yellow';

export function DeficiencyExplorer() {
  const [sym, setSym] = useState('N');
  const el = elements.find((e) => e.sym === sym)!;
  // three leaf pairs: y = 40 (young, top), 95, 150 (old, bottom)
  const leafLook = (level: 0 | 1 | 2) => {
    const affected = el.where === 'old' ? level === 2 || level === 1 : level === 0;
    return affected ? el.look : 'ok';
  };
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
      <svg viewBox="0 0 220 210" className="stage" style={{ marginTop: 8 }} role="img" aria-label={`อาการขาด ${el.name}`}>
        <rect x={0} y={190} width={220} height={20} className="fill-tone tone-brown" opacity={0.5} />
        <rect x={106} y={30} width={8} height={162} rx={3} className="fill-tone tone-dgreen" />
        {([0, 1, 2] as const).map((lv) => {
          const y = 45 + lv * 55;
          const w = 30 + lv * 10; // older leaves are bigger
          const look = leafLook(lv);
          return (
            <g key={lv}>
              {[-1, 1].map((side) => (
                <g key={side}>
                  <ellipse cx={110 + side * (w + 4)} cy={y} rx={w} ry={12} className={`fill-tone ${tone(look)}`} />
                  {look === 'interveinal' && <line x1={110 + side * 6} y1={y} x2={110 + side * (2 * w + 2)} y2={y} className="stroke-tone tone-dgreen" strokeWidth={3} />}
                  {look === 'tipburn' && <circle cx={110 + side * (2 * w)} cy={y} r={6} className="fill-tone tone-brown" />}
                  {look === 'misshapen' && <path d={`M${110 + side * 8} ${y} q${side * w * 0.6} -14 ${side * w * 1.6} 4`} className="f-none s-ink" strokeWidth={1.5} />}
                </g>
              ))}
            </g>
          );
        })}
        {el.look === 'tipburn' && <circle cx={110} cy={28} r={7} className="fill-tone tone-brown" />}
        <text x={6} y={48} className="small mut">ใบอ่อน</text>
        <text x={6} y={156} className="small mut">ใบแก่</text>
      </svg>
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
