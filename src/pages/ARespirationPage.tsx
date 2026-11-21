// =====================================================================
// สัตว์ 5.5 — respiration and gas exchange. Content follows
// Gen_bio_107_Unit_5 slides 109–125. Section ids match pages.ts.
// Decision (user): pleural fluid keeps the slide's word "surfactant".
// =====================================================================
import { List, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function ARespirationPage() {
  return (
    <>
      {/* slide 109 */}
      <Section id="ar-intro" title="การหายใจคืออะไร" en="gas exchange vs cellular respiration">
        <P>สิ่งมีชีวิตได้พลังงานส่วนใหญ่ถึง **90%** จากการสลายโมเลกุลอาหารแบบใช้ O₂</P>
        <Table
          head={['', 'การหายใจ (respiration / gas exchange)', 'การหายใจระดับเซลล์ (cellular respiration)']}
          rows={[
            ['เกิดที่', 'ระดับร่างกาย (organismal level)', 'ระดับเซลล์'],
            ['คืออะไร', 'นำ O₂ เข้าและ CO₂ ออกจากร่างกาย', 'สร้างพลังงาน ATP จากกลูโคสหรือสารอาหารอื่น'],
          ]}
        />
        <P>respiratory medium (อากาศ/น้ำ) → respiratory surface → ระบบไหลเวียน → เซลล์ · ต้องการ O₂ ไปใช้สันดาปอาหาร และผลิต CO₂ จากปฏิกิริยาสันดาปอาหาร</P>
      </Section>

      {/* slides 110–116 */}
      <Section id="ar-organs" title="อวัยวะแลกเปลี่ยนแก๊ส 5 แบบ" en="respiratory organs">
        <Table
          head={['อวัยวะ', 'พบใน', 'จุดสำคัญ']}
          rows={[
            ['1. เยื่อเซลล์ (wet body surface)', 'โปรโตซัว อะมีบา · ฟองน้ำ cnidarians หนอนตัวแบน', 'ทุกเซลล์สัมผัสน้ำ/ความชื้นโดยตรง แพร่ผ่าน · surface บางและกว้าง'],
            ['2. ผิวหนัง (cutaneous)', 'ไส้เดือนดิน สัตว์สะเทินน้ำสะเทินบกบางชนิด', 'ผิวหนังต้องชื้นพอ'],
            ['3. เหงือก (gill)', 'ดาวทะเล หนอนทะเล (parapodium) หอย กุ้ง ปลา', 'ข้อดี: ไม่ต้องรักษาความชื้น · ข้อเสีย: O₂ ในน้ำน้อยกว่าในอากาศ (โดยเฉพาะน้ำเค็มและน้ำอุ่น)'],
            ['4. ท่อลม (trachea)', 'แมลง ตะขาบ กิ้งกือ', 'รูเปิด (spiracle) → trachea → tracheole → สัมผัสเซลล์กล้ามเนื้อโดยตรง'],
            ['5. ปอด (lung)', 'แมงมุม หอยทากบก สัตว์มีกระดูกสันหลัง', 'เยื่อบาง ๆ พับไปมา ล้อมด้วยหลอดเลือดฝอยจำนวนมาก'],
          ]}
        />
        <P>เหงือกปลา: น้ำเข้าปาก → ช่องคอหอย → เหงือก → ออกนอกตัว · ให้น้ำผ่านเหงือกตลอดเวลา และเลือดไหล**สวนทาง**กับน้ำ = **countercurrent exchange**</P>
        <W id="countercurrent" />
      </Section>

      {/* slides 117–120 */}
      <Section id="ar-lungs" title="ปอดของกบ นก และคน" en="lungs">
        <W id="resp-map" />
        <Table
          head={['สัตว์', 'แบบ', 'กลไก']}
          rows={[
            ['กบ', '**positive pressure breathing**', 'ดึงอากาศทางรูจมูก ปิดจมูกและปาก แล้วกลืนอากาศเข้าหลอดลม · หายใจออก: ปอดและกล้ามเนื้อลำตัวหดตัวดันอากาศออก'],
            ['นก', 'ถุงลม 8–9 ถุง', 'หายใจเข้า: อากาศส่วนใหญ่ไป posterior air sac · หายใจออก: อากาศจาก posterior air sac ผ่านปอด · แลกเปลี่ยนที่ **parabronchi** แบบ **cross-current**'],
            ['คน', '**negative pressure breathing**', 'ดูดอากาศเข้าปอด · ปอดมีถุงหุ้ม 2 ชั้น ชั้นนอกยึดผนังทรวงอก ช่องว่างระหว่างถุงทั้ง 2 ชั้นมีของเหลวบรรจุอยู่ (surfactant)'],
          ]}
        />
        <W id="bird-airsacs" />
        <P>ปอดคน 2 ข้างมีถุงลม (alveoli) ประมาณ **300 ล้าน**อัน พื้นที่แลกเปลี่ยนแก๊ส **≈ 100 ตร.ม.** (ครึ่งสนามเทนนิส) · ทางเดินอากาศ: nasal cavity → pharynx → larynx → trachea → bronchus → bronchiole → alveoli</P>
      </Section>

      {/* slides 121–122 */}
      <Section id="ar-mechanics" title="กลไกการหายใจในคน" en="mechanism of breathing">
        <List
          items={[
            'อากาศเคลื่อนเข้า–ออกได้ต้องมี**ความแตกต่างของความดันอากาศ** (pressure gradient)',
            'อาศัย (1) **กล้ามเนื้อระหว่างกระดูกซี่โครง (intercostal muscle)** (2) **กะบังลม (diaphragm)** — การหดของ diaphragm ทำให้คล้ายลูกสูบ',
            'ไม่มีการหายใจ: ความดันบรรยากาศ = ความดันในทรวงอก = 760 mmHg · หายใจเข้า: ความดันในทรวงอกลด → อากาศไหลเข้า · หายใจออก: ความดันเพิ่ม → อากาศไหลออก',
          ]}
        />
        <W id="breathing" />
      </Section>

      {/* slides 123–125 */}
      <Section id="ar-transport" title="การควบคุมและการขนส่งแก๊ส" en="control & gas transport">
        <P>ศูนย์ควบคุมการหายใจอยู่ที่ **medulla oblongata และ pons** · ปัจจัยที่ทำให้หายใจเร็วขึ้น = **ปริมาณ CO₂** ในเลือดและในของเหลวในสมองและไขสันหลัง</P>
        <P>วงจร: ออกกำลังกาย → CO₂ ในเนื้อเยื่อเพิ่ม → **pH เลือดลดลง** (ปกติ ~7.4) → medulla ตรวจพบ pH ของน้ำไขสันหลังลด + ตัวรับที่ **carotid arteries และ aorta** → สั่งกล้ามเนื้อซี่โครงและกะบังลมให้หายใจเร็ว/ลึกขึ้น → CO₂ ลด pH กลับขึ้น</P>
        <W id="partial-pressure" />
        <List
          items={[
            '**O₂**: ที่ปอดจับกับ Hb ในเม็ดเลือดแดงเป็น HbO₂ → ที่เนื้อเยื่อปล่อย O₂ ออก',
            '**CO₂**: ในเม็ดเลือดแดง CO₂ + H₂O → H₂CO₃ → H⁺ + **HCO₃⁻** · HCO₃⁻ ออกไปใน plasma (แลกกับ Cl⁻: chloride shift) · H⁺ จับกับ Hb · บางส่วนจับ Hb เป็น HbCO₂ · ที่ปอดปฏิกิริยาย้อนกลับ ปล่อย CO₂ ออก',
          ]}
        />
        <Note>แก๊สแพร่จาก**ความดันย่อย (partial pressure) สูง → ต่ำ** เป็นปัจจัยสำคัญที่กำหนดทิศทางการขนส่ง</Note>
      </Section>
    </>
  );
}
