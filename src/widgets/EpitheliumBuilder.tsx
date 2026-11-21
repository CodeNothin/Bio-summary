// =====================================================================
// Widget: build an epithelium by choosing cell SHAPE and number of LAYERS
// and see where that tissue is found (animal 5.1 slides 12–14).
// To change a location, edit `where`.
// =====================================================================
import { useState } from 'react';
import type { ReactElement } from 'react';
import { Seg, T, WidgetFrame } from '../components/ui';

type Shape = 'squamous' | 'cuboidal' | 'columnar';
type Layers = 'simple' | 'stratified' | 'pseudo';

const where: Record<string, string> = {
  'simple-squamous': 'ถุงลมในปอด และ endothelium ของหลอดเลือด → **แลกเปลี่ยนสาร** (บางที่สุด)',
  'simple-cuboidal': 'ท่อไต ต่อมต่าง ๆ เช่น ต่อมไทรอยด์ ต่อมน้ำลาย → **การหลั่ง**',
  'simple-columnar': 'ทางเดินอาหาร เช่น กระเพาะอาหาร ลำไส้เล็ก → **การดูดซึม** (ยกเว้นหลอดอาหารและทวารหนัก)',
  'stratified-squamous': 'ผิวหนัง ช่องปาก หลอดอาหาร ทวารหนัก (ช่องคลอด) → **ทนการเสียดสี/ป้องกัน**',
  'stratified-cuboidal': 'สไลด์แสดงเป็นภาพ ไม่ได้ระบุตำแหน่ง',
  'stratified-columnar': 'พบได้น้อย เช่น บริเวณท่อปัสสาวะของเพศชาย',
  'pseudo-columnar': 'pseudostratified ciliated columnar: ทางเดินหายใจ (โพรงจมูก หลอดลม ขั้วปอด)',
};

export function EpitheliumBuilder() {
  const [shape, setShape] = useState<Shape>('squamous');
  const [layers, setLayers] = useState<Layers>('simple');
  const key = layers === 'pseudo' ? 'pseudo-columnar' : `${layers}-${shape}`;
  const shown: Shape = layers === 'pseudo' ? 'columnar' : shape;
  const h = shown === 'squamous' ? 10 : shown === 'cuboidal' ? 22 : 40; // cell height
  const w = shown === 'squamous' ? 40 : shown === 'cuboidal' ? 22 : 18; // cell width
  const nLayers = layers === 'stratified' ? 3 : 1;
  const cols = Math.floor(260 / w);
  const cells: ReactElement[] = [];
  for (let L = 0; L < nLayers; L++) {
    for (let c = 0; c < cols; c++) {
      // in stratified epithelium the top layers flatten (as in the skin)
      const hh = layers === 'stratified' && L > 0 ? Math.max(8, h * (1 - L * 0.3)) : h;
      const y = 120 - (L + 1) * (h + 2) - (L > 0 ? 0 : 0);
      cells.push(<rect key={`${L}-${c}`} x={20 + c * w + (L % 2) * (w / 2)} y={y} width={w - 2} height={hh} rx={4} className="fill-tone tone-pink" />);
      cells.push(<circle key={`n${L}-${c}`} cx={20 + c * w + (L % 2) * (w / 2) + w / 2 - 1} cy={y + hh / 2} r={Math.min(4, hh / 3)} className="fill-tone tone-purple" />);
    }
  }
  if (layers === 'pseudo') {
    // every cell touches the basement membrane, but nuclei sit at different heights and some cells are short
    cells.length = 0;
    for (let c = 0; c < cols; c++) {
      const tall = c % 3 !== 1;
      const hh = tall ? 60 : 30;
      cells.push(<rect key={c} x={20 + c * w} y={120 - hh} width={w - 2} height={hh} rx={4} className="fill-tone tone-pink" />);
      cells.push(<circle key={`n${c}`} cx={20 + c * w + w / 2 - 1} cy={120 - (tall ? 40 : 15)} r={4} className="fill-tone tone-purple" />);
      if (tall) cells.push(<path key={`ci${c}`} d={`M${22 + c * w} ${60} l2 -6 m4 6 l2 -6 m4 6 l2 -6`} className="f-none s-ink" strokeWidth={1} />);
    }
  }
  return (
    <WidgetFrame
      title="ประกอบเนื้อเยื่อบุผิว"
      notice="รูปร่างบอกหน้าที่: **แบนบาง → แลกเปลี่ยน · ลูกเต๋า → หลั่ง · ทรงสูง → ดูดซึม · หลายชั้น → ป้องกัน** · pseudostratified ดูเหมือนหลายชั้น แต่ทุกเซลล์ยังแตะเยื่อรองรับฐาน"
      onReset={() => { setShape('squamous'); setLayers('simple'); }}
    >
      <Seg value={layers} options={[{ value: 'simple', label: 'ชั้นเดียว' }, { value: 'stratified', label: 'หลายชั้น' }, { value: 'pseudo', label: 'หลายชั้นเทียม' }]} onChange={setLayers} />
      <div style={{ height: 6 }} />
      {layers !== 'pseudo' && (
        <Seg value={shape} options={[{ value: 'squamous', label: 'แบน (squamous)' }, { value: 'cuboidal', label: 'ลูกเต๋า (cuboidal)' }, { value: 'columnar', label: 'ทรงสูง (columnar)' }]} onChange={setShape} />
      )}
      <svg viewBox="0 0 300 140" className="stage" style={{ marginTop: 8 }} role="img" aria-label="เนื้อเยื่อบุผิว">
        {cells}
        <rect x={16} y={121} width={268} height={5} className="fill-tone tone-brown" />
        <text x={150} y={138} textAnchor="middle" className="small mut">basement membrane (เยื่อรองรับฐาน) · ด้านบน = apical surface</text>
      </svg>
      <div className="step-text">
        <b>{layers === 'pseudo' ? 'pseudostratified columnar' : `${layers} ${shape}`} epithelium</b>
        <br />
        <T>{where[key]}</T>
      </div>
    </WidgetFrame>
  );
}
