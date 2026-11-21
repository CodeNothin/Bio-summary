// =====================================================================
// Widget: build an epithelium by choosing cell SHAPE and number of LAYERS
// and see that tissue highlighted on the slide picture (animal 5.1
// slides 13–14) plus where it is found. Picture boxes are percent of the
// picture (`spots`).
// To change a location, edit `where`.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Seg, T, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

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

/** where each epithelium is on slide 13 (a5-13) — stratified columnar only on slide 14 */
const spots: Record<string, [string, Box]> = {
  'simple-squamous': ['a5-13', [15, 12, 37, 49]],
  'simple-cuboidal': ['a5-13', [37, 12, 57, 49]],
  'simple-columnar': ['a5-13', [55, 2, 76, 49]],
  'stratified-squamous': ['a5-13', [9, 51, 36, 99]],
  'stratified-cuboidal': ['a5-13', [35, 54, 58, 99]],
  'pseudo-columnar': ['a5-13', [56, 51, 83, 99]],
  'stratified-columnar': ['a5-14', [16, 68, 36, 96]],
};

export function EpitheliumBuilder() {
  const [shape, setShape] = useState<Shape>('squamous');
  const [layers, setLayers] = useState<Layers>('simple');
  const key = layers === 'pseudo' ? 'pseudo-columnar' : `${layers}-${shape}`;
  const [figId, box] = spots[key];
  return (
    <WidgetFrame
      title="ประกอบเนื้อเยื่อบุผิว"
      notice="รูปร่างบอกหน้าที่: **แบนบาง → แลกเปลี่ยน · ลูกเต๋า → หลั่ง · ทรงสูง → ดูดซึม · หลายชั้น → ป้องกัน** · pseudostratified ดูเหมือนหลายชั้น แต่ทุกเซลล์ยังแตะเยื่อรองรับฐาน"
      onReset={() => { setShape('squamous'); setLayers('simple'); }}
    >
      <How>เลือกจำนวนชั้นและรูปร่างเซลล์ — ภาพจะเน้นเนื้อเยื่อบุผิวแบบที่เลือก</How>
      <Seg value={layers} options={[{ value: 'simple', label: 'ชั้นเดียว' }, { value: 'stratified', label: 'หลายชั้น' }, { value: 'pseudo', label: 'หลายชั้นเทียม' }]} onChange={setLayers} />
      <div style={{ height: 6 }} />
      {layers !== 'pseudo' && (
        <Seg value={shape} options={[{ value: 'squamous', label: 'แบน (squamous)' }, { value: 'cuboidal', label: 'ลูกเต๋า (cuboidal)' }, { value: 'columnar', label: 'ทรงสูง (columnar)' }]} onChange={setShape} />
      )}
      <div style={{ marginTop: 8 }}>
        <SlideFig id={figId} spot={box} />
      </div>
      <div className="step-text">
        <b>{layers === 'pseudo' ? 'pseudostratified columnar' : `${layers} ${shape}`} epithelium</b>
        <br />
        <T>{where[key]}</T>
      </div>
    </WidgetFrame>
  );
}
