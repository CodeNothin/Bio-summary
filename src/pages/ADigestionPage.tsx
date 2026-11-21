// =====================================================================
// สัตว์ 5.3 — nutrition and digestion. Content follows
// Gen_bio_107_Unit_5 slides 33–77. Section ids match src/data/pages.ts.
// Decisions (user): essential amino acids = the slide's 8 that adults
// cannot make (9 are needed incl. histidine); "Bulb feeder" as on the
// slide; pepsinogen is activated by HCl AND by pepsin.
// Writing style: see "How page text is written" in README.md. Every
// question's `inText` phrase must stay in its section (pages.test.tsx).
// =====================================================================
import { Analogy, List, More, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function ADigestionPage() {
  return (
    <>
      {/* slides 33–38 */}
      <Section id="ad-nutrients" title="สารอาหารที่จำเป็น" en="essential nutrients">
        <P>สัตว์กินอาหารเพื่อ (1) **พลังงาน (fuel)** → ATP (2) **วัตถุดิบ (carbon skeleton)** ไว้สร้างโมเลกุล — เพื่อเติบโต ซ่อมแซม สืบพันธุ์ (3) **สารอาหารที่จำเป็น** · ส่วนเกินเก็บเป็น glycogen และไขมัน</P>
        <P>**สารอาหารที่จำเป็น (essential nutrients)** = สารที่ร่างกายสัตว์**สร้างเองไม่ได้** ต้องได้รับจากอาหาร</P>
        <Table
          head={['กลุ่ม', 'รายละเอียดในสไลด์']}
          rows={[
            ['กรดอะมิโนที่จำเป็น', '**8 ชนิดที่ผู้ใหญ่สร้างเองไม่ได้**: Met, Val, Thr, Phe, Leu, Ile, Trp, Lys · ข้าวโพดขาด Lys ถั่วขาด Met → กินคู่กันได้ครบ · เนื้อ ไข่ ชีส = complete protein · แมวต้องการ arginine, taurine เพิ่ม'],
            ['กรดไขมันที่จำเป็น', 'สัตว์เลี้ยงลูกด้วยนมขาดเอนไซม์สร้างพันธะคู่ที่ omega-3/omega-6 → **alpha-linolenic (ω-3)** และ **linoleic (ω-6)** · แมวต้องการ arachidonic เพิ่ม'],
            ['วิตามิน', 'สารอินทรีย์ที่จำเป็น ต้องการปริมาณน้อย · ละลายในไขมัน: A, D, E, K · ละลายในน้ำ: B, C'],
            ['แร่ธาตุ', 'Na, K, Ca, P ฯลฯ — ต้องได้รับโลหะทั้งหมดจากอาหาร · 40% ของโปรตีนเป็น metalloprotein (Fe, Cu, Mo, Zn, Mn)'],
          ]}
        />
        <Note>สไลด์นับ **8 ชนิด = ชนิดที่ร่างกายผู้ใหญ่สร้างเองไม่ได้** — หลายตำรานับ **9 ชนิดที่ร่างกายต้องการ** (รวม histidine) ตอบตามที่โจทย์ถาม</Note>
        <P>วิตามินและแร่ธาตุที่สไลด์บอกอาการขาด:</P>
        <Table
          head={['สารอาหาร', 'หน้าที่', 'อาการเมื่อขาด']}
          rows={[
            ['Vitamin A (ละลายในไขมัน)', 'เม็ดสีการมองเห็น เยื่อบุผิว', 'ปัญหาการมองเห็น ผิวแห้ง'],
            ['Vitamin D (ละลายในไขมัน)', 'ช่วยดูดซึม Ca และ P', '**rickets (กระดูกผิดรูปในเด็ก) กระดูกอ่อนในผู้ใหญ่**'],
            ['Vitamin E / K (ละลายในไขมัน)', 'E: antioxidant · K: การแข็งตัวของเลือด', 'K: **เลือดแข็งตัวผิดปกติ**'],
            ['Vitamin B₁ (thiamine)', 'coenzyme', '**beriberi** (ความผิดปกติของประสาท)'],
            ['Vitamin B₁₂ / C', 'C: สร้าง collagen', 'B₁₂: โลหิตจาง · C: **scurvy** (ผิว ฟัน หลอดเลือดเสื่อม แผลหายช้า)'],
            ['แร่ธาตุ', 'ต้องได้โลหะทั้งหมดจากอาหาร', 'ขาด **iodine → คอพอก** · ขาด Ca → กระดูกพรุน · ปศุสัตว์ขาด Na, P → น้ำนมน้อย มีบุตรยาก'],
          ]}
        />
      </Section>

      {/* slides 39–43 */}
      <Section id="ad-feeding" title="การกินอาหาร" en="food processing">
        <P>กระบวนการกินอาหาร 4 ขั้น: **ingestion → digestion → absorption → elimination** · การย่อยมี 3 แบบ: เชิงกล (mechanical), ทางเคมี (chemical = enzymatic hydrolysis), ทางจุลินทรีย์ (microbial action)</P>
        <Table
          head={['วิธีกินของ heterotroph', 'ตัวอย่างในสไลด์']}
          rows={[
            ['Suspension feeder — กรองชิ้นเล็กที่แขวนลอยในน้ำ', 'วาฬหลังค่อม หอยกาบ หอยนางรม'],
            ['Substrate / deposit feeder — กินที่อยู่ของตัวเอง', 'ตัวอ่อนแมลงบนใบไม้'],
            ['Fluid feeder — ดูดของเหลว', 'ยุง'],
            ['Bulb feeder — กินชิ้นใหญ่', 'มนุษย์ นกกระสา'],
          ]}
        />
        <P>herbivore (กอริลลา วัว กระต่าย หอยทาก) · carnivore (ฉลาม เหยี่ยว แมงมุม งู) · omnivore (แมลงสาบ หมี แรคคูน คน) · **ฟัน**: carnivore ฟันหน้า+เขี้ยวแหลม ฉีก · herbivore ฟันกว้างนูนเป็นสัน บด · omnivore มีครบ · **ลำไส้**: carnivore สั้น, herbivore ยาว (ย่อยพืชได้นาน)</P>
      </Section>

      {/* slides 44–55 */}
      <Section id="ad-tracts" title="การย่อยและทางเดินอาหารแบบต่าง ๆ" en="digestive tracts">
        <Table
          head={['', 'ภายในเซลล์ (intracellular)', 'ภายนอกเซลล์ (extracellular)']}
          rows={[
            ['เกิดที่', 'food vacuole (ปล่อยเอนไซม์เข้า vacuole)', 'ใน digestive tract (หลั่งเอนไซม์ออกมา)'],
            ['ตัวอย่าง', 'โปรโตซัว เช่น พารามีเซียม', 'ไฮดรา พลานาเรีย (incomplete) · ไส้เดือน สัตว์ชั้นสูง (complete)'],
            ['ข้อดี', '—', '**ย่อยอาหารขนาดใหญ่ได้**'],
          ]}
        />
        <P>**ทางเดินอาหารแบบไม่สมบูรณ์ (incomplete)** มีช่องเปิดเดียว — ปากเป็นทั้งทางเข้าและทางออกของกาก เช่น **ไฮดรา พลานาเรีย** (ย่อยทั้งนอกและในเซลล์: ไฮดราหลั่งเอนไซม์ใน gastrovascular cavity ย่อยเป็นชิ้นเล็ก แล้วเซลล์กลืนเข้า food vacuole ย่อยต่อ) · **แบบสมบูรณ์ (complete)** มี 2 ช่อง ปากและทวารหนัก แต่ละส่วนทำหน้าที่เฉพาะ เช่น **ไส้เดือนดิน นก วัว คน**</P>
        <List
          items={[
            '**ไส้เดือนดิน**: mouth → esophagus → crop (พักอาหาร) → gizzard (บด) → intestine → anus',
            '**นก**: crop เก็บและทำให้อาหารชื้น · กระเพาะหลั่งเอนไซม์ · **กึ๋น (gizzard) กล้ามเนื้อหนา มีกรวดบดอาหารแทนฟัน ไม่มีต่อมขับน้ำย่อย** · ย่อยหลักที่ลำไส้เล็ก',
            '**สัตว์เคี้ยวเอื้อง** (วัว ควาย แพะ แกะ): ทางเดินอาหารยาว มี**ส่วนที่เกิดการหมัก (fermentation chamber) โดยจุลินทรีย์ที่อาศัยแบบพึ่งพา (mutualism)** ย่อย cellulose · กระเพาะ 4 ห้อง: rumen, reticulum, omasum, abomasum',
          ]}
        />
        <W id="tract-types" />
      </Section>

      {/* slides 56–63 */}
      <Section id="ad-upper" title="ช่องปาก หลอดอาหาร กระเพาะ" en="mouth to stomach">
        <W id="gi-map" />
        <List
          items={[
            '**ต่อมน้ำลาย 3 คู่**: parotid (ใต้กกหู), submandibular (ใต้ขากรรไกรล่าง), sublingual (ใต้ลิ้น) — ~1.0–1.5 ลิตร/วัน · น้ำลายมี mucin (หล่อลื่น) **salivary amylase (แป้ง → dextrin, maltose)** และ lysozyme (ฆ่าเชื้อ) · ลิ้นคลุกอาหารเป็นก้อน (bolus)',
            '**คอหอย**: ทางร่วมของอาหารและอากาศ · **หลอดอาหาร**: อยู่หลังหลอดลม กล้ามเนื้อเรียบ บีบแบบ peristalsis มีหูรูด 2 อัน',
            '**กระเพาะ**: หูรูด lower esophageal (cardiac) sphincter และ pyloric sphincter · 4 ส่วน: cardia, fundus, body, pylorus · บุด้วย simple columnar epithelium + gastric gland',
          ]}
        />
        <P>**การกลืน**: คอหอยเป็นทางร่วมของอาหารและอากาศ จึงต้องปิดทางเดินหายใจก่อน:</P>
        <List
          items={[
            '**(1) ยังไม่มีอาหาร**: esophageal sphincter หดตัว epiglottis ยกขึ้น glottis เปิด → ทางเดินหายใจเปิด',
            '**(2) อาหารมาถึงคอหอย**: reflex ทำให้กล่องเสียงและ glottis ยกขึ้น **epiglottis ลงมาปิด** → ทางเดินหายใจปิด',
            '**(3) esophageal sphincter คลายตัว** อาหารเข้าหลอดอาหาร',
            '**(4) peristalsis** (หด–คลายเป็นจังหวะ) ดันอาหารลงกระเพาะ',
          ]}
        />
        <W id="swallowing" />
        <Table
          head={['เซลล์ใน gastric gland', 'หลั่ง']}
          rows={[
            ['mucous cell', 'เมือก ป้องกันไม่ให้เซลล์กระเพาะถูกย่อย'],
            ['parietal cell', 'กรดเกลือ (HCl)'],
            ['chief cell', 'pepsinogen → HCl เปลี่ยนเป็น **pepsin** และ pepsin ที่เกิดขึ้นช่วยเปลี่ยน pepsinogen ต่อ'],
          ]}
        />
        <Table
          head={['โรค', 'สาเหตุ', 'อาการ']}
          rows={[
            ['GERD (กรดไหลย้อน)', 'lower esophageal sphincter ทำงานผิดปกติ (ยังไม่ทราบสาเหตุแน่ชัด) กรดไหลย้อนเข้าหลอดอาหาร', 'แสบอก (heartburn) เปรี้ยวปาก อาหารไม่ย่อย แผลที่หลอดอาหาร'],
            ['แผลเพปติก (peptic ulcer)', 'หลั่งกรดมากเกิน · Helicobacter pylori · ยา NSAIDs (บุหรี่ แอลกอฮอล์เพิ่มการหลั่งกรด)', 'แผลที่หลอดอาหาร กระเพาะ ลำไส้เล็กส่วนต้น'],
          ]}
        />
      </Section>

      {/* slides 65–72 */}
      <Section id="ad-lower" title="ลำไส้และอวัยวะช่วยย่อย" en="intestines & accessory organs">
        <List
          items={[
            '**ลำไส้เล็ก**: ยาวที่สุด ดูดซึมมากที่สุด · 3 ส่วน: **duodenum (25 ซม.), jejunum, ileum** · บุด้วย simple columnar พับเป็น **villi** (มี lacteal, capillary, hepatic portal vein) และ **microvilli (brush border)**',
            'ย่อยอาหารทุกชนิด **มากที่สุดที่ duodenum** โดยอาศัยน้ำย่อยจากตับอ่อน น้ำดีจากตับ/ถุงน้ำดี และน้ำย่อยจากลำไส้เล็กเอง · ระวังสับสน: **ย่อย**มากสุดที่ duodenum แต่**ดูดซึม**มากสุดที่ jejunum และ ileum',
            '**ตับสร้างน้ำดี** เก็บที่**ถุงน้ำดี** · น้ำดี**ไม่มีเอนไซม์** แต่เกลือน้ำดีทำให้ไขมันแตกตัว (emulsifier) ให้ lipase ทำงานดีขึ้น',
            '**ตับอ่อน**: acinar cells หลั่งเอนไซม์ · duct cells หลั่งน้ำ + bicarbonate = pancreatic juice',
            '**ลำไส้ใหญ่**: ไม่มีการย่อย ดูดน้ำและเกลือแร่ peristalsis อยู่ 12–24 ชม. · 4 ส่วน: cecum (ไส้ติ่ง), colon (crypt สร้างเมือก), rectum (เก็บกากที่มีจุลินทรีย์และเซลลูโลส), anal canal (หูรูด)',
          ]}
        />
        <W id="food-journey" />
      </Section>

      {/* slides 64, 70–71 */}
      <Section id="ad-enzymes" title="เอนไซม์ย่อยอาหาร" en="digestive enzymes">
        <Table
          head={['', 'คาร์โบไฮเดรต', 'โปรตีน', 'กรดนิวคลีอิก', 'ไขมัน']}
          rows={[
            ['ปาก', 'salivary amylase', '—', '—', '—'],
            ['กระเพาะ', '—', 'pepsin', '—', '—'],
            ['ลำไส้เล็ก (จากตับอ่อน)', 'pancreatic amylase', 'trypsin, chymotrypsin, carboxypeptidase', 'nucleases', 'pancreatic lipase'],
            ['ลำไส้เล็ก (ผนังลำไส้)', 'disaccharidases', 'dipeptidase, carboxypeptidase, aminopeptidase', 'nucleotidases, nucleosidases, phosphatases', '—'],
            ['ผลสุดท้าย', 'monosaccharide', 'amino acid', 'เบส น้ำตาล ฟอสเฟต', 'glycerol, fatty acid, monoglyceride'],
          ]}
        />
        <P>**การกระตุ้นเอนไซม์ของตับอ่อน**: trypsinogen —**enterokinase**→ trypsin · chymotrypsinogen —trypsin→ chymotrypsin · procarboxypeptidase —trypsin→ carboxypeptidase · pancreatic amylase ย่อยคาร์โบไฮเดรต**ยกเว้น cellulose**</P>
        <More title="นึกภาพแบบนี้">
        <Analogy tag="นึกภาพแบบนี้">
          <P>เอนไซม์ย่อยโปรตีนถูกสร้างเป็นรูป "ปิดล็อก" (-ogen) ก่อน เหมือนดาบที่ยังอยู่ในฝัก — ถ้าทำงานทันทีจะย่อยเซลล์ที่สร้างมันเอง จึงปลดล็อกเมื่อไปถึงที่ทำงานแล้วเท่านั้น</P>
        </Analogy>
        </More>
      </Section>

      {/* slides 73–76 */}
      <Section id="ad-absorb" title="การดูดซึมและการควบคุม" en="absorption & control">
        <Table
          head={['สาร', 'ดูดซึมอย่างไร', 'ไปที่']}
          rows={[
            ['monosaccharide', 'ใช้พลังงาน cotransport กับ Na⁺', 'ระบบเลือด'],
            ['amino acid', 'ใช้พลังงาน cotransport กับ Na⁺', 'ระบบเลือด'],
            ['fat', 'แพร่เข้าเซลล์ รวมกับ cholesterol เป็น **chylomicron**', 'หลอดน้ำเหลือง (lacteal)'],
          ]}
        />
        <P>ดูดซึมส่วนใหญ่ที่ **jejunum และ ileum** · ลำไส้ใหญ่ดูดซึมได้เล็กน้อย (น้ำ แร่ธาตุ วิตามิน กลูโคส)</P>
        <P>**ควบคุมด้วยระบบประสาท**: CNS (sympathetic, parasympathetic) และ **enteric nervous system** ในผนังทางเดินอาหาร ควบคุมการบีบตัว การหลั่งสาร การไหลเวียนเลือด</P>
        <Table
          head={['ฮอร์โมน', 'หลั่งจาก', 'ผล']}
          rows={[
            ['**gastrin**', 'กระเพาะ', 'กระตุ้น parietal cell หลั่ง HCl'],
            ['**CCK** (cholecystokinin)', 'duodenum', 'กระตุ้นการหลั่งเอนไซม์จากตับอ่อนและน้ำดีจากถุงน้ำดี'],
            ['**secretin**', 'duodenum', 'กระตุ้นการหลั่ง bicarbonate จากตับอ่อน'],
          ]}
        />
        <Note>secretin และ CCK ยัง**ยับยั้ง**การหลั่ง HCl จากกระเพาะ</Note>
      </Section>
    </>
  );
}
