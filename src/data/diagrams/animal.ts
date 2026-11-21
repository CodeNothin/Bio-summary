// =====================================================================
// Animal diagrams (Unit 5, animal half): digestive tract, heart, nephron,
// neuron, respiratory tract, endocrine glands.
//
// These are SCHEMATIC drawings (simple shapes, not anatomy art) so each
// part can be tapped on a phone. Body diagrams are drawn as if the person
// faces you: the person's RIGHT side is on YOUR LEFT (same as the slides).
//
// Part ids are used by label questions — keep them stable.
// =====================================================================
import type { Diagram } from '../types';
import { circle, ellipse, path, rect, ring, tube } from './shapes';

// ---------------------------------------------------------- digestive tract
// Slides 55–56, 77.
export const giTract: Diagram = {
  id: 'gi-tract',
  title: 'ระบบทางเดินอาหารของคน',
  viewBox: '0 0 240 350',
  source: 'สัตว์ 5.3 สไลด์ 56, 77',
  parts: [
    {
      id: 'mouth', tone: 'pink', label: 'ช่องปาก (oral cavity)',
      info: 'ฟันบดเคี้ยว (mechanical digestion) ลิ้นคลุกอาหารเป็นก้อน bolus น้ำลายมี salivary amylase ย่อยแป้ง',
      shapes: [ellipse(120, 26, 24, 12)],
    },
    {
      id: 'salivary', tone: 'yellow', label: 'ต่อมน้ำลาย (salivary glands)',
      info: '3 คู่: parotid, submandibular, sublingual หลั่งน้ำลาย ~1.0–1.5 ลิตร/วัน (mucin, salivary amylase, lysozyme)',
      shapes: [ellipse(82, 30, 10, 7), ellipse(158, 30, 10, 7)],
    },
    {
      id: 'pharynx', tone: 'pink', label: 'คอหอย (pharynx)',
      info: 'ทางผ่านร่วมของอาหารและอากาศ ตอนกลืน epiglottis ปิด glottis',
      shapes: [rect(112, 38, 16, 18, 4)],
    },
    {
      id: 'esophagus', tone: 'pink', label: 'หลอดอาหาร (esophagus)',
      info: 'กล้ามเนื้อเรียบ บีบตัวแบบ peristalsis ดันอาหารลงกระเพาะ มีหูรูด 2 อัน',
      shapes: [rect(114, 56, 12, 92, 4)],
    },
    {
      id: 'liver', tone: 'brown', label: 'ตับ (liver)',
      info: 'สร้างน้ำดี (bile) ส่งไปเก็บที่ถุงน้ำดี — น้ำดีไม่มีเอนไซม์ แต่เกลือน้ำดีช่วยให้ไขมันแตกตัว (emulsify)',
      shapes: [path('M36 150 Q56 118 134 134 L120 184 Q70 196 36 176 Z')],
    },
    {
      id: 'gallbladder', tone: 'green', label: 'ถุงน้ำดี (gall bladder)',
      info: 'เก็บและทำให้น้ำดีเข้มข้น แล้วส่งไปที่ duodenum',
      shapes: [ellipse(98, 188, 9, 7)],
    },
    {
      id: 'stomach', tone: 'pink', label: 'กระเพาะอาหาร (stomach)',
      info: 'เก็บและคลุกอาหาร หลั่ง HCl และ pepsin (ย่อยโปรตีน) ได้ acid chyme',
      shapes: [path('M126 146 Q178 126 188 166 Q192 206 150 208 Q128 208 134 194 Q160 194 160 174 Q156 160 126 158 Z')],
    },
    {
      id: 'pancreas', tone: 'orange', label: 'ตับอ่อน (pancreas)',
      info: 'หลั่ง pancreatic juice (เอนไซม์ + bicarbonate) เข้าสู่ duodenum และหลั่งฮอร์โมน insulin, glucagon',
      shapes: [ellipse(152, 216, 32, 7)],
    },
    {
      id: 'large-intestine', tone: 'tan', label: 'ลำไส้ใหญ่ (large intestine / colon)',
      info: 'ไม่มีการย่อยแล้ว ดูดน้ำและเกลือแร่ อาหารอยู่ 12–24 ชม. ประกอบด้วย cecum, colon, rectum, anal canal',
      shapes: [rect(68, 232, 16, 80, 6), rect(68, 228, 144, 14, 6), rect(196, 232, 16, 84, 6), rect(140, 304, 72, 12, 6)],
    },
    {
      id: 'small-intestine', tone: 'red', label: 'ลำไส้เล็ก (small intestine)',
      info: 'ยาวที่สุดและดูดซึมมากที่สุด (duodenum, jejunum, ileum) — ย่อยอาหารทุกชนิด มากที่สุดที่ duodenum',
      shapes: [rect(90, 248, 100, 54, 22)],
    },
    {
      id: 'rectum', tone: 'brown', label: 'ลำไส้ตรง (rectum)',
      info: 'เก็บกากอาหารก่อนขับถ่าย',
      shapes: [rect(132, 314, 14, 22, 4)],
    },
    {
      id: 'anus', tone: 'grey', label: 'ทวารหนัก (anus)',
      info: 'ทางออกของกากอาหาร มีหูรูด (sphincter) ควบคุม',
      shapes: [circle(139, 342, 5)],
    },
  ],
};

