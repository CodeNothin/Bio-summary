// =====================================================================
// Practice questions — สัตว์ 5.3: nutrition and digestion.
// Source deck: Gen_bio_107_Unit_5 slides 33–77.
// Editing rules: see the top of p-structure.ts.
//
// Decisions from the user:
//  - Essential amino acids: the slides' 8 = the ones adults CANNOT MAKE
//    (TODO 1: "8 is what we can't make, 9 is what we need").
//  - Feeding type uses the slide's term "Bulb feeder" (TODO 5).
//  - Pepsinogen → pepsin: teach BOTH HCl and pepsin itself (TODO 12).
// =====================================================================
import type { Question } from '../types';

export const aDigestion: Question[] = [
  // ---------------------------------------------------------- ad-nutrients
  {
    id: 'ad-nu-01', type: 'mcq', topic: 'ad-nutrients', source: 'สัตว์ 5.3 สไลด์ 33',
    inText: 'สร้างเองไม่ได้ ต้องได้รับจากอาหาร',
    prompt: '"สารอาหารที่จำเป็น (essential nutrients)" หมายถึงอะไร',
    options: [
      { text: 'สารอาหารที่ร่างกายสัตว์สร้างเองไม่ได้ ต้องได้รับจากอาหาร', correct: true, why: 'นิยามตามสไลด์ 33' },
      { text: 'สารอาหารที่ให้พลังงานมากที่สุด', why: 'พลังงาน (fuel) เป็นอีกเหตุผลหนึ่งของการกิน' },
      { text: 'สารอาหารที่ร่างกายต้องการปริมาณมากเท่านั้น', why: 'วิตามินต้องการปริมาณน้อยแต่ก็จำเป็น' },
      { text: 'สารอาหารที่ร่างกายสร้างได้เองจากวัตถุดิบใด ๆ', why: 'กลับกัน' },
    ],
    hints: ['ดูกล่องสีชมพูในสไลด์ 33'],
    explanation: 'เหตุผลที่ต้องกิน: (1) พลังงาน ATP (2) วัตถุดิบสร้างโมเลกุล (carbon skeleton) (3) สารอาหารที่จำเป็น',
  },
  {
    id: 'ad-nu-02', type: 'mcq', topic: 'ad-nutrients', source: 'สัตว์ 5.3 สไลด์ 34',
    inText: '8 ชนิดที่ผู้ใหญ่สร้างเองไม่ได้',
    prompt: 'ตามสไลด์ กรดอะมิโนที่ร่างกายคน (ผู้ใหญ่) "สร้างเองไม่ได้" มีกี่ชนิด',
    options: [
      { text: '8 ชนิด', correct: true, why: 'สไลด์ 34: Met, Val, Thr, Phe, Leu, Ile, Trp, Lys' },
      { text: '20 ชนิด', why: '20 คือจำนวนกรดอะมิโนทั้งหมดในโปรตีน' },
      { text: '2 ชนิด', why: 'กรดไขมันที่จำเป็นมี 2 ชนิด (คนละเรื่อง)' },
      { text: '17 ชนิด', why: '17 คือธาตุที่จำเป็นของพืช' },
    ],
    hints: ['ในตารางสไลด์ 34 มีกี่ชื่อ?'],
    explanation: 'สไลด์นับ 8 ชนิดที่ผู้ใหญ่สร้างเองไม่ได้ (หลายตำรานับ 9 ชนิดที่ร่างกาย "ต้องการ" จากอาหาร โดยรวม histidine)',
  },
  {
    id: 'ad-nu-03', type: 'mcq', topic: 'ad-nutrients', source: 'สัตว์ 5.3 สไลด์ 34',
    inText: 'ข้าวโพดขาด Lys ถั่วขาด Met → กินคู่กันได้ครบ',
    prompt: 'ทำไมการกินข้าวโพดร่วมกับถั่วจึงได้กรดอะมิโนจำเป็นครบ',
    options: [
      { text: 'ข้าวโพดขาด lysine ส่วนถั่วขาด methionine แต่ละอย่างจึงเติมส่วนที่อีกอย่างขาด', correct: true, why: 'ดูภาพสไลด์ 34' },
      { text: 'ทั้งสองมีกรดอะมิโนจำเป็นครบอยู่แล้ว', why: 'โปรตีนครบ (complete protein) คือเนื้อ ไข่ ชีส' },
      { text: 'ถั่วช่วยให้ร่างกายสร้างกรดอะมิโนจำเป็นได้เอง', why: 'ร่างกายสร้างกรดอะมิโนจำเป็นไม่ได้' },
      { text: 'ข้าวโพดมีวิตามินช่วยดูดซึม', why: 'ไม่ใช่เหตุผลในสไลด์' },
    ],
    hints: ['ดูลูกศรในภาพว่าอะไรมาจากข้าวโพด อะไรมาจากถั่ว'],
    explanation: 'Meat, eggs, cheese = complete proteins · แมวต้องการ arginine และ taurine เพิ่ม',
  },
  {
    id: 'ad-nu-04', type: 'tf', topic: 'ad-nutrients', source: 'สัตว์ 5.3 สไลด์ 35',
    inText: ['ขาดเอนไซม์สร้างพันธะคู่ที่ omega-3/omega-6', 'alpha-linolenic (ω-3)', 'linoleic (ω-6)'],
    statement: 'สัตว์เลี้ยงลูกด้วยนมขาดเอนไซม์สร้างพันธะคู่ที่ตำแหน่ง omega-3 และ omega-6 จึงต้องได้รับ alpha-linolenic acid และ linoleic acid จากอาหาร',
    answer: true,
    why: 'สไลด์ 35 — แมวต้องการ arachidonic acid เพิ่มอีกชนิด',
    hints: ['essential fatty acids มี 2 ชนิด'],
    explanation: 'alpha-linolenic acid = omega-3, linoleic acid = omega-6',
  },
  {
    id: 'ad-nu-05', type: 'match', topic: 'ad-nutrients', source: 'สัตว์ 5.3 สไลด์ 36–38',
    inText: ['rickets (กระดูกผิดรูปในเด็ก) กระดูกอ่อนในผู้ใหญ่', 'เลือดแข็งตัวผิดปกติ', 'beriberi', 'scurvy', 'iodine → คอพอก'],
    prompt: 'จับคู่สารอาหารกับอาการเมื่อขาด',
    pairs: [
      { left: 'Vitamin D', right: 'กระดูกผิดรูปในเด็ก (rickets) กระดูกอ่อนในผู้ใหญ่' },
      { left: 'Vitamin K', right: 'เลือดแข็งตัวผิดปกติ' },
      { left: 'Vitamin B₁ (thiamine)', right: 'beriberi (ความผิดปกติของประสาท)' },
      { left: 'Vitamin C', right: 'scurvy (ผิว ฟัน หลอดเลือดเสื่อม แผลหายช้า)' },
      { left: 'Iodine', right: 'คอพอก (ภาพในสไลด์ 38)' },
    ],
    hints: ['K = Koagulation (ภาษาเยอรมัน: การแข็งตัว)'],
    explanation: 'วิตามินละลายในไขมัน: A, D, E, K · ละลายในน้ำ: B, C',
  },
  // ---------------------------------------------------------- ad-feeding
  {
    id: 'ad-fe-01', type: 'order', topic: 'ad-feeding', source: 'สัตว์ 5.3 สไลด์ 39',
    inText: 'ingestion → digestion → absorption → elimination',
    prompt: 'เรียงกระบวนการกินอาหาร (food processing) 4 ขั้น',
    steps: ['การกินอาหาร (ingestion)', 'การย่อยอาหาร (digestion)', 'การดูดซึมสารอาหาร (absorption)', 'การขับถ่ายกากอาหาร (elimination)'],
    hints: ['ต้องย่อยให้เล็กก่อนจึงดูดซึมได้'],
    explanation: 'การย่อย 3 แบบ: mechanical (เชิงกล), chemical (เอนไซม์ — enzymatic hydrolysis), microbial action (จุลินทรีย์)',
  },
  {
    id: 'ad-fe-02', type: 'match', topic: 'ad-feeding', source: 'สัตว์ 5.3 สไลด์ 41',
    inText: ['วาฬหลังค่อม หอยกาบ หอยนางรม', 'ตัวอ่อนแมลงบนใบไม้', 'Fluid feeder — ดูดของเหลว ยุง', 'มนุษย์ นกกระสา'],
    prompt: 'จับคู่วิธีกินอาหารของ heterotroph กับตัวอย่างในสไลด์',
    pairs: [
      { left: 'Suspension feeder', right: 'วาฬหลังค่อม หอยกาบ หอยนางรม (กรองชิ้นเล็กในน้ำ)' },
      { left: 'Substrate / Deposit feeder', right: 'ตัวอ่อนแมลงบนใบไม้ (กินที่อยู่อาศัยตัวเอง)' },
      { left: 'Fluid feeder', right: 'ยุง (ดูดของเหลวจากสิ่งมีชีวิตอื่น)' },
      { left: 'Bulb feeder', right: 'มนุษย์ นกกระสากินปลา (กินชิ้นใหญ่)' },
    ],
    hints: ['ใช้ชื่อตามสไลด์ "Bulb feeder"'],
    explanation: 'การแบ่ง heterotroph 4 ชนิดตามวิธีการกินอาหาร (ชื่อตามสไลด์)',
  },
  {
    id: 'ad-fe-03', type: 'mcq', topic: 'ad-feeding', source: 'สัตว์ 5.3 สไลด์ 42–43',
    inText: ['herbivore ฟันกว้างนูนเป็นสัน บด', 'herbivore ยาว'],
    prompt: 'ข้อใดเป็นลักษณะทางเดินอาหาร/ฟันของสัตว์กินพืชเมื่อเทียบกับสัตว์กินเนื้อ',
    options: [
      { text: 'ฟันกว้างนูนเป็นสันสำหรับบด ลำไส้ยาวและ cecum ใหญ่', correct: true, why: 'อาหารพืชย่อยยาก ต้องใช้เวลานาน' },
      { text: 'ฟันหน้าและเขี้ยวแหลม ลำไส้สั้น', why: 'นั่นคือสัตว์กินเนื้อ' },
      { text: 'ไม่มีฟันกราม', why: 'สัตว์กินพืชต้องใช้ฟันบดมาก' },
      { text: 'ลำไส้สั้นเพื่อขับถ่ายเร็ว', why: 'กลับกัน' },
    ],
    hints: ['ภาพโคอาลาในสไลด์ 43'],
    explanation: 'omnivore (คน): ฟันหน้ากัด เขี้ยวฉีก ฟันกรามหน้าบด ฟันกรามหลังเคี้ยว',
  },
  // ---------------------------------------------------------- ad-tracts
  {
    id: 'ad-tr-01', type: 'mcq', topic: 'ad-tracts', source: 'สัตว์ 5.3 สไลด์ 45–47',
    inText: 'ย่อยอาหารขนาดใหญ่ได้',
    prompt: 'ข้อดีของการย่อยอาหารภายนอกเซลล์ (extracellular digestion) คืออะไร',
    options: [
      { text: 'สามารถย่อยอาหารที่มีขนาดใหญ่ได้', correct: true, why: 'สไลด์ 47' },
      { text: 'ไม่ต้องใช้เอนไซม์', why: 'ยังต้องหลั่งเอนไซม์ออกมาใน digestive tract' },
      { text: 'เกิดใน food vacuole', why: 'นั่นคือ intracellular digestion' },
      { text: 'พบเฉพาะในโปรโตซัว', why: 'โปรโตซัวใช้ intracellular digestion' },
    ],
    hints: ['ถ้าย่อยในเซลล์ อาหารต้องเล็กพอจะเข้าเซลล์ได้'],
    explanation: 'intracellular: ในเซลล์ (โปรโตซัว เช่น paramecium) · extracellular: ใน digestive tract ทั้ง incomplete และ complete tract',
  },
  {
    id: 'ad-tr-02', type: 'sort', topic: 'ad-tracts', source: 'สัตว์ 5.3 สไลด์ 48–51',
    inText: ['ไฮดรา พลานาเรีย', 'ไส้เดือนดิน นก วัว คน'],
    prompt: 'จัดสัตว์ตามชนิดทางเดินอาหาร',
    bins: [{ id: 'in', label: 'ไม่สมบูรณ์ (ช่องเปิดเดียว)' }, { id: 'co', label: 'สมบูรณ์ (ปาก + ทวารหนัก)' }],
    items: [
      { text: 'ไฮดรา', bin: 'in' }, { text: 'พลานาเรีย', bin: 'in' },
      { text: 'ไส้เดือนดิน', bin: 'co' }, { text: 'นก', bin: 'co' }, { text: 'วัว', bin: 'co' }, { text: 'คน', bin: 'co' },
    ],
    hints: ['ทางเดินอาหารสมบูรณ์พบตั้งแต่หนอนตัวกลมจนถึงสัตว์มีกระดูกสันหลัง'],
    explanation: 'incomplete tract: อาหารเข้าและกากออกทางปาก (+ muscular pharynx) · complete tract (alimentary canal): mouth → … → anus',
  },
  {
    id: 'ad-tr-03', type: 'order', topic: 'ad-tracts', source: 'สัตว์ 5.3 สไลด์ 51',
    inText: 'mouth → esophagus → crop (พักอาหาร) → gizzard (บด) → intestine → anus',
    prompt: 'เรียงทางเดินอาหารของไส้เดือนดิน',
    steps: ['mouth', 'esophagus', 'crop', 'gizzard', 'intestine', 'anus'],
    hints: ['crop เก็บอาหาร gizzard บดอาหาร'],
    explanation: 'crop (กระเพาะพักอาหาร) เก็บอาหาร · gizzard (กึ๋น) บดอาหาร',
  },
  {
    id: 'ad-tr-04', type: 'mcq', topic: 'ad-tracts', source: 'สัตว์ 5.3 สไลด์ 52',
    inText: 'กึ๋น (gizzard) กล้ามเนื้อหนา มีกรวดบดอาหารแทนฟัน ไม่มีต่อมขับน้ำย่อย',
    prompt: 'กึ๋น (gizzard) ของนกทำหน้าที่อะไร',
    options: [
      { text: 'บดอาหารแทนฟัน ด้วยกล้ามเนื้อหนาและกรวดที่อยู่ภายใน — ไม่มีต่อมขับน้ำย่อย', correct: true, why: 'สไลด์ 52' },
      { text: 'เก็บอาหารและทำให้อาหารเปียกนุ่ม', why: 'นั่นคือ crop' },
      { text: 'หลั่งน้ำย่อยมาย่อยโปรตีน', why: 'นั่นคือกระเพาะจริง (stomach chamber 1)' },
      { text: 'ดูดซึมอาหารเป็นส่วนใหญ่', why: 'ลำไส้เล็กเป็นส่วนสำคัญในการย่อยและดูดซึม' },
    ],
    hints: ['นกไม่มีฟัน'],
    explanation: 'นก: crop (เก็บ/ทำให้นุ่ม) → stomach (หลั่งน้ำย่อย) → gizzard (บด) → ลำไส้เล็ก',
  },
  {
    id: 'ad-tr-05', type: 'mcq', topic: 'ad-tracts', source: 'สัตว์ 5.3 สไลด์ 53',
    inText: 'ส่วนที่เกิดการหมัก (fermentation chamber) โดยจุลินทรีย์ที่อาศัยแบบพึ่งพา (mutualism)',
    prompt: 'สัตว์เคี้ยวเอื้อง เช่น วัว ย่อย cellulose ได้อย่างไร',
    options: [
      { text: 'มีส่วนที่เกิดการหมัก (fermentation chamber) โดยจุลินทรีย์ที่อาศัยแบบพึ่งพา (mutualism)', correct: true, why: 'สไลด์ 53' },
      { text: 'วัวสร้างเอนไซม์ cellulase เองในน้ำลาย', why: 'สไลด์บอกว่าอาศัยจุลินทรีย์' },
      { text: 'pancreatic amylase ย่อย cellulose ได้', why: 'pancreatic amylase ย่อยคาร์โบไฮเดรต "ยกเว้น cellulose"' },
      { text: 'กรดในกระเพาะสลาย cellulose', why: 'ไม่ใช่กลไกในสไลด์' },
    ],
    hints: ['ภาพผนังกระเพาะ rumen, reticulum, omasum, abomasum'],
    explanation: 'ทางเดินอาหารยาวมาก ใช้เวลาย่อยนาน กระเพาะ 4 ส่วน: rumen, reticulum, omasum, abomasum',
  },
  // ---------------------------------------------------------- ad-upper
  {
    id: 'ad-up-01', type: 'order', topic: 'ad-upper', source: 'สัตว์ 5.3 สไลด์ 59',
    inText: ['(1) ยังไม่มีอาหาร', '(2) อาหารมาถึงคอหอย', '(3) esophageal sphincter คลายตัว', '(4) peristalsis'],
    prompt: 'เรียงขั้นตอนการกลืน (swallowing reflex)',
    steps: [
      'ยังไม่มีอาหาร: esophageal sphincter หดตัว epiglottis ยกขึ้น glottis เปิด (ทางเดินหายใจเปิด)',
      'อาหารมาถึงคอหอย: กล่องเสียงและ glottis ยกขึ้น epiglottis ลงมาปิด (ทางเดินหายใจปิด)',
      'esophageal sphincter คลายตัว อาหารเคลื่อนเข้าหลอดอาหาร',
      'กล้ามเนื้อหด–คลายเป็นจังหวะ (peristalsis) ดันอาหารลงกระเพาะ',
    ],
    hints: ['ต้องปิดทางเดินหายใจ "ก่อน" อาหารผ่าน'],
    explanation: 'epiglottis ปิด glottis ป้องกันอาหารตกลงหลอดลม',
  },
  {
    id: 'ad-up-02', type: 'match', topic: 'ad-upper', source: 'สัตว์ 5.3 สไลด์ 61',
    inText: ['mucous cell เมือก ป้องกันไม่ให้เซลล์กระเพาะถูกย่อย', 'parietal cell กรดเกลือ (HCl)', 'chief cell pepsinogen'],
    prompt: 'จับคู่เซลล์ในต่อมกระเพาะ (gastric gland) กับสิ่งที่หลั่ง',
    pairs: [
      { left: 'mucous cell', right: 'เมือก ป้องกันไม่ให้เซลล์กระเพาะถูกย่อย' },
      { left: 'parietal cell', right: 'กรดเกลือ (HCl)' },
      { left: 'chief cell', right: 'pepsinogen' },
    ],
    hints: ['chief cell → pepsinogen (ยังไม่ทำงาน)'],
    explanation: 'acid chyme = อาหารที่กลืนลงไป + น้ำย่อย (gastric juice)',
  },
  {
    id: 'ad-up-03', type: 'mcq', topic: 'ad-upper', source: 'สัตว์ 5.3 สไลด์ 61',
    inText: 'HCl เปลี่ยนเป็น pepsin และ pepsin ที่เกิดขึ้นช่วยเปลี่ยน pepsinogen ต่อ',
    prompt: 'pepsinogen ถูกเปลี่ยนเป็น pepsin (รูปที่ทำงาน) ได้อย่างไร',
    options: [
      { text: 'HCl เปลี่ยน pepsinogen เป็น pepsin และ pepsin ที่เกิดขึ้นก็ช่วยเปลี่ยน pepsinogen ต่อได้อีก', correct: true, why: 'ข้อความในสไลด์ (HCl) + ภาพขั้นที่ 3 (pepsin กระตุ้นเพิ่ม)' },
      { text: 'enterokinase ในลำไส้เล็ก', why: 'enterokinase เปลี่ยน trypsinogen → trypsin' },
      { text: 'น้ำดีจากตับ', why: 'น้ำดีไม่มีเอนไซม์ ช่วยแตกตัวไขมัน' },
      { text: 'mucous cell หลั่งสารเปลี่ยนรูป', why: 'mucous cell หลั่งเมือก' },
    ],
    hints: ['ดูภาพในสไลด์ 61 มีขั้น ① ② ③'],
    explanation: 'chief cell หลั่ง pepsinogen → HCl เปลี่ยนเป็น pepsin → pepsin กระตุ้น pepsinogen ตัวอื่นต่อ',
  },
  {
    id: 'ad-up-04', type: 'mcq', topic: 'ad-upper', source: 'สัตว์ 5.3 สไลด์ 62–63',
    inText: ['หลั่งกรดมากเกิน · Helicobacter pylori · ยา NSAIDs', 'lower esophageal sphincter ทำงานผิดปกติ'],
    prompt: 'ข้อใด "ไม่ใช่" สาเหตุของแผลเพปติก (peptic ulcer) ตามสไลด์',
    options: [
      { text: 'หูรูดหลอดอาหารส่วนล่าง (LES) ทำงานผิดปกติ', correct: true, why: 'นี่คือสาเหตุของ GERD (โรคกรดไหลย้อน)' },
      { text: 'กระเพาะอาหารหลั่งกรดมากเกินไป', why: 'เป็นสาเหตุของแผลเพปติก' },
      { text: 'ติดเชื้อแบคทีเรีย Helicobacter pylori', why: 'เป็นสาเหตุของแผลเพปติก' },
      { text: 'กินยากลุ่ม NSAIDs', why: 'เป็นสาเหตุของแผลเพปติก' },
    ],
    hints: ['ถาม "ไม่ใช่"', 'มีโรคสองโรคในสไลด์: GERD กับ peptic ulcer'],
    explanation: 'GERD: LES ผิดปกติ → กรดไหลย้อนขึ้นหลอดอาหาร (แสบอก เปรี้ยวปาก) · peptic ulcer: กรดมาก, H. pylori, NSAIDs (บุหรี่ แอลกอฮอล์เพิ่มการหลั่งกรด)',
  },
  {
    id: 'ad-up-05', type: 'label', topic: 'ad-upper', source: 'สัตว์ 5.3 สไลด์ 56–57',
    inText: 'salivary amylase (แป้ง → dextrin, maltose)',
    prompt: 'แตะอวัยวะที่หลั่งน้ำย่อยที่มี salivary amylase',
    diagram: 'gi-tract', target: 'salivary',
    hints: ['มี 3 คู่: ใต้กกหู ใต้ขากรรไกรล่าง ใต้ลิ้น'],
    explanation: 'salivary amylase ย่อยแป้ง (starch) เป็น dextrin และ maltose',
  },
  // ---------------------------------------------------------- ad-lower
  {
    id: 'ad-lo-01', type: 'label', topic: 'ad-lower', source: 'สัตว์ 5.3 สไลด์ 65',
    inText: 'ลำไส้เล็ก: ยาวที่สุด ดูดซึมมากที่สุด',
    prompt: 'แตะส่วนที่ดูดซึมอาหารมากที่สุดและยาวที่สุดของทางเดินอาหาร',
    diagram: 'gi-tract', target: 'small-intestine',
    hints: ['มี 3 ส่วน: duodenum, jejunum, ileum'],
    explanation: 'ลำไส้เล็กมี villi และ microvilli เพิ่มพื้นที่ผิว',
  },
  {
    id: 'ad-lo-02', type: 'label', topic: 'ad-lower', source: 'สัตว์ 5.3 สไลด์ 68',
    inText: 'ตับสร้างน้ำดี',
    prompt: 'แตะอวัยวะที่ "สร้าง" น้ำดี',
    diagram: 'gi-tract', target: 'liver',
    hints: ['ไม่ใช่อวัยวะที่ "เก็บ" น้ำดี'],
    explanation: 'ตับสร้างน้ำดี → เก็บที่ถุงน้ำดี → ส่งไป duodenum',
  },
  {
    id: 'ad-lo-03', type: 'tf', topic: 'ad-lower', source: 'สัตว์ 5.3 สไลด์ 68',
    inText: 'น้ำดีไม่มีเอนไซม์',
    statement: 'น้ำดี (bile) มีเอนไซม์ lipase ใช้ย่อยไขมัน',
    answer: false,
    why: 'น้ำดี "ไม่มีเอนไซม์" แต่มีเกลือน้ำดีทำให้ไขมันก้อนใหญ่แตกเป็นก้อนเล็ก (emulsifier) ให้ lipase จากตับอ่อนทำงานได้ดีขึ้น',
    hints: ['lipase มาจากตับอ่อน'],
    explanation: 'emulsification ไม่ใช่การย่อยทางเคมี',
  },
  {
    id: 'ad-lo-04', type: 'mcq', topic: 'ad-lower', source: 'สัตว์ 5.3 สไลด์ 69',
    inText: 'acinar cells หลั่งเอนไซม์ · duct cells หลั่งน้ำ + bicarbonate',
    prompt: 'pancreatic juice ประกอบด้วยอะไร',
    options: [
      { text: 'เอนไซม์ย่อยอาหารจาก acinar cells และน้ำกับ bicarbonate จาก duct cells', correct: true, why: 'สไลด์ 69' },
      { text: 'HCl และ pepsinogen', why: 'มาจากต่อมในกระเพาะ' },
      { text: 'เกลือน้ำดี', why: 'มาจากตับ' },
      { text: 'insulin และ glucagon เท่านั้น', why: 'ฮอร์โมนหลั่งเข้ากระแสเลือด ไม่ใช่ pancreatic juice' },
    ],
    hints: ['bicarbonate เป็นเบส ใช้ทำอะไรกับ acid chyme?'],
    explanation: 'bicarbonate ช่วยลดความเป็นกรดของ acid chyme ที่มาจากกระเพาะ',
  },
  {
    id: 'ad-lo-05', type: 'mcq', topic: 'ad-lower', source: 'สัตว์ 5.3 สไลด์ 72',
    inText: 'ลำไส้ใหญ่: ไม่มีการย่อย ดูดน้ำและเกลือแร่ peristalsis อยู่ 12–24 ชม.',
    prompt: 'ข้อใดถูกต้องเกี่ยวกับลำไส้ใหญ่',
    options: [
      { text: 'ไม่มีการย่อยอาหารแล้ว มีเพียงการดูดน้ำและเกลือแร่ กากอาหารอยู่นาน 12–24 ชม.', correct: true, why: 'สไลด์ 72' },
      { text: 'เป็นส่วนที่ดูดซึมสารอาหารมากที่สุด', why: 'นั่นคือลำไส้เล็ก' },
      { text: 'หลั่ง pepsin ย่อยโปรตีนที่เหลือ', why: 'pepsin อยู่ในกระเพาะ' },
      { text: 'มี 3 ส่วน: duodenum, jejunum, ileum', why: 'นั่นคือลำไส้เล็ก — ลำไส้ใหญ่มี cecum, colon, rectum, anal canal' },
    ],
    hints: ['ลำไส้ใหญ่มี 4 ส่วน'],
    explanation: 'cecum (มีไส้ติ่ง) · colon (มี crypt สร้างเมือก) · rectum (เก็บกากอาหาร) · anal canal (มีหูรูด)',
  },
  // ---------------------------------------------------------- ad-enzymes
  {
    id: 'ad-en-01', type: 'match', topic: 'ad-enzymes', source: 'สัตว์ 5.3 สไลด์ 57, 61, 64, 70',
    inText: ['ปาก salivary amylase', 'กระเพาะ — pepsin', 'trypsin, chymotrypsin', 'pancreatic lipase', 'disaccharidases'],
    prompt: 'จับคู่เอนไซม์กับตำแหน่งที่ทำงาน',
    pairs: [
      { left: 'salivary amylase', right: 'ช่องปาก — แป้ง → dextrin, maltose' },
      { left: 'pepsin', right: 'กระเพาะอาหาร — โปรตีน → polypeptide สั้น' },
      { left: 'trypsin, chymotrypsin', right: 'ลำไส้เล็ก (จากตับอ่อน) — polypeptide → peptide' },
      { left: 'pancreatic lipase', right: 'ลำไส้เล็ก (จากตับอ่อน) — ไขมัน → glycerol, fatty acid, monoglyceride' },
      { left: 'disaccharidase', right: 'ลำไส้เล็ก (จากเซลล์ผนังลำไส้) — disaccharide → monosaccharide' },
    ],
    hints: ['เอนไซม์ย่อยโปรตีนตัวแรกอยู่ที่กระเพาะ'],
    explanation: 'คาร์โบไฮเดรตเริ่มย่อยที่ปาก · โปรตีนเริ่มที่กระเพาะ · ไขมันและกรดนิวคลีอิกเริ่มที่ลำไส้เล็ก',
  },
  {
    id: 'ad-en-02', type: 'mcq', topic: 'ad-enzymes', source: 'สัตว์ 5.3 สไลด์ 70',
    inText: 'trypsinogen —enterokinase→ trypsin',
    prompt: 'trypsinogen ถูกเปลี่ยนเป็น trypsin โดยอะไร',
    options: [
      { text: 'enterokinase', correct: true, why: 'สไลด์ 70' },
      { text: 'trypsin', why: 'trypsin เปลี่ยน chymotrypsinogen และ procarboxypeptidase' },
      { text: 'HCl', why: 'HCl เปลี่ยน pepsinogen' },
      { text: 'bile salt', why: 'เกลือน้ำดีไม่ใช่เอนไซม์' },
    ],
    hints: ['ต้องมีตัวจุดชนวนตัวแรกจากเซลล์ผนังลำไส้'],
    explanation: 'trypsinogen —enterokinase→ trypsin · chymotrypsinogen —trypsin→ chymotrypsin · procarboxypeptidase —trypsin→ carboxypeptidase',
  },
  {
    id: 'ad-en-03', type: 'order', topic: 'ad-enzymes', source: 'สัตว์ 5.3 สไลด์ 64, 71',
    inText: ['pepsin', 'trypsin, chymotrypsin, carboxypeptidase', 'dipeptidase, carboxypeptidase, aminopeptidase', 'amino acid'],
    prompt: 'เรียงการย่อยโปรตีนจากต้นจนได้กรดอะมิโน',
    steps: ['โปรตีน —pepsin (กระเพาะ)→ polypeptide สั้น', '—trypsin, chymotrypsin (ตับอ่อน)→ polypeptide ที่เล็กลง', '—carboxypeptidase (ตับอ่อน)→ peptide สั้น', '—dipeptidase, carboxypeptidase, aminopeptidase (ผนังลำไส้)→ กรดอะมิโน'],
    hints: ['เริ่มที่กระเพาะ จบที่ผนังลำไส้เล็ก'],
    explanation: 'ตามแผนภาพ Protein digestion ในสไลด์ 64/71',
  },
  // ---------------------------------------------------------- ad-absorb
  {
    id: 'ad-ab-01', type: 'mcq', topic: 'ad-absorb', source: 'สัตว์ 5.3 สไลด์ 74',
    inText: 'แพร่เข้าเซลล์ รวมกับ cholesterol เป็น chylomicron หลอดน้ำเหลือง (lacteal)',
    prompt: 'กรดไขมันถูกดูดซึมและขนส่งอย่างไร',
    options: [
      { text: 'แพร่เข้าเซลล์ รวมกับ cholesterol เป็น chylomicron แล้วขนส่งเข้าสู่หลอดน้ำเหลือง (lacteal)', correct: true, why: 'สไลด์ 74' },
      { text: 'cotransport กับโซเดียมเข้าสู่ระบบเลือดโดยตรง', why: 'นี่คือ monosaccharide และกรดอะมิโน' },
      { text: 'ดูดซึมที่ลำไส้ใหญ่เป็นส่วนใหญ่', why: 'ดูดซึมที่ลำไส้เล็ก' },
      { text: 'ไม่ถูกดูดซึม ขับออกทั้งหมด', why: 'ร่างกายดูดซึมไขมันได้' },
    ],
    hints: ['ในวิลลัสมีทั้งหลอดเลือดฝอยและท่อน้ำเหลือง'],
    explanation: 'monosaccharide, amino acid: ใช้พลังงาน cotransport กับ Na⁺ → เลือด · fat: แพร่ → chylomicron → น้ำเหลือง',
  },
  {
    id: 'ad-ab-02', type: 'match', topic: 'ad-absorb', source: 'สัตว์ 5.3 สไลด์ 76',
    inText: ['gastrin กระเพาะ กระตุ้น parietal cell หลั่ง HCl', 'CCK (cholecystokinin) duodenum กระตุ้นการหลั่งเอนไซม์จากตับอ่อนและน้ำดีจากถุงน้ำดี', 'secretin duodenum กระตุ้นการหลั่ง bicarbonate จากตับอ่อน'],
    prompt: 'จับคู่ฮอร์โมนในระบบย่อยอาหารกับหน้าที่',
    pairs: [
      { left: 'Gastrin', right: 'หลั่งจากกระเพาะ กระตุ้น parietal cell ให้หลั่ง HCl' },
      { left: 'Cholecystokinin (CCK)', right: 'หลั่งจาก duodenum กระตุ้นการหลั่งเอนไซม์จากตับอ่อนและน้ำดีจากถุงน้ำดี' },
      { left: 'Secretin', right: 'หลั่งจาก duodenum กระตุ้นการหลั่ง bicarbonate จากตับอ่อน' },
    ],
    hints: ['chole- = น้ำดี'],
    explanation: 'secretin และ CCK ยังยับยั้งการหลั่ง HCl จากกระเพาะ',
  },
  {
    id: 'ad-ab-03', type: 'tf', topic: 'ad-absorb', source: 'สัตว์ 5.3 สไลด์ 73',
    inText: 'ดูดซึมส่วนใหญ่ที่ jejunum และ ileum',
    statement: 'การดูดซึมสารอาหารส่วนใหญ่เกิดที่ลำไส้เล็กส่วน jejunum และ ileum',
    answer: true,
    why: 'สไลด์ 73 (ส่วนการ "ย่อย" เกิดมากที่สุดที่ duodenum ตามสไลด์ 66)',
    hints: ['แยก "ย่อยมากที่สุด" กับ "ดูดซึมมากที่สุด"'],
    explanation: 'ลำไส้ใหญ่ดูดซึมได้เล็กน้อย (น้ำ แร่ธาตุ วิตามิน กลูโคส)',
  },
];
