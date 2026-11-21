// =====================================================================
// Widget: terrestrial biomes (Unit 6.1 slides 19–27). Pick a biome to see
// its own slide (photos, world map, numbers) and a short Thai summary.
// The first button shows the slide-20 climograph (temperature ×
// precipitation) that the deck uses to compare biomes. `fig` = slide.
// To edit a biome, change the `biomes` table.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { T, WidgetFrame } from '../components/ui';

interface Biome {
  id: string; th: string; en: string; tone: string; fig: string;
  /** precipitation range (mm/yr) and a representative temperature range (°C), from the slides */
  rain: [number, number]; temp: [number, number];
  where: string; climate: string; life: string;
}

const biomes: Biome[] = [
  { id: 'trop', fig: 'e1-21', th: 'ป่าเขตร้อน', en: 'tropical forest', tone: 'tone-dgreen', rain: [1500, 3000], temp: [25, 29], where: 'เขตศูนย์สูตรและใกล้ศูนย์สูตร', climate: 'ฝน > 2000 mm (rainforest), 1500–2000 mm (dry forest) · ร้อนตลอดปี ~25–29 °C', life: 'ป่าหลายชั้น ไม้ไม่ผลัดใบสูง พืชอิงอาศัย เถาวัลย์ · **ความหลากหลายสูงสุดในชีวนิเวศบนบก**' },
  { id: 'sav', fig: 'e1-22', th: 'ทุ่งหญ้าสะวันนา', en: 'savanna', tone: 'tone-yellow', rain: [300, 500], temp: [24, 29], where: 'เขตศูนย์สูตรและใกล้ศูนย์สูตร', climate: 'ฝนตามฤดู 300–500 mm · อุ่นตลอดปี ~24–29 °C', life: 'หญ้า + ต้นไม้ทนแล้งกระจาย (acacia, baobab) ปรับตัวต่อไฟและการแทะเล็ม · ช้าง ม้าลาย สิงโต' },
  { id: 'des', fig: 'e1-23', th: 'ทะเลทราย', en: 'desert', tone: 'tone-orange', rain: [0, 300], temp: [-5, 45], where: 'ใกล้ละติจูด 30°N/S ใจกลางทวีป', climate: 'ฝน < 300 mm · อาจเกิน 50 °C หรือต่ำถึง −30 °C', life: 'พืชอวบน้ำกระจายห่าง ทนร้อนและแห้ง · สัตว์ประหยัดน้ำ หากินกลางคืน (อูฐ เฟนเนก แมวทราย)' },
  { id: 'grass', fig: 'e1-24', th: 'ทุ่งหญ้าเขตอบอุ่น', en: 'temperate grassland', tone: 'tone-tan', rain: [300, 1000], temp: [-10, 30], where: 'เขตอบอุ่น', climate: 'ฝน 300–1000 mm (ตามฤดู) · ฤดูหนาว −10 °C ฤดูร้อน 30 °C', life: 'หญ้าหลายปีรากลึก ปรับตัวต่อไฟและการแทะเล็ม · ไบซัน แพรรีด็อก หมาป่า' },
  { id: 'temp', fig: 'e1-25', th: 'ป่าเขตอบอุ่น', en: 'temperate broadleaf forest', tone: 'tone-green', rain: [700, 2000], temp: [0, 35], where: 'ละติจูดกลางทั้งซีกโลกเหนือและใต้', climate: 'ฝน 700–2000 mm · ฤดูหนาว 0 °C ฤดูร้อน 35 °C', life: 'ไม้ผลัดใบ (oak, maple, beech, birch) เรือนยอดปิด · สัตว์หลายชนิดอพยพหรือจำศีล' },
  { id: 'taiga', fig: 'e1-26', th: 'ป่าสนไทก้า', en: 'northern coniferous forest', tone: 'tone-blue', rain: [300, 700], temp: [-50, 20], where: 'ละติจูดสูงทางเหนือ ใต้เขตทุนดรา', climate: 'ฝน 300–700 mm · ฤดูหนาว −50 °C ฤดูร้อน 20 °C', life: 'สน (spruce, fir, pine, larch) ใบเข็ม ทรงกรวย ไม่ผลัดใบ · มูส ลิงซ์ หมี' },
  { id: 'tun', fig: 'e1-27', th: 'ทุนดรา', en: 'tundra', tone: 'tone-grey', rain: [200, 600], temp: [-30, 10], where: 'อาร์กติก (และ alpine tundra บนภูเขาสูง)', climate: 'ฝน 200–600 mm · ฤดูหนาว −30 °C ฤดูร้อน < 10 °C · ลมแรง', life: 'มี **permafrost** · พืชล้มลุก มอส ไลเคน ไม้แคระ · กวางคาริบู จิ้งจอกอาร์กติก' },
];

export function BiomeExplorer() {
  const [id, setId] = useState('map');
  const b = biomes.find((x) => x.id === id);
  return (
    <WidgetFrame
      title="ชีวนิเวศบนบก"
      notice="ชีวนิเวศบนบกถูกกำหนดด้วย**อุณหภูมิและปริมาณฝน**เป็นหลัก — ลองเทียบทะเลทราย (ฝน < 300 mm) กับป่าเขตร้อน (> 2000 mm) และดูว่าทุนดรา/ไทก้า**หนาว**แค่ไหน"
      onReset={() => setId('map')}
    >
      <SlideFig id={b ? b.fig : 'e1-20'} />
      <div className="seg" style={{ marginTop: 6 }}>
        <button className={id === 'map' ? 'on' : ''} onClick={() => setId('map')} style={{ fontSize: '0.8rem' }}>
          climograph
        </button>
        {biomes.map((x) => (
          <button key={x.id} className={x.id === id ? 'on' : ''} onClick={() => setId(x.id)} style={{ fontSize: '0.8rem' }}>
            {x.th}
          </button>
        ))}
      </div>
      <div className="step-text">
        {b ? (
          <>
            <b>{b.th} ({b.en})</b>
            <br />📍 {b.where}
            <br />🌡️ <T>{b.climate}</T>
            <br />🌿 <T>{b.life}</T>
          </>
        ) : (
          <T>{'**climograph**: แกนนอน = ปริมาณฝนต่อปี แกนตั้ง = อุณหภูมิเฉลี่ย — ชีวนิเวศแต่ละแบบกินพื้นที่คนละช่วง · กดชื่อชีวนิเวศเพื่อดูสไลด์ของมัน'}</T>
        )}
      </div>
    </WidgetFrame>
  );
}
