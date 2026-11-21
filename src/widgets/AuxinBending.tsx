// =====================================================================
// Widget: why shoots bend — auxin collects on one side and makes those
// cells elongate more (plant 5.5 slides 14–20).
//   - "แสงด้านเดียว": auxin moves to the SHADED side → shoot bends to light
//   - "วางกระถางตะแคง": auxin collects on the LOWER side → stem bends up
//   - "ให้ NPA": auxin transport blocked → equal on both sides → no bend
// Dots = auxin. This is a picture of the slide's explanation, not a model.
// =====================================================================
import { useState } from 'react';
import { Arrow, Seg, WidgetFrame } from '../components/ui';

type Mode = 'light' | 'gravity' | 'npa';

export function AuxinBending() {
  const [mode, setMode] = useState<Mode>('light');
  // which side gets more auxin: 'left' | 'right' | 'equal'
  const side = mode === 'npa' ? 'equal' : 'right';
  // for 'gravity' the pot is on its side: we rotate the whole drawing
  const bend = side === 'equal' ? 0 : -1; // bend away from the auxin-rich side
  const curve = bend === 0 ? 'M120 190 L120 60' : 'M120 190 Q120 110 82 66';
  const dots = (x: number, n: number) => Array.from({ length: n }, (_, k) => <circle key={k} cx={x} cy={170 - k * 20} r={4} className="fill-tone tone-orange" />);
  return (
    <WidgetFrame
      title="ออกซินกับการเบน"
      notice="จุดสีส้ม = ออกซิน · ด้านที่มี**ออกซินมาก เซลล์ยืดมาก** จึงอยู่ด้านนอกของส่วนโค้ง · ลำต้นเบน**เข้าหาแสง**และ**ขึ้นจากแรงโน้มถ่วง** (negative gravitropism) — รากตอบสนองต่อแรงโน้มถ่วงแบบ positive"
      onReset={() => setMode('light')}
    >
      <Seg
        value={mode}
        options={[
          { value: 'light', label: 'แสงด้านเดียว' },
          { value: 'gravity', label: 'วางกระถางตะแคง' },
          { value: 'npa', label: 'ให้ NPA (ยับยั้งการลำเลียง)' },
        ]}
        onChange={setMode}
      />
      <svg viewBox="0 0 240 220" className="stage" style={{ marginTop: 8 }} role="img" aria-label="ต้นกล้าเบน">
        <g transform={mode === 'gravity' ? 'rotate(90 120 190) translate(-40 0)' : undefined}>
          <rect x={92} y={190} width={56} height={26} rx={4} className="fill-tone tone-brown" />
          <path d={curve} className="f-none stroke-tone tone-green" strokeWidth={14} strokeLinecap="round" />
          {side === 'right' && <g>{dots(132, 5)}</g>}
          {side === 'right' && <g>{dots(108, 2)}</g>}
          {side === 'equal' && <g>{dots(132, 3)}{dots(108, 3)}</g>}
        </g>
        {mode === 'light' && (
          <>
            <text x={8} y={44} className="small">☀️ แสง</text>
            <Arrow x1={30} y1={60} x2={70} y2={80} cls="accent" w={3} />
          </>
        )}
        {mode === 'gravity' && <text x={8} y={20} className="small">↓ แรงโน้มถ่วง (ด้านล่างของลำต้นมีออกซินมาก)</text>}
        {mode === 'npa' && <text x={8} y={20} className="small">ออกซินเท่ากันทั้งสองด้าน → ไม่โค้ง</text>}
      </svg>
      <p className="small">
        {mode === 'light' && 'ด้านใกล้แสงมีออกซินน้อยกว่าด้านไกลแสง → ด้านไกลแสงยืดมากกว่า → โค้งเข้าหาแสง (รับแสงด้วย phototropin)'}
        {mode === 'gravity' && 'ลำต้นที่วางตะแคง: ด้านล่างมีออกซินมากกว่าและยืดมากกว่า → ปลายยอดโค้งขึ้น'}
        {mode === 'npa' && 'NPA ยับยั้งการลำเลียงออกซินออกจากเซลล์ → ไม่เกิดความต่างของออกซิน → ไม่เบน (สไลด์ 19B)'}
      </p>
    </WidgetFrame>
  );
}
