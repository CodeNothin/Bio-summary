// =====================================================================
// Plant (Unit 5, plant half) diagrams: the slide figures with tappable points on them.
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

export const dicotRoot: Diagram = {
  id: 'dicot-root',
  title: 'ภาคตัดขวางรากพืชใบเลี้ยงคู่',
  fig: 'p1-16',
  source: 'พืช 5.1 สไลด์ 14, 16',
  masks: [[46, 4, 71, 18], [72, 12, 99, 28], [46, 23, 72, 38], [50, 45, 63, 54], [48, 55, 63, 64], [50, 70, 64, 78], [50, 78, 64, 87], [50, 85, 63, 94]],
  parts: [
    {
      id: 'epidermis', tone: 'green', label: 'เนื้อเยื่อผิว (epidermis)',
      info: 'ชั้นนอกสุด เป็น dermal tissue ห่อหุ้มราก บางเซลล์ยื่นออกไปเป็นขนราก (root hair) ช่วยดูดน้ำ',
      at: [5, 26],
    },
    {
      id: 'cortex', tone: 'tan', label: 'คอร์เท็กซ์ (cortex)',
      info: 'ground tissue ที่อยู่ระหว่าง epidermis กับ vascular tissue — ในรากเป็นชั้นที่หนามาก',
      at: [15, 33],
    },
    {
      id: 'endodermis', tone: 'brown', label: 'เอนโดเดอร์มิส (endodermis)',
      info: 'ชั้นในสุดของคอร์เท็กซ์ เซลล์มีสาร suberin สะสมที่ผนัง ควบคุม/ลดการลำเลียงน้ำในแนวรัศมี',
      at: [35, 61.5],
    },
    {
      id: 'pericycle', tone: 'yellow', label: 'เพอริไซเคิล (pericycle)',
      info: 'ชั้นนอกสุดของ vascular tissue ในราก แบ่งเซลล์แล้วเจริญเป็นรากแขนง (lateral root) ได้',
      at: [37, 74],
    },
    {
      id: 'phloem', tone: 'orange', label: 'โฟลเอ็ม (phloem)',
      info: 'ลำเลียงอาหาร (น้ำตาล) — ในรากใบเลี้ยงคู่อยู่แทรกระหว่างแฉกของไซเลม',
      at: [33, 80],
    },
    {
      id: 'xylem', tone: 'red', label: 'ไซเลม (xylem)',
      info: 'ลำเลียงน้ำและแร่ธาตุ — ในรากใบเลี้ยงคู่เรียงเป็นแฉก 3–4 แฉกตรงกลาง',
      at: [25, 76],
    },
  ],
};

export const monocotRoot: Diagram = {
  id: 'monocot-root',
  title: 'ภาคตัดขวางรากพืชใบเลี้ยงเดี่ยว',
  fig: 'p1-17',
  source: 'พืช 5.1 สไลด์ 17',
  masks: [[0, 6, 23, 18], [1, 19, 26, 32], [41, 36, 66, 54]],
  parts: [
    {
      id: 'epidermis', tone: 'green', label: 'เนื้อเยื่อผิว (epidermis)',
      info: 'dermal tissue ชั้นนอกสุดของราก',
      at: [29.5, 40],
    },
    {
      id: 'cortex', tone: 'tan', label: 'คอร์เท็กซ์ (cortex)',
      info: 'ground tissue ระหว่าง epidermis กับ vascular tissue',
      at: [55, 60],
    },
    {
      id: 'endodermis', tone: 'brown', label: 'เอนโดเดอร์มิส (endodermis)',
      info: 'ชั้นในสุดของคอร์เท็กซ์ มี suberin ที่ผนังเซลล์',
      at: [73, 33],
    },
    {
      id: 'pericycle', tone: 'yellow', label: 'เพอริไซเคิล (pericycle)',
      info: 'ชั้นนอกสุดของ vascular tissue สร้างรากแขนงได้',
      at: [75, 40],
    },
    {
      id: 'phloem', tone: 'orange', label: 'โฟลเอ็ม (phloem)',
      info: 'แทรกอยู่ระหว่างแฉกไซเลม',
      at: [88, 31],
    },
    {
      id: 'xylem', tone: 'red', label: 'ไซเลม (xylem)',
      info: 'ในรากใบเลี้ยงเดี่ยว แฉกของไซเลมมี "จำนวนมาก" เรียงเป็นวง (ต่างจากรากใบเลี้ยงคู่ที่มี 3–4 แฉก)',
      at: [79, 22],
    },
  ],
};

