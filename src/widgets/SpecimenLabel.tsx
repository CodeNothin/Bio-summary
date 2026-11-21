// =====================================================================
// Widget: read a specimen label (Unit 7 slides 18–19) on the slide's own
// photo of the label:
//   "Peninsular Siam: Nakon Sri Tamarat. Khao Luang. 5800 ft. 30.III.1922.
//    H.M.Pendlebury"
// Each part of the label has a tap area (`box`, percent of the picture). Explore mode: tap a part to see what kind
// of data it is and why it matters. Quiz mode: the widget names a field;
// tap the matching part. To change a part, edit `parts`.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Seg, T, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

const parts: { id: string; text: string; name: string; tone: string; box: Box; use: string }[] = [
  { id: 'loc', text: 'Peninsular Siam: Nakon Sri Tamarat. Khao Luang.', name: 'สถานที่ (locality)', tone: 'tone-red', box: [8, 30, 92, 70], use: 'บอก**ที่ไหน** — ภายหลังแปลงเป็นพิกัด (georeference: ละติจูด ลองจิจูด) เพื่อวาดแผนที่การกระจาย' },
  { id: 'ele', text: '5800 ft.', name: 'ความสูง (elevation)', tone: 'tone-blue', box: [3, 70, 33, 87], use: 'บอก**สูงเท่าไร** — ใช้เทียบว่าสิ่งมีชีวิตย้ายขึ้นที่สูงหรือไม่เมื่อโลกร้อนขึ้น' },
  { id: 'date', text: '30.III.1922', name: 'วันที่เก็บ (date)', tone: 'tone-green', box: [33, 68, 92, 86], use: 'บอก**เมื่อไร** (III = มีนาคม) — ทำให้ศึกษาเป็น**อนุกรมเวลา (time series)**ได้' },
  { id: 'col', text: 'H.M.Pendlebury', name: 'ผู้เก็บ (collector)', tone: 'tone-purple', box: [16, 86, 92, 100], use: 'บอก**ใครเก็บ** — ใช้ตามรอยการสำรวจและตรวจสอบข้อมูล' },
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
      <How>สำรวจ: แตะข้อความบนป้ายเพื่อดูว่าเป็นข้อมูลอะไร · ทดสอบ: แตะส่วนของป้ายที่โจทย์ถาม</How>
      <Seg value={mode} options={[{ value: 'explore', label: 'สำรวจ' }, { value: 'quiz', label: 'ทดสอบ' }]} onChange={(v) => { setMode(v); setSel(null); setMsg(null); }} />
      <div style={{ marginTop: 8 }}>
        <SlideFig id="c7-18">
          {parts.map((p) => {
            const b = p.box;
            const on = mode === 'explore' && sel === p.id;
            return (
              <button
                key={p.id}
                type="button"
                aria-label={mode === 'explore' ? p.name : p.text}
                onClick={() => tap(p.id)}
                className={`slide-hit ${p.tone}${on ? ' on' : ''}${mode === 'quiz' ? ' quiz' : ''}`}
                style={{ left: `${b[0]}%`, top: `${b[1]}%`, width: `${b[2] - b[0]}%`, height: `${b[3] - b[1]}%` }}
              />
            );
          })}
        </SlideFig>
      </div>
      {mode === 'explore' ? (
        <div className="step-text">
          {cur ? (<><b>{cur.name}</b>: {cur.text}<br /><T>{cur.use}</T></>) : 'แตะข้อความบนป้ายเพื่อดูว่าเป็นข้อมูลประเภทใด'}
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
