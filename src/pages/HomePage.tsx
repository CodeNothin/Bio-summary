// =====================================================================
// Home page: a short welcome, overall progress, and a card per chapter
// page grouped by unit (and by plant / animal track for Unit 5).
// Pages without a component in src/chapters.ts appear greyed out.
// To change the welcome text, edit the first <section> below.
// =====================================================================
import { pageComponents, units } from '../chapters';
import { pages } from '../data/pages';
import type { PageDef } from '../data/pages';
import { readyQuestions } from '../data/questions';
import { useStore } from '../lib/store';
import { FEEDBACK_URL } from './SupportPage';

function PageCard({ p }: { p: PageDef }) {
  const done = useStore().done;
  const ready = !!pageComponents[p.id];
  const ticked = p.sections.filter((s) => done[s.id]).length;
  const inner = (
    <div className={`card chapter-card${ready ? '' : ' soon'}`}>
      <span className="ico">{p.icon}</span>
      <b>
        {p.num} {p.title}
      </b>
      <span className="small">{ready ? p.blurb : 'เร็ว ๆ นี้'}</span>
      {ready && (
        <div className="bar" title={`${ticked}/${p.sections.length} หัวข้อ`}>
          <i style={{ width: `${(100 * ticked) / p.sections.length}%` }} />
        </div>
      )}
    </div>
  );
  return ready ? (
    <a className="home-link" href={`#/${p.id}`}>
      {inner}
    </a>
  ) : (
    inner
  );
}

export function HomePage() {
  const s = useStore();
  const allSections = pages.filter((p) => pageComponents[p.id]).flatMap((p) => p.sections);
  const ticked = allSections.filter((x) => s.done[x.id]).length;
  const answered = Object.values(s.topics).reduce((a, t) => a + t.total, 0);
  const right = Object.values(s.topics).reduce((a, t) => a + t.correct, 0);

  return (
    <>
      <section className="card">
        <h1>ชีววิทยาทั่วไป 2303107 🌿</h1>
        <p>
          สรุปเนื้อหาตามสไลด์ อ่านบนมือถือได้ มีภาพให้แตะดูทีละส่วน โจทย์ฝึกพร้อมคำอธิบายทุกตัวเลือก และแฟลชการ์ดทบทวนคำศัพท์
        </p>
        <div className="readouts">
          <div className="readout">
            <div className="k">หัวข้อที่เข้าใจแล้ว</div>
            <div className="v">
              {ticked} / {allSections.length}
            </div>
          </div>
          <div className="readout">
            <div className="k">ตอบโจทย์ไปแล้ว</div>
            <div className="v">
              {answered} ข้อ{answered > 0 ? ` · ถูก ${Math.round((100 * right) / answered)}%` : ''}
            </div>
          </div>
          <div className="readout">
            <div className="k">โจทย์ในคลัง</div>
            <div className="v">{readyQuestions.length} ข้อ</div>
          </div>
        </div>
        <div className="btn-row" style={{ marginTop: 10 }}>
          <a className="btn" href="#/learn">📖 อ่านต่อ</a>
          <a className="btn ghost" href="#/practice">✏️ ฝึกโจทย์</a>
          <a className="btn ghost" href="#/cards">🃏 แฟลชการ์ด</a>
        </div>
        <p className="small" style={{ marginBottom: 0 }}>
          เว็บนี้ฟรีทั้งหมด ทำโดยนิสิตที่เรียนวิชานี้ · เจอที่ผิด?{' '}
          <a href={FEEDBACK_URL} target="_blank" rel="noreferrer">
            ส่ง Feedback
          </a>{' '}
          · ถ้าช่วยได้ <a href="#/support">เลี้ยงขนมหน่อย❤️</a>
        </p>
      </section>

      {units.map((u) => {
        const ps = pages.filter((p) => p.unit === u.num);
        const plant = ps.filter((p) => p.track === 'plant');
        const animal = ps.filter((p) => p.track === 'animal');
        const other = ps.filter((p) => p.track === null);
        return (
          <section key={u.num}>
            <h2 className="track-head">{u.title}</h2>
            <p className="small" style={{ marginTop: -6 }}>{u.en}</p>
            {ps.length === 0 && <div className="card chapter-card soon"><span className="ico">⏳</span><b>เร็ว ๆ นี้</b></div>}
            {plant.length > 0 && <h3>🌱 ส่วนของพืช</h3>}
            <div className="home-links">{plant.map((p) => <PageCard key={p.id} p={p} />)}</div>
            {animal.length > 0 && <h3>🐾 ส่วนของสัตว์</h3>}
            <div className="home-links">{animal.map((p) => <PageCard key={p.id} p={p} />)}</div>
            <div className="home-links">{other.map((p) => <PageCard key={p.id} p={p} />)}</div>
          </section>
        );
      })}
      <p className="small" style={{ marginTop: 20 }}>
        ความคืบหน้าเก็บไว้ในเครื่องนี้เท่านั้น (localStorage) · เนื้อหาตามสไลด์ประกอบการสอนภาคต้น 2569
      </p>
    </>
  );
}