// ---------------------------------------------------------- heart
// Slides 85, 90–92. Blue = O₂-poor (right side), red = O₂-rich (left side).
export const heart: Diagram = {
  id: 'heart',
  title: 'หัวใจคน (ภาพแบบง่าย มองจากด้านหน้า)',
  viewBox: '0 0 290 290',
  source: 'สัตว์ 5.4 สไลด์ 85, 90–92',
  decor: [{ tone: 'grey', shapes: [rect(132, 166, 16, 104, 4)] }],
  parts: [
    {
      id: 'superior-vc', tone: 'blue', label: 'หลอดเลือดเวนาคาวาด้านบน (anterior/superior vena cava)',
      info: 'นำเลือดที่มี O₂ ต่ำจากส่วนหัวและแขนกลับเข้า atrium ขวา',
      shapes: [rect(36, 8, 20, 64, 4)],
    },
    {
      id: 'inferior-vc', tone: 'blue', label: 'หลอดเลือดเวนาคาวาด้านล่าง (posterior/inferior vena cava)',
      info: 'นำเลือดที่มี O₂ ต่ำจากลำตัวและขากลับเข้า atrium ขวา',
      shapes: [rect(4, 118, 30, 12, 4), rect(4, 118, 12, 166, 4)],
    },
    {
      id: 'ra', tone: 'blue', label: 'หัวใจห้องบนขวา (right atrium)',
      info: 'รับเลือดที่มี O₂ ต่ำจาก vena cava',
      shapes: [rect(30, 70, 80, 86, 18)],
    },
    {
      id: 'rv', tone: 'blue', label: 'หัวใจห้องล่างขวา (right ventricle)',
      info: 'บีบเลือดไปปอดทาง pulmonary artery (pulmonary circulation)',
      shapes: [rect(30, 170, 100, 100, 26)],
    },
    {
      id: 'la', tone: 'red', label: 'หัวใจห้องบนซ้าย (left atrium)',
      info: 'รับเลือดที่มี O₂ สูงจากปอดทาง pulmonary vein',
      shapes: [rect(170, 70, 80, 86, 18)],
    },
    {
      id: 'lv', tone: 'red', label: 'หัวใจห้องล่างซ้าย (left ventricle)',
      info: 'บีบเลือดออกทาง aorta ไปเลี้ยงร่างกาย (systemic circulation)',
      shapes: [rect(150, 170, 100, 100, 26)],
    },
    {
      id: 'pulmonary-artery', tone: 'blue', label: 'หลอดเลือดพัลโมนารีอาร์เทอรี (pulmonary artery)',
      info: 'นำเลือดที่มี O₂ ต่ำจาก ventricle ขวาไปปอด (เป็น artery เพราะออกจากหัวใจ แม้ O₂ ต่ำ)',
      shapes: [rect(112, 24, 16, 152, 4), rect(60, 22, 56, 12, 5)],
    },
    {
      id: 'aorta', tone: 'red', label: 'เอออร์ตา (aorta)',
      info: 'หลอดเลือดใหญ่ที่สุด นำเลือดจาก ventricle ซ้ายไปเลี้ยงร่างกาย แยกไปส่วนหัว-แขน และช่องท้อง-ขา',
      shapes: [rect(150, 14, 16, 162, 4), rect(150, 8, 110, 14, 6)],
    },
    {
      id: 'pulmonary-vein', tone: 'red', label: 'หลอดเลือดพัลโมนารีเวน (pulmonary vein)',
      info: 'นำเลือดที่มี O₂ สูงจากปอดกลับเข้า atrium ซ้าย (เป็น vein เพราะเข้าหัวใจ แม้ O₂ สูง)',
      shapes: [rect(250, 88, 34, 10, 4), rect(250, 122, 34, 10, 4)],
    },
    {
      id: 'tricuspid', tone: 'yellow', label: 'ลิ้นไตรคัสปิด (tricuspid valve) — AV valve ขวา',
      info: 'กั้นระหว่าง atrium ขวากับ ventricle ขวา ปิดเมื่อ ventricle บีบ → เสียง "lub" (S1)',
      shapes: [rect(38, 158, 64, 8, 3)],
    },
    {
      id: 'mitral', tone: 'yellow', label: 'ลิ้นไบคัสปิด (bicuspid / mitral valve) — AV valve ซ้าย',
      info: 'กั้นระหว่าง atrium ซ้ายกับ ventricle ซ้าย',
      shapes: [rect(178, 158, 64, 8, 3)],
    },
    {
      id: 'pulmonary-valve', tone: 'green', label: 'ลิ้นเซมิลูนาร์ด้านพัลโมนารี (semilunar valve)',
      info: 'กั้นระหว่าง pulmonary artery กับ ventricle ขวา ปิดเมื่อ ventricle คลายตัว → เสียง "dup" (S2)',
      shapes: [rect(106, 172, 28, 6, 3)],
    },
    {
      id: 'aortic-valve', tone: 'green', label: 'ลิ้นเซมิลูนาร์ด้านเอออร์ตา (semilunar valve)',
      info: 'กั้นระหว่าง aorta กับ ventricle ซ้าย',
      shapes: [rect(144, 172, 28, 6, 3)],
    },
  ],
};

