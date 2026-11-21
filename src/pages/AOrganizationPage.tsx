// =====================================================================
// สัตว์ 5.1 — organization: levels, epithelial, connective, muscle and
// nerve tissue, organ systems. Content follows Gen_bio_107_Unit_5
// slides 4–27. Section ids match src/data/pages.ts.
// Decision (user): collagen fiber is described exactly as on slide 15.
// =====================================================================
import { Analogy, List, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function AOrganizationPage() {
  return (
    <>
      {/* slides 4–8 */}
      <Section id="ao-levels" title="ลำดับขั้นการจัดระบบ" en="levels of organization">
        <P>สิ่งมีชีวิตเซลล์เดียว: เซลล์เดียวทำทุกหน้าที่ · สิ่งมีชีวิตหลายเซลล์: เซลล์ทำหน้าที่เฉพาะและพึ่งพากัน — กระบวนการพื้นฐานของชีวิต: metabolism (nutrition), responsiveness, movement, growth, differentiation, reproduction</P>
        <P>**กายวิภาคศาสตร์ (anatomy)** ศึกษาโครงสร้างและตำแหน่งปกติของอวัยวะ · **สรีรวิทยา (physiology)** ศึกษาหน้าที่ — โครงสร้างทำให้ทำหน้าที่ได้</P>
        <Table
          head={['ลำดับ', 'ความหมาย', 'ตัวอย่าง']}
          rows={[
            ['เซลล์ (cell)', 'หน่วยพื้นฐานของโครงสร้างและการทำงาน', 'เซลล์ประสาท เซลล์เม็ดเลือด เซลล์กระดูก'],
            ['เนื้อเยื่อ (tissue)', 'กลุ่มเซลล์โครงสร้างและหน้าที่คล้ายกัน ทำงานร่วมกัน', 'เนื้อเยื่อประสาท เลือด กระดูก'],
            ['อวัยวะ (organ)', 'เนื้อเยื่ออย่างน้อย 2 กลุ่มทำงานร่วมกัน', 'สมอง หัวใจ ผิวหนัง'],
            ['ระบบอวัยวะ (organ system)', 'อวัยวะตั้งแต่ 2 ชนิดขึ้นไปทำงานร่วมกัน', 'ระบบประสาท ระบบไหลเวียน'],
            ['สิ่งมีชีวิต (organism)', 'ดำเนินกระบวนการพื้นฐานของชีวิตได้ครบ', 'คน สุนัข'],
          ]}
        />
        <Analogy>
          <P>เหมือนสร้างบ้านใน Minecraft: **บล็อก** (เซลล์) → **กำแพง/พื้น** ที่ทำจากบล็อกชนิดเดียวกัน (เนื้อเยื่อ) → **ห้อง** ที่ใช้ทั้งกำแพง พื้น ประตู (อวัยวะ) → **ทั้งชั้น** ที่ห้องต่าง ๆ ทำงานร่วมกัน (ระบบอวัยวะ) → **บ้านทั้งหลัง** (สิ่งมีชีวิต)</P>
        </Analogy>
        <P>เนื้อเยื่อสัตว์มี **4 ชนิดหลัก**: บุผิว (epithelial) · เกี่ยวพัน (connective) · กล้ามเนื้อ (muscle) · ประสาท (nerve)</P>
      </Section>

      {/* slides 10–14 */}
      <Section id="ao-epithelial" title="เนื้อเยื่อบุผิว" en="epithelial tissue">
        <List
          items={[
            'เซลล์เรียงชิดกันแน่น มีสารระหว่างเซลล์น้อย · ด้านที่ติดโครงสร้างเรียก **basement membrane** · ด้านอิสระเรียก **apical surface**',
            'หน้าที่: ปกคลุมผิวทั้งภายนอกและภายใน · รับความรู้สึก · ดูดซึม · สร้างและหลั่งสาร · ป้องกันสารเคมี เชื้อโรค และการสูญเสียน้ำ',
            'แบ่งตามหน้าที่: **covering epithelium** (ปกคลุม) และ **modified epithelium** — glandular (สร้างสาร), neuroepithelium (รับความรู้สึก), myoepithelium (เคลื่อนไหว), pigmented (สะสมรงควัตถุ)',
            'แบ่งตามรูปร่าง: squamous (แบนบาง) · cuboidal (ลูกเต๋า) · columnar (ทรงกระบอกสูง)',
            'แบ่งตามจำนวนชั้น: simple (ชั้นเดียว) · stratified (หลายชั้น) · pseudostratified (หลายชั้นเทียม — ทุกเซลล์ติด basement membrane)',
          ]}
        />
        <W id="epithelium" />
      </Section>

      {/* slides 15–21 */}
      <Section id="ao-connective" title="เนื้อเยื่อเกี่ยวพัน" en="connective tissue">
        <P>ยึดประสานอวัยวะอื่นเข้าด้วยกันและเป็นโครงร่าง · **เซลล์**กระจายอยู่ใน**สารระหว่างเซลล์ (extracellular matrix)** · **matrix** = เส้นใย (fiber) + น้ำ + ของเหลว</P>
        <Table
          head={['เส้นใย', 'ลักษณะ (ตามสไลด์ 15)']}
          rows={[
            ['**collagen fiber**', 'รูปร่างตรง ขนาดใหญ่ ประกอบขึ้นจาก fibrin และ microfibril ตามลำดับ ทำหน้าที่ให้ความยืดหยุ่น และให้ความแข็งแรง'],
            ['**elastic fiber**', 'เป็นลอนคลื่น ยืดหยุ่นสูงสุด พบที่ aorta และกระดูกอ่อนใบหู'],
            ['**reticular fiber**', 'เล็ก บาง สานเป็นร่างแห พบที่ไขกระดูก ม้าม ต่อมน้ำเหลือง'],
          ]}
        />
        <Table
          head={['ชนิด', 'รายละเอียด']}
          rows={[
            ['1. connective tissue proper', '**loose**: fibroblast, collagen + elastic, โปร่ง ห่อหุ้มกล้ามเนื้อ หลอดเลือด เส้นประสาท · **dense**: fibroblast + collagen มาก เรียงแน่น → **tendon** (กล้ามเนื้อ–กระดูก), **ligament** (กระดูก–กระดูก)'],
            ['2. adipose tissue', 'adipose cell เก็บไขมัน ใต้ผิวหนังและรอบอวัยวะ (หัวใจ ไต) ป้องกันแรงกระแทก สะสมพลังงาน'],
            ['3. supporting: cartilage', 'chondrocyte ใน lacuna · **hyaline** (ผนังกั้นรูจมูก) · **elastic** (ใบหู) · **fibrocartilage** (ระหว่างข้อกระดูกสันหลัง)'],
            ['3. supporting: bone', 'osteocyte ใน lacuna · ECM = collagen + แคลเซียม · หน่วยย่อย **osteon** · **osteoblast สร้าง / osteoclast ทำลาย**'],
            ['4. blood', 'เซลล์แขวนลอยใน **plasma** (matrix ของเหลว ไม่ได้สร้างจากเซลล์เม็ดเลือด): RBC, WBC, platelet'],
          ]}
        />
        <Note>จำ: osteo**blast** = **b**uild · osteo**clast** = **c**rash — ใช้ต่อในเรื่อง PTH/calcitonin</Note>
      </Section>

      {/* slides 22–24 */}
      <Section id="ao-muscle-nerve" title="เนื้อเยื่อกล้ามเนื้อและประสาท" en="muscle & nerve tissue">
        <Table
          head={['', 'โครงร่าง (skeletal)', 'หัวใจ (cardiac)', 'เรียบ (smooth)']}
          rows={[
            ['รูปร่าง', 'ยาว เรียงเป็นมัด', 'ยาว แตกแขนง (bifurcate)', 'กระสวย'],
            ['นิวเคลียส', 'มากกว่า 1 อยู่รอบนอก', '1 อัน', '1 อัน'],
            ['ลักษณะเด่น', 'myofilament เรียงเป็นระเบียบ', 'intercalated discs', '—'],
            ['การควบคุม', 'ใต้อำนาจจิตใจ (voluntary)', 'นอกอำนาจจิตใจ', 'นอกอำนาจจิตใจ'],
          ]}
        />
        <P>**เนื้อเยื่อประสาท** = เซลล์ประสาท (**neuron**) + เซลล์ค้ำจุน (**neuroglia**) · neuron = ตัวเซลล์ (cell body) + แขนง (processes): **เดนไดรต์ (dendrite) รับ**กระแสประสาท · **แอกซอน (axon) ส่ง**กระแสประสาท</P>
      </Section>

      {/* slides 25–27 */}
      <Section id="ao-organs" title="อวัยวะและระบบอวัยวะ" en="organs & organ systems">
        <P>**อวัยวะ** = เนื้อเยื่ออย่างน้อย 2 กลุ่มทำงานร่วมกัน เช่น หัวใจ = กล้ามเนื้อหัวใจ + เส้นประสาท + เลือด สูบฉีดเลือด · **ระบบอวัยวะ** เช่น หัวใจ + หลอดเลือด = ระบบไหลเวียนเลือด</P>
        <P>ร่างกายคนมี **11 ระบบอวัยวะ**: circulatory, digestive, endocrine, excretory (urinary), immune (lymphatic), integumentary, muscular, nervous, reproductive, respiratory, skeletal</P>
        <Note>อย่าสับสนตัวเลข: **4** ชนิดเนื้อเยื่อ · **11** ระบบอวัยวะ · **9** ต่อมไร้ท่อ (บท 5.6)</Note>
      </Section>
    </>
  );
}
