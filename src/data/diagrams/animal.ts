// =====================================================================
// Animal (Unit 5, animal half) diagrams: the slide figures with tappable points on them.
//
// Each diagram is one slide picture (`fig`, see src/data/figures.json)
// plus its parts. `at` is where the tap point sits, in percent of the
// cropped picture ([x, y], 0–100 from the top-left corner). `masks` are
// boxes (x0, y0, x1, y1 in percent) that cover the slide's own printed
// labels during label questions, so the answer is not written on the
// picture.
//
// Each part id is used by label questions (e.g. 'endodermis'). You may
// move a point freely, but do not rename an id that a question in
// src/data/questions uses — the test will tell you if you do.
// =====================================================================
import type { Diagram } from '../types';

export const giTract: Diagram = {
  id: 'gi-tract',
  title: 'ระบบทางเดินอาหารของคน',
  fig: 'a5-56',
  source: 'สัตว์ 5.3 สไลด์ 56, 77',
  masks: [[0, 2, 19, 8.5], [0, 10, 18, 23.5], [65, 2, 93, 10.5], [65, 13, 87, 21.5], [68, 25, 96, 32.5], [25, 35, 41, 43], [0, 54, 20, 66.5], [0, 65.5, 23, 72], [0, 71, 22, 82.5], [4, 81.5, 26, 98.5], [63, 38, 100, 72.5], [70, 87, 100, 100]],
  parts: [
    {
      id: 'mouth', tone: 'pink', label: 'ช่องปาก (oral cavity)',
      info: 'ฟันบดเคี้ยว (mechanical digestion) ลิ้นคลุกอาหารเป็นก้อน bolus น้ำลายมี salivary amylase ย่อยแป้ง',
      at: [34, 10],
    },
    {
      id: 'salivary', tone: 'yellow', label: 'ต่อมน้ำลาย (salivary glands)',
      info: '3 คู่: parotid, submandibular, sublingual หลั่งน้ำลาย ~1.0–1.5 ลิตร/วัน (mucin, salivary amylase, lysozyme)',
      at: [40.5, 9],
    },
    {
      id: 'pharynx', tone: 'pink', label: 'คอหอย (pharynx)',
      info: 'ทางผ่านร่วมของอาหารและอากาศ ตอนกลืน epiglottis ปิด glottis',
      at: [41, 17.5],
    },
    {
      id: 'esophagus', tone: 'pink', label: 'หลอดอาหาร (esophagus)',
      info: 'กล้ามเนื้อเรียบ บีบตัวแบบ peristalsis ดันอาหารลงกระเพาะ มีหูรูด 2 อัน',
      at: [42, 33],
    },
    {
      id: 'liver', tone: 'brown', label: 'ตับ (liver)',
      info: 'สร้างน้ำดี (bile) ส่งไปเก็บที่ถุงน้ำดี — น้ำดีไม่มีเอนไซม์ แต่เกลือน้ำดีช่วยให้ไขมันแตกตัว (emulsify)',
      at: [31, 52],
    },
    {
      id: 'gallbladder', tone: 'green', label: 'ถุงน้ำดี (gall bladder)',
      info: 'เก็บและทำให้น้ำดีเข้มข้น แล้วส่งไปที่ duodenum',
      at: [33, 60],
    },
    {
      id: 'stomach', tone: 'pink', label: 'กระเพาะอาหาร (stomach)',
      info: 'เก็บและคลุกอาหาร หลั่ง HCl และ pepsin (ย่อยโปรตีน) ได้ acid chyme',
      at: [48, 58],
    },
    {
      id: 'pancreas', tone: 'orange', label: 'ตับอ่อน (pancreas)',
      info: 'หลั่ง pancreatic juice (เอนไซม์ + bicarbonate) เข้าสู่ duodenum และหลั่งฮอร์โมน insulin, glucagon',
      at: [37, 67.5],
    },
    {
      id: 'large-intestine', tone: 'tan', label: 'ลำไส้ใหญ่ (large intestine / colon)',
      info: 'ไม่มีการย่อยแล้ว ดูดน้ำและเกลือแร่ อาหารอยู่ 12–24 ชม. ประกอบด้วย cecum, colon, rectum, anal canal',
      at: [27, 79],
    },
    {
      id: 'small-intestine', tone: 'red', label: 'ลำไส้เล็ก (small intestine)',
      info: 'ยาวที่สุดและดูดซึมมากที่สุด (duodenum, jejunum, ileum) — ย่อยอาหารทุกชนิด มากที่สุดที่ duodenum',
      at: [37, 77],
    },
    {
      id: 'rectum', tone: 'brown', label: 'ลำไส้ตรง (rectum)',
      info: 'เก็บกากอาหารก่อนขับถ่าย',
      at: [39, 92.5],
    },
    {
      id: 'anus', tone: 'grey', label: 'ทวารหนัก (anus)',
      info: 'ทางออกของกากอาหาร มีหูรูด (sphincter) ควบคุม',
      at: [39.5, 98],
    },
  ],
};

