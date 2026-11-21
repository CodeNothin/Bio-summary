// =====================================================================
// Widget: switch between four cross-sections (dicot/monocot × root/stem)
// and tap the tissues. Uses the diagrams in src/data/diagrams/plant.ts.
// To add a section (e.g. leaf), add an entry to `choices`.
// =====================================================================
import { useState } from 'react';
import { TapDiagram } from '../components/TapDiagram';
import { How, Seg, T, WidgetFrame } from '../components/ui';
import { diagrams } from '../data/diagrams';

const choices = [
  { value: 'dicot-root', label: 'รากใบเลี้ยงคู่' },
  { value: 'monocot-root', label: 'รากใบเลี้ยงเดี่ยว' },
  { value: 'dicot-stem', label: 'ลำต้นใบเลี้ยงคู่' },
  { value: 'monocot-stem', label: 'ลำต้นใบเลี้ยงเดี่ยว' },
] as const;
type Choice = (typeof choices)[number]['value'];

export function PlantXSection() {
  const [which, setWhich] = useState<Choice>('dicot-root');
  const [sel, setSel] = useState<string | null>(null);
  const d = diagrams[which];
  const part = d.parts.find((p) => p.id === sel);
  return (
    <WidgetFrame
      title="ภาคตัดขวางราก/ลำต้น"
      notice="สลับดูทั้ง 4 แบบ แล้วดูว่า**ไซเลมจัดเรียงต่างกันอย่างไร** — ราก: แฉกตรงกลาง (คู่ 3–4 แฉก, เดี่ยว หลายแฉก) · ลำต้น: เป็นวง (คู่) หรือกระจาย (เดี่ยว) · endodermis/pericycle มีเฉพาะในราก"
      onReset={() => { setWhich('dicot-root'); setSel(null); }}
    >
      <How>เลือกราก/ลำต้นด้านบน แล้วแตะจุดบนภาพ (หรือชื่อด้านล่าง) — ชื่อและหน้าที่ของเนื้อเยื่อจะขึ้นใต้ภาพ</How>
      <Seg value={which} options={[...choices]} onChange={(v) => { setWhich(v); setSel(null); }} />
      <div style={{ marginTop: 8 }}>
        <TapDiagram diagram={d} selected={sel} onTap={setSel} />
      </div>
      <div className="part-info">
        {part ? (
          <>
            <b>{part.label}</b>
            <br />
            <T>{part.info}</T>
          </>
        ) : (
          <span className="small">แตะเนื้อเยื่อในภาพ</span>
        )}
      </div>
      <div className="part-chips">
        {d.parts.map((p) => (
          <button key={p.id} className={`chip${sel === p.id ? ' on' : ''}`} onClick={() => setSel(p.id)}>
            <i className={`dot tone-${p.tone}`} /> {p.label.split(' (')[0]}
          </button>
        ))}
      </div>
    </WidgetFrame>
  );
}
