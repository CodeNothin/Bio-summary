// =====================================================================
// Widget: why shoots bend — auxin collects on one side and makes those
// cells elongate more (plant 5.5 slides 14–20).
//   - "แสงด้านเดียว": auxin moves to the SHADED side → shoot bends to light
//   - "วางกระถางตะแคง": auxin collects on the LOWER side → stem bends up
//   - "ให้ NPA": auxin transport blocked → equal on both sides → no bend
// Each mode shows the slide photo for it: slide 19A (auxin, stained
// blue, collects on the shaded side), 20 (pot on its side), 19B (NPA).
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { Seg, WidgetFrame } from '../components/ui';

type Mode = 'light' | 'gravity' | 'npa';

export function AuxinBending() {
  const [mode, setMode] = useState<Mode>('light');
  return (
    <WidgetFrame
      title="ออกซินกับการเบน"
      notice="ด้านที่มี**ออกซินมาก เซลล์ยืดมาก** จึงอยู่ด้านนอกของส่วนโค้ง · ลำต้นเบน**เข้าหาแสง**และ**ขึ้นจากแรงโน้มถ่วง** (negative gravitropism) — รากตอบสนองต่อแรงโน้มถ่วงแบบ positive"
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
      <div style={{ marginTop: 8 }}>
        {mode === 'gravity' ? (
          <SlideFig id="p5-20" />
        ) : (
          <SlideFig id="p5-19" spot={mode === 'light' ? [2, 0, 28, 100] : [29, 0, 47, 100]} />
        )}
      </div>
      <p className="small">
        {mode === 'light' && 'ภาพ A (สไลด์ 19): สีฟ้าคือออกซิน — ด้านไกลแสงมีออกซินมากกว่าด้านใกล้แสง → ด้านไกลแสงยืดมากกว่า → โค้งเข้าหาแสง (รับแสงด้วย phototropin)'}
        {mode === 'gravity' && 'ต้นมะเขือเทศที่วางตะแคง/คว่ำ (สไลด์ 20): ด้านล่างของลำต้นมีออกซินมากกว่าและยืดมากกว่า → ปลายยอดโค้งขึ้น (negative gravitropism)'}
        {mode === 'npa' && 'ภาพ B (สไลด์ 19): NPA ยับยั้งการลำเลียงออกซินออกจากเซลล์ → ออกซินเท่ากันทั้งสองด้าน → ไม่เบน'}
      </p>
    </WidgetFrame>
  );
}