export const dicotStem: Diagram = {
  id: 'dicot-stem',
  title: 'ภาคตัดขวางลำต้นพืชใบเลี้ยงคู่ (ระยะ primary growth)',
  fig: 'p1-18',
  source: 'พืช 5.1 สไลด์ 14, 18–19',
  masks: [[69, 2, 94, 18], [73, 25, 98, 42], [74, 52, 98, 70], [16, 27, 30, 36], [32, 37, 44, 46], [31, 52, 44, 61], [14, 76, 25, 87], [81, 77, 97, 91], [48, 42, 53, 49]],
  parts: [
    {
      id: 'epidermis', tone: 'green', label: 'เนื้อเยื่อผิว (epidermis)',
      info: 'dermal tissue ห่อหุ้มลำต้น',
      at: [64, 12.5],
    },
    {
      id: 'cortex', tone: 'dgreen', label: 'คอร์เท็กซ์ (cortex)',
      info: 'ground tissue ชั้นนอก ระหว่าง epidermis กับมัดท่อลำเลียง',
      at: [45, 25],
    },
    {
      id: 'pith', tone: 'tan', label: 'พิธ (pith)',
      info: 'ground tissue ที่อยู่ด้านในสุดของลำต้นพืชใบเลี้ยงคู่',
      at: [30, 70],
    },
    {
      id: 'phloem', tone: 'orange', label: 'โฟลเอ็ม (phloem)',
      info: 'ในแต่ละมัดท่อลำเลียง โฟลเอ็มอยู่ด้านนอก (ใกล้ผิว)',
      at: [60, 34],
    },
    {
      id: 'xylem', tone: 'red', label: 'ไซเลม (xylem)',
      info: 'ในแต่ละมัดท่อลำเลียง ไซเลมอยู่ด้านใน (ใกล้ไส้)',
      at: [50, 61],
    },
    {
      id: 'cambium', tone: 'purple', label: 'วาสคิวลาร์แคมเบียม (vascular cambium)',
      info: 'เนื้อเยื่อเจริญด้านข้าง อยู่ระหว่างโฟลเอ็มกับไซเลม — ต่อมาแบ่งเซลล์ทำให้เกิด secondary growth',
      at: [56, 46],
    },
  ],
};

export const monocotStem: Diagram = {
  id: 'monocot-stem',
  title: 'ภาคตัดขวางลำต้นพืชใบเลี้ยงเดี่ยว',
  fig: 'p1-47',
  source: 'พืช 5.1 แบบฝึกหัดสไลด์ 47',
  masks: [[54, 18, 63, 29], [54, 49, 63, 59], [54, 62, 63, 73], [54, 86, 63, 97]],
  parts: [
    {
      id: 'epidermis', tone: 'green', label: 'เนื้อเยื่อผิว (epidermis)',
      info: 'dermal tissue ชั้นนอกสุด',
      at: [38, 24],
    },
    {
      id: 'ground', tone: 'tan', label: 'เนื้อเยื่อพื้นฐาน (ground tissue)',
      info: 'ในลำต้นใบเลี้ยงเดี่ยว มัดท่อลำเลียงกระจายอยู่ทั่ว ground tissue จึงแบ่ง cortex กับ pith ไม่ชัด',
      at: [20, 45],
    },
    {
      id: 'phloem', tone: 'orange', label: 'โฟลเอ็ม (phloem)',
      info: 'อยู่ด้านนอกของแต่ละมัดท่อลำเลียง',
      at: [87, 36],
    },
    {
      id: 'xylem', tone: 'red', label: 'ไซเลม (xylem)',
      info: 'อยู่ด้านในของแต่ละมัดท่อลำเลียง',
      at: [84, 57],
    },
  ],
};

