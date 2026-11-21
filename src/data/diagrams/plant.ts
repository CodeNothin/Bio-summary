// =====================================================================
// Plant diagrams (Unit 5, plant half): cross-sections, leaf, plant body,
// root tip. These are simplified drawings (not the slide photos) made of
// basic shapes so every part can be tapped.
//
// Each part has an id that label-questions use (e.g. 'endodermis').
// You may move/resize shapes freely, but do not rename an id that a
// question in src/data/questions uses — the test will tell you if you do.
//
// Drawing order matters: parts listed later are drawn on top.
// =====================================================================
import type { Diagram } from '../types';
import { circle, circlesAround, ellipse, line, path, poly, polar, rect, ring, star } from './shapes';

// ---------------------------------------------------------- dicot root
// Slide 16 (พืช 5.1): xylem in 3–4 arms with phloem between the arms.
const C = 150; // centre of the round cross-sections

export const dicotRoot: Diagram = {
  id: 'dicot-root',
  title: 'ภาคตัดขวางรากพืชใบเลี้ยงคู่',
  viewBox: '0 0 300 300',
  source: 'พืช 5.1 สไลด์ 14, 16',
  parts: [
    {
      id: 'epidermis', tone: 'green', label: 'เนื้อเยื่อผิว (epidermis)',
      info: 'ชั้นนอกสุด เป็น dermal tissue ห่อหุ้มราก บางเซลล์ยื่นออกไปเป็นขนราก (root hair) ช่วยดูดน้ำ',
      shapes: [ring(C, C, 140, 132)],
    },
    {
      id: 'cortex', tone: 'tan', label: 'คอร์เท็กซ์ (cortex)',
      info: 'ground tissue ที่อยู่ระหว่าง epidermis กับ vascular tissue — ในรากเป็นชั้นที่หนามาก',
      shapes: [ring(C, C, 132, 62)],
    },
    {
      id: 'endodermis', tone: 'brown', label: 'เอนโดเดอร์มิส (endodermis)',
      info: 'ชั้นในสุดของคอร์เท็กซ์ เซลล์มีสาร suberin สะสมที่ผนัง ควบคุม/ลดการลำเลียงน้ำในแนวรัศมี',
      shapes: [ring(C, C, 62, 56)],
    },
    {
      id: 'pericycle', tone: 'yellow', label: 'เพอริไซเคิล (pericycle)',
      info: 'ชั้นนอกสุดของ vascular tissue ในราก แบ่งเซลล์แล้วเจริญเป็นรากแขนง (lateral root) ได้',
      shapes: [ring(C, C, 56, 50)],
    },
    {
      id: 'phloem', tone: 'orange', label: 'โฟลเอ็ม (phloem)',
      info: 'ลำเลียงอาหาร (น้ำตาล) — ในรากใบเลี้ยงคู่อยู่แทรกระหว่างแฉกของไซเลม',
      shapes: circlesAround(C, C, 4, 33, 10, 0),
    },
    {
      id: 'xylem', tone: 'red', label: 'ไซเลม (xylem)',
      info: 'ลำเลียงน้ำและแร่ธาตุ — ในรากใบเลี้ยงคู่เรียงเป็นแฉก 3–4 แฉกตรงกลาง',
      shapes: [star(C, C, 4, 46, 14, 45)],
    },
  ],
};

