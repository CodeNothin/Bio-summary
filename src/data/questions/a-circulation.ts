// =====================================================================
// Practice questions — สัตว์ 5.4: circulation.
// Source deck: Gen_bio_107_Unit_5 slides 79–108.
// Editing rules: see the top of p-structure.ts.
//
// Decisions from the user:
//  - Open circulation examples stay as the slide writes them (TODO 4).
//  - Heart chambers (TODO 3): amphibians have 3 chambers. The slide table's
//    "4 (incomplete)" for turtles/lizards = the 4th chamber is incomplete
//    (ventricle only partly divided). No question asks for a bare number
//    for turtles/lizards.
// =====================================================================
import { cardiacOutput, netFiltrationPressure } from '../calc';
import type { Question } from '../types';

export const aCirculation: Question[] = [
  // ---------------------------------------------------------- ac-types
  {
    id: 'ac-ty-01', type: 'mcq', topic: 'ac-types', source: 'สัตว์ 5.4 สไลด์ 82–83',
    prompt: 'ข้อใดเป็นลักษณะของระบบไหลเวียนเลือดแบบปิด',
    options: [
      { text: 'เลือดอยู่ในหลอดเลือดตลอดเวลา แยกจาก interstitial fluid แลกเปลี่ยนสารที่หลอดเลือดฝอย', correct: true, why: 'สไลด์ 83' },
      { text: 'ของเหลวเรียกว่า hemolymph อวัยวะสัมผัสของเหลวโดยตรง', why: 'นั่นคือระบบเปิด' },
      { text: 'ของเหลวกลับเข้าหัวใจทางรู ostia', why: 'นั่นคือระบบเปิด (แมลง)' },
      { text: 'ไม่มีหัวใจ ใช้ gastrovascular cavity', why: 'นั่นคือสัตว์ที่ไม่มีระบบไหลเวียน' },
    ],
    hints: ['ปิด = เลือดไม่ออกนอกท่อ'],
    explanation: 'ระบบปิดพบในไส้เดือน หมึก และสัตว์มีกระดูกสันหลัง',
  },
  {
    id: 'ac-ty-02', type: 'sort', topic: 'ac-types', source: 'สัตว์ 5.4 สไลด์ 80–83',
    prompt: 'จัดสัตว์ตามแบบของระบบไหลเวียน (ตามสไลด์)',
    bins: [
      { id: 'none', label: 'ไม่มีระบบไหลเวียนเฉพาะ' },
      { id: 'open', label: 'ระบบเปิด' },
      { id: 'closed', label: 'ระบบปิด' },
    ],
    items: [
      { text: 'แมงกะพรุน (cnidarian)', bin: 'none' }, { text: 'พลานาเรีย', bin: 'none' },
      { text: 'แมลง (ตั๊กแตน)', bin: 'open' }, { text: 'กุ้ง กั้ง ปู (ตามสไลด์)', bin: 'open' },
      { text: 'ไส้เดือนดิน', bin: 'closed' }, { text: 'หมึก', bin: 'closed' }, { text: 'สัตว์มีกระดูกสันหลัง', bin: 'closed' },
    ],
    hints: ['หมึกเป็นมอลลัสก์ที่มีระบบปิด'],
    explanation: 'ไม่มีระบบเฉพาะ: ใช้ gastrovascular cavity + การแพร่ · เปิด: hemolymph ใน sinus · ปิด: เลือดอยู่ในหลอดเลือด',
  },
  {
    id: 'ac-ty-03', type: 'order', topic: 'ac-types', source: 'สัตว์ 5.4 สไลด์ 82',
    prompt: 'เรียงขั้นตอนการไหลเวียนในระบบเปิด (แมลง)',
    steps: [
      'หัวใจ (tubular heart) ด้านหลังบีบตัว',
      'hemolymph เคลื่อนสู่หลอดเลือดและ sinus (แอ่งเลือดรอบอวัยวะ)',
      'hemolymph ใน sinus แลกเปลี่ยนแก๊สและสารอาหารกับเซลล์โดยตรง',
      'หัวใจคลายตัว hemolymph ถูกดึงกลับเข้าหัวใจทางรู ostia',
    ],
    hints: ['ostia มี valve ปิดเมื่อหัวใจหดตัว'],
    explanation: 'อวัยวะสัมผัสกับ hemolymph โดยตรง',
  },
  // ---------------------------------------------------------- ac-vertebrate
  {
    id: 'ac-ve-01', type: 'mcq', topic: 'ac-vertebrate', source: 'สัตว์ 5.4 สไลด์ 86–88',
    prompt: 'สัตว์กลุ่มใดเป็นกลุ่มแรกที่มีระบบหมุนเวียนเลือดแบบ 2 วงจร (double circulation) และมีหัวใจกี่ห้อง',
    options: [
      { text: 'สัตว์สะเทินน้ำสะเทินบก — 3 ห้อง (2 atrium, 1 ventricle)', correct: true, why: 'สไลด์ 86, 88' },
      { text: 'ปลา — 2 ห้อง', why: 'ปลาเป็นวงจรเดียว (single circulation)' },
      { text: 'นก — 4 ห้อง', why: 'นกเป็น 2 วงจรจริง แต่ไม่ใช่กลุ่มแรก' },
      { text: 'สัตว์สะเทินน้ำสะเทินบก — 4 ห้อง', why: 'กบมี 3 ห้อง' },
    ],
    hints: ['pulmonary + systemic circulation'],
    explanation: 'ปลา: 1 วงจร 2 ห้อง · กบ: 2 วงจร 3 ห้อง · เต่า/กิ้งก่า: 2 วงจร ventricle แบ่งไม่สมบูรณ์ (ตารางเขียน "4 (incomplete)") · จระเข้ นก สัตว์เลี้ยงลูกด้วยนม: 2 วงจร 4 ห้อง',
  },
  {
    id: 'ac-ve-02', type: 'mcq', topic: 'ac-vertebrate', source: 'สัตว์ 5.4 สไลด์ 87',
    prompt: 'ทำไมเลือดในวงจรเดียวของปลาจึงไหลช้าลงหลังผ่านเหงือก',
    options: [
      { text: 'เลือดจาก gill capillary ไปเลี้ยงร่างกายโดยตรงโดยไม่กลับหัวใจ ความดันจึงค่อย ๆ ลดลง', correct: true, why: 'สไลด์ 87' },
      { text: 'เหงือกเติมความดันให้เลือด', why: 'ผ่านหลอดเลือดฝอยแล้วความดันลด' },
      { text: 'ปลามีหัวใจ 4 ห้อง', why: 'ปลามี 2 ห้อง' },
      { text: 'เลือดปลาไม่มีเม็ดเลือดแดง', why: 'ไม่เกี่ยว' },
    ],
    hints: ['ventricle → เหงือก → ร่างกาย → กลับหัวใจ (ไม่มีจุดเติมแรงดันระหว่างทาง)'],
    explanation: 'ในระบบ 2 วงจร เลือดกลับมาที่หัวใจเพื่อถูกบีบอีกครั้งก่อนไปเลี้ยงร่างกาย',
  },
  // ---------------------------------------------------------- ac-heart
  {
    id: 'ac-he-01', type: 'order', topic: 'ac-heart', source: 'สัตว์ 5.4 สไลด์ 90',
    prompt: 'เรียงเส้นทางของเลือดเริ่มจากหัวใจห้องล่างขวา',
    steps: [
      'ventricle ขวา', 'pulmonary artery', 'ปอด (แลกเปลี่ยนแก๊ส)', 'pulmonary vein',
      'atrium ซ้าย', 'ventricle ซ้าย', 'aorta', 'ร่างกาย', 'vena cava', 'atrium ขวา',
    ],
    hints: ['pulmonary circulation ก่อน แล้วค่อย systemic'],
    explanation: 'pulmonary: ventricle ขวา → ปอด → atrium ซ้าย · systemic: ventricle ซ้าย → ร่างกาย → atrium ขวา',
  },
  {
    id: 'ac-he-02', type: 'label', topic: 'ac-heart', source: 'สัตว์ 5.4 สไลด์ 92',
    prompt: 'แตะลิ้นที่กั้นระหว่าง atrium ซ้ายกับ ventricle ซ้าย',
    diagram: 'heart', target: 'mitral',
    hints: ['ในภาพ ด้านขวาของหัวใจอยู่ทางซ้ายมือของเรา'],
    explanation: 'AV valve: ขวา = tricuspid, ซ้าย = bicuspid (mitral)',
  },
  {
    id: 'ac-he-03', type: 'label', topic: 'ac-heart', source: 'สัตว์ 5.4 สไลด์ 90',
    prompt: 'แตะหลอดเลือดที่นำเลือด O₂ สูงจากปอดกลับเข้าหัวใจ',
    diagram: 'heart', target: 'pulmonary-vein',
    hints: ['vein = เข้าหัวใจ'],
    explanation: 'pulmonary vein มี O₂ สูงแต่ยังเรียกว่า vein เพราะ "เข้า" หัวใจ',
  },
  {
    id: 'ac-he-04', type: 'tf', topic: 'ac-heart', source: 'สัตว์ 5.4 สไลด์ 90',
    statement: 'pulmonary artery นำเลือดที่มี O₂ ต่ำจากหัวใจไปปอด',
    answer: true,
    why: 'artery = นำเลือด "ออกจาก" หัวใจ ไม่ได้ขึ้นกับปริมาณ O₂',
    hints: ['artery/vein ตั้งชื่อตามทิศทาง ไม่ใช่ตามปริมาณ O₂'],
    explanation: 'ข้อผิดพลาดที่พบบ่อย: คิดว่า artery = เลือดแดงเสมอ',
  },
  {
    id: 'ac-he-05', type: 'match', topic: 'ac-heart', source: 'สัตว์ 5.4 สไลด์ 85, 92',
    prompt: 'จับคู่ส่วนของหัวใจกับหน้าที่',
    pairs: [
      { left: 'atrium', right: 'รับเลือดกลับเข้าหัวใจ' },
      { left: 'ventricle', right: 'ปั๊มเลือดออกจากหัวใจ' },
      { left: 'AV valve', right: 'กั้นระหว่าง atrium กับ ventricle' },
      { left: 'semilunar valve', right: 'กั้นระหว่าง ventricle กับ aorta / pulmonary artery' },
    ],
    hints: ['semi-lunar = ครึ่งวงพระจันทร์ อยู่ที่ทางออก'],
    explanation: 'ลิ้นทำให้เลือดไหลทางเดียว',
  },
  // ---------------------------------------------------------- ac-cycle
  {
    id: 'ac-cy-01', type: 'numeric', topic: 'ac-cycle', source: 'สัตว์ 5.4 สไลด์ 93',
    prompt: 'หัวใจเต้น 70 ครั้ง/นาที และบีบเลือดออกครั้งละ 75 mL (stroke volume) cardiac output เท่ากับกี่ลิตรต่อนาที',
    answer: 5.25, unit: 'L/min',
    compute: () => cardiacOutput(70, 75),
    slips: [
      { value: 5250, msg: 'นี่คือหน่วย mL/min — แปลงเป็นลิตร (หาร 1000)' },
      { value: 145, msg: 'นำมาบวกกัน — cardiac output = heart rate × stroke volume' },
    ],
    hints: ['cardiac output = heart rate × stroke volume', '1 L = 1000 mL'],
    explanation: '70 × 75 mL = 5250 mL/min = 5.25 L/min',
  },
  {
    id: 'ac-cy-02', type: 'numeric', topic: 'ac-cycle', source: 'สัตว์ 5.4 สไลด์ 93 (ดัดแปลงตัวเลข)',
    prompt: 'ขณะออกกำลังกาย หัวใจเต้น 120 ครั้ง/นาที stroke volume 100 mL cardiac output เท่ากับกี่ลิตรต่อนาที',
    answer: 12, unit: 'L/min',
    compute: () => cardiacOutput(120, 100),
    slips: [{ value: 12000, msg: 'ยังเป็น mL/min — หาร 1000' }],
    hints: ['ใช้สูตรเดียวกับสไลด์ 93'],
    explanation: '120 × 100 = 12000 mL/min = 12 L/min',
  },
  {
    id: 'ac-cy-03', type: 'order', topic: 'ac-cycle', source: 'สัตว์ 5.4 สไลด์ 94–96',
    prompt: 'เรียงเหตุการณ์ในระยะ ventricular systole',
    steps: ['ventricle หดตัว', 'AV valve ปิด (เสียง lub)', 'ความดันใน ventricle เพิ่มขึ้น', 'semilunar valve เปิด', 'เลือดถูกบีบออก'],
    hints: ['ลิ้น AV ต้องปิดก่อน ไม่งั้นเลือดย้อนกลับขึ้น atrium'],
    explanation: 'วัฏจักรหัวใจ: (1) คลายทั้งหมด 0.4 s (2) atrial systole 0.1 s (3) ventricular systole 0.3 s',
  },
  {
    id: 'ac-cy-04', type: 'mcq', topic: 'ac-cycle', source: 'สัตว์ 5.4 สไลด์ 97',
    prompt: 'เสียง "dup" (S2) ของหัวใจเกิดจากอะไร',
    options: [
      { text: 'การปิดของ semilunar valve เมื่อ ventricle คลายตัว', correct: true, why: 'S2 = เสียงที่สอง' },
      { text: 'การปิดของ AV valve เมื่อ ventricle บีบตัว', why: 'นั่นคือ S1 "lub"' },
      { text: 'การบีบตัวของ atrium', why: 'ไม่ใช่เสียงหลักที่สไลด์กล่าวถึง' },
      { text: 'การเปิดของ semilunar valve', why: 'เสียงเกิดจากการ "ปิด" ของลิ้น' },
    ],
    hints: ['lub ก่อน dup — ลิ้นไหนปิดก่อน?'],
    explanation: 'S1 lub: AV valve ปิด (ventricle บีบ) · S2 dup: semilunar valve ปิด (ventricle คลาย)',
  },
  {
    id: 'ac-cy-05', type: 'tf', topic: 'ac-cycle', source: 'สัตว์ 5.4 สไลด์ 94',
    statement: 'ในระยะที่หัวใจคลายตัวทั้งหมด ความดันใน ventricle ลดลง AV valve เปิด และเลือดไหลเข้าเติม ventricle',
    answer: true,
    why: 'สไลด์ 94: Atrial and ventricular diastole (0.4 s)',
    hints: ['เลือดไหลจากความดันสูงไปต่ำ'],
    explanation: 'ventricle ถูกเติมเลือดส่วนใหญ่ตั้งแต่ระยะนี้ ก่อน atrium จะบีบเติมอีกเล็กน้อย',
  },
  // ---------------------------------------------------------- ac-vessels
  {
    id: 'ac-vs-01', type: 'mcq', topic: 'ac-vessels', source: 'สัตว์ 5.4 สไลด์ 102',
    prompt: 'เลือดไหลช้าที่สุดในหลอดเลือดฝอย (capillary) เพราะอะไร',
    options: [
      { text: 'พื้นที่หน้าตัดรวมของ capillary มากที่สุด (law of continuity)', correct: true, why: 'ท่อที่พื้นที่หน้าตัดรวมมาก ของเหลวไหลช้า' },
      { text: 'capillary แต่ละเส้นใหญ่ที่สุด', why: 'แต่ละเส้นเล็กมาก (3–10 µm) แต่มีจำนวนมหาศาล' },
      { text: 'capillary มีกล้ามเนื้อเรียบหนาที่สุด', why: 'capillary มีแค่ endothelium ชั้นเดียว' },
      { text: 'ความดันใน capillary สูงที่สุด', why: 'ความดันลดลงเรื่อย ๆ จาก aorta' },
    ],
    hints: ['ดูกราฟ Area กับ Velocity ในสไลด์ 102'],
    explanation: 'ไหลช้า → มีเวลาแลกเปลี่ยนสาร',
  },
  {
    id: 'ac-vs-02', type: 'order', topic: 'ac-vessels', source: 'สัตว์ 5.4 สไลด์ 101',
    prompt: 'เรียงหลอดเลือดจาก "ความดันเลือดสูงสุด" ไป "ต่ำสุด"',
    steps: ['aorta', 'artery', 'arteriole', 'capillary', 'venule', 'vein', 'vena cava'],
    hints: ['เรียงตามเส้นทางเลือดออกจากหัวใจแล้วกลับ'],
    explanation: 'ความดันปกติของผู้ใหญ่ขณะพัก 120/80 mmHg · hypertension > 140/90 mmHg',
  },
  {
    id: 'ac-vs-03', type: 'mcq', topic: 'ac-vessels', source: 'สัตว์ 5.4 สไลด์ 99–100',
    prompt: 'ข้อใดถูกต้องเกี่ยวกับโครงสร้างหลอดเลือด',
    options: [
      { text: 'vein ขนาดใหญ่มี one-way valve ยอมให้เลือดไหลกลับสู่หัวใจเท่านั้น', correct: true, why: 'สไลด์ 100' },
      { text: 'vein มีชั้นกลาง (กล้ามเนื้อเรียบ) หนากว่า artery', why: 'artery มีชั้นนอกและชั้นกลางหนากว่า vein' },
      { text: 'capillary มีผนัง 3 ชั้นเหมือน artery', why: 'capillary มีเฉพาะ endothelium' },
      { text: 'artery เป็น collecting system', why: 'artery = distributing system, vein = collecting system' },
    ],
    hints: ['ดูภาพกล้ามเนื้อโครงร่างบีบ vein ในสไลด์ 100'],
    explanation: 'ผนังหลอดเลือด 3 ชั้น: นอก (connective + elastic) · กลาง (smooth muscle + elastic) · ใน (endothelium)',
  },
  {
    id: 'ac-vs-04', type: 'numeric', topic: 'ac-vessels', source: 'สัตว์ 5.4 สไลด์ 104 (ตัวเลขในภาพ)',
    prompt: 'ที่ปลายหลอดเลือดฝอยด้าน venule ความดันเลือด (CHP) = 18 mmHg และ blood colloid osmotic pressure (BCOP) = 25 mmHg ความดันสุทธิ (NFP = CHP − BCOP) เท่ากับเท่าใด',
    answer: -7, unit: 'mmHg', tolerance: 0.001,
    compute: () => netFiltrationPressure(18, 25),
    slips: [{ value: 7, msg: 'เครื่องหมายผิด — ค่าเป็นลบแปลว่าของเหลวไหล "เข้า" หลอดเลือดฝอย' }],
    hints: ['NFP = CHP − BCOP', 'ค่าลบ = ของเหลวไหลกลับเข้า capillary'],
    explanation: '18 − 25 = −7 mmHg → ของเหลวไหลกลับเข้า capillary (ด้าน arteriole: 35 − 25 = +10 → ไหลออก)',
  },
  {
    id: 'ac-vs-05', type: 'mcq', topic: 'ac-vessels', source: 'สัตว์ 5.4 สไลด์ 103',
    prompt: 'การไหลของเลือดเข้าสู่ capillary bed ถูกควบคุมโดยอะไร',
    options: [
      { text: 'การหดตัวของกล้ามเนื้อเรียบของ arteriole และ precapillary sphincter', correct: true, why: 'สไลด์ 103' },
      { text: 'ลิ้นใน capillary', why: 'capillary ไม่มีลิ้น' },
      { text: 'การบีบตัวของ vein', why: 'vein อยู่หลัง capillary bed' },
      { text: 'ปริมาณ O₂ ใน vena cava', why: 'ไม่ใช่กลไกในสไลด์' },
    ],
    hints: ['sphincter = หูรูด'],
    explanation: 'เช่น ขณะออกกำลังกาย เลือดไปเลี้ยงกล้ามเนื้อมาก ไปทางเดินอาหารลดลง',
  },
  // ---------------------------------------------------------- ac-blood
  {
    id: 'ac-bl-01', type: 'sort', topic: 'ac-blood', source: 'สัตว์ 5.4 สไลด์ 106',
    prompt: 'จัดเม็ดเลือดขาวเป็น granulocyte หรือ agranulocyte',
    bins: [{ id: 'g', label: 'granulocyte (นิวเคลียสเป็นพู มี granule)' }, { id: 'a', label: 'agranulocyte (นิวเคลียสใหญ่ ค่อนข้างกลม)' }],
    items: [
      { text: 'neutrophil', bin: 'g' }, { text: 'eosinophil', bin: 'g' }, { text: 'basophil', bin: 'g' },
      { text: 'lymphocyte', bin: 'a' }, { text: 'monocyte', bin: 'a' },
    ],
    hints: ['granulocyte ลงท้ายด้วย -phil'],
    explanation: 'เม็ดเลือด: erythrocyte, white blood cell (granulocyte/agranulocyte), platelet',
  },
  {
    id: 'ac-bl-02', type: 'mcq', topic: 'ac-blood', source: 'สัตว์ 5.4 สไลด์ 107',
    prompt: 'ฮีโมโกลบิน 1 โมเลกุล จับ O₂ ได้สูงสุดกี่โมเลกุล',
    options: [
      { text: '4 โมเลกุล', correct: true, why: 'Hb มี heme 4 หน่วย แต่ละ heme มีเหล็ก 1 อะตอมจับ O₂ ได้ 1 โมเลกุล' },
      { text: '1 โมเลกุล', why: 'heme 1 หน่วยจับได้ 1 แต่ Hb มี 4 heme' },
      { text: '2 โมเลกุล', why: 'ไม่ตรงกับจำนวน heme' },
      { text: '8 โมเลกุล', why: 'เกินจำนวน heme' },
    ],
    hints: ['นับ heme'],
    explanation: 'O₂ ละลายใน plasma ได้น้อย จึงต้องมี respiratory pigment (Hb) ช่วยขนส่ง',
  },
  {
    id: 'ac-bl-03', type: 'mcq', topic: 'ac-blood', source: 'สัตว์ 5.4 สไลด์ 108',
    prompt: 'หน้าที่ของระบบน้ำเหลือง (lymphatic system) ตามสไลด์คือข้อใด',
    options: [
      { text: 'นำของเหลวและโปรตีนที่ซึมออกจาก capillary และไขมันที่ดูดซึมจากลำไส้เล็ก กลับเข้าสู่ vena cava', correct: true, why: 'สไลด์ 108' },
      { text: 'สูบฉีดเลือดไปทั่วร่างกาย', why: 'นั่นคือหัวใจ' },
      { text: 'แลกเปลี่ยนแก๊สกับอากาศ', why: 'นั่นคือปอด' },
      { text: 'สร้างน้ำดี', why: 'นั่นคือตับ' },
    ],
    hints: ['ไขมันถูกดูดซึมเข้า lacteal'],
    explanation: 'lymph node กรอง lymph และทำลายเชื้อโรค (มี connective tissue และเม็ดเลือดขาว)',
  },
];