export const leaf: Diagram = {
  id: 'leaf',
  title: 'ภาคตัดขวางใบ',
  fig: 'p1-22',
  source: 'พืช 5.1 สไลด์ 21–22',
  masks: [[61, 4, 99, 22], [61, 23, 99, 45], [61, 52, 99, 76], [37, 84, 91, 100]],
  parts: [
    {
      id: 'cuticle', tone: 'yellow', label: 'คิวทิเคิล (cuticle)',
      info: 'ชั้นบางเคลือบผิวใบด้านบน ช่วยลดการสูญเสียน้ำ',
      at: [30, 6],
    },
    {
      id: 'upper-epidermis', tone: 'grey', label: 'เนื้อเยื่อผิวด้านบน (upper epidermis)',
      info: 'dermal tissue — เซลล์โค้งมน ใส คล้ายเลนส์ ทำหน้าที่รวมแสง',
      at: [20, 14],
    },
    {
      id: 'palisade', tone: 'green', label: 'เซลล์แพลิเซด (palisade cell)',
      info: 'ground tissue (mesophyll) รูปทรงกระบอก เรียงตัวหนาแน่น มีคลอโรพลาสต์มาก ทำหน้าที่ดูดกลืนแสง',
      at: [15, 36],
    },
    {
      id: 'spongy', tone: 'dgreen', label: 'เซลล์สปันจี (spongy cell)',
      info: 'ground tissue (mesophyll) รูปร่างไม่แน่นอน เรียงตัวหลวม ๆ มีช่องอากาศ เอื้อต่อการแพร่ของแก๊ส และดูดกลืนแสงส่วนที่เหลือ',
      at: [45, 55],
    },
    {
      id: 'xylem', tone: 'red', label: 'ไซเลมในเส้นใบ (xylem)',
      info: 'เส้นใบ (vein) = มัดท่อลำเลียง ไซเลมอยู่ด้านบนของเส้นใบ',
      at: [42.5, 39],
    },
    {
      id: 'phloem', tone: 'orange', label: 'โฟลเอ็มในเส้นใบ (phloem)',
      info: 'โฟลเอ็มอยู่ด้านล่างของเส้นใบ ลำเลียงน้ำตาลที่ใบสร้างออกไป',
      at: [43, 47],
    },
    {
      id: 'lower-epidermis', tone: 'grey', label: 'เนื้อเยื่อผิวด้านล่าง (lower epidermis)',
      info: 'dermal tissue ด้านล่าง ประกอบด้วย epidermal cell, guard cell และ subsidiary cell — มีปากใบมากที่ผิวใบด้านล่าง',
      at: [58, 72],
    },
    {
      id: 'guard-cell', tone: 'green', label: 'เซลล์คุม (guard cell) / ปากใบ (stomata)',
      info: 'เซลล์คุม 2 เซลล์ล้อมรอบรูปากใบ เปิด–ปิดเพื่อให้แก๊สแพร่ (CO₂ เข้า) และให้น้ำระเหยออก (การคายน้ำ)',
      at: [9, 74],
    },
  ],
};

