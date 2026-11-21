// =====================================================================
// Widget: read a specimen label (Unit 7 slide 19). The label text is the
// slide's example, retyped (not the photo):
//   "Peninsular Siam: Nakon Sri Tamarat. Khao Luang. 5800 ft. 30.III.1922.
//    H.M.Pendlebury"
// Explore mode: tap a line to see what kind of data it is and why it
// matters. Quiz mode: the widget names a field; tap the matching part.
// To change the label, edit `parts`.
// =====================================================================
import { useState } from 'react';
import { Seg, T, WidgetFrame } from '../components/ui';

const parts = [
  { id: 'loc', text: 'Peninsular Siam: Nakon Sri Tamarat. Khao Luang.', name: 'สถานที่ (locality)', tone: 'tone-red', use: 'บอก**ที่ไหน** — ภายหลังแปลงเป็นพิกัด (georeference: ละติจูด ลองจิจูด) เพื่อวาดแผนที่การกระจาย' },
  { id: 'ele', text: '5800 ft.', name: 'ความสูง (elevation)', tone: 'tone-blue', use: 'บอก**สูงเท่าไร** — ใช้เทียบว่าสิ่งมีชีวิตย้ายขึ้นที่สูงหรือไม่เมื่อโลกร้อนขึ้น' },
  { id: 'date', text: '30.III.1922', name: 'วันที่เก็บ (date)', tone: 'tone-green', use: 'บอก**เมื่อไร** (III = มีนาคม) — ทำให้ศึกษาเป็น**อนุกรมเวลา (time series)**ได้' },
  { id: 'col', text: 'H.M.Pendlebury', name: 'ผู้เก็บ (collector)', tone: 'tone-purple', use: 'บอก**ใครเก็บ** — ใช้ตามรอยการสำรวจและตรวจสอบข้อมูล' },
];

export function SpecimenLabel() {
  const [mode, setMode] = useState<'explore' | 'quiz'>('explore');
  const [sel, setSel] = useState<string | null>(null);
  const [ask, setAsk] = useState(0);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [score, setScore] = useState(0);
  const target = parts[ask % parts.length];

  const tap = (id: string) => {
    if (mode === 'explore') { setSel(id); return; }
    if (id === target.id) {
      setMsg({ ok: true, text: `ถูก! "${target.text}" คือ ${target.name}` });
      setScore(score + 1);
      setAsk(ask + 1);
    } else {
      const p = parts.find((x) => x.id === id)!;
      setMsg({ ok: false, text: `ยังไม่ใช่ — "${p.text}" คือ ${p.name}` });
    }
  };
  const cur = parts.find((x) => x.id === sel);
  const reset = () => { setMode('explore'); setSel(null); setAsk(0); setMsg(null); setScore(0); };
  return (
    <WidgetFrame
      title="อ่านป้ายตัวอย่างพิพิธภัณฑ์"
      notice="ป้ายเล็ก ๆ หนึ่งแผ่นบอก **ที่ไหน · สูงเท่าไร · เมื่อไร · ใครเก็บ** — นี่คือ metadata ที่ทำให้ตัวอย่างอายุร้อยปีใช้เทียบกับปัจจุบันได้"
      onReset={reset}
    >
      <Seg value={mode} options={[{ value: 'explore', label: 'สำรวจ' }, { value: 'quiz', label: 'ทดสอบ' }]} onChange={(v) => { setMode(v); setSel(null); setMsg(null); }} />
      <div className="specimen-label" style={{ marginTop: 10, padding: '10px 12px', borderRadius: 8, border: '1px solid var(--line)', background: 'var(--card)', fontFamily: 'Georgia, serif', lineHeight: 1.9 }}>
        {parts.map((p) => (
          <button
            key={p.id}
            onClick={() => tap(p.id)}
            className={p.tone}
            style={{
              display: 'inline', font: 'inherit', color: 'inherit', background: mode === 'explore' && sel === p.id ? 'color-mix(in srgb, var(--tone) 25%, transparent)' : 'transparent',
              border: 'none', borderBottom: mode === 'explore' ? '3px solid var(--tone)' : '2px dashed var(--line)', padding: '0 2px', margin: '0 4px 0 0', cursor: 'pointer',
            }}
          >
            {p.text}
          </button>
        ))}
      </div>
      {mode === 'explore' ? (
        <div className="step-text">
          {cur ? (<><b>{cur.name}</b><br /><T>{cur.use}</T></>) : 'แตะข้อความบนป้ายเพื่อดูว่าเป็นข้อมูลประเภทใด'}
        </div>
      ) : (
        <div className="step-text">
          <b>แตะส่วนที่เป็น: {target.name}</b>
          {msg && (<><br /><span style={{ color: msg.ok ? 'var(--good)' : 'var(--bad)' }}>{msg.text}</span></>)}
          <br /><span className="small mut">ตอบถูก {score} ครั้ง</span>
        </div>
      )}
    </WidgetFrame>
  );
}
