// =====================================================================
// พืช 5.5 — responses and control: perception → transduction → response,
// light (phytochrome, cryptochrome, phototropin), auxin, other hormones.
// Content follows deck Unit_5.5_Responses. Section ids match pages.ts.
// =====================================================================
import { List, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function PResponsePage() {
  return (
    <>
      {/* slides 2–6, 17 */}
      <Section id="pr-steps" title="ขั้นตอนการตอบสนองของพืช" en="signal perception → transduction → response">
        <P>พืชเคลื่อนที่ไม่ได้ จึงมีกลไกรับรู้สัญญาณสิ่งแวดล้อม — เมื่อสัญญาณผิดปกติ (สูง/ต่ำ) พืชจะตอบสนอง เช่น ต้นกล้าในที่มืดยืดยาวผิดปกติ</P>
        <Table
          head={['ขั้น', 'เกิดอะไร']}
          rows={[
            ['1. การรับสัญญาณ (signal perception)', 'สัญญาณจับกับ **receptor** แล้ว receptor **เปลี่ยนรูปร่าง** · สัญญาณจากสิ่งแวดล้อม: แสง อุณหภูมิ การสัมผัส ความชื้น แรงโน้มถ่วง ฯลฯ · สัญญาณภายใน: ฮอร์โมน'],
            ['2. การถ่ายทอดสัญญาณ (signal transduction)', '**second messenger** เพิ่มขึ้นชั่วคราวในเซลล์ ขยายสัญญาณ: cAMP, cGMP, cADPR, DAG, IP₃, **NO**, **Ca²⁺**'],
            ['3. การตอบสนอง (responses)', '(1) **protein modification** เช่น การหุบของก้านใบไมยราบ (K⁺, Cl⁻ ออกจาก pulvinus → เสียแรงดันเต่ง) · (2) **gene expression** เช่น การสังเคราะห์คลอโรฟิลล์เมื่อมีแสง'],
          ]}
        />
        <P>การควบคุมปริมาณฮอร์โมน: สัญญาณสิ่งแวดล้อม + ระยะการเจริญ → สังเคราะห์ฮอร์โมน → ลำเลียงไปเนื้อเยื่อเป้าหมาย → receptor → ถึง **threshold concentration** จึงตอบสนอง → ตอบสนองพอแล้วเกิด **feedback** ยับยั้งการสังเคราะห์ หรือมีกลไกหยุด เช่น สลายฮอร์โมน</P>
      </Section>

      {/* slides 7–15 */}
      <Section id="pr-light" title="การตอบสนองต่อแสง" en="light responses">
        <List
          items={[
            '**แสงเป็นพลังงาน:** photosynthesis สร้างน้ำตาล',
            '**แสงเป็นสัญญาณ:** พืชมี photoreceptor รับแสงแดง สีน้ำเงิน และ UV-B → photomorphogenesis, germination, phototropism, stomatal opening, flowering',
            '**photomorphogenesis** = การเจริญในสภาวะที่ได้รับแสง (ต้นกล้าเขียว) vs **skotomorphogenesis** ในที่มืด (ยืดยาว ซีด)',
          ]}
        />
        <Table
          head={['photoreceptor', 'แสงที่รับ', 'การตอบสนองในสไลด์']}
          rows={[
            ['**phytochrome**', 'red / far-red', 'การงอกของเมล็ดบางชนิด, shade avoidance, sleep movement'],
            ['**cryptochrome**', 'สีน้ำเงิน', 'photomorphogenesis (ร่วมกับ phytochrome)'],
            ['**phototropin**', 'สีน้ำเงิน', 'phototropism (เบนตามแสง)'],
          ]}
        />
        <P>**phytochrome** เป็นโปรตีนที่เปลี่ยนรูปร่างโมเลกุลเมื่อได้รับแสง: **red → Pfr (active)**, **far-red → Pr (inactive)** เปลี่ยนไปมาได้</P>
        <W id="phytochrome" />
        <Note>ระวังชื่อคล้ายกัน: **phototropin** = ตัวรับแสง (receptor) · **phototropism** = การเบนตามแสง (การตอบสนอง)</Note>
      </Section>

      {/* slides 14–22 */}
      <Section id="pr-auxin" title="ออกซิน (auxin)" en="IAA">
        <List
          items={[
            '**Went (1926):** วางวุ้นที่รองปลาย coleoptile ไว้ด้านเดียวของ coleoptile ที่ตัดปลาย ในที่มืด → โค้ง และมุมโค้งเพิ่มตามจำนวนปลายยอด/ความเข้มข้น IAA → ปลายยอดสร้างออกซิน',
            '**ออกซินกระตุ้นการยืดตัวของเซลล์ (cell elongation)**',
            '**phototropism:** ด้านใกล้แสงมีออกซินน้อยกว่าด้านไกลแสง → ด้านไกลแสงยืดมาก → โค้งเข้าหาแสง · ให้ NPA (ยับยั้งการลำเลียงออกซิน) → ไม่โค้ง',
            '**gravitropism:** ออกซินในเนื้อเยื่อไม่เท่ากัน → ยืดไม่เท่ากัน · ลำต้น = negative gravitropism · ราก = positive gravitropism',
          ]}
        />
        <W id="auxin-bending" />
        <W id="auxin-dose" />
        <P>**ลำเลียงระยะไกล:** auxin สร้างที่ยอดและใบอ่อน ลำเลียง**ลงไปที่ราก** · cytokinin และ strigolactone สร้างที่ราก ลำเลียง**ขึ้นไปยอด** — ร่วมกันควบคุมตาข้าง</P>
        <P>**apical dominance:** ตายอดข่มตาข้าง เพื่อให้ทรงพุ่มไม่บดบังแสงกัน · ตัดยอด (แหล่งสร้าง auxin) → ตาข้างเจริญเป็นกิ่ง → ทรงพุ่มแน่น</P>
        <P>**การประยุกต์:** ออกซินความเข้มข้นสูงพอกระตุ้นการสร้างรากของกิ่งตัด (ผงเร่งรากสำหรับปักชำและตอนกิ่ง)</P>
      </Section>

      {/* slides 16, 23–37 */}
      <Section id="pr-hormones" title="ฮอร์โมนพืชอื่น ๆ" en="plant hormones">
        <P>ฮอร์โมน = สารที่สร้างในเนื้อเยื่อบริเวณหนึ่ง ลำเลียงได้ และควบคุมการตอบสนองได้แม้มีความเข้มข้นต่ำ</P>
        <Table
          head={['ฮอร์โมน', 'บทบาทในสไลด์']}
          rows={[
            ['**cytokinin** (kinetin, zeatin)', 'กระตุ้นการแบ่งเซลล์ · น้ำมะพร้าวมี zeatin ใช้เพาะเลี้ยงเนื้อเยื่อ · เกี่ยวกับโรค crown gall (Agrobacterium tumefaciens)'],
            ['**gibberellin (GA)**', 'ยืดปล้อง การงอกของเมล็ด การออกดอก · โรคข้าวตัวเมีย Bakanae (Gibberella fujikuroi) · พ่น GA: ก้านช่อองุ่นยาวขึ้น ต้นเตี้ยสูงขึ้น กะหล่ำออกดอก · เมล็ดงอก: GA ชักนำเอนไซม์สลายอาหารสะสม'],
            ['**abscisic acid (ABA)**', 'เมล็ดพักตัว ตา (bud) พักตัว · ขาดน้ำ → ABA ในใบเพิ่มได้ถึง 50 เท่า → ปากใบปิด ลดการโตของยอด เพิ่มราก · ยับยั้งการงอก'],
            ['**ethylene** (แก๊ส)', 'triple response ของต้นกล้า (อ้วน เตี้ย ไม่ตอบสนองแรงโน้มถ่วง → ดันผ่านดินแน่นได้) · ผลสุก (ผลไม้ climacteric เช่น กล้วย ทุเรียน) · ใบร่วง'],
            ['**brassinosteroid**', 'การยืดและแบ่งเซลล์ การเปลี่ยนสภาพท่อลำเลียง การงอก photomorphogenesis การเจริญพันธุ์ · mutant ที่ไม่สร้าง BR ต้นเตี้ย'],
            ['**strigolactone**', 'รากสร้างเพื่อดึงดูดเชื้อราไมคอร์ไรซา (แต่กระตุ้นการงอกของวัชพืชกาฝากด้วย) · ควบคุมตาข้างไม่ให้เจริญเป็นกิ่ง — mutant ไม่สร้าง SL แตกกอมาก'],
          ]}
        />
        <W id="auxin-cytokinin" />
        <P>**ใบร่วง (leaf abscission):** ใบแก่มี auxin ลดลง → กระตุ้นการสร้าง ethylene → ethylene กระตุ้นการสร้างเอนไซม์สลายผนังเซลล์บริเวณ abscission zone</P>
        <Note>สรุปสไลด์ 37: (1) เซลล์ควบคุมปริมาณฮอร์โมนให้อยู่ในระดับที่ตอบสนอง (2) ความเข้มข้นเดียวกันให้ผลต่างกันในเนื้อเยื่อต่างกัน (3) ฮอร์โมนมีบทบาทร่วมกัน เช่น apical dominance</Note>
      </Section>
    </>
  );
}
