// =====================================================================
// Unit 7 — Conclusion: "Sciences inside cabinets: the importance of the
// Natural History Museum" (Chawatat Thanoosing, PhD). One page, five
// sections; ids match src/data/pages.ts. Text follows Source/notes-unit7.md.
// Slides 7, 9 and 12 are photos with a title only; what the site says
// about them is marked TODO(professor-method) below.
// =====================================================================
import { Analogy, List, More, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function CMuseumPage() {
  return (
    <>
      <Section id="cm-questions" title="คำถามพื้นฐาน 4 ข้อของชีววิทยา" en="four fundamental questions">
        <P>บทสรุปของวิชาย่อทุกบทให้เหลือ**คำถาม 4 ข้อ** — บทที่ผ่านมาคือคำตอบของคำถามเหล่านี้</P>
        <W id="fundamental-questions" />
        <Note>คำสำคัญของแต่ละข้อ: ① **พลังงาน** ② **สืบพันธุ์ ถ่ายทอดลักษณะ วิวัฒนาการ** ③ **วิวัฒนาการข้ามรุ่น** ④ **หลักฐานและความรู้ → อนาคตที่ยั่งยืน**</Note>
      </Section>

      <Section id="cm-museum" title="พิพิธภัณฑ์ธรรมชาติวิทยา" en="natural history museums">
        <Table
          head={['ด้าน', 'คืออะไร']}
          rows={[
            ['**Display & Exhibition**', 'ห้องจัดแสดงที่ผู้เข้าชมเห็น'],
            ['**Collection & Research**', 'คลังตัวอย่างจำนวนมากและงานวิจัยเบื้องหลัง — ผู้เข้าชมทั่วไปมักไม่เห็น'],
          ]}
        />
        <Analogy>
          ห้องจัดแสดงเหมือนกรอบรูปที่แขวนให้แขกดูในบ้าน ส่วนคลังตัวอย่างคือห้องเก็บของใต้ดินที่มีหีบเรียงเป็นพันใบ ทุกใบติดป้ายบอกว่าของชิ้นนี้ได้มาจากไหน เมื่อไร — ของจริงส่วนใหญ่อยู่ในห้องเก็บของ
        </Analogy>
        <List
          items={[
            'ตัวอย่างในสไลด์: **Natural History Museum (NHM) ลอนดอน** (มี virtual museum ให้ชมออนไลน์)',
            'คอลเลกชันของนักธรรมชาติวิทยาคนสำคัญ: **Alfred Russel Wallace** (1823–1913) และ **Charles Darwin** (1809–1882)',
            '"Treasure from Siam": **Schomburgk\'s deer** (Rucervus schomburgki Blyth, 1863) — เขากวาง ป้าย และงานตีพิมพ์ของ Blyth ที่บรรยายชนิดนี้',
            'พิพิธภัณฑ์เป็น**สถาบันวิจัย** (งานภาคสนาม ห้องแล็บ เอกสาร ฟอสซิล อุกกาบาต การถ่ายภาพ) → สไลด์เรียกว่า **"content providers"**',
            'ในไทย: **พิพิธภัณฑ์ธรรมชาติวิทยา จุฬาลงกรณ์มหาวิทยาลัย**',
          ]}
        />
        {/* TODO(professor-method): slides 7 (Wallace/Darwin) and 9 ("content providers") are photos + title only; the site reads them as "their collections are in the museum" and "museums produce research knowledge/data" */}
        <Note>สไลด์ Wallace/Darwin และ "content providers" มีแต่รูปกับหัวข้อ เว็บนี้ตีความว่า "คอลเลกชันของทั้งสองอยู่ในพิพิธภัณฑ์" และ "พิพิธภัณฑ์เป็นผู้ผลิตความรู้/ข้อมูลจากงานวิจัย" — ไม่มีโจทย์ถามเรื่องนี้</Note>
        <More title="ชื่อวิทยาศาสตร์อ่านอย่างไร">
          <P>Rucervus schomburgki Blyth, 1863 → **Rucervus** = ชื่อสกุล · **schomburgki** = ชื่อชนิด · **Blyth, 1863** = ผู้บรรยายชนิดและปีที่ตีพิมพ์</P>
        </More>
      </Section>

      <Section id="cm-museomics" title="Museomics และ DNA โบราณ" en="museomics, ancient DNA">
        <P>งานวิจัยปัจจุบันในพิพิธภัณฑ์มี 2 ทางหลัก: **museomics** และ **digitization**</P>
        <Table
          head={['คำ', 'ความหมาย (สไลด์)']}
          rows={[
            ['**Ancient DNA (aDNA)**', 'DNA จากซากอินทรีย์โบราณ เช่น กระดูก ฟัน ขน เมล็ด (ตรงข้ามกับ modern DNA)'],
            ['**Paleogenomics**', 'การสร้างและวิเคราะห์จีโนมของสิ่งมีชีวิตที่สูญพันธุ์'],
            ['**Museomics**', '"museum" + "genomics": การศึกษาลำดับ DNA จากตัวอย่างพิพิธภัณฑ์'],
            ['**Historical DNA (hDNA)**', 'DNA จากตัวอย่างในพิพิธภัณฑ์และ**หอพรรณไม้ (herbarium)**'],
          ]}
        />
        <W id="hominin-dna" />
        <P>**ทำไมต้องใช้ตัวอย่างพิพิธภัณฑ์ศึกษา DNA?** (สไลด์ 18) คอลเลกชันให้โอกาสพิเศษสำหรับงานวิจัยนิเวศและวิวัฒนาการ:</P>
        <List
          items={[
            '① ศึกษาเป็น**อนุกรมเวลา (time series)** ได้',
            '② ได้ตัวอย่างที่**หาได้ยาก**ด้วยวิธีอื่น',
            '③ ได้ตัวอย่าง**ทั้งสังคม** ณ สถานที่และเวลาหนึ่ง',
          ]}
        />
        <W id="specimen-label" />
        <P>ตัวอย่างงานวิจัย: **Balto** สุนัขลากเลื่อนชื่อดังของอะแลสกาในศตวรรษที่ 20 มีบรรพบุรุษร่วมกับสายพันธุ์สุนัข**เอเชียและอาร์กติก**ในปัจจุบัน (Moon et al., 2023)</P>
        {/* TODO(professor-method): slide 12 (Jurassic Park + Modi et al. 2021 copal DNA paper) has no text; site reads it as "DNA from resin inclusions is possible only in limited cases" */}
        <Note>สไลด์ 12 วางภาพยนตร์ Jurassic Park (1993) คู่กับงานวิจัยที่สกัด DNA แมลงจาก**ยางไม้ที่ยังไม่กลายเป็นอำพันเต็มที่ (copal)** ได้สำเร็จ แต่ชื่อเรื่องบอกว่ามี "ข้อจำกัด" (limits and perspectives) — สไลด์ไม่ได้อธิบายเพิ่ม จึงไม่มีโจทย์ถาม</Note>
      </Section>

      <Section id="cm-digitization" title="Digitization" en="digitization">
        <P>**Digitization** คือการแปลงข้อมูลเป็นรูปแบบดิจิทัล → เกิด **big data** · สาขาที่ใช้ข้อมูลนี้เรียกว่า **biodiversity informatics**</P>
        <P>**Metadata** = ข้อมูลที่บรรยายข้อมูลอื่น เช่น:</P>
        <Table
          head={['ที่ไหน/เมื่อไร/ใคร', 'สิ่งมีชีวิต', 'สภาพแวดล้อม/การจัดเก็บ']}
          rows={[
            ['สถานที่ (locality) · **georeference** (ละติจูด ลองจิจูด) · ความสูง · เวลา · ผู้เก็บ · วิธีเก็บ', 'อนุกรมวิธาน · เพศ · พืชอาหาร', 'อุณหภูมิ · ความชื้น · ความเข้มแสง · หมายเลขภาพ · หมายเลขทะเบียน (accession number)'],
          ]}
        />
        <W id="cabinet-to-data" />
        <List
          items={[
            '**3D scanning**: กะโหลก Toxodon ที่ Darwin เก็บ ดูออนไลน์ได้',
            'คลังข้อมูลท้องถิ่น: **NHM Data Portal** · คลังข้อมูลระดับโลก: **GBIF** (Global Biodiversity Information Facility) เข้าถึงฟรี',
            'เทคโนโลยีถ่ายภาพ: **ALICE** (กล้องหลายตัว) · เครื่องจับหมุดแมลงทำจาก LEGO · ชุดถ่ายภาพของ Finnish Museum of Natural History (LUOMUS)',
            '**AI identification**: ระบุชนิดด้วงดินจากภาพตัวอย่างพิพิธภัณฑ์ (convolutional neural network)',
            '**Measurement**: Mothra วัดปีกผีเสื้ออังกฤษในคอลเลกชัน NHM เพื่อศึกษาว่าขนาดตัวตอบสนองต่ออุณหภูมิอย่างไร',
            '**SIGNIFY**: คลังดิจิทัลความหลากหลายทางชีวภาพในอดีตของสิงคโปร์ (เช่น ตัวอย่างนกเค้าแมวหูยาวลายขวาง barred eagle-owl)',
          ]}
        />
      </Section>

      <Section id="cm-conclusion" title="อดีต ปัจจุบัน อนาคต" en="connecting past, present and future">
        <Table
          head={['', 'พิพิธภัณฑ์ทำอะไร']}
          rows={[
            ['**อดีต (past)**', 'เก็บรักษา**หลักฐาน**ของความหลากหลายทางชีวภาพและวิวัฒนาการ'],
            ['**ปัจจุบัน (present)**', '**เข้าใจ**ชนิด ระบบนิเวศ และการเปลี่ยนแปลงทางชีวภาพ'],
            ['**อนาคต (future)**', 'ให้ข้อมูลเพื่อ**การอนุรักษ์**และการพัฒนาที่ยั่งยืน'],
          ]}
        />
        <P>สไลด์สุดท้ายตอบคำถาม 4 ข้อซ้ำในมุมของพิพิธภัณฑ์ — กดปุ่ม "มุมพิพิธภัณฑ์" ในกล่องคำถามด้านบนเพื่อทบทวน</P>
        <p>
          วิดีโอแนะนำในสไลด์:{' '}
          <a href="https://www.youtube.com/watch?v=zeZobNFBAks" target="_blank" rel="noreferrer">YouTube (เปิดในแท็บใหม่)</a>
        </p>
      </Section>
    </>
  );
}
