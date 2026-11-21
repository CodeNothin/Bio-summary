// =====================================================================
// The practice tab.
//
//   #/practice            → menu: pick a chapter page, the weakest-topic
//                           drill, or "ข้อที่เคยตอบผิด"; plus accuracy per topic
//   #/practice/<pageId>   → a set of questions from that page
//   #/practice/all        → mixed questions from every page
//   #/practice/weak       → questions from the 3 weakest topics
//   #/practice/missed     → questions whose last attempt was wrong
//
// A set has SET_SIZE questions. Questions answered wrongly before, or
// never seen, are more likely to be picked. Hints open one at a time.
// Only the FIRST attempt at a question in a set counts for accuracy.
// Questions with status 'needs-key' are never shown.
// =====================================================================
import { useMemo, useState } from 'react';
import { T } from '../components/ui';
import { pageById, pages, pageTag, sectionById } from '../data/pages';
import { readyQuestions } from '../data/questions';
import type { Question } from '../data/types';
import { recordAnswer, resetStats, useStore } from '../lib/store';
import type { State } from '../lib/store';
import { pick } from './engine';
import { QuestionView, typeName } from './QuestionView';

/** Questions per set. */
const SET_SIZE = 10;
/** A topic needs this many answers before it can count as "weak". */
const MIN_FOR_WEAK = 2;

/** Accuracy of a topic (0–1), or null if never practised. */
const acc = (s: State, topic: string) => {
  const t = s.topics[topic];
  return t && t.total > 0 ? t.correct / t.total : null;
};

/** The topics with the lowest accuracy (needs at least MIN_FOR_WEAK answers). */
function weakestTopics(s: State, n = 3): string[] {
  return Object.keys(s.topics)
    .filter((t) => s.topics[t].total >= MIN_FOR_WEAK && sectionById(t))
    .sort((a, b) => acc(s, a)! - acc(s, b)!)
    .slice(0, n);
}

/** Which questions a filter means. */
function poolFor(filter: string | undefined, s: State): { title: string; qs: Question[] } {
  if (filter === 'weak') {
    const weak = weakestTopics(s);
    return { title: 'ฝึกหัวข้อที่อ่อนที่สุด', qs: readyQuestions.filter((q) => weak.includes(q.topic)) };
  }
  if (filter === 'missed') return { title: 'ข้อที่เคยตอบผิด', qs: readyQuestions.filter((q) => s.last[q.id] === false) };
  const p = pageById(filter);
  if (p) {
    const ids = p.sections.map((x) => x.id);
    return { title: `${p.num} ${p.title}`, qs: readyQuestions.filter((q) => ids.includes(q.topic)) };
  }
  return { title: 'รวมทุกบท', qs: readyQuestions };
}

/** Never-seen and previously-missed questions get picked more often. */
const weightFor = (s: State) => (q: Question) => (s.last[q.id] === undefined ? 3 : s.last[q.id] ? 1 : 4);

function Hints({ q }: { q: Question }) {
  const [n, setN] = useState(0);
  return (
    <>
      {n > 0 && (
        <ol className="hint-list feedback hint">
          {q.hints.slice(0, n).map((h, i) => (
            <li key={i}><T>{h}</T></li>
          ))}
        </ol>
      )}
      {n < q.hints.length && (
        <button className="btn ghost" onClick={() => setN(n + 1)} style={{ marginBottom: 10 }}>
          💡 ขอคำใบ้{q.hints.length > 1 ? ` (${n + 1}/${q.hints.length})` : ''}
        </button>
      )}
    </>
  );
}

function Session({ filter, onAgain }: { filter?: string; onAgain: () => void }) {
  const s = useStore();
  // pick the set once when the session starts (not on every re-render)
  const [{ title, set }] = useState(() => {
    const { title, qs } = poolFor(filter, s);
    return { title, set: pick(qs, Math.min(SET_SIZE, qs.length), Math.random, weightFor(s)) };
  });
  const [i, setI] = useState(0);
  const [results, setResults] = useState<(boolean | null)[]>(() => set.map(() => null));
  const q = set[i];

  if (set.length === 0)
    return (
      <div className="card">
        <h2>{title}</h2>
        <p>{filter === 'weak' ? `ยังไม่มีข้อมูลพอ — ฝึกแต่ละหัวข้ออย่างน้อย ${MIN_FOR_WEAK} ข้อก่อน` : 'ยังไม่มีข้อในหมวดนี้'}</p>
        <a className="btn" href="#/practice">กลับเมนู</a>
      </div>
    );

  if (i >= set.length) {
    const right = results.filter(Boolean).length;
    return (
      <div className="card">
        <h2>จบชุดแล้ว 🎉</h2>
        <p className="big-num">{right} / {set.length}</p>
        <ul>
          {set.map((x, k) => (
            <li key={x.id}>
              {results[k] ? '✓' : '✗'} {sectionById(x.topic)?.label} <span className="small">({typeName[x.type]})</span>
            </li>
          ))}
        </ul>
        <div className="btn-row">
          <button className="btn" onClick={onAgain}>ทำอีกชุด</button>
          <a className="btn ghost" href="#/practice">กลับเมนู</a>
        </div>
      </div>
    );
  }

  const answered = results[i] !== null;
  const sec = sectionById(q.topic)!;
  return (
    <div className="card" key={q.id}>
      <p className="eyebrow">
        {title} · ข้อ {i + 1}/{set.length}
      </p>
      <div className="bar" style={{ marginBottom: 8 }}>
        <i style={{ width: `${(100 * i) / set.length}%` }} />
      </div>
      <p style={{ margin: '0 0 6px' }}>
        <span className="tag-pill">{typeName[q.type]}</span> <span className="small">{sec.label} · {q.source}</span>
      </p>
      <QuestionView
        key={q.id}
        q={q}
        onAnswered={(ok) => {
          recordAnswer(q.id, q.topic, ok, true);
          setResults(results.map((r, k) => (k === i ? ok : r)));
        }}
      />
      {!answered && <Hints q={q} />}
      {answered && (
        <>
          <div className="feedback hint">
            <b>อธิบาย:</b> <T>{q.explanation}</T>{' '}
            <a href={`#/${sec.page}/${sec.id}`}>อ่านหัวข้อนี้ →</a>
          </div>
          <button className="btn" onClick={() => setI(i + 1)}>
            {i + 1 < set.length ? 'ข้อต่อไป ▶' : 'ดูผล'}
          </button>
        </>
      )}
    </div>
  );
}

