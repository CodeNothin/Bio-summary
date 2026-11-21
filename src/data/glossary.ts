// =====================================================================
// Key terms (for the "คำศัพท์" page and the flashcards) and comparison
// tables (exam favourites: "ต่างกันอย่างไร").
//
// Each term links to the page section where it is explained; the test
// checks that every link points to a real section.
// To add a term: add { th, en, def, page, section } to `terms`.
// To add a table: add { title, page, head, rows } to `compares`.
// =====================================================================
import type { Compare, Term } from './types';

export const terms: Term[] = [
  // ---------------------------------------------------- plant structure
  { th: 'เนื้อเยื่อผิว', en: 'dermal tissue (epidermis)', def: 'ชั้นนอกสุดที่ห่อหุ้มอวัยวะพืช', page: 'p-structure', section: 'pl-tissues' },
  { th: 'เนื้อเยื่อลำเลียง', en: 'vascular tissue', def: 'ไซเลม (ลำเลียงน้ำ) + โฟลเอ็ม (ลำเลียงอาหาร)', page: 'p-structure', section: 'pl-tissues' },
  { th: 'เนื้อเยื่อพื้นฐาน', en: 'ground tissue', def: 'cortex, pith, mesophyll — ประกอบด้วย parenchyma, collenchyma, sclerenchyma', page: 'p-structure', section: 'pl-tissues' },
  { th: 'เอนโดเดอร์มิส', en: 'endodermis', def: 'ชั้นในสุดของ cortex ในราก ผนังมี suberin', page: 'p-structure', section: 'pl-tissues' },
  { th: 'เพอริไซเคิล', en: 'pericycle', def: 'ชั้นนอกสุดของ vascular tissue ในราก สร้างรากแขนง', page: 'p-structure', section: 'pl-tissues' },
  { th: 'พิธ', en: 'pith', def: 'ground tissue ด้านในสุดของลำต้นใบเลี้ยงคู่', page: 'p-structure', section: 'pl-tissues' },
  { th: 'ข้อ / ปล้อง', en: 'node / internode', def: 'ข้อ = ที่ใบติด, ปล้อง = ช่วงระหว่างข้อ — มีในลำต้น ไม่มีในราก', page: 'p-structure', section: 'pl-organs' },
  { th: 'เนื้อเยื่อเจริญ', en: 'meristem', def: 'เซลล์ที่แบ่งตัวได้ — apical (ปลายยอด/ราก) และ lateral (vascular/cork cambium)', page: 'p-structure', section: 'pl-cells' },
  { th: 'แพลิเซด / สปันจี', en: 'palisade / spongy mesophyll', def: 'palisade: ทรงกระบอกเรียงแน่น ดูดกลืนแสง · spongy: เรียงหลวม แก๊สแพร่', page: 'p-structure', section: 'pl-leaf' },
  { th: 'การเติบโตขั้นทุติยภูมิ', en: 'secondary growth', def: 'vascular cambium สร้าง secondary xylem/phloem ทำให้ลำต้นขยายขนาด', page: 'p-structure', section: 'pl-growth' },
  // ---------------------------------------------------- plant nutrition
  { th: 'ธาตุที่จำเป็น', en: 'essential element', def: 'ถ้าขาด พืชแสดงอาการขาดธาตุและอยู่ไม่ครบวงชีพ — มี 17 ธาตุ', page: 'p-nutrition', section: 'pn-essential' },
  { th: 'ธาตุเคลื่อนย้ายได้', en: 'mobile element', def: 'ย้ายจากใบแก่ไปใบอ่อนได้ อาการขาดจึงเกิดที่ใบแก่ก่อน (N, P, K, Mg, S ตามสไลด์)', page: 'p-nutrition', section: 'pn-roles' },
  { th: 'ใบเหลือง', en: 'chlorosis', def: 'อาการใบเหลืองจากการขาดธาตุ เช่น N, Fe', page: 'p-nutrition', section: 'pn-roles' },
  { th: 'ธาตุเสริมประโยชน์', en: 'beneficial element', def: 'จำเป็นเฉพาะพืชบางชนิด แต่ช่วยพืชอื่นให้โตดี/ทนเครียด: Na, Si, Co, Se, Al', page: 'p-nutrition', section: 'pn-beneficial' },
  // ---------------------------------------------------- plant transport
  { th: 'การไหลเป็นกลุ่ม', en: 'bulk flow (mass flow)', def: 'กลุ่มโมเลกุลเคลื่อนที่ไปด้วยกันเพราะความต่างของความดัน', page: 'p-transport', section: 'pt-process' },
  { th: 'ศักย์ของน้ำ', en: 'water potential (Ψw)', def: 'พลังงานอิสระของน้ำ Ψw = Ψs + Ψp · น้ำไหลจาก Ψw สูงไปต่ำ', page: 'p-transport', section: 'pt-psi' },
  { th: 'แรงดันเต่ง', en: 'turgor pressure', def: 'Ψp ที่เป็นบวก เกิดเมื่อน้ำเข้าเซลล์ดันผนังเซลล์', page: 'p-transport', section: 'pt-psi' },
  { th: 'แรงดึงจากการคายน้ำ', en: 'transpiration pull', def: 'การคายน้ำที่ใบดึงสายน้ำในไซเลมขึ้นไป (cohesion + adhesion)', page: 'p-transport', section: 'pt-xylem' },
  { th: 'แหล่งสร้าง / แหล่งใช้', en: 'source / sink', def: 'source: ใบ ที่สะสมอาหาร · sink: ผล ดอก ราก ส่วนที่กำลังโต', page: 'p-transport', section: 'pt-pressureflow' },
  { th: 'แบบจำลองการไหลด้วยความดัน', en: 'pressure-flow model (Münch)', def: 'น้ำตาลโหลดที่ source → น้ำเข้า → ความดันสูง → sap ไหลไป sink', page: 'p-transport', section: 'pt-pressureflow' },
  // ---------------------------------------------------- plant response
  { th: 'ไฟโตโครม', en: 'phytochrome', def: 'โปรตีนรับแสง: red → Pfr (active), far-red → Pr (inactive)', page: 'p-response', section: 'pr-light' },
  { th: 'การเบนตามแสง', en: 'phototropism', def: 'ยอดโค้งเข้าหาแสงเพราะออกซินสะสมด้านไกลแสง รับแสงด้วย phototropin', page: 'p-response', section: 'pr-auxin' },
  { th: 'การข่มของตายอด', en: 'apical dominance', def: 'ออกซินจากตายอดข่มไม่ให้ตาข้างเจริญเป็นกิ่ง', page: 'p-response', section: 'pr-auxin' },
  { th: 'ตัวส่งสัญญาณที่สอง', en: 'second messenger', def: 'สารในเซลล์ที่ขยายสัญญาณ เช่น Ca²⁺, NO, cAMP, IP₃', page: 'p-response', section: 'pr-steps' },
  { th: 'การตอบสนองสามแบบ', en: 'triple response', def: 'ต้นกล้าที่ได้ ethylene: อ้วน เตี้ย ไม่ตอบสนองแรงโน้มถ่วง', page: 'p-response', section: 'pr-hormones' },
  // ---------------------------------------------------- animal
  { th: 'กายวิภาคศาสตร์ / สรีรวิทยา', en: 'anatomy / physiology', def: 'anatomy ศึกษาโครงสร้าง · physiology ศึกษาหน้าที่', page: 'a-organization', section: 'ao-levels' },
  { th: 'เยื่อรองรับฐาน', en: 'basement membrane', def: 'ด้านที่เนื้อเยื่อบุผิวยึดติด ส่วนด้านอิสระเรียก apical surface', page: 'a-organization', section: 'ao-epithelial' },
  { th: 'สารระหว่างเซลล์', en: 'extracellular matrix', def: 'เส้นใย + น้ำ + ของเหลว ที่เซลล์เนื้อเยื่อเกี่ยวพันกระจายอยู่', page: 'a-organization', section: 'ao-connective' },
  { th: 'ภาวะธำรงดุล', en: 'homeostasis', def: 'รักษาสภาพภายในให้อยู่ในช่วงที่เหมาะสม แม้ภายนอกเปลี่ยนมาก', page: 'a-form', section: 'af-homeostasis' },
  { th: 'การบีบตัวเป็นจังหวะ', en: 'peristalsis', def: 'กล้ามเนื้อเรียบหด–คลายเป็นจังหวะ ดันอาหารไปตามทางเดินอาหาร', page: 'a-digestion', section: 'ad-upper' },
  { th: 'อาหารคลุกน้ำย่อย', en: 'acid chyme', def: 'อาหารที่กลืน + gastric juice ในกระเพาะ', page: 'a-digestion', section: 'ad-upper' },
  { th: 'วิลไล / ไมโครวิลไล', en: 'villi / microvilli', def: 'ส่วนพับและส่วนยื่นของผนังลำไส้เล็ก เพิ่มพื้นที่ดูดซึม', page: 'a-digestion', section: 'ad-lower' },
  { th: 'ทำให้ไขมันแตกตัว', en: 'emulsification', def: 'เกลือน้ำดีทำให้ไขมันก้อนใหญ่เป็นก้อนเล็ก lipase ทำงานง่ายขึ้น', page: 'a-digestion', section: 'ad-lower' },
  { th: 'ไคโลไมครอน', en: 'chylomicron', def: 'ไขมัน + cholesterol ในเซลล์ลำไส้ ขนส่งเข้าหลอดน้ำเหลือง', page: 'a-digestion', section: 'ad-absorb' },
  { th: 'ฮีโมลิมฟ์', en: 'hemolymph', def: 'ของเหลวในระบบไหลเวียนแบบเปิด', page: 'a-circulation', section: 'ac-types' },
  { th: 'ระยะบีบ / ระยะคลาย', en: 'systole / diastole', def: 'systole = ช่วงหัวใจบีบตัว · diastole = ช่วงคลายตัว', page: 'a-circulation', section: 'ac-cycle' },
  { th: 'ปริมาณเลือดที่หัวใจบีบออกต่อนาที', en: 'cardiac output', def: 'heart rate × stroke volume เช่น 70 × 75 mL = 5.25 L/min', page: 'a-circulation', section: 'ac-cycle' },
  { th: 'การแลกเปลี่ยนแบบสวนทาง', en: 'countercurrent exchange', def: 'เลือดไหลสวนทางกับน้ำในเหงือกปลา O₂ แพร่เข้าเลือดได้ตลอด', page: 'a-respiration', section: 'ar-organs' },
  { th: 'ความดันย่อย', en: 'partial pressure', def: 'แก๊สแพร่จากความดันย่อยสูงไปต่ำ', page: 'a-respiration', section: 'ar-transport' },
  { th: 'ศักย์ทำงาน', en: 'action potential', def: 'สัญญาณไฟฟ้า (nerve impulse) เกิดเมื่อถูกกระตุ้นถึง threshold (พักอยู่ที่ −70 mV)', page: 'a-control', section: 'ak-neuron' },
  { th: 'วงจรรีเฟล็กซ์', en: 'reflex arc', def: 'receptor → sensory neuron → interneuron → motor neuron → effector', page: 'a-control', section: 'ak-reflex' },
  { th: 'กลไกย้อนกลับแบบลบ', en: 'negative feedback', def: 'ตอบสนองตรงข้ามกับการเปลี่ยนแปลง ทำให้กลับสู่สมดุล', page: 'a-control', section: 'ak-feedback' },
  { th: 'ฮอร์โมนที่ทำงานตรงข้าม', en: 'antagonistic hormones', def: 'เช่น insulin (ลดกลูโคส) กับ glucagon (เพิ่มกลูโคส)', page: 'a-control', section: 'ak-regulation' },
  { th: 'หน่วยไต', en: 'nephron', def: 'หน่วยทำงานของไต ~1.3 ล้านหน่วยต่อข้าง: กรอง ดูดกลับ หลั่ง', page: 'a-excretion', section: 'ae-nephron' },
  { th: 'ฮอร์โมนต้านการขับปัสสาวะ', en: 'ADH (vasopressin)', def: 'เพิ่มการดูดน้ำกลับที่ collecting duct', page: 'a-excretion', section: 'ae-control' },
  { th: 'ภาวะดื้ออินซูลิน', en: 'insulin resistance', def: 'เซลล์กล้ามเนื้อ ไขมัน ตับ ไม่ตอบสนองต่ออินซูลิน → hyperglycemia', page: 'a-applications', section: 'ax-diabetes' },
  // ---------------------------------------------------- Unit 6
  { th: 'นิเวศวิทยา', en: 'ecology', def: 'การศึกษาปฏิสัมพันธ์ระหว่างสิ่งมีชีวิตกับสิ่งแวดล้อม (oikos = บ้าน + logos = การศึกษา)', page: 'e-intro', section: 'ei-ecology' },
  { th: 'การแพร่กระจาย', en: 'dispersal', def: 'การเคลื่อนย้ายของสิ่งมีชีวิตออกจากถิ่นกำเนิด — ถูกจำกัดได้ด้วยสิ่งกีดขวางทางภูมิศาสตร์', page: 'e-intro', section: 'ei-factors' },
  { th: 'ภูมิอากาศจุลภาค', en: 'microclimate', def: 'ภูมิอากาศของพื้นที่เล็ก ๆ เช่น ใต้ขอนไม้ (ตรงข้าม macroclimate)', page: 'e-intro', section: 'ei-climate' },
  { th: 'เงาฝน', en: 'rain shadow', def: 'ด้านปลายลมของภูเขาแห้งแล้ง เพราะอากาศเสียความชื้นเป็นฝนที่ด้านรับลมไปแล้ว', page: 'e-intro', section: 'ei-climate' },
  { th: 'ชีวนิเวศ', en: 'biome', def: 'เขตภูมิศาสตร์ใหญ่ที่มีภูมิอากาศ พืชพรรณ และสัตว์เฉพาะ — บนบกจำแนกด้วยภูมิอากาศ+พืช ในน้ำด้วยความเค็ม+ความลึก', page: 'e-intro', section: 'ei-terrestrial' },
  { th: 'ชั้นดินเยือกแข็งถาวร', en: 'permafrost', def: 'ชั้นดินแข็งตัวถาวรในทุนดรา ทำให้รากหยั่งลึกไม่ได้', page: 'e-intro', section: 'ei-terrestrial' },
  { th: 'เทอร์โมไคลน์', en: 'thermocline', def: 'ชั้นน้ำที่อุณหภูมิเปลี่ยนฉับพลัน คั่นน้ำอุ่นด้านบนกับน้ำเย็นด้านล่าง', page: 'e-intro', section: 'ei-aquatic' },
  { th: 'ความหนาแน่นประชากร', en: 'population density', def: 'จำนวนสิ่งมีชีวิตต่อหน่วยพื้นที่หรือปริมาตร', page: 'e-population', section: 'ep-size' },
  { th: 'การจับ-ทำเครื่องหมาย-จับซ้ำ', en: 'mark-recapture', def: 'ประมาณขนาดประชากรสัตว์ที่เคลื่อนที่ได้: N = จำนวนที่ทำเครื่องหมาย × จับครั้งที่ 2 ÷ ตัวที่มีเครื่องหมายในครั้งที่ 2', page: 'e-population', section: 'ep-size' },
  { th: 'อัตราการเพิ่มต่อหัว', en: 'per capita rate of increase (r)', def: 'r = b − d · r > 0 เพิ่ม, r < 0 ลด, r = 0 ZPG', page: 'e-population', section: 'ep-change' },
  { th: 'ความสามารถในการรองรับ', en: 'carrying capacity (K)', def: 'ขนาดประชากรสูงสุดที่สิ่งแวดล้อมรองรับได้อย่างยั่งยืน กำหนดโดยปัจจัยจำกัด', page: 'e-population', section: 'ep-growth' },
  { th: 'การเติบโตแบบลอจิสติก', en: 'logistic growth', def: 'กราฟรูป S (lag → log → stationary) ทรัพยากรจำกัด ช้าลงเมื่อใกล้ K — พบมากในธรรมชาติ', page: 'e-population', section: 'ep-growth' },
  { th: 'กราฟการรอดชีวิต', en: 'survivorship curve', def: 'Type I ตายตอนแก่ (คน) · II ตายคงที่ (นก) · III ตายมากตอนเล็ก (ปะการัง พืช)', page: 'e-population', section: 'ep-demography' },
  { th: 'หลักการกีดกันจากการแข่งขัน', en: 'competitive exclusion principle', def: 'สองชนิดที่แข่งขันทรัพยากรเดียวกันอยู่ร่วมกันถาวรไม่ได้ (Gause 1934)', page: 'e-community', section: 'ec-competition' },
  { th: 'นิช', en: 'ecological niche', def: 'บทบาทและตำแหน่งของชนิดในระบบนิเวศ — fundamental (ศักยภาพ) vs realized (ที่ใช้จริง เล็กกว่า)', page: 'e-community', section: 'ec-competition' },
  { th: 'การแบ่งทรัพยากร', en: 'resource partitioning', def: 'ชนิดที่ niche ซ้อนกันใช้ทรัพยากรต่างกันเพื่อลดการแข่งขัน', page: 'e-community', section: 'ec-competition' },
  { th: 'ภาวะพึ่งพา', en: 'mutualism (+/+)', def: 'symbiosis ที่ทั้งสองได้ประโยชน์ เช่น ไลเคน ปมรากถั่ว', page: 'e-community', section: 'ec-symbiosis' },
  { th: 'ภาวะอิงอาศัย', en: 'commensalism (+/0)', def: 'symbiosis ที่ฝ่ายหนึ่งได้ อีกฝ่ายไม่ได้ไม่เสีย', page: 'e-community', section: 'ec-symbiosis' },
  { th: 'ภาวะกระทบกระเทือน', en: 'amensalism (0/−)', def: 'ฝ่ายหนึ่งเสีย อีกฝ่ายไม่ได้รับผล — antibiosis เป็นตัวอย่าง', page: 'e-community', section: 'ec-symbiosis' },
  { th: 'สังคมขั้นสุดท้าย', en: 'climax community', def: 'ระยะสุดท้ายที่เสถียรของการแทนที่ทางนิเวศ (ecological succession)', page: 'e-community', section: 'ec-diversity' },
  { th: 'ชนิดพันธุ์หลัก', en: 'keystone species', def: 'จำนวนไม่มาก แต่ผลต่อระบบนิเวศสูงเกินสัดส่วน มักเป็นผู้ล่าบนสุด เช่น นากทะเล', page: 'e-ecosystem', section: 'ee-foodchain' },
  { th: 'ผลผลิตปฐมภูมิสุทธิ', en: 'net primary production (NPP)', def: 'คาร์บอนที่ผู้ผลิตเก็บสะสมเป็นมวลชีวภาพ ส่งต่อให้ผู้บริโภคได้ (GPP = ทั้งหมดที่สังเคราะห์ได้)', page: 'e-ecosystem', section: 'ee-energy' },
  { th: 'ประสิทธิภาพการถ่ายทอดพลังงาน', en: 'ecological (trophic) efficiency', def: '~10% (5–20%) ของพลังงานถูกส่งต่อไปลำดับถัดไป', page: 'e-ecosystem', section: 'ee-energy' },
  { th: 'ภาวะธาตุอาหารล้นแหล่งน้ำ', en: 'eutrophication', def: 'N และ P มากเกิน → สาหร่ายบลูม → ออกซิเจนลด → ปลาตาย', page: 'e-ecosystem', section: 'ee-cycles' },
  { th: 'การขยายทางชีวภาพ', en: 'biomagnification', def: 'ความเข้มข้นสารพิษเพิ่มขึ้นตามลำดับขั้นของห่วงโซ่อาหาร (DDT, methylmercury)', page: 'e-ecosystem', section: 'ee-toxins' },
  { th: 'บริการระบบนิเวศ', en: 'ecosystem services', def: 'ประโยชน์ที่มนุษย์ได้จากระบบนิเวศ: provisioning, regulating, cultural, supporting', page: 'e-issues', section: 'es-services' },
  { th: 'ชนิดพันธุ์รุกราน', en: 'invasive species', def: 'ชนิดต่างถิ่นที่แพร่เร็วและสร้างความเสียหายต่อชนิดพื้นเมือง ระบบนิเวศ หรือมนุษย์', page: 'e-issues', section: 'es-extinction' },
  { th: 'ความเป็นกลางทางคาร์บอน', en: 'carbon neutrality', def: 'ปล่อย CO₂ สุทธิเป็นศูนย์ด้วยการลดและชดเชย (carbon credit)', page: 'e-issues', section: 'es-solutions' },
  // ---------------------------------------------------------- Unit 7
  { th: 'พิพิธภัณฑ์ธรรมชาติวิทยา', en: 'natural history museum', def: 'มีทั้งส่วนจัดแสดง (display & exhibition) และคลังตัวอย่างกับงานวิจัย (collection & research)', page: 'c-museum', section: 'cm-museum' },
  { th: 'มิวซีโอมิกส์', en: 'museomics', def: 'museum + genomics: การศึกษาลำดับ DNA ที่ได้จากตัวอย่างในพิพิธภัณฑ์', page: 'c-museum', section: 'cm-museomics' },
  { th: 'DNA โบราณ', en: 'ancient DNA (aDNA)', def: 'DNA จากซากอินทรีย์โบราณ เช่น กระดูก ฟัน ขน เมล็ด (ตรงข้ามกับ modern DNA)', page: 'c-museum', section: 'cm-museomics' },
  { th: 'DNA จากตัวอย่างในคลัง', en: 'historical DNA (hDNA)', def: 'DNA ที่ได้จากตัวอย่างในพิพิธภัณฑ์และหอพรรณไม้', page: 'c-museum', section: 'cm-museomics' },
  { th: 'จีโนมิกส์บรรพกาล', en: 'paleogenomics', def: 'การสร้างและวิเคราะห์จีโนมของสิ่งมีชีวิตที่สูญพันธุ์ไปแล้ว', page: 'c-museum', section: 'cm-museomics' },
  { th: 'การแปลงเป็นดิจิทัล', en: 'digitization', def: 'แปลงข้อมูลตัวอย่าง (ภาพ ป้าย) เป็นรูปแบบดิจิทัล → big data', page: 'c-museum', section: 'cm-digitization' },
  { th: 'เมทาดาตา', en: 'metadata', def: 'ข้อมูลที่บรรยายข้อมูลอื่น เช่น สถานที่ พิกัด ความสูง วันที่ ผู้เก็บ หมายเลขทะเบียน', page: 'c-museum', section: 'cm-digitization' },
  { th: 'พิกัดภูมิศาสตร์', en: 'georeference', def: 'ละติจูดและลองจิจูดของจุดเก็บตัวอย่าง', page: 'c-museum', section: 'cm-digitization' },
  { th: 'GBIF', en: 'Global Biodiversity Information Facility', def: 'คลังข้อมูลความหลากหลายทางชีวภาพระดับโลก เปิดให้เข้าถึงฟรี', page: 'c-museum', section: 'cm-digitization' },
];

