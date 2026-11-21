// =====================================================================
// Widget: flash red (R) or far-red (FR) light at a lettuce seed and watch
// phytochrome switch between Pr (inactive) and Pfr (active).
// Plant 5.5 slides 9–13: red → Pfr, far-red → Pr, and only the LAST
// flash decides whether the seed germinates. The picture is the slide-13
// photo of lettuce seeds; the dish that matches the last two flashes is
// highlighted (dish positions in percent of the picture).
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Readout, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

/** the five dishes on the slide photo */
const dishes: Record<string, Box> = {
  dark: [32, 42, 69, 86],
  R: [0, 26, 32, 63],
  FR: [67, 26, 100, 62],
  'R FR': [0, 66, 32, 100],
  'FR R': [67, 66, 100, 100],
};

export function Phytochrome() {
  const [seq, setSeq] = useState<('R' | 'FR')[]>([]);
  const last = seq[seq.length - 1];
  const pfr = last === 'R';
  const add = (x: 'R' | 'FR') => setSeq([...seq.slice(-5), x]);
  const key = seq.length === 0 ? 'dark' : seq.slice(-2).join(' ');
  const dish = dishes[key] ?? dishes[last];
  return (
    <WidgetFrame
      title="Phytochrome: Pr ⇄ Pfr"
      notice="กดแสงสลับกันหลายครั้ง — **ดูแค่แสงสุดท้าย**: red → Pfr (active) → เมล็ดผักกาดงอก · far-red → Pr (inactive) → ไม่งอก"
      onReset={() => setSeq([])}
    >
      <How>กด 💡 Red หรือ 💡 Far-red ด้านล่าง (กดสลับได้หลายครั้ง) — ภาพจะเน้นจานเมล็ดที่ตรงกับลำดับแสงนั้น</How>
      <SlideFig id="p5-13" spot={dish} />
      <div className="readouts">
        <Readout k="phytochrome ตอนนี้" v={seq.length === 0 ? 'Pr (มืด)' : pfr ? 'Pfr (active)' : 'Pr (inactive)'} hl={pfr} />
        <Readout k="เมล็ดผักกาด" v={seq.length === 0 ? 'ไม่งอก' : pfr ? 'งอก ✓' : 'ไม่งอก'} />
      </div>
      <div className="seg" style={{ marginTop: 8 }}>
        <button onClick={() => add('R')} style={{ background: 'var(--t-red)', color: '#fff' }}>💡 Red</button>
        <button onClick={() => add('FR')} style={{ background: '#5b1f1f', color: '#fff' }}>💡 Far-red</button>
      </div>
      <p className="small" style={{ marginTop: 6 }}>ลำดับแสง: {seq.length ? seq.join(' → ') : '(ยังไม่ให้แสง)'}</p>
      <p className="small">
        ใต้ร่มไม้มี far-red มาก → Pr มาก → พืชรู้ว่าแสงน้อย → ยืดลำต้นหนีร่ม (shade avoidance) · ตอนเย็น red ลด → Pfr:Ptotal ลด → ใบจามจุรีหุบ (sleep movement) · ไถพรวนหน้าดิน → เมล็ดวัชพืชได้ red → งอก
      </p>
    </WidgetFrame>
  );
}
