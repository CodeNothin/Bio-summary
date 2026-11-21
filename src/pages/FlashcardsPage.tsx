// =====================================================================
// Flashcards: one key term at a time (from src/data/glossary.ts).
// Tap the card to flip it; then press "จำได้แล้ว" or "ยังไม่แม่น".
// Cards marked "ยังไม่แม่น" (or never seen) come back first next time.
// The deck can be limited to one track (plant / animal) or one page.
// The user asked for this instead of a timed mock exam.
// =====================================================================
import { useMemo, useState } from 'react';
import { T } from '../components/ui';
import { terms } from '../data/glossary';
import { pageById, pages } from '../data/pages';
import { setCard, useStore } from '../lib/store';
import { shuffle } from '../practice/engine';

export function FlashcardsPage() {
  const s = useStore();
  const [filter, setFilter] = useState('all');
  const [round, setRound] = useState(0);
  // build the deck: unknown/again cards first (shuffled), then known ones
  const deck = useMemo(() => {
    const pool = terms.filter((t) => {
      if (filter === 'all') return true;
      if (filter === 'plant' || filter === 'animal') return pageById(t.page)?.track === filter;
      return t.page === filter;
    });
    const fresh = shuffle(pool.filter((t) => s.cards[t.en] !== 'known'));
    const known = shuffle(pool.filter((t) => s.cards[t.en] === 'known'));
    return [...fresh, ...known];
    // eslint-disable-next-line react-hooks/exhaustive-deps -- rebuild only when the filter or round changes
  }, [filter, round]);
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const card = deck[i];
  const knownCount = deck.filter((t) => s.cards[t.en] === 'known').length;

  const next = (v: 'known' | 'again') => {
    setCard(card.en, v);
    setFlip(false);
    setI(i + 1);
  };
  const restart = (f = filter) => {
    setFilter(f);
    setRound(round + 1);
    setI(0);
    setFlip(false);
  };

  return (
    <>
      <section className="card">
        <h1>แฟลชการ์ด 🃏</h1>
        <p className="small">แตะการ์ดเพื่อพลิกดูความหมาย แล้วเลือกว่าจำได้หรือยัง — การ์ดที่ยังไม่แม่นจะวนกลับมาก่อน</p>
        <select className="search" value={filter} onChange={(e) => restart(e.target.value)} aria-label="เลือกชุดการ์ด">
          <option value="all">ทุกบท ({terms.length} ใบ)</option>
          <option value="plant">🌱 พืชทั้งหมด</option>
          <option value="animal">🐾 สัตว์ทั้งหมด</option>
          {pages.map((p) => (
            <option key={p.id} value={p.id}>
              {p.num} {p.title}
            </option>
          ))}
        </select>
        <p className="small">จำได้แล้ว {knownCount} / {deck.length} ใบ</p>
      </section>

      {card ? (
        <>
          <button className="flashcard" onClick={() => setFlip(!flip)} aria-label="พลิกการ์ด">
            <span className="front">{card.th}</span>
            <span className="en">{card.en}</span>
            {flip ? (
              <span className="back">
                <T>{card.def}</T>
              </span>
            ) : (
              <span className="tap">แตะเพื่อดูความหมาย</span>
            )}
          </button>
          <p className="small" style={{ textAlign: 'center' }}>
            ใบที่ {i + 1} / {deck.length} ·{' '}
            <a href={`#/${card.page}/${card.section}`}>อ่านหัวข้อนี้</a>
          </p>
          <div className="tf-row">
            <button className="bad" onClick={() => next('again')}>🔁 ยังไม่แม่น</button>
            <button className="good" onClick={() => next('known')}>✓ จำได้แล้ว</button>
          </div>
        </>
      ) : (
        <div className="card">
          <h2>ครบชุดแล้ว 🎉</h2>
          <p>จำได้แล้ว {knownCount} / {deck.length} ใบ</p>
          <button className="btn" onClick={() => restart()}>เริ่มใหม่ (ใบที่ยังไม่แม่นมาก่อน)</button>
        </div>
      )}
    </>
  );
}
