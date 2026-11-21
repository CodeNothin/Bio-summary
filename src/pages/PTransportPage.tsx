// =====================================================================
// พืช 5.4 — internal transport: diffusion vs bulk flow, water, water
// potential, root uptake, xylem, transpiration, phloem, pressure flow.
// Content follows deck Unit_5.4Transport. Section ids match pages.ts.
//
// WRITING STYLE (the model for every page): "everything you need to
// know" for someone who sat in the lecture but doesn't remember it.
// Explain each idea in a sentence or two (what → how → why), keywords in
// **bold**, one line per equation, keep the slides' numbers, tables and
// step lists, widgets where they fit. Names/years, long lists of minor
// items and analogies go in <More> ("อ่านเพิ่ม") fold-outs.
// Every practice question names the phrase here that answers it
// (`inText` in src/data/questions/p-transport.ts); pages.test.tsx checks it.
// =====================================================================
import { Analogy, List, More, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function PTransportPage() {
  return (
    <>
      {/* slides 1–5 */}
      <Section id="pt-process" title="การแพร่ vs การไหล" en="diffusion vs bulk flow">
        <P>พืชลำเลียงสารได้ 2 แบบ: **การแพร่ (diffusion)** และ **การไหล (bulk flow)** — ต่างกันที่แรงขับ</P>
        <P>**การแพร่** = สารเคลื่อนจากความเข้มข้นสูง → ต่ำ ด้วยการเคลื่อนที่แบบสุ่มจากความร้อน แรงขับคือ**ความต่างของความเข้มข้น** (Fick's law: ยิ่งต่างมาก ยิ่งแพร่เร็ว) แต่การแพร่**ช้ามากเมื่อระยะไกล** พืชจึงไม่ใช้ลำเลียงน้ำระยะไกล</P>
        <p className="big-rule">Js = −Ds (ΔCs / Δx)</p>
        <P>**การไหล (bulk flow / mass flow)** = กลุ่มโมเลกุลเคลื่อนไปด้วยกัน แรงขับคือ**ความต่างของความดัน** → ใช้ลำเลียงระยะไกล ตามสมการ Poiseuille อัตราการไหล**แปรผันตรงกับรัศมีของท่อ** (ในสมการเป็น r⁴): ท่อกว้างขึ้น ไหลได้มากขึ้น</P>
        <p className="big-rule">อัตราการไหล = (πr⁴ / 8η)(ΔΨp / Δx)</p>
        <P>แรงขับอื่นในบทนี้: **osmosis** ขับด้วยความต่างของ water potential · **การคายน้ำ** ขับด้วยความต่างความเข้มข้นของไอน้ำ</P>
      </Section>

      {/* slide 6 */}
      <Section id="pt-water" title="สมบัติของน้ำที่ช่วยการลำเลียง" en="properties of water">
        <List
          items={[
            '**polar molecule** → เป็นตัวทำละลายที่ดี',
            '**hydrogen bond** ระหว่างโมเลกุล → **cohesion** (น้ำยึดกันเอง) และ **adhesion** (น้ำยึดกับผนัง)',
            '**capillarity**: ในหลอดเล็ก adhesion กับผนังหลอดดึงน้ำขึ้น ส่วน cohesion ยึดโมเลกุลน้ำที่ตามมาไว้ด้วยกัน',
            'น้ำมีมวล → เกิด **hydrostatic pressure**',
            '**high tensile strength**: พันธะไฮโดรเจนทำให้น้ำทนแรงดึง (tension) ได้สูง — สายน้ำในไซเลมจึงถูกดึงขึ้นได้ (transpiration pull)',
            '**osmosis** = การแพร่ของน้ำผ่านเยื่อหุ้มเซลล์ ตาม water potential gradient',
          ]}
        />
        <More title="นึกภาพแบบ Minecraft">
          <Analogy>
            <P>นึกถึงโซ่ของ mob ที่จูงด้วย lead ต่อกันเป็นแถว — ดึงตัวหน้าสุด ทั้งแถวก็ขยับตาม · cohesion ทำให้สายน้ำในไซเลมเป็น "แถวต่อเนื่อง" ที่การคายน้ำที่ใบดึงขึ้นไปได้ทั้งสาย</P>
          </Analogy>
        </More>
      </Section>

      {/* slides 10–15 */}
      <Section id="pt-psi" title="Water potential (Ψw)" en="water potential">
        <P>**Water potential (Ψw)** = พลังงานอิสระของน้ำ น้ำเคลื่อนจาก Ψw **สูง → ต่ำ** ความต่างของ Ψw จึงเป็นแรงขับของ osmosis</P>
        <p className="big-rule">Ψw = Ψs + Ψp</p>
        <List
          items={[
            'ทุกค่าเทียบกับ**น้ำกลั่นที่ 1 atm ซึ่งมี Ψw = 0 MPa**',
            '**Ψs**: ตัวถูกละลายยึดโมเลกุลน้ำไว้ พลังงานอิสระจึงลด → Ψs **ติดลบ** ยิ่งเข้มข้นยิ่งลบมาก สารละลายจึงมี Ψw < 0 (ซูโครส 0.1 M: Ψw = −0.244 MPa)',
            '**Ψp**: บวก = แรงดัน (แรงดันเต่ง turgor) · ลบ = แรงดึง (tension)',
          ]}
        />
        <W id="water-potential" />
        <P>**ตัวอย่างในสไลด์**: เซลล์เหี่ยว (Ψp = 0, Ψs = Ψw = −0.732) แช่ในซูโครส 0.1 M (Ψw = −0.244) → Ψw นอกเซลล์สูงกว่า น้ำจึงเข้าเซลล์และดันผนัง → **Ψp เพิ่มขึ้น** จนถึงสมดุลที่ Ψw ในเซลล์ = นอกเซลล์ = −0.244 → **ไม่มีการเคลื่อนที่สุทธิของน้ำ**</P>
        <p className="big-rule">Ψp = Ψw − Ψs = −0.244 − (−0.732) = +0.488 MPa</p>
        <P>กลับกัน ถ้าแช่ใน **hypertonic solution** (1 M KCl) Ψw นอกเซลล์ต่ำกว่า → น้ำออก **เซลล์เสียแรงดันเต่ง** (plasmolysis)</P>
      </Section>

      {/* slides 7–9, 15–18 */}
      <Section id="pt-root" title="รากดูดน้ำ" en="water uptake by roots">
        <P>การลำเลียงน้ำในต้นพืชมี 3 ขั้น จำคู่ "ขั้น = กระบวนการ":</P>
        <List
          items={[
            '**(1) รากดูดน้ำ = osmosis**',
            '**(2) ใบคายน้ำ = diffusion** (ไอน้ำแพร่ออกทางปากใบ)',
            '**(3) ลำเลียงในไซเลม = bulk flow** (transpiration pull)',
          ]}
        />
        <W id="psi-tree" />
        <P>เซลล์ขนรากมี **Ψw ต่ำกว่า**น้ำในดิน → น้ำ osmosis เข้าเซลล์ราก แล้วเคลื่อนผ่านคอร์เท็กซ์ไปไซเลม ทั้ง**ไปตามผนังเซลล์**และ**ผ่านภายในเซลล์** (3 เส้นทาง: apoplast, symplast, transmembrane)</P>
        <P>ก่อนเข้าไซเลม น้ำต้องผ่าน **endodermis** ซึ่งมี **Casparian strip** ลดการไหลในแนวรัศมี → เกิด **water pressure gradient ในไซเลม**</P>
        <P>ใกล้ปลายรากยังไม่มี endodermis น้ำจึงเข้าง่าย → **อัตราการดูดน้ำสูงสุดใกล้ปลายราก** · ห่างออกไป **endodermis มี suberin** มากขึ้น ดูดน้ำได้น้อยลง</P>
      </Section>

      {/* slides 8, 20–22 */}
      <Section id="pt-xylem" title="การลำเลียงในไซเลม" en="xylem transport">
        <P>ต้นไม้สูงกว่า 100 m ได้ น้ำขึ้นถึงยอดด้วย **transpiration pull**: การคายน้ำที่ใบสร้าง**แรงดึง (tension)** ดึงสายน้ำในไซเลมขึ้นไป (cohesion, adhesion ช่วยให้เป็นสายต่อเนื่อง) แรงขับในไซเลมจึงเป็น **hydrostatic pressure gradient** แบบ bulk flow · ไซเลมมีแรงต้านการไหลน้อยกว่าคอร์เท็กซ์</P>
        <P>Ψw **ลดลงตลอดทาง** น้ำจึงไหลจากดินไปอากาศ: **ดิน −0.3 → ไซเลมในราก −0.6 → ไซเลมในลำต้น −0.8 → ผนังเซลล์ใบ −1.0 → ช่องอากาศในใบ −7.0 → อากาศภายนอก −100 MPa** (ภาพในหัวข้อรากดูดน้ำ) · ในต้นพืช **Ψw สูงสุดที่ไซเลมในราก** (ใกล้ปลายราก)</P>
        <P>ท่อลำเลียงน้ำเกิดจากเซลล์ 2 แบบ: **tracheid** (ยาวเรียว มี pit) และ **vessel element** (หัวท้ายเปิดเป็น perforation plate) — ผนัง**หนา** ทนแรงได้ · ด้านข้างมี **pit** (ผนังบาง) ให้น้ำผ่านไปเซลล์ข้าง ๆ</P>
        <P>ฟองอากาศในไซเลม (**cavitation**) ถูกกำจัดได้ด้วยกลไกต่าง ๆ เช่น **แรงดันราก** (เห็นเป็นหยดน้ำที่ขอบใบ)</P>
      </Section>

      {/* slides 23–25 */}
      <Section id="pt-transpiration" title="การคายน้ำ" en="transpiration">
        <P>ในใบ น้ำระเหยเข้าช่องอากาศ แล้ว**แพร่ออกทางปากใบในรูปไอน้ำ (แก๊ส)** แรงขับคือ**ความต่างความเข้มข้นของไอน้ำ**: ช่องอากาศในใบ ~100% RH แต่อากาศนอกใบ เช่น 70% RH</P>
        <P>การเปลี่ยนน้ำเป็นไอดึงความร้อนจากเซลล์ → การคายน้ำ**ช่วยลดอุณหภูมิใบ**</P>
        <List
          items={[
            'แสง → ปากใบเปิด',
            'ความชื้นต่ำ/ขาดน้ำ (water stress) → ปากใบปิด',
            'ลม → คายน้ำมากขึ้น',
            '**CO₂ สูง → ปากใบเปิดน้อยลง**',
          ]}
        />
        <W id="transpiration" />
        <P>รวมทั้งเส้นทาง: **ดิน → ขนราก (osmosis) → คอร์เท็กซ์ ผ่าน endodermis → ไซเลม (bulk flow) → ระเหยในใบ แพร่ออกทางปากใบ (diffusion) → อากาศ**</P>
      </Section>

      {/* slides 26–31 */}
      <Section id="pt-phloem" title="การลำเลียงอาหารในโฟลเอ็ม" en="phloem">
        <P>โฟลเอ็มลำเลียงอาหาร (น้ำตาล) ใน**ทิศทางไม่แน่นอน** — จาก **source (แหล่งสร้าง)** ไป **sink (แหล่งใช้)** ขึ้นหรือลงก็ได้ · source: ใบ หัวหรือเมล็ดที่สะสมอาหาร · sink: ผล ดอก ราก หัวที่กำลังโต</P>
        <P>หลักฐาน: **ควั่นเปลือก (girdling)** ออกเป็นวง → **อาหารสะสมเหนือรอยควั่น** แสดงว่าโฟลเอ็มในเปลือกลำเลียงอาหาร · ให้ใบได้ ¹⁴CO₂ → พบน้ำตาลที่มี ¹⁴C ใน sieve element</P>
        <P>โฟลเอ็มมีเซลล์ 2 ชนิดที่มี**ผนังปฐมภูมิ** ทำงานร่วมกัน: **sieve tube element** (มี sieve plate เป็นรูให้ sap ผ่าน) และ **companion cell**</P>
        <Table
          head={['', 'ไซเลม', 'โฟลเอ็ม']}
          rows={[
            ['เซลล์', 'tracheid, vessel (**ตายแล้ว**)', 'sieve tube, companion cell (**มีชีวิต**)'],
            ['ทิศทาง', 'รากขึ้นยอด', 'source → sink'],
            ['กระบวนการ', 'bulk flow', 'bulk flow'],
          ]}
        />
        <P>phloem sap (เก็บจากปากเพลี้ย aphid) มี**น้ำตาลมากที่สุด** (ละหุ่ง 80–106 mg/ml) รองลงมาคือกรดอะมิโน ไอออน และฮอร์โมน</P>
        <More title="อ่านเพิ่ม: ที่มาของหลักฐาน และสารใน phloem sap">
          <List
            items={[
              'การควั่นเปลือก: Mason & Maskell (1928) · การติดตาม ¹⁴C: Fisher (1978)',
              'phloem sap ของละหุ่ง: น้ำตาล 80–106 mg/ml, กรดอะมิโน 5.2 mg/ml, กรดอินทรีย์, โปรตีน, K⁺, Cl⁻, ฟอสเฟต (H₂PO₄⁻), Mg²⁺ และฮอร์โมน auxin, gibberellin, abscisic acid',
            ]}
          />
        </More>
      </Section>

      {/* slides 32–35 */}
      <Section id="pt-pressureflow" title="Pressure-flow model" en="E. Münch">
        <P>**E. Münch** อธิบายว่า phloem sap ไหลแบบ bulk flow ด้วย**ความต่างของความดัน (Ψp)** ระหว่าง source กับ sink (**pressure-flow model**):</P>
        <List
          items={[
            '**(1) โหลดน้ำตาลเข้า sieve element ที่ source** (ใช้พลังงาน)',
            '**(2)** น้ำตาลมาก → Ψs ลด → น้ำจากไซเลม osmosis เข้า → **Ψp บวกสูง**',
            '**(3)** ความต่างของแรงดันดัน sap **ไหลไป sink**',
            '**(4)** ที่ sink น้ำตาลออกจาก sieve element ไปเซลล์ที่ใช้ (ตามสไลด์: แบบ diffusion)',
            '**(5)** น้ำออกกลับสู่ไซเลม → Ψp ที่ sink ต่ำ',
          ]}
        />
        <W id="pressure-flow" />
        <Table
          head={['sieve tube (MPa)', 'source', 'sink']}
          rows={[
            ['Ψs', '−1.7', '−0.7'],
            ['Ψp', '**0.6**', '0.3'],
            ['Ψw', '−1.1', '**−0.4**'],
          ]}
        />
        <Note>จุดหลอก: source มี **Ψp สูงกว่า** แต่ **Ψw ต่ำกว่า** (เพราะน้ำตาลเข้มข้นมาก) — ที่ sink Ψw สูงกว่า แต่ sap ก็ยังไหลไป sink เพราะไหลตาม**ความดัน** ไม่ใช่ตาม Ψw</Note>
        <P>การโหลดน้ำตาลจาก mesophyll ไป companion cell มี 2 ทาง: **symplast** (ผ่าน plasmodesmata) และ **apoplast** · ทาง **apoplast → companion cell/sieve element = active transport**: **H⁺-ATPase** ใช้ ATP ปั๊ม H⁺ ออก แล้ว **sucrose-H⁺ symporter** พาซูโครสเข้ามาพร้อม H⁺</P>
      </Section>
    </>
  );
}
