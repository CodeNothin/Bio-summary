// =====================================================================
// 6.4 — ecosystems: structure, trophic roles, food chains/webs, energy
// flow and the ~10% rule, biogeochemical cycles and eutrophication,
// bioaccumulation and biomagnification. Section ids match pages.ts.
// Writing style: see "How page text is written" in README.md. Every
// question's `inText` phrase must stay in its section (pages.test.tsx).
// =====================================================================
import { Analogy, List, More, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function EEcosystemPage() {
  return (
    <>
      <Section id="ee-structure" title="โครงสร้างระบบนิเวศ" en="ecosystem structure">
        <P>**ระบบนิเวศ (ecosystem)** = สังคมสิ่งมีชีวิต + สิ่งแวดล้อมทางกายภาพ ทำงานร่วมกันเป็นระบบ · **โครงสร้าง**: biotic + abiotic · **หน้าที่**: การไหลของพลังงาน + วัฏจักรสาร</P>
        <Note>**พลังงานไหลทางเดียว** (แสงอาทิตย์ → สิ่งมีชีวิต → ความร้อน) แต่**สสารหมุนเวียน**</Note>
        <Table
          head={['บทบาท', 'ได้อาหารอย่างไร', 'ตัวอย่าง']}
          rows={[
            ['**ผู้ผลิต (producer, autotroph)**', 'สังเคราะห์ด้วยแสง: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', 'พืช สาหร่าย'],
            ['**ผู้บริโภค (consumer)**', 'กินแล้ว**ย่อยภายใน**ตัว', 'herbivore กินพืช · carnivore กินเนื้อ · omnivore กินทั้งสอง · scavenger/detritivore กินซาก'],
            ['**ผู้ย่อยสลาย (decomposer, saprotroph)**', '**ย่อยภายนอก**ก่อนแล้วดูดซึม', 'แบคทีเรีย รา'],
          ]}
        />
        <P>ผู้บริโภคและผู้ย่อยสลายเป็น chemoheterotroph ใช้การหายใจระดับเซลล์: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP + ความร้อน</P>
      </Section>

      <Section id="ee-foodchain" title="ห่วงโซ่และสายใยอาหาร" en="food chains, food webs">
        <List
          items={[
            '**ลำดับขั้น (trophic level)**: ผู้ผลิตปฐมภูมิ → ผู้บริโภคลำดับที่ 1 → 2 → 3',
            '**ห่วงโซ่อาหาร (food chain)**: grazing (เริ่มจากพืชสด) และ detritus (เริ่มจากซาก)',
            '**สายใยอาหาร (food web)**: หลายห่วงโซ่ที่เชื่อมกัน',
            '**ลูกศร A → B แปลว่า B กิน A** (พลังงานไหลจาก A ไป B)',
          ]}
        />
        <Table
          head={['', 'Dominant species', 'Keystone species']}
          rows={[
            ['จำนวน', '**มากที่สุด** (จำนวนหรือมวลชีวภาพ)', '**ไม่มาก**'],
            ['ผลต่อสังคม', 'มาก เพราะมีมาก (แข่งเก่ง หรือหลบผู้ล่าได้)', '**มากเกินสัดส่วน**กับจำนวน · ส่วนใหญ่เป็นผู้ล่าบนสุด'],
            ['ตัวอย่าง', '—', 'นากทะเล → ควบคุมเม่นทะเล → ป่าสาหร่ายเคลป์อยู่ได้'],
          ]}
        />
        <More title="นึกภาพแบบนี้">
        <Analogy tag="นึกภาพแบบนี้">
          keystone = หินก้อนบนสุดของซุ้มประตู มีก้อนเดียวแต่ดึงออกแล้วทั้งซุ้มพัง · ไม่มีนากทะเล → เม่นทะเลเพิ่ม → กินเคลป์หมด
        </Analogy>
        </More>
      </Section>

      <Section id="ee-energy" title="การไหลของพลังงาน" en="energy flow">
        <List
          items={[
            '**GPP (gross primary production)**: พลังงานทั้งหมดที่ผู้ผลิตตรึงได้จากการสังเคราะห์ด้วยแสง',
            '**NPP (net primary production)**: ส่วนที่เหลือเก็บเป็นมวลชีวภาพ ส่งต่อให้ผู้บริโภคได้ (= GPP − ที่ใช้หายใจ)',
            '**Ecological efficiency ~10%** (5–20%): ส่งต่อขั้นถัดไปได้แค่นี้ ที่เหลือใช้หายใจ หรือย่อยไม่ได้/ขับออก',
            'จึงทำให้ห่วงโซ่อาหาร**ยาวได้ไม่เกิน ~5 ระดับผู้บริโภค**',
          ]}
        />
        <p className="big-rule">พลังงานที่ลำดับขั้น n ≈ พลังงานผู้ผลิต × (0.1)ⁿ⁻¹<br />เช่น ผู้ผลิต 50,000 kJ → ผู้บริโภคลำดับที่ 1: 5,000 → ลำดับที่ 2: 500 kJ</p>
        <W id="energy-pyramid" />
        {/* TODO(professor-method): slide asks "which trophic level is most vulnerable to extinction?" without an answer; site answers top consumers */}
        <Note>สไลด์ถามว่า "ลำดับขั้นใดเสี่ยงสูญพันธุ์มากที่สุด" แต่ไม่ได้เฉลย — เว็บนี้ตอบ**ผู้บริโภคลำดับสูงสุด** (ได้พลังงานน้อยที่สุด ประชากรจึงเล็ก)</Note>
      </Section>

      <Section id="ee-cycles" title="วัฏจักรสารและยูโทรฟิเคชัน" en="biogeochemical cycles, eutrophication">
        <P>วัฏจักรสาร (biogeochemical cycles) ในสไลด์: **น้ำ คาร์บอน ไนโตรเจน ฟอสฟอรัส** — สารเคมีหมุนเวียนระหว่างสิ่งมีชีวิตกับสิ่งแวดล้อม</P>
        <P>**ยูโทรฟิเคชัน (eutrophication)** ไล่เป็นลำดับ:</P>
        <List
          items={[
            'N และ P จากปุ๋ย น้ำทิ้ง ผงซักฟอก ไหลลงแหล่งน้ำ (**ฟอสเฟตเป็นปัจจัยจำกัด**ของสาหร่าย)',
            'สาหร่ายเพิ่มจำนวนมาก (**algal bloom**)',
            'สาหร่ายตายและถูกย่อยสลาย → **O₂ ในน้ำลดลง**',
            'ปลาและสัตว์น้ำตาย',
          ]}
        />
      </Section>

      <Section id="ee-toxins" title="การสะสมสารพิษ" en="bioaccumulation, biomagnification">
        <Table
          head={['', 'Bioaccumulation', 'Biomagnification']}
          rows={[
            ['ที่ไหน', 'ใน**สิ่งมีชีวิตตัวเดียว**', '**ตามห่วงโซ่อาหาร**'],
            ['ความหมาย', 'สารสะสมในตัวเพราะย่อยสลายหรือขับออกไม่ได้', 'ความเข้มข้น**เพิ่มขึ้นในแต่ละลำดับขั้น**'],
            ['ตัวอย่าง', 'โรคมินามาตะ (ปรอท)', 'DDT ในนกอินทรีหัวขาว · methylmercury ในอาร์กติก'],
          ]}
        />
        <P>DDT ไม่ฆ่านกตัวเต็มวัย แต่รบกวน metabolism ของแคลเซียม → **เปลือกไข่บาง** แตกก่อนฟัก ประชากรลดลง → ห้ามใช้ในสหรัฐฯ ปี 1972 · **ไมโครพลาสติก** คือพลาสติกขนาด &lt; 5 mm</P>
      </Section>
    </>
  );
}
