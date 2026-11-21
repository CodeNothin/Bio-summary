// =====================================================================
// Widget: compare digestive tracts of the animals on animal 5.3 slides
// 45–56. Pick an animal; its slide picture, the path of food and the
// key facts appear.
// To add an animal, add an entry to `animals`.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Seg, T, WidgetFrame } from '../components/ui';

const animals = {
  paramecium: { fig: 'a5-46', label: 'พารามีเซียม', kind: 'ไม่มีทางเดินอาหาร', digest: 'intracellular', path: ['food vacuole', 'ปล่อยเอนไซม์เข้า vacuole', 'กากออกทาง anal pore'], note: 'โปรโตซัว: นำอาหารเข้า food vacuole แล้วปล่อยเอนไซม์เข้าไปย่อย' },
  hydra: { fig: 'a5-50', label: 'ไฮดรา', kind: 'ไม่สมบูรณ์ (ช่องเปิดเดียว)', digest: 'intra + extracellular', path: ['tentacle จับเหยื่อ', 'ปาก', 'gastrovascular cavity (เอนไซม์จาก gland cell)', 'เซลล์กลืนชิ้นเล็กเข้า food vacuole', 'กากออกทางปาก'], note: 'gastrovascular cavity — 1 gland cell ปล่อยเอนไซม์ 2 ย่อยเป็นชิ้นเล็ก 3 เซลล์กลืนชิ้นเล็กไปย่อยต่อใน food vacuole' },
  planarian: { fig: 'a5-49', label: 'พลานาเรีย', kind: 'ไม่สมบูรณ์ (ช่องเปิดเดียว)', digest: 'intra + extracellular', path: ['คอหอยยื่นออกมาจับอาหาร', 'ปาก + muscular pharynx', 'gastrovascular cavity (แตกแขนง)', 'กากออกทางปาก'], note: 'ส่วนของคอหอยยื่นออกมาทำหน้าที่จับอาหาร' },
  earthworm: { fig: 'a5-51', label: 'ไส้เดือนดิน', kind: 'สมบูรณ์ (ปาก + ทวารหนัก)', digest: 'extracellular', path: ['mouth', 'pharynx', 'esophagus', 'crop (เก็บอาหาร)', 'gizzard (บดอาหาร)', 'intestine (มี typhlosole)', 'anus'], note: 'crop และกระเพาะเก็บอาหาร (บางครั้งอาจมีการย่อย) · gizzard บดอาหาร' },
  bird: { fig: 'a5-52', label: 'นก', kind: 'สมบูรณ์', digest: 'extracellular', path: ['mouth', 'esophagus', 'crop (เก็บ ทำให้นุ่ม)', 'stomach (หลั่งน้ำย่อยโปรตีน)', 'gizzard (กล้ามเนื้อหนา + กรวด บดแทนฟัน)', 'small intestine (สำคัญในการย่อย)', 'anus (cloaca)'], note: 'gizzard ไม่มีต่อมขับน้ำย่อย' },
  cow: { fig: 'a5-54', label: 'วัว (เคี้ยวเอื้อง)', kind: 'สมบูรณ์ ยาวมาก', digest: 'extracellular + microbial', path: ['mouth', 'esophagus', 'rumen', 'reticulum', 'omasum', 'abomasum', 'small intestine', 'cecum / large intestine'], note: 'กระเพาะ 4 ส่วน มีส่วนหมัก (fermentation chamber) ที่จุลินทรีย์แบบพึ่งพา (mutualism) ช่วยย่อย cellulose · ทางเดินอาหารยาว ใช้เวลาย่อยนาน' },
  human: { fig: 'a5-56', label: 'คน', kind: 'สมบูรณ์', digest: 'extracellular', path: ['oral cavity', 'pharynx', 'esophagus', 'stomach', 'small intestine', 'large intestine', 'rectum', 'anus'], note: 'เอนไซม์จากเซลล์ผนังทางเดินอาหาร + ต่อมใกล้เคียง (ต่อมน้ำลาย ตับ ถุงน้ำดี ตับอ่อน)' },
} as const;
type Key = keyof typeof animals;

export function TractTypes() {
  const [k, setK] = useState<Key>('hydra');
  const a = animals[k];
  return (
    <WidgetFrame
      title="ทางเดินอาหารของสัตว์ต่าง ๆ"
      notice="เทียบ **ช่องเปิดเดียว (incomplete)** กับ **ปาก + ทวารหนัก (complete)** และดูว่าใครย่อยในเซลล์ (intracellular) / นอกเซลล์ (extracellular)"
      onReset={() => setK('hydra')}
    >
      <How>เลือกสัตว์ด้านล่าง — ภาพจะเปลี่ยนเป็นทางเดินอาหารของสัตว์นั้น</How>
      <Seg value={k} options={(Object.keys(animals) as Key[]).map((x) => ({ value: x, label: animals[x].label }))} onChange={setK} />
      <div style={{ marginTop: 8 }}>
        <SlideFig id={a.fig} />
      </div>
      <div className="readouts">
        <div className="readout hl"><div className="k">ทางเดินอาหาร</div><div className="v">{a.kind}</div></div>
        <div className="readout"><div className="k">การย่อย</div><div className="v">{a.digest}</div></div>
      </div>
      <ol className="order-list" style={{ marginTop: 8 }}>
        {a.path.map((p, i) => (
          <li key={p} style={{ gridTemplateColumns: 'auto 1fr' }}>
            <span className="num">{i + 1}</span>
            <span>{p}</span>
          </li>
        ))}
      </ol>
      <p className="small"><T>{a.note}</T></p>
    </WidgetFrame>
  );
}
