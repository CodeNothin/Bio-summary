// =====================================================================
// Practice questions — สัตว์ 5.1 (organization: levels, tissues, organs)
// and สัตว์ 5.2 (forms & functions, homeostasis, exchange).
// Source deck: Gen_bio_107_Unit_5 slides 4–32.
// Editing rules: see the top of p-structure.ts.
//
// Decision (user, TODO 2): collagen fiber is explained exactly as slide 15
// says ("made of fibrin and microfibril", flexibility + strength).
// =====================================================================
import type { Question } from '../types';

export const aOrganization: Question[] = [
  // ---------------------------------------------------------- ao-levels
  {
    id: 'ao-lv-01', type: 'order', topic: 'ao-levels', source: 'สัตว์ 5.1 สไลด์ 6–7',
    prompt: 'เรียงลำดับขั้นการจัดระบบของสิ่งมีชีวิต จากเล็กไปใหญ่',
    steps: ['เซลล์ (cell)', 'เนื้อเยื่อ (tissue)', 'อวัยวะ (organ)', 'ระบบอวัยวะ (organ system)', 'สิ่งมีชีวิต (organism)'],
    hints: ['tissue = กลุ่มเซลล์ที่ทำหน้าที่เหมือนกัน'],
    explanation: 'cell → tissue → organ → organ system → organism (ถ้าละเอียดกว่านั้น: atom → molecule → organelle → cell)',
  },
  {
    id: 'ao-lv-02', type: 'match', topic: 'ao-levels', source: 'สัตว์ 5.1 สไลด์ 7, 25',
    prompt: 'จับคู่ลำดับขั้นกับตัวอย่าง',
    pairs: [
      { left: 'cell', right: 'เซลล์ประสาท เซลล์เม็ดเลือด เซลล์กระดูก' },
      { left: 'tissue', right: 'เนื้อเยื่อประสาท เลือด กระดูก' },
      { left: 'organ', right: 'สมอง หัวใจ ผิวหนัง' },
      { left: 'organ system', right: 'ระบบประสาท ระบบไหลเวียนเลือด ระบบโครงกระดูก' },
    ],
    hints: ['"เลือด" เป็นเนื้อเยื่อ ส่วน "เซลล์เม็ดเลือด" เป็นเซลล์'],
    explanation: 'organ = เนื้อเยื่อ ≥ 2 กลุ่มทำงานร่วมกัน (หัวใจ = กล้ามเนื้อหัวใจ + เส้นประสาท + เลือด) · organ system = อวัยวะหลายอย่างทำงานร่วมกัน',
  },
  {
    id: 'ao-lv-03', type: 'mcq', topic: 'ao-levels', source: 'สัตว์ 5.1 สไลด์ 5',
    prompt: 'การศึกษา "หน้าที่" การทำงานของร่างกาย เรียกว่าอะไร',
    options: [
      { text: 'สรีรวิทยา (physiology)', correct: true, why: 'physiology = study of function' },
      { text: 'กายวิภาคศาสตร์ (anatomy)', why: 'anatomy = ศึกษาโครงสร้างและตำแหน่งปกติของอวัยวะ' },
      { text: 'นิเวศวิทยา (ecology)', why: 'ศึกษาความสัมพันธ์กับสิ่งแวดล้อม (บทที่ 6)' },
      { text: 'วิวัฒนาการ (evolution)', why: 'ไม่ใช่การศึกษาหน้าที่ของร่างกาย' },
    ],
    hints: ['"Anatomy of the body allows it to function"'],
    explanation: 'anatomy (โครงสร้าง) กับ physiology (หน้าที่) ไปด้วยกัน — โครงสร้างทำให้ทำหน้าที่ได้',
  },
  {
    id: 'ao-lv-04', type: 'tf', topic: 'ao-levels', source: 'สัตว์ 5.1 สไลด์ 4',
    statement: 'ในสิ่งมีชีวิตเซลล์เดียว เซลล์เดียวต้องทำทุกหน้าที่ที่จำเป็นต่อการอยู่รอด ส่วนสิ่งมีชีวิตหลายเซลล์มีเซลล์ที่ทำหน้าที่เฉพาะและพึ่งพากัน',
    answer: true,
    why: 'ตรงกับสไลด์ 4',
    hints: ['multicellular = specialized cells work together'],
    explanation: 'กระบวนการพื้นฐานของชีวิต: metabolism, responsiveness, movement, growth, differentiation, reproduction',
  },
  // ---------------------------------------------------------- ao-epithelial
  {
    id: 'ao-ep-01', type: 'mcq', topic: 'ao-epithelial', source: 'สัตว์ 5.1 สไลด์ 13–14',
    prompt: 'เนื้อเยื่อบุผิวที่ "ดูเหมือนมีหลายชั้น แต่ทุกเซลล์ยังติดอยู่บนเยื่อรองรับฐาน" พบที่ทางเดินหายใจส่วนต้น เรียกว่าอะไร',
    options: [
      { text: 'pseudostratified epithelium', correct: true, why: 'pseudo- = เทียม หลายชั้นแบบเทียม' },
      { text: 'stratified epithelium', why: 'เรียงหลายชั้นจริง เซลล์ชั้นบนไม่ติด basement membrane' },
      { text: 'simple epithelium', why: 'ชั้นเดียว และดูเป็นชั้นเดียวด้วย' },
      { text: 'simple squamous epithelium', why: 'แบนชั้นเดียว พบที่ถุงลมและผนังหลอดเลือด' },
    ],
    hints: ['ดูคำว่า "เทียม"'],
    explanation: 'pseudostratified ciliated columnar พบที่โพรงจมูก หลอดลม ขั้วปอด — นิวเคลียสอยู่สูงต่ำไม่เท่ากันจึงดูเหมือนหลายชั้น',
  },
  {
    id: 'ao-ep-02', type: 'match', topic: 'ao-epithelial', source: 'สัตว์ 5.1 สไลด์ 12, 14',
    prompt: 'จับคู่ชนิดเนื้อเยื่อบุผิวกับตำแหน่งที่พบ',
    pairs: [
      { left: 'simple squamous', right: 'ถุงลมในปอด ผนังหลอดเลือด (endothelium)' },
      { left: 'simple cuboidal', right: 'ท่อไต ต่อมไทรอยด์ ต่อมน้ำลาย' },
      { left: 'simple columnar', right: 'กระเพาะอาหาร ลำไส้เล็ก' },
      { left: 'stratified squamous', right: 'ผิวหนัง ช่องปาก หลอดอาหาร ทวารหนัก' },
      { left: 'pseudostratified ciliated columnar', right: 'โพรงจมูก หลอดลม ขั้วปอด' },
    ],
    hints: ['ที่ที่ต้อง "แลกเปลี่ยนสาร" ใช้เซลล์แบนบาง', 'ที่ที่เสียดสีบ่อยใช้หลายชั้น'],
    explanation: 'รูปร่างกับหน้าที่: แบนบาง → แลกเปลี่ยน · ลูกเต๋า → หลั่ง · ทรงสูง → ดูดซึม · หลายชั้น → ป้องกัน',
  },
  {
    id: 'ao-ep-03', type: 'tf', topic: 'ao-epithelial', source: 'สัตว์ 5.1 สไลด์ 12',
    statement: 'simple columnar epithelium บุผนังท่อทางเดินอาหารทั้งหมดรวมถึงหลอดอาหารและทวารหนัก',
    answer: false,
    why: 'สไลด์ 12: บุผนังท่อทางเดินอาหาร "ยกเว้นหลอดอาหารและทวารหนัก" (สองแห่งนี้เป็น stratified squamous)',
    hints: ['หลอดอาหารต้องทนการเสียดสีของอาหาร'],
    explanation: 'หลอดอาหารและทวารหนักเป็น stratified squamous epithelium',
  },
  {
    id: 'ao-ep-04', type: 'mcq', topic: 'ao-epithelial', source: 'สัตว์ 5.1 สไลด์ 11',
    prompt: 'เนื้อเยื่อบุผิวที่ดัดแปลงไปทำหน้าที่ "สร้างและหลั่งสาร" เรียกว่าอะไร',
    options: [
      { text: 'glandular epithelium', correct: true, why: 'gland = ต่อม' },
      { text: 'neuroepithelium', why: 'ทำหน้าที่รับความรู้สึก' },
      { text: 'myoepithelium', why: 'เกี่ยวกับการเคลื่อนไหว' },
      { text: 'pigmented epithelium', why: 'สะสมรงควัตถุ' },
    ],
    hints: ['gland = ต่อม'],
    explanation: 'แบ่งตามหน้าที่: covering epithelium (ปกคลุม) และ modified epithelium (glandular, neuro-, myo-, pigmented)',
  },
  // ---------------------------------------------------------- ao-connective
  {
    id: 'ao-ct-01', type: 'match', topic: 'ao-connective', source: 'สัตว์ 5.1 สไลด์ 15',
    prompt: 'จับคู่เส้นใยในเนื้อเยื่อเกี่ยวพันกับลักษณะตามสไลด์',
    pairs: [
      { left: 'collagen fiber', right: 'ตรง ขนาดใหญ่ ประกอบจาก fibrin และ microfibril ให้ความยืดหยุ่นและความแข็งแรง' },
      { left: 'elastic fiber', right: 'ลอนคลื่น ยืดหยุ่นสูงสุด พบที่ aorta และกระดูกอ่อนใบหู' },
      { left: 'reticular fiber', right: 'เล็ก บาง สานเป็นร่างแห พบที่ไขกระดูก ม้าม ต่อมน้ำเหลือง' },
    ],
    hints: ['reticul- = ร่างแห'],
    explanation: 'เนื้อเยื่อเกี่ยวพัน = เซลล์กระจายอยู่ใน extracellular matrix (เส้นใย + น้ำ + ของเหลว)',
  },
  {
    id: 'ao-ct-02', type: 'mcq', topic: 'ao-connective', source: 'สัตว์ 5.1 สไลด์ 16',
    prompt: 'เอ็นยึดกล้ามเนื้อกับกระดูก (tendon) และเอ็นยึดกระดูกกับกระดูก (ligament) เป็นเนื้อเยื่อชนิดใด',
    options: [
      { text: 'dense connective tissue', correct: true, why: 'fibroblast + collagen จำนวนมาก เรียงชิดแน่น' },
      { text: 'loose connective tissue', why: 'โปร่งบาง ห่อหุ้มกล้ามเนื้อ หลอดเลือด เส้นประสาท' },
      { text: 'adipose tissue', why: 'เนื้อเยื่อไขมัน' },
      { text: 'cartilage', why: 'กระดูกอ่อน' },
    ],
    hints: ['ต้องแข็งแรงทนแรงดึงมาก → เส้นใยต้องแน่น'],
    explanation: 'connective tissue proper แบ่งเป็น loose และ dense ตามการเรียงตัวของเส้นใยและเซลล์',
  },
  {
    id: 'ao-ct-03', type: 'match', topic: 'ao-connective', source: 'สัตว์ 5.1 สไลด์ 18',
    prompt: 'จับคู่ชนิดกระดูกอ่อนกับตัวอย่าง',
    pairs: [
      { left: 'hyaline cartilage', right: 'ผนังกั้นรูจมูก (เส้นใยแทรกน้อย)' },
      { left: 'elastic cartilage', right: 'ใบหู (เส้นใยอีลาสติกมาก ยืดหยุ่นสูง)' },
      { left: 'fibrocartilage', right: 'กั้นระหว่างข้อกระดูกสันหลัง (คอลลาเจนมาก เหนียวแข็งแรง)' },
    ],
    hints: ['ใบหูพับได้ = ยืดหยุ่น'],
    explanation: 'กระดูกอ่อน: chondrocyte อยู่ในช่อง lacuna',
  },
  {
    id: 'ao-ct-04', type: 'mcq', topic: 'ao-connective', source: 'สัตว์ 5.1 สไลด์ 19',
    prompt: 'เซลล์ที่ทำหน้าที่ "สร้าง" กระดูก และ "ทำลาย" กระดูก คือข้อใดตามลำดับ',
    options: [
      { text: 'osteoblast / osteoclast', correct: true, why: '-blast = สร้าง · -clast = ทำลาย' },
      { text: 'osteoclast / osteoblast', why: 'สลับกัน' },
      { text: 'osteocyte / chondrocyte', why: 'osteocyte = เซลล์กระดูกใน lacuna, chondrocyte = เซลล์กระดูกอ่อน' },
      { text: 'fibroblast / osteocyte', why: 'fibroblast อยู่ใน connective tissue proper' },
    ],
    hints: ['จำ: clast = crash (ทำลาย)'],
    explanation: 'ใช้ต่อในเรื่องฮอร์โมนควบคุมแคลเซียม: PTH กระตุ้น osteoclast, calcitonin กระตุ้น osteoblast',
  },
  {
    id: 'ao-ct-05', type: 'tf', topic: 'ao-connective', source: 'สัตว์ 5.1 สไลด์ 20',
    statement: 'เลือดจัดเป็นเนื้อเยื่อเกี่ยวพัน โดยมีน้ำเลือด (plasma) เป็น matrix ที่เป็นของเหลว',
    answer: true,
    why: 'สไลด์ 20 — และ plasma ไม่ได้สร้างจากเซลล์เม็ดเลือด',
    hints: ['เนื้อเยื่อเกี่ยวพัน = เซลล์ + matrix'],
    explanation: 'เนื้อเยื่อเกี่ยวพัน 4 แบบ: proper, adipose, supporting (cartilage, bone), blood',
  },
  // ---------------------------------------------------------- ao-muscle-nerve
  {
    id: 'ao-mn-01', type: 'sort', topic: 'ao-muscle-nerve', source: 'สัตว์ 5.1 สไลด์ 23',
    prompt: 'จัดลักษณะต่อไปนี้ให้ตรงกับชนิดกล้ามเนื้อ',
    bins: [
      { id: 'sk', label: 'กล้ามเนื้อโครงร่าง (skeletal)' },
      { id: 'ca', label: 'กล้ามเนื้อหัวใจ (cardiac)' },
      { id: 'sm', label: 'กล้ามเนื้อเรียบ (smooth)' },
    ],
    items: [
      { text: 'นิวเคลียสมากกว่า 1 อัน อยู่รอบนอก', bin: 'sk' },
      { text: 'ทำงานภายใต้อำนาจจิตใจ (voluntary)', bin: 'sk' },
      { text: 'มี intercalated discs', bin: 'ca' },
      { text: 'เซลล์แตกแขนง (bifurcate)', bin: 'ca' },
      { text: 'เซลล์รูปกระสวย', bin: 'sm' },
      { text: 'บุผนังหลอดอาหาร บีบตัวแบบ peristalsis', bin: 'sm' },
    ],
    hints: ['involuntary มีทั้ง cardiac และ smooth — ใช้ลักษณะอื่นแยก'],
    explanation: 'skeletal: ยาว หลายนิวเคลียส ลาย voluntary · cardiac: แตกแขนง 1 นิวเคลียส intercalated disc involuntary · smooth: กระสวย 1 นิวเคลียส involuntary',
  },
  {
    id: 'ao-mn-02', type: 'mcq', topic: 'ao-muscle-nerve', source: 'สัตว์ 5.1 สไลด์ 24',
    prompt: 'ส่วนของเซลล์ประสาทที่ทำหน้าที่ "รับ" กระแสประสาท คือข้อใด',
    options: [
      { text: 'เดนไดรต์ (dendrite)', correct: true, why: 'dendrite รับกระแสประสาท' },
      { text: 'แอกซอน (axon)', why: 'axon "ส่ง" กระแสประสาทออก' },
      { text: 'เซลล์ค้ำจุน (neuroglia)', why: 'เป็นอีกเซลล์หนึ่งในเนื้อเยื่อประสาท ไม่ใช่ส่วนของ neuron' },
      { text: 'ปลอกไมอีลิน', why: 'หุ้มแอกซอน' },
    ],
    hints: ['dendr- = กิ่งก้าน แผ่ออกไปรับสัญญาณ'],
    explanation: 'เนื้อเยื่อประสาท = neuron + neuroglia · neuron = cell body + processes (dendrite รับ, axon ส่ง)',
  },
  // ---------------------------------------------------------- ao-organs
  {
    id: 'ao-or-01', type: 'mcq', topic: 'ao-organs', source: 'สัตว์ 5.1 สไลด์ 25',
    prompt: 'ร่างกายคนมีระบบอวัยวะทั้งหมดกี่ระบบ (ตามสไลด์)',
    options: [
      { text: '11 ระบบ', correct: true, why: 'circulatory, digestive, endocrine, excretory, immune, integumentary, muscular, nervous, reproductive, respiratory, skeletal' },
      { text: '9 ระบบ', why: '9 คือจำนวนต่อมไร้ท่อ' },
      { text: '4 ระบบ', why: '4 คือจำนวนชนิดเนื้อเยื่อหลัก' },
      { text: '12 ระบบ', why: 'ไม่ตรงกับสไลด์' },
    ],
    hints: ['ระวังสับสนกับ "4 เนื้อเยื่อ" และ "9 ต่อมไร้ท่อ"'],
    explanation: 'The human body has 11 organ systems',
  },
  {
    id: 'ao-or-02', type: 'tf', topic: 'ao-organs', source: 'สัตว์ 5.1 สไลด์ 25',
    statement: 'อวัยวะ (organ) คือโครงสร้างที่ประกอบด้วยเนื้อเยื่ออย่างน้อย 2 กลุ่มที่ทำงานร่วมกันในกิจกรรมเฉพาะ',
    answer: true,
    why: 'ตามนิยามในสไลด์ 25 เช่น หัวใจมีกล้ามเนื้อหัวใจ เส้นประสาท และเลือด',
    hints: ['หัวใจมีเนื้อเยื่ออะไรบ้าง?'],
    explanation: 'organ system = กลุ่มอวัยวะที่ทำงานร่วมกัน เช่น หัวใจ + หลอดเลือด = ระบบไหลเวียนเลือด',
  },
];

