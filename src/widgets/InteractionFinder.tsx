// =====================================================================
// Widget: pick the effect on species A and on species B (+ / 0 / −) and
// see which interaction that is (Unit 6.3 slides 4–28). +/+ has three
// names on the slides (mutualism, protocooperation, facilitation), so the
// widget lists how to tell them apart. The slide-4 overview cartoon is
// shown with the matching interaction lit up (`box`, percent of the picture).
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { How, Seg, T, WidgetFrame } from '../components/ui';
import type { Box } from '../data/figures';

type E = '+' | '0' | '−';
const key = (a: E, b: E) => [a, b].sort().join('');

const table: Record<string, { name: string; text: string; box: Box }> = {
  [key('−', '−')]: { box: [0, 4, 27, 56], name: 'ภาวะแข่งขัน (competition)', text: 'แย่งทรัพยากรที่จำกัด (อาหาร พื้นที่ คู่) — fitness ลดลงทั้งคู่ · competitive exclusion: อยู่ร่วมกันถาวรไม่ได้' },
  [key('+', '−')]: { box: [28, 4, 60, 50], name: 'ภาวะล่าเหยื่อ / กินพืช / ปรสิต (+/−)', text: '**predation**: ผู้ล่าฆ่าและกินเหยื่อ · **herbivory**: สัตว์กินพืช · **parasitism** (symbiosis): ปรสิตได้ประโยชน์ host เสีย (endo-/ectoparasite)' },
  [key('+', '+')]: { box: [25, 54, 77, 98], name: 'ภาวะที่ได้ประโยชน์ทั้งคู่ (+/+)', text: '**mutualism** (ภาวะพึ่งพา): symbiosis ใกล้ชิดระยะยาว เช่น ไลเคน ปมรากถั่ว (obligate หรือ facultative) · **protocooperation** (ภาวะได้ประโยชน์ร่วมกัน): ไม่จำเป็นต่อการอยู่รอด · **facilitation** (ภาวะเอื้อประโยชน์): ไม่ได้สัมผัสกันโดยตรง (+/+ หรือ 0/+)' },
  [key('+', '0')]: { box: [54, 54, 77, 98], name: 'ภาวะอิงอาศัย (commensalism) / facilitation', text: '**commensalism**: ฝ่ายหนึ่งได้ อีกฝ่ายไม่ได้ไม่เสีย · facilitation ก็เขียนเป็น 0/+ ได้' },
  [key('0', '−')]: { box: [61, 4, 100, 92], name: 'ภาวะกระทบกระเทือน (amensalism) / antibiosis', text: 'ฝ่ายหนึ่งถูกยับยั้ง อีกฝ่ายไม่ได้รับผล · **antibiosis** (ภาวะหลั่งสารยับยั้งการเจริญ) เช่น รา Penicillium ยับยั้งแบคทีเรีย' },
  [key('0', '0')]: { box: [0, 54, 26, 98], name: 'ภาวะเป็นกลาง (neutralism)', text: 'ไม่มีผลต่อกัน' },
};

export function InteractionFinder() {
  const [a, setA] = useState<E>('+');
  const [b, setB] = useState<E>('−');
  const r = table[key(a, b)];
  const opts = [{ value: '+' as E, label: '+ ได้ประโยชน์' }, { value: '0' as E, label: '0 ไม่มีผล' }, { value: '−' as E, label: '− เสียประโยชน์' }];
  return (
    <WidgetFrame
      title="ความสัมพันธ์นี้ชื่ออะไร?"
      notice="เลือกผลต่อชนิด A และ B — ลำดับไม่สำคัญ (+/− เหมือน −/+) · คู่ +/+ มี 3 ชื่อ แยกด้วย**ความจำเป็น**และ**การสัมผัสโดยตรง**"
      onReset={() => { setA('+'); setB('−'); }}
    >
      <How>เลือกผลต่อชนิด A และชนิด B (+ / 0 / −) — ภาพจะเน้นความสัมพันธ์ที่ตรงกัน</How>
      <p className="small" style={{ margin: '0 0 2px' }}>ผลต่อชนิด A</p>
      <Seg value={a} options={opts} onChange={setA} />
      <p className="small" style={{ margin: '8px 0 2px' }}>ผลต่อชนิด B</p>
      <Seg value={b} options={opts} onChange={setB} />
      <div style={{ marginTop: 8 }}>
        <SlideFig id="e3-4" spot={r.box} />
      </div>
      <div className="step-text">
        <b>{a} / {b} → {r.name}</b>
        <br />
        <T>{r.text}</T>
      </div>
    </WidgetFrame>
  );
}
