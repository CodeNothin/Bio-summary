// =====================================================================
// Practice questions — สัตว์ 5.7: excretion — and 5.8 applications.
// Source deck: Gen_bio_107_Unit_5 slides 126–137 + extra deck (28 ต.ค.).
// Editing rules: see the top of p-structure.ts.
//
// Decisions from the user:
//  - Kidney step 1 is written "infiltration (filtration)" (TODO 6).
//  - Amphibians count for BOTH ammonia and urea (TODO 9); no question
//    makes the student choose only one for "amphibian".
//  - Calcium: the slides say 2 hormones (PTH, calcitonin) and the extra deck
//    says 3 (+ calcitriol). The site shows both; no question asks "how many"
//    (TODO 10 left open).
//  - OGTT table: shown on the page, but no numeric classification questions
//    (TODO 11: skipped).
// =====================================================================
import type { Question } from '../types';

export const aExcretion: Question[] = [
  {
    id: 'ae-ws-01', type: 'match', topic: 'ae-wastes', source: 'สัตว์ 5.7 สไลด์ 127',
    prompt: 'จับคู่ของเสียไนโตรเจนกับลักษณะ',
    pairs: [
      { left: 'แอมโมเนีย (ammonia)', right: 'เกิดเป็นตัวแรก ละลายน้ำดี พิษสูงมาก' },
      { left: 'ยูเรีย (urea)', right: 'สร้างที่ตับจากแอมโมเนีย + CO₂ พิษต่ำกว่า ~100,000 เท่า เก็บที่ความเข้มข้นสูงได้' },
      { left: 'กรดยูริก (uric acid)', right: 'พิษต่ำ ละลายน้ำน้อยมาก ขับออกเป็น semisolid' },
    ],
    hints: ['ยิ่งพิษน้อย ยิ่งต้องใช้น้ำขับน้อย'],
    explanation: 'ของเสียไนโตรเจนมาจากหมู่อะมิโน (–NH₂) ของโปรตีนและกรดนิวคลีอิก',
  },
  {
    id: 'ae-ws-02', type: 'sort', topic: 'ae-wastes', source: 'สัตว์ 5.7 สไลด์ 126–127',
    prompt: 'จัดสัตว์ตามของเสียไนโตรเจนหลักที่ขับออก',
    bins: [
      { id: 'nh3', label: 'แอมโมเนีย' },
      { id: 'urea', label: 'ยูเรีย' },
      { id: 'uric', label: 'กรดยูริก' },
    ],
    items: [
      { text: 'ปลากระดูกแข็งส่วนใหญ่', bin: 'nh3' },
      { text: 'สัตว์เลี้ยงลูกด้วยนม', bin: 'urea' }, { text: 'ปลากระดูกอ่อน (ฉลาม)', bin: 'urea' },
      { text: 'นก', bin: 'uric' }, { text: 'สัตว์เลื้อยคลาน', bin: 'uric' }, { text: 'แมลง', bin: 'uric' }, { text: 'หอยทากบก', bin: 'uric' },
    ],
    hints: ['สัตว์ที่ต้องเก็บน้ำไว้มาก ๆ ใช้กรดยูริก'],
    explanation: 'สัตว์สะเทินน้ำสะเทินบกปรากฏทั้งในกลุ่มแอมโมเนียและยูเรียในสไลด์ (ตัวอ่อนในน้ำ vs ตัวเต็มวัย) จึงไม่ได้ใส่ไว้ในข้อนี้',
  },
  {
    id: 'ae-ws-03', type: 'mcq', topic: 'ae-wastes', source: 'สัตว์ 5.7 สไลด์ 127',
    prompt: 'ทำไมสัตว์น้ำจึงขับแอมโมเนียได้ทั้งที่แอมโมเนียมีพิษสูงมาก',
    options: [
      { text: 'แอมโมเนียละลายน้ำได้ดีและแพร่ผ่านเยื่อเซลล์สู่น้ำรอบตัวได้ทันที', correct: true, why: 'มีน้ำมากพอเจือจางและพาออกไป' },
      { text: 'สัตว์น้ำเปลี่ยนแอมโมเนียเป็นกรดยูริกก่อน', why: 'กรดยูริกเป็นของสัตว์ที่ต้องประหยัดน้ำ' },
      { text: 'แอมโมเนียไม่มีพิษในน้ำ', why: 'ยังมีพิษ แต่ถูกเจือจางทันที' },
      { text: 'สัตว์น้ำไม่มีไต', why: 'ไม่ใช่เหตุผล' },
    ],
    hints: ['สัตว์น้ำ "มีน้ำล้อมรอบ"'],
    explanation: 'สไลด์ 127: มักพบในสัตว์ที่อาศัยอยู่ในน้ำ เพราะแอมโมเนียแพร่ผ่านเยื่อเซลล์สู่น้ำได้ดี',
  },
  {
    id: 'ae-or-01', type: 'mcq', topic: 'ae-organs', source: 'สัตว์ 5.7 สไลด์ 128',
    prompt: 'ท่อที่นำปัสสาวะจากไตไปกระเพาะปัสสาวะคือข้อใด',
    options: [
      { text: 'ท่อไต (ureter)', correct: true, why: 'ureter: ไต → กระเพาะปัสสาวะ' },
      { text: 'ท่อปัสสาวะ (urethra)', why: 'urethra: กระเพาะปัสสาวะ → ภายนอก' },
      { text: 'ท่อรวม (collecting duct)', why: 'อยู่ภายในไต' },
      { text: 'Loop of Henle', why: 'เป็นส่วนของหน่วยไต' },
    ],
    hints: ['ureter กับ urethra สะกดคล้ายกัน — ureter มาก่อน'],
    explanation: 'เลือดมาเลี้ยงไต 20% ต่อการบีบตัวของหัวใจ 1 ครั้ง · ในเพศชาย urethra เป็นท่อเดียวกับระบบสืบพันธุ์',
  },
  {
    id: 'ae-ne-01', type: 'order', topic: 'ae-nephron', source: 'สัตว์ 5.7 สไลด์ 129',
    prompt: 'เรียงกระบวนการผลิตและกำจัดปัสสาวะ 4 ขั้น',
    steps: ['กระบวนการกรอง (infiltration / filtration)', 'การดูดกลับสาร (resorption)', 'การหลั่งสาร (secretion)', 'การขับถ่าย (excretion)'],
    hints: ['ต้องกรองออกมาก่อน จึงจะเลือกเก็บกลับได้'],
    explanation: 'ดูดกลับ (กลูโคส เกลือ กรดอะมิโน) และหลั่ง (สารพิษ ไอออนที่เกิน) ใช้ active transport',
  },
  {
    id: 'ae-ne-02', type: 'label', topic: 'ae-nephron', source: 'สัตว์ 5.7 สไลด์ 132',
    prompt: 'แตะบริเวณที่เกิดการกรอง (infiltration/filtration)',
    diagram: 'nephron', target: 'glomerulus',
    hints: ['กลุ่มหลอดเลือดฝอยที่อยู่ใน Bowman\'s capsule'],
    explanation: 'filtrate: น้ำ กลูโคส ของเสียไนโตรเจน สารโมเลกุลเล็ก — เม็ดเลือดและโปรตีนขนาดใหญ่ผ่านไม่ได้',
  },
  {
    id: 'ae-ne-03', type: 'match', topic: 'ae-nephron', source: 'สัตว์ 5.7 สไลด์ 133–135',
    prompt: 'จับคู่ส่วนของหน่วยไตกับสิ่งที่เกิดขึ้น',
    pairs: [
      { left: 'proximal convoluted tubule', right: 'ดูดกลับน้ำ กลูโคส NaCl กรดอะมิโน K⁺ HCO₃⁻ · หลั่ง NH₃ และ H⁺' },
      { left: 'descending loop of Henle', right: 'ดูดกลับน้ำเพียงอย่างเดียว' },
      { left: 'ascending loop of Henle', right: 'ดูดกลับ NaCl เพียงอย่างเดียว' },
      { left: 'distal convoluted tubule', right: 'ดูดกลับ NaCl และ HCO₃⁻ · หลั่ง H⁺ และ K⁺' },
      { left: 'collecting duct', right: 'ดูดกลับน้ำ NaCl และยูเรีย (ADH เพิ่มการดูดน้ำกลับ)' },
    ],
    hints: ['ขาลง "น้ำ" ขาขึ้น "เกลือ"'],
    explanation: 'proximal ทำงานมากที่สุด ดูดกลับสารที่มีประโยชน์เกือบทั้งหมด',
  },
  {
    id: 'ae-ne-04', type: 'label', topic: 'ae-nephron', source: 'สัตว์ 5.7 สไลด์ 134',
    prompt: 'แตะส่วนที่ดูดกลับ "NaCl เพียงอย่างเดียว"',
    diagram: 'nephron', target: 'ascending',
    hints: ['เป็นขาหนึ่งของ loop of Henle'],
    explanation: 'ascending limb ดูดกลับ NaCl ไม่ดูดน้ำ',
  },
  {
    id: 'ae-ne-05', type: 'tf', topic: 'ae-nephron', source: 'สัตว์ 5.7 สไลด์ 130',
    statement: 'ในคน 80% ของหน่วยไตเป็น cortical nephron ที่มี loop of Henle สั้น และ 20% เป็น juxtamedullary nephron ที่มี loop of Henle ยาว',
    answer: true,
    why: 'สไลด์ 130 — juxtamedullary nephron พบเฉพาะสัตว์เลี้ยงลูกด้วยนมและนก',
    hints: ['juxta-medullary = ติดกับชั้น medulla → loop ยาวลงไป'],
    explanation: 'ไตแต่ละข้างมีหน่วยไตประมาณ 1.3 ล้านหน่วย',
  },
  {
    id: 'ae-ct-01', type: 'mcq', topic: 'ae-control', source: 'สัตว์ 5.7 สไลด์ 137',
    prompt: 'เมื่อความดันหรือปริมาตรเลือดลดลง (เช่น ขาดน้ำ เสียเลือด) ระบบ RAAS ทำงานอย่างไร',
    options: [
      { text: 'JGA หลั่ง renin → angiotensin II → หลอดเลือดแดงเล็กหดตัว และ aldosterone เพิ่มการดูดกลับ Na⁺ และน้ำ', correct: true, why: 'สไลด์ 137' },
      { text: 'หัวใจหลั่ง ANF เพื่อขับ Na⁺ และน้ำออก', why: 'ANF ทำงานตรงข้าม RAAS (ลดภาระน้ำและโซเดียม)' },
      { text: 'ลดการหลั่ง aldosterone', why: 'ต้องเพิ่ม aldosterone เพื่อเก็บ Na⁺ และน้ำ' },
      { text: 'ขยายหลอดเลือดเพื่อลดความดัน', why: 'ความดันต่ำอยู่แล้ว ต้องเพิ่ม' },
    ],
    hints: ['เป้าหมาย: ดึงความดันเลือดกลับขึ้นมา'],
    explanation: 'angiotensinogen (ตับ) —renin→ angiotensin I —ACE→ angiotensin II → หลอดเลือดหดตัว + adrenal gland หลั่ง aldosterone',
  },
  {
    id: 'ae-ct-02', type: 'tf', topic: 'ae-control', source: 'สัตว์ 5.7 สไลด์ 136',
    statement: 'ADH (vasopressin) เพิ่มการดูดน้ำกลับที่ collecting duct ทำให้ปัสสาวะเข้มข้นขึ้น',
    answer: true,
    why: 'ADH = antidiuretic hormone (ต้านการขับปัสสาวะ)',
    hints: ['anti-diuretic'],
    explanation: 'หลั่งเมื่อ osmolarity ของเลือดสูงขึ้น',
  },
];