export const heart: Diagram = {
  id: 'heart',
  title: 'หัวใจคน (ภาพตัด มองจากด้านหน้า)',
  fig: 'a5-92',
  source: 'สัตว์ 5.4 สไลด์ 85, 90–92',
  masks: [[2, 4, 30, 12.5], [71, 4, 83, 11.5], [71, 13.5, 91, 25.5], [2, 22, 16, 34], [71, 27.5, 84, 39.5], [0, 52, 23, 69], [67, 52, 94, 69], [0, 66, 31, 86], [66, 66, 100, 86], [35, 88, 48, 100], [53, 88, 69, 100]],
  parts: [
    {
      id: 'superior-vc', tone: 'blue', label: 'หลอดเลือดเวนาคาวาด้านบน (anterior/superior vena cava)',
      info: 'นำเลือดที่มี O₂ ต่ำจากส่วนหัวและแขนกลับเข้า atrium ขวา',
      at: [34, 36],
    },
    {
      id: 'inferior-vc', tone: 'blue', label: 'หลอดเลือดเวนาคาวาด้านล่าง (posterior/inferior vena cava)',
      info: 'นำเลือดที่มี O₂ ต่ำจากลำตัวและขากลับเข้า atrium ขวา',
      at: [33, 82],
    },
    {
      id: 'ra', tone: 'blue', label: 'หัวใจห้องบนขวา (right atrium)',
      info: 'รับเลือดที่มี O₂ ต่ำจาก vena cava',
      at: [31, 52],
    },
    {
      id: 'rv', tone: 'blue', label: 'หัวใจห้องล่างขวา (right ventricle)',
      info: 'บีบเลือดไปปอดทาง pulmonary artery (pulmonary circulation)',
      at: [42, 72],
    },
    {
      id: 'la', tone: 'red', label: 'หัวใจห้องบนซ้าย (left atrium)',
      info: 'รับเลือดที่มี O₂ สูงจากปอดทาง pulmonary vein',
      at: [56, 46],
    },
    {
      id: 'lv', tone: 'red', label: 'หัวใจห้องล่างซ้าย (left ventricle)',
      info: 'บีบเลือดออกทาง aorta ไปเลี้ยงร่างกาย (systemic circulation)',
      at: [57, 68],
    },
    {
      id: 'pulmonary-artery', tone: 'blue', label: 'หลอดเลือดพัลโมนารีอาร์เทอรี (pulmonary artery)',
      info: 'นำเลือดที่มี O₂ ต่ำจาก ventricle ขวาไปปอด (เป็น artery เพราะออกจากหัวใจ แม้ O₂ ต่ำ)',
      at: [52, 34],
    },
    {
      id: 'aorta', tone: 'red', label: 'เอออร์ตา (aorta)',
      info: 'หลอดเลือดใหญ่ที่สุด นำเลือดจาก ventricle ซ้ายไปเลี้ยงร่างกาย แยกไปส่วนหัว-แขน และช่องท้อง-ขา',
      at: [45, 22],
    },
    {
      id: 'pulmonary-vein', tone: 'red', label: 'หลอดเลือดพัลโมนารีเวน (pulmonary vein)',
      info: 'นำเลือดที่มี O₂ สูงจากปอดกลับเข้า atrium ซ้าย (เป็น vein เพราะเข้าหัวใจ แม้ O₂ สูง)',
      at: [62, 44],
    },
    {
      id: 'tricuspid', tone: 'yellow', label: 'ลิ้นไตรคัสปิด (tricuspid valve) — AV valve ขวา',
      info: 'กั้นระหว่าง atrium ขวากับ ventricle ขวา ปิดเมื่อ ventricle บีบ → เสียง "lub" (S1)',
      at: [34, 62],
    },
    {
      id: 'mitral', tone: 'yellow', label: 'ลิ้นไบคัสปิด (bicuspid / mitral valve) — AV valve ซ้าย',
      info: 'กั้นระหว่าง atrium ซ้ายกับ ventricle ซ้าย',
      at: [57, 58],
    },
    {
      id: 'pulmonary-valve', tone: 'green', label: 'ลิ้นเซมิลูนาร์ด้านพัลโมนารี (semilunar valve)',
      info: 'กั้นระหว่าง pulmonary artery กับ ventricle ขวา ปิดเมื่อ ventricle คลายตัว → เสียง "dup" (S2)',
      at: [44, 46],
    },
    {
      id: 'aortic-valve', tone: 'green', label: 'ลิ้นเซมิลูนาร์ด้านเอออร์ตา (semilunar valve)',
      info: 'กั้นระหว่าง aorta กับ ventricle ซ้าย',
      at: [50, 50],
    },
  ],
};