// ---------------------------------------------------------- monocot root
// Slide 17: many xylem arms in a ring, phloem between them.
export const monocotRoot: Diagram = {
  id: 'monocot-root',
  title: 'ภาคตัดขวางรากพืชใบเลี้ยงเดี่ยว',
  viewBox: '0 0 300 300',
  source: 'พืช 5.1 สไลด์ 17',
  decor: [{ tone: 'tan', shapes: [circle(C, C, 50)] }],
  parts: [
    {
      id: 'epidermis', tone: 'green', label: 'เนื้อเยื่อผิว (epidermis)',
      info: 'dermal tissue ชั้นนอกสุดของราก',
      shapes: [ring(C, C, 140, 132)],
    },
    {
      id: 'cortex', tone: 'tan', label: 'คอร์เท็กซ์ (cortex)',
      info: 'ground tissue ระหว่าง epidermis กับ vascular tissue',
      shapes: [ring(C, C, 132, 82)],
    },
    {
      id: 'endodermis', tone: 'brown', label: 'เอนโดเดอร์มิส (endodermis)',
      info: 'ชั้นในสุดของคอร์เท็กซ์ มี suberin ที่ผนังเซลล์',
      shapes: [ring(C, C, 82, 76)],
    },
    {
      id: 'pericycle', tone: 'yellow', label: 'เพอริไซเคิล (pericycle)',
      info: 'ชั้นนอกสุดของ vascular tissue สร้างรากแขนงได้',
      shapes: [ring(C, C, 76, 71)],
    },
    {
      id: 'phloem', tone: 'orange', label: 'โฟลเอ็ม (phloem)',
      info: 'แทรกอยู่ระหว่างแฉกไซเลม',
      shapes: circlesAround(C, C, 12, 62, 5, 15),
    },
    {
      id: 'xylem', tone: 'red', label: 'ไซเลม (xylem)',
      info: 'ในรากใบเลี้ยงเดี่ยว แฉกของไซเลมมี "จำนวนมาก" เรียงเป็นวง (ต่างจากรากใบเลี้ยงคู่ที่มี 3–4 แฉก)',
      shapes: circlesAround(C, C, 12, 56, 8, 0),
    },
  ],
};

// ---------------------------------------------------------- dicot stem
// Slides 18–19: bundles in a ring; phloem outside, cambium, xylem inside; pith centre.
const bundleAngles = [0, 45, 90, 135, 180, 225, 270, 315];
const at = (dist: number, r: number) => bundleAngles.map((a) => circle(...polar(C, C, dist, a), r));

export const dicotStem: Diagram = {
  id: 'dicot-stem',
  title: 'ภาคตัดขวางลำต้นพืชใบเลี้ยงคู่ (ระยะ primary growth)',
  viewBox: '0 0 300 300',
  source: 'พืช 5.1 สไลด์ 14, 18–19',
  parts: [
    {
      id: 'epidermis', tone: 'green', label: 'เนื้อเยื่อผิว (epidermis)',
      info: 'dermal tissue ห่อหุ้มลำต้น',
      shapes: [ring(C, C, 140, 133)],
    },
    {
      id: 'cortex', tone: 'dgreen', label: 'คอร์เท็กซ์ (cortex)',
      info: 'ground tissue ชั้นนอก ระหว่าง epidermis กับมัดท่อลำเลียง',
      shapes: [ring(C, C, 133, 104)],
    },
    {
      id: 'pith', tone: 'tan', label: 'พิธ (pith)',
      info: 'ground tissue ที่อยู่ด้านในสุดของลำต้นพืชใบเลี้ยงคู่',
      shapes: [circle(C, C, 50)],
    },
    {
      id: 'phloem', tone: 'orange', label: 'โฟลเอ็ม (phloem)',
      info: 'ในแต่ละมัดท่อลำเลียง โฟลเอ็มอยู่ด้านนอก (ใกล้ผิว)',
      shapes: at(89, 12),
    },
    {
      id: 'xylem', tone: 'red', label: 'ไซเลม (xylem)',
      info: 'ในแต่ละมัดท่อลำเลียง ไซเลมอยู่ด้านใน (ใกล้ไส้)',
      shapes: at(63, 13),
    },
    {
      id: 'cambium', tone: 'purple', label: 'วาสคิวลาร์แคมเบียม (vascular cambium)',
      info: 'เนื้อเยื่อเจริญด้านข้าง อยู่ระหว่างโฟลเอ็มกับไซเลม — ต่อมาแบ่งเซลล์ทำให้เกิด secondary growth',
      shapes: bundleAngles.map((a) => {
        const [x1, y1] = polar(C, C, 76, a - 7);
        const [x2, y2] = polar(C, C, 76, a + 7);
        return line([x1, y1], [x2, y2]);
      }),
    },
  ],
};