// ---------------------------------------------------------- nephron
// Slides 130–135. Yellow band = cortex, below = medulla.
export const nephron: Diagram = {
  id: 'nephron',
  title: 'หน่วยไต (nephron)',
  viewBox: '0 0 260 330',
  source: 'สัตว์ 5.7 สไลด์ 130–135',
  decor: [
    { tone: 'tan', shapes: [rect(0, 0, 260, 120)] },
    { tone: 'grey', shapes: [tube('M0 44 L28 46', 4), tube('M28 58 L0 70', 4)] },
  ],
  parts: [
    {
      id: 'glomerulus', tone: 'red', label: 'โกลเมอรูลัส (glomerulus)',
      info: 'กลุ่มหลอดเลือดฝอย ที่นี่เกิดการกรอง (infiltration/filtration) น้ำและสารโมเลกุลเล็กออกไปใน Bowman\'s capsule',
      shapes: [circle(50, 52, 15)],
    },
    {
      id: 'bowman', tone: 'yellow', label: 'โบว์แมนส์แคปซูล (Bowman\'s capsule)',
      info: 'ถ้วยหุ้ม glomerulus รับ filtrate (น้ำ กลูโคส ของเสียไนโตรเจน สารโมเลกุลเล็ก) — เม็ดเลือดและโปรตีนใหญ่ผ่านไม่ได้',
      shapes: [ring(50, 52, 26, 19)],
    },
    {
      id: 'proximal', tone: 'orange', label: 'ท่อขดส่วนต้น (proximal convoluted tubule)',
      info: 'ดูดกลับน้ำ กลูโคส NaCl กรดอะมิโน K⁺ HCO₃⁻ และหลั่ง NH₃ กับ H⁺',
      shapes: [tube('M76 54 Q88 26 100 52 Q112 80 124 52 Q134 30 142 64')],
    },
    {
      id: 'descending', tone: 'water', label: 'Loop of Henle ขาลง (descending limb)',
      info: 'ดูดกลับ "น้ำ" เพียงอย่างเดียว',
      shapes: [tube('M142 64 L142 270')],
    },
    {
      id: 'ascending', tone: 'purple', label: 'Loop of Henle ขาขึ้น (ascending limb)',
      info: 'ดูดกลับ "NaCl" เพียงอย่างเดียว',
      shapes: [tube('M142 270 Q142 300 157 300 Q172 300 172 270 L172 96')],
    },
    {
      id: 'distal', tone: 'pink', label: 'ท่อขดส่วนปลาย (distal convoluted tubule)',
      info: 'ดูดกลับ NaCl และ HCO₃⁻ หลั่ง H⁺ และ K⁺',
      shapes: [tube('M172 96 Q182 70 194 92 Q206 112 214 74 L222 60')],
    },
    {
      id: 'collecting-duct', tone: 'blue', label: 'ท่อรวม (collecting duct)',
      info: 'ดูดกลับน้ำ NaCl และยูเรีย — ADH เพิ่มการดูดกลับน้ำที่นี่',
      shapes: [rect(222, 30, 16, 296, 5)],
    },
  ],
};