export const nephron: Diagram = {
  id: 'nephron',
  title: 'หน่วยไต (nephron)',
  fig: 'a5-131',
  source: 'สัตว์ 5.7 สไลด์ 130–135',
  masks: [[37, 2, 53, 12.5], [51, 6.5, 64, 13.5], [57, 11.5, 72, 16.5], [71, 4.5, 86, 13.5], [41, 60.5, 59, 65.5], [71, 62.5, 83, 70.5]],
  parts: [
    {
      id: 'glomerulus', tone: 'red', label: 'โกลเมอรูลัส (glomerulus)',
      info: 'กลุ่มหลอดเลือดฝอย ที่นี่เกิดการกรอง (infiltration/filtration) น้ำและสารโมเลกุลเล็กออกไปใน Bowman\\\'s capsule',
      at: [62, 22],
    },
    {
      id: 'bowman', tone: 'yellow', label: 'โบว์แมนส์แคปซูล (Bowman\\\'s capsule)',
      info: 'ถ้วยหุ้ม glomerulus รับ filtrate (น้ำ กลูโคส ของเสียไนโตรเจน สารโมเลกุลเล็ก) — เม็ดเลือดและโปรตีนใหญ่ผ่านไม่ได้',
      at: [57, 25],
    },
    {
      id: 'proximal', tone: 'orange', label: 'ท่อขดส่วนต้น (proximal convoluted tubule)',
      info: 'ดูดกลับน้ำ กลูโคส NaCl กรดอะมิโน K⁺ HCO₃⁻ และหลั่ง NH₃ กับ H⁺',
      at: [42.5, 20],
    },
    {
      id: 'descending', tone: 'water', label: 'Loop of Henle ขาลง (descending limb)',
      info: 'ดูดกลับ "น้ำ" เพียงอย่างเดียว',
      at: [62, 55],
    },
    {
      id: 'ascending', tone: 'purple', label: 'Loop of Henle ขาขึ้น (ascending limb)',
      info: 'ดูดกลับ "NaCl" เพียงอย่างเดียว',
      at: [69, 55],
    },
    {
      id: 'distal', tone: 'pink', label: 'ท่อขดส่วนปลาย (distal convoluted tubule)',
      info: 'ดูดกลับ NaCl และ HCO₃⁻ หลั่ง H⁺ และ K⁺',
      at: [78, 25],
    },
    {
      id: 'collecting-duct', tone: 'blue', label: 'ท่อรวม (collecting duct)',
      info: 'ดูดกลับน้ำ NaCl และยูเรีย — ADH เพิ่มการดูดกลับน้ำที่นี่',
      at: [87, 60],
    },
  ],
};