export const plantBody: Diagram = {
  id: 'plant-body',
  title: 'โครงสร้างต้นพืช (phytomer)',
  fig: 'p1-12',
  source: 'พืช 5.1 สไลด์ 12–13, 50',
  masks: [[17, 5, 27, 10], [38, 13, 51, 17.5], [47, 23, 56, 28], [18, 32, 27, 36.5], [35, 32, 55, 37], [15, 38.5, 28, 43], [42, 40, 56, 45], [13, 52, 26, 56.5], [17, 86, 29, 91], [72, 12, 99, 24], [71, 37, 97, 49], [70, 66, 97, 78]],
  parts: [
    {
      id: 'stem', tone: 'green', label: 'ลำต้น (stem)',
      info: 'มีข้อ (node) และปล้อง (internode) — ต่างจากรากที่ไม่มีข้อปล้อง',
      at: [30, 22],
    },
    {
      id: 'internode', tone: 'dgreen', label: 'ปล้อง (internode)',
      info: 'ช่วงลำต้นระหว่างข้อสองข้อ',
      at: [31, 41],
    },
    {
      id: 'node', tone: 'yellow', label: 'ข้อ (node)',
      info: 'ตำแหน่งบนลำต้นที่มีใบติดอยู่ — ใบเป็นอวัยวะที่เกิดบริเวณข้อ',
      at: [30.5, 35],
    },
    {
      id: 'leaf', tone: 'green', label: 'ใบ (leaf)',
      info: 'อวัยวะที่เกิดที่ข้อ มักเป็นแผ่นแบน ทำหน้าที่สังเคราะห์ด้วยแสง',
      at: [42, 22],
    },
    {
      id: 'axillary-bud', tone: 'pink', label: 'ตาข้าง (axillary bud) / เนื้อเยื่อเจริญด้านข้าง',
      info: 'อยู่ที่ซอกใบ มี lateral shoot meristem — เจริญเป็นกิ่งข้าง (ถูกตายอดข่มไว้ = apical dominance)',
      at: [34, 30.5],
    },
    {
      id: 'sam', tone: 'purple', label: 'เนื้อเยื่อเจริญปลายยอด (shoot apical meristem, SAM)',
      info: 'อยู่ในตายอด (apical bud) แบ่งเซลล์ทำให้ต้นสูงขึ้น (primary growth)',
      at: [25, 9],
    },
    {
      id: 'cotyledon', tone: 'yellow', label: 'ใบเลี้ยง (cotyledon)',
      info: 'ใบแรกของต้นอ่อน — พืชใบเลี้ยงคู่มี 2 ใบ ช่วงแรกใช้อาหารที่สะสมในใบเลี้ยงเป็นแหล่งพลังงาน',
      at: [40, 47],
    },
    {
      id: 'hypocotyl', tone: 'dgreen', label: 'ไฮโพคอทิล (hypocotyl)',
      info: 'ส่วนของลำต้นใต้ใบเลี้ยงลงไปถึงราก',
      at: [30, 55],
    },
    {
      id: 'root', tone: 'tan', label: 'ราก (root)',
      info: 'ยึดลำต้น ดูดน้ำและแร่ธาตุ (มีราไมคอร์ไรซาช่วย) — ไม่มีข้อและปล้อง',
      at: [30, 68],
    },
    {
      id: 'root-cap', tone: 'brown', label: 'หมวกราก (root cap)',
      info: 'ปกป้องปลายราก ด้านในเหนือหมวกรากคือ root apical meristem ที่แบ่งเซลล์',
      at: [31, 90],
    },
  ],
};

export const rootTip: Diagram = {
  id: 'root-tip',
  title: 'ปลายราก: บริเวณการเติบโต',
  fig: 'p1-35',
  source: 'พืช 5.1 สไลด์ 35',
  masks: [[0, 12, 33, 37], [72, 45, 100, 63], [0, 59, 31, 91], [62, 39, 74, 48], [32, 59, 43, 67], [33, 83, 49, 91], [71, 69, 100, 89]],
  parts: [
    {
      id: 'differentiation', tone: 'green', label: 'บริเวณเปลี่ยนสภาพ (differentiation zone)',
      info: 'เซลล์เปลี่ยนรูปร่างไปทำหน้าที่เฉพาะ เช่น เกิดขนราก (root hair) ไซเลม โฟลเอ็ม',
      at: [55, 20],
    },
    {
      id: 'elongation', tone: 'yellow', label: 'บริเวณยืดตัว (elongation zone)',
      info: 'เซลล์ที่เพิ่งเกิดใหม่ยืดตัวยาวขึ้น ทำให้รากยาวขึ้น',
      at: [52, 45],
    },
    {
      id: 'division', tone: 'purple', label: 'บริเวณแบ่งเซลล์ (zone of division)',
      info: 'มี root apical meristem แบ่งเซลล์สร้างเซลล์ใหม่',
      at: [50, 70],
    },
    {
      id: 'root-cap', tone: 'brown', label: 'หมวกราก (root cap)',
      info: 'ปกป้องเนื้อเยื่อเจริญที่ปลายราก',
      at: [50, 86],
    },
  ],
};
export const plantDiagrams: Diagram[] = [dicotRoot, monocotRoot, dicotStem, monocotStem, leaf, plantBody, rootTip];
