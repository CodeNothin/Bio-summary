// =====================================================================
// สัตว์ 5.7 — excretion. Content follows Gen_bio_107_Unit_5 slides
// 126–137. Section ids match src/data/pages.ts.
// Decisions (user): step 1 written "infiltration (filtration)";
// amphibians listed under both ammonia and urea, as on the slide.
// =====================================================================
import { List, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function AExcretionPage() {
  return (
    <>
      {/* slides 126–127 */}
      <Section id="ae-wastes" title="ของเสียไนโตรเจน" en="nitrogenous wastes">
        <P>**การขับถ่าย (excretion)** = กำจัดของเสียพวกไนโตรเจนที่เกิดในร่างกาย และรักษาสมดุลน้ำและกรด–เบส · ของเสียมาจากหมู่อะมิโน (–NH₂) ของโปรตีน (กรดอะมิโน) และกรดนิวคลีอิก (เบสไนโตรเจน)</P>
        <W id="n-waste" />
        <Note>สัตว์สะเทินน้ำสะเทินบกอยู่ในทั้งกลุ่มแอมโมเนียและยูเรียในสไลด์ (ระยะที่อยู่ในน้ำ vs บนบก) — ตอบได้ทั้งสองแบบ</Note>
      </Section>

      {/* slide 128 */}
      <Section id="ae-organs" title="อวัยวะขับถ่ายของคน" en="human excretory organs">
        <List
          items={[
            '**ไต (kidney)** กรองของเสียและขับปัสสาวะ — เลือดมาเลี้ยงไต **20%** ต่อการบีบตัวของหัวใจ 1 ครั้ง',
            '**ท่อไต (ureter)** นำปัสสาวะจากไตไป**กระเพาะปัสสาวะ (urinary bladder)**',
            '**ท่อปัสสาวะ (urethra)** นำปัสสาวะออกนอกร่างกาย — เพศผู้ของสัตว์เลี้ยงลูกด้วยนมเป็นท่อเดียวกับระบบสืบพันธุ์ · มีกล้ามเนื้อหูรูดระหว่าง urethra กับ bladder',
            'ไตมี cortex, medulla, renal pelvis · **cortical nephron 80%** (loop of Henle สั้น) · **juxtamedullary nephron 20%** (loop ยาว — พบเฉพาะสัตว์เลี้ยงลูกด้วยนมและนก)',
          ]}
        />
      </Section>

      {/* slides 129–135 */}
      <Section id="ae-nephron" title="หน่วยไตและการสร้างปัสสาวะ" en="nephron">
        <P>**หน่วยไต (nephron)** = หน่วยทำงานของไต ประมาณ **1.3 ล้านหน่วยต่อข้าง**</P>
        <Table
          head={['ขั้น', 'เกิดอะไร']}
          rows={[
            ['1. กระบวนการกรอง — infiltration (filtration)', 'น้ำและสารละลายในเลือดถูกดันผ่านผนัง glomerulus เข้า Bowman\'s capsule'],
            ['2. การดูดกลับ (resorption)', 'ดูดสารมีประโยชน์ (กลูโคส เกลือ กรดอะมิโน) กลับเข้าร่างกายด้วย active transport'],
            ['3. การหลั่ง (secretion)', 'หลั่งสารพิษหรือไอออนที่มีมากเกินเข้าท่อด้วย active transport'],
            ['4. การขับถ่าย (excretion)', 'ขับออกในรูปปัสสาวะ'],
          ]}
        />
        <W id="nephron-path" />
      </Section>

      {/* slides 136–137 */}
      <Section id="ae-control" title="การควบคุมการทำงานของไต" en="ADH & RAAS">
        <W id="kidney-control" />
        <P>**ANF (atrial natriuretic factor)** ทำงานตรงข้าม RAAS — ลดภาระน้ำและโซเดียมของระบบไหลเวียน</P>
      </Section>
    </>
  );
}
