// =====================================================================
// Widget: survivorship curves (types I, II, III) and age pyramids
// (expanding / stable / declining) from Unit 6.2 slides 24–26.
// Both use the slide figures: the survivorship graph with a tap point on
// each curve label, and the three country pyramids (Afghanistan /
// United States / Italy) with the chosen one lit up. Positions are
// percent of the picture.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { Seg, WidgetFrame } from '../components/ui';

const curves = {
  I: { label: 'Type I', at: [48.5, 8.5] as [number, number], text: 'รอดสูงช่วงต้นและกลางชีวิต ส่วนใหญ่อยู่ถึงวัยชรา แล้วตายมากตอนแก่ — คน สัตว์ใหญ่' },
  II: { label: 'Type II', at: [40.5, 32.5] as [number, number], text: 'อัตราตายคงที่ทุกช่วงอายุ (เส้นตรงบนกราฟลอการิทึม) — นก สัตว์ฟันแทะ สัตว์เลื้อยคลาน' },
  III: { label: 'Type III', at: [23, 57.5] as [number, number], text: 'ตายมากตอนเล็ก มีไม่กี่ตัวที่ถึงวัยเจริญพันธุ์ แต่ตัวที่รอดมักอยู่ได้นาน — ปะการัง พืช' },
} as const;
const pyramids = {
  grow: { label: 'กำลังเพิ่ม', box: [0, 2, 35, 90] as [number, number, number, number], text: 'อัฟกานิสถาน — ฐานกว้าง: เด็ก (ก่อนวัยเจริญพันธุ์) มาก → ประชากรจะเพิ่มขึ้น' },
  stable: { label: 'คงที่', box: [34, 2, 58, 90] as [number, number, number, number], text: 'สหรัฐอเมริกา — แต่ละช่วงอายุใกล้เคียงกัน → ประชากรค่อนข้างคงที่' },
  decline: { label: 'กำลังลด (สังคมสูงวัย)', box: [56, 2, 82, 90] as [number, number, number, number], text: 'อิตาลี — ฐานแคบ ผู้สูงอายุมาก → ประชากรลดลง · ไทยเป็น aged society ปี 2022 (พ.ศ. 2565)' },
} as const;
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
          <div style={{ marginTop: 8 }}>
            <SlideFig
              id="e2-25"
              selected={c}
              onPin={(id) => setC(id as CK)}
              pins={(Object.keys(curves) as CK[]).map((k) => ({ id: k, at: curves[k].at, n: k, label: curves[k].label }))}
            />
          </div>
          <p className="step-text">{curves[c].text}</p>
        </>
      ) : (
        <>
          <Seg value={p} options={(Object.keys(pyramids) as PK[]).map((k) => ({ value: k, label: pyramids[k].label }))} onChange={setP} />
          <div style={{ marginTop: 8 }}>
            <SlideFig id="e2-26" spot={pyramids[p].box} />
          </div>
          <p className="step-text">{pyramids[p].text}</p>
        </>
      )}
    </WidgetFrame>
  );
}