// ---------------------------------------------------------- neuron
// Slides 149–152.
const myelin = [112, 152, 192, 232].map((x) => rect(x, 72, 32, 16, 7));
export const neuron: Diagram = {
  id: 'neuron',
  title: 'เซลล์ประสาท (neuron)',
  viewBox: '0 0 340 160',
  source: 'สัตว์ 5.6 สไลด์ 149–152',
  parts: [
    {
      id: 'dendrite', tone: 'orange', label: 'เดนไดรต์ (dendrite)',
      info: 'แขนงที่รับกระแสประสาทเข้าสู่ตัวเซลล์',
      shapes: [
        tube('M44 62 L16 30 M30 46 L10 52', 4),
        tube('M40 96 L12 126 M26 110 L8 104', 4),
        tube('M60 54 L58 14', 4),
        tube('M60 106 L64 148', 4),
      ],
    },
    {
      id: 'cell-body', tone: 'yellow', label: 'ตัวเซลล์ (cell body)',
      info: 'ส่วนที่มีนิวเคลียส ควบคุมการทำงานของเซลล์',
      shapes: [circle(62, 80, 26)],
    },
    {
      id: 'nucleus', tone: 'purple', label: 'นิวเคลียส (nucleus)',
      info: 'อยู่ในตัวเซลล์',
      shapes: [circle(62, 80, 9)],
    },
    {
      id: 'axon', tone: 'orange', label: 'แอกซอน (axon)',
      info: 'ส่งกระแสประสาท (action potential) ออกจากตัวเซลล์ไปยังเซลล์อื่น — มัดของแอกซอนหลาย ๆ อันคือเส้นประสาท (nerve)',
      shapes: [path('M86 74 L104 78 L104 82 L86 86 Z'), tube('M104 80 L296 80', 4)],
    },
    {
      id: 'myelin', tone: 'blue', label: 'เยื่อไมอีลิน (myelin sheath)',
      info: 'หุ้มแอกซอน — ใน PNS สร้างจาก Schwann cell, ใน CNS สร้างจาก oligodendrocyte',
      shapes: myelin,
    },
    {
      id: 'node', tone: 'red', label: 'โหนดออฟแรนเวียร์ (node of Ranvier)',
      info: 'ช่องว่างระหว่างปลอกไมอีลินแต่ละช่วง',
      shapes: [146, 186, 226].map((x) => circle(x, 80, 4)),
    },
    {
      id: 'terminal', tone: 'green', label: 'ปลายแอกซอน (synaptic terminal)',
      info: 'ปล่อยสารสื่อประสาท (neurotransmitter) ข้ามไซแนปส์ไปยัง postsynaptic cell',
      shapes: [tube('M296 80 L314 58 M296 80 L322 80 M296 80 L314 102', 4), circle(316, 56, 7), circle(326, 80, 7), circle(316, 104, 7)],
    },
  ],
};