// ---------------------------------------------------------- monocot stem
// Slide 47 (exercise): bundles scattered, no clear cortex/pith split.
const scattered: [number, number][] = [
  [150, 40], [205, 55], [245, 95], [260, 150], [245, 205], [205, 245], [150, 260], [95, 245],
  [55, 205], [40, 150], [55, 95], [95, 55], [150, 90], [195, 120], [200, 180], [150, 210],
  [100, 180], [105, 120], [150, 150],
];

export const monocotStem: Diagram = {
  id: 'monocot-stem',
  title: 'ภาคตัดขวางลำต้นพืชใบเลี้ยงเดี่ยว',
  viewBox: '0 0 300 300',
  source: 'พืช 5.1 แบบฝึกหัดสไลด์ 47',
  parts: [
    {
      id: 'epidermis', tone: 'green', label: 'เนื้อเยื่อผิว (epidermis)',
      info: 'dermal tissue ชั้นนอกสุด',
      shapes: [ring(C, C, 140, 133)],
    },
    {
      id: 'ground', tone: 'tan', label: 'เนื้อเยื่อพื้นฐาน (ground tissue)',
      info: 'ในลำต้นใบเลี้ยงเดี่ยว มัดท่อลำเลียงกระจายอยู่ทั่ว ground tissue จึงแบ่ง cortex กับ pith ไม่ชัด',
      shapes: [circle(C, C, 133)],
    },
    {
      id: 'phloem', tone: 'orange', label: 'โฟลเอ็ม (phloem)',
      info: 'อยู่ด้านนอกของแต่ละมัดท่อลำเลียง',
      shapes: scattered.map(([x, y]) => ellipse(x, y - 4, 8, 5)),
    },
    {
      id: 'xylem', tone: 'red', label: 'ไซเลม (xylem)',
      info: 'อยู่ด้านในของแต่ละมัดท่อลำเลียง',
      shapes: scattered.flatMap(([x, y]) => [circle(x - 4, y + 4, 3.5), circle(x + 4, y + 4, 3.5)]),
    },
  ],
};

// ---------------------------------------------------------- leaf
// Slides 21–22: upper epidermis, palisade, spongy, vein, lower epidermis, stomata.
const palisade = Array.from({ length: 13 }, (_, i) => rect(14 + i * 23, 46, 18, 50, 7));
const spongy: [number, number][] = [
  [30, 112], [62, 124], [92, 110], [205, 112], [238, 124], [270, 108], [300, 122],
  [42, 142], [78, 150], [222, 146], [262, 150], [296, 146],
];

