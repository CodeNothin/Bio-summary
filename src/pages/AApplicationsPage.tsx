// =====================================================================
// สัตว์ 5.8 — applications: diabetes (insulin resistance, OGTT) and
// calcium/bone. Content follows the extra deck "slide เพิ่มเติม 28 ต.ค."
// plus animal slide 168. Section ids match src/data/pages.ts.
// Decisions (user): OGTT table is shown but has no numeric questions
// (TODO 11); calcium is "2 hormones (slide 168) / 3 incl. calcitriol
// (extra deck)" — both shown, TODO(professor-method) 10 left open.
// =====================================================================
import { List, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function AApplicationsPage() {
  return (
    <>
      <Section id="ax-diabetes" title="เบาหวาน" en="diabetes mellitus">
        <Table
          head={['', 'Type 1', 'Type 2 (T2DM)']}
          rows={[
            ['สาเหตุ', 'ตับอ่อนสร้างอินซูลินไม่ได้ (pancreas failure)', '**insulin resistance**: เซลล์กล้ามเนื้อ ไขมัน และตับ**ไม่ตอบสนอง**ต่ออินซูลินตามปกติ'],
            ['ผล', 'กลูโคสเข้าเซลล์ไม่ได้', 'กลูโคสค้างในเลือด → **hyperglycemia**'],
          ]}
        />
        <P>**Insulin resistance (IR)** คือภาวะที่เซลล์ในเนื้อเยื่อที่ไวต่ออินซูลินไม่ตอบสนองต่อฮอร์โมนอินซูลินตามปกติ — ถ้าเซลล์ดื้ออินซูลินมาก ระดับกลูโคสในเลือดจะสูงขึ้น</P>
        <W id="glucose-sim" />
        <P>เกณฑ์วินิจฉัย T2DM ด้วย **Oral Glucose Tolerance Test (OGTT)** ตามตารางในสไลด์ (mg/dL):</P>
        <Table
          head={['', 'อดอาหาร (fasting)', 'หลังกิน (after eating)', '2–3 ชม.']}
          rows={[
            ['ปกติ', '80–100', '170–200', '120–140'],
            ['บกพร่อง (impaired)', '101–125', '190–230', '140–160'],
            ['เบาหวาน (diabetic)', '126+', '220–300', '200+'],
          ]}
        />
        <Note>ตาราง OGTT แสดงไว้ตามสไลด์เพื่ออ่านประกอบ ยังไม่มีโจทย์ให้แปลผลตัวเลข (บางช่วงในตารางไม่ต่อเนื่องกัน เช่น 161–199 ที่ 2–3 ชม.)</Note>
      </Section>

      <Section id="ax-calcium" title="แคลเซียมและกระดูก" en="calcium balance">
        <Table
          head={['ฮอร์โมน', 'จาก', 'ผลต่อ Ca²⁺ ในเลือด', 'กลไก']}
          rows={[
            ['**PTH**', 'ต่อมพาราไทรอยด์', '**เพิ่ม**', 'กระตุ้น osteoclast ยับยั้ง osteoblast · กระตุ้นการเก็บ Ca²⁺ ที่ไต · กระตุ้นการดูดซึมที่ลำไส้เล็ก (ผ่าน active vitamin D)'],
            ['**Calcitonin**', 'ต่อมไทรอยด์', '**ลด**', 'ยับยั้ง osteoclast กระตุ้น osteoblast · ยับยั้งการดูดกลับที่ไต · ลด PTH → ดูดซึมที่ลำไส้ลดลง'],
          ]}
        />
        <P>สไลด์เพิ่มเติม (28 ต.ค.): สมดุลแคลเซียม (การดูดซึมที่ลำไส้ การสร้าง/สลายกระดูก การขับทางไต) ถูกควบคุมหลัก ๆ โดย **3 ฮอร์โมน**: PTH, **1,25-dihydroxycholecalciferol (calcitriol)**, calcitonin</P>
        {/* TODO(professor-method): 2 or 3 calcium hormones — which does the exam expect? */}
        <Note>สไลด์หลัก (168) พูดถึง 2 ฮอร์โมน (PTH, calcitonin) ส่วนสไลด์เพิ่มเติมพูดถึง 3 ฮอร์โมน (เพิ่ม calcitriol) — ยังรอยืนยันจากอาจารย์ว่าข้อสอบใช้แบบไหน</Note>
        <List
          items={[
            'ปัจจัยต่อการดูดซึม Ca: วิตามิน D ช่วย · oxalate ขัดขวาง · การขับทางไตได้รับผลจาก Na, โปรตีน, K',
            '**วงจรชีวิตของกระดูก**: มวลกระดูกเพิ่มจนสูงสุด (peak bone mass) ช่วงอายุราว 30 ปี แล้วลดลงตามอายุ · ผู้หญิงสูญเสียเร็วขึ้นหลังหมดประจำเดือน → กระดูกพรุน (osteoporosis)',
            'อาหารที่ดีและการออกกำลังกายช่วยให้ถึง peak bone mass และช่วยลดการสูญเสียกระดูกเมื่ออายุมากขึ้น',
          ]}
        />
      </Section>
    </>
  );
}