// ---------------------------------------------------------- respiratory tract
// Slides 117, 120–122.
export const respTract: Diagram = {
  id: 'resp-tract',
  title: 'ทางเดินหายใจของคน',
  viewBox: '0 0 240 320',
  source: 'สัตว์ 5.5 สไลด์ 117, 120',
  decor: [{ tone: 'pink', shapes: [ellipse(70, 210, 52, 72), ellipse(170, 210, 52, 72)] }],
  parts: [
    {
      id: 'nasal', tone: 'grey', label: 'โพรงจมูก (nasal cavity)',
      info: 'ทางเข้าของอากาศ',
      shapes: [ellipse(120, 24, 34, 14)],
    },
    {
      id: 'pharynx', tone: 'pink', label: 'คอหอย (pharynx)',
      info: 'ทางผ่านร่วมของอากาศและอาหาร',
      shapes: [rect(112, 38, 16, 30, 4)],
    },
    {
      id: 'larynx', tone: 'purple', label: 'กล่องเสียง (larynx)',
      info: 'อยู่ต่อจากคอหอย มี glottis ซึ่งถูกปิดด้วย epiglottis เวลากลืน',
      shapes: [rect(106, 68, 28, 18, 5)],
    },
    {
      id: 'trachea', tone: 'blue', label: 'หลอดลม (trachea)',
      info: 'อยู่ด้านหน้าหลอดอาหาร นำอากาศลงสู่ปอด',
      shapes: [rect(113, 86, 14, 70, 4)],
    },
    {
      id: 'bronchus', tone: 'blue', label: 'หลอดลมใหญ่ (bronchus)',
      info: 'แยกจาก trachea ไปปอดแต่ละข้าง',
      shapes: [tube('M120 156 L80 186 M120 156 L160 186', 9)],
    },
    {
      id: 'bronchiole', tone: 'water', label: 'หลอดลมฝอย (bronchiole)',
      info: 'แตกแขนงเล็กลงเรื่อย ๆ ไปสิ้นสุดที่ถุงลม',
      shapes: [tube('M80 186 L56 222 M80 186 L92 232 M160 186 L148 232 M160 186 L186 222', 4)],
    },
    {
      id: 'alveoli', tone: 'red', label: 'ถุงลม (alveoli)',
      info: 'บริเวณแลกเปลี่ยนแก๊ส ผนังบาง ล้อมด้วยหลอดเลือดฝอย ปอด 2 ข้างมี ~300 ล้านถุง พื้นที่ ~100 ตร.ม.',
      shapes: [[56, 228], [92, 238], [148, 238], [186, 228]].flatMap(([x, y]) => [circle(x - 6, y + 4, 6), circle(x + 6, y + 4, 6), circle(x, y + 13, 6)]),
    },
    {
      id: 'diaphragm', tone: 'brown', label: 'กะบังลม (diaphragm)',
      info: 'หดตัว → เลื่อนต่ำลง ช่องอกขยาย ความดันลด อากาศไหลเข้า (หายใจเข้า); คลายตัว → โค้งขึ้น (หายใจออก)',
      shapes: [tube('M14 300 Q120 250 226 300', 10)],
    },
  ],
};

