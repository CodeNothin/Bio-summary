// =====================================================================
// Widget: the four fundamental questions in biology (Unit 7 slides 3 & 33).
// Tap a question to see its answer; the toggle switches between the
// general answer (slide 3) and the "how museums help" answer (slide 33).
// The "เชื่อมกับบท…" line is the site's own pointer to earlier pages,
// not slide text. To edit, change the `qs` table.
// =====================================================================
import { useState } from 'react';
import { Seg, T, WidgetFrame } from '../components/ui';

const qs = [
  {
    q: 'สิ่งมีชีวิตอยู่รอดและรักษาความเป็นระเบียบได้อย่างไร',
    en: 'How do living organisms survive and maintain their organization?',
    bio: 'ชีวิตต้องใช้**พลังงาน**เพื่อรักษาความเป็นระเบียบ และต้านแนวโน้มตามธรรมชาติที่จะไปสู่ความไร้ระเบียบ (disorder)',
    museum: 'ตัวอย่างพิพิธภัณฑ์ช่วยศึกษา**โครงสร้างและการปรับตัว**ที่ทำให้สิ่งมีชีวิตอยู่รอดในสิ่งแวดล้อมต่าง ๆ',
    link: 'บทที่ 5 (การดำรงสภาวะปกติ)',
  },
  {
    q: 'ชีวิตดำเนินต่อไปได้อย่างไรเมื่อแต่ละตัวตายไป',
    en: 'How does life continue when individuals die?',
    bio: 'แต่ละตัวมีชีวิตชั่วคราว แต่ชีวิตดำเนินต่อด้วย**การสืบพันธุ์ การถ่ายทอดลักษณะ และวิวัฒนาการ**',
    museum: 'ตัวอย่างในอดีตและ **ancient DNA** ช่วยสร้างภาพสิ่งมีชีวิตที่สูญพันธุ์ เข้าใจความหลากหลายทางพันธุกรรม และศึกษากระบวนการที่นำไปสู่การสูญพันธุ์',
    link: 'บทที่ 6.5 (การสูญพันธุ์)',
  },
  {
    q: 'ประชากรตอบสนองต่อสิ่งแวดล้อมที่เปลี่ยนไปอย่างไร',
    en: 'How do populations respond to a changing environment?',
    bio: '**วิวัฒนาการ**ทำให้ประชากรเปลี่ยนไปข้ามรุ่น และตอบสนองต่อสิ่งแวดล้อม',
    museum: '**Museomics และ digitization** ทำให้เทียบประชากรในอดีตกับปัจจุบัน เห็นการเปลี่ยนแปลงของความหลากหลายทางพันธุกรรมและการกระจายทางภูมิศาสตร์',
    link: 'บทที่ 6.2 (ประชากร)',
  },
  {
    q: 'ชีววิทยาช่วยแก้ปัญหาระดับโลกได้อย่างไร',
    en: 'How can biological science help solve global challenges?',
    bio: 'ชีววิทยาให้**หลักฐานและความรู้**เพื่อรับมือปัญหาระดับโลกและสร้างอนาคตที่ยั่งยืน',
    museum: 'พิพิธภัณฑ์**เก็บรักษาหลักฐาน**ทางชีวภาพ และเปิดให้เข้าถึงผ่านงานวิจัย museomics digitization และ**ฐานข้อมูลความหลากหลายทางชีวภาพระดับโลก**',
    link: 'บทที่ 6.5 (บริการระบบนิเวศและปัญหาสิ่งแวดล้อม)',
  },
];

export function FundamentalQuestions() {
  const [i, setI] = useState(0);
  const [view, setView] = useState<'bio' | 'museum'>('bio');
  const q = qs[i];
  return (
    <WidgetFrame
      title="คำถามพื้นฐาน 4 ข้อของชีววิทยา"
      notice="สไลด์ใช้คำถามชุดเดียวกัน**สองครั้ง**: ตอนต้น (คำตอบทั่วไป) และตอนท้าย (พิพิธภัณฑ์ช่วยตอบอย่างไร) — สลับดูทั้งสองแบบ แล้วลองจับคู่ว่าแต่ละข้อใช้คำสำคัญอะไร"
      onReset={() => { setI(0); setView('bio'); }}
    >
      <Seg value={view} options={[{ value: 'bio', label: 'คำตอบทั่วไป (สไลด์ 3)' }, { value: 'museum', label: 'มุมพิพิธภัณฑ์ (สไลด์ 33)' }]} onChange={setView} />
      <div className="seg" style={{ marginTop: 8 }}>
        {qs.map((_, k) => (
          <button key={k} className={k === i ? 'on' : ''} aria-pressed={k === i} onClick={() => setI(k)}>
            ข้อ {k + 1}
          </button>
        ))}
      </div>
      <div className="step-text">
        <b>{i + 1}. {q.q}</b>
        <br />
        <span className="small mut">{q.en}</span>
        <br />
        {view === 'bio' ? '💡 ' : '🏛️ '}
        <T>{view === 'bio' ? q.bio : q.museum}</T>
        <br />
        <span className="small mut">เชื่อมกับ{q.link} (เว็บนี้แนะนำ ไม่ได้อยู่ในสไลด์)</span>
      </div>
    </WidgetFrame>
  );
}
