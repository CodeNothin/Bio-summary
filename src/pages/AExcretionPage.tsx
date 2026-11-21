// =====================================================================
// สัตว์ 5.7 — excretion. Content follows Gen_bio_107_Unit_5 slides
// 126–137. Section ids match src/data/pages.ts.
// Decisions (user): step 1 written "infiltration (filtration)";
// amphibians listed under both ammonia and urea, as on the slide.
// Writing style: see "How page text is written" in README.md. Every
// question's `inText` phrase must stay in its section (pages.test.tsx).
// =====================================================================
import { List, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function AExcretionPage() {
  return (
    <>
      {/* slides 126–127 */}
      <Section id="ae-wastes" title="ของเสียไนโตรเจน" en="nitrogenous wastes">
        <P>**การขับถ่าย (excretion)** = กำจัดของเสียพวกไนโตรเจน และรักษาสมดุลน้ำและกรด–เบส · ของเสียมาจากหมู่อะมิโน (–NH₂) ของโปรตีน (กรดอะมิโน) และกรดนิวคลีอิก (เบส) ซึ่งกลายเป็นแอมโมเนีย สัตว์เลือกรูปของเสียตาม**ว่ามีน้ำให้ใช้มากแค่ไหน**:</P>
        <Table
          head={['ของเสีย', 'ลักษณะ', 'สัตว์ที่ขับ']}
          rows={[
            ['**แอมโมเนีย (ammonia)**', '**เกิดเป็นตัวแรก ละลายน้ำดี พิษสูงมาก** — ต้องใช้น้ำมากเจือจาง', 'สัตว์น้ำ: **ปลากระดูกแข็งส่วนใหญ่** สัตว์สะเทินน้ำสะเทินบก'],
            ['**ยูเรีย (urea)**', '**สร้างที่ตับจากแอมโมเนีย + CO₂ พิษต่ำกว่า ~100,000 เท่า** จึงเก็บไว้ที่ความเข้มข้นสูงได้', '**สัตว์เลี้ยงลูกด้วยนม** สัตว์สะเทินน้ำสะเทินบกส่วนใหญ่ **ปลากระดูกอ่อน (ฉลาม)**'],
            ['**กรดยูริก (uric acid)**', '**พิษต่ำ ละลายน้ำน้อยมาก ขับออกเป็น semisolid** — ประหยัดน้ำที่สุด', '**นก สัตว์เลื้อยคลาน แมลง หอยทากบก**'],
          ]}
        />
        <P>สัตว์น้ำขับแอมโมเนียได้ทั้งที่พิษสูง เพราะ**แอมโมเนียละลายน้ำได้ดีและแพร่ผ่านเยื่อเซลล์สู่น้ำรอบตัวได้ทันที** ไม่ต้องเก็บไว้ในตัว</P>
        <W id="n-waste" />
        <Note>สัตว์สะเทินน้ำสะเทินบกอยู่ในทั้งกลุ่มแอมโมเนียและยูเรียในสไลด์ (ระยะที่อยู่ในน้ำ vs บนบก) — ตอบได้ทั้งสองแบบ</Note>
      </Section>

      {/* slides 128, 130 */}
      <Section id="ae-organs" title="อวัยวะขับถ่ายของคน" en="human excretory organs">
        <P>ปัสสาวะเดินทาง: **ไต → ท่อไต (ureter) → กระเพาะปัสสาวะ → ท่อปัสสาวะ (urethra) → ออกนอกร่างกาย**</P>
        <List
          items={[
            '**ไต (kidney)** กรองของเสียและสร้างปัสสาวะ — ได้รับเลือด **20%** ของเลือดที่หัวใจบีบออกแต่ละครั้ง',
            '**ท่อไต (ureter)** นำปัสสาวะจากไตไป**กระเพาะปัสสาวะ (urinary bladder)**',
            '**ท่อปัสสาวะ (urethra)** นำปัสสาวะออกนอกร่างกาย — เพศผู้ของสัตว์เลี้ยงลูกด้วยนมเป็นท่อเดียวกับระบบสืบพันธุ์ · มีกล้ามเนื้อหูรูดระหว่าง urethra กับ bladder',
            'ไตมี cortex, medulla, renal pelvis',
          ]}
        />
      </Section>

      {/* slides 129–135 */}
      <Section id="ae-nephron" title="หน่วยไตและการสร้างปัสสาวะ" en="nephron">
        <P>**หน่วยไต (nephron)** = หน่วยทำงานของไต ประมาณ **1.3 ล้านหน่วยต่อข้าง** · **80% เป็น cortical nephron (loop of Henle สั้น)** และ **20% เป็น juxtamedullary nephron (loop ยาว** — พบเฉพาะสัตว์เลี้ยงลูกด้วยนมและนก) · ปัสสาวะเกิดจาก 4 ขั้น:</P>
        <Table
          head={['ขั้น', 'เกิดอะไร']}
          rows={[
            ['**1. กระบวนการกรอง — infiltration (filtration)**', 'ความดันเลือดดันน้ำและสารละลายผ่านผนัง **glomerulus** เข้า Bowman\'s capsule · ของที่กรองได้: น้ำ กลูโคส ของเสียไนโตรเจน โมเลกุลเล็ก — **เซลล์เม็ดเลือดและโปรตีนใหญ่ผ่านไม่ได้**'],
            ['**2. การดูดกลับ (resorption)**', 'ดูดสารมีประโยชน์ (กลูโคส เกลือ กรดอะมิโน) กลับเข้าร่างกายด้วย active transport'],
            ['**3. การหลั่ง (secretion)**', 'หลั่งสารพิษหรือไอออนที่มีมากเกินเข้าท่อด้วย active transport'],
            ['**4. การขับถ่าย (excretion)**', 'ขับออกในรูปปัสสาวะ'],
          ]}
        />
        <P>แต่ละส่วนของท่อหน่วยไตดูดกลับ/หลั่งต่างกัน:</P>
        <Table
          head={['ส่วน', 'ดูดกลับ', 'หลั่ง']}
          rows={[
            ['proximal convoluted tubule', 'น้ำ กลูโคส NaCl กรดอะมิโน K⁺ HCO₃⁻', 'NH₃, H⁺'],
            ['descending loop of Henle', '**น้ำเพียงอย่างเดียว**', '—'],
            ['ascending loop of Henle', '**NaCl เพียงอย่างเดียว**', '—'],
            ['distal convoluted tubule', 'NaCl, HCO₃⁻', 'H⁺, K⁺'],
            ['collecting duct', 'น้ำ NaCl ยูเรีย (ADH เพิ่มการดูดน้ำที่นี่)', '—'],
          ]}
        />
        <W id="nephron-path" />
      </Section>

      {/* slides 136–137 */}
      <Section id="ae-control" title="การควบคุมการทำงานของไต" en="ADH & RAAS">
        <P>**ADH (vasopressin)** — คุม**ความเข้มข้นของเลือด**: เหงื่อออกมาก osmolarity เพิ่ม → osmoreceptor ในไฮโปทาลามัส → ต่อมใต้สมองส่วนหลังปล่อย ADH → **เพิ่มการดูดน้ำกลับที่ collecting duct** (ปัสสาวะเข้มข้นขึ้น) + กระหายน้ำ → กลับสู่ ~300 mOsm/L</P>
        <P>**RAAS** — คุม**ความดัน/ปริมาตรเลือด**: ความดันหรือปริมาตรเลือดลด (ขาดน้ำ เสียเลือด) → **JGA หลั่ง renin** → angiotensinogen (จากตับ) → angiotensin I → (ACE) → **angiotensin II** → **หลอดเลือดแดงเล็กหดตัว** และกระตุ้นต่อมหมวกไตหลั่ง **aldosterone** → distal tubule **ดูดกลับ Na⁺ และน้ำ**เพิ่ม → ความดันกลับปกติ</P>
        <W id="kidney-control" />
        <P>**ANF (atrial natriuretic factor)** ทำงานตรงข้าม RAAS — ลดภาระน้ำและโซเดียมของระบบไหลเวียน</P>
      </Section>
    </>
  );
}
