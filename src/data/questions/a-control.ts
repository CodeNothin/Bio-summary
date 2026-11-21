// =====================================================================
// Practice questions — สัตว์ 5.6: homeostasis, nervous & endocrine control.
// Source deck: Gen_bio_107_Unit_5 slides 137–181.
// Editing rules: see the top of p-structure.ts.
//
// Decision (user, TODO 8): slide 152 places "ส่วนใหญ่พบในสัตว์มีกระดูกสันหลัง"
// under the unmyelinated type; the page repeats it as the slide does and
// no question tests it.
// =====================================================================
import type { Question } from '../types';

export const aControl: Question[] = [
  // ---------------------------------------------------------- ak-homeostasis
  {
    id: 'ak-ho-01', type: 'mcq', topic: 'ak-homeostasis', source: 'สัตว์ 5.6 สไลด์ 139',
    inText: ['regulator', 'นาก (river otter) อุณหภูมิกาย ~38 °C คงที่', 'conformer', 'ปลา largemouth bass'],
    prompt: 'ในกราฟอุณหภูมิร่างกายเทียบกับอุณหภูมิสิ่งแวดล้อม นาก (river otter) มีอุณหภูมิคงที่ ~38 °C ส่วนปลา largemouth bass มีอุณหภูมิเปลี่ยนตามน้ำ ข้อใดถูก',
    options: [
      { text: 'นากเป็น thermoregulator ส่วนปลาเป็น thermoconformer', correct: true, why: 'regulator รักษาภายในให้คงที่ · conformer เปลี่ยนตามภายนอก' },
      { text: 'นากเป็น thermoconformer ส่วนปลาเป็น thermoregulator', why: 'สลับกัน' },
      { text: 'ทั้งสองเป็น thermoregulator', why: 'ปลาเปลี่ยนอุณหภูมิตามน้ำ' },
      { text: 'ทั้งสองเป็น thermoconformer', why: 'นากรักษาอุณหภูมิคงที่' },
    ],
    hints: ['เส้นราบ = ไม่ขึ้นกับภายนอก'],
    explanation: 'ในอีกมุม: นากเป็น endotherm (ความร้อนจาก metabolism) ปลาเป็น ectotherm (ความร้อนจากภายนอก)',
  },
  {
    id: 'ak-ho-02', type: 'sort', topic: 'ak-homeostasis', source: 'สัตว์ 5.6 สไลด์ 140',
    inText: ['สัตว์ไม่มีกระดูกสันหลัง ปลา สะเทินน้ำสะเทินบก สัตว์เลื้อยคลาน', 'นก สัตว์เลี้ยงลูกด้วยนม'],
    prompt: 'จัดสัตว์เป็น ectotherm หรือ endotherm',
    bins: [{ id: 'ecto', label: 'ectotherm (ได้ความร้อนจากภายนอก)' }, { id: 'endo', label: 'endotherm (ได้ความร้อนจาก metabolism)' }],
    items: [
      { text: 'สัตว์ไม่มีกระดูกสันหลัง', bin: 'ecto' }, { text: 'ปลา', bin: 'ecto' }, { text: 'สัตว์สะเทินน้ำสะเทินบก', bin: 'ecto' }, { text: 'สัตว์เลื้อยคลาน', bin: 'ecto' },
      { text: 'นก', bin: 'endo' }, { text: 'สัตว์เลี้ยงลูกด้วยนม', bin: 'endo' },
    ],
    hints: ['endotherm มีแค่ 2 กลุ่มในสไลด์'],
    explanation: 'ectotherm: invertebrates, ปลา, สะเทินน้ำสะเทินบก, สัตว์เลื้อยคลาน · endotherm: นก, สัตว์เลี้ยงลูกด้วยนม',
  },
  {
    id: 'ak-ho-03', type: 'order', topic: 'ak-homeostasis', source: 'สัตว์ 5.6 สไลด์ 141',
    inText: ['(1) สิ่งเร้า (stimulus)', '(2) ตัวรับ (receptor/sensor)', 'afferent pathway', 'efferent pathway', '(5) การตอบสนองของ effector ย้อนกลับ'],
    prompt: 'เรียงลำดับการทำงานของระบบควบคุมสมดุล',
    steps: ['สิ่งเร้า (stimulus) ทำให้ค่าตัวแปรเปลี่ยน', 'ตัวรับ (receptor/sensor) ตรวจจับการเปลี่ยนแปลง', 'ส่งข้อมูลทาง afferent pathway ไปศูนย์ควบคุม (control center)', 'ศูนย์ควบคุมส่งคำสั่งทาง efferent pathway ไปอวัยวะแสดงผล (effector)', 'การตอบสนองของ effector ย้อนกลับไปมีผลต่อสิ่งเร้า'],
    hints: ['receptor → control center → effector'],
    explanation: 'ระบบควบคุมสมดุล 3 ส่วน: receptor, control center, effector',
  },
  // ---------------------------------------------------------- ak-feedback
  {
    id: 'ak-fb-01', type: 'sort', topic: 'ak-feedback', source: 'สัตว์ 5.6 สไลด์ 143–144, 165–167',
    inText: ['อุณหภูมิร่างกาย ระดับฮอร์โมน (ไทรอยด์ กลูโคส แคลเซียม)', 'การรวมตัวของเกล็ดเลือดเมื่อเกิดบาดแผล · oxytocin ขณะคลอด/ให้นม'],
    prompt: 'จัดตัวอย่างเป็นกลไกย้อนกลับแบบลบหรือแบบบวก',
    bins: [{ id: 'neg', label: 'negative feedback (กลับสู่สมดุล)' }, { id: 'pos', label: 'positive feedback (เร่งให้ห่างจากเดิม)' }],
    items: [
      { text: 'ควบคุมอุณหภูมิร่างกาย (หนาว → ตัวสั่น)', bin: 'neg' },
      { text: 'ควบคุมระดับฮอร์โมนไทรอยด์ (T3/T4 ยับยั้ง TSH)', bin: 'neg' },
      { text: 'insulin/glucagon ควบคุมกลูโคสในเลือด', bin: 'neg' },
      { text: 'การรวมตัวของเกล็ดเลือดเมื่อเกิดบาดแผล', bin: 'pos' },
      { text: 'oxytocin ขณะคลอดบุตร / การหลั่งน้ำนม', bin: 'pos' },
    ],
    hints: ['positive feedback มักพบในกรณีฉุกเฉิน และจบเมื่อเหตุการณ์สิ้นสุด'],
    explanation: 'negative: สำคัญที่สุด ตอบสนองตรงข้ามกับการเปลี่ยนแปลง · positive: เร่งให้ต่างจาก set point มากขึ้น',
  },
  {
    id: 'ak-fb-02', type: 'tf', topic: 'ak-feedback', source: 'สัตว์ 5.6 สไลด์ 143',
    inText: 'ตอบสนองตรงกันข้ามกับที่เกิดตอนแรก → กลับเข้าสู่สมดุล',
    statement: 'กลไกย้อนกลับแบบลบทำให้เกิดการตอบสนองในทางตรงกันข้ามกับที่เกิดตอนแรก ทำให้ร่างกายกลับเข้าสู่สมดุล',
    answer: true,
    why: 'นิยามตามสไลด์ 143',
    hints: ['ลบ = หักล้าง'],
    explanation: 'เหมือนเทอร์โมสตัต: ร้อนเกิน → ปิดฮีตเตอร์ · เย็นเกิน → เปิดฮีตเตอร์',
  },
  // ---------------------------------------------------------- ak-nervous
  {
    id: 'ak-nv-01', type: 'match', topic: 'ak-nervous', source: 'สัตว์ 5.6 สไลด์ 147–148',
    inText: ['CNS (ระบบประสาทส่วนกลาง) สมอง และไขสันหลัง', 'เส้นประสาทสมอง (cranial nerves) · เส้นประสาทไขสันหลัง (spinal nerves) · ระบบประสาทอัตโนวัติ', 'sensory input (sensory neuron: receptor → CNS)', 'integration (สมองและไขสันหลัง)', 'motor output (motor neuron → effector)'],
    prompt: 'จับคู่ส่วนของระบบประสาทกับคำอธิบาย',
    pairs: [
      { left: 'CNS', right: 'สมองและไขสันหลัง' },
      { left: 'PNS', right: 'เส้นประสาทสมอง เส้นประสาทไขสันหลัง ระบบประสาทอัตโนวัติ' },
      { left: 'sensory input', right: 'นำสัญญาณจากหน่วยรับความรู้สึกไปยังศูนย์กลาง (sensory neuron)' },
      { left: 'integration', right: 'รวบรวมข้อมูลและประสานงาน (สมองและไขสันหลัง)' },
      { left: 'motor output', right: 'นำคำสั่งไปยังหน่วยตอบสนอง (motor neuron → effector)' },
    ],
    hints: ['PNS แบ่งเป็น afferent (sensory) และ efferent (motor/autonomic)'],
    explanation: 'ระบบประสาทอัตโนวัติ: sympathetic, parasympathetic, enteric — ควบคุมกล้ามเนื้อเรียบ หัวใจ ต่อม',
  },
  {
    id: 'ak-nv-02', type: 'mcq', topic: 'ak-nervous', source: 'สัตว์ 5.6 สไลด์ 146',
    inText: 'ไฮดรา = ร่างแหประสาท (nerve net)',
    prompt: 'ไฮดรา (cnidarian) มีการจัดระบบประสาทแบบใด',
    options: [
      { text: 'ร่างแหประสาท (nerve net)', correct: true, why: 'ภาพ (a) ในสไลด์ 146' },
      { text: 'สมองและไขสันหลัง', why: 'นั่นคือสัตว์มีกระดูกสันหลัง (ซาลาแมนเดอร์)' },
      { text: 'nerve ring และ radial nerve', why: 'นั่นคือดาวทะเล' },
      { text: 'สมอง nerve cord และ transverse nerve แบบบันได', why: 'นั่นคือพลานาเรีย' },
    ],
    hints: ['สัตว์ที่ไม่มีหัวชัดเจน'],
    explanation: 'สัตว์ชั้นสูงมีระบบประสาทซับซ้อนมากขึ้น มีสมองและปมประสาทรวมกัน',
  },
  // ---------------------------------------------------------- ak-neuron
  {
    id: 'ak-ne-01', type: 'label', topic: 'ak-neuron', source: 'สัตว์ 5.6 สไลด์ 151',
    inText: 'axon นำ action potential จาก cell body ไปเซลล์อื่น',
    prompt: 'แตะส่วนที่นำ action potential "ออกจาก" ตัวเซลล์ไปยังเซลล์อื่น',
    diagram: 'neuron', target: 'axon',
    hints: ['ทำหน้าที่คล้ายสายเคเบิล'],
    explanation: 'มัดของ axon หลาย ๆ อัน = เส้นประสาท (nerve)',
  },
  {
    id: 'ak-ne-02', type: 'label', topic: 'ak-neuron', source: 'สัตว์ 5.6 สไลด์ 152',
    inText: 'PNS = Schwann cell',
    prompt: 'แตะส่วนที่ใน PNS สร้างจาก Schwann cell',
    diagram: 'neuron', target: 'myelin',
    hints: ['หุ้ม axon เป็นช่วง ๆ'],
    explanation: 'myelin ใน PNS = Schwann cell, ใน CNS = oligodendrocyte',
  },
  {
    id: 'ak-ne-03', type: 'mcq', topic: 'ak-neuron', source: 'สัตว์ 5.6 สไลด์ 153',
    inText: 'resting membrane potential = −70 mV',
    prompt: 'ศักย์เยื่อเซลล์ระยะพักของเซลล์ประสาท (resting membrane potential) มีค่าประมาณเท่าใด',
    options: [
      { text: '−70 mV', correct: true, why: 'สไลด์ 153' },
      { text: '+70 mV', why: 'ภายในเซลล์ขณะพักเป็นลบเมื่อเทียบกับภายนอก' },
      { text: '0 mV', why: 'มีความต่างศักย์อยู่' },
      { text: '−7 mV', why: 'ผิดหลัก' },
    ],
    hints: ['ในภาพมีเครื่องวัดแสดงค่า'],
    explanation: 'เมื่อถูกกระตุ้นถึง threshold → เกิด action potential (Na⁺ ไหลเข้า แล้ว K⁺ ไหลออก) และส่งต่อไปตามแอกซอน',
  },
  {
    id: 'ak-ne-04', type: 'tf', topic: 'ak-neuron', source: 'สัตว์ 5.6 สไลด์ 149',
    inText: 'transducer เปลี่ยนพลังงานของสิ่งเร้า (สารเคมี ความร้อน ความดัน) เป็นสัญญาณไฟฟ้า',
    statement: 'เซลล์ประสาทเป็น transducer คือเปลี่ยนพลังงานของสิ่งเร้า (สารเคมี ความร้อน ความดัน) ให้เป็นสัญญาณไฟฟ้าที่เรียกว่า nerve impulse หรือ action potential',
    answer: true,
    why: 'สไลด์ 149',
    hints: ['transducer = ตัวแปลงพลังงาน'],
    explanation: 'neuron เป็นหน่วยทำงานของระบบประสาท',
  },
  {
    id: 'ak-ne-05', type: 'mcq', topic: 'ak-neuron', source: 'สัตว์ 5.6 สไลด์ 154',
    inText: 'presynaptic cell ปล่อยสารสื่อประสาท (acetylcholine, epinephrine, norepinephrine, dopamine) → เปลี่ยนศักย์เยื่อเซลล์ของ postsynaptic cell',
    prompt: 'ที่ chemical synapse สิ่งใดทำให้ศักย์เยื่อเซลล์ของ postsynaptic cell เปลี่ยนแปลง',
    options: [
      { text: 'สารสื่อประสาท (neurotransmitter) เช่น acetylcholine', correct: true, why: 'สไลด์ 154' },
      { text: 'กระแสไฟฟ้าที่กระโดดข้ามช่อง synapse โดยตรง', why: 'chemical synapse ใช้สารเคมี' },
      { text: 'ฮอร์โมนในกระแสเลือด', why: 'นั่นคือระบบต่อมไร้ท่อ' },
      { text: 'ปลอกไมอีลิน', why: 'ไมอีลินหุ้มแอกซอน' },
    ],
    hints: ['chemical = สารเคมี'],
    explanation: 'สารสื่อประสาท: acetylcholine, epinephrine, norepinephrine, dopamine',
  },
  // ---------------------------------------------------------- ak-reflex
  {
    id: 'ak-re-01', type: 'order', topic: 'ak-reflex', source: 'สัตว์ 5.6 สไลด์ 158',
    inText: 'sensory receptor → sensory neuron → integration center หรือ interneuron → motor neuron → effector',
    prompt: 'เรียงวงจร reflex arc',
    steps: ['sensory receptor', 'sensory neuron', 'integration center หรือ interneuron (ในไขสันหลัง)', 'motor neuron', 'effector'],
    hints: ['รับ → ส่งเข้า → ประมวล → ส่งออก → ทำงาน'],
    explanation: 'reflex arc เป็นวงจรประสาทอย่างง่าย อย่างน้อยมี sensory neuron + motor neuron',
  },
  {
    id: 'ak-re-02', type: 'tf', topic: 'ak-reflex', source: 'สัตว์ 5.6 สไลด์ 156–157',
    inText: 'การตอบสนองที่เกิดขึ้นโดยอัตโนมัตินอกอำนาจจิตใจ (involuntary)',
    statement: 'กิริยารีเฟล็กซ์ (reflex action) เป็นการตอบสนองที่เกิดขึ้นโดยอัตโนมัตินอกอำนาจจิตใจ (involuntary)',
    answer: true,
    why: 'สไลด์ 156',
    hints: ['เคาะเข่าแล้วขาเตะเอง'],
    explanation: 'ไขสันหลังรับ–ส่งข้อมูลจากสมองเพื่อควบคุมการเคลื่อนที่ และตอบสนองแบบรีเฟล็กซ์ได้เอง',
  },
  // ---------------------------------------------------------- ak-hormones
  {
    id: 'ak-hm-01', type: 'match', topic: 'ak-hormones', source: 'สัตว์ 5.6 สไลด์ 161',
    inText: ['growth hormone, insulin', 'thyroid hormone, epinephrine, norepinephrine', 'สเตียรอยด์ (steroid) — โครงสร้างหลักคอเลสเตอรอล androgens', 'prostaglandins'],
    prompt: 'จับคู่ประเภทฮอร์โมน (ตามโครงสร้างเคมี) กับตัวอย่าง',
    pairs: [
      { left: 'Polypeptide hormone', right: 'growth hormone, insulin' },
      { left: 'Amine hormone', right: 'thyroid hormone, epinephrine, norepinephrine' },
      { left: 'Steroid hormone', right: 'androgens (โครงสร้างหลักคอเลสเตอรอล)' },
      { left: 'Fatty acid hormone', right: 'prostaglandins' },
    ],
    hints: ['amine = มีหมู่ NH₂ จากกรดอะมิโน'],
    explanation: 'ฮอร์โมนแบ่งตามโครงสร้างทางเคมีเป็น 4 ชนิด',
  },
  {
    id: 'ak-hm-02', type: 'label', topic: 'ak-hormones', source: 'สัตว์ 5.6 สไลด์ 163–164',
    inText: 'ไทรอยด์ T3, T4 (metabolism) · calcitonin (ลด Ca²⁺)',
    prompt: 'แตะต่อมที่หลั่ง calcitonin (ลดแคลเซียมในเลือด)',
    diagram: 'glands', target: 'thyroid',
    hints: ['ต่อมเดียวกับที่สร้าง T3, T4'],
    explanation: 'ไทรอยด์: T3/T4 (amine) และ calcitonin (peptide) · พาราไทรอยด์: PTH (เพิ่มแคลเซียม)',
  },
  {
    id: 'ak-hm-03', type: 'label', topic: 'ak-hormones', source: 'สัตว์ 5.6 สไลด์ 164',
    inText: 'melatonin (จังหวะชีวภาพ)',
    prompt: 'แตะต่อมที่หลั่ง melatonin เกี่ยวกับจังหวะชีวภาพ',
    diagram: 'glands', target: 'pineal',
    hints: ['อยู่ในสมอง ควบคุมโดยวงจรสว่าง/มืด'],
    explanation: 'pineal gland — melatonin (amine)',
  },
  {
    id: 'ak-hm-04', type: 'match', topic: 'ak-hormones', source: 'สัตว์ 5.6 สไลด์ 163–164',
    inText: ['ADH → ไตเก็บน้ำ', 'oxytocin → มดลูกและต่อมน้ำนมหดตัว', 'insulin (ลดกลูโคส)', 'glucagon (เพิ่มกลูโคส)', 'mineralocorticoids (ดูดกลับ Na⁺ ขับ K⁺ ที่ไต)', 'thymosin (T lymphocyte)'],
    prompt: 'จับคู่ฮอร์โมนกับหน้าที่ (Table 45.1)',
    pairs: [
      { left: 'ADH', right: 'เพิ่มการเก็บน้ำกลับที่ไต' },
      { left: 'oxytocin', right: 'กระตุ้นการหดตัวของมดลูกและเซลล์ต่อมน้ำนม' },
      { left: 'insulin', right: 'ลดระดับกลูโคสในเลือด' },
      { left: 'glucagon', right: 'เพิ่มระดับกลูโคสในเลือด' },
      { left: 'mineralocorticoids', right: 'เพิ่มการดูดกลับ Na⁺ และขับ K⁺ ที่ไต' },
      { left: 'thymosin', right: 'กระตุ้น T lymphocyte' },
    ],
    hints: ['ADH = antidiuretic = ต้านการขับปัสสาวะ'],
    explanation: 'ดูตาราง Major Vertebrate Endocrine Glands ในสไลด์ 163–164',
  },
  {
    id: 'ak-hm-05', type: 'mcq', topic: 'ak-hormones', source: 'สัตว์ 5.6 สไลด์ 170',
    inText: 'ฮอร์โมนสร้างจากเซลล์ประสาทของไฮโปทาลามัสที่ยื่น axon เข้ามา',
    prompt: 'ฮอร์โมนที่หลั่งจากต่อมใต้สมองส่วนหลัง (posterior pituitary) สร้างมาจากที่ใด',
    options: [
      { text: 'เซลล์ประสาทของไฮโปทาลามัส ซึ่งยื่น axon เข้ามาในต่อมใต้สมองส่วนหลัง', correct: true, why: 'สไลด์ 170' },
      { text: 'ต่อมใต้สมองส่วนหน้า', why: 'ส่วนหน้าสร้างฮอร์โมนของตัวเอง (GH, PRL, FSH, LH, TSH, ACTH)' },
      { text: 'ต่อมไทรอยด์', why: 'ไม่เกี่ยว' },
      { text: 'ต่อมหมวกไต', why: 'ไม่เกี่ยว' },
    ],
    hints: ['ADH และ oxytocin'],
    explanation: 'ส่วนหน้าถูกควบคุมโดย releasing/inhibiting hormones จากไฮโปทาลามัส ผ่าน portal vessel',
  },
  // ---------------------------------------------------------- ak-regulation
  {
    id: 'ak-rg-01', type: 'mcq', topic: 'ak-regulation', source: 'สัตว์ 5.6 สไลด์ 167',
    inText: 'insulin ลด · glucagon เพิ่ม = antagonistic hormones',
    prompt: 'insulin และ glucagon ถูกเรียกว่าเป็น antagonistic hormones เพราะอะไร',
    options: [
      { text: 'ทำงานตรงข้ามกัน: insulin ลดกลูโคสในเลือด glucagon เพิ่มกลูโคสในเลือด', correct: true, why: 'สไลด์ 167' },
      { text: 'สร้างจากต่อมต่างกัน', why: 'ทั้งสองสร้างจากตับอ่อน' },
      { text: 'ทั้งสองลดกลูโคสในเลือด', why: 'glucagon เพิ่มกลูโคส' },
      { text: 'ยับยั้งการหลั่งของกันและกันเสมอ', why: 'ไม่ใช่ความหมายในสไลด์' },
    ],
    hints: ['antagonist = ฝ่ายตรงข้าม'],
    explanation: 'กลูโคสสูง → insulin → เซลล์รับกลูโคส ตับสร้าง glycogen · กลูโคสต่ำ → glucagon → ตับสลาย glycogen (ปกติ ~90 mg/100 mL)',
  },
  {
    id: 'ak-rg-02', type: 'mcq', topic: 'ak-regulation', source: 'สัตว์ 5.6 สไลด์ 168',
    inText: 'PTH (พาราไทรอยด์) เพิ่ม — กระตุ้น osteoclast ยับยั้ง osteoblast เก็บ Ca²⁺ ที่ไต ดูดซึมที่ลำไส้เล็ก',
    prompt: 'ข้อใดเป็นผลของฮอร์โมน PTH',
    options: [
      { text: 'กระตุ้น osteoclast ยับยั้ง osteoblast เพิ่มการเก็บแคลเซียมที่ไตและการดูดซึมที่ลำไส้เล็ก', correct: true, why: 'PTH เพิ่มแคลเซียมในเลือด' },
      { text: 'ยับยั้ง osteoclast กระตุ้น osteoblast', why: 'นี่คือ calcitonin' },
      { text: 'ลดระดับแคลเซียมในเลือด', why: 'PTH เพิ่มแคลเซียม' },
      { text: 'สร้างจากต่อมไทรอยด์', why: 'PTH มาจากต่อมพาราไทรอยด์' },
    ],
    hints: ['PTH ต้องการ "เพิ่ม" แคลเซียมในเลือด → ต้องสลายกระดูก'],
    explanation: 'PTH (parathyroid): เพิ่ม Ca²⁺ · calcitonin (thyroid): ลด Ca²⁺ · ปกติ ~10 mg/100 mL',
  },
  {
    id: 'ak-rg-03', type: 'order', topic: 'ak-regulation', source: 'สัตว์ 5.6 สไลด์ 136, 169',
    inText: ['osmoreceptor ในไฮโปทาลามัส', 'ต่อมใต้สมองส่วนหลังปล่อย ADH', 'collecting duct ดูดน้ำกลับมากขึ้น', '~300 mOsm/L'],
    prompt: 'เรียงการควบคุม osmolarity ของเลือดเมื่อเหงื่อออกมาก',
    steps: ['osmolarity ของเลือดเพิ่มขึ้น', 'osmoreceptor ในไฮโปทาลามัสตรวจพบ', 'ต่อมใต้สมองส่วนหลังปล่อย ADH (และเกิดความกระหาย)', 'collecting duct ดูดน้ำกลับมากขึ้น', 'osmolarity กลับสู่ปกติ (~300 mOsm/L)'],
    hints: ['ADH ทำงานที่ collecting duct'],
    explanation: 'negative feedback: ADH ทำให้เก็บน้ำกลับ ลด osmolarity',
  },
  {
    id: 'ak-rg-04', type: 'mcq', topic: 'ak-regulation', source: 'สัตว์ 5.6 สไลด์ 173–174',
    inText: ['หนาว → หลอดเลือดที่ผิวหนังหดตัว กล้ามเนื้อสั่น', 'ไทรอยด์หลั่ง thyroxine เพิ่ม metabolism'],
    prompt: 'เมื่ออากาศหนาว ร่างกายตอบสนองอย่างไร',
    options: [
      { text: 'หลอดเลือดที่ผิวหนังหดตัว กล้ามเนื้อสั่น และไทรอยด์หลั่ง thyroxine เพิ่ม metabolism', correct: true, why: 'สไลด์ 173–174' },
      { text: 'หลอดเลือดที่ผิวหนังขยาย และต่อมเหงื่อทำงาน', why: 'นี่คือตอนร้อน' },
      { text: 'ลดการหลั่ง TSH', why: 'หนาว → TRH → TSH → thyroxine เพิ่มขึ้น' },
      { text: 'หยุดการทำงานของไฮโปทาลามัส', why: 'ไฮโปทาลามัสเป็นศูนย์ควบคุม' },
    ],
    hints: ['ต้องการ "เก็บ" ความร้อนและ "สร้าง" ความร้อนเพิ่ม'],
    explanation: 'อุณหภูมิปกติ 35.6–37.8 °C · ไฮโปทาลามัสมีทั้งศูนย์ระบายความร้อนและศูนย์เพิ่มความร้อน',
  },
  {
    id: 'ak-rg-05', type: 'sort', topic: 'ak-regulation', source: 'สัตว์ 5.6 สไลด์ 172',
    inText: ['ระยะสั้น — เส้นประสาท → adrenal medulla', 'glycogen → กลูโคส ความดันและการหายใจเพิ่ม', 'mineralocorticoids (เก็บ Na⁺ น้ำ)', 'glucocorticoids (โปรตีน/ไขมัน → กลูโคส ภูมิคุ้มกันถูกกด)'],
    prompt: 'จัดผลของฮอร์โมนในภาวะเครียด',
    bins: [
      { id: 'short', label: 'ระยะสั้น (epinephrine, norepinephrine จาก adrenal medulla)' },
      { id: 'long', label: 'ระยะยาว (ACTH → adrenal cortex)' },
    ],
    items: [
      { text: 'สลาย glycogen เป็นกลูโคส', bin: 'short' },
      { text: 'ความดันเลือดและอัตราการหายใจเพิ่ม', bin: 'short' },
      { text: 'เก็บ Na⁺ และน้ำที่ไต (mineralocorticoids)', bin: 'long' },
      { text: 'สลายโปรตีนและไขมันเป็นกลูโคส ระบบภูมิคุ้มกันอาจถูกกด (glucocorticoids)', bin: 'long' },
    ],
    hints: ['ระยะสั้นสั่งผ่านเส้นประสาทตรงไป adrenal medulla'],
    explanation: 'ระยะยาว: ไฮโปทาลามัส → releasing hormone → ต่อมใต้สมองส่วนหน้า ACTH → adrenal cortex',
  },
];
