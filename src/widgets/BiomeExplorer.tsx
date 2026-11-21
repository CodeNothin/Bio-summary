// =====================================================================
// Widget: terrestrial biomes on a climograph (Unit 6.1 slides 19–27).
// Each biome is a box in "annual precipitation × typical temperature"
// space using the ranges written on the slides; tap a box or a button to
// read its plants, animals and location. Ranges are the slides' numbers;
// the box shapes are a simplified drawing, not the textbook's plot.
// To edit a biome, change the `biomes` table.
// =====================================================================
import { useState } from 'react';
import { T, WidgetFrame } from '../components/ui';

interface Biome {
  id: string; th: string; en: string; tone: string;
  /** precipitation range (mm/yr) and a representative temperature range (°C) for drawing */
  rain: [number, number]; temp: [number, number];
  where: string; climate: string; life: string;
}

const biomes: Biome[] = [
  { id: 'trop', th: 'ป่าเขตร้อน', en: 'tropical forest', tone: 'tone-dgreen', rain: [1500, 3000], temp: [25, 29], where: 'เขตศูนย์สูตรและใกล้ศูนย์สูตร', climate: 'ฝน > 2000 mm (rainforest), 1500–2000 mm (dry forest) · ร้อนตลอดปี ~25–29 °C', life: 'ป่าหลายชั้น ไม้ไม่ผลัดใบสูง พืชอิงอาศัย เถาวัลย์ · **ความหลากหลายสูงสุดในชีวนิเวศบนบก**' },
  { id: 'sav', th: 'ทุ่งหญ้าสะวันนา', en: 'savanna', tone: 'tone-yellow', rain: [300, 500], temp: [24, 29], where: 'เขตศูนย์สูตรและใกล้ศูนย์สูตร', climate: 'ฝนตามฤดู 300–500 mm · อุ่นตลอดปี ~24–29 °C', life: 'หญ้า + ต้นไม้ทนแล้งกระจาย (acacia, baobab) ปรับตัวต่อไฟและการแทะเล็ม · ช้าง ม้าลาย สิงโต' },
  { id: 'des', th: 'ทะเลทราย', en: 'desert', tone: 'tone-orange', rain: [0, 300], temp: [-5, 45], where: 'ใกล้ละติจูด 30°N/S ใจกลางทวีป', climate: 'ฝน < 300 mm · อาจเกิน 50 °C หรือต่ำถึง −30 °C', life: 'พืชอวบน้ำกระจายห่าง ทนร้อนและแห้ง · สัตว์ประหยัดน้ำ หากินกลางคืน (อูฐ เฟนเนก แมวทราย)' },
  { id: 'grass', th: 'ทุ่งหญ้าเขตอบอุ่น', en: 'temperate grassland', tone: 'tone-tan', rain: [300, 1000], temp: [-10, 30], where: 'เขตอบอุ่น', climate: 'ฝน 300–1000 mm (ตามฤดู) · ฤดูหนาว −10 °C ฤดูร้อน 30 °C', life: 'หญ้าหลายปีรากลึก ปรับตัวต่อไฟและการแทะเล็ม · ไบซัน แพรรีด็อก หมาป่า' },
  { id: 'temp', th: 'ป่าเขตอบอุ่น', en: 'temperate broadleaf forest', tone: 'tone-green', rain: [700, 2000], temp: [0, 35], where: 'ละติจูดกลางทั้งซีกโลกเหนือและใต้', climate: 'ฝน 700–2000 mm · ฤดูหนาว 0 °C ฤดูร้อน 35 °C', life: 'ไม้ผลัดใบ (oak, maple, beech, birch) เรือนยอดปิด · สัตว์หลายชนิดอพยพหรือจำศีล' },
  { id: 'taiga', th: 'ป่าสนไทก้า', en: 'northern coniferous forest', tone: 'tone-blue', rain: [300, 700], temp: [-50, 20], where: 'ละติจูดสูงทางเหนือ ใต้เขตทุนดรา', climate: 'ฝน 300–700 mm · ฤดูหนาว −50 °C ฤดูร้อน 20 °C', life: 'สน (spruce, fir, pine, larch) ใบเข็ม ทรงกรวย ไม่ผลัดใบ · มูส ลิงซ์ หมี' },
  { id: 'tun', th: 'ทุนดรา', en: 'tundra', tone: 'tone-grey', rain: [200, 600], temp: [-30, 10], where: 'อาร์กติก (และ alpine tundra บนภูเขาสูง)', climate: 'ฝน 200–600 mm · ฤดูหนาว −30 °C ฤดูร้อน < 10 °C · ลมแรง', life: 'มี **permafrost** · พืชล้มลุก มอส ไลเคน ไม้แคระ · กวางคาริบู จิ้งจอกอาร์กติก' },
];

export function BiomeExplorer() {
  const [id, setId] = useState('trop');
  const b = biomes.find((x) => x.id === id)!;
  // drawing scales: x = precipitation 0–3000 mm → 40–290, y = temperature −50…45 °C → 190–10
  const px = (mm: number) => 40 + (mm / 3000) * 250;
  const py = (c: number) => 190 - ((c + 50) / 95) * 180;
  return (
    <WidgetFrame
      title="ชีวนิเวศบนบก (climograph อย่างง่าย)"
      notice="ชีวนิเวศบนบกถูกกำหนดด้วย**อุณหภูมิและปริมาณฝน**เป็นหลัก — ลองเทียบทะเลทราย (ฝน < 300 mm) กับป่าเขตร้อน (> 2000 mm) และดูว่าทุนดรา/ไทก้า**หนาว**แค่ไหน"
      onReset={() => setId('trop')}
    >
      <svg viewBox="0 0 300 215" className="stage" role="img" aria-label="กราฟชีวนิเวศ">
        <line x1={40} y1={190} x2={292} y2={190} className="s-muted" />
        <line x1={40} y1={8} x2={40} y2={190} className="s-muted" />
        <text x={166} y={210} textAnchor="middle" className="small mut">ปริมาณฝน (mm/ปี) →</text>
        <text x={4} y={14} className="small mut">°C</text>
        {[-40, 0, 40].map((c) => <text key={c} x={8} y={py(c) + 4} className="small mut">{c}</text>)}
        {[0, 1000, 2000, 3000].map((m) => <text key={m} x={px(m)} y={202} textAnchor="middle" className="small mut">{m}</text>)}
        {biomes.map((x) => (
          <rect
            key={x.id}
            x={px(x.rain[0])} y={py(x.temp[1])}
            width={Math.max(8, px(x.rain[1]) - px(x.rain[0]))} height={Math.max(8, py(x.temp[0]) - py(x.temp[1]))}
            rx={6}
            className={`fill-tone ${x.tone}`}
            opacity={x.id === id ? 0.95 : 0.3}
            onClick={() => setId(x.id)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </svg>
      <div className="seg" style={{ marginTop: 6 }}>
        {biomes.map((x) => (
          <button key={x.id} className={x.id === id ? 'on' : ''} onClick={() => setId(x.id)} style={{ fontSize: '0.8rem' }}>
            {x.th}
          </button>
        ))}
      </div>
      <div className="step-text">
        <b>{b.th} ({b.en})</b>
        <br />📍 {b.where}
        <br />🌡️ <T>{b.climate}</T>
        <br />🌿 <T>{b.life}</T>
      </div>
    </WidgetFrame>
  );
}