export const aForm: Question[] = [
  {
    id: 'af-sh-01', type: 'mcq', topic: 'af-shape', source: 'สัตว์ 5.2 สไลด์ 28–29',
    prompt: 'ปลาทูน่า ฉลาม เพนกวิน โลมา และแมวน้ำ มีรูปร่างเพรียวคล้ายกันทั้งที่เป็นสัตว์ต่างกลุ่ม เพราะเหตุใด',
    options: [
      { text: 'น้ำมีความหนาแน่นมากกว่าอากาศ ยิ่งลึกแรงต้านยิ่งมาก การคัดเลือกตามธรรมชาติจึงคัดรูปร่างที่ลดแรงต้าน', correct: true, why: 'ปัจจัยทางกายภาพเป็นตัวผลักดันวิวัฒนาการ' },
      { text: 'สัตว์ทั้งห้าเป็นญาติใกล้ชิดกัน', why: 'เป็นปลา นก และสัตว์เลี้ยงลูกด้วยนม ไม่ได้ใกล้ชิดกัน' },
      { text: 'สัตว์ทั้งห้ากินอาหารชนิดเดียวกัน', why: 'ไม่ใช่เหตุผลในสไลด์' },
      { text: 'สัตว์ตั้งใจปรับรูปร่างตัวเองในช่วงชีวิต', why: 'วิวัฒนาการเกิดผ่านการคัดเลือกตามธรรมชาติหลายรุ่น' },
    ],
    hints: ['ข้อสังเกตในสไลด์ 29: ความหนาแน่นของน้ำ'],
    explanation: 'ปัจจัยทางกายภาพและความต้องการแลกเปลี่ยนสารมีผลต่อขนาดและรูปร่างของสัตว์',
  },
  {
    id: 'af-ho-01', type: 'mcq', topic: 'af-homeostasis', source: 'สัตว์ 5.2 สไลด์ 30',
    prompt: 'ภาวะธำรงดุล (homeostasis) หมายถึงอะไร',
    options: [
      { text: 'การรักษาสภาพภายในร่างกายให้เปลี่ยนแปลงน้อย อยู่ในช่วงที่ยอมรับได้ แม้สิ่งแวดล้อมภายนอกเปลี่ยนแปลงมาก', correct: true, why: 'Large changes outside → small changes inside' },
      { text: 'การทำให้ร่างกายเปลี่ยนตามสิ่งแวดล้อมภายนอกทุกอย่าง', why: 'นั่นคือ conformer' },
      { text: 'การรักษาค่าทุกอย่างในร่างกายให้คงที่ตายตัวไม่เปลี่ยนเลย', why: 'ยอมให้เปลี่ยนได้ใน "ช่วงที่ยอมรับได้"' },
      { text: 'การที่สิ่งมีชีวิตอพยพหนีสภาพแวดล้อม', why: 'ไม่ใช่นิยาม' },
    ],
    hints: ['ดูภาพแมวในสไลด์ 30'],
    explanation: 'homeostasis = การปรับตัวเพื่อรักษาภาวะสมดุลภายในร่างกาย',
  },
  {
    id: 'af-ex-01', type: 'mcq', topic: 'af-exchange', source: 'สัตว์ 5.2 สไลด์ 31–32',
    prompt: 'สิ่งมีชีวิตที่มีความซับซ้อนมากขึ้น แก้ปัญหาการแลกเปลี่ยนสารกับสิ่งแวดล้อมอย่างไร',
    options: [
      { text: 'มีส่วนที่เป็นท่อพับไปมาภายในร่างกายเพื่อเพิ่มพื้นที่ผิว และมีระบบไหลเวียนเชื่อมกับเซลล์ผ่าน interstitial fluid', correct: true, why: 'เช่น ถุงลมในปอด วิลไลในลำไส้ ท่อในไต' },
      { text: 'ให้ทุกเซลล์สัมผัสน้ำภายนอกโดยตรง', why: 'ทำได้เฉพาะสัตว์เล็ก ๆ เช่น ไฮดรา (2 ชั้นเซลล์)' },
      { text: 'ลดจำนวนเซลล์ลง', why: 'ไม่ใช่วิธีที่สไลด์กล่าว' },
      { text: 'ใช้การแพร่ผ่านผิวหนังอย่างเดียว', why: 'ไม่พอสำหรับสัตว์ขนาดใหญ่' },
    ],
    hints: ['ดูภาพในสไลด์ 32: ปอด ลำไส้ ไต'],
    explanation: 'protist แลกเปลี่ยนโดยตรง · ไฮดรามี 2 ชั้นเซลล์รอบ gastrovascular cavity · สัตว์ซับซ้อนใช้พื้นผิวพับ + ระบบไหลเวียน',
  },
  {
    id: 'af-ex-02', type: 'tf', topic: 'af-exchange', source: 'สัตว์ 5.2 สไลด์ 31',
    statement: 'protist ที่เป็นสิ่งมีชีวิตเซลล์เดียวอาศัยในแหล่งน้ำ สามารถแลกเปลี่ยนสารอาหารกับสิ่งแวดล้อมได้โดยตรงด้วยการแพร่',
    answer: true,
    why: 'สไลด์ 31',
    hints: ['เซลล์เดียว = ทุกส่วนอยู่ใกล้ผิว'],
    explanation: 'สัตว์หลายเซลล์ที่มี 2 ชั้นเซลล์ก็ยังแลกเปลี่ยนผ่านเยื่อหุ้มเซลล์ได้ เพราะทุกเซลล์สัมผัสน้ำ',
  },
];
