// =====================================================================
// พืช 5.1–5.2 — plant organization, tissues, cross-sections, leaf, cell
// types, growth. Content follows deck Unit_5_1_tissue (slide numbers in
// the comments). Each <Section id> must match src/data/pages.ts.
// Widgets are placed with <W id="..."/> (registered in widgets/all.ts).
// Writing style: see "How page text is written" in README.md (model:
// PTransportPage.tsx). Every question's `inText` phrase must stay in the
// text of its section (pages.test.tsx).
// =====================================================================
import { Analogy, List, More, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function PStructurePage() {
  return (
    <>
      {/* slides 4–10 */}
      <Section id="pl-intro" title="พืชคืออะไร" en="plants">
        <P>พืชเป็น**สิ่งมีชีวิตหลายเซลล์แบบยูแคริโอต (multicellular eukaryote)** ที่สร้างอาหารเองได้ด้วยการสังเคราะห์ด้วยแสง ลักษณะสำคัญ 3 ข้อ:</P>
        <List
          items={[
            '**มีผนังเซลล์ (cell wall)** — ใช้แรงดันเต่ง (turgor) ในการคงรูปร่าง',
            '**มีคลอโรพลาสต์ (chloroplast)** — สร้างอาหารเองได้',
            '**เคลื่อนที่ไม่ได้** — จึงต้องปรับตัวเข้าหาสิ่งแวดล้อม (ที่มาของบท 5.5 การตอบสนอง)',
          ]}
        />
        <P>พืชบกต่างจากสาหร่ายเพราะต้องอยู่บนบก: **ใบ**สังเคราะห์ด้วยแสง มี **cuticle** ลดการสูญเสียน้ำ และ **stomata** แลกเปลี่ยนแก๊ส · **ลำต้น**ค้ำจุน · **ราก**ยึดและดูดน้ำ แร่ธาตุ (มีเชื้อรา mycorrhiza ช่วย)</P>
        <P>พืชแบ่งเป็น 4 กลุ่ม: (1) ไม่มีท่อลำเลียง (มอส) (2) มีท่อลำเลียงแต่ไม่สร้างเมล็ด (เฟิน) (3) เมล็ดเปลือย gymnosperm (ปรง) (4) **พืชดอก (angiosperm)** เมล็ดมีสิ่งห่อหุ้ม — มีประมาณ **90%** ของชนิดพืชทั้งหมด พืชดอกแบ่งเป็น 2 กลุ่ม:</P>
        <Table
          head={['', 'ใบเลี้ยงเดี่ยว (monocot)', 'ใบเลี้ยงคู่ (eudicot)']}
          rows={[
            ['ตัวอย่างในสไลด์', 'ข้าว ข้าวโพด กล้วยไม้ มะพร้าว', 'ถั่ว มะเขือเทศ ผักกาด กุหลาบ จามจุรี กวางตุ้ง'],
            ['ใบเลี้ยง', '1 ใบ', '2 ใบ'],
          ]}
        />
        <P>วงชีวิตพืชดอก: **เมล็ด → ต้นกล้า (seedling) → vegetative development (ลำต้น ใบ) → reproductive development (ออกดอก) → ได้เมล็ดรุ่นใหม่**</P>
      </Section>

      {/* slides 11–13, 50 */}
      <Section id="pl-organs" title="อวัยวะของพืช" en="organs">
        <P>ต้นพืชจัดระบบเป็นลำดับ: **อวัยวะ (organ) → เนื้อเยื่อ (tissue) → เซลล์ (cell)** อวัยวะหลักมี 3 อย่าง: **ราก ลำต้น ใบ** เรียงตามแนวยอด–ฐาน (apical–basal axis)</P>
        <W id="plant-body" />
        <P>ยอดเติบโตเป็นหน่วยซ้ำ ๆ เรียกว่า **phytomer** = ใบ + ข้อ + ปล้อง + ตาข้าง ต่อกันขึ้นไปเรื่อย ๆ ส่วนที่**สร้างเซลล์ใหม่**คือเนื้อเยื่อเจริญที่ปลาย: **shoot apical meristem (SAM)** ที่ยอด ทำให้ต้นสูงขึ้น และ root apical meristem ที่ปลายราก (ใต้หมวกราก)</P>
        <List
          items={[
            '**ข้อ (node)** = ตำแหน่งที่ใบติดกับลำต้น · **ปล้อง (internode)** = ช่วงลำต้นระหว่างข้อ',
            '**ตาข้าง (axillary bud)** ที่ซอกใบ มี lateral shoot meristem → เจริญเป็น**กิ่งข้าง (lateral shoot)**',
          ]}
        />
        <Note>วิธีแยกรากกับลำต้น: **ลำต้นมีข้อ (node) และปล้อง (internode) — รากไม่มี** · แครอทจึงเป็น "ราก" ส่วน**ขิง (rhizome) เป็นลำต้นใต้ดิน** ถึงจะอยู่ใต้ดิน</Note>
      </Section>

      {/* slide 14 */}
      <Section id="pl-tissues" title="เนื้อเยื่อ 3 ระบบ" en="tissue systems">
        <P>ทุกอวัยวะ (ราก ลำต้น ใบ) มีเนื้อเยื่อ 3 ระบบ**ต่อเนื่องกัน** ต่างกันแค่การจัดเรียง:</P>
        <List
          items={[
            '**(1) เนื้อเยื่อผิว (dermal tissue)** = **epidermis** ชั้นนอกสุด ห่อหุ้มอวัยวะ',
            '**(2) เนื้อเยื่อลำเลียง (vascular tissue)** = **xylem** ลำเลียงน้ำและแร่ธาตุ + **phloem** ลำเลียงอาหาร (น้ำตาล) · ในรากชั้นนอกสุดของ vascular tissue คือ**เพอริไซเคิล (pericycle)** ซึ่งเจริญเป็น**รากแขนง**ได้',
            '**(3) เนื้อเยื่อพื้นฐาน (ground tissue)** = **cortex** อยู่ระหว่าง epidermis กับ vascular tissue · ในราก ชั้นในสุดของคอร์เท็กซ์คือ **endodermis** ผนังมีสาร **suberin** สะสม · ในลำต้นใบเลี้ยงคู่ ground tissue ด้านในสุดเรียก**พิธ (pith)**',
          ]}
        />
        <More title="นึกภาพแบบ Minecraft">
          <Analogy>
            <P>นึกถึงลำต้นเป็นท่อน **"สายไฟ"**: ฉนวนนอกสุด = dermal, เนื้อยางที่หุ้ม = ground, สายทองแดงข้างใน = vascular — ทุกท่อนของสายไฟมีครบ 3 ชั้นเหมือนกัน แค่การจัดเรียงต่างกันในแต่ละอวัยวะ</P>
          </Analogy>
        </More>
      </Section>

      {/* slides 15–19, 44–49 */}
      <Section id="pl-xsection" title="ภาคตัดขวาง ราก vs ลำต้น" en="cross-sections">
        <P>ภาพตัดขวางบอกได้ว่าเป็น**อวัยวะอะไร** (ราก/ลำต้น) ของ**พืชกลุ่มไหน** (ใบเลี้ยงเดี่ยว/คู่) — ดูที่การจัดเรียงของ vascular tissue:</P>
        <Table
          head={['ภาพตัดขวาง', 'ดูอะไร']}
          rows={[
            ['รากใบเลี้ยงคู่', 'vascular อยู่ตรงกลาง ไซเลมเป็นแฉก **3–4 แฉก** โฟลเอ็มแทรกระหว่างแฉก'],
            ['รากใบเลี้ยงเดี่ยว', '**ไซเลมเป็นแฉกจำนวนมาก** เรียงเป็นวง โฟลเอ็มแทรกระหว่างแฉก'],
            ['ลำต้นใบเลี้ยงคู่', 'มัดท่อลำเลียง (vascular bundle) **เรียงเป็นวง** มีพิธตรงกลาง'],
            ['ลำต้นใบเลี้ยงเดี่ยว', 'มัดท่อลำเลียง**กระจายทั่ว ground tissue** แบ่ง cortex กับพิธไม่ชัด'],
          ]}
        />
        <W id="plant-xsection" />
        <P>ในแต่ละมัดท่อลำเลียงของลำต้น: **โฟลเอ็มอยู่ด้านนอก ไซเลมอยู่ด้านใน** และระหว่างกลางมี **vascular cambium** (เกิดขึ้นภายหลัง) · ground tissue ด้านในสุดของลำต้นใบเลี้ยงคู่คือ**พิธ (pith)**</P>
        <P>ชั้นนอกสุดของลำต้นคือ **epidermis** (dermal tissue) ซึ่งมี **cuticle** เคลือบ ใต้ลงไปมักเป็น **collenchyma** (ground tissue) ที่ให้ความแข็งแรง · ส่วนที่ไกลยอด vascular cambium แบ่งเซลล์เรียงเป็นแถว ไซเลม**เชื่อมกันเป็นวง** = เกิด **secondary growth** แล้ว (ดูหัวข้อการเติบโต)</P>
      </Section>

      {/* slides 20–24 */}
      <Section id="pl-leaf" title="ใบเหมาะกับการสังเคราะห์ด้วยแสง" en="leaf structure">
        <P>ใบเกิดที่ข้อของลำต้น มักเป็นแผ่นแบน ภาคตัดขวางมี: epidermis ด้านบน → **mesophyll** (palisade + spongy = ground tissue) → เส้นใบ (vascular) → epidermis ด้านล่าง รงควัตถุในคลอโรพลาสต์ดูดกลืนแสงช่วง **400–700 nm** แต่ละส่วนจึงจัดมาเพื่อรับแสงและแลกเปลี่ยนแก๊ส:</P>
        <W id="leaf-explorer" />
        <List
          items={[
            '**cuticle** เคลือบผิวใบ → **ลดการสูญเสียน้ำ**',
            '**epidermal cell (ด้านบน)** โค้งมน ใส คล้ายเลนส์ → **รวมแสง**',
            '**palisade cell** ทรงกระบอก เรียงแน่น คลอโรพลาสต์มาก → **ดูดกลืนแสง**',
            '**spongy cell** รูปร่างไม่แน่นอน **เรียงหลวม** → **แก๊สแพร่ได้ดี** และดูดกลืนแสงส่วนที่เหลือ',
            '**stomata** พบมากที่**ผิวใบด้านล่าง** (ไม่ใช่ด้านบน) เปิด–ปิดเพื่อให้แก๊สแพร่และน้ำระเหยออก — ปากใบล้อมด้วย **guard cell** ซึ่งควบคุมการเปิด–ปิด ข้าง ๆ มี subsidiary cell',
          ]}
        />
        <P>ใบที่โตกลางแดด (sun leaf) **หนากว่า มีชั้น palisade ยาวกว่า**ใบที่โตในร่ม (shade leaf) — รับแสงได้มากกว่า</P>
      </Section>

      {/* slides 25–33 */}
      <Section id="pl-cells" title="ชนิดเนื้อเยื่อและเซลล์" en="plant tissues and cells">
        <P>เนื้อเยื่อพืชแบ่งเป็น 2 แบบ: **เนื้อเยื่อเจริญ** แบ่งเซลล์ได้ และ**เนื้อเยื่อถาวร** ที่เปลี่ยนสภาพแล้ว · เซลล์เนื้อเยื่อเจริญเปลี่ยนสภาพ (**cell differentiation**) ไปเป็นเซลล์ชนิดต่าง ๆ ได้ทั้งหมด</P>
        <Table
          head={['เนื้อเยื่อพืช', 'แบ่งเป็น']}
          rows={[
            ['เนื้อเยื่อเจริญ (meristematic)', '**apical meristem** (ปลายราก ปลายยอด) · **lateral meristem** = **cork cambium, vascular cambium**'],
            ['เนื้อเยื่อถาวร (permanent)', 'dermal → epidermis · vascular → xylem, phloem · ground → parenchyma, collenchyma, sclerenchyma'],
          ]}
        />
        <P>ชนิดเซลล์แยกด้วย**ผนังเซลล์**: **ผนังเซลล์ปฐมภูมิ** เป็นคาร์โบไฮเดรต ไม่ติดสี safranin O · **ผนังทุติยภูมิ** ตามสไลด์ 32 มีองค์ประกอบเป็น**สารกลุ่มไขมัน**ที่ติดสีชมพูแดง</P>
        <W id="cell-walls" />
        <List
          items={[
            '**parenchyma**: ผนังปฐมภูมิ บาง สม่ำเสมอทุกด้าน พบทั่วไป เช่น spongy mesophyll, epidermal cell, guard cell',
            '**collenchyma**: ผนังปฐมภูมิ แต่**หนาไม่สม่ำเสมอ** ให้ความแข็งแรง มักอยู่ใต้ epidermis โดยเฉพาะสันของลำต้นเหลี่ยม',
            '**sclerenchyma**: ผนังทุติยภูมิ ให้ความแข็งแรง มี 2 ชนิด — **sclereid** (ใหญ่ สั้น เห็นลายที่ผนังชัด) และ **fiber** (เล็ก ยาว ให้ความแข็งแรงกับโฟลเอ็ม)',
            'เซลล์ลำเลียงน้ำ (ไซเลม): **tracheid, vessel element** · เซลล์ลำเลียงอาหาร (โฟลเอ็ม): **sieve tube element** ทำงานร่วมกับ **companion cell**',
          ]}
        />
        <More title="อ่านเพิ่ม: การเปลี่ยนสภาพแบบอื่น">
          <P>สไลด์ 27 ยังกล่าวถึง **transdifferentiation** และ **dedifferentiation** (parenchyma กลับมาแบ่งเซลล์ได้อีก)</P>
        </More>
      </Section>

      {/* slides 34–42 */}
      <Section id="pl-growth" title="การเติบโต" en="primary & secondary growth">
        <P>**การเติบโต (growth)** = การเพิ่มขนาดหรือปริมาณอย่างถาวร มี 2 แบบ:</P>
        <Table
          head={['', 'primary growth', 'secondary growth']}
          rows={[
            ['พบใน', 'พืชล้มลุก และส่วนที่ยังอ่อนของพืชมีเนื้อไม้', 'ส่วนที่แก่ หรือมีเนื้อไม้'],
            ['เกิดจาก', 'apical meristem → สูงขึ้น/ยาวขึ้น', 'vascular cambium (lateral meristem) แบ่งเซลล์ได้ **secondary xylem** (ด้านใน) และ secondary phloem → ลำต้นขยายขนาด'],
            ['ภาพตัดขวางลำต้น', '**มัดท่อลำเลียงแยกเป็นมัด ๆ** (ใกล้ยอด)', 'vascular tissue เชื่อมกันเป็นวง (ไกลยอด)'],
          ]}
        />
        <W id="root-zones" />
        <P>ปลายรากเรียงจากปลายสุดขึ้นไป: **หมวกราก (root cap) → บริเวณแบ่งเซลล์ (zone of division)** มี root apical meristem **→ บริเวณยืดตัว (elongation zone)** เซลล์ยืดยาว รากจึงยาวขึ้น **→ บริเวณเปลี่ยนสภาพ (differentiation zone)** เซลล์เปลี่ยนรูปร่าง มีขนราก</P>
        <P>**รากแขนงเกิดจาก pericycle** (ไม่ใช่ epidermis) จึงต่อกับไซเลมของรากได้โดยตรง · ยังมี**รากพิเศษ (adventitious root)** ที่เกิดจากลำต้น · ลำต้นแตกกิ่งข้างจากตาข้าง (axillary bud)</P>
        <W id="secondary-growth" />
      </Section>
    </>
  );
}