export const neuron: Diagram = {
  id: 'neuron',
  title: 'เซลล์ประสาท (neuron)',
  fig: 'a5-149',
  source: 'สัตว์ 5.6 สไลด์ 149–152',
  masks: [[18, 8, 32, 16], [18, 24, 32, 32], [18, 36, 30, 44], [11, 50, 27, 59], [24, 52, 33, 60], [21, 68, 37, 79], [35, 66, 49, 80], [32, 44, 44, 55], [50, 45, 61, 52]],
  parts: [
    {
      id: 'dendrite', tone: 'orange', label: 'เดนไดรต์ (dendrite)',
      info: 'แขนงที่รับกระแสประสาทเข้าสู่ตัวเซลล์',
      at: [18, 20],
    },
    {
      id: 'cell-body', tone: 'yellow', label: 'ตัวเซลล์ (cell body)',
      info: 'ส่วนที่มีนิวเคลียส ควบคุมการทำงานของเซลล์',
      at: [9, 46],
    },
    {
      id: 'nucleus', tone: 'purple', label: 'นิวเคลียส (nucleus)',
      info: 'อยู่ในตัวเซลล์',
      at: [13, 39],
    },
    {
      id: 'axon', tone: 'orange', label: 'แอกซอน (axon)',
      info: 'ส่งกระแสประสาท (action potential) ออกจากตัวเซลล์ไปยังเซลล์อื่น — มัดของแอกซอนหลาย ๆ อันคือเส้นประสาท (nerve)',
      at: [12.5, 57],
    },
    {
      id: 'myelin', tone: 'blue', label: 'เยื่อไมอีลิน (myelin sheath)',
      info: 'หุ้มแอกซอน — ใน PNS สร้างจาก Schwann cell, ใน CNS สร้างจาก oligodendrocyte',
      at: [22, 68.5],
    },
    {
      id: 'node', tone: 'red', label: 'โหนดออฟแรนเวียร์ (node of Ranvier)',
      info: 'ช่องว่างระหว่างปลอกไมอีลินแต่ละช่วง',
      at: [25.5, 67.5],
    },
    {
      id: 'terminal', tone: 'green', label: 'ปลายแอกซอน (synaptic terminal)',
      info: 'ปล่อยสารสื่อประสาท (neurotransmitter) ข้ามไซแนปส์ไปยัง postsynaptic cell',
      at: [50.5, 68],
    },
  ],
};

export const respTract: Diagram = {
  id: 'resp-tract',
  title: 'ทางเดินหายใจของคน',
  fig: 'a5-117',
  source: 'สัตว์ 5.5 สไลด์ 117, 120',
  masks: [[3, 34, 18, 89], [43, 25, 58, 36], [43, 40, 58, 48], [31, 84, 43, 91], [55, 24, 71, 52], [79, 27, 97, 47], [82, 77, 94, 83], [64, 0, 100, 21]],
  parts: [
    {
      id: 'nasal', tone: 'grey', label: 'โพรงจมูก (nasal cavity)',
      info: 'ทางเข้าของอากาศ',
      at: [39, 27],
    },
    {
      id: 'pharynx', tone: 'pink', label: 'คอหอย (pharynx)',
      info: 'ทางผ่านร่วมของอากาศและอาหาร',
      at: [33, 38],
    },
    {
      id: 'larynx', tone: 'purple', label: 'กล่องเสียง (larynx)',
      info: 'อยู่ต่อจากคอหอย มี glottis ซึ่งถูกปิดด้วย epiglottis เวลากลืน',
      at: [34, 43],
    },
    {
      id: 'trachea', tone: 'blue', label: 'หลอดลม (trachea)',
      info: 'อยู่ด้านหน้าหลอดอาหาร นำอากาศลงสู่ปอด',
      at: [34.5, 50],
    },
    {
      id: 'bronchus', tone: 'blue', label: 'หลอดลมใหญ่ (bronchus)',
      info: 'แยกจาก trachea ไปปอดแต่ละข้าง',
      at: [33, 61],
    },
    {
      id: 'bronchiole', tone: 'water', label: 'หลอดลมฝอย (bronchiole)',
      info: 'แตกแขนงเล็กลงเรื่อย ๆ ไปสิ้นสุดที่ถุงลม',
      at: [26, 68],
    },
    {
      id: 'alveoli', tone: 'red', label: 'ถุงลม (alveoli)',
      info: 'บริเวณแลกเปลี่ยนแก๊ส ผนังบาง ล้อมด้วยหลอดเลือดฝอย ปอด 2 ข้างมี ~300 ล้านถุง พื้นที่ ~100 ตร.ม.',
      at: [86, 62],
    },
    {
      id: 'diaphragm', tone: 'brown', label: 'กะบังลม (diaphragm)',
      info: 'หดตัว → เลื่อนต่ำลง ช่องอกขยาย ความดันลด อากาศไหลเข้า (หายใจเข้า); คลายตัว → โค้งขึ้น (หายใจออก)',
      at: [30, 85],
    },
  ],
};

