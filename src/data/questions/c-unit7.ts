// =====================================================================
// Practice questions — Unit 7: Conclusion, "Sciences inside cabinets:
// the importance of the Natural History Museum" (Chawatat Thanoosing).
// Source: Source/notes-unit7.md. Editing rules: see p-structure.ts.
//
// Notes:
//  - Slides 7, 9 and 12 are photos with a title only (Wallace/Darwin,
//    "content providers", Jurassic Park + copal DNA). No question asks
//    what they "mean"; see README TODOs 28–29.
//  - Small-print numbers inside the paper screenshots (e.g. 51.9 % of
//    beetle images) are not asked.
// =====================================================================
import type { Question } from '../types';

export const cMuseum: Question[] = [
  // ------------------------------------------------ cm-questions
  {
    id: 'cm-q-01', type: 'match', topic: 'cm-questions', source: '7 สไลด์ 3',
    inText: ['ใช้พลังงานรักษาความเป็นระเบียบ', 'การสืบพันธุ์ การถ่ายทอดลักษณะ และวิวัฒนาการ', 'วิวัฒนาการ (evolution) ทำให้ประชากรเปลี่ยนไปข้ามรุ่น', 'หลักฐานและความรู้'],
    prompt: 'จับคู่คำถามพื้นฐานทางชีววิทยากับคำตอบในสไลด์',
    pairs: [
      { left: 'สิ่งมีชีวิตอยู่รอดและรักษาความเป็นระเบียบได้อย่างไร', right: 'ใช้พลังงานรักษาความเป็นระเบียบ ต้านแนวโน้มสู่ความไร้ระเบียบ (disorder)' },
      { left: 'ชีวิตดำเนินต่อไปได้อย่างไรเมื่อแต่ละตัวตายไป', right: 'การสืบพันธุ์ การถ่ายทอดลักษณะ และวิวัฒนาการ' },
      { left: 'ประชากรตอบสนองต่อสิ่งแวดล้อมที่เปลี่ยนไปอย่างไร', right: 'วิวัฒนาการทำให้ประชากรเปลี่ยนไปข้ามรุ่น' },
      { left: 'ชีววิทยาช่วยแก้ปัญหาระดับโลกได้อย่างไร', right: 'ให้หลักฐานและความรู้เพื่อแก้ปัญหาและสร้างอนาคตที่ยั่งยืน' },
    ],
    hints: ['คำถามที่ 1 เกี่ยวกับพลังงาน · คำถามที่ 3 เกี่ยวกับการเปลี่ยนแปลงข้ามรุ่น'],
    explanation: 'สไลด์ 3 สรุปทั้งวิชาเป็นคำถาม 4 ข้อ แต่ละข้อมีคำตอบหนึ่งประโยค',
  },
  {
    id: 'cm-q-02', type: 'mcq', topic: 'cm-questions', source: '7 สไลด์ 3',
    inText: 'แต่ละตัวมีชีวิตชั่วคราว แต่ชีวิตดำเนินต่อด้วยการสืบพันธุ์ การถ่ายทอดลักษณะ และวิวัฒนาการ',
    prompt: 'ตามสไลด์ "ชีวิตดำเนินต่อไปได้อย่างไรเมื่อแต่ละตัวตายไป" (How does life continue when individuals die?)',
    options: [
      { text: 'แต่ละตัวมีชีวิตชั่วคราว แต่ชีวิตดำเนินต่อด้วยการสืบพันธุ์ การถ่ายทอดลักษณะ และวิวัฒนาการ', correct: true, why: 'ตรงกับสไลด์ 3 ข้อ 2' },
      { text: 'สิ่งมีชีวิตใช้พลังงานเพื่อต้านความไร้ระเบียบ', why: 'นี่คือคำตอบของคำถามข้อ 1 (การอยู่รอดและรักษาความเป็นระเบียบ)' },
      { text: 'ชีววิทยาให้หลักฐานเพื่อแก้ปัญหาระดับโลก', why: 'นี่คือคำตอบของคำถามข้อ 4' },
      { text: 'พิพิธภัณฑ์เก็บรักษาตัวอย่างไว้ตลอดไป', why: 'ตัวอย่างพิพิธภัณฑ์ช่วย "ศึกษา" สิ่งมีชีวิตที่ตายไปแล้ว แต่ไม่ใช่วิธีที่ชีวิตดำเนินต่อไป' },
    ],
    hints: ['ตัวตายไป แต่อะไรส่งต่อไปยังรุ่นถัดไป?'],
    explanation: 'Individuals are temporary, but life continues through reproduction, inheritance, and evolution.',
  },
  {
    id: 'cm-q-03', type: 'tf', topic: 'cm-questions', source: '7 สไลด์ 3',
    inText: 'ใช้พลังงานรักษาความเป็นระเบียบ ต้านแนวโน้มตามธรรมชาติที่จะไปสู่ความไร้ระเบียบ (disorder)',
    statement: 'ตามสไลด์ สิ่งมีชีวิตต้องใช้พลังงานเพื่อรักษาความเป็นระเบียบ (organization) และต้านแนวโน้มตามธรรมชาติที่จะไปสู่ความไร้ระเบียบ',
    answer: true,
    why: 'สไลด์ 3 ข้อ 1: Life requires energy to maintain organization and resist the natural tendency toward disorder.',
    hints: ['นึกถึงบทที่ 5: การรักษาสภาวะสมดุลต้องใช้พลังงาน'],
    explanation: 'คำถามข้อ 1 ตอบด้วย "พลังงาน"',
  },
  {
    id: 'cm-q-04', type: 'mcq', topic: 'cm-questions', source: '7 สไลด์ 3',
    inText: 'วิวัฒนาการ (evolution) ทำให้ประชากรเปลี่ยนไปข้ามรุ่น',
    prompt: 'คำถาม "ประชากรตอบสนองต่อสิ่งแวดล้อมที่เปลี่ยนไปอย่างไร" สไลด์ตอบด้วยกระบวนการใด',
    options: [
      { text: 'วิวัฒนาการ (evolution) ทำให้ประชากรเปลี่ยนไปข้ามรุ่น', correct: true, why: 'Evolution enables populations to change across generations' },
      { text: 'สิ่งมีชีวิตแต่ละตัวปรับยีนของตัวเองภายในชั่วชีวิต', why: 'ประชากรเปลี่ยน "ข้ามรุ่น" ไม่ใช่ตัวเดียวเปลี่ยนยีนตัวเองในชั่วชีวิต' },
      { text: 'ประชากรเพิ่มขึ้นแบบ exponential เสมอ', why: 'ไม่ใช่คำตอบในสไลด์ และประชากรส่วนใหญ่โตแบบ logistic (บทที่ 6.2)' },
      { text: 'การเก็บตัวอย่างเข้าพิพิธภัณฑ์', why: 'พิพิธภัณฑ์ช่วย "ศึกษา" การเปลี่ยนแปลง แต่ไม่ได้เป็นกลไกที่ประชากรตอบสนอง' },
    ],
    hints: ['"ข้ามรุ่น" (across generations)'],
    explanation: 'คำถามข้อ 3 → evolution',
  },

  // ------------------------------------------------ cm-museum
  {
    id: 'cm-mu-01', type: 'mcq', topic: 'cm-museum', source: '7 สไลด์ 4–5',
    inText: 'ผู้เข้าชมทั่วไปมักไม่เห็นคือ Collection & Research',
    prompt: 'สไลด์แสดงพิพิธภัณฑ์ 2 ด้าน ด้านใดที่ผู้เข้าชมทั่วไปมักไม่เห็น',
    options: [
      { text: 'Collection & Research — คลังตัวอย่างและงานวิจัยเบื้องหลัง', correct: true, why: 'สไลด์ 5: นักวิทยาศาสตร์ทำงานกับตัวอย่างในคลัง ไม่ใช่ห้องจัดแสดง' },
      { text: 'Display & Exhibition — ห้องจัดแสดง', why: 'ห้องจัดแสดงคือส่วนที่ผู้เข้าชมเห็น (สไลด์ 4)' },
      { text: 'ร้านขายของที่ระลึก', why: 'ไม่อยู่ในสไลด์' },
      { text: 'ไม่มีด้านอื่น พิพิธภัณฑ์มีไว้จัดแสดงอย่างเดียว', why: 'สไลด์ 5 แสดงว่าพิพิธภัณฑ์เป็นแหล่งเก็บและวิจัยด้วย' },
    ],
    hints: ['สไลด์ 4 = Display & Exhibition, สไลด์ 5 = ?'],
    explanation: 'พิพิธภัณฑ์ธรรมชาติวิทยามีทั้ง "หน้าร้าน" (จัดแสดง) และ "หลังร้าน" (คลังตัวอย่าง + งานวิจัย) — จึงเป็นสถาบันวิจัยด้วย',
  },
  {
    id: 'cm-mu-02', type: 'tf', topic: 'cm-museum', source: '7 สไลด์ 8',
    inText: ['Treasure from Siam', 'Schomburgk\'s deer'],
    statement: 'Schomburgk\'s deer (Rucervus schomburgki Blyth, 1863) ถูกนำเสนอในสไลด์ในฐานะ "Treasure from Siam" ที่เก็บอยู่ในพิพิธภัณฑ์',
    answer: true,
    why: 'สไลด์ 8: "Treasure from Siam: Schomburgk\'s deer" — มีเขา ป้ายตัวอย่าง และภาพจากงานของ Blyth (1863)',
    hints: ['Siam = ชื่อเดิมของประเทศไทย'],
    explanation: 'ตัวอย่างจากประเทศไทยที่เก็บในพิพิธภัณฑ์ต่างประเทศ เป็นหลักฐานของสิ่งมีชีวิตในอดีต',
  },
  {
    id: 'cm-mu-03', type: 'mcq', topic: 'cm-museum', source: '7 สไลด์ 8',
    inText: 'Blyth, 1863 = ผู้บรรยายชนิดและปีที่ตีพิมพ์',
    prompt: 'ในชื่อ Rucervus schomburgki Blyth, 1863 ส่วน "Blyth, 1863" หมายถึงอะไร',
    options: [
      { text: 'ผู้ตั้งชื่อ/บรรยายชนิดนี้ และปีที่ตีพิมพ์', correct: true, why: 'สไลด์แสดงหน้าสิ่งพิมพ์ของ Blyth (1863) ที่บรรยายเขากวางนี้' },
      { text: 'ชื่อสกุล (genus)', why: 'ชื่อสกุลคือ Rucervus' },
      { text: 'สถานที่ที่พบตัวอย่าง', why: 'สถานที่อยู่บนป้ายตัวอย่าง ไม่ได้อยู่ในชื่อวิทยาศาสตร์' },
      { text: 'ปีที่สัตว์ชนิดนี้สูญพันธุ์', why: 'ปีหลังชื่อคือปีที่ตีพิมพ์ชื่อ ไม่ใช่ปีสูญพันธุ์' },
    ],
    hints: ['สไลด์มีภาพหน้ากระดาษที่เขียนว่า "Blyth, 1863"'],
    explanation: 'Rucervus = สกุล · schomburgki = ชนิด · Blyth, 1863 = ผู้บรรยายและปี',
  },
  {
    id: 'cm-mu-04', type: 'tf', topic: 'cm-museum', source: '7 สไลด์ 31',
    inText: 'พิพิธภัณฑ์ธรรมชาติวิทยา จุฬาลงกรณ์มหาวิทยาลัย',
    statement: 'จุฬาลงกรณ์มหาวิทยาลัยมีพิพิธภัณฑ์ธรรมชาติวิทยาของตัวเอง',
    answer: true,
    why: 'สไลด์ 31: Chulalongkorn University Museum of Natural History',
    hints: ['ดูสไลด์ก่อนสรุป'],
    explanation: 'พิพิธภัณฑ์ธรรมชาติวิทยาไม่ได้มีแค่ในต่างประเทศ (NHM London) — จุฬาฯ ก็มี',
  },

  // ------------------------------------------------ cm-museomics
  {
    id: 'cm-dna-01', type: 'mcq', topic: 'cm-museomics', source: '7 สไลด์ 17',
    inText: '"museum" + "genomics": การศึกษาลำดับ DNA จากตัวอย่างพิพิธภัณฑ์',
    prompt: 'Museomics คืออะไร',
    options: [
      { text: 'การศึกษาลำดับดีเอ็นเอที่ได้จากตัวอย่างในพิพิธภัณฑ์ (museum + genomics)', correct: true, why: 'นิยามในสไลด์ 17' },
      { text: 'การถ่ายภาพตัวอย่างและเก็บข้อมูลเป็นดิจิทัล', why: 'นั่นคือ digitization' },
      { text: 'การจัดนิทรรศการในพิพิธภัณฑ์', why: 'ไม่เกี่ยวกับดีเอ็นเอ' },
      { text: 'การสร้างจีโนมของสิ่งมีชีวิตที่สูญพันธุ์จากซากโบราณเท่านั้น', why: 'ใกล้กับ paleogenomics (สไลด์ 16) · museomics ใช้ตัวอย่างพิพิธภัณฑ์ทั่วไปรวมถึงตัวอย่างพรรณไม้' },
    ],
    hints: ['แยกคำ: muse-omics = museum + genomics'],
    explanation: 'Museomics = "museum" + "genomics" — DNA ที่ได้จากตัวอย่างพิพิธภัณฑ์เรียกว่า historical DNA (hDNA)',
  },
  {
    id: 'cm-dna-02', type: 'sort', topic: 'cm-museomics', source: '7 สไลด์ 16–17',
    inText: ['DNA จากซากอินทรีย์โบราณ เช่น กระดูก ฟัน ขน เมล็ด (ตรงข้ามกับ modern DNA)', 'DNA จากตัวอย่างในพิพิธภัณฑ์และหอพรรณไม้ (herbarium)'],
    prompt: 'จัดแหล่งของ DNA ให้ตรงประเภท',
    bins: [{ id: 'a', label: 'ancient DNA (aDNA)' }, { id: 'h', label: 'historical DNA (hDNA)' }, { id: 'm', label: 'modern DNA' }],
    items: [
      { text: 'กระดูกมนุษย์นีแอนเดอร์ทัลโบราณ', bin: 'a' },
      { text: 'ฟัน ขน หรือเมล็ดที่เก็บรักษาไว้จากยุคโบราณ', bin: 'a' },
      { text: 'ตัวอย่างนกสตัฟฟ์ในพิพิธภัณฑ์', bin: 'h' },
      { text: 'ตัวอย่างพรรณไม้แห้งในหอพรรณไม้ (herbarium)', bin: 'h' },
      { text: 'เลือดสุนัขที่มีชีวิตอยู่ในปัจจุบัน', bin: 'm' },
    ],
    hints: ['aDNA = ซากโบราณ · hDNA = ตัวอย่างพิพิธภัณฑ์/หอพรรณไม้ · modern = สิ่งมีชีวิตปัจจุบัน'],
    explanation: 'aDNA: ancient organic remains (bones, teeth, hair, seeds) — ตรงข้ามกับ modern DNA · hDNA: DNA from museum and herbarium specimens',
  },
  {
    id: 'cm-dna-03', type: 'mcq', topic: 'cm-museomics', source: '7 สไลด์ 13–15',
    inText: ['2022', 'สกัด DNA จากกระดูกของมนุษย์โบราณที่สูญพันธุ์ไปแล้ว'],
    prompt: 'Svante Pääbo ได้รางวัลโนเบลสาขาสรีรวิทยาหรือการแพทย์ปี 2022 จากงานใด',
    options: [
      { text: 'สกัด DNA จากกระดูกของมนุษย์โบราณที่สูญพันธุ์ไปแล้ว (นีแอนเดอร์ทัล เดนิโซวัน)', correct: true, why: 'สไลด์ 14: extracted DNA from bone specimens from extinct hominins' },
      { text: 'สกัด DNA ไดโนเสาร์จากอำพัน', why: 'นั่นคือภาพยนตร์ Jurassic Park (สไลด์ 12) ไม่ใช่งานของ Pääbo' },
      { text: 'ถ่ายภาพ 3 มิติของกะโหลก Toxodon', why: 'นั่นคือตัวอย่าง digitization (สไลด์ 23)' },
      { text: 'ค้นพบสุนัข Balto', why: 'งานเรื่อง Balto คือ Moon et al., 2023 (สไลด์ 20)' },
    ],
    hints: ['Neandertal และ Denisova เป็นชื่อสถานที่ที่พบกระดูก'],
    explanation: 'กระดูกนีแอนเดอร์ทัลจากเยอรมนี และกระดูกนิ้วจากถ้ำเดนิโซวาทางใต้ของไซบีเรีย',
  },
  {
    id: 'cm-dna-04', type: 'tf', topic: 'cm-museomics', source: '7 สไลด์ 15',
    inText: 'เมื่อ Homo sapiens กระจายจากแอฟริกาไปทั่วทวีป ได้ผสมพันธุ์กับทั้งสองกลุ่ม',
    statement: 'งานของ Pääbo แสดงว่าเมื่อ Homo sapiens กระจายจากแอฟริกาไปทั่วยูเรเชีย ได้ผสมพันธุ์กับนีแอนเดอร์ทัลและเดนิโซวัน และร่องรอยยังอยู่ใน DNA ของเรา',
    answer: true,
    why: 'สไลด์ 15: Interbreeding occurred when Homo sapiens spread across the continent, leaving traces that remain in our DNA.',
    hints: ['ดูลูกศร gene flow ในแผนภาพต้นไม้'],
    explanation: 'นีแอนเดอร์ทัลอยู่ทางตะวันตก เดนิโซวันอยู่ทางตะวันออกของยูเรเชีย',
  },
  {
    id: 'cm-dna-05', type: 'mcq', topic: 'cm-museomics', source: '7 สไลด์ 15',
    inText: 'นีแอนเดอร์ทัลอยู่ทางตะวันตก เดนิโซวันอยู่ทางตะวันออก',
    prompt: 'ตามสไลด์ นีแอนเดอร์ทัลและเดนิโซวันอาศัยอยู่ส่วนใดของยูเรเชีย',
    options: [
      { text: 'นีแอนเดอร์ทัลทางตะวันตก เดนิโซวันทางตะวันออก', correct: true, why: 'Neanderthals lived in the west and Denisovans in the east' },
      { text: 'นีแอนเดอร์ทัลทางตะวันออก เดนิโซวันทางตะวันตก', why: 'สลับกัน — ถ้ำเดนิโซวาอยู่ไซบีเรีย (ตะวันออก) นีแอนเดอร์ทัลตั้งชื่อตามสถานที่ในเยอรมนี (ตะวันตก)' },
      { text: 'ทั้งสองอยู่ในแอฟริกาเท่านั้น', why: 'Homo sapiens ต่างหากที่อพยพออกจากแอฟริกา' },
      { text: 'อยู่ทวีปอเมริกา', why: 'ไม่ใช่' },
    ],
    hints: ['ชื่อมาจากที่พบกระดูก: เยอรมนี vs ไซบีเรียใต้'],
    explanation: 'ตำแหน่งที่พบกระดูกช่วยจำ: Neander (เยอรมนี, ตะวันตก) · Denisova Cave (ไซบีเรีย, ตะวันออก)',
  },
  {
    id: 'cm-dna-06', type: 'match', topic: 'cm-museomics', source: '7 สไลด์ 16–17',
    inText: ['Ancient DNA (aDNA) DNA จากซากอินทรีย์โบราณ', 'Paleogenomics การสร้างและวิเคราะห์จีโนมของสิ่งมีชีวิตที่สูญพันธุ์', 'Museomics "museum" + "genomics"', 'Historical DNA (hDNA) DNA จากตัวอย่างในพิพิธภัณฑ์และหอพรรณไม้'],
    prompt: 'จับคู่คำศัพท์กับความหมาย',
    pairs: [
      { left: 'Ancient DNA (aDNA)', right: 'DNA จากซากอินทรีย์โบราณ เช่น กระดูก ฟัน ขน เมล็ด' },
      { left: 'Paleogenomics', right: 'การสร้างและวิเคราะห์จีโนมของสิ่งมีชีวิตที่สูญพันธุ์' },
      { left: 'Museomics', right: 'การศึกษาลำดับ DNA จากตัวอย่างพิพิธภัณฑ์' },
      { left: 'Historical DNA (hDNA)', right: 'DNA จากตัวอย่างในพิพิธภัณฑ์และหอพรรณไม้' },
    ],
    hints: ['paleo = โบราณ · historical = ตัวอย่างที่เก็บไว้ในคอลเลกชัน'],
    explanation: 'aDNA/paleogenomics เน้นซากโบราณและสิ่งที่สูญพันธุ์ · hDNA/museomics เน้นตัวอย่างในพิพิธภัณฑ์',
  },
  {
    id: 'cm-dna-07', type: 'mcq', topic: 'cm-museomics', source: '7 สไลด์ 18',
    inText: ['อนุกรมเวลา (time series)', 'หาได้ยาก', 'ทั้งสังคม'],
    prompt: 'ข้อใด**ไม่ใช่**เหตุผลในสไลด์ที่ทำให้ตัวอย่างพิพิธภัณฑ์มีค่าต่องานวิจัยด้าน DNA',
    options: [
      { text: 'ตัวอย่างพิพิธภัณฑ์มี DNA คุณภาพดีกว่าสิ่งมีชีวิตปัจจุบันเสมอ', correct: true, why: 'ไม่อยู่ในสไลด์ และ DNA จากตัวอย่างเก่ามักเสื่อมสภาพ' },
      { text: 'ศึกษาเป็นอนุกรมเวลา (time series) ได้', why: 'เหตุผลข้อ 1 ในสไลด์ 18' },
      { text: 'ได้ตัวอย่างที่หายากหรือหาได้ยากด้วยวิธีอื่น', why: 'เหตุผลข้อ 2 ในสไลด์ 18' },
      { text: 'ได้ตัวอย่างหลายชนิดจากสังคมเดียวกัน ณ สถานที่และเวลาหนึ่ง', why: 'เหตุผลข้อ 3 ในสไลด์ 18' },
    ],
    hints: ['สไลด์ 18 มีเหตุผล 3 ข้อ: เวลา ความหายาก ทั้งสังคม'],
    explanation: '1) time series 2) specimens otherwise difficult to obtain 3) specimens from across a community at a given place and time',
  },
  {
    id: 'cm-dna-08', type: 'mcq', topic: 'cm-museomics', source: '7 สไลด์ 20',
    inText: 'Balto สุนัขลากเลื่อนชื่อดังของอะแลสกาในศตวรรษที่ 20 มีบรรพบุรุษร่วมกับสายพันธุ์สุนัขเอเชียและอาร์กติก',
    prompt: 'งานวิจัย museomics เรื่อง Balto (สุนัขลากเลื่อนชื่อดังของอะแลสกาในศตวรรษที่ 20) พบอะไร',
    options: [
      { text: 'Balto มีบรรพบุรุษร่วมกับสายพันธุ์สุนัขเอเชียและอาร์กติกในปัจจุบัน', correct: true, why: 'สไลด์ 20 (Moon et al., 2023)' },
      { text: 'Balto เป็นหมาป่าแท้ ไม่ใช่สุนัข', why: 'ไม่ใช่ผลในสไลด์' },
      { text: 'Balto เป็นมนุษย์นีแอนเดอร์ทัล', why: 'ไม่เกี่ยวกัน' },
      { text: 'DNA ของ Balto สกัดจากอำพัน', why: 'Balto เป็นตัวอย่างในพิพิธภัณฑ์ (hDNA) ไม่ใช่อำพัน' },
    ],
    hints: ['เปรียบเทียบ DNA ตัวอย่างเก่ากับสุนัขปัจจุบัน'],
    explanation: 'ตัวอย่างการใช้ตัวอย่างพิพิธภัณฑ์เทียบกับประชากรปัจจุบัน',
  },
  {
    id: 'cm-dna-09', type: 'match', topic: 'cm-museomics', source: '7 สไลด์ 19',
    inText: ['สถานที่ (locality)', 'ความสูง (elevation) 5800 ft', 'วันที่เก็บ (date) 30.III.1922', 'ผู้เก็บ (collector) H.M.Pendlebury'],
    prompt: 'ป้ายตัวอย่างในสไลด์เขียนว่า "Peninsular Siam: Nakon Sri Tamarat. Khao Luang. 5800 ft. 30.III.1922. H.M.Pendlebury" — จับคู่ข้อความกับประเภทข้อมูล',
    pairs: [
      { left: 'Peninsular Siam: Nakon Sri Tamarat. Khao Luang.', right: 'สถานที่ (locality)' },
      { left: '5800 ft.', right: 'ความสูง (elevation)' },
      { left: '30.III.1922', right: 'วันที่เก็บ (date)' },
      { left: 'H.M.Pendlebury', right: 'ผู้เก็บ (collector)' },
    ],
    hints: ['III = เดือนมีนาคม (เลขโรมัน)'],
    explanation: 'ป้ายตัวอย่างบอกว่า "ที่ไหน สูงเท่าไร เมื่อไร ใครเก็บ" — ข้อมูลนี้ทำให้ใช้ศึกษาการเปลี่ยนแปลงตามเวลาและสถานที่ได้',
  },

  // ------------------------------------------------ cm-digitization
  {
    id: 'cm-dg-01', type: 'mcq', topic: 'cm-digitization', source: '7 สไลด์ 22',
    inText: 'Metadata = ข้อมูลที่บรรยายข้อมูลอื่น',
    prompt: '"Metadata" ในงาน digitization หมายถึงอะไร',
    options: [
      { text: 'ข้อมูลที่บรรยายและให้รายละเอียดเกี่ยวกับข้อมูลอื่น เช่น สถานที่ พิกัด วันที่ ผู้เก็บ', correct: true, why: 'นิยามในสไลด์ 22' },
      { text: 'ลำดับ DNA ของตัวอย่าง', why: 'นั่นคือข้อมูลด้าน museomics ไม่ใช่นิยามของ metadata' },
      { text: 'ภาพถ่ายตัวอย่างเท่านั้น', why: 'ภาพเป็นข้อมูลหลัก metadata คือข้อมูลที่บรรยายภาพ/ตัวอย่างนั้น' },
      { text: 'ข้อมูลที่ลบทิ้งหลังถ่ายภาพ', why: 'ไม่ใช่ — metadata คือสิ่งที่ต้องเก็บไว้' },
    ],
    hints: ['meta = "เกี่ยวกับ" — ข้อมูลเกี่ยวกับข้อมูล'],
    explanation: 'Metadata: locality, georeference (latitude, longitude), elevation, taxonomy, sex, time, collector, collecting method, foodplant, temperature, humidity, light intensity, image number, accession number…',
  },
  {
    id: 'cm-dg-02', type: 'tf', topic: 'cm-digitization', source: '7 สไลด์ 22',
    inText: 'Digitization คือการแปลงข้อมูลเป็นรูปแบบดิจิทัล → เกิด big data',
    statement: 'Digitization คือการแปลงข้อมูลเป็นรูปแบบดิจิทัล ทำให้เกิดข้อมูลขนาดใหญ่ (big data)',
    answer: true,
    why: 'สไลด์ 22: Conversion of information into digital format → Big data',
    hints: ['digit = ดิจิทัล'],
    explanation: 'สาขาที่ใช้ข้อมูลเหล่านี้คือ biodiversity informatics',
  },
  {
    id: 'cm-dg-03', type: 'mcq', topic: 'cm-digitization', source: '7 สไลด์ 22',
    inText: 'georeference (ละติจูด ลองจิจูด)',
    prompt: '"Georeference" ในรายการ metadata คืออะไร',
    options: [
      { text: 'ละติจูดและลองจิจูดของจุดเก็บตัวอย่าง', correct: true, why: 'สไลด์ 22: Georeference: latitude, longitude' },
      { text: 'ชื่อผู้เก็บตัวอย่าง', why: 'นั่นคือ collector' },
      { text: 'ความสูงจากระดับน้ำทะเล', why: 'นั่นคือ elevation (แยกเป็นอีกหัวข้อ)' },
      { text: 'หมายเลขทะเบียนตัวอย่าง', why: 'นั่นคือ accession number' },
    ],
    hints: ['geo = โลก/ตำแหน่ง'],
    explanation: 'การมีพิกัดทำให้นำตัวอย่างเก่ามาวาดแผนที่การกระจาย และเทียบกับปัจจุบันได้',
  },
  {
    id: 'cm-dg-04', type: 'match', topic: 'cm-digitization', source: '7 สไลด์ 23–29',
    inText: ['3D scanning: กะโหลก Toxodon ที่ Darwin เก็บ', 'NHM Data Portal', 'GBIF', 'ALICE (กล้องหลายตัว)', 'Mothra วัดปีกผีเสื้อ'],
    prompt: 'จับคู่ตัวอย่างงาน digitization กับสิ่งที่ทำ',
    pairs: [
      { left: '3D scanning', right: 'สแกนกะโหลก Toxodon ที่ Darwin เก็บ ให้ดูออนไลน์ได้' },
      { left: 'NHM Data Portal', right: 'คลังข้อมูลระดับพิพิธภัณฑ์ (local repository)' },
      { left: 'GBIF', right: 'คลังข้อมูลความหลากหลายทางชีวภาพระดับโลก (global repository)' },
      { left: 'ALICE', right: 'ชุดกล้องหลายตัวถ่ายตัวอย่างแมลงและป้ายพร้อมกัน' },
      { left: 'Mothra', right: 'computer vision วัดขนาดปีกผีเสื้อ ศึกษาผลของอุณหภูมิ' },
    ],
    hints: ['local = พิพิธภัณฑ์เดียว · global = ทั่วโลก'],
    explanation: 'ภาพและ metadata → คลังข้อมูลท้องถิ่น → คลังข้อมูลโลก → ใช้ AI ระบุชนิด/วัดขนาดได้',
  },
  {
    id: 'cm-dg-05', type: 'mcq', topic: 'cm-digitization', source: '7 สไลด์ 27–28',
    inText: ['AI identification: ระบุชนิดด้วงดินจากภาพ', 'Mothra วัดปีกผีเสื้ออังกฤษในคอลเลกชัน NHM เพื่อศึกษาว่าขนาดตัวตอบสนองต่ออุณหภูมิอย่างไร'],
    prompt: 'สไลด์ยกตัวอย่างการใช้ภาพตัวอย่างพิพิธภัณฑ์ที่เป็นดิจิทัลร่วมกับ AI/computer vision ในเรื่องใด',
    options: [
      { text: 'ระบุชนิดด้วงจากภาพ และวัดขนาดผีเสื้อเพื่อดูการตอบสนองต่ออุณหภูมิ', correct: true, why: 'สไลด์ 27 (AI identification, ด้วงดิน) และ 28 (Mothra, ผีเสื้ออังกฤษ)' },
      { text: 'สกัด DNA จากภาพถ่าย', why: 'ภาพถ่ายไม่มี DNA — DNA ต้องได้จากตัวอย่างจริง' },
      { text: 'ใช้ AI สร้างไดโนเสาร์ขึ้นมาใหม่', why: 'ไม่อยู่ในสไลด์' },
      { text: 'ใช้ AI แทนการเก็บรักษาตัวอย่างจริง จึงทิ้งตัวอย่างได้', why: 'ไม่ใช่ — digitization ทำให้เข้าถึงได้ง่ายขึ้น ตัวอย่างจริงยังต้องเก็บไว้' },
    ],
    hints: ['สไลด์ 27 = identification, สไลด์ 28 = measurement'],
    explanation: 'digitization + AI ทำให้ใช้ตัวอย่างนับแสนชิ้นได้เร็วขึ้นมาก',
  },
  {
    id: 'cm-dg-06', type: 'order', topic: 'cm-digitization', source: '7 สไลด์ 22–25',
    inText: 'ตัวอย่างจริงพร้อมป้ายในคลัง → ถ่ายภาพ/สแกน และบันทึก metadata → คลังข้อมูลของพิพิธภัณฑ์ (local repository) → คลังข้อมูลระดับโลก (GBIF)',
    prompt: 'เรียงเส้นทางข้อมูลจากตัวอย่างในตู้ ไปจนถึงให้นักวิจัยทั่วโลกค้นได้',
    steps: [
      'ตัวอย่างจริงพร้อมป้าย ในคลังพิพิธภัณฑ์',
      'ถ่ายภาพ/สแกน และบันทึก metadata (สถานที่ พิกัด วันที่ ผู้เก็บ)',
      'เผยแพร่ในคลังข้อมูลของพิพิธภัณฑ์ (local repository เช่น NHM Data Portal)',
      'รวมเข้าคลังข้อมูลระดับโลก (global repository: GBIF)',
    ],
    hints: ['local มาก่อน global'],
    explanation: 'สไลด์เรียง: digitization & metadata (22) → local repository (24) → global repository (25)',
  },

  // ------------------------------------------------ cm-conclusion
  {
    id: 'cm-co-01', type: 'match', topic: 'cm-conclusion', source: '7 สไลด์ 32',
    inText: ['อดีต (past) เก็บรักษาหลักฐาน', 'ปัจจุบัน (present) เข้าใจชนิด ระบบนิเวศ และการเปลี่ยนแปลงทางชีวภาพ', 'อนาคต (future) ให้ข้อมูลเพื่อการอนุรักษ์และการพัฒนาที่ยั่งยืน'],
    prompt: 'พิพิธภัณฑ์ธรรมชาติวิทยาเชื่อมอดีต ปัจจุบัน และอนาคต — จับคู่ให้ตรงสไลด์',
    pairs: [
      { left: 'อดีต (past)', right: 'เก็บรักษาหลักฐานของความหลากหลายทางชีวภาพและวิวัฒนาการ' },
      { left: 'ปัจจุบัน (present)', right: 'เข้าใจชนิด ระบบนิเวศ และการเปลี่ยนแปลงทางชีวภาพ' },
      { left: 'อนาคต (future)', right: 'ให้ข้อมูลเพื่อการอนุรักษ์และการพัฒนาที่ยั่งยืน' },
    ],
    hints: ['อนาคต = อนุรักษ์'],
    explanation: 'สไลด์ 32: Connecting the Past, Present, and Future of Life',
  },
  {
    id: 'cm-co-02', type: 'mcq', topic: 'cm-conclusion', source: '7 สไลด์ 33',
    inText: 'Museomics และ digitization ทำให้เทียบประชากรในอดีตกับปัจจุบัน',
    prompt: 'ตามสไลด์ 33 พิพิธภัณฑ์ช่วยตอบคำถาม "ประชากรตอบสนองต่อสิ่งแวดล้อมที่เปลี่ยนไปอย่างไร" ได้อย่างไร',
    options: [
      { text: 'Museomics และ digitization ทำให้เทียบประชากรในอดีตกับปัจจุบัน เห็นการเปลี่ยนแปลงของความหลากหลายทางพันธุกรรมและการกระจาย', correct: true, why: 'สไลด์ 33 ข้อ 3' },
      { text: 'ตัวอย่างพิพิธภัณฑ์ช่วยศึกษาโครงสร้างและการปรับตัวที่ทำให้อยู่รอด', why: 'นั่นคือคำตอบข้อ 1' },
      { text: 'ตัวอย่างเก่าและ aDNA ช่วยสร้างภาพสิ่งมีชีวิตที่สูญพันธุ์ขึ้นมาใหม่', why: 'นั่นคือคำตอบข้อ 2' },
      { text: 'เก็บหลักฐานและเปิดให้เข้าถึงผ่านฐานข้อมูลระดับโลก', why: 'นั่นคือคำตอบข้อ 4' },
    ],
    hints: ['คำว่า "เปลี่ยนแปลง" → ต้องเทียบ "อดีต vs ปัจจุบัน"'],
    explanation: 'สไลด์ 33 ตอบคำถามทั้ง 4 ข้อของสไลด์ 3 อีกครั้งในมุมของพิพิธภัณฑ์',
  },
  {
    id: 'cm-co-03', type: 'tf', topic: 'cm-conclusion', source: '7 สไลด์ 33',
    inText: ['ตัวอย่างในอดีตและ ancient DNA', 'ศึกษากระบวนการที่นำไปสู่การสูญพันธุ์'],
    statement: 'ตามสไลด์ ตัวอย่างในอดีตและ ancient DNA ช่วยศึกษาความหลากหลายทางพันธุกรรมของสิ่งมีชีวิตที่สูญพันธุ์ และกระบวนการที่นำไปสู่การสูญพันธุ์',
    answer: true,
    why: 'สไลด์ 33 ข้อ 2: Historical specimens and ancient DNA help scientists reconstruct extinct organisms, understand their genetic diversity, and investigate the processes leading to extinction.',
    hints: ['ข้อ 2 = ชีวิตดำเนินต่อเมื่อตัวตายไป'],
    explanation: 'เชื่อมกับบทที่ 6.5 เรื่องการสูญพันธุ์',
  },
];
