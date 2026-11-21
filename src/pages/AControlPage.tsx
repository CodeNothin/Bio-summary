// =====================================================================
// สัตว์ 5.6 — responses and control: homeostasis, feedback, nervous
// system, neuron and synapse, reflex, hormones and regulation.
// Content follows Gen_bio_107_Unit_5 slides 137–181. Section ids match
// src/data/pages.ts.
// Decision (user): slide 152's "ส่วนใหญ่พบในสัตว์มีกระดูกสันหลัง" stays
// under the unmyelinated type, as the slide places it.
// Writing style: see "How page text is written" in README.md. Every
// question's `inText` phrase must stay in its section (pages.test.tsx).
// =====================================================================
import { Analogy, List, More, Note, P, Section, Table } from '../components/ui';
import { W } from '../widgets/registry';

export function AControlPage() {
  return (
    <>
      {/* slides 138–142 */}
      <Section id="ak-homeostasis" title="ภาวะธำรงดุลและกลไก" en="homeostasis and mechanisms">
        <P>**homeostasis** = การควบคุมภาวะสมดุลในร่างกาย แม้สภาวะแวดล้อมภายนอกจะแปรปรวนมาก — เหมือนเทอร์โมสตัต: มี set point, ร้อนเกินปิดฮีตเตอร์, เย็นเกินเปิดฮีตเตอร์</P>
        <Table
          head={['', 'ความหมาย', 'ตัวอย่างในสไลด์']}
          rows={[
            ['**regulator**', 'รักษาภายในไม่ให้เปลี่ยนมาก แม้ภายนอกเปลี่ยนมาก (thermoregulator, osmoregulator)', 'นาก (river otter) อุณหภูมิกาย ~38 °C คงที่'],
            ['**conformer**', 'ภายในเปลี่ยนตามภายนอก (thermoconformer, osmoconformer)', 'ปลา largemouth bass'],
            ['**ectotherm**', 'ได้ความร้อนจากภายนอก', 'สัตว์ไม่มีกระดูกสันหลัง ปลา สะเทินน้ำสะเทินบก สัตว์เลื้อยคลาน'],
            ['**endotherm**', 'ได้ความร้อนจาก metabolism ของร่างกาย', 'นก สัตว์เลี้ยงลูกด้วยนม'],
          ]}
        />
        <P>ระบบควบคุมสมดุลมี 3 ส่วน **ตัวรับ (receptor) → ศูนย์ควบคุม (control center) → อวัยวะแสดงผล (effector)** ทำงานเป็นวง:</P>
        <List
          items={[
            '**(1) สิ่งเร้า (stimulus)** ทำให้ค่าตัวแปรเปลี่ยน',
            '**(2) ตัวรับ (receptor/sensor)** ตรวจจับการเปลี่ยนแปลง',
            '**(3)** ส่งข้อมูลทาง **afferent pathway** ไปศูนย์ควบคุม',
            '**(4)** ศูนย์ควบคุมส่งคำสั่งทาง **efferent pathway** ไป effector',
            '**(5)** การตอบสนองของ effector **ย้อนกลับ**ไปมีผลต่อสิ่งเร้า (feedback)',
          ]}
        />
        <P>ทำงานร่วมกันโดย 2 ระบบ: **ระบบต่อมไร้ท่อ** (ฮอร์โมนในเลือด ไปทั่วร่างกาย) และ**ระบบประสาท** (สัญญาณไปตำแหน่งเฉพาะ)</P>
      </Section>

      {/* slides 143–144, 165–166 */}
      <Section id="ak-feedback" title="กลไกย้อนกลับ" en="feedback mechanisms">
        <Table
          head={['', 'แบบลบ (negative)', 'แบบบวก (positive)']}
          rows={[
            ['ความหมาย', 'ตอบสนอง**ตรงกันข้าม**กับที่เกิดตอนแรก → กลับเข้าสู่สมดุล', 'เร่งให้**ต่างจาก set point มากขึ้น**'],
            ['ความสำคัญ', 'กลไกควบคุมที่สำคัญที่สุดในร่างกาย', 'มักพบในกรณีฉุกเฉิน'],
            ['ตัวอย่าง', 'อุณหภูมิร่างกาย ระดับฮอร์โมน (ไทรอยด์ กลูโคส แคลเซียม)', 'การรวมตัวของเกล็ดเลือดเมื่อเกิดบาดแผล · oxytocin ขณะคลอด/ให้นม'],
          ]}
        />
        <W id="feedback-loop" />
        <Note>สไลด์ positive feedback (144, 181) มีหัวข้อพิมพ์ว่า "Negative feedback mechanism" — เป็นการพิมพ์ผิด เนื้อหาคือแบบบวก</Note>
      </Section>

      {/* slides 145–148 */}
      <Section id="ak-nervous" title="ระบบประสาท" en="nervous system">
        <P>ระบบประสาทเป็นศูนย์กลางควบคุมการแสดงปฏิกิริยาตอบสนองต่อสิ่งเร้า ประสานอวัยวะสัมผัสกับอวัยวะมอเตอร์ ควบคุมกล้ามเนื้อและต่อม เป็นศูนย์ความรู้สึกนึกคิด การเรียนรู้ ความจำ และทำงานร่วมกับระบบต่อมไร้ท่อ</P>
        <P>การจัดระบบต่างกันในสัตว์แต่ละชนิด: ไฮดรา = **ร่างแหประสาท (nerve net)** · ดาวทะเล = nerve ring + radial nerve · พลานาเรีย = สมอง + nerve cord + transverse nerve · ปลิง/แมลง = สมอง + ventral nerve cord + segmental ganglia · หมึก = สมอง + ganglia · ซาลาแมนเดอร์ = สมอง + ไขสันหลัง — สัตว์ชั้นสูงซับซ้อนกว่า</P>
        <Table
          head={['ส่วน', 'ประกอบด้วย']}
          rows={[
            ['**CNS** (ระบบประสาทส่วนกลาง)', 'สมอง และไขสันหลัง'],
            ['**PNS** (ระบบประสาทรอบนอก)', 'เส้นประสาทสมอง (cranial nerves) · เส้นประสาทไขสันหลัง (spinal nerves) · ระบบประสาทอัตโนวัติ (sympathetic, parasympathetic, enteric → กล้ามเนื้อเรียบ หัวใจ ต่อม)'],
          ]}
        />
        <P>หน้าที่ 3 ส่วน: **sensory input** (sensory neuron: receptor → CNS) → **integration** (สมองและไขสันหลัง) → **motor output** (motor neuron → effector)</P>
      </Section>

      {/* slides 149–154 */}
      <Section id="ak-neuron" title="เซลล์ประสาทและไซแนปส์" en="neuron & synapse">
        <W id="neuron-map" />
        <List
          items={[
            'neuron เป็น**หน่วยทำงาน**ของระบบประสาท และเป็น **transducer** เปลี่ยนพลังงานของสิ่งเร้า (สารเคมี ความร้อน ความดัน) เป็นสัญญาณไฟฟ้า = **nerve impulse / action potential**',
            '4 ส่วนหลัก: dendrite · cell body · axon · synaptic terminal · axon นำ action potential จาก cell body ไปเซลล์อื่น (คล้ายสายเคเบิล) และขนส่งสารไป–กลับ · **เส้นประสาท (nerve)** = มัดของ axon',
            'axon มี 2 แบบ: มีปลอกไมอีลิน (myelinated) · ไม่มีปลอกไมอีลิน (nonmyelinated) ส่วนใหญ่พบในสัตว์มีกระดูกสันหลัง (ตามที่สไลด์วาง) · myelin ใน **PNS = Schwann cell**, ใน **CNS = oligodendrocyte**',
            '**resting membrane potential = −70 mV** · ถูกกระตุ้นถึง **threshold** → เกิด action potential (Na⁺ ไหลเข้า แล้ว K⁺ ไหลออก) กระตุ้นบริเวณถัดไปต่อเนื่อง',
            '**chemical synapse**: presynaptic cell ปล่อย**สารสื่อประสาท** (acetylcholine, epinephrine, norepinephrine, dopamine) → เปลี่ยนศักย์เยื่อเซลล์ของ postsynaptic cell',
          ]}
        />
        <More title="นึกภาพแบบ Minecraft">
        <Analogy>
          <P>action potential เหมือนวงจร redstone: ส่งสัญญาณต่อเป็นช่วง ๆ ไปตามสาย (axon) และที่ปลายสายต้องใช้ "ตัวกลาง" (สารสื่อประสาท) ข้ามช่องว่างไปกระตุ้นอุปกรณ์ถัดไป</P>
        </Analogy>
        </More>
      </Section>

      {/* slides 156–158 */}
      <Section id="ak-reflex" title="รีเฟล็กซ์" en="reflex">
        <P>**neural circuit** อย่างง่าย = sensory neuron + motor neuron · **reflex arc**: sensory receptor → sensory neuron → integration center หรือ interneuron → motor neuron → effector</P>
        <P>**กิริยารีเฟล็กซ์ (reflex action)** = การตอบสนองที่เกิดขึ้นโดยอัตโนมัตินอกอำนาจจิตใจ (involuntary) — ไขสันหลังรับ–ส่งข้อมูลกับสมอง และตอบสนองแบบรีเฟล็กซ์ได้เอง · บริเวณที่มี interneuron รวมกันมากที่สุดคือสมอง</P>
        <W id="reflex-arc" />
      </Section>

      {/* slides 159–166, 170–172 */}
      <Section id="ak-hormones" title="ฮอร์โมนและต่อมไร้ท่อ" en="hormones">
        <P>**ฮอร์โมน** = สารที่สร้างโดย**ต่อมไร้ท่อ (endocrine gland)** ส่งผ่าน**กระแสเลือด**ไปยัง**เนื้อเยื่อเป้าหมาย** กระตุ้นการทำงานเฉพาะ · ควบคุมการเจริญเติบโต การสืบพันธุ์และลักษณะทางเพศ และรักษาสภาพแวดล้อมภายในร่างกาย</P>
        <Table
          head={['ประเภท (ตามโครงสร้าง)', 'ตัวอย่าง']}
          rows={[
            ['เปปไทด์/โปรตีน (polypeptide)', 'growth hormone, insulin'],
            ['เอมีน (amine) — จากกรดอะมิโนที่มีหมู่ NH₂', 'thyroid hormone, epinephrine, norepinephrine'],
            ['สเตียรอยด์ (steroid) — โครงสร้างหลักคอเลสเตอรอล', 'androgens (cortisol ในภาพ)'],
            ['กรดไขมัน (fatty acid)', 'prostaglandins'],
          ]}
        />
        <W id="glands-map" />
        <Table
          head={['ต่อม', 'ฮอร์โมน → ผล']}
          rows={[
            ['ต่อมใต้สมองส่วนหลัง (สร้างโดยไฮโปทาลามัส)', 'oxytocin → มดลูกและต่อมน้ำนมหดตัว · ADH → ไตเก็บน้ำ'],
            ['ต่อมใต้สมองส่วนหน้า', 'GH (การเติบโต กระดูก) · prolactin (สร้างน้ำนม) · FSH, LH (รังไข่/อัณฑะ) · TSH (ไทรอยด์) · ACTH (adrenal cortex)'],
            ['ไทรอยด์', 'T3, T4 (metabolism) · calcitonin (ลด Ca²⁺)'],
            ['พาราไทรอยด์', 'PTH (เพิ่ม Ca²⁺)'],
            ['ตับอ่อน', 'insulin (ลดกลูโคส) · glucagon (เพิ่มกลูโคส)'],
            ['adrenal medulla', 'epinephrine, norepinephrine (เพิ่มกลูโคส metabolism หลอดเลือดบางส่วนหดตัว)'],
            ['adrenal cortex', 'glucocorticoids (เพิ่มกลูโคส) · mineralocorticoids (ดูดกลับ Na⁺ ขับ K⁺ ที่ไต)'],
            ['อัณฑะ / รังไข่', 'androgens / estrogens, progesterone'],
            ['pineal · thymus', 'melatonin (จังหวะชีวภาพ) · thymosin (T lymphocyte)'],
          ]}
        />
        <P>**ไฮโปทาลามัสกับต่อมใต้สมอง**: ส่วนหลัง — ฮอร์โมนสร้างจากเซลล์ประสาทของไฮโปทาลามัสที่ยื่น axon เข้ามา · ส่วนหน้า — ถูกควบคุมด้วย releasing/inhibiting hormone ที่ส่งผ่าน **portal vessel** · negative feedback: ไฮโปทาลามัส (TRH, CRH, GnRH) → ต่อมใต้สมองส่วนหน้า (TSH, ACTH, FSH, LH) → ต่อมเป้าหมาย → ฮอร์โมนย้อนกลับยับยั้ง</P>
      </Section>

      {/* slides 167–174 */}
      <Section id="ak-regulation" title="การควบคุมสมดุลด้วยฮอร์โมน" en="hormonal regulation">
        <W id="glucose-sim" />
        <List
          items={[
            '**กลูโคส** (ปกติ ~90 mg/100 mL): insulin ลด · glucagon เพิ่ม = **antagonistic hormones**',
            '**แคลเซียม** (ปกติ ~10 mg/100 mL): **PTH** (พาราไทรอยด์) เพิ่ม — กระตุ้น osteoclast ยับยั้ง osteoblast เก็บ Ca²⁺ ที่ไต ดูดซึมที่ลำไส้เล็ก · **calcitonin** (ไทรอยด์) ลด — ยับยั้ง osteoclast กระตุ้น osteoblast ยับยั้งการดูดกลับที่ไต ลด PTH',
            '**osmolarity** (เช่น เหงื่อออกมาก): osmolarity ของเลือดเพิ่ม → **osmoreceptor ในไฮโปทาลามัส**ตรวจพบ → **ต่อมใต้สมองส่วนหลังปล่อย ADH** (และเกิดความกระหาย) → **collecting duct ดูดน้ำกลับมากขึ้น** → osmolarity กลับสู่ปกติ (~300 mOsm/L)',
            '**อุณหภูมิ** (35.6–37.8 °C) คุมโดยไฮโปทาลามัส: ร้อน → หลอดเลือดผิวขยาย เหงื่อออก · **หนาว → หลอดเลือดที่ผิวหนังหดตัว กล้ามเนื้อสั่น** และ TRH → TSH → **ไทรอยด์หลั่ง thyroxine เพิ่ม metabolism**',
            '**ความเครียด**: ระยะสั้น — เส้นประสาท → adrenal medulla → epinephrine/norepinephrine (glycogen → กลูโคส ความดันและการหายใจเพิ่ม) · ระยะยาว — ACTH → adrenal cortex → mineralocorticoids (เก็บ Na⁺ น้ำ) และ glucocorticoids (โปรตีน/ไขมัน → กลูโคส ภูมิคุ้มกันถูกกด)',
          ]}
        />
      </Section>
    </>
  );
}
