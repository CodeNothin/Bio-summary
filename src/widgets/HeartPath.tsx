// =====================================================================
// Widget: follow blood through the human heart (animal 5.4 slides
// 90–92) on the heart diagram: pulmonary then systemic circulation.
// =====================================================================
import { DiagramStepper } from '../components/DiagramStepper';

export function HeartPath() {
  return (
    <DiagramStepper
      diagram="heart"
      title="เส้นทางเลือดผ่านหัวใจ"
      notice="ด้าน**ขวา**ของหัวใจ (ซ้ายมือเรา) มีเลือด O₂ ต่ำ ไปปอด · ด้าน**ซ้าย** มีเลือด O₂ สูง ไปร่างกาย · ลิ้นทุกอันทำให้เลือดไหลทางเดียว"
      steps={[
        { title: 'vena cava → atrium ขวา', hl: ['superior-vc', 'inferior-vc', 'ra'], text: 'เลือด O₂ ต่ำจากหัว-แขน (anterior/superior vena cava) และลำตัว-ขา (posterior/inferior vena cava) เข้าสู่ **atrium ขวา**' },
        { title: 'ผ่าน tricuspid valve → ventricle ขวา', hl: ['tricuspid', 'rv'], text: 'AV valve ด้านขวา = **tricuspid**' },
        { title: 'ผ่าน semilunar valve → pulmonary artery', hl: ['pulmonary-valve', 'pulmonary-artery'], text: 'ventricle ขวาบีบเลือดไปปอด — **pulmonary circulation**' },
        { title: 'ปอด → pulmonary vein → atrium ซ้าย', hl: ['pulmonary-vein', 'la'], text: 'ที่ปอดแลกเปลี่ยนแก๊สได้ **oxygen-rich blood** กลับเข้า **atrium ซ้าย**' },
        { title: 'ผ่าน bicuspid (mitral) valve → ventricle ซ้าย', hl: ['mitral', 'lv'], text: 'AV valve ด้านซ้าย = **bicuspid (mitral)** · ventricle ซ้ายผนังหนาที่สุด' },
        { title: 'ผ่าน semilunar valve → aorta → ร่างกาย', hl: ['aortic-valve', 'aorta'], text: '**systemic circulation**: aorta แยกเป็น 2 ทาง — ส่วนหัวและแขน · อวัยวะในช่องท้องและขา แล้วกลับมาทาง vena cava' },
      ]}
    />
  );
}