export const leaf: Diagram = {
  id: 'leaf',
  title: 'ภาคตัดขวางใบ',
  viewBox: '0 0 320 200',
  source: 'พืช 5.1 สไลด์ 21–22',
  decor: [{ tone: 'water', shapes: [rect(8, 98, 304, 68)] }],
  parts: [
    {
      id: 'cuticle', tone: 'yellow', label: 'คิวทิเคิล (cuticle)',
      info: 'ชั้นบางเคลือบผิวใบด้านบน ช่วยลดการสูญเสียน้ำ',
      shapes: [rect(8, 14, 304, 6, 3)],
    },
    {
      id: 'upper-epidermis', tone: 'grey', label: 'เนื้อเยื่อผิวด้านบน (upper epidermis)',
      info: 'dermal tissue — เซลล์โค้งมน ใส คล้ายเลนส์ ทำหน้าที่รวมแสง',
      shapes: Array.from({ length: 10 }, (_, i) => rect(8 + i * 30.4, 20, 29, 24, 9)),
    },
    {
      id: 'palisade', tone: 'green', label: 'เซลล์แพลิเซด (palisade cell)',
      info: 'ground tissue (mesophyll) รูปทรงกระบอก เรียงตัวหนาแน่น มีคลอโรพลาสต์มาก ทำหน้าที่ดูดกลืนแสง',
      shapes: palisade,
    },
    {
      id: 'spongy', tone: 'dgreen', label: 'เซลล์สปันจี (spongy cell)',
      info: 'ground tissue (mesophyll) รูปร่างไม่แน่นอน เรียงตัวหลวม ๆ มีช่องอากาศ เอื้อต่อการแพร่ของแก๊ส และดูดกลืนแสงส่วนที่เหลือ',
      shapes: spongy.map(([x, y]) => ellipse(x, y, 15, 11)),
    },
    {
      id: 'xylem', tone: 'red', label: 'ไซเลมในเส้นใบ (xylem)',
      info: 'เส้นใบ (vein) = มัดท่อลำเลียง ไซเลมอยู่ด้านบนของเส้นใบ',
      shapes: [path('M120 132 A30 30 0 0 1 180 132 Z')],
    },
    {
      id: 'phloem', tone: 'orange', label: 'โฟลเอ็มในเส้นใบ (phloem)',
      info: 'โฟลเอ็มอยู่ด้านล่างของเส้นใบ ลำเลียงน้ำตาลที่ใบสร้างออกไป',
      shapes: [path('M120 132 A30 30 0 0 0 180 132 Z')],
    },
    {
      id: 'lower-epidermis', tone: 'grey', label: 'เนื้อเยื่อผิวด้านล่าง (lower epidermis)',
      info: 'dermal tissue ด้านล่าง ประกอบด้วย epidermal cell, guard cell และ subsidiary cell — มีปากใบมากที่ผิวใบด้านล่าง',
      shapes: [
        ...Array.from({ length: 4 }, (_, i) => rect(8 + i * 30.5, 168, 29, 22, 8)),
        ...Array.from({ length: 5 }, (_, i) => rect(160 + i * 30.4, 168, 29, 22, 8)),
      ],
    },
    {
      id: 'guard-cell', tone: 'green', label: 'เซลล์คุม (guard cell) / ปากใบ (stomata)',
      info: 'เซลล์คุม 2 เซลล์ล้อมรอบรูปากใบ เปิด–ปิดเพื่อให้แก๊สแพร่ (CO₂ เข้า) และให้น้ำระเหยออก (การคายน้ำ)',
      shapes: [ellipse(136, 179, 7, 10), ellipse(152, 179, 7, 10)],
    },
  ],
};

// ---------------------------------------------------------- plant body
// Slides 12, 50: phytomer — SAM, node, internode, leaf, axillary meristem, cotyledon, hypocotyl, root cap.
export const plantBody: Diagram = {
  id: 'plant-body',
  title: 'โครงสร้างต้นพืช (phytomer)',
  viewBox: '0 0 220 340',
  source: 'พืช 5.1 สไลด์ 12–13, 50',
  decor: [{ tone: 'brown', shapes: [rect(0, 220, 220, 120)] }],
  parts: [
    {
      id: 'stem', tone: 'green', label: 'ลำต้น (stem)',
      info: 'มีข้อ (node) และปล้อง (internode) — ต่างจากรากที่ไม่มีข้อปล้อง',
      shapes: [rect(105, 40, 10, 180, 4)],
    },
    {
      id: 'internode', tone: 'dgreen', label: 'ปล้อง (internode)',
      info: 'ช่วงลำต้นระหว่างข้อสองข้อ',
      shapes: [rect(103, 112, 14, 48, 3)],
    },
    {
      id: 'node', tone: 'yellow', label: 'ข้อ (node)',
      info: 'ตำแหน่งบนลำต้นที่มีใบติดอยู่ — ใบเป็นอวัยวะที่เกิดบริเวณข้อ',
      shapes: [rect(100, 104, 20, 8, 3), rect(100, 160, 20, 8, 3)],
    },
    {
      id: 'leaf', tone: 'green', label: 'ใบ (leaf)',
      info: 'อวัยวะที่เกิดที่ข้อ มักเป็นแผ่นแบน ทำหน้าที่สังเคราะห์ด้วยแสง',
      shapes: [ellipse(150, 92, 34, 14), ellipse(70, 148, 34, 14), ellipse(150, 70, 22, 9)],
    },
    {
      id: 'axillary-bud', tone: 'pink', label: 'ตาข้าง (axillary bud) / เนื้อเยื่อเจริญด้านข้าง',
      info: 'อยู่ที่ซอกใบ มี lateral shoot meristem — เจริญเป็นกิ่งข้าง (ถูกตายอดข่มไว้ = apical dominance)',
      shapes: [circle(122, 100, 5), circle(98, 156, 5)],
    },
    {
      id: 'sam', tone: 'purple', label: 'เนื้อเยื่อเจริญปลายยอด (shoot apical meristem, SAM)',
      info: 'อยู่ในตายอด (apical bud) แบ่งเซลล์ทำให้ต้นสูงขึ้น (primary growth)',
      shapes: [path('M102 42 Q110 18 118 42 Z')],
    },
    {
      id: 'cotyledon', tone: 'yellow', label: 'ใบเลี้ยง (cotyledon)',
      info: 'ใบแรกของต้นอ่อน — พืชใบเลี้ยงคู่มี 2 ใบ ช่วงแรกใช้อาหารที่สะสมในใบเลี้ยงเป็นแหล่งพลังงาน',
      shapes: [ellipse(82, 196, 22, 9), ellipse(138, 196, 22, 9)],
    },
    {
      id: 'hypocotyl', tone: 'dgreen', label: 'ไฮโพคอทิล (hypocotyl)',
      info: 'ส่วนของลำต้นใต้ใบเลี้ยงลงไปถึงราก',
      shapes: [rect(104, 200, 12, 20, 3)],
    },
    {
      id: 'root', tone: 'tan', label: 'ราก (root)',
      info: 'ยึดลำต้น ดูดน้ำและแร่ธาตุ (มีราไมคอร์ไรซาช่วย) — ไม่มีข้อและปล้อง',
      shapes: [
        rect(106, 220, 8, 92, 3),
        poly([110, 245], [70, 280], [74, 284], [112, 252]),
        poly([110, 262], [150, 296], [146, 300], [108, 270]),
      ],
    },
    {
      id: 'root-cap', tone: 'brown', label: 'หมวกราก (root cap)',
      info: 'ปกป้องปลายราก ด้านในเหนือหมวกรากคือ root apical meristem ที่แบ่งเซลล์',
      shapes: [path('M104 312 Q110 330 116 312 Z')],
    },
  ],
};

