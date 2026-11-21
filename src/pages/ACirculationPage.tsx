// =====================================================================
// สัตว์ 5.4 — circulation. Content follows Gen_bio_107_Unit_5 slides
// 79–108. Section ids match src/data/pages.ts.
// Decisions (user): open-circulation examples written as on the slide;
// amphibians 3 chambers, turtles/lizards "4 (incomplete)" explained as a
// partly divided ventricle.
// Writing style: see "How page text is written" in README.md. Every
// question's `inText` phrase must stay in its section (pages.test.tsx).
// =====================================================================
import { Analogy, List, More, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function ACirculationPage() {
  return (
    <>
      {/* slides 79–84 */}
      <Section id="ac-types" title="แบบของระบบไหลเวียน" en="circulatory systems">
        <P>เซลล์เดียว (อะมีบา แบคทีเรีย) แลกเปลี่ยนกับสิ่งแวดล้อมโดยตรงด้วยการแพร่ · สัตว์หลายเซลล์ต้องมีระบบลำเลียง → **ระบบไหลเวียน** ทำหน้าที่ (1) ส่ง O₂ และอาหาร รับ CO₂ และของเสียไปอวัยวะขับถ่าย (ไต ปอด) (2) ควบคุมอุณหภูมิร่างกาย (3) ขนส่งฮอร์โมน</P>
        <Table
          head={['', 'ไม่มีระบบเฉพาะ', 'ระบบเปิด (open)', 'ระบบปิด (closed)']}
          rows={[
            ['ตัวอย่าง', 'cnidarians (แมงกะพรุน), พลานาเรีย, หนอนตัวแบน', 'แมลง และ mollusk (กุ้ง กั้ง ปู) — ตามสไลด์', 'ไส้เดือน หมึก สัตว์มีกระดูกสันหลัง'],
            ['ของเหลว', 'น้ำใน gastrovascular cavity', '**hemolymph**', '**เลือด** แยกจาก interstitial fluid'],
            ['การแลกเปลี่ยน', 'แพร่โดยตรง (flagella/การหดตัวของผนังลำตัวช่วยพาน้ำ)', 'hemolymph ใน sinus สัมผัสอวัยวะโดยตรง', 'ที่หลอดเลือดฝอย (capillary) → interstitial fluid → เซลล์'],
          ]}
        />
        <P>ระบบเปิด (แมลง): **(1)** หัวใจท่อ (tubular heart) ด้านหลังบีบตัว **(2)** hemolymph ไปหลอดเลือดและ sinus **(3)** แลกเปลี่ยนกับเซลล์โดยตรง **(4)** หัวใจคลายตัว hemolymph ถูกดึงกลับทางรู **ostia** (มี valve ปิดเมื่อหัวใจหดตัว) · ไส้เดือน (ปิด): dorsal vessel (main heart), auxiliary hearts, ventral vessel</P>
        <P>**ระบบหัวใจและหลอดเลือด (cardiovascular system)** = หัวใจ + หลอดเลือด + เลือด</P>
      </Section>

      {/* slides 86–89 */}
      <Section id="ac-vertebrate" title="หัวใจสัตว์มีกระดูกสันหลัง" en="vertebrate circulation">
        <P>หัวใจมี 2 ส่วน: **atrium รับเลือดกลับเข้าหัวใจ** · **ventricle ปั๊มเลือดออกจากหัวใจ**</P>
        <P>**ปลา: วงจรเดียว (single circulation)** หัวใจ 2 ห้อง (1A 1V) — ventricle → เหงือก (แลกเปลี่ยนแก๊ส) → ร่างกาย → กลับหัวใจ · เลือดจาก gill capillary ไปเลี้ยงร่างกายโดยตรงโดยไม่กลับหัวใจ **ความดันจึงค่อย ๆ ลดลง เลือดไหลช้า**</P>
        <P>**สัตว์สะเทินน้ำสะเทินบก (กบ) เป็นกลุ่มแรกที่มี 2 วงจร (double circulation)** = วงจรปอด (pulmonary/pulmocutaneous) + วงจรร่างกาย (systemic) หัวใจ **3 ห้อง (2 atrium, 1 ventricle)** · เลือดกลับหัวใจก่อนไปร่างกาย จึงถูกปั๊มซ้ำ ความดันสูงขึ้น · สัตว์อื่นมี 4 ห้อง</P>
        <W id="vertebrate-hearts" />
        <Table
          head={['', 'ปลา', 'กบ', 'เต่า/กิ้งก่า', 'จระเข้', 'นก', 'สัตว์เลี้ยงลูกด้วยนม']}
          rows={[
            ['จำนวนวงจร', '1', '2', '2', '2', '2', '2'],
            ['จำนวนห้อง (ตารางในสไลด์)', '2', '3', '4 (incomplete)', '4', '4', '4'],
          ]}
        />
        <Note>"4 (incomplete)" ของเต่า/กิ้งก่า หมายถึงห้องที่ 4 ยังไม่สมบูรณ์ — ventricle มีผนังกั้นเพียงบางส่วน · กบเป็นกลุ่มแรกที่มี 2 วงจร และมีหัวใจ 3 ห้อง (2A 1V)</Note>
      </Section>

      {/* slides 85, 90–92 */}
      <Section id="ac-heart" title="หัวใจคน" en="human heart">
        <P>หัวใจคน 4 ห้อง: **atrium รับเลือดกลับเข้าหัวใจ** (ขวารับจากร่างกาย ซ้ายรับจากปอด) · **ventricle ปั๊มเลือดออกจากหัวใจ** (ขวาไปปอด ซ้ายไปร่างกาย) · ลิ้นหัวใจกันเลือดไหลย้อน</P>
        <W id="heart-map" />
        <List
          items={[
            '**pulmonary circulation**: ventricle ขวา → pulmonary artery → ปอด (แลกเปลี่ยนแก๊ส) → oxygen-rich blood → pulmonary vein → atrium ซ้าย',
            '**systemic circulation**: ventricle ซ้าย → aorta → แยก 2 ทาง (ส่วนหัวและแขน / อวัยวะช่องท้องและขา) → oxygen-poor blood กลับ atrium ขวาทาง anterior (superior) หรือ posterior (inferior) vena cava',
            '**AV valve** (กั้น atrium–ventricle): ขวา = **tricuspid**, ซ้าย = **bicuspid (mitral)** · **semilunar valve**: กั้น aorta–ventricle ซ้าย และ pulmonary artery–ventricle ขวา',
          ]}
        />
        <W id="heart-path" />
        <Note>artery/vein ตั้งชื่อตาม**ทิศทาง** ไม่ใช่ปริมาณ O₂: pulmonary **artery** มีเลือด O₂ ต่ำ (ออกจากหัวใจ) · pulmonary **vein** มีเลือด O₂ สูง (เข้าหัวใจ)</Note>
      </Section>

      {/* slides 93–97 */}
      <Section id="ac-cycle" title="วัฏจักรหัวใจ" en="cardiac cycle">
        <P>**systole** = ระยะบีบตัว · **diastole** = ระยะคลายตัว · **heart rate** = จำนวนครั้งที่หัวใจบีบตัวต่อนาที · **stroke volume** = ปริมาตรเลือดที่ออกจากหัวใจต่อการบีบของ ventricle 1 ครั้ง · **cardiac output** = ปริมาตรเลือดที่ ventricle ปั๊มใน 1 นาที</P>
        <p className="big-rule">cardiac output = heart rate × stroke volume<br />5.25 L/min = 70 ครั้ง/min × 75 mL/ครั้ง</p>
        <W id="cardiac-output" />
        <P>วัฏจักรหัวใจ 1 รอบ (~0.8 วินาที) มี 3 ระยะ:</P>
        <List
          items={[
            '**(1) หัวใจคลายตัวทั้งหมด (0.4 s)**: ความดันใน ventricle ลดลง **AV valve เปิด** เลือดไหลเข้าเติม ventricle',
            '**(2) atrial systole (0.1 s)**: atrium บีบ ดันเลือดเติม ventricle จนเต็ม',
            '**(3) ventricular systole (0.3 s)**: **ventricle หดตัว → AV valve ปิด (เสียง lub) → ความดันใน ventricle เพิ่มขึ้น → semilunar valve เปิด → เลือดถูกบีบออก**',
          ]}
        />
        <W id="cardiac-cycle" />
        <Table
          head={['เสียง', 'เกิดจาก', 'จังหวะ']}
          rows={[
            ['S1 "lub" (เสียงแรก)', 'AV valve ปิด — เลือดกระแทก AV valve', 'ventricle บีบตัว'],
            ['S2 "dup" (เสียงที่สอง)', 'semilunar valve ปิด — เลือดกระแทก semilunar valve', 'ventricle คลายตัว'],
          ]}
        />
      </Section>

      {/* slides 98–104 */}
      <Section id="ac-vessels" title="หลอดเลือดและความดันเลือด" en="blood vessels">
        <Table
          head={['หลอดเลือด', 'ระบบ', 'ลักษณะ']}
          rows={[
            ['artery', 'distributing (นำเลือดออกจากหัวใจ)', 'ยืดหยุ่นดี elastic fiber มาก ชั้นนอก/ชั้นกลางหนากว่า vein'],
            ['capillary', 'exchanging (แลกเปลี่ยนกับ interstitial fluid)', 'มีเฉพาะ endothelium บางมาก แตกแขนงเป็น capillary bed'],
            ['vein', 'collecting (นำเลือดกลับหัวใจ)', 'vein ใหญ่มี **one-way valve** · กล้ามเนื้อโครงร่างช่วยบีบ'],
          ]}
        />
        <P>ผนังหลอดเลือด 3 ชั้น: นอก (connective tissue + elastic fiber) · กลาง (smooth muscle + elastic fiber) · ใน (**endothelium**) · ทางเดิน: heart → aorta → artery → arteriole → capillary → venule → vein → vena cava</P>
        <P>{'**ความดันเลือด** (arterial pressure): สูงสุด = systolic (หัวใจบีบ) ต่ำสุด = diastolic (หัวใจคลาย) · ปกติผู้ใหญ่ขณะพัก **120/80 mmHg** · hypertension **> 140/90 mmHg** · ความดัน: aorta > artery > arteriole > capillary > venule > vein > vena cava'}</P>
        <W id="vessel-flow" />
        <P>การไหลขึ้นกับ (1) **พื้นที่หน้าตัดรวม** (law of continuity — capillary พื้นที่รวมมากที่สุดจึงไหลช้าที่สุด แลกเปลี่ยนสารได้) (2) **ความดันเลือด**: cardiac output, peripheral resistance, gravity</P>
        <P>เลือดเข้า **capillary bed** ตามความต้องการของอวัยวะ (ออกกำลังกาย → กล้ามเนื้อได้มาก ทางเดินอาหารได้น้อย) ควบคุมโดย (1) กล้ามเนื้อเรียบของ arteriole (2) **precapillary sphincter**</P>
        <P>**การแลกเปลี่ยนที่ capillary**: ความดันเลือด (CHP) ดันของเหลว**ออก** · แรงออสโมติกจากโปรตีนในเลือด (BCOP) ดึง**เข้า** · ด้าน arteriole CHP 35 vs BCOP 25 → ของเหลวออก · ด้าน venule CHP 18 vs BCOP 25 → ของเหลวกลับเข้า · ส่วนที่ไม่กลับ (~3.6 L/วัน) เข้าสู่ระบบน้ำเหลือง</P>
        <p className="big-rule">NFP = CHP − BCOP<br />ด้าน arteriole: 35 − 25 = +10 (ออก) · ด้าน venule: 18 − 25 = −7 (เข้า)</p>
        <W id="capillary-exchange" />
      </Section>

      {/* slides 105–108 */}
      <Section id="ac-blood" title="เลือดและระบบน้ำเหลือง" en="blood & lymph">
        <Table
          head={['ส่วนประกอบ', 'สัดส่วน/จำนวน', 'หน้าที่']}
          rows={[
            ['plasma', '55%', 'น้ำ (ตัวทำละลาย) · ไอออน (สมดุลออสโมติก pH) · โปรตีน: albumin, fibrinogen (การแข็งตัว), immunoglobulin (ภูมิคุ้มกัน) · ขนส่งสารอาหาร ของเสีย แก๊ส ฮอร์โมน'],
            ['เม็ดเลือดแดง (erythrocyte)', '5–6 ล้าน/mm³', 'ขนส่ง O₂ ช่วยขนส่ง CO₂'],
            ['เม็ดเลือดขาว (leukocyte)', '5,000–10,000/mm³', 'ป้องกันและภูมิคุ้มกัน'],
            ['เกล็ดเลือด (platelet)', '250,000–400,000/mm³', 'การแข็งตัวของเลือด'],
          ]}
        />
        <List
          items={[
            'เม็ดเลือดขาว: **granulocyte** (นิวเคลียสเป็นพู มี granule) = neutrophil, eosinophil, basophil · **agranulocyte** (นิวเคลียสใหญ่ค่อนข้างกลม) = lymphocyte, monocyte',
            '**ฮีโมโกลบิน (Hb)** ในเม็ดเลือดแดง: O₂ ละลายใน plasma ได้น้อย จึงต้องมี respiratory pigment · Hb 1 โมเลกุล = heme 4 หน่วย แต่ละ heme มีเหล็ก 1 อะตอมจับ O₂ ได้ 1 โมเลกุล → **จับได้ 4 O₂**',
            '**ระบบน้ำเหลือง**: นำของเหลวและโปรตีนที่ซึมออกจาก capillary และไขมันที่ดูดซึมจากลำไส้เล็กกลับเข้า vena cava · **lymph node** กรอง lymph ทำลายเชื้อโรค',
          ]}
        />
        <More title="นึกภาพแบบนี้">
        <Analogy tag="นึกภาพแบบนี้">
          <P>Hb เหมือนรถเข็นที่มี 4 ช่อง (heme 4 หน่วย) — แต่ละช่องใส่ O₂ ได้ 1 ก้อน รถ 1 คันจึงขน O₂ ได้สูงสุด 4 ก้อน</P>
        </Analogy>
        </More>
      </Section>
    </>
  );
}