function Menu() {
  const s = useStore();
  const weak = weakestTopics(s);
  const missed = readyQuestions.filter((q) => s.last[q.id] === false).length;
  const tracks = [
    { label: '🌱 บทที่ 5 · พืช', ps: pages.filter((p) => p.track === 'plant') },
    { label: '🐾 บทที่ 5 · สัตว์', ps: pages.filter((p) => p.track === 'animal') },
    { label: '🌍 บทที่ 6 · นิเวศวิทยา', ps: pages.filter((p) => p.unit === 6) },
    { label: '🏛️ บทที่ 7 · บทสรุป', ps: pages.filter((p) => p.unit === 7) },
  ];
  return (
    <>
      <section className="card">
        <h1>ฝึกโจทย์</h1>
        <p className="small">
          ชุดละ {SET_SIZE} ข้อ คละรูปแบบ (เลือกตอบ ถูก/ผิด เรียงลำดับ จับคู่ จัดกลุ่ม แตะภาพ คำนวณ) — ตัวเลือกสลับทุกครั้ง มีคำใบ้ทีละขั้น และอธิบายทุกตัวเลือกหลังตอบ
        </p>
        <div className="btn-row">
          <a className="btn" href="#/practice/all">🎲 รวมทุกบท</a>
          <a className={`btn ghost`} href="#/practice/weak">🎯 หัวข้อที่อ่อนที่สุด</a>
          <a className="btn ghost" href="#/practice/missed">🔁 ข้อที่เคยผิด ({missed})</a>
        </div>
        {weak.length > 0 && (
          <p className="small" style={{ marginTop: 8 }}>
            หัวข้อที่อ่อนตอนนี้: {weak.map((t) => `${pageTag(pageById(sectionById(t)!.page)!)} ${sectionById(t)!.label}`).join(' · ')}
          </p>
        )}
      </section>
      {tracks.map((t) => (
        <section className="card" key={t.label}>
          <h2>{t.label}</h2>
          <div className="home-links">
            {t.ps.map((p) => {
              const n = readyQuestions.filter((q) => p.sections.some((x) => x.id === q.topic)).length;
              return (
                <a key={p.id} className="btn ghost" style={{ justifyContent: 'space-between' }} href={`#/practice/${p.id}`}>
                  <span>{p.icon} {p.num} {p.title}</span>
                  <span className="small">{n} ข้อ</span>
                </a>
              );
            })}
          </div>
        </section>
      ))}
      <Accuracy />
    </>
  );
}

/** Per-topic accuracy bars, grouped by page. */
function Accuracy() {
  const s = useStore();
  const rows = useMemo(
    () => pages.flatMap((p) => p.sections.filter((x) => s.topics[x.id]).map((x) => ({ p, x, a: acc(s, x.id)!, t: s.topics[x.id] }))),
    [s],
  );
  return (
    <section className="card">
      <h2>ความแม่นยำรายหัวข้อ</h2>
      {rows.length === 0 && <p className="small">ยังไม่ได้ฝึก — ทำโจทย์แล้วจะเห็นแถบความแม่นยำของแต่ละหัวข้อที่นี่</p>}
      {rows.map(({ p, x, a, t }) => (
        <div className="skill-row" key={x.id}>
          <a href={`#/${p.id}/${x.id}`} style={{ color: 'inherit' }}>{pageTag(p)} {x.label}</a>
          <span className="small">{Math.round(a * 100)}% ({t.correct}/{t.total})</span>
          <div className="bar"><i style={{ width: `${a * 100}%`, background: a < 0.5 ? 'var(--bad)' : a < 0.8 ? '#d97706' : 'var(--good)' }} /></div>
        </div>
      ))}
      {rows.length > 0 && (
        <button className="btn ghost" onClick={() => confirm('ล้างสถิติการฝึกทั้งหมด?') && resetStats()}>
          ล้างสถิติ
        </button>
      )}
    </section>
  );
}

export function PracticePage({ filter }: { filter?: string }) {
  // bumping `round` remounts the session, which picks a fresh set
  const [round, setRound] = useState(0);
  return filter ? <Session key={round} filter={filter} onAgain={() => { setRound(round + 1); window.scrollTo(0, 0); }} /> : <Menu />;
}
