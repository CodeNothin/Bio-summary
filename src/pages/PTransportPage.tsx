// =====================================================================
// พืช 5.4 — internal transport: diffusion vs bulk flow, water, water
// potential, root uptake, xylem, transpiration, phloem, pressure flow.
// Content follows deck Unit_5.4Transport. Section ids match pages.ts.
// =====================================================================
import { Analogy, List, More, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function PTransportPage() {
  return (
    <>
      {/* slides 1–5 */}
      <Section id="pt-process" title="การแพร่ vs การไหล" en="diffusion vs bulk flow">
        <Table
          head={['', 'การแพร่ (diffusion)', 'การไหล (bulk flow / mass flow)']}
          rows={[
            ['คืออะไร', 'สารเคลื่อนจากความเข้มข้นสูง → ต่ำ ด้วยการเคลื่อนที่แบบสุ่มจากความร้อน', 'กลุ่มโมเลกุลเคลื่อนที่ไปด้วยกัน'],
            ['แรงขับ', '**ความต่างของความเข้มข้น** (concentration gradient)', '**ความต่างของความดัน** (pressure gradient)'],
            ['สมการในสไลด์', "Fick's law: Js = −Ds (ΔCs/Δx)", "Poiseuille: อัตราการไหล = (πr⁴/8η)(ΔΨp/Δx)"],
            ['ระยะทาง', 'ช้ามากเมื่อระยะไกล', 'ใช้ลำเลียงระยะไกล'],
          ]}
        />
        <P>Fick's law: อัตราการเคลื่อนที่ของสาร (flux density, Js) **แปรผันตรงกับความต่างของความเข้มข้น** · Poiseuille: อัตราการไหล (volume flow rate) **แปรผันตรงกับรัศมีของท่อลำเลียง** (ในสมการรัศมีอยู่ในรูป r⁴ — ท่อกว้างขึ้น ไหลได้มากขึ้น)</P>
        <Note>การแพร่จึง**ไม่ใช่**กระบวนการที่พืชใช้ลำเลียงน้ำระยะไกล — พืชใช้ **bulk flow**</Note>
      </Section>

      {/* slide 6 */}
      <Section id="pt-water" title="สมบัติของน้ำที่ช่วยการลำเลียง" en="properties of water">
        <List
          items={[
            '**polar molecule** → เป็นตัวทำละลายที่ดี',
            '**hydrogen bond** ทำให้เกิด **cohesion** (น้ำยึดกันเอง) และ **adhesion** (น้ำยึดผนัง)',
            '**capillarity:** adhesion กับผนังหลอดดึงน้ำขึ้น ส่วน cohesion ยึดโมเลกุลน้ำไว้ด้วยกัน',
            'น้ำมีมวล ทำให้เกิด **hydrostatic pressure** · น้ำ**ทนต่อแรงดึง (tension)** ได้สูง (high tensile strength) เพราะพันธะไฮโดรเจน',
            '**osmosis:** การแพร่ของน้ำผ่านเยื่อหุ้มเซลล์ตาม water potential gradient',
          ]}
        />
        <Analogy>
          <P>นึกถึงโซ่ของ mob ที่จูงด้วย lead ต่อกันเป็นแถว — ดึงตัวหน้าสุด ทั้งแถวก็ขยับตาม · cohesion ทำให้สายน้ำในไซเลมเป็น "แถวต่อเนื่อง" ที่การคายน้ำที่ใบดึงขึ้นไปได้ทั้งสาย</P>
        </Analogy>
      </Section>

      {/* slides 10–15 */}
      <Section id="pt-psi" title="Water potential (Ψw)" en="water potential">
        <P>**Water potential = พลังงานอิสระ (free energy) ของน้ำ** — แรงขับของ osmosis คือความต่างของ water potential</P>
        <p className="big-rule">Ψw = Ψs + Ψp</p>
        <List
          items={[
            'ทุกค่าเป็นค่าเปรียบเทียบ: **น้ำกลั่นที่ 1 atm มี Ψw = 0 MPa** และ Ψp ที่ 1 atm = 0',
            '**Ψs** = ส่วนที่ลดลงเพราะตัวถูกละลาย → **ติดลบ** มากหรือน้อยขึ้นกับความเข้มข้น (ตัวถูกละลายยึดโมเลกุลน้ำไว้ พลังงานอิสระจึงลด)',
            '**Ψp** บวก = แรงดัน (turgor) · ลบ = แรงดึง (tension)',
            'สารละลายซูโครส 0.1 M: Ψw = −0.244 + 0 = **−0.244 MPa**',
          ]}
        />
        <W id="water-potential" />
        <P>ในน้ำกลั่น (Ψw สูงกว่าในเซลล์) น้ำเข้าเซลล์และเกิดแรงดันเต่ง · ใน hypertonic solution (1 M KCl) เซลล์เสียแรงดันเต่ง · เมื่อ Ψw ในและนอกเซลล์เท่ากัน **ไม่มีการเคลื่อนที่สุทธิของน้ำ**</P>
      </Section>

      {/* slides 7–9, 15–18 */}
      <Section id="pt-root" title="รากดูดน้ำ" en="water uptake by roots">
        <P>การลำเลียงน้ำในต้นพืชมี 3 ขั้น: **(1) รากดูดน้ำ = osmosis · (2) คายน้ำทางใบ = diffusion · (3) ลำเลียงในไซเลม = transpiration pull: bulk flow**</P>
        <W id="psi-tree" />
        <List
          items={[
            'น้ำในเซลล์ขนรากมี **Ψw ต่ำกว่า** Ψw ของน้ำในดิน จึงดูดน้ำได้',
            'น้ำเข้าเซลล์ราก แล้วลำเลียงผ่านเซลล์ในคอร์เท็กซ์ไปยังไซเลม — เส้นทางในแนวรัศมีมีทั้งการแพร่ไปตามผนังเซลล์ และแพร่ผ่านภายในเซลล์ (apoplast, symplast, transmembrane)',
            '**endodermis (Casparian strip) ลดการลำเลียงน้ำในแนวรัศมี** ทำให้เกิด water pressure gradient ในไซเลม',
            'อัตราการดูดน้ำ**มากที่สุดใกล้ปลายราก** (ยังมี suberin น้อย) — บริเวณที่ห่างออกไป endodermis มี suberin มากขึ้น',
          ]}
        />
      </Section>

      {/* slides 8, 20–22 */}
      <Section id="pt-xylem" title="การลำเลียงในไซเลม" en="xylem transport">
        <P>น้ำขึ้นถึงยอดต้นไม้สูงกว่า 100 เมตรได้ด้วย **transpiration pull (tension)** + เซลล์ลำเลียงน้ำของไซเลม</P>
        <Table
          head={['เซลล์ไซเลม', 'ลักษณะที่ช่วยการลำเลียง']}
          rows={[
            ['tracheid', 'ยาวเรียว มี pit ที่ผนังด้านข้าง'],
            ['vessel element', 'หัวท้ายมีช่องเปิด (perforation plate) ให้น้ำผ่าน'],
            ['ทั้งสองแบบ', 'ผนังหนา ทนแรงดันน้ำได้ · ด้านข้างมีผนังส่วนที่บาง (pit) ให้น้ำผ่านไปเซลล์ข้าง ๆ'],
          ]}
        />
        <List
          items={[
            'แรงขับเคลื่อนน้ำในไซเลม = **hydrostatic pressure gradient** · ไซเลมมีแรงต้านการเคลื่อนที่ของน้ำน้อยกว่าคอร์เท็กซ์',
            'ฟองอากาศในไซเลม (cavitation) ถูกกำจัดด้วยกลไกต่าง ๆ เช่น **แรงดันราก** (เห็นเป็นหยดน้ำที่ขอบใบ)',
          ]}
        />
      </Section>

      {/* slides 23–25 */}
      <Section id="pt-transpiration" title="การคายน้ำ" en="transpiration">
        <P>น้ำระเหยในใบแล้ว**แพร่ออกทางปากใบในรูปไอน้ำ** · แรงขับ = **ความต่างความเข้มข้นของไอน้ำ** (ช่องอากาศในใบ ~100% RH, อากาศนอกใบ เช่น 70% RH)</P>
        <P>การเปลี่ยนสถานะจากของเหลวเป็นไอดึงความร้อนจากเซลล์ → **การคายน้ำช่วยลดอุณหภูมิใบ**</P>
        <W id="transpiration" />
      </Section>

      {/* slides 26–31 */}
      <Section id="pt-phloem" title="การลำเลียงอาหารในโฟลเอ็ม" en="phloem">
        <List
          items={[
            'ทิศทาง**ไม่แน่นอน** — จาก **source (แหล่งสร้าง)** ไป **sink (แหล่งใช้)** · source เช่น ใบ หัวที่สะสมอาหาร · sink เช่น ผล ดอก ราก หัวที่กำลังโต',
            '**หลักฐาน 1 — การควั่นเปลือก (girdling):** อาหารสะสมที่เนื้อเยื่อ**เหนือรอยควั่น** (Mason & Maskell 1928)',
            '**หลักฐาน 2:** ให้ ¹⁴CO₂ ที่ใบ แล้วพบน้ำตาลที่มี ¹⁴C ใน sieve element (Fisher 1978)',
            'โฟลเอ็มมีเซลล์ 2 ชนิดที่มี**ผนังเซลล์ปฐมภูมิ** ทำงานร่วมกัน: **sieve tube element** (มี sieve plate) และ **companion cell**',
            'เก็บ phloem sap ด้วยปากเพลี้ย aphid · sap ของละหุ่ง: **น้ำตาลมากที่สุด (80–106 mg/ml)** มีกรดอะมิโน กรดอินทรีย์ โปรตีน K⁺ Cl⁻ ฟอสเฟต Mg²⁺ และฮอร์โมน auxin, gibberellin, abscisic acid',
          ]}
        />
        <More title="ไซเลม vs โฟลเอ็ม (สรุป)">
          <Table
            head={['', 'ไซเลม', 'โฟลเอ็ม']}
            rows={[
              ['เซลล์', 'tracheid, vessel (ตายแล้ว)', 'sieve tube, companion cell (มีชีวิต)'],
              ['ทิศทาง', 'รากขึ้นยอด', 'source → sink'],
              ['กระบวนการ', 'bulk flow', 'bulk flow'],
            ]}
          />
        </More>
      </Section>

      {/* slides 32–35 */}
      <Section id="pt-pressureflow" title="Pressure-flow model" en="E. Münch">
        <P>**E. Münch** เสนอว่าสารในโฟลเอ็มเคลื่อนที่ด้วยแรงขับจาก **pressure gradient**</P>
        <W id="pressure-flow" />
        <Note>จุดหลอก: ที่ source **Ψp สูงกว่า** (0.6 vs 0.3) แต่ **Ψw ต่ำกว่า** (−1.1 vs −0.4) เพราะน้ำตาลเข้มข้นมาก — sap ไหลตาม**ความดัน (Ψp)**</Note>
        <P>การโหลดน้ำตาลจาก mesophyll เข้าสู่ companion cell เกิดได้ทั้งทาง **symplast** (ผ่าน plasmodesmata) และ **apoplast** · จาก apoplast เข้าสู่ sieve element–companion cell complex เป็น **active transport**: **H⁺-ATPase** ใช้ ATP ปั๊ม H⁺ ออก แล้ว **sucrose-H⁺ symporter** พาซูโครสเข้าพร้อม H⁺</P>
      </Section>
    </>
  );
}
