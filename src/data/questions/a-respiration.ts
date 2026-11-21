// =====================================================================
// Practice questions — สัตว์ 5.5: respiration and gas exchange.
// Source deck: Gen_bio_107_Unit_5 slides 109–125.
// Editing rules: see the top of p-structure.ts.
//
// Decision (user, TODO 7): pleural fluid keeps the slide's wording
// "ของเหลวบรรจุอยู่ (surfactant)".
// =====================================================================
import type { Question } from '../types';

export const aRespiration: Question[] = [
  {
    id: 'ar-in-01', type: 'mcq', topic: 'ar-intro', source: 'สัตว์ 5.5 สไลด์ 109',
    prompt: 'ข้อใดแยก "การหายใจ (respiration/gas exchange)" กับ "การหายใจระดับเซลล์ (cellular respiration)" ได้ถูกต้อง',
    options: [
      { text: 'gas exchange = นำ O₂ เข้าและ CO₂ ออกจากร่างกาย · cellular respiration = สร้าง ATP จากกลูโคสหรือสารอาหาร', correct: true, why: 'สไลด์ 109' },
      { text: 'ทั้งสองคือสิ่งเดียวกัน', why: 'เกิดคนละระดับ: ร่างกาย vs เซลล์' },
      { text: 'gas exchange สร้าง ATP · cellular respiration แลกเปลี่ยนแก๊สที่ปอด', why: 'สลับกัน' },
      { text: 'cellular respiration ไม่ต้องใช้ O₂', why: 'สไลด์พูดถึง aerobic respiration ซึ่งใช้ O₂' },
    ],
    hints: ['ดูแผนภาพ Organismal level vs Cellular level'],
    explanation: 'สิ่งมีชีวิตได้พลังงานส่วนใหญ่ถึง 90% จากการสลายอาหารแบบใช้ O₂',
  },
  {
    id: 'ar-or-01', type: 'match', topic: 'ar-organs', source: 'สัตว์ 5.5 สไลด์ 110',
    prompt: 'จับคู่อวัยวะแลกเปลี่ยนแก๊สกับสัตว์ที่ใช้',
    pairs: [
      { left: 'เยื่อเซลล์ (wet body surface)', right: 'โปรโตซัว อะมีบา ฟองน้ำ cnidarians หนอนตัวแบน' },
      { left: 'ผิวหนัง (cutaneous)', right: 'ไส้เดือนดิน สัตว์สะเทินน้ำสะเทินบกบางชนิด' },
      { left: 'เหงือก (gill)', right: 'ดาวทะเล หนอนทะเล หอย กุ้ง ปลา' },
      { left: 'ท่อลม (trachea)', right: 'แมลง ตะขาบ กิ้งกือ' },
      { left: 'ปอด (lung)', right: 'แมงมุม หอยทากบก สัตว์มีกระดูกสันหลัง' },
    ],
    hints: ['ผิวหนังที่ใช้หายใจต้องชื้นตลอด'],
    explanation: 'respiratory surface ต้องบางและกว้าง อัตราการแพร่แปรผันตาม surface area',
  },
  {
    id: 'ar-or-02', type: 'mcq', topic: 'ar-organs', source: 'สัตว์ 5.5 สไลด์ 113',
    prompt: 'ข้อเสียของการใช้น้ำเป็น respiratory medium (เหงือก) คืออะไร',
    options: [
      { text: 'ปริมาณ O₂ ในน้ำต่ำกว่าในอากาศ โดยเฉพาะน้ำเค็มและน้ำอุ่น', correct: true, why: 'สไลด์ 113' },
      { text: 'ต้องระวังรักษาความชื้นของ respiratory surface', why: 'นั่นคือ "ข้อดี" ของเหงือก — ไม่ต้องระวังเรื่องความชื้น' },
      { text: 'น้ำมี O₂ มากเกินไป', why: 'กลับกัน' },
      { text: 'เหงือกไม่มีหลอดเลือดฝอย', why: 'เหงือกมีหลอดเลือดฝอยมาก' },
    ],
    hints: ['ข้อดี: ไม่ต้องรักษาความชื้น · ข้อเสีย: ?'],
    explanation: 'เหงือกจึงต้องดึง O₂ ให้ได้มากที่สุด: ให้น้ำผ่านตลอดเวลา และเลือดไหลสวนทางกับน้ำ (countercurrent)',
  },
  {
    id: 'ar-or-03', type: 'mcq', topic: 'ar-organs', source: 'สัตว์ 5.5 สไลด์ 114–115',
    prompt: 'countercurrent exchange ที่เหงือกปลาทำให้แลกเปลี่ยน O₂ ได้มีประสิทธิภาพเพราะอะไร',
    options: [
      { text: 'เลือดไหลสวนทางกับน้ำ ทำให้ O₂ ในน้ำสูงกว่าในเลือดเสมอตลอดความยาวเหงือก O₂ จึงแพร่เข้าเลือดได้ตลอด', correct: true, why: 'ภาพ: น้ำ 100→70→40→15% เทียบเลือด 90→60→30→5%' },
      { text: 'เลือดไหลไปทางเดียวกับน้ำ', why: 'countercurrent = สวนทาง' },
      { text: 'ปลากลั้นหายใจเพื่อเพิ่ม O₂', why: 'น้ำต้องไหลผ่านเหงือกตลอดเวลา' },
      { text: 'เลือดมี O₂ สูงกว่าน้ำ', why: 'ถ้าเป็นอย่างนั้น O₂ จะแพร่ออกจากเลือด' },
    ],
    hints: ['ดูตัวเลข % O₂ ในภาพสไลด์ 115'],
    explanation: 'ทุกจุดมี diffusion gradient จากน้ำเข้าเลือด',
  },
  {
    id: 'ar-or-04', type: 'order', topic: 'ar-organs', source: 'สัตว์ 5.5 สไลด์ 116',
    prompt: 'เรียงทางเดินของอากาศในระบบท่อลมของแมลง',
    steps: ['รูเปิด (spiracle)', 'ท่อลม (trachea)', 'ท่อลมฝอย (tracheole)', 'เซลล์กล้ามเนื้อ'],
    hints: ['tracheole สัมผัสเซลล์โดยตรง'],
    explanation: 'แมลงไม่ใช้ระบบไหลเวียนขนแก๊สแบบสัตว์มีกระดูกสันหลัง เพราะท่อลมนำอากาศถึงเซลล์โดยตรง',
  },
  {
    id: 'ar-lu-01', type: 'sort', topic: 'ar-lungs', source: 'สัตว์ 5.5 สไลด์ 118–120',
    prompt: 'จัดสัตว์ตามแบบการหายใจด้วยปอด',
    bins: [{ id: 'pos', label: 'positive pressure breathing' }, { id: 'neg', label: 'negative pressure breathing' }],
    items: [
      { text: 'กบ', bin: 'pos' },
      { text: 'คน', bin: 'neg' },
    ],
    hints: ['กบ "กลืน/ดัน" อากาศเข้าปอด · คน "ดูด" อากาศเข้า'],
    explanation: 'กบดึงอากาศทางรูจมูก ปิดจมูกและปาก แล้วกลืนอากาศเข้าหลอดลม · คนทำให้ช่องอกขยาย ความดันลด อากาศไหลเข้า',
  },
  {
    id: 'ar-lu-02', type: 'mcq', topic: 'ar-lungs', source: 'สัตว์ 5.5 สไลด์ 119',
    prompt: 'การหายใจของนกมีประสิทธิภาพสูงเพราะอะไร',
    options: [
      { text: 'มีถุงลม 8–9 ถุงทำหน้าที่คล้ายลูกสูบ และทิศทางอากาศกับเลือดเป็นแบบ cross-current ที่ parabronchi', correct: true, why: 'สไลด์ 119' },
      { text: 'แลกเปลี่ยนแก๊สในถุงลม (air sac) โดยตรง', why: 'การแลกเปลี่ยนเกิดที่ parabronchi ในปอด ถุงลมทำหน้าที่คล้ายลูกสูบ' },
      { text: 'ใช้ positive pressure breathing แบบกบ', why: 'ไม่ใช่กลไกในสไลด์' },
      { text: 'ปอดนกมีถุงลมย่อย (alveoli) 300 ล้านถุง', why: 'นั่นคือปอดคน' },
    ],
    hints: ['หายใจเข้า: อากาศส่วนใหญ่ไปที่ posterior air sac ก่อน'],
    explanation: 'หายใจเข้า: อากาศบางส่วนเข้าปอด ส่วนใหญ่ไป posterior air sac · หายใจออก: อากาศจาก posterior air sac ผ่านปอด',
  },
  {
    id: 'ar-lu-03', type: 'label', topic: 'ar-lungs', source: 'สัตว์ 5.5 สไลด์ 117',
    prompt: 'แตะบริเวณที่เกิดการแลกเปลี่ยนแก๊สในปอดคน',
    diagram: 'resp-tract', target: 'alveoli',
    hints: ['ปลายสุดของหลอดลมฝอย'],
    explanation: 'ปอด 2 ข้างมีถุงลม ~300 ล้านอัน พื้นที่รวม ~100 ตร.ม. (ครึ่งสนามเทนนิส)',
  },
  {
    id: 'ar-lu-04', type: 'tf', topic: 'ar-lungs', source: 'สัตว์ 5.5 สไลด์ 120',
    statement: 'ปอดคนมีถุงหุ้ม 2 ชั้น ชั้นนอกยึดติดกับผนังทรวงอก และช่องว่างระหว่างถุงทั้ง 2 ชั้นมีของเหลวบรรจุอยู่ (surfactant)',
    answer: true,
    why: 'ตามข้อความในสไลด์ 120',
    hints: ['ดูหัวข้อ "การหายใจโดยใช้ปอดในคน"'],
    explanation: 'คนใช้ negative pressure breathing',
  },
  {
    id: 'ar-me-01', type: 'order', topic: 'ar-mechanics', source: 'สัตว์ 5.5 สไลด์ 121–122',
    prompt: 'เรียงเหตุการณ์ขณะหายใจเข้า',
    steps: ['กล้ามเนื้อระหว่างซี่โครงหดตัว และกะบังลมหดตัว (เลื่อนลง)', 'ช่องอกขยาย ปริมาตรเพิ่ม', 'ความดันอากาศในทรวงอกลดลง (ต่ำกว่า 760 mmHg)', 'อากาศไหลเข้าปอด'],
    hints: ['Boyle\'s law: V ∝ 1/P'],
    explanation: 'หายใจออก: กล้ามเนื้อซี่โครงและกะบังลมคลาย → ช่องอกเล็กลง → ความดันเพิ่ม → อากาศไหลออก',
  },
  {
    id: 'ar-me-02', type: 'mcq', topic: 'ar-mechanics', source: 'สัตว์ 5.5 สไลด์ 121',
    prompt: 'ตามกฎของ Boyle ถ้าปริมาตรช่องอกเพิ่มขึ้น ความดันอากาศในทรวงอกจะเป็นอย่างไร',
    options: [
      { text: 'ลดลง อากาศจึงไหลเข้าปอด', correct: true, why: 'V ∝ 1/P' },
      { text: 'เพิ่มขึ้น อากาศจึงไหลออก', why: 'ปริมาตรเพิ่ม ความดันต้องลด' },
      { text: 'เท่าเดิม', why: 'P กับ V แปรผกผันกัน' },
      { text: 'เป็นศูนย์', why: 'ไม่มีเหตุผล' },
    ],
    hints: ['V ∝ 1/P'],
    explanation: 'อากาศไหลจากความดันสูง (บรรยากาศ) ไปต่ำ (ในทรวงอก)',
  },
  {
    id: 'ar-me-03', type: 'label', topic: 'ar-mechanics', source: 'สัตว์ 5.5 สไลด์ 121–122',
    prompt: 'แตะกล้ามเนื้อที่หดตัวแล้ว "เลื่อนต่ำลง" ขณะหายใจเข้า',
    diagram: 'resp-tract', target: 'diaphragm',
    hints: ['ทำหน้าที่คล้ายลูกสูบ'],
    explanation: 'กะบังลมหดตัว → เลื่อนลง · คลายตัว → โค้งขึ้น',
  },
  {
    id: 'ar-tr-01', type: 'mcq', topic: 'ar-transport', source: 'สัตว์ 5.5 สไลด์ 123',
    prompt: 'ศูนย์ควบคุมการหายใจอยู่ที่ใด และปัจจัยหลักที่ทำให้หายใจเร็วขึ้นคืออะไร',
    options: [
      { text: 'medulla oblongata และ pons — ปริมาณ CO₂ ในเลือดและในน้ำไขสันหลังที่เพิ่มขึ้น', correct: true, why: 'สไลด์ 123' },
      { text: 'cerebrum — ปริมาณ O₂ ที่เพิ่มขึ้น', why: 'ศูนย์ควบคุมอยู่ที่ก้านสมอง และตัวกระตุ้นหลักคือ CO₂' },
      { text: 'hypothalamus — อุณหภูมิ', why: 'hypothalamus ควบคุมอุณหภูมิ' },
      { text: 'medulla oblongata — pH ของเลือดที่สูงขึ้น', why: 'CO₂ เพิ่ม → pH "ลดลง" จึงกระตุ้นการหายใจ' },
    ],
    hints: ['CO₂ ทำให้เลือดเป็นกรด'],
    explanation: 'ออกกำลังกาย → CO₂ เพิ่ม → pH เลือดลด (ปกติ ~7.4) → medulla + ตัวรับที่ carotid artery/aorta → สั่งกล้ามเนื้อซี่โครงและกะบังลมให้หายใจเร็ว/ลึก',
  },
  {
    id: 'ar-tr-02', type: 'tf', topic: 'ar-transport', source: 'สัตว์ 5.5 สไลด์ 124',
    statement: 'แก๊สแพร่จากบริเวณที่มีความดันย่อย (partial pressure) สูงไปต่ำ เช่น O₂ แพร่จากถุงลม (PO₂ 104 mmHg) เข้าสู่เลือดที่มาจาก pulmonary artery (PO₂ 40 mmHg)',
    answer: true,
    why: 'ตัวเลขจากภาพสไลด์ 124',
    hints: ['104 > 40'],
    explanation: 'ที่เนื้อเยื่อ: PO₂ < 40, PCO₂ > 45 → O₂ แพร่จากเลือดเข้าเนื้อเยื่อ, CO₂ แพร่ออกจากเนื้อเยื่อเข้าเลือด',
  },
  {
    id: 'ar-tr-03', type: 'mcq', topic: 'ar-transport', source: 'สัตว์ 5.5 สไลด์ 125',
    prompt: 'CO₂ ส่วนใหญ่ถูกขนส่งในเลือดในรูปใด (ตามภาพในสไลด์)',
    options: [
      { text: 'ไบคาร์บอเนตไอออน (HCO₃⁻) ใน plasma ซึ่งเกิดจาก CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻ ในเม็ดเลือดแดง', correct: true, why: 'HCO₃⁻ ออกไปใน plasma (chloride shift) ส่วน H⁺ จับกับ Hb' },
      { text: 'จับกับเหล็กใน heme แทน O₂', why: 'บางส่วนจับ Hb เป็น HbCO₂ แต่ไม่ได้จับที่ตำแหน่งเดียวกับ O₂ และไม่ใช่รูปหลักในภาพ' },
      { text: 'ละลายเป็นแก๊สใน plasma ทั้งหมด', why: 'CO₂ ส่วนน้อยละลายตรง ๆ' },
      { text: 'ถูกเปลี่ยนเป็น O₂ ในเลือด', why: 'เป็นไปไม่ได้' },
    ],
    hints: ['ดูภาพ CO₂ pickup ที่ systemic capillary'],
    explanation: 'ที่ปอด ปฏิกิริยาย้อนกลับ: HCO₃⁻ + H⁺ → H₂CO₃ → CO₂ + H₂O แล้ว CO₂ แพร่ออกสู่ถุงลม',
  },
];