export const glands: Diagram = {
  id: 'glands',
  title: 'ต่อมไร้ท่อ 9 ต่อมในร่างกายคน',
  fig: 'a5-162',
  source: 'สัตว์ 5.6 สไลด์ 162–164',
  masks: [[0, 3, 46, 20], [0, 25, 42, 34], [0, 37, 23, 42.5], [0, 47, 36, 52.5], [0, 58, 23, 63.5], [0, 72, 21, 80.5], [0, 82, 21, 92]],
  parts: [
    {
      id: 'hypothalamus', tone: 'purple', label: 'ไฮโปทาลามัส (hypothalamus)',
      info: 'เชื่อมระบบประสาทกับต่อมไร้ท่อ สร้าง ADH, oxytocin (ส่งไปต่อมใต้สมองส่วนหลัง) และ releasing/inhibiting hormones (ควบคุมต่อมใต้สมองส่วนหน้า)',
      at: [57, 12],
    },
    {
      id: 'pituitary', tone: 'pink', label: 'ต่อมใต้สมอง (pituitary gland)',
      info: 'ส่วนหลัง: ปล่อย ADH, oxytocin · ส่วนหน้า: GH, prolactin, FSH, LH, TSH, ACTH',
      at: [55, 17],
    },
    {
      id: 'pineal', tone: 'yellow', label: 'ต่อมไพเนียล (pineal gland)',
      info: 'หลั่ง melatonin เกี่ยวกับจังหวะชีวภาพ (สว่าง/มืด)',
      at: [63, 13.5],
    },
    {
      id: 'thyroid', tone: 'red', label: 'ต่อมไทรอยด์ (thyroid gland)',
      info: 'หลั่ง T3, T4 (เพิ่ม metabolism) และ calcitonin (ลดแคลเซียมในเลือด)',
      at: [61, 28],
    },
    {
      id: 'parathyroid', tone: 'orange', label: 'ต่อมพาราไทรอยด์ (parathyroid glands)',
      info: 'หลั่ง PTH เพิ่มแคลเซียมในเลือด',
      at: [65.5, 30.5],
    },
    {
      id: 'thymus', tone: 'blue', label: 'ต่อมไทมัส (thymus)',
      info: 'หลั่ง thymosin กระตุ้น T lymphocyte',
      at: [63, 39],
    },
    {
      id: 'adrenal', tone: 'yellow', label: 'ต่อมหมวกไต (adrenal glands)',
      info: 'medulla: epinephrine/norepinephrine · cortex: glucocorticoids, mineralocorticoids (aldosterone)',
      at: [57, 57],
    },
    {
      id: 'pancreas', tone: 'green', label: 'ตับอ่อน (pancreas)',
      info: 'หลั่ง insulin (ลดกลูโคสในเลือด) และ glucagon (เพิ่มกลูโคส)',
      at: [63, 61],
    },
    {
      id: 'gonads', tone: 'pink', label: 'อวัยวะสืบพันธุ์ (gonads: ovary / testis)',
      info: 'testis: androgens · ovary: estrogens, progesterone',
      at: [65, 87],
    },
  ],
};
export const animalDiagrams: Diagram[] = [giTract, heart, nephron, neuron, respTract, glands];