export const aApplications: Question[] = [
  {
    id: 'ax-dm-01', type: 'mcq', topic: 'ax-diabetes', source: 'สไลด์เพิ่มเติม 28 ต.ค. หน้า 1–2',
    prompt: 'เบาหวานชนิดที่ 2 (T2DM) ส่วนใหญ่เกิดจากอะไร',
    options: [
      { text: 'ภาวะดื้ออินซูลิน (insulin resistance): เซลล์กล้ามเนื้อ ไขมัน และตับไม่ตอบสนองต่ออินซูลินตามปกติ', correct: true, why: 'T2DM mainly results from insulin resistance' },
      { text: 'ตับอ่อนสร้างอินซูลินไม่ได้', why: 'นั่นคือเบาหวานชนิดที่ 1' },
      { text: 'ร่างกายสร้าง glucagon ไม่ได้', why: 'ไม่ใช่สาเหตุในสไลด์' },
      { text: 'กินน้ำตาลน้อยเกินไป', why: 'ไม่ใช่' },
    ],
    hints: ['ภาพในสไลด์: Type 1 = pancreas failure, Type 2 = cells fail to respond'],
    explanation: 'เมื่อเซลล์ดื้ออินซูลินมาก กลูโคสเข้าเซลล์ไม่ได้ → ระดับกลูโคสในเลือดสูง (hyperglycemia)',
  },
  {
    id: 'ax-dm-02', type: 'tf', topic: 'ax-diabetes', source: 'สไลด์เพิ่มเติม 28 ต.ค. หน้า 2',
    statement: 'ในภาวะดื้ออินซูลิน อินซูลินยังจับกับตัวรับได้ แต่เซลล์ไม่ตอบสนองตามปกติ กลูโคสจึงค้างอยู่ในเลือด',
    answer: true,
    why: 'ภาพ Normal Function vs Insulin Resistance: GLUT2 ไม่พากลูโคสเข้าเซลล์',
    hints: ['resistance = ดื้อ ไม่ใช่ "ไม่มี"'],
    explanation: 'ต่างจาก Type 1 ที่ไม่มีอินซูลินเลย',
  },
  {
    id: 'ax-ca-01', type: 'sort', topic: 'ax-calcium', source: 'สัตว์ 5.6 สไลด์ 168; สไลด์เพิ่มเติม หน้า 4',
    prompt: 'จัดผลต่อไปนี้ให้ตรงกับฮอร์โมน',
    bins: [{ id: 'pth', label: 'PTH (เพิ่ม Ca²⁺ ในเลือด)' }, { id: 'ct', label: 'Calcitonin (ลด Ca²⁺ ในเลือด)' }],
    items: [
      { text: 'กระตุ้น osteoclast', bin: 'pth' },
      { text: 'กระตุ้นการเก็บแคลเซียมที่ไต', bin: 'pth' },
      { text: 'กระตุ้นการดูดซึมแคลเซียมที่ลำไส้เล็ก', bin: 'pth' },
      { text: 'กระตุ้น osteoblast', bin: 'ct' },
      { text: 'ยับยั้งการดูดกลับแคลเซียมที่ไต', bin: 'ct' },
      { text: 'ลดระดับ PTH ทำให้ดูดซึมแคลเซียมที่ลำไส้ลดลง', bin: 'ct' },
    ],
    hints: ['osteoclast สลายกระดูก → ปล่อย Ca²⁺ เข้าเลือด'],
    explanation: 'PTH จากต่อมพาราไทรอยด์ · calcitonin จากต่อมไทรอยด์ (สไลด์เพิ่มเติมยังกล่าวถึง calcitriol เป็นฮอร์โมนที่ 3)',
  },
  {
    id: 'ax-ca-02', type: 'mcq', topic: 'ax-calcium', source: 'สไลด์เพิ่มเติม 28 ต.ค. หน้า 6',
    prompt: 'จากกราฟวงจรชีวิตของกระดูก (life cycle of bone) ข้อใดถูกต้อง',
    options: [
      { text: 'มวลกระดูกสูงสุดช่วงวัยผู้ใหญ่ตอนต้น (~30 ปี) แล้วลดลงตามอายุ ผู้หญิงลดเร็วขึ้นหลังหมดประจำเดือน', correct: true, why: 'ตามกราฟ Peak bone mass และ Bone loss due to menopause' },
      { text: 'มวลกระดูกเพิ่มขึ้นตลอดชีวิต', why: 'หลังจุดสูงสุดจะลดลง' },
      { text: 'ผู้ชายและผู้หญิงมีมวลกระดูกเท่ากันทุกช่วงอายุ', why: 'กราฟแสดงว่าต่างกัน' },
      { text: 'อาหารและการออกกำลังกายไม่มีผลต่อมวลกระดูก', why: 'กราฟบอกว่าทางเลือกการใช้ชีวิตช่วยให้ถึง peak bone mass และช่วยชะลอการสูญเสีย' },
    ],
    hints: ['ดูเส้นกราฟของ Male vs Female'],
    explanation: 'การสร้าง/สลายกระดูก (osteoblast/osteoclast) ถูกควบคุมโดย PTH, calcitriol, calcitonin',
  },
];
