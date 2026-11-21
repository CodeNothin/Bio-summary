// =====================================================================
// 6.3 — community: interspecific interactions, competition and niche,
// predation/herbivory, symbiosis, diversity and succession.
// Section ids match src/data/pages.ts. Facilitation appears on the
// slides as both +/+ and 0/+, so both are shown.
// Writing style: see "How page text is written" in README.md. Every
// question's `inText` phrase must stay in its section (pages.test.tsx).
// =====================================================================
import { Analogy, List, More, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function ECommunityPage() {
  return (
    <>
      <Section id="ec-interactions" title="ความสัมพันธ์ระหว่างชนิด" en="interspecific interactions">
        <P>**สังคมสิ่งมีชีวิต (community)** คือประชากร**หลายชนิด**ที่อยู่ในพื้นที่เดียวกัน เวลาเดียวกัน · ความสัมพันธ์ระหว่างชนิดเขียนด้วยเครื่องหมาย: **+** ได้ประโยชน์ · **0** ไม่มีผล · **−** เสียประโยชน์</P>
        <Table
          head={['ความสัมพันธ์', 'ภาษาไทย', 'A / B']}
          rows={[
            ['competition', 'ภาวะแข่งขัน', '− / −'],
            ['predation, herbivory', 'ภาวะล่าเหยื่อ / กินพืช', '+ / −'],
            ['amensalism', 'ภาวะกระทบกระเทือน', '0 / −'],
            ['antibiosis', 'ภาวะหลั่งสารยับยั้งการเจริญ', '0 / −'],
            ['neutralism', 'ภาวะเป็นกลาง', '0 / 0'],
            ['protocooperation', 'ภาวะได้ประโยชน์ร่วมกัน', '+ / +'],
            ['facilitation', 'ภาวะเอื้อประโยชน์', '+ / + หรือ 0 / +'],
            ['mutualism *', 'ภาวะพึ่งพา', '+ / +'],
            ['commensalism *', 'ภาวะอิงอาศัย', '+ / 0'],
            ['parasitism *', 'ภาวะปรสิต', '+ / −'],
          ]}
        />
        <P>* = **symbiosis**: อยู่ร่วมกันใกล้ชิดระยะยาว (host = ผู้ให้อาศัย, symbiont = ผู้อาศัย)</P>
        <W id="interaction-finder" />
      </Section>

      <Section id="ec-competition" title="การแข่งขันและ niche" en="competition, niche">
        <P>การแข่งขันทำให้ **fitness ลดลงทั้งสองฝ่าย** · **Competitive exclusion principle** (Gause 1934): สองชนิดที่แข่งกันแย่งทรัพยากรเดียวกัน**อยู่ร่วมกันถาวรไม่ได้** — ชนิดที่ได้เปรียบด้านการสืบพันธุ์จะชนะ (เช่น probiotics แข่งกับเชื้อก่อโรค)</P>
        <Table
          head={['คำ', 'ความหมาย']}
          rows={[
            ['**habitat**', '**ที่**อยู่ของสิ่งมีชีวิต (อยู่ที่ไหน)'],
            ['**niche**', '**บทบาทและตำแหน่ง**ในสังคม (ได้ทรัพยากรอย่างไร สัมพันธ์กับชนิดอื่นอย่างไร) — ไม่มีสองชนิดที่ niche เหมือนกันทุกอย่าง'],
            ['fundamental niche', 'niche ที่เป็นไปได้ทั้งหมดถ้าไม่มีคู่แข่ง'],
            ['realized niche', 'niche ที่ใช้จริง **แคบกว่า**เพราะการแข่งขัน'],
          ]}
        />
        <More title="นึกภาพแบบ Minecraft">
        <Analogy>
          habitat = "บ้านอยู่ไบโอมป่า" · niche = "อาชีพ" ในโลกนั้น เช่น เป็นคนขุดแร่ใต้ดินตอนกลางคืน — สองคนในบ้านเดียวกันอยู่ได้ถ้าทำอาชีพต่างกัน
        </Analogy>
        </More>
        <List
          items={[
            '**Resource partitioning**: แบ่งทรัพยากรกันใช้ (นก warbler 5 ชนิดหากินคนละส่วนของต้นสน) — เกิดจาก natural selection',
            '**Character displacement**: ชนิดที่อยู่พื้นที่เดียวกัน (sympatric) **วิวัฒน์ให้ลักษณะต่างกันมากขึ้น**หลายชั่วรุ่น เพื่อลดการแข่งขัน แต่คล้ายกันเมื่ออยู่แยกกัน (allopatric)',
            '**ชนิดพันธุ์ต่างถิ่น** (เช่น ปลาหมอคางดำ): ที่ไม่เหมาะ → ลดลง · เหมาะแต่แข่งไม่ได้ → ลดลง · แข่งได้ → อยู่ร่วม · **แข่งชนะ → ชนิดพื้นเมืองลดลง**',
          ]}
        />
      </Section>

      <Section id="ec-predation" title="การล่าเหยื่อและการกินพืช" en="predation, herbivory">
        <Table
          head={['ฝ่าย', 'การปรับตัว']}
          rows={[
            ['ผู้ล่า (predator)', 'ประสาทสัมผัสดี ความเร็ว กรงเล็บ พิษ'],
            ['เหยื่อ — พฤติกรรม', 'ซ่อน หนี อยู่เป็นฝูง ส่งเสียงเตือน'],
            ['เหยื่อ — รูปร่าง/สรีระ', 'พรางตัว (camouflage) สีเตือน หนาม สารพิษ **การเลียนแบบ (mimicry)**'],
            ['พืช (ต่อสัตว์กินพืช)', 'หนาม ใบเหนียว สารพิษ'],
          ]}
        />
        <P>**Herbivory** (+/−): สัตว์กินพืชได้ประโยชน์ พืชเสียประโยชน์ แต่มักไม่ตาย</P>
      </Section>

      <Section id="ec-symbiosis" title="Symbiosis และความสัมพันธ์อื่น" en="symbiosis and others">
        <List
          items={[
            '**Mutualism** (+/+): เช่น ปมรากถั่ว (แบคทีเรียตรึง N) **ไลเคน** (รา + สาหร่าย) · **obligate** = ขาดคู่แล้วอยู่ไม่ได้ · **facultative** = อยู่แยกได้',
            '**Parasitism** (+/−): endoparasite (อยู่ในตัว host) / ectoparasite (อยู่นอกตัว)',
            '**Commensalism** (+/0): ฝ่ายหนึ่งได้ อีกฝ่ายไม่ได้ไม่เสีย',
            '**Protocooperation** (+/+): ได้ทั้งคู่แต่**ไม่จำเป็น**ต่อการอยู่รอด',
            '**Facilitation** (+/+ หรือ 0/+): ช่วยกัน**โดยไม่ได้สัมผัสกันโดยตรง**',
            '**Amensalism / antibiosis** (0/−): เช่น รา **Penicillium** หลั่งสารยับยั้งแบคทีเรีย',
          ]}
        />
        {/* TODO(professor-method): facilitation shown as both +/+ and 0/+ on the slides */}
        <Note>สไลด์เขียน facilitation ทั้งแบบ +/+ และ 0/+ — เว็บนี้รับทั้งสองแบบ จุดที่ใช้แยกคือ "ไม่ได้สัมผัสกันโดยตรง"</Note>
      </Section>

      <Section id="ec-diversity" title="ความหลากหลายและการแทนที่" en="diversity, succession">
        <P>**ความหลากหลายของชนิด (species diversity)** = **ความมากชนิด (richness)** + **ความมากมายสัมพัทธ์ (relative abundance)**</P>
        <Table
          head={['', 'A', 'B', 'C', 'D']}
          rows={[
            ['สังคม 1', '25%', '25%', '25%', '25%'],
            ['สังคม 2', '80%', '5%', '5%', '10%'],
          ]}
        />
        <P>ทั้งสองมี 4 ชนิดเท่ากัน (richness เท่ากัน) แต่**สังคม 1 หลากหลายกว่า**เพราะแต่ละชนิดมีสัดส่วนเท่ากัน · ความหลากหลายสูง → ผลผลิตสูง ฟื้นตัวได้ดี เสถียร ต้านทานการรบกวน · การรบกวน (พายุ ไฟ น้ำท่วม มนุษย์) มีผลต่อความหลากหลาย (เช่น เผาทุ่งหญ้าแพรรีแบบควบคุม)</P>
        <Note>สไลด์พูดถึง diversity index แต่ไม่ได้ให้สูตร — จึงไม่มีโจทย์คำนวณ</Note>
        <P>**การแทนที่ (succession)** = สังคมเปลี่ยนไปทีละระยะจนถึง **climax community** (ระยะสุดท้ายที่เสถียร องค์ประกอบชนิดเปลี่ยนน้อย):</P>
        <Table
          head={['', 'ปฐมภูมิ (primary)', 'ทุติยภูมิ (secondary)']}
          rows={[
            ['เริ่มที่', 'พื้นที่**ไม่มีดิน** เช่น หินเปล่าจากลาวา เนินทรายใหม่', 'พื้นที่ที่**ยังมีดิน**หลังถูกรบกวน เช่น ไร่ร้าง ป่าหลังไฟไหม้'],
            ['ผู้บุกเบิก', '**pioneer species** เช่น ไลเคน', 'พืชล้มลุก (1–2 ปี) → หญ้า (3–4 ปี) → ไม้พุ่ม/สน (5–150 ปี) → ป่าโอ๊ก (150+ ปี)'],
          ]}
        />
        <W id="succession" />
        <P>มนุษย์ก็เป็นตัวรบกวนสังคม: ตัดไม้ ไฟ การขยายเมือง พลาสติก น้ำมันรั่ว การทำเหมือง</P>
      </Section>
    </>
  );
}