// ---------------------------------------------------------- endocrine glands
// Slide 162: 9 glands.
export const glands: Diagram = {
  id: 'glands',
  title: 'ต่อมไร้ท่อ 9 ต่อมในร่างกายคน',
  viewBox: '0 0 220 330',
  source: 'สัตว์ 5.6 สไลด์ 162–164',
  decor: [
    { tone: 'line', shapes: [circle(110, 48, 38), rect(66, 92, 88, 200, 32)] },
    { tone: 'grey', shapes: [ellipse(86, 218, 10, 15), ellipse(134, 218, 10, 15)] },
  ],
  parts: [
    {
      id: 'hypothalamus', tone: 'purple', label: 'ไฮโปทาลามัส (hypothalamus)',
      info: 'เชื่อมระบบประสาทกับต่อมไร้ท่อ สร้าง ADH, oxytocin (ส่งไปต่อมใต้สมองส่วนหลัง) และ releasing/inhibiting hormones (ควบคุมต่อมใต้สมองส่วนหน้า)',
      shapes: [ellipse(104, 46, 10, 6)],
    },
    {
      id: 'pituitary', tone: 'pink', label: 'ต่อมใต้สมอง (pituitary gland)',
      info: 'ส่วนหลัง: ปล่อย ADH, oxytocin · ส่วนหน้า: GH, prolactin, FSH, LH, TSH, ACTH',
      shapes: [circle(104, 62, 5)],
    },
    {
      id: 'pineal', tone: 'yellow', label: 'ต่อมไพเนียล (pineal gland)',
      info: 'หลั่ง melatonin เกี่ยวกับจังหวะชีวภาพ (สว่าง/มืด)',
      shapes: [circle(124, 42, 5)],
    },
    {
      id: 'thyroid', tone: 'red', label: 'ต่อมไทรอยด์ (thyroid gland)',
      info: 'หลั่ง T3, T4 (เพิ่ม metabolism) และ calcitonin (ลดแคลเซียมในเลือด)',
      shapes: [ellipse(110, 104, 15, 7)],
    },
    {
      id: 'parathyroid', tone: 'orange', label: 'ต่อมพาราไทรอยด์ (parathyroid glands)',
      info: 'หลั่ง PTH เพิ่มแคลเซียมในเลือด',
      shapes: [circle(98, 113, 3), circle(122, 113, 3)],
    },
    {
      id: 'thymus', tone: 'blue', label: 'ต่อมไทมัส (thymus)',
      info: 'หลั่ง thymosin กระตุ้น T lymphocyte',
      shapes: [ellipse(110, 138, 12, 14)],
    },
    {
      id: 'adrenal', tone: 'yellow', label: 'ต่อมหมวกไต (adrenal glands)',
      info: 'medulla: epinephrine/norepinephrine · cortex: glucocorticoids, mineralocorticoids (aldosterone)',
      shapes: [path('M78 204 L86 192 L94 204 Z'), path('M126 204 L134 192 L142 204 Z')],
    },
    {
      id: 'pancreas', tone: 'green', label: 'ตับอ่อน (pancreas)',
      info: 'หลั่ง insulin (ลดกลูโคสในเลือด) และ glucagon (เพิ่มกลูโคส)',
      shapes: [ellipse(110, 244, 26, 7)],
    },
    {
      id: 'gonads', tone: 'pink', label: 'อวัยวะสืบพันธุ์ (gonads: ovary / testis)',
      info: 'testis: androgens · ovary: estrogens, progesterone',
      shapes: [circle(92, 276, 7), circle(128, 276, 7)],
    },
  ],
};

export const animalDiagrams: Diagram[] = [giTract, heart, nephron, neuron, respTract, glands];
