// =====================================================================
// Key terms & concepts page (the biology version of a formula sheet):
// a search box, every term grouped by page with a link to its section,
// and the comparison tables ("ต่างกันอย่างไร") from src/data/glossary.ts.
// To add terms or tables, edit glossary.ts — this file only displays them.
// =====================================================================
import { useState } from 'react';
import { T, Table } from '../components/ui';
import { compares, terms } from '../data/glossary';
import { pages } from '../data/pages';

export function TermsPage() {
  const [q, setQ] = useState('');
  const needle = q.trim().toLowerCase();
  const match = (s: string) => s.toLowerCase().includes(needle);
  const shown = terms.filter((t) => !needle || match(t.th) || match(t.en) || match(t.def));

  return (
    <>
      <section className="card">
        <h1>คำศัพท์และแนวคิดสำคัญ 📋</h1>
        <input className="search" type="search" placeholder="ค้นหา เช่น xylem, ฮอร์โมน, nephron" value={q} onChange={(e) => setQ(e.target.value)} aria-label="ค้นหาคำศัพท์" />
        {pages.map((p) => {
          const list = shown.filter((t) => t.page === p.id);
          if (list.length === 0) return null;
          return (
            <div key={p.id}>
              <h3>
                {p.icon} {p.num} {p.title}
              </h3>
              {list.map((t) => (
                <div className="term" key={t.en}>
                  <span className="t">{t.th}</span> <span className="th-en">({t.en})</span>
                  <br />
                  <T>{t.def}</T> <a className="small" href={`#/${t.page}/${t.section}`}>อ่าน →</a>
                </div>
              ))}
            </div>
          );
        })}
        {shown.length === 0 && <p className="small">ไม่พบคำนี้</p>}
      </section>

      <h2 className="track-head">ตารางเปรียบเทียบ</h2>
      {compares
        .filter((c) => !needle || match(c.title) || c.rows.some((r) => r.some(match)))
        .map((c) => (
          <section className="card" key={c.title}>
            <h3 style={{ marginTop: 0 }}>{c.title}</h3>
            <Table head={c.head} rows={c.rows} />
          </section>
        ))}
    </>
  );
}
