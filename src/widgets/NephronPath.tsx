// =====================================================================
// Widget: follow the filtrate through a nephron (animal 5.7 slides
// 129–136) on the nephron diagram: what is reabsorbed and secreted in
// each segment.
// =====================================================================
import { DiagramStepper } from '../components/DiagramStepper';

export function NephronPath() {
  return (
    <DiagramStepper
      diagram="nephron"
      title="ตาม filtrate ผ่านหน่วยไต"
      maxWidth={280}
      notice="กรอง → ดูดกลับ → หลั่ง → ขับถ่าย · จำสั้น ๆ: **ขาลง loop ดูด 'น้ำ' อย่างเดียว · ขาขึ้น ดูด 'NaCl' อย่างเดียว** · ADH ทำงานที่ท่อรวม"
      steps={[
        { title: 'กรองที่ glomerulus → Bowman\'s capsule', hl: ['glomerulus', 'bowman'], text: '**infiltration (filtration)**: น้ำและสารละลายในเลือดถูกดันผ่านผนังหลอดเลือดฝอย → filtrate = น้ำ กลูโคส ของเสียไนโตรเจน สารโมเลกุลเล็ก (เม็ดเลือดและโปรตีนใหญ่ผ่านไม่ได้)' },
        { title: 'ท่อขดส่วนต้น (proximal)', hl: ['proximal'], text: 'ดูดกลับ **น้ำ กลูโคส NaCl กรดอะมิโน K⁺ HCO₃⁻** · หลั่ง **NH₃ และ H⁺**' },
        { title: 'loop of Henle ขาลง', hl: ['descending'], text: 'ดูดกลับ**น้ำ**เพียงอย่างเดียว' },
        { title: 'loop of Henle ขาขึ้น', hl: ['ascending'], text: 'ดูดกลับ **NaCl** เพียงอย่างเดียว' },
        { title: 'ท่อขดส่วนปลาย (distal)', hl: ['distal'], text: 'ดูดกลับ **NaCl และ HCO₃⁻** · หลั่ง **H⁺ และ K⁺** · (aldosterone จาก RAAS เพิ่มการดูดกลับ Na⁺ และน้ำ)' },
        { title: 'ท่อรวม (collecting duct)', hl: ['collecting-duct'], text: 'ดูดกลับ **น้ำ NaCl และยูเรีย** · **ADH** เพิ่มการดูดน้ำกลับที่นี่ → ปัสสาวะไหลไป renal pelvis → ureter → กระเพาะปัสสาวะ → urethra' },
      ]}
    />
  );
}
