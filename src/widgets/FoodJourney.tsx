// =====================================================================
// Widget: follow food through the human tract (animal 5.3 slides 57–77)
// on the gi-tract diagram, with what happens to carbohydrate, protein,
// fat and nucleic acid at each stop (the digestion chart, slide 64/71).
// =====================================================================
import { DiagramStepper } from '../components/DiagramStepper';

export function FoodJourney() {
  return (
    <DiagramStepper
      diagram="gi-tract"
      title="ตามอาหารไปทีละจุด"
      notice="ดูว่าสารอาหารแต่ละชนิด**เริ่มถูกย่อยที่ไหน**: คาร์โบไฮเดรต → ปาก · โปรตีน → กระเพาะ · ไขมันและกรดนิวคลีอิก → ลำไส้เล็ก · และ**ดูดซึมมากที่สุด**ที่ jejunum/ileum"
      steps={[
        { title: 'ช่องปาก', hl: ['mouth', 'salivary'], text: 'ฟันบดเคี้ยว (mechanical) ลิ้นคลุกเป็น bolus · น้ำลาย: mucin หล่อลื่น, **salivary amylase** ย่อยแป้ง → dextrin/maltose, lysozyme ฆ่าเชื้อ' },
        { title: 'คอหอยและหลอดอาหาร', hl: ['pharynx', 'esophagus'], text: 'กลืน (epiglottis ปิด glottis) แล้ว **peristalsis** ดันลงกระเพาะ — ไม่มีการย่อยทางเคมีเพิ่ม' },
        { title: 'กระเพาะอาหาร', hl: ['stomach'], text: 'parietal cell หลั่ง **HCl** · chief cell หลั่ง **pepsinogen** → (HCl และ pepsin) → **pepsin** ย่อยโปรตีน → polypeptide สั้น · mucous cell หลั่งเมือกป้องกัน · ได้ **acid chyme**' },
        { title: 'duodenum + ตับ ถุงน้ำดี ตับอ่อน', hl: ['small-intestine', 'liver', 'gallbladder', 'pancreas'], text: '**น้ำดี** (ไม่มีเอนไซม์) ทำให้ไขมันแตกตัว · **pancreatic juice**: bicarbonate + amylase, trypsin, chymotrypsin, carboxypeptidase, lipase, nucleases — ย่อยมากที่สุดที่ duodenum' },
        { title: 'jejunum และ ileum', hl: ['small-intestine'], text: 'เอนไซม์จากเซลล์ผนังลำไส้ (disaccharidase, peptidase, nucleotidase…) ย่อยขั้นสุดท้าย · **ดูดซึมมากที่สุด**: น้ำตาล/กรดอะมิโน → เลือด, ไขมัน → chylomicron → น้ำเหลือง' },
        { title: 'ลำไส้ใหญ่', hl: ['large-intestine'], text: '**ไม่มีการย่อยแล้ว** ดูดน้ำและเกลือแร่ อาหารอยู่ 12–24 ชม. (cecum มีไส้ติ่ง, colon มี crypt สร้างเมือก)' },
        { title: 'ลำไส้ตรงและทวารหนัก', hl: ['rectum', 'anus'], text: 'rectum เก็บกากอาหาร (มีจุลินทรีย์และเซลลูโลสมาก) · anal canal มีหูรูดควบคุมการขับถ่าย' },
      ]}
    />
  );
}