export const compares: Compare[] = [
  {
    title: 'ภาคตัดขวาง ราก vs ลำต้น', page: 'p-structure',
    head: ['', 'รากใบเลี้ยงคู่', 'รากใบเลี้ยงเดี่ยว', 'ลำต้นใบเลี้ยงคู่', 'ลำต้นใบเลี้ยงเดี่ยว'],
    rows: [
      ['การเรียงของท่อลำเลียง', 'ไซเลมเป็นแฉก 3–4 แฉกตรงกลาง', 'ไซเลมเป็นแฉกจำนวนมาก', 'มัดเรียงเป็นวง', 'มัดกระจายทั่ว'],
      ['endodermis/pericycle', 'มี', 'มี', 'ไม่เน้น', 'ไม่เน้น'],
      ['พิธ (pith)', '—', '—', 'มี ตรงกลาง', 'แยก cortex/pith ไม่ชัด'],
    ],
  },
  {
    title: 'parenchyma / collenchyma / sclerenchyma', page: 'p-structure',
    head: ['', 'parenchyma', 'collenchyma', 'sclerenchyma'],
    rows: [
      ['ผนังเซลล์', 'ปฐมภูมิ บางสม่ำเสมอ', 'ปฐมภูมิ หนาไม่สม่ำเสมอ', 'ทุติยภูมิ (sclereid, fiber)'],
      ['ย้อม safranin O', 'ไม่ติดสี', 'ไม่ติดสี', 'ติดสีชมพูแดง'],
      ['หน้าที่/ตำแหน่ง', 'mesophyll, epidermis, guard cell', 'ใต้ epidermis สันลำต้นเหลี่ยม', 'ให้ความแข็งแรง (fiber ค้ำโฟลเอ็ม)'],
    ],
  },
  {
    title: 'ไซเลม vs โฟลเอ็ม', page: 'p-transport',
    head: ['', 'ไซเลม', 'โฟลเอ็ม'],
    rows: [
      ['ลำเลียง', 'น้ำและแร่ธาตุ', 'อาหาร (น้ำตาล)'],
      ['เซลล์', 'tracheid, vessel element (ตายแล้ว)', 'sieve tube element + companion cell (มีชีวิต ผนังปฐมภูมิ)'],
      ['ทิศทาง', 'รากขึ้นยอด', 'source → sink (ไม่แน่นอน)'],
      ['แรงขับ', 'transpiration pull (bulk flow)', 'pressure gradient (bulk flow)'],
    ],
  },
  {
    title: 'ฮอร์โมนพืช 7 กลุ่ม', page: 'p-response',
    head: ['ฮอร์โมน', 'สร้าง/ลำเลียง', 'บทบาทหลักในสไลด์'],
    rows: [
      ['auxin (IAA)', 'ยอด ใบอ่อน → ลงราก', 'ยืดเซลล์ เบนตามแสง/แรงโน้มถ่วง apical dominance สร้างราก'],
      ['cytokinin', 'ราก → ยอด', 'แบ่งเซลล์ สร้างยอดในเพาะเลี้ยงเนื้อเยื่อ greening'],
      ['gibberellin', '—', 'ยืดปล้อง งอกของเมล็ด ออกดอก'],
      ['abscisic acid', '—', 'พักตัวของเมล็ด/ตา ปิดปากใบเมื่อขาดน้ำ'],
      ['ethylene (แก๊ส)', '—', 'triple response ผลสุก ใบร่วง'],
      ['brassinosteroid', '—', 'ยืด/แบ่งเซลล์ vascular differentiation งอก photomorphogenesis'],
      ['strigolactone', 'ราก → ยอด', 'ยับยั้งการแตกกิ่ง ดึงดูดไมคอร์ไรซา'],
    ],
  },
  {
    title: 'กล้ามเนื้อ 3 ชนิด', page: 'a-organization',
    head: ['', 'โครงร่าง', 'หัวใจ', 'เรียบ'],
    rows: [
      ['รูปร่าง', 'ยาว เรียงเป็นมัด มีลาย', 'ยาว แตกแขนง', 'กระสวย'],
      ['นิวเคลียส', 'หลายอัน อยู่รอบนอก', '1 อัน', '1 อัน'],
      ['ลักษณะพิเศษ', 'myofilament เรียงเป็นระเบียบ', 'intercalated discs', '—'],
      ['การควบคุม', 'voluntary', 'involuntary', 'involuntary'],
    ],
  },
  {
    title: 'ระบบไหลเวียนแบบเปิด vs ปิด', page: 'a-circulation',
    head: ['', 'แบบเปิด', 'แบบปิด'],
    rows: [
      ['ของเหลว', 'hemolymph', 'เลือด (แยกจาก interstitial fluid)'],
      ['การแลกเปลี่ยน', 'ใน sinus สัมผัสอวัยวะโดยตรง', 'ที่หลอดเลือดฝอย'],
      ['ตัวอย่าง', 'แมลง, กุ้ง กั้ง ปู (ตามสไลด์)', 'ไส้เดือน หมึก สัตว์มีกระดูกสันหลัง'],
    ],
  },
  {
    title: 'หัวใจสัตว์มีกระดูกสันหลัง', page: 'a-circulation',
    head: ['', 'ปลา', 'กบ', 'เต่า/กิ้งก่า', 'จระเข้ นก สัตว์เลี้ยงลูกด้วยนม'],
    rows: [
      ['วงจร', '1', '2', '2', '2'],
      ['ห้องหัวใจ', '2 (1A 1V)', '3 (2A 1V)', '"4 (incomplete)" = ventricle แบ่งไม่สมบูรณ์', '4 (2A 2V)'],
    ],
  },
  {
    title: 'ของเสียไนโตรเจน', page: 'a-excretion',
    head: ['', 'แอมโมเนีย', 'ยูเรีย', 'กรดยูริก'],
    rows: [
      ['ความเป็นพิษ', 'สูงมาก', 'ต่ำกว่า ~100,000 เท่า', 'ต่ำ'],
      ['การละลายน้ำ', 'ดีมาก', 'ดี', 'น้อยมาก (semisolid)'],
      ['สัตว์', 'สัตว์น้ำ ปลากระดูกแข็ง สะเทินน้ำสะเทินบก', 'สัตว์เลี้ยงลูกด้วยนม สะเทินน้ำสะเทินบก ปลากระดูกอ่อน', 'นก สัตว์เลื้อยคลาน แมลง หอยทากบก'],
    ],
  },
  {
    title: 'ระบบประสาท vs ต่อมไร้ท่อ', page: 'a-control',
    head: ['', 'ระบบประสาท', 'ระบบต่อมไร้ท่อ'],
    rows: [
      ['สัญญาณ', 'กระแสประสาท (ไฟฟ้า) + สารสื่อประสาท', 'ฮอร์โมนในกระแสเลือด'],
      ['ไปที่', 'ตำแหน่งเฉพาะ', 'ไปทั่วร่างกาย มีผลกับเซลล์เป้าหมาย'],
    ],
  },
  {
    title: 'การเติบโตแบบ exponential vs logistic', page: 'e-population',
    head: ['', 'exponential', 'logistic'],
    rows: [
      ['กราฟ', 'รูป J', 'รูป S (lag → log → stationary)'],
      ['ทรัพยากร', 'มาก แข่งขันน้อย', 'จำกัด มีการแข่งขัน'],
      ['ขีดจำกัด', 'ไม่มี (ช่วงสั้น)', 'เข้าใกล้ carrying capacity (K)'],
      ['พบเมื่อ', 'เข้าไปในที่ใหม่ / ฟื้นตัวหลังลดลง', 'ประชากรส่วนใหญ่ในธรรมชาติ'],
    ],
  },
  {
    title: 'ความสัมพันธ์ระหว่างสิ่งมีชีวิต (+ ได้ / − เสีย / 0 ไม่มีผล)', page: 'e-community',
    head: ['ความสัมพันธ์', 'สัญลักษณ์', 'ตัวอย่าง'],
    rows: [
      ['ภาวะแข่งขัน (competition)', '− / −', 'ไฮยีนาแย่งอาหาร'],
      ['ภาวะล่าเหยื่อ/กินพืช', '+ / −', 'สิงโต–ม้าลาย, วัว–หญ้า'],
      ['ภาวะพึ่งพา (mutualism)', '+ / +', 'ไลเคน ปมรากถั่ว'],
      ['ภาวะได้ประโยชน์ร่วมกัน (protocooperation)', '+ / + (ไม่จำเป็น)', 'นกบนหลังควาย'],
      ['ภาวะอิงอาศัย (commensalism)', '+ / 0', '—'],
      ['ภาวะปรสิต (parasitism)', '+ / −', 'endo-/ectoparasite'],
      ['ภาวะเอื้อประโยชน์ (facilitation)', '+ / + หรือ 0 / +', 'ไม่สัมผัสกันโดยตรง'],
      ['ภาวะกระทบกระเทือน (amensalism) / antibiosis', '0 / −', 'Penicillium ยับยั้งแบคทีเรีย'],
      ['ภาวะเป็นกลาง (neutralism)', '0 / 0', 'เต่ากับฝูงปลา'],
    ],
  },
  {
    title: 'การแทนที่แบบปฐมภูมิ vs ทุติยภูมิ', page: 'e-community',
    head: ['', 'primary succession', 'secondary succession'],
    rows: [
      ['เริ่มจาก', 'พื้นที่ว่างไม่มีสิ่งมีชีวิต (หินเปล่า ทราย)', 'พื้นที่ที่สังคมเดิมถูกรบกวนออกไป (ไร่ร้าง ป่าหลังไฟไหม้)'],
      ['ผู้บุกเบิก', 'pioneer species เช่น ไลเคน', 'พืชล้มลุก → หญ้า → ไม้พุ่ม/สน'],
      ['จุดสิ้นสุด', 'climax community', 'climax community'],
    ],
  },
  {
    title: 'bioaccumulation vs biomagnification', page: 'e-ecosystem',
    head: ['', 'bioaccumulation', 'biomagnification'],
    rows: [
      ['ความหมาย', 'สารพิษสะสมในสิ่งมีชีวิตตัวหนึ่งตามเวลา', 'ความเข้มข้นเพิ่มขึ้นตามลำดับขั้นห่วงโซ่อาหาร'],
      ['ตัวอย่าง', 'Minamata disease (ปรอท)', 'DDT → นกอินทรีหัวขาว'],
    ],
  },
  {
    title: 'aDNA vs hDNA vs modern DNA', page: 'c-museum',
    head: ['', 'ancient DNA (aDNA)', 'historical DNA (hDNA)', 'modern DNA'],
    rows: [
      ['มาจาก', 'ซากอินทรีย์โบราณ: กระดูก ฟัน ขน เมล็ด', 'ตัวอย่างในพิพิธภัณฑ์และหอพรรณไม้', 'สิ่งมีชีวิตปัจจุบัน'],
      ['ศาสตร์ที่ใช้', 'paleogenomics', 'museomics', '—'],
      ['ตัวอย่างในสไลด์', 'กระดูกนีแอนเดอร์ทัล/เดนิโซวัน (Pääbo)', 'Balto สุนัขลากเลื่อน', 'สุนัขเอเชีย/อาร์กติกปัจจุบัน'],
    ],
  },
  {
    title: 'museomics vs digitization', page: 'c-museum',
    head: ['', 'museomics', 'digitization'],
    rows: [
      ['ใช้อะไรจากตัวอย่าง', 'DNA (hDNA/aDNA)', 'ภาพ สแกน 3 มิติ และ metadata จากป้าย'],
      ['ได้อะไร', 'ความหลากหลายทางพันธุกรรม ความสัมพันธ์ทางวิวัฒนาการ', 'big data ที่ค้นได้ทั่วโลก (NHM Data Portal, GBIF) ใช้กับ AI'],
      ['ตัวอย่าง', 'Pääbo, Balto', 'ALICE, Mothra, กะโหลก Toxodon 3D'],
    ],
  },
];
