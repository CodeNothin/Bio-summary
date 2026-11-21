// =====================================================================
// พืช 5.1–5.2 — plant organization, tissues, cross-sections, leaf, cell
// types, growth. Content follows deck Unit_5_1_tissue (slide numbers in
// the comments). Each <Section id> must match src/data/pages.ts.
// Widgets are placed with <W id="..."/> (registered in widgets/all.ts).
// To edit the wording, change the strings; **text** shows in bold.
// =====================================================================
import { Analogy, List, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function PStructurePage() {
  return (
    <>
      {/* slides 4–10 */}
      <Section id="pl-intro" title="พืชคืออะไร" en="plants">
        <P>พืชเป็น**สิ่งมีชีวิตหลายเซลล์แบบยูแคริโอต (multicellular eukaryote)** ที่สร้างอาหารเองได้ด้วยการสังเคราะห์ด้วยแสง</P>
        <List
          items={[
            '**มีผนังเซลล์ (cell wall)** — ใช้แรงดันเต่ง (turgor) ในการคงรูปร่าง',
            '**มีคลอโรพลาสต์ (chloroplast)** — สร้างอาหารเองได้',
            '**เคลื่อนที่ไม่ได้** — จึงต้องปรับตัวเข้าหาสิ่งแวดล้อม (ที่มาของบท 5.5 การตอบสนอง)',
          ]}
        />
        <P>พืชแบ่งเป็น 4 กลุ่ม: (1) ไม่มีท่อลำเลียง (nonvascular, เช่น มอส) (2) มีท่อลำเลียงแต่ไม่สร้างเมล็ด (seedless vascular, เช่น เฟิน) (3) เมล็ดเปลือย (gymnosperm, เช่น ปรง) (4) **พืชดอก (angiosperm)** — เมล็ดมีสิ่งห่อหุ้ม มีประมาณ **90%** ของชนิดพืชทั้งหมด</P>
        <Table
          head={['', 'ใบเลี้ยงเดี่ยว (monocot)', 'ใบเลี้ยงคู่ (eudicot)']}
          rows={[
            ['ตัวอย่างในสไลด์', 'ข้าว ข้าวโพด กล้วยไม้ มะพร้าว', 'ถั่ว มะเขือเทศ ผักกาด กุหลาบ จามจุรี กวางตุ้ง'],
            ['ใบเลี้ยง', '1 ใบ', '2 ใบ'],
          ]}
        />
        <P>วงชีวิตพืชดอก: **เมล็ด → ต้นกล้า (seedling) → vegetative development (ลำต้น ใบ) → reproductive development (ดอก) → เมล็ด**</P>
      </Section>

      {/* slides 11–13, 50 */}
      <Section id="pl-organs" title="อวัยวะของพืช" en="organs">
        <P>ต้นพืชจัดระบบเป็นลำดับ: **อวัยวะ (organ) → เนื้อเยื่อ (tissue) → เซลล์ (cell)** อวัยวะหลักมี 3 อย่าง: **ราก ลำต้น ใบ** เรียงตามแนวยอด–ฐาน (apical–basal axis)</P>
        <W id="plant-body" />
        <Note>**วิธีแยกรากกับลำต้น:** ลำต้นมี**ข้อ (node)** และ**ปล้อง (internode)** — รากไม่มี · แครอทจึงเป็น "ราก" ส่วนขิง (rhizome) เป็น "ลำต้นใต้ดิน"</Note>
        <P>หน่วยซ้ำของยอดเรียกว่า **phytomer** = ใบ + ข้อ + ปล้อง + ตาข้าง ต่อกันซ้ำ ๆ ขึ้นไป</P>
      </Section>

      {/* slide 14 */}
      <Section id="pl-tissues" title="เนื้อเยื่อ 3 ระบบ" en="tissue systems">
        <P>เนื้อเยื่อ 3 ระบบ**ต่อเนื่องกันทุกอวัยวะ** (ราก ลำต้น ใบ):</P>
        <List
          items={[
            '**(1) เนื้อเยื่อผิว (dermal tissue)** = epidermis ประกอบด้วยเซลล์ผิว (epidermal cell)',
            '**(2) เนื้อเยื่อลำเลียง (vascular tissue)** = ไซเลม (xylem) ลำเลียงน้ำ + โฟลเอ็ม (phloem) ลำเลียงอาหาร · ในรากมี**เพอริไซเคิล (pericycle)** เป็นชั้นนอกสุดของ vascular tissue เจริญเป็นรากแขนงได้',
            '**(3) เนื้อเยื่อพื้นฐาน (ground tissue)** = **คอร์เท็กซ์ (cortex)** อยู่ระหว่าง epidermis กับ vascular tissue · ในรากชั้นในสุดของคอร์เท็กซ์คือ**เอนโดเดอร์มิส (endodermis)** ผนังมี **suberin** · ในลำต้นใบเลี้ยงคู่ ด้านในสุดเรียก**พิธ (pith)**',
          ]}
        />
        <Analogy>
          <P>นึกถึงลำต้นเป็นท่อน **"สายไฟ"**: ฉนวนนอกสุด = dermal, เนื้อยางที่หุ้ม = ground, สายทองแดงข้างใน = vascular — ทุกท่อนของสายไฟมีครบ 3 ชั้นเหมือนกัน แค่การจัดเรียงต่างกันในแต่ละอวัยวะ</P>
        </Analogy>
      </Section>

      {/* slides 15–19, 44–49 */}
      <Section id="pl-xsection" title="ภาคตัดขวาง ราก vs ลำต้น" en="cross-sections">
        <P>ข้อสอบชอบให้ดูภาพตัดขวางแล้วบอกว่าเป็นอวัยวะอะไรของพืชกลุ่มไหน ใช้หลักนี้:</P>
        <Table
          head={['ภาพตัดขวาง', 'ดูอะไร']}
          rows={[
            ['รากใบเลี้ยงคู่', 'vascular อยู่ตรงกลาง ไซเลมเป็นแฉก **3–4 แฉก** โฟลเอ็มแทรกระหว่างแฉก'],
            ['รากใบเลี้ยงเดี่ยว', 'ไซเลมเป็นแฉก **จำนวนมาก** เรียงเป็นวง'],
            ['ลำต้นใบเลี้ยงคู่', 'มัดท่อลำเลียง (vascular bundle) **เรียงเป็นวง** มีพิธตรงกลาง'],
            ['ลำต้นใบเลี้ยงเดี่ยว', 'มัดท่อลำเลียง **กระจายทั่ว** ground tissue'],
          ]}
        />
        <W id="plant-xsection" />
        <P>ในแต่ละมัดท่อลำเลียงของลำต้น: **โฟลเอ็มอยู่ด้านนอก ไซเลมอยู่ด้านใน** และระหว่างกลางมี **vascular cambium** (เกิดขึ้นภายหลัง)</P>
      </Section>

      {/* slides 20–24 */}
      <Section id="pl-leaf" title="ใบเหมาะกับการสังเคราะห์ด้วยแสง" en="leaf structure">
        <P>ใบ (leaf) เป็นอวัยวะที่เกิดบริเวณข้อของลำต้น มักเป็นแผ่นแบน เซลล์ที่มีคลอโรพลาสต์มีรงควัตถุดูดกลืนแสงช่วง **400–700 nm**</P>
        <W id="leaf-explorer" />
        <List
          items={[
            '**epidermal cell (ด้านบน)** โค้งมน ใส คล้ายเลนส์ → **รวมแสง**',
            '**palisade cell** ทรงกระบอก เรียงแน่น คลอโรพลาสต์มาก → **ดูดกลืนแสง**',
            '**spongy cell** รูปร่างไม่แน่นอน เรียงหลวม → **แก๊สแพร่ได้ดี** ดูดกลืนแสงส่วนที่เหลือ',
            '**stomata** พบมากที่**ผิวใบด้านล่าง** เปิด–ปิดเพื่อการแพร่ของแก๊สและการระเหยของน้ำ — ผิวใบด้านล่างมี epidermal cell, guard cell, subsidiary cell',
          ]}
        />
        <P>ใบที่โตกลางแดด (sun leaf) หนากว่าและมีชั้น palisade ยาวกว่าใบที่โตในร่ม (shade leaf)</P>
      </Section>

      {/* slides 25–33 */}
      <Section id="pl-cells" title="ชนิดเนื้อเยื่อและเซลล์" en="plant tissues and cells">
        <Table
          head={['เนื้อเยื่อพืช', 'แบ่งเป็น']}
          rows={[
            ['เนื้อเยื่อเจริญ (meristematic)', '**apical meristem** (ปลายราก ปลายยอด) · **lateral meristem** (cork cambium, vascular cambium)'],
            ['เนื้อเยื่อถาวร (permanent)', 'dermal → epidermis · vascular → xylem, phloem · ground → parenchyma, collenchyma, sclerenchyma'],
          ]}
        />
        <W id="cell-walls" />
        <List
          items={[
            '**parenchyma**: ผนังเซลล์**ปฐมภูมิ** บาง สม่ำเสมอทุกด้าน (คาร์โบไฮเดรต ไม่ติดสี safranin O) เช่น spongy mesophyll, epidermal cell',
            '**collenchyma**: ผนังปฐมภูมิ แต่**หนาไม่สม่ำเสมอ** ให้ความแข็งแรง มักอยู่ใต้ epidermis โดยเฉพาะสันของลำต้นเหลี่ยม',
            '**sclerenchyma**: ให้ความแข็งแรง มี 2 ชนิด — **sclereid** (ผนังทุติยภูมิ ใหญ่ สั้น เห็นลาย) และ **fiber** (ผนังทุติยภูมิ เล็ก ยาว เช่น fiber ค้ำโฟลเอ็ม)',
            'เซลล์ลำเลียงน้ำ: **tracheid, vessel element** · เซลล์ลำเลียงอาหาร: **sieve tube element + companion cell**',
          ]}
        />
        <Note>ตามสไลด์ 32: ผนังเซลล์ทุติยภูมิ "มีองค์ประกอบเป็นสารกลุ่มไขมันที่ติดสีชมพูแดงเมื่อย้อมด้วย safranin O" — ส่วนผนังปฐมภูมิเป็นสารกลุ่มคาร์โบไฮเดรต ไม่ติดสี</Note>
        <P>เซลล์เนื้อเยื่อเจริญเปลี่ยนสภาพ (**cell differentiation**) ไปเป็นเซลล์ชนิดต่าง ๆ ได้ทั้งหมด (สไลด์ 27 ยังกล่าวถึง transdifferentiation และ dedifferentiation)</P>
      </Section>

      {/* slides 34–42 */}
      <Section id="pl-growth" title="การเติบโต" en="primary & secondary growth">
        <P>**การเติบโต (growth)** = การเพิ่มขนาดหรือปริมาตรอย่างถาวร</P>
        <Table
          head={['', 'primary growth', 'secondary growth']}
          rows={[
            ['พบใน', 'พืชล้มลุก และส่วนที่ยังอ่อนของพืชมีเนื้อไม้', 'ส่วนที่แก่ หรือมีเนื้อไม้'],
            ['เกิดจาก', 'apical meristem (ยอด/ราก) → สูงขึ้น/ยาวขึ้น', 'vascular cambium (lateral meristem) → secondary xylem/phloem → ขยายขนาด'],
            ['ภาพตัดขวางลำต้น', 'มัดท่อลำเลียงแยกเป็นมัด ๆ (ใกล้ยอด)', 'vascular tissue เชื่อมกันเป็นวง (ไกลยอด)'],
          ]}
        />
        <W id="root-zones" />
        <P>ปลายราก: **บริเวณแบ่งเซลล์ (division zone)** ใต้หมวกราก → **บริเวณยืดตัว (elongation zone)** → **บริเวณเปลี่ยนสภาพ (differentiation zone)** มีขนราก</P>
        <P>**รากแขนง** เกิดจาก **pericycle** จึงลำเลียงน้ำเข้าสู่ไซเลมของรากได้โดยตรง · ยังมี**รากพิเศษ (adventitious root)** ที่เกิดจากลำต้น · ลำต้นแตก**กิ่งข้าง**จาก**ตาข้าง (axillary bud)** ที่มี lateral shoot meristem</P>
        <W id="secondary-growth" />
      </Section>
    </>
  );
}