// ---------------------------------------------------------- root tip zones
// Slide 35: division → elongation → differentiation zones.
export const rootTip: Diagram = {
  id: 'root-tip',
  title: 'ปลายราก: บริเวณการเติบโต',
  viewBox: '0 0 200 330',
  source: 'พืช 5.1 สไลด์ 35',
  parts: [
    {
      id: 'differentiation', tone: 'green', label: 'บริเวณเปลี่ยนสภาพ (differentiation zone)',
      info: 'เซลล์เปลี่ยนรูปร่างไปทำหน้าที่เฉพาะ เช่น เกิดขนราก (root hair) ไซเลม โฟลเอ็ม',
      shapes: [
        rect(70, 10, 60, 110, 6),
        ...[30, 60, 90].flatMap((y) => [line([70, y], [30, y - 12]), line([130, y + 12], [172, y])]),
      ],
    },
    {
      id: 'elongation', tone: 'yellow', label: 'บริเวณยืดตัว (elongation zone)',
      info: 'เซลล์ที่เพิ่งเกิดใหม่ยืดตัวยาวขึ้น ทำให้รากยาวขึ้น',
      shapes: Array.from({ length: 3 }, (_, i) => rect(70 + i * 20, 122, 20, 98, 4)),
    },
    {
      id: 'division', tone: 'purple', label: 'บริเวณแบ่งเซลล์ (zone of division)',
      info: 'มี root apical meristem แบ่งเซลล์สร้างเซลล์ใหม่',
      shapes: Array.from({ length: 12 }, (_, i) => rect(70 + (i % 4) * 15, 222 + Math.floor(i / 4) * 16, 15, 16, 2)),
    },
    {
      id: 'root-cap', tone: 'brown', label: 'หมวกราก (root cap)',
      info: 'ปกป้องเนื้อเยื่อเจริญที่ปลายราก',
      shapes: [path('M70 272 L130 272 Q130 318 100 324 Q70 318 70 272 Z')],
    },
  ],
};

export const plantDiagrams: Diagram[] = [dicotRoot, monocotRoot, dicotStem, monocotStem, leaf, plantBody, rootTip];
