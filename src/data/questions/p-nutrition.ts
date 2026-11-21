// =====================================================================
// Practice questions — พืช 5.3: plant nutrition (essential elements).
// Source deck: Unit_5_3_nutrition (ผศ.ดร.อัญชลี ใจดี).
// Editing rules: see the top of p-structure.ts.
//
// NOTE on sulfur: the slide calls S a "mobile element". Per the user's
// instruction the site keeps the slide's wording and adds a note that S
// moves easily in soil, roots and xylem but not easily through the phloem.
// =====================================================================
import type { Question } from '../types';

export const pNutrition: Question[] = [
  // ---------------------------------------------------------- pn-essential
  {
    id: 'pn-ess-01', type: 'mcq', topic: 'pn-essential', source: 'พืช 5.3 สไลด์ 4',
    prompt: '"ธาตุที่จำเป็น" ของพืช หมายถึงอะไร',
    options: [
      { text: 'ธาตุที่เมื่อไม่ได้รับ พืชจะแสดงอาการขาดธาตุและไม่สามารถดำรงชีวิตจนครบวงชีพได้', correct: true, why: 'นิยามตามสไลด์ 4' },
      { text: 'ธาตุทุกชนิดที่พบในเนื้อเยื่อพืช', why: 'พบในพืช ~60 ธาตุ แต่จำเป็นเพียง 17 ธาตุ' },
      { text: 'ธาตุที่ทำให้พืชเจริญเติบโตดีขึ้นในพืชบางชนิด', why: 'นี่คือธาตุเสริมประโยชน์ (beneficial elements)' },
      { text: 'ธาตุที่พืชต้องการในปริมาณมากเท่านั้น', why: 'ธาตุที่ต้องการน้อย (micronutrient) ก็จำเป็นเช่นกัน' },
    ],
    hints: ['คำสำคัญคือ "ครบวงชีพ"'],
    explanation: 'ธรรมชาติมี 92 ธาตุ → พบในพืช ~60 ธาตุ → จำเป็นจริง 17 ธาตุ',
  },
  {
    id: 'pn-ess-02', type: 'sort', topic: 'pn-essential', source: 'พืช 5.3 สไลด์ 5, 21; แบบฝึกหัดสไลด์ 32',
    prompt: 'จัดกลุ่มธาตุอาหารของพืช',
    bins: [
      { id: 'macro', label: 'ธาตุที่จำเป็นมาก (macronutrient)' },
      { id: 'micro', label: 'ธาตุที่จำเป็นน้อย (micronutrient)' },
      { id: 'ben', label: 'ธาตุเสริมประโยชน์ (beneficial)' },
    ],
    items: [
      { text: 'C', bin: 'macro' }, { text: 'H', bin: 'macro' }, { text: 'O', bin: 'macro' }, { text: 'N', bin: 'macro' },
      { text: 'P', bin: 'macro' }, { text: 'K', bin: 'macro' }, { text: 'Ca', bin: 'macro' }, { text: 'Mg', bin: 'macro' }, { text: 'S', bin: 'macro' },
      { text: 'Fe', bin: 'micro' }, { text: 'B', bin: 'micro' }, { text: 'Mn', bin: 'micro' }, { text: 'Cu', bin: 'micro' },
      { text: 'Zn', bin: 'micro' }, { text: 'Mo', bin: 'micro' }, { text: 'Cl', bin: 'micro' }, { text: 'Ni', bin: 'micro' },
      { text: 'Na', bin: 'ben' }, { text: 'Si', bin: 'ben' }, { text: 'Co', bin: 'ben' }, { text: 'Se', bin: 'ben' }, { text: 'Al', bin: 'ben' },
    ],
    hints: ['macro มี 9 ธาตุ: C H O + N P K Ca Mg S', 'beneficial: Na Si Co Se Al'],
    explanation: 'macronutrient 9 ธาตุ (C, H, O, N, P, K, Ca, Mg, S) · micronutrient 8 ธาตุ (Fe, B, Mn, Cu, Zn, Mo, Cl, Ni) · beneficial: Na, Si, Co, Se, Al',
  },
  {
    id: 'pn-ess-03', type: 'mcq', topic: 'pn-essential', source: 'พืช 5.3 สไลด์ 5; แบบฝึกหัดสไลด์ 32 ข้อ 4–5',
    prompt: 'ธาตุที่จำเป็นของพืช 17 ธาตุ แบ่งเป็น macronutrient และ micronutrient อย่างละกี่ธาตุ',
    options: [
      { text: 'macronutrient 9 ธาตุ, micronutrient 8 ธาตุ', correct: true, why: '9 + 8 = 17' },
      { text: 'macronutrient 6 ธาตุ, micronutrient 11 ธาตุ', why: 'ลืมนับ C, H, O ซึ่งเป็น macronutrient ด้วย' },
      { text: 'macronutrient 8 ธาตุ, micronutrient 9 ธาตุ', why: 'สลับกัน' },
      { text: 'macronutrient 12 ธาตุ, micronutrient 5 ธาตุ', why: 'ไม่ตรงกับสไลด์' },
    ],
    hints: ['อย่าลืม C, H, O'],
    explanation: 'macro: C H O N P K Ca Mg S · micro: Fe B Mn Cu Zn Mo Cl Ni',
  },
  {
    id: 'pn-ess-04', type: 'tf', topic: 'pn-essential', source: 'พืช 5.3 สไลด์ 6',
    statement: 'ในมวลแห้ง (dry matter) ของพืช ธาตุที่พบมากที่สุดคือ C และ O (อย่างละประมาณ 40–45%)',
    answer: true,
    why: 'สไลด์ 6: พืชเป็นน้ำ ~90% มวลแห้ง ~10% ประกอบด้วย C 40–45%, O 40–45%, H 6%',
    hints: ['C และ O มาจาก CO₂ ที่ใช้สังเคราะห์ด้วยแสง'],
    explanation: 'น้ำหนักพืชส่วนใหญ่คือน้ำ ส่วนมวลแห้งส่วนใหญ่คือ C, O, H',
  },
  // ---------------------------------------------------------- pn-sources
  {
    id: 'pn-src-01', type: 'mcq', topic: 'pn-sources', source: 'พืช 5.3 สไลด์ 8',
    prompt: 'ช่วง pH ของดินที่เหมาะสมต่อการละลายของธาตุที่จำเป็นมากที่สุดคือข้อใด',
    options: [
      { text: 'กรดอ่อน pH 5.5–6.5', correct: true, why: 'ตามสไลด์ 8' },
      { text: 'กรดแก่ pH 3–4', why: 'เป็นกรดเกินไป' },
      { text: 'กลาง pH 7 พอดีเท่านั้น', why: 'สไลด์ระบุช่วงกรดอ่อน' },
      { text: 'เบส pH 8–9', why: 'ที่ pH สูง micronutrient หลายตัว (เช่น Mn, Fe) ละลายได้น้อย' },
    ],
    hints: ['"กรดอ่อน"'],
    explanation: 'pH 5.5–6.5 เหมาะต่อการละลายของธาตุที่จำเป็น',
  },
  {
    id: 'pn-src-02', type: 'sort', topic: 'pn-sources', source: 'พืช 5.3 สไลด์ 8',
    prompt: 'ไอออนต่อไปนี้ "เกาะบนผิวอนุภาคดิน" หรือ "อยู่ในสารละลายในดิน"',
    bins: [{ id: 'on', label: 'ประจุบวก — เกาะผิวดินที่มีประจุลบ' }, { id: 'sol', label: 'ประจุลบ — อยู่ในสารละลายดิน' }],
    items: [
      { text: 'NH₄⁺', bin: 'on' }, { text: 'K⁺', bin: 'on' }, { text: 'Ca²⁺', bin: 'on' },
      { text: 'NO₃⁻', bin: 'sol' }, { text: 'H₂PO₄⁻', bin: 'sol' }, { text: 'SO₄²⁻', bin: 'sol' }, { text: 'Cl⁻', bin: 'sol' }, { text: 'HCO₃⁻', bin: 'sol' },
    ],
    hints: ['ผิวอนุภาคดินมีประจุลบ → ดูดประจุตรงข้าม'],
    explanation: 'ประจุบวกเกาะผิวดินที่มีประจุลบ ประจุลบอยู่ในสารละลายในดิน แล้วเข้าสู่รากผ่านโปรตีนลำเลียงที่เยื่อหุ้มเซลล์ขนราก',
  },
  {
    id: 'pn-src-03', type: 'mcq', topic: 'pn-sources', source: 'พืช 5.3 สไลด์ 7, 9',
    prompt: 'พืชที่ปลูกในดินผสมเจริญเติบโตดีกว่า (ใบเขียว) พืชที่ปลูกในทราย (ใบเหลือง) เพราะอะไร',
    options: [
      { text: 'ดินผสมมี nutrient cycling และ holding capacity สูงกว่าทราย', correct: true, why: 'ตามสไลด์ 9' },
      { text: 'ทรายมี CO₂ น้อยกว่า', why: 'CO₂ พืชได้จากอากาศทางปากใบ ไม่ใช่จากดิน' },
      { text: 'ทรายมีน้ำมากเกินไป', why: 'ทรายระบายน้ำเร็ว อุ้มน้ำและธาตุอาหารได้ไม่ดี' },
      { text: 'พืชในดินผสมได้รับแสงมากกว่า', why: 'การทดลองนี้เปลี่ยนแค่วัสดุปลูก' },
    ],
    hints: ['ดินผสม "อุ้ม" ธาตุอาหารได้ดีกว่า'],
    explanation: 'ธาตุจากอากาศ: แก๊ส (CO₂, SO₂) ทางปากใบและผิวใบ · ธาตุจากดิน: ธาตุที่ละลายน้ำได้ ทางราก',
  },
  // ---------------------------------------------------------- pn-roles
  {
    id: 'pn-role-01', type: 'match', topic: 'pn-roles', source: 'พืช 5.3 สไลด์ 11–19',
    prompt: 'จับคู่ธาตุกับบทบาท',
    pairs: [
      { left: 'N', right: 'องค์ประกอบของโปรตีน เอนไซม์ คลอโรฟิลล์ ฮอร์โมน กรดนิวคลีอิก' },
      { left: 'P', right: 'องค์ประกอบของยีน เยื่อหุ้มเซลล์ (phospholipid) ATP' },
      { left: 'K', right: 'ควบคุมสมดุลประจุ ค่าออสโมติก และการลำเลียงในพืช' },
      { left: 'Ca', right: 'องค์ประกอบของผนังเซลล์ สำคัญต่อการแบ่งเซลล์' },
      { left: 'Mg', right: 'องค์ประกอบของคลอโรฟิลล์ กระตุ้นเอนไซม์' },
      { left: 'S', right: 'องค์ประกอบของกรดอะมิโนบางชนิด (cysteine, methionine)' },
    ],
    hints: ['ธาตุกลางวงแหวนคลอโรฟิลล์คือ Mg (ส่วน N ก็อยู่ในวงแหวน)'],
    explanation: 'จำคู่หลัก: N-โปรตีน, P-ATP/DNA, K-ออสโมติก, Ca-ผนังเซลล์, Mg-คลอโรฟิลล์, S-cysteine/methionine',
  },
  {
    id: 'pn-role-02', type: 'sort', topic: 'pn-roles', source: 'พืช 5.3 สไลด์ 11–18',
    prompt: 'ตามสไลด์ ธาตุใดเคลื่อนย้ายได้ (mobile) และธาตุใดเคลื่อนย้ายไม่ได้ (immobile)',
    bins: [{ id: 'm', label: 'mobile — อาการเกิดที่ใบแก่' }, { id: 'i', label: 'immobile — อาการเกิดที่ใบอ่อน/ยอด' }],
    items: [
      { text: 'N', bin: 'm' }, { text: 'P', bin: 'm' }, { text: 'K', bin: 'm' }, { text: 'Mg', bin: 'm' }, { text: 'S (ตามสไลด์)', bin: 'm' },
      { text: 'Ca', bin: 'i' }, { text: 'Fe', bin: 'i' },
    ],
    hints: ['ธาตุ mobile ถูกย้ายจากใบแก่ไปใบอ่อนได้ ใบแก่จึงแสดงอาการก่อน'],
    explanation: 'mobile: N, P, K, Mg และ S (ตามสไลด์ — S เคลื่อนในดิน ราก และไซเลมได้ดี แต่ย้ายผ่านโฟลเอ็มได้ไม่ง่าย) · immobile: Ca, Fe',
  },
  {
    id: 'pn-role-03', type: 'mcq', topic: 'pn-roles', source: 'พืช 5.3 สไลด์ 14; แบบฝึกหัดสไลด์ 35',
    prompt: 'พืชที่ได้รับธาตุอาหารไม่เพียงพอ มีอาการใบเหลือง "เกิดที่ใบอ่อน" อาการดังกล่าวน่าจะเกิดจากการขาดธาตุใด',
    options: [
      { text: 'micronutrient ชนิด Fe', correct: true, why: 'Fe เป็น immobile และเกี่ยวกับการสร้างคลอโรฟิลล์ → ใบอ่อนเหลืองก่อนใบแก่' },
      { text: 'macronutrient ชนิด Mg', why: 'Mg เป็น mobile อาการจึงเกิดที่ใบแก่ (เหลืองระหว่างเส้นใบ)' },
      { text: 'macronutrient ชนิด Ca', why: 'Ca เป็น immobile ก็จริง แต่อาการคือปลายยอดแห้งตาย หงิกงอ ไม่ใช่ใบเหลือง' },
      { text: 'micronutrient ชนิด Ca', why: 'Ca เป็น macronutrient ไม่ใช่ micronutrient' },
    ],
    hints: ['ใบอ่อนแสดงอาการก่อน = ธาตุ immobile', 'ในบรรดา immobile ตัวไหนทำให้ "ใบเหลือง"?'],
    explanation: 'Fe: immobile, เกี่ยวกับการสร้างคลอโรฟิลล์ → ใบเหลืองที่ใบอ่อนก่อน · Ca: immobile → ปลายยอดแห้งตาย หงิกงอ',
  },
  {
    id: 'pn-role-04', type: 'mcq', topic: 'pn-roles', source: 'พืช 5.3 สไลด์ 13; แบบฝึกหัดสไลด์ 34',
    prompt: 'พืชที่ต้นหักล้มง่าย อาจขาดธาตุใด เหตุผลคืออะไร',
    options: [
      { text: 'K เพราะมีบทบาทควบคุมแรงดันเต่งของเซลล์ (ค่าออสโมติก)', correct: true, why: 'สไลด์ 13: ขาด K → ต้นหักล้มง่าย, K ควบคุมค่าออสโมติก' },
      { text: 'Ca เพราะมีบทบาทควบคุมการแบ่งเซลล์', why: 'ขาด Ca → ปลายยอดแห้งตาย หงิกงอ' },
      { text: 'Mg เพราะเป็นองค์ประกอบของคลอโรฟิลล์', why: 'ขาด Mg → ใบแก่เหลืองระหว่างเส้นใบ' },
      { text: 'Mn เพราะเกี่ยวข้องกับปฏิกิริยาการสลายน้ำใน photosynthesis', why: 'ไม่ใช่อาการที่สไลด์กล่าวถึง' },
    ],
    hints: ['อาการ "ต้นหักล้มง่าย" อยู่ในสไลด์ของธาตุเดียว'],
    explanation: 'ขาด K: ใบแก่เหลืองและแห้งตายระหว่างเส้นใบ + ต้นหักล้มง่าย',
  },
  {
    id: 'pn-role-05', type: 'mcq', topic: 'pn-roles', source: 'พืช 5.3 สไลด์ 12; แบบฝึกหัดสไลด์ 33',
    prompt: 'พืชต้องการ phosphorus เพื่อสร้างสารอะไร และหากขาดธาตุนี้จะมีอาการอย่างไร',
    options: [
      { text: 'adenosine triphosphate / ต้นแคระแกร็น', truth: true, why: 'ถูก แต่ยังมีอีกข้อที่ถูก' },
      { text: 'phospholipid / ยอดอ่อนแห้งตาย', truth: false, why: 'phospholipid ถูก แต่ "ยอดอ่อนแห้งตาย" เป็นอาการขาด Ca' },
      { text: 'ดีเอ็นเอ / ใบแก่มีสีเขียวเข้ม', truth: true, why: 'ถูก แต่ยังมีอีกข้อที่ถูก' },
      { combo: [0, 2], correct: true, why: 'P อยู่ใน ATP และ DNA · ขาด P: ต้นแคระแกร็น ใบแก่เขียวเข้ม (รุนแรงจะเหลืองและแห้งตาย)' },
    ],
    hints: ['P เป็น mobile → อาการที่ใบแก่', 'ตรวจทีละข้อว่า "สาร" และ "อาการ" ถูกทั้งคู่ไหม'],
    explanation: 'P: องค์ประกอบของยีน เยื่อหุ้มเซลล์ เอนไซม์ ATP · ขาด P: แคระแกร็น ใบแก่เขียวเข้ม',
  },
  {
    id: 'pn-role-06', type: 'mcq', topic: 'pn-roles', source: 'พืช 5.3 สไลด์ 16; แบบฝึกหัดสไลด์ 33',
    prompt: 'พืชต้องการธาตุใดสำหรับสร้างกรดอะมิโนบางชนิด (cysteine และ methionine)',
    options: [
      { text: 'S', correct: true, why: 'cysteine และ methionine มีกำมะถันในโครงสร้าง' },
      { text: 'N', why: 'กรดอะมิโนทุกตัวมี N แต่โจทย์ถามธาตุเฉพาะของสองตัวนี้' },
      { text: 'K', why: 'K เกี่ยวกับค่าออสโมติก' },
      { text: 'Fe', why: 'Fe เกี่ยวกับปฏิกิริยารีดอกซ์และการสร้างคลอโรฟิลล์' },
    ],
    hints: ['ดูสูตรในสไลด์: มีอะตอม "S" ใน HS– และ –S–CH₃'],
    explanation: 'S: องค์ประกอบของกรดอะมิโนบางชนิด สำคัญในปฏิกิริยารีดอกซ์ · ขาด S: ต้นแคระแกร็น ใบเหลืองสม่ำเสมอทั้งใบ',
  },
  {
    id: 'pn-role-07', type: 'tf', topic: 'pn-roles', source: 'พืช 5.3 สไลด์ 14',
    statement: 'Ca เป็นธาตุที่เคลื่อนย้ายได้ (mobile) จึงแสดงอาการขาดที่ใบแก่ก่อน',
    answer: false,
    why: 'Ca เป็น immobile element อาการจึงเกิดที่ใบอ่อนที่เพิ่งเกิดใหม่ (ปลายยอดแห้งตาย หงิกงอ)',
    hints: ['Ca ถูกล็อกไว้ในผนังเซลล์'],
    explanation: 'immobile = ย้ายจากใบแก่ไปใบใหม่ไม่ได้ → ใบใหม่ขาดก่อน',
  },
  {
    id: 'pn-role-08', type: 'mcq', topic: 'pn-roles', source: 'แบบฝึกหัด 5.3 สไลด์ 34',
    prompt: 'หากดินมีค่า pH มากกว่า 7.5 พืชอาจขาดธาตุใด (ดูจากแผนภาพการละลายของธาตุตาม pH)',
    options: [
      { text: 'micronutrient ชนิด Mn', correct: true, why: 'ในแผนภาพ แถบของ Mn (และ Fe, B, Cu, Zn) แคบลงมากเมื่อดินเป็นเบส = ละลายได้น้อย' },
      { text: 'macronutrient ชนิด K', why: 'K ยังละลายได้ดีที่ pH สูง' },
      { text: 'macronutrient ชนิด Ca', why: 'Ca ละลายได้ดีในดินเบส' },
      { text: 'macronutrient ชนิด Mg', why: 'Mg ยังละลายได้ดีที่ pH สูง' },
    ],
    hints: ['ธาตุที่ละลายดีที่สุดในช่วง "กรดอ่อน" จะละลายได้น้อยเมื่อดินเป็นเบส', 'micronutrient โลหะหลายตัวไวต่อ pH สูง'],
    explanation: 'แถบขาวกว้าง = ละลายได้ดี · micronutrient อย่าง Fe, Mn ละลายได้น้อยในดินเบส',
  },
  // ---------------------------------------------------------- pn-beneficial
  {
    id: 'pn-ben-01', type: 'mcq', topic: 'pn-beneficial', source: 'แบบฝึกหัด 5.3 สไลด์ 35',
    prompt: 'พืช "บางชนิด" ต้องการ Na เมื่อขาด Na แล้วเจริญเติบโตช้าลง แต่ยังออกดอกและติดผลได้ Na จัดเป็นธาตุที่จำเป็นหรือไม่ เพราะเหตุใด',
    options: [
      { text: 'ไม่ใช่ เพราะแม้ขาดธาตุนั้น พืชยังคงเจริญจนครบวงชีวิตได้', correct: true, why: 'ตามนิยาม ธาตุจำเป็นต้องทำให้พืช "ครบวงชีพไม่ได้" ถ้าขาด' },
      { text: 'ใช่ เพราะการขาดธาตุนั้นมีผลลดการเจริญเติบโต', why: 'แค่โตช้าลงยังไม่พอจะเรียกว่าธาตุจำเป็น' },
      { text: 'ใช่ เพราะ Na เป็นธาตุที่เร่งการเจริญเติบโตของพืชบางชนิด', why: 'นั่นคือนิยามของ "ธาตุเสริมประโยชน์" ไม่ใช่ธาตุจำเป็น' },
      { text: 'ไม่ใช่ เพราะ Na มีผลลดการเจริญเติบโตเฉพาะในพืชเพียงบางชนิด', why: 'เหตุผลไม่ตรงนิยาม — ต้องดูว่าครบวงชีวิตได้หรือไม่' },
    ],
    hints: ['ย้อนดูนิยามธาตุที่จำเป็น: "…ไม่สามารถดำรงชีวิตจนครบวงชีพได้"'],
    explanation: 'Na เป็นธาตุเสริมประโยชน์ (เช่น ช่วยการเติบโตของ table beet)',
  },
  {
    id: 'pn-ben-02', type: 'match', topic: 'pn-beneficial', source: 'พืช 5.3 สไลด์ 21–23, 27',
    prompt: 'จับคู่ธาตุเสริมประโยชน์/การประยุกต์กับคำอธิบาย',
    pairs: [
      { left: 'Si', right: 'ข้าวสะสมในผนังเซลล์ เพิ่มความแข็งแรง ต้านทานโรคและแมลง' },
      { left: 'Co', right: 'ช่วยการตรึง N₂ ของพืชตระกูลถั่วในดินที่ขาด N' },
      { left: 'Se', right: 'ปลูกผักคะน้าเสริม Se เพิ่มมูลค่าผลผลิต' },
      { left: 'Al', right: 'ช่วยการเติบโตของชาในดิน pH ต่ำ' },
      { left: 'แกลบ', right: 'สกัดซิลิกอนไปผลิตนาโนซิลิกอน' },
    ],
    hints: ['Si เป็นธาตุจำเป็นสำหรับพืชวงศ์หญ้า (Gramineae)'],
    explanation: 'ธาตุเสริมประโยชน์ = จำเป็นเฉพาะพืชบางชนิด แต่ช่วยให้พืชอื่นโตดีขึ้นหรือทนความเครียดได้มากขึ้น',
  },
  {
    id: 'pn-ben-03', type: 'tf', topic: 'pn-beneficial', source: 'พืช 5.3 สไลด์ 21',
    statement: 'ซิลิกอน (Si) จัดเป็นธาตุเสริมประโยชน์ แต่เป็นธาตุที่จำเป็นสำหรับพืชวงศ์หญ้า (Gramineae)',
    answer: true,
    why: 'ตาราง Beneficial Elements (Yoneyama 2010) ในสไลด์ 21',
    hints: ['ข้าวเป็นพืชวงศ์หญ้า'],
    explanation: 'จึงเป็นที่มาของการประยุกต์ Si ในข้าวและแกลบ',
  },
];
