// =====================================================================
// Practice questions — พืช 5.4: internal transport (water & sugar).
// Source deck: Unit_5.4Transport (ผศ.ดร.อัญชลี ใจดี).
// Editing rules: see the top of p-structure.ts.
// Numeric questions use src/data/calc.ts (`compute`), so the test can
// check the stored answer.
// =====================================================================
import { turgorAtEquilibrium, waterPotential } from '../calc';
import type { Question } from '../types';

export const pTransport: Question[] = [
  // ---------------------------------------------------------- pt-process
  {
    id: 'pt-proc-01', type: 'mcq', topic: 'pt-process', source: 'พืช 5.4 สไลด์ 2–5',
    prompt: 'ทำไมพืชจึงไม่ใช้ "การแพร่" ลำเลียงน้ำจากรากขึ้นไปถึงยอดไม้สูง ๆ',
    options: [
      { text: 'การแพร่ช้ามากเมื่อระยะทางไกล จึงต้องใช้ bulk flow ที่ขับเคลื่อนด้วยความต่างของความดัน', correct: true, why: 'สไลด์ 4: Diffusion is slow over long distances' },
      { text: 'การแพร่ต้องใช้พลังงาน ATP มาก', why: 'การแพร่ไม่ใช้ ATP เกิดจากการเคลื่อนที่แบบสุ่มด้วยความร้อน' },
      { text: 'น้ำแพร่ได้เฉพาะจากความเข้มข้นต่ำไปสูง', why: 'การแพร่คือจากความเข้มข้นสูงไปต่ำ' },
      { text: 'ไซเลมเป็นเซลล์ที่ตายแล้ว การแพร่จึงเกิดไม่ได้', why: 'ไม่ใช่เหตุผลที่สไลด์ให้ไว้' },
    ],
    hints: ['ดูกราฟสไลด์ 4: ยิ่งไกล ความต่างความเข้มข้นยิ่งแบนลง'],
    explanation: 'การแพร่: ขับด้วย concentration gradient (Fick\'s law) — ดีในระยะสั้น · bulk flow: ขับด้วย pressure gradient — ใช้ลำเลียงระยะไกล',
  },
  {
    id: 'pt-proc-02', type: 'match', topic: 'pt-process', source: 'พืช 5.4 สไลด์ 2, 5, 10',
    prompt: 'จับคู่กระบวนการกับ "แรงขับเคลื่อน"',
    pairs: [
      { left: 'การแพร่ (diffusion)', right: 'ความต่างของความเข้มข้น (concentration gradient)' },
      { left: 'การไหล (bulk flow)', right: 'ความต่างของความดัน (pressure gradient)' },
      { left: 'ออสโมซิส (osmosis)', right: 'ความต่างของพลังงานอิสระของน้ำ (water potential gradient)' },
      { left: 'การคายน้ำ (transpiration)', right: 'ความต่างความเข้มข้นของไอน้ำ' },
    ],
    hints: ['การคายน้ำเป็น "การแพร่" ของไอน้ำ'],
    explanation: 'จำคู่แรงขับเคลื่อนให้ได้ ข้อสอบชอบถามว่าแต่ละขั้นของการลำเลียงน้ำใช้กระบวนการอะไร',
  },
  {
    id: 'pt-proc-03', type: 'mcq', topic: 'pt-process', source: 'พืช 5.4 สไลด์ 5',
    prompt: 'ตามสมการของ Poiseuille ถ้าท่อลำเลียงมีรัศมีใหญ่ขึ้น (ปัจจัยอื่นเท่าเดิม) อัตราการไหล (volume flow rate) จะเป็นอย่างไร',
    options: [
      { text: 'เพิ่มขึ้น (แปรผันตรงกับรัศมีของท่อ)', correct: true, why: 'สไลด์ 5: อัตราการไหลแปรผันโดยตรงกับรัศมีของท่อลำเลียง' },
      { text: 'ลดลง', why: 'ท่อกว้างขึ้นทำให้ไหลได้มากขึ้น ไม่ใช่น้อยลง' },
      { text: 'เท่าเดิม เพราะขึ้นกับความดันอย่างเดียว', why: 'รัศมีอยู่ในสมการด้วย (π r⁴ / 8η)' },
      { text: 'เป็นศูนย์', why: 'ไม่มีเหตุผล' },
    ],
    hints: ['ดูตัวแปร r ในสมการ volume flow rate = (π r⁴/8η)(ΔΨp/Δx)'],
    explanation: 'สไลด์เขียนว่าแปรผันตรงกับรัศมี (ในสมการรัศมีอยู่ในรูป r⁴ — ยิ่งเพิ่มรัศมี อัตราการไหลยิ่งเพิ่มมาก)',
  },
  // ---------------------------------------------------------- pt-water
  {
    id: 'pt-water-01', type: 'match', topic: 'pt-water', source: 'พืช 5.4 สไลด์ 6',
    prompt: 'จับคู่สมบัติของน้ำกับคำอธิบาย',
    pairs: [
      { left: 'polar molecule', right: 'เป็นตัวทำละลายที่ดี' },
      { left: 'cohesion', right: 'โมเลกุลน้ำยึดกันเองด้วยพันธะไฮโดรเจน' },
      { left: 'adhesion', right: 'น้ำยึดกับผนัง (เช่น ผนังหลอดแก้ว/ผนังเซลล์)' },
      { left: 'high tensile strength', right: 'น้ำทนต่อแรงดึง (tension) ได้ เพราะพันธะไฮโดรเจน' },
    ],
    hints: ['co- = ด้วยกันเอง · ad- = ติดกับสิ่งอื่น'],
    explanation: 'สมบัติเหล่านี้ทำให้น้ำในไซเลมถูก "ดึง" ขึ้นไปเป็นสายต่อเนื่องได้ (cohesion + adhesion)',
  },
  {
    id: 'pt-water-02', type: 'tf', topic: 'pt-water', source: 'พืช 5.4 สไลด์ 6',
    statement: 'ในหลอดแก้วเล็ก (capillarity) น้ำขึ้นไปได้เพราะ adhesion ระหว่างน้ำกับผนังหลอดดึงน้ำขึ้น ส่วน cohesion ยึดโมเลกุลน้ำไว้ด้วยกัน',
    answer: true,
    why: 'ตรงกับคำอธิบายในสไลด์ 6',
    hints: ['adhesion = ติดผนัง'],
    explanation: 'ทั้ง adhesion และ cohesion เกิดจากพันธะไฮโดรเจน',
  },
  // ---------------------------------------------------------- pt-psi
  {
    id: 'pt-psi-01', type: 'mcq', topic: 'pt-psi', source: 'พืช 5.4 สไลด์ 11–12',
    prompt: 'ข้อใดถูกต้องเกี่ยวกับ water potential (Ψw)',
    options: [
      { text: 'น้ำกลั่นที่ 1 atm มี Ψw = 0 และสารละลายมี Ψw น้อยกว่า 0', correct: true, why: 'ตัวถูกละลายยึดโมเลกุลน้ำไว้ พลังงานอิสระของน้ำจึงลดลง' },
      { text: 'สารละลายเข้มข้นมี Ψw สูงกว่าน้ำกลั่น', why: 'กลับกัน — ยิ่งเข้มข้น Ψs ยิ่งติดลบ Ψw ยิ่งต่ำ' },
      { text: 'Ψs มีค่าเป็นบวกเสมอ', why: 'Ψs เป็นลบ (หรือ 0 สำหรับน้ำกลั่น)' },
      { text: 'น้ำเคลื่อนที่จาก Ψw ต่ำไปหา Ψw สูง', why: 'น้ำไปจาก Ψw สูง → ต่ำ' },
    ],
    hints: ['Ψw = Ψs + Ψp', 'ตัวถูกละลายทำให้พลังงานอิสระของน้ำ "ลดลง"'],
    explanation: 'Ψw คือพลังงานอิสระของน้ำ (ค่าเชิงเปรียบเทียบ) น้ำกลั่น = 0 · Ψs ลบ ขึ้นกับความเข้มข้น · Ψp บวก = แรงดัน (turgor), ลบ = แรงดึง (tension)',
  },
  {
    id: 'pt-psi-02', type: 'numeric', topic: 'pt-psi', source: 'พืช 5.4 สไลด์ 14',
    prompt: 'เซลล์เหี่ยว (flaccid) มี Ψs = −0.732 MPa และ Ψp = 0 MPa นำไปแช่ในสารละลายน้ำตาลที่มี Ψw = −0.244 MPa เมื่อถึงจุดสมดุล (Ψs ของเซลล์ถือว่าคงเดิม) เซลล์จะมี Ψp เท่าใด',
    answer: 0.488, unit: 'MPa',
    compute: () => turgorAtEquilibrium(-0.244, -0.732),
    slips: [
      { value: -0.488, msg: 'เครื่องหมายผิด — น้ำออสโมซิสเข้าเซลล์ ทำให้เกิดแรงดันเต่ง Ψp จึงเป็นบวก' },
      { value: -0.976, msg: 'นำค่ามาบวกกัน — ต้องใช้ Ψp = Ψw − Ψs' },
      { value: 0.244, msg: 'นี่คือขนาดของ Ψw สารละลาย — ยังไม่ได้ลบ Ψs ของเซลล์' },
    ],
    hints: ['ที่จุดสมดุล Ψw ของเซลล์ = Ψw ของสารละลาย = −0.244 MPa', 'Ψp = Ψw − Ψs'],
    explanation: 'Ψp = Ψw − Ψs = −0.244 − (−0.732) = +0.488 MPa — น้ำเข้าเซลล์เพราะ Ψw เซลล์ (−0.732) ต่ำกว่าสารละลาย (−0.244)',
  },
  {
    id: 'pt-psi-03', type: 'numeric', topic: 'pt-psi', source: 'พืช 5.4 สไลด์ 33 (ตัวเลขในภาพ)',
    prompt: 'ใน sieve tube ใกล้แหล่งสร้าง (source) มี Ψs = −1.7 MPa และ Ψp = 0.6 MPa ค่า Ψw เท่ากับเท่าใด',
    answer: -1.1, unit: 'MPa',
    compute: () => waterPotential(-1.7, 0.6),
    slips: [
      { value: -2.3, msg: 'ลืมว่า Ψp เป็นบวก ต้อง "บวก" 0.6 ไม่ใช่ลบ' },
      { value: 1.1, msg: 'เครื่องหมายผิด Ψw ติดลบเพราะ Ψs ติดลบมากกว่า' },
    ],
    hints: ['Ψw = Ψs + Ψp'],
    explanation: 'Ψw = −1.7 + 0.6 = −1.1 MPa (ตรงกับภาพ pressure-flow model)',
  },
  {
    id: 'pt-psi-04', type: 'mcq', topic: 'pt-psi', source: 'พืช 5.4 สไลด์ 14; แบบฝึกหัดสไลด์ 40',
    prompt: 'เซลล์เหี่ยว (Ψw = −0.732 MPa) ถูกแช่ในสารละลายน้ำตาล (Ψw = −0.244 MPa) ข้อใดกล่าวถูกต้อง',
    options: [
      { text: 'ที่จุดสมดุล เซลล์มี Ψp ที่เพิ่มขึ้น', correct: true, why: 'น้ำออสโมซิสเข้าเซลล์ ดันผนังเซลล์ → แรงดันเต่งเพิ่มจาก 0 เป็น 0.488 MPa' },
      { text: 'เซลล์ก่อนแช่มี Ψw มากกว่าสารละลายน้ำตาล', why: '−0.732 น้อยกว่า −0.244' },
      { text: 'เซลล์ก่อนแช่มี Ψw เท่ากับสารละลายน้ำตาล', why: 'ไม่เท่า น้ำจึงเคลื่อนที่' },
      { text: 'ที่จุดสมดุล เซลล์มี Ψp ที่ลดลง', why: 'Ψp เพิ่มขึ้น ไม่ใช่ลดลง' },
    ],
    hints: ['−0.732 กับ −0.244 ตัวไหนมากกว่า?', 'น้ำเข้าเซลล์ → เซลล์เต่ง'],
    explanation: 'น้ำไปจาก Ψw สูง (สารละลาย) → ต่ำ (เซลล์) จนเท่ากัน ระหว่างนั้น Ψp ของเซลล์เพิ่มขึ้น',
  },
  {
    id: 'pt-psi-05', type: 'tf', topic: 'pt-psi', source: 'พืช 5.4 สไลด์ 15',
    statement: 'เมื่อถึงจุดสมดุลที่ Ψw ภายในเซลล์เท่ากับภายนอก จะไม่มีการเคลื่อนที่สุทธิของน้ำ',
    answer: true,
    why: 'ไม่มีความต่างของ Ψw = ไม่มีแรงขับเคลื่อน (โมเลกุลน้ำยังเคลื่อนที่ไปมา แต่เข้าเท่ากับออก)',
    hints: ['"สุทธิ" = เข้า − ออก'],
    explanation: 'คำถามท้ายสไลด์ 15',
  },
  {
    id: 'pt-psi-06', type: 'mcq', topic: 'pt-psi', source: 'พืช 5.4 สไลด์ 15',
    prompt: 'นำเซลล์พืชไปแช่ใน hypertonic solution (1 M KCl) จะเกิดอะไรขึ้น',
    options: [
      { text: 'น้ำออกจากเซลล์ เซลล์เสียแรงดันเต่ง', correct: true, why: 'Ψw ของสารละลายต่ำกว่าในเซลล์ น้ำจึงออก' },
      { text: 'น้ำเข้าเซลล์ เซลล์เต่งขึ้น', why: 'นี่คือเมื่อแช่ในน้ำกลั่น' },
      { text: 'ไม่มีการเปลี่ยนแปลง', why: 'มีความต่างของ Ψw น้ำจึงเคลื่อนที่' },
      { text: 'KCl ถูกดูดเข้าเซลล์จน Ψp เพิ่มขึ้น', why: 'สิ่งที่เคลื่อนที่หลักคือน้ำออกจากเซลล์' },
    ],
    hints: ['hypertonic = เข้มข้นกว่า = Ψw ต่ำกว่า'],
    explanation: 'ภาพสไลด์ 15: ในน้ำกลั่น เซลล์เต่ง · ใน 1 M KCl เซลล์เสียแรงดันเต่ง',
  },
  // ---------------------------------------------------------- pt-root
  {
    id: 'pt-root-01', type: 'mcq', topic: 'pt-root', source: 'พืช 5.4 สไลด์ 9, 16; แบบฝึกหัดสไลด์ 37',
    prompt: 'เซลล์ขนรากดูดน้ำจากดินเข้าสู่ภายในเซลล์ด้วยกระบวนการใด',
    options: [
      { text: 'ออสโมซิส (osmosis)', correct: true, why: 'สไลด์ 16: การดูดน้ำทางรากใช้กระบวนการแพร่ผ่านเยื่อ (osmosis)' },
      { text: 'bulk flow', why: 'bulk flow คือการลำเลียงในไซเลม' },
      { text: 'การคายน้ำ', why: 'การคายน้ำเกิดที่ใบ' },
      { text: 'active transport ของน้ำ', why: 'น้ำเคลื่อนตาม Ψw ไม่ได้ถูกปั๊มด้วย ATP' },
    ],
    hints: ['น้ำต้องผ่าน "เยื่อหุ้มเซลล์" ของขนราก'],
    explanation: '3 ขั้น: (1) รากดูดน้ำ = osmosis (2) คายน้ำทางใบ = diffusion (3) ลำเลียงในไซเลม = transpiration pull / bulk flow',
  },
  {
    id: 'pt-root-02', type: 'mcq', topic: 'pt-root', source: 'พืช 5.4 สไลด์ 18; แบบฝึกหัดสไลด์ 41',
    prompt: 'อัตราการดูดน้ำบริเวณใกล้ปลายรากสูงกว่าบริเวณที่ห่างออกไป เป็นเพราะรากมีเนื้อเยื่ออะไร (ตามกราฟ Less suberized → More suberized)',
    options: [
      { text: 'endodermis', correct: true, why: 'บริเวณที่ห่างจากปลายราก endodermis มี suberin สะสมมากขึ้น จึงลดการลำเลียงน้ำ' },
      { text: 'pericycle', why: 'pericycle สร้างรากแขนง ไม่ได้เกี่ยวกับ suberin' },
      { text: 'xylem', why: 'xylem เป็นท่อลำเลียงน้ำ ไม่ได้ทำให้การดูดน้ำลดลง' },
      { text: 'parenchyma', why: 'ไม่ใช่เนื้อเยื่อที่มี suberin' },
    ],
    hints: ['"suberized" = มี suberin สะสม'],
    explanation: 'endodermis (Casparian strip) ลดการลำเลียงน้ำในแนวรัศมี และทำให้เกิด water pressure gradient ในไซเลม — ปลายรากที่ยังไม่มี endodermis สมบูรณ์จึงดูดน้ำได้มากที่สุด',
  },
  {
    id: 'pt-root-03', type: 'mcq', topic: 'pt-root', source: 'แบบฝึกหัด 5.4 สไลด์ 40',
    status: 'needs-key',
    todo: 'TODO(professor-method): สไลด์ 16 บอกว่า Ψw ขนราก "ต่ำกว่า" Ψw น้ำในดิน แต่ไม่มีตัวเลือกใดพูดแบบนั้นตรง ๆ — รอเฉลย',
    prompt: 'การดูดน้ำเข้าสู่เซลล์ขนราก เกิดได้เพราะเซลล์ขนรากมีพลังงานของน้ำเป็นอย่างไร',
    options: [
      { text: 'มี Ψw สูงกว่า Ψw ของน้ำในดิน', why: '' },
      { text: 'มี Ψw เท่ากับ Ψw ของน้ำในดิน', why: '' },
      { text: 'มี Ψp สูงกว่า Ψw ของน้ำในดิน', why: '' },
      { text: 'มี Ψs ต่ำกว่า Ψw ของน้ำในดิน', correct: true, why: '' },
    ],
    hints: ['(รอเฉลย)'],
    explanation: '(รอเฉลยจากอาจารย์)',
  },
  {
    id: 'pt-root-04', type: 'mcq', topic: 'pt-root', source: 'แบบฝึกหัด 5.4 สไลด์ 41',
    status: 'needs-key',
    todo: 'TODO(professor-method): สไลด์ไม่ได้บอกว่าเส้นทางใดในคอร์เท็กซ์ใช้ bulk flow',
    prompt: 'เส้นทางการลำเลียงน้ำผ่านชั้น cortex ไปยัง xylem เส้นทางใดที่ใช้กระบวนการ bulk flow',
    options: [
      { text: 'apoplast', correct: true, why: '' },
      { text: 'symplast', why: '' },
      { text: 'transmembrane', why: '' },
      { text: 'ทุกเส้นทาง', why: '' },
    ],
    hints: ['(รอเฉลย)'],
    explanation: '(รอเฉลยจากอาจารย์)',
  },
  // ---------------------------------------------------------- pt-xylem
  {
    id: 'pt-xy-01', type: 'mcq', topic: 'pt-xylem', source: 'พืช 5.4 สไลด์ 8–9; แบบฝึกหัดสไลด์ 38–39',
    prompt: 'แรงที่ขับดันให้เกิดการลำเลียงน้ำในเนื้อเยื่อไซเลมจากรากไปยังใบพืช คือข้อใด',
    options: [
      { text: 'transpiration pull', correct: true, why: 'การคายน้ำที่ใบสร้างแรงดึง (tension) ดึงสายน้ำในไซเลมขึ้นไป' },
      { text: 'water potential', why: 'Ψw เป็นค่าพลังงาน ไม่ใช่ชื่อแรง' },
      { text: 'bulk flow', why: 'bulk flow คือ "กระบวนการ" (การไหล) ส่วนแรงที่ทำให้ไหลคือ transpiration pull' },
      { text: 'osmosis', why: 'osmosis คือขั้นรากดูดน้ำ' },
    ],
    hints: ['สไลด์ 8: Water rises to treetops by …', 'แยก "แรง" กับ "กระบวนการ"'],
    explanation: 'สไลด์ 9: (3) การลำเลียงน้ำใน xylem = transpiration pull: bulk flow',
  },
  {
    id: 'pt-xy-02', type: 'mcq', topic: 'pt-xylem', source: 'พืช 5.4 สไลด์ 9; แบบฝึกหัดสไลด์ 38–39',
    prompt: 'น้ำในเนื้อเยื่อไซเลมที่ตำแหน่งใดมี water potential มากที่สุด',
    options: [
      { text: 'ไซเลมที่อยู่ใกล้ปลายราก', correct: true, why: 'Ψw ลดลงเรื่อย ๆ จากดิน → ราก → ลำต้น → ใบ → อากาศ น้ำจึงไหลขึ้น' },
      { text: 'ไซเลมบริเวณโคนต้น', why: 'Ψw ต่ำกว่าที่ราก (−0.8 vs −0.6 MPa ในภาพ)' },
      { text: 'ไซเลมบริเวณปลายยอด', why: 'ยิ่งสูง Ψw ยิ่งต่ำ' },
      { text: 'ไซเลมในแผ่นใบ', why: 'ใบมี Ψw ต่ำ (−1.0 MPa ที่ผนังเซลล์ใบ)' },
    ],
    hints: ['น้ำไหลจาก Ψw สูง → ต่ำ แล้วน้ำในต้นไหลไปทางไหน?'],
    explanation: 'ภาพสไลด์ 9: ดิน −0.3, ไซเลมราก −0.6, ไซเลมลำต้น −0.8, ผนังเซลล์ใบ −1.0, ช่องอากาศในใบ −7.0, อากาศ −100 MPa',
  },
  {
    id: 'pt-xy-03', type: 'order', topic: 'pt-xylem', source: 'พืช 5.4 สไลด์ 9',
    prompt: 'เรียงตำแหน่งจาก water potential "สูงที่สุด" ไป "ต่ำที่สุด"',
    steps: ['น้ำในดิน (−0.3 MPa)', 'ไซเลมในราก (−0.6 MPa)', 'ไซเลมในลำต้น (−0.8 MPa)', 'ผนังเซลล์ใบ (−1.0 MPa)', 'ช่องอากาศในใบ (−7.0 MPa)', 'อากาศภายนอก (−100 MPa)'],
    hints: ['ค่าที่ติดลบน้อย = สูงกว่า'],
    explanation: 'น้ำเคลื่อนตาม water potential gradient จากดินไปสู่อากาศ',
  },
  {
    id: 'pt-xy-04', type: 'mcq', topic: 'pt-xylem', source: 'พืช 5.4 สไลด์ 20–21; แบบฝึกหัดสไลด์ 37',
    prompt: 'เซลล์ที่เรียงต่อกันเป็นท่อลำเลียงน้ำ คือข้อใด',
    options: [
      { text: 'tracheid และ vessel element', correct: true, why: 'เป็นเซลล์ของไซเลม' },
      { text: 'sieve tube และ companion cell', why: 'เป็นเซลล์ของโฟลเอ็ม ลำเลียงอาหาร' },
      { text: 'sclereid และ fiber', why: 'เป็น sclerenchyma ให้ความแข็งแรง' },
      { text: 'parenchyma และ pith', why: 'เป็น ground tissue' },
    ],
    hints: ['ไซเลมมี 2 แบบ: ยาวเรียว (มี pit) กับแบบที่มี perforation plate'],
    explanation: 'ลักษณะเซลล์ไซเลม: ผนังหนาทนแรงดันได้ · ด้านข้างมีส่วนผนังบาง (pit) ให้น้ำผ่านไปเซลล์ข้าง ๆ · หัวท้ายมีช่องเปิดให้น้ำผ่าน',
  },
  {
    id: 'pt-xy-05', type: 'tf', topic: 'pt-xylem', source: 'พืช 5.4 สไลด์ 22',
    statement: 'ฟองอากาศในไซเลม (cavitation) ถูกกำจัดได้ด้วยกลไกต่าง ๆ เช่น แรงดันราก ซึ่งเห็นได้จากหยดน้ำที่ขอบใบ',
    answer: true,
    why: 'สไลด์ 22 มีภาพหยดน้ำขอบใบเป็นสิ่งแสดงถึงการมีแรงดันราก',
    hints: ['ดูภาพใบไม้ที่มีหยดน้ำรอบขอบ'],
    explanation: 'แรงขับเคลื่อนน้ำในไซเลม = hydrostatic pressure gradient และไซเลมมีแรงต้านน้อยกว่า cortex',
  },
  // ---------------------------------------------------------- pt-transpiration
  {
    id: 'pt-tr-01', type: 'mcq', topic: 'pt-transpiration', source: 'พืช 5.4 สไลด์ 24',
    prompt: 'ข้อใด "ไม่" ถูกต้องเกี่ยวกับปัจจัยที่มีผลต่อการคายน้ำ',
    options: [
      { text: 'CO₂ สูงทำให้ปากใบเปิดกว้างขึ้น', correct: true, why: 'ผิด — CO₂ สูงมีผลให้ปากใบเปิด "น้อยลง"' },
      { text: 'แสงทำให้ปากใบเปิด', why: 'ถูกต้องตามสไลด์' },
      { text: 'ภาวะขาดน้ำทำให้ปากใบปิด', why: 'ถูกต้องตามสไลด์' },
      { text: 'ลมเพิ่มการคายน้ำ', why: 'ถูกต้องตามสไลด์' },
    ],
    hints: ['ถามข้อที่ "ไม่ถูก"'],
    explanation: 'แสง → ปากใบเปิด · ความชื้น/ขาดน้ำ → ปิด · ลม → คายน้ำมากขึ้น · CO₂ สูง → ปากใบเปิดน้อยลง',
  },
  {
    id: 'pt-tr-02', type: 'mcq', topic: 'pt-transpiration', source: 'พืช 5.4 สไลด์ 23–24; แบบฝึกหัดสไลด์ 37',
    prompt: 'น้ำในไซเลมมีสถานะเป็นของเหลว ส่วนน้ำที่ออกจากปากใบมีสถานะใด และการคายน้ำมีประโยชน์อะไร',
    options: [
      { text: 'แก๊ส (ไอน้ำ) — การเปลี่ยนสถานะดึงความร้อนจากเซลล์ ช่วยลดอุณหภูมิใบ', correct: true, why: 'สไลด์ 23–24' },
      { text: 'ของเหลว — ช่วยรดน้ำให้ดิน', why: 'น้ำแพร่ออกในรูปไอน้ำ' },
      { text: 'ของแข็ง — ช่วยสะท้อนแสง', why: 'ไม่ใช่' },
      { text: 'แก๊ส — ช่วยเพิ่มอุณหภูมิใบ', why: 'การระเหยดึงความร้อนออก จึงลดอุณหภูมิ' },
    ],
    hints: ['การระเหยต้องใช้ความร้อน'],
    explanation: 'แรงขับเคลื่อนการคายน้ำคือความต่างความเข้มข้นของไอน้ำ (ในใบ 100% RH, นอกใบเช่น 70% RH)',
  },
  {
    id: 'pt-tr-03', type: 'order', topic: 'pt-transpiration', source: 'พืช 5.4 สไลด์ 9, 25',
    prompt: 'เรียงขั้นตอนการลำเลียงน้ำในต้นพืช',
    steps: ['รากดูดน้ำจากดิน (osmosis)', 'น้ำผ่านคอร์เท็กซ์ ผ่าน endodermis เข้าสู่ไซเลม', 'น้ำถูกดึงขึ้นในไซเลม (transpiration pull: bulk flow)', 'น้ำระเหยในใบและแพร่ออกทางปากใบ (transpiration: diffusion)'],
    hints: ['เริ่มที่ดิน จบที่อากาศ'],
    explanation: 'สรุปสไลด์ 25: (1) ราก osmosis → (3) ไซเลม bulk flow → (2) ใบ diffusion',
  },
  // ---------------------------------------------------------- pt-phloem
  {
    id: 'pt-ph-01', type: 'mcq', topic: 'pt-phloem', source: 'พืช 5.4 สไลด์ 27',
    prompt: 'การควั่นเปลือกไม้ (girdling) ออกเป็นวง ทำให้เกิดอะไรขึ้น และบอกอะไรเรา',
    options: [
      { text: 'มีการสะสมอาหารที่เนื้อเยื่อเหนือรอยควั่น แสดงว่าโฟลเอ็มในเปลือกลำเลียงอาหาร', correct: true, why: 'Mason & Maskell 1928 — เป็นที่มาของการศึกษาเนื้อเยื่อลำเลียงอาหาร' },
      { text: 'มีการสะสมอาหารใต้รอยควั่น', why: 'อาหารไหลจากใบ (ด้านบน) ลงมาแล้วติดที่รอยควั่น จึงสะสมด้านบน' },
      { text: 'ต้นเหี่ยวทันทีเพราะน้ำขึ้นไม่ได้', why: 'ไซเลม (เนื้อไม้) ยังอยู่ น้ำยังขึ้นได้' },
      { text: 'ไม่เกิดอะไรขึ้นเพราะเปลือกไม่มีท่อลำเลียง', why: 'เปลือกมีโฟลเอ็ม' },
    ],
    hints: ['ควั่นเปลือก = ตัดโฟลเอ็มออก แต่เหลือเนื้อไม้ (ไซเลม)'],
    explanation: 'หลักฐานอีกชิ้น: ให้ ¹⁴CO₂ ที่ใบ แล้วพบน้ำตาลที่มี ¹⁴C ในโฟลเอ็ม (sieve elements)',
  },
  {
    id: 'pt-ph-02', type: 'mcq', topic: 'pt-phloem', source: 'พืช 5.4 สไลด์ 31; แบบฝึกหัดสไลด์ 43',
    prompt: 'ใน phloem sap พบสารชนิดใดในปริมาณมากที่สุด',
    options: [
      { text: 'น้ำตาล', correct: true, why: 'phloem sap ของละหุ่ง: sugars 80–106 mg/ml มากกว่าสารอื่นมาก' },
      { text: 'ฮอร์โมนพืช ได้แก่ auxin gibberellin และ abscisic acid', why: 'พบจริงแต่ปริมาณน้อยมาก' },
      { text: 'กรดอะมิโน', why: '5.2 mg/ml น้อยกว่าน้ำตาลมาก' },
      { text: 'แร่ธาตุ เช่น K⁺ Cl⁻ และ Mg²⁺', why: 'มีเพียงไม่กี่ mg/ml' },
    ],
    hints: ['โฟลเอ็ม = ท่อลำเลียง "อาหาร"'],
    explanation: 'เก็บ phloem sap โดยใช้เพลี้ย aphid ที่แทงปากเข้า sieve element',
  },
  {
    id: 'pt-ph-03', type: 'mcq', topic: 'pt-phloem', source: 'พืช 5.4 สไลด์ 26, 29; แบบฝึกหัดสไลด์ 42',
    prompt: 'การลำเลียงน้ำตาลในโฟลเอ็มเหมือนหรือต่างจากการลำเลียงน้ำและแร่ธาตุในไซเลมอย่างไร',
    options: [
      { text: 'เหมือนกัน คือมีทิศทางจากรากไปยังส่วนยอด', truth: false, why: 'โฟลเอ็มไม่มีทิศทางแน่นอน (source → sink อาจขึ้นหรือลง)' },
      { text: 'เหมือนกัน คือใช้กระบวนการไหล (bulk flow)', truth: true, why: 'ถูก ทั้งสองใช้ bulk flow (pressure gradient)' },
      { text: 'ต่างกัน คือการลำเลียงในโฟลเอ็มเป็นแบบจากแหล่งสร้าง (source) ไปแหล่งใช้น้ำตาล (sink)', truth: true, why: 'ถูก' },
      { combo: [1, 2], correct: true, why: 'ทั้งสองข้อถูก' },
    ],
    hints: ['ทิศทางของโฟลเอ็ม "ไม่แน่นอน"'],
    explanation: 'ไซเลม: ราก → ยอด, ขับด้วย transpiration pull · โฟลเอ็ม: source → sink, ขับด้วย pressure gradient (Münch) · ทั้งคู่เป็น bulk flow',
  },
  {
    id: 'pt-ph-04', type: 'mcq', topic: 'pt-phloem', source: 'พืช 5.4 สไลด์ 29; แบบฝึกหัดสไลด์ 42',
    prompt: 'เซลล์ที่พบในเนื้อเยื่อโฟลเอ็มต่างจากเซลล์ในไซเลมอย่างไร',
    options: [
      { text: 'ทั้ง sieve tube และ companion cell เป็นเซลล์ที่มีชีวิต แต่ vessel และ tracheid เป็นเซลล์ที่ตายแล้ว', truth: true, correct: true, why: 'เซลล์ลำเลียงน้ำเป็นท่อกลวงที่ตายแล้ว ส่วนเซลล์โฟลเอ็มมีชีวิต (มีผนังเซลล์ปฐมภูมิ)' },
      { text: 'sieve tube มีผนังเซลล์แบบทุติยภูมิ แต่ vessel เป็นแบบปฐมภูมิ', truth: false, why: 'กลับกัน: เซลล์โฟลเอ็มมีผนังปฐมภูมิ (สไลด์ 29), vessel มีผนังหนา' },
      { text: 'companion cell มี plasmodesmata แต่ vessel มีนิวเคลียส', truth: false, why: 'vessel เป็นเซลล์ที่ตายแล้ว ไม่มีนิวเคลียส' },
      { combo: [0, 2], why: 'ข้อ C ผิด จึงเลือก "A และ C" ไม่ได้' },
    ],
    hints: ['ตรวจข้อ C: vessel element มีชีวิตหรือไม่?'],
    explanation: 'สไลด์ 29: เนื้อเยื่อโฟลเอ็มประกอบด้วยเซลล์ 2 ชนิดที่มีผนังเซลล์ปฐมภูมิ คือ sieve tube element และ companion cell ทำงานร่วมกัน',
  },
  // ---------------------------------------------------------- pt-pressureflow
  {
    id: 'pt-pf-01', type: 'order', topic: 'pt-pressureflow', source: 'พืช 5.4 สไลด์ 33',
    prompt: 'เรียงขั้นตอนตามแบบจำลอง pressure-flow (Münch)',
    steps: [
      'ที่ source น้ำตาลถูกลำเลียงแบบใช้พลังงานเข้าสู่ companion cell และ sieve element',
      'Ψs ใน sieve element ลดลง น้ำออสโมซิสเข้ามา เกิดแรงดัน (Ψp) บวกสูง',
      'ความต่างของ hydrostatic pressure ดัน phloem sap ไหลจาก source ไป sink',
      'ที่ sink น้ำตาลออกจาก sieve element ไปยังเซลล์แหล่งใช้',
      'น้ำออกจาก sieve element กลับสู่ไซเลม',
    ],
    hints: ['เริ่มที่การ "โหลด" น้ำตาล'],
    explanation: 'source: ใบ, หัวที่สะสมอาหาร · sink: ผล ดอก ราก หัวที่กำลังโต',
  },
  {
    id: 'pt-pf-02', type: 'mcq', topic: 'pt-pressureflow', source: 'พืช 5.4 สไลด์ 33; แบบฝึกหัดสไลด์ 44',
    prompt: 'phloem sap ลำเลียงจาก sieve tube ด้านใกล้ source ไปยังด้านใกล้ sink ได้เพราะอะไร',
    options: [
      { text: 'มีความต่างของ pressure ภายในเซลล์สองบริเวณนี้ที่ทำให้เกิด bulk flow ได้', truth: true, why: 'ถูก' },
      { text: 'sieve tube ด้านใกล้ source มี Ψp สูงกว่า Ψp ด้านใกล้ sink', truth: true, why: 'ถูก (0.6 vs 0.3 MPa ในภาพ)' },
      { text: 'sieve tube ด้านใกล้ sink มี Ψp สูงกว่า Ψp ด้านใกล้ source', truth: false, why: 'กลับกัน' },
      { combo: [0, 1], correct: true, why: 'A และ B ถูกทั้งคู่' },
    ],
    hints: ['ของไหลไหลจากความดันสูงไปต่ำ'],
    explanation: 'Ψp ที่ source = 0.6 MPa, ที่ sink = 0.3 MPa → sap ไหลจาก source → sink',
  },
  {
    id: 'pt-pf-03', type: 'mcq', topic: 'pt-pressureflow', source: 'พืช 5.4 สไลด์ 33; แบบฝึกหัดสไลด์ 43',
    prompt: 'จากตัวเลขในภาพ pressure-flow model น้ำในเนื้อเยื่อโฟลเอ็มที่ตำแหน่งใดมี water potential มากที่สุด',
    options: [
      { text: 'โฟลเอ็มที่อยู่ใกล้แหล่งใช้น้ำตาล (sink)', correct: true, why: 'sink: Ψw = −0.4 MPa มากกว่า source: −1.1 MPa' },
      { text: 'โฟลเอ็มที่อยู่ใกล้แหล่งสร้างน้ำตาล (source)', why: 'ที่ source น้ำตาลเข้มข้นมาก Ψs = −1.7 → Ψw = −1.1 MPa ต่ำกว่า' },
      { text: 'โฟลเอ็มที่อยู่ใกล้กับเนื้อเยื่อไซเลม', why: 'คำตอบไม่เจาะจงตำแหน่ง' },
      { text: 'โฟลเอ็มที่อยู่ในราก', why: 'รากเป็น sink ได้ แต่ข้อ "ใกล้ sink" ตรงกับตัวเลขในภาพมากกว่า' },
    ],
    hints: ['อย่าสับสน Ψp กับ Ψw', 'Ψw source = −1.1, Ψw sink = −0.4 ค่าไหนมากกว่า?'],
    explanation: 'ระวัง: ที่ source มี "Ψp" สูงกว่า แต่ "Ψw" ต่ำกว่า เพราะ Ψs ติดลบมาก (น้ำตาลเข้มข้น) — sap ไหลตามความดัน (Ψp) ไม่ใช่ตาม Ψw',
  },
  {
    id: 'pt-pf-04', type: 'mcq', topic: 'pt-pressureflow', source: 'พืช 5.4 สไลด์ 34–35; แบบฝึกหัดสไลด์ 45',
    prompt: 'เส้นทางการลำเลียงน้ำตาลแบบที่ต้องใช้พลังงาน (active transport) คือข้อใด',
    options: [
      { text: 'apoplast pathway จาก phloem parenchyma เข้าสู่ companion cell', correct: true, why: 'จาก apoplast เข้าสู่ sieve element–companion cell complex ใช้ H⁺-ATPase และ sucrose-H⁺ symporter' },
      { text: 'symplast pathway จาก phloem parenchyma เข้าสู่ companion cell', why: 'symplast ผ่าน plasmodesmata ไม่ต้องข้ามเยื่อด้วย ATP' },
      { text: 'transmembrane pathway จาก phloem parenchyma เข้าสู่ companion cell', why: 'ไม่ใช่เส้นทางที่สไลด์ระบุว่าใช้พลังงาน' },
      { text: 'ทุกเส้นทาง', why: 'มีเพียงเส้นทาง apoplast ที่ใช้ active loading' },
    ],
    hints: ['ดูสไลด์ 35: "จาก apoplast เข้าสู่ cell complex"'],
    explanation: 'H⁺-ATPase ใช้ ATP ปั๊ม H⁺ ออก แล้ว sucrose-H⁺ symporter พา sucrose เข้าพร้อม H⁺',
  },
];
