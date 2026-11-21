// =====================================================================
// The list of chapter pages and their sections, as plain data.
//
// This file has no React in it so the tests can read it. src/chapters.ts
// adds the page components on top of this list.
//
// Each page = one lecture topic. Each section = one card on the page AND one
// practice topic (questions say which section they belong to).
//
// To add a section: add { id, label } here, then a <Section id="..."> with the
// same id in the page file. The test checks that every question's topic and
// every glossary link points at a section listed here.
// To add a page (e.g. a new unit): add its id to PageId in types.ts, add an entry
// below, then register the component in src/chapters.ts.
// =====================================================================
import type { PageId, SectionDef } from './types';

export interface PageDef {
  id: PageId;
  /** which unit (บทที่) it belongs to */
  unit: 5 | 6 | 7;
  /** 'plant' / 'animal' half of Unit 5, null for other units */
  track: 'plant' | 'animal' | null;
  /** short number shown on cards, matching the lecturer's numbering */
  num: string;
  title: string;
  en: string;
  icon: string;
  /** one line for the home page card */
  blurb: string;
  sections: SectionDef[];
}

export const pages: PageDef[] = [
  // ---------------------------------------------------------------- plants
  {
    id: 'p-structure', unit: 5, track: 'plant', num: '5.1–5.2', icon: '🌱',
    title: 'โครงสร้างและการเจริญเติบโตของพืช', en: 'Plant organization, forms and functions',
    blurb: 'อวัยวะ · เนื้อเยื่อ 3 ระบบ · ภาคตัดขวาง · ใบ · ชนิดเซลล์ · การเติบโต',
    sections: [
      { id: 'pl-intro', label: 'พืชคืออะไร' },
      { id: 'pl-organs', label: 'อวัยวะ' },
      { id: 'pl-tissues', label: 'เนื้อเยื่อ 3 ระบบ' },
      { id: 'pl-xsection', label: 'ภาคตัดขวาง' },
      { id: 'pl-leaf', label: 'ใบ' },
      { id: 'pl-cells', label: 'ชนิดเซลล์' },
      { id: 'pl-growth', label: 'การเติบโต' },
    ],
  },
  {
    id: 'p-nutrition', unit: 5, track: 'plant', num: '5.3', icon: '🧪',
    title: 'ธาตุอาหารพืช', en: 'Plant nutrition',
    blurb: 'ธาตุจำเป็น 17 ธาตุ · ดินและ pH · บทบาทและอาการขาด · ธาตุเสริมประโยชน์',
    sections: [
      { id: 'pn-essential', label: 'ธาตุจำเป็น' },
      { id: 'pn-sources', label: 'แหล่งธาตุ' },
      { id: 'pn-roles', label: 'บทบาท/อาการขาด' },
      { id: 'pn-beneficial', label: 'ธาตุเสริม/ประยุกต์' },
    ],
  },
  {
    id: 'p-transport', unit: 5, track: 'plant', num: '5.4', icon: '💧',
    title: 'ระบบลำเลียงของพืช', en: 'Internal transport system',
    blurb: 'การแพร่ vs การไหล · water potential · รากดูดน้ำ · การคายน้ำ · source → sink',
    sections: [
      { id: 'pt-process', label: 'แพร่ vs ไหล' },
      { id: 'pt-water', label: 'สมบัติของน้ำ' },
      { id: 'pt-psi', label: 'Water potential' },
      { id: 'pt-root', label: 'รากดูดน้ำ' },
      { id: 'pt-xylem', label: 'ไซเลม' },
      { id: 'pt-transpiration', label: 'การคายน้ำ' },
      { id: 'pt-phloem', label: 'โฟลเอ็ม' },
      { id: 'pt-pressureflow', label: 'Pressure-flow' },
    ],
  },
  {
    id: 'p-response', unit: 5, track: 'plant', num: '5.5', icon: '☀️',
    title: 'การตอบสนองและฮอร์โมนพืช', en: 'Responses and control system',
    blurb: 'รับ → ถ่ายทอด → ตอบสนอง · phytochrome · การเบน · ฮอร์โมน 7 กลุ่ม',
    sections: [
      { id: 'pr-steps', label: 'ขั้นตอนการตอบสนอง' },
      { id: 'pr-light', label: 'ตอบสนองต่อแสง' },
      { id: 'pr-auxin', label: 'ออกซิน' },
      { id: 'pr-hormones', label: 'ฮอร์โมนอื่น ๆ' },
    ],
  },
  // --------------------------------------------------------------- animals
  {
    id: 'a-organization', unit: 5, track: 'animal', num: '5.1', icon: '🧬',
    title: 'การจัดระบบในร่างกายสัตว์', en: 'Organization in living organisms',
    blurb: 'ลำดับขั้น · เนื้อเยื่อบุผิว · เกี่ยวพัน · กล้ามเนื้อ · ประสาท · ระบบอวัยวะ',
    sections: [
      { id: 'ao-levels', label: 'ลำดับขั้น' },
      { id: 'ao-epithelial', label: 'เนื้อเยื่อบุผิว' },
      { id: 'ao-connective', label: 'เนื้อเยื่อเกี่ยวพัน' },
      { id: 'ao-muscle-nerve', label: 'กล้ามเนื้อ/ประสาท' },
      { id: 'ao-organs', label: 'ระบบอวัยวะ' },
    ],
  },
  {
    id: 'a-form', unit: 5, track: 'animal', num: '5.2', icon: '🐬',
    title: 'รูปร่างกับหน้าที่และภาวะธำรงดุล', en: 'Forms and functions suit the environment',
    blurb: 'รูปร่างที่คล้ายกัน · homeostasis · การแลกเปลี่ยนสาร',
    sections: [
      { id: 'af-shape', label: 'รูปร่างกับสิ่งแวดล้อม' },
      { id: 'af-homeostasis', label: 'Homeostasis' },
      { id: 'af-exchange', label: 'การแลกเปลี่ยนสาร' },
    ],
  },
  {
    id: 'a-digestion', unit: 5, track: 'animal', num: '5.3', icon: '🍽️',
    title: 'อาหารและการย่อยอาหาร', en: 'Animal nutrition and digestion',
    blurb: 'สารอาหารจำเป็น · การกิน · ทางเดินอาหาร · เอนไซม์ · การดูดซึม · การควบคุม',
    sections: [
      { id: 'ad-nutrients', label: 'สารอาหารจำเป็น' },
      { id: 'ad-feeding', label: 'การกินอาหาร' },
      { id: 'ad-tracts', label: 'ทางเดินอาหารแบบต่าง ๆ' },
      { id: 'ad-upper', label: 'ปาก–กระเพาะ' },
      { id: 'ad-lower', label: 'ลำไส้และอวัยวะช่วย' },
      { id: 'ad-enzymes', label: 'เอนไซม์' },
      { id: 'ad-absorb', label: 'ดูดซึม/ควบคุม' },
    ],
  },
  {
    id: 'a-circulation', unit: 5, track: 'animal', num: '5.4', icon: '❤️',
    title: 'ระบบไหลเวียน', en: 'Internal transport system: circulation',
    blurb: 'เปิด/ปิด · หัวใจสัตว์มีกระดูกสันหลัง · วัฏจักรหัวใจ · หลอดเลือด · เลือด',
    sections: [
      { id: 'ac-types', label: 'แบบของระบบ' },
      { id: 'ac-vertebrate', label: 'หัวใจสัตว์ต่าง ๆ' },
      { id: 'ac-heart', label: 'หัวใจคน' },
      { id: 'ac-cycle', label: 'วัฏจักรหัวใจ' },
      { id: 'ac-vessels', label: 'หลอดเลือด' },
      { id: 'ac-blood', label: 'เลือด/น้ำเหลือง' },
    ],
  },
  {
    id: 'a-respiration', unit: 5, track: 'animal', num: '5.5', icon: '🫁',
    title: 'การหายใจและการแลกเปลี่ยนแก๊ส', en: 'Animal respiration',
    blurb: 'อวัยวะแลกเปลี่ยนแก๊ส 5 แบบ · countercurrent · ปอดกบ/นก/คน · การควบคุม',
    sections: [
      { id: 'ar-intro', label: 'การหายใจคืออะไร' },
      { id: 'ar-organs', label: 'อวัยวะแลกเปลี่ยนแก๊ส' },
      { id: 'ar-lungs', label: 'ปอด' },
      { id: 'ar-mechanics', label: 'กลไกการหายใจ' },
      { id: 'ar-transport', label: 'ควบคุม/ขนส่งแก๊ส' },
    ],
  },
  {
    id: 'a-control', unit: 5, track: 'animal', num: '5.6', icon: '🧠',
    title: 'ระบบประสาทและต่อมไร้ท่อ', en: 'Responses and control system',
    blurb: 'homeostasis · feedback · neuron · reflex · ฮอร์โมน · ไฮโปทาลามัส',
    sections: [
      { id: 'ak-homeostasis', label: 'ภาวะธำรงดุล' },
      { id: 'ak-feedback', label: 'Feedback' },
      { id: 'ak-nervous', label: 'ระบบประสาท' },
      { id: 'ak-neuron', label: 'เซลล์ประสาท' },
      { id: 'ak-reflex', label: 'Reflex' },
      { id: 'ak-hormones', label: 'ฮอร์โมน' },
      { id: 'ak-regulation', label: 'การควบคุมสมดุล' },
    ],
  },
  {
    id: 'a-excretion', unit: 5, track: 'animal', num: '5.7', icon: '🫘',
    title: 'การขับถ่าย', en: 'Animal excretion',
    blurb: 'แอมโมเนีย/ยูเรีย/กรดยูริก · ไต · หน่วยไต · ADH และ RAAS',
    sections: [
      { id: 'ae-wastes', label: 'ของเสียไนโตรเจน' },
      { id: 'ae-organs', label: 'อวัยวะขับถ่าย' },
      { id: 'ae-nephron', label: 'หน่วยไต' },
      { id: 'ae-control', label: 'การควบคุมไต' },
    ],
  },
  {
    id: 'a-applications', unit: 5, track: 'animal', num: '5.8', icon: '🩺',
    title: 'การประยุกต์: เบาหวานและแคลเซียม', en: 'Applications',
    blurb: 'Insulin resistance · OGTT · ฮอร์โมนควบคุมแคลเซียม · มวลกระดูก',
    sections: [
      { id: 'ax-diabetes', label: 'เบาหวาน' },
      { id: 'ax-calcium', label: 'แคลเซียม/กระดูก' },
    ],
  },
  // ---------------------------------------------------------- Unit 6
  {
    id: 'e-intro', unit: 6, track: null, num: '6.1', icon: '🌍',
    title: 'นิเวศวิทยาเบื้องต้นและชีวนิเวศ', en: 'Introduction to ecology and biomes',
    blurb: 'นิเวศวิทยา · ปัจจัยการกระจาย · ภูมิอากาศ · ชีวนิเวศบนบกและในน้ำ',
    sections: [
      { id: 'ei-ecology', label: 'นิเวศวิทยาคืออะไร' },
      { id: 'ei-factors', label: 'ปัจจัยการกระจาย' },
      { id: 'ei-climate', label: 'ภูมิอากาศ' },
      { id: 'ei-terrestrial', label: 'ชีวนิเวศบนบก' },
      { id: 'ei-aquatic', label: 'ชีวนิเวศในน้ำ/มนุษย์' },
    ],
  },
  {
    id: 'e-population', unit: 6, track: null, num: '6.2', icon: '🐇',
    title: 'ประชากร', en: 'Population',
    blurb: 'ขนาด ความหนาแน่น · quadrat · mark-recapture · การเติบโต J/S · K · โครงสร้างอายุ',
    sections: [
      { id: 'ep-size', label: 'ขนาดและการประมาณ' },
      { id: 'ep-dispersion', label: 'การกระจายตัว' },
      { id: 'ep-change', label: 'อัตราการเปลี่ยนแปลง' },
      { id: 'ep-growth', label: 'การเติบโต/K' },
      { id: 'ep-demography', label: 'โครงสร้าง/พลวัต' },
    ],
  },
  {
    id: 'e-community', unit: 6, track: null, num: '6.3', icon: '🦒',
    title: 'สังคมสิ่งมีชีวิต', en: 'Community',
    blurb: 'ความสัมพันธ์ (+/−/0) · การแข่งขัน · niche · ล่าเหยื่อ · symbiosis · ความหลากหลาย · การแทนที่',
    sections: [
      { id: 'ec-interactions', label: 'ความสัมพันธ์ระหว่างชนิด' },
      { id: 'ec-competition', label: 'การแข่งขัน/niche' },
      { id: 'ec-predation', label: 'ล่าเหยื่อ/กินพืช' },
      { id: 'ec-symbiosis', label: 'Symbiosis และอื่น ๆ' },
      { id: 'ec-diversity', label: 'ความหลากหลาย/การแทนที่' },
    ],
  },
  {
    id: 'e-ecosystem', unit: 6, track: null, num: '6.4', icon: '♻️',
    title: 'ระบบนิเวศ', en: 'Ecosystems',
    blurb: 'ผู้ผลิต ผู้บริโภค ผู้ย่อยสลาย · ห่วงโซ่อาหาร · keystone · กฎ 10% · วัฏจักรสาร · biomagnification',
    sections: [
      { id: 'ee-structure', label: 'โครงสร้างระบบนิเวศ' },
      { id: 'ee-foodchain', label: 'ห่วงโซ่/สายใยอาหาร' },
      { id: 'ee-energy', label: 'การไหลของพลังงาน' },
      { id: 'ee-cycles', label: 'วัฏจักรสาร' },
      { id: 'ee-toxins', label: 'การสะสมสารพิษ' },
    ],
  },
  {
    id: 'e-issues', unit: 6, track: null, num: '6.5', icon: '🌱',
    title: 'บริการระบบนิเวศและปัญหาสิ่งแวดล้อม', en: 'Ecosystem services and environmental issues',
    blurb: 'บริการ 4 ด้าน · ปัญหาสิ่งแวดล้อม · การสูญพันธุ์ครั้งที่ 6 · ชนิดพันธุ์รุกราน · carbon neutrality',
    sections: [
      { id: 'es-services', label: 'บริการระบบนิเวศ' },
      { id: 'es-issues', label: 'ปัญหาสิ่งแวดล้อม' },
      { id: 'es-extinction', label: 'การสูญพันธุ์' },
      { id: 'es-solutions', label: 'แนวทางแก้ไข' },
    ],
  },
  // ---------------------------------------------------------- Unit 7
  {
    id: 'c-museum', unit: 7, track: null, num: '7', icon: '🏛️',
    title: 'บทสรุป: พิพิธภัณฑ์ธรรมชาติวิทยา', en: 'Conclusion: the natural history museum',
    blurb: 'คำถามพื้นฐาน 4 ข้อ · พิพิธภัณฑ์ · museomics · aDNA/hDNA · digitization · GBIF',
    sections: [
      { id: 'cm-questions', label: 'คำถามพื้นฐาน 4 ข้อ' },
      { id: 'cm-museum', label: 'พิพิธภัณฑ์ธรรมชาติวิทยา' },
      { id: 'cm-museomics', label: 'Museomics/DNA โบราณ' },
      { id: 'cm-digitization', label: 'Digitization' },
      { id: 'cm-conclusion', label: 'อดีต ปัจจุบัน อนาคต' },
    ],
  },
];

/** Look up a page by id (undefined if not found). */
export const pageById = (id: string | null | undefined) => pages.find((p) => p.id === id);

/**
 * Short page number that can't be confused across tracks: "🌱 5.3" (plant),
 * "🐾 5.3" (animal), "6.2". Plant and animal share chapter numbers, so use
 * this wherever a number appears without its page title.
 */
export const pageTag = (p: PageDef) => (p.track === 'plant' ? '🌱 ' : p.track === 'animal' ? '🐾 ' : '') + p.num;

/** Every section on the site, with the page it is on. */
export const allSections = pages.flatMap((p) => p.sections.map((s) => ({ ...s, page: p.id })));

/** Section id → { label, page }. */
export const sectionById = (id: string) => allSections.find((s) => s.id === id);
