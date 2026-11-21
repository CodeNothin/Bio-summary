// =====================================================================
// Widget: survivorship curves (types I, II, III) and age pyramids
// (expanding / stable / declining) from Unit 6.2 slides 24–26.
// The curves are idealised shapes, as in the slide figure.
// =====================================================================
import { useState } from 'react';
import { Seg, WidgetFrame } from '../components/ui';

const curves = {
  I: { label: 'Type I', d: 'M30 20 L180 26 Q230 40 260 170', text: 'รอดสูงช่วงต้นและกลางชีวิต ส่วนใหญ่อยู่ถึงวัยชรา แล้วตายมากตอนแก่ — คน สัตว์ใหญ่' },
  II: { label: 'Type II', d: 'M30 20 L260 170', text: 'อัตราตายคงที่ทุกช่วงอายุ (เส้นตรงบนกราฟลอการิทึม) — นก สัตว์ฟันแทะ สัตว์เลื้อยคลาน' },
  III: { label: 'Type III', d: 'M30 20 Q40 150 80 156 L260 166', text: 'ตายมากตอนเล็ก มีไม่กี่ตัวที่ถึงวัยเจริญพันธุ์ แต่ตัวที่รอดมักอยู่ได้นาน — ปะการัง พืช' },
} as const;
const pyramids = {
  grow: { label: 'กำลังเพิ่ม', w: [100, 84, 68, 52, 36, 22], text: 'ฐานกว้าง: เด็ก (ก่อนวัยเจริญพันธุ์) มาก → ประชากรจะเพิ่มขึ้น' },
  stable: { label: 'คงที่', w: [70, 70, 68, 64, 56, 40], text: 'แต่ละช่วงอายุใกล้เคียงกัน → ประชากรค่อนข้างคงที่' },
  decline: { label: 'กำลังลด (สังคมสูงวัย)', w: [44, 52, 62, 70, 68, 56], text: 'ฐานแคบ ผู้สูงอายุมาก → ประชากรลดลง · ไทยเป็น aged society ปี 2022 (พ.ศ. 2565)' },
} as const;
/** Centre line of the age pyramid; bars reach CX ± 100, labels sit left of CX − 100. */
const CX = 185;
type CK = keyof typeof curves;
type PK = keyof typeof pyramids;

export function Demography() {
  const [view, setView] = useState<'curve' | 'pyr'>('curve');
  const [c, setC] = useState<CK>('I');
  const [p, setP] = useState<PK>('grow');
  return (
    <WidgetFrame
      title="Survivorship curve และพีระมิดอายุ"
      notice="survivorship curve บอกว่า**ตายช่วงไหนมาก** · พีระมิดอายุบอก**แนวโน้ม**ประชากร: ฐานกว้าง = จะเพิ่ม, ฐานแคบ = จะลด"
      onReset={() => { setView('curve'); setC('I'); setP('grow'); }}
    >
      <Seg value={view} options={[{ value: 'curve', label: 'Survivorship curve' }, { value: 'pyr', label: 'พีระมิดอายุ' }]} onChange={setView} />
      <div style={{ height: 6 }} />
      {view === 'curve' ? (
        <>
          <Seg value={c} options={(Object.keys(curves) as CK[]).map((k) => ({ value: k, label: curves[k].label }))} onChange={setC} />
          <svg viewBox="0 0 290 200" className="stage" style={{ marginTop: 8 }} role="img" aria-label="กราฟการรอดชีวิต">
            <line x1={30} y1={180} x2={280} y2={180} className="s-muted" />
            <line x1={30} y1={10} x2={30} y2={180} className="s-muted" />
            {(Object.keys(curves) as CK[]).map((k) => (
              <path key={k} d={curves[k].d} className={`f-none ${k === c ? 's-accent' : 's-muted'}`} strokeWidth={k === c ? 3.5 : 1.2} opacity={k === c ? 1 : 0.5} />
            ))}
            <text x={155} y={196} textAnchor="middle" className="small mut">อายุ →</text>
            <text x={4} y={16} className="small mut">รอด</text>
          </svg>
          <p className="step-text">{curves[c].text}</p>
        </>
      ) : (
        <>
          <Seg value={p} options={(Object.keys(pyramids) as PK[]).map((k) => ({ value: k, label: pyramids[k].label }))} onChange={setP} />
          <svg viewBox="0 0 290 170" className="stage" style={{ marginTop: 8 }} role="img" aria-label="พีระมิดอายุ">
            {pyramids[p].w.map((w, i) => {
              const y = 140 - i * 22;
              const tone = i < 2 ? 'tone-green' : i < 4 ? 'tone-blue' : 'tone-purple';
              return (
                <g key={i}>
                  <rect x={CX - w} y={y} width={w} height={18} className={`fill-tone ${tone}`} />
                  <rect x={CX} y={y} width={w} height={18} className={`fill-tone ${tone}`} opacity={0.7} />
                </g>
              );
            })}
            <text x={4} y={142} className="small">ก่อนเจริญพันธุ์</text>
            <text x={4} y={98} className="small">เจริญพันธุ์</text>
            <text x={4} y={54} className="small">หลังเจริญพันธุ์</text>
            <text x={CX - 40} y={168} className="small mut">ชาย</text>
            <text x={CX + 24} y={168} className="small mut">หญิง</text>
          </svg>
          <p className="step-text">{pyramids[p].text}</p>
        </>
      )}
    </WidgetFrame>
  );
}
