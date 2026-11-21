// =====================================================================
// The app shell: top bar, page router and bottom tab bar.
//
// ROUTING. The page is chosen by the part of the URL after "#":
//   #/                     → home (unit and page list)
//   #/learn                → the chapter page the user opened last
//   #/<pageId>             → a chapter page, e.g. #/p-transport
//   #/<pageId>/<section>   → same page, scrolled to that section
//   #/practice[/<filter>]  → practice (filter = page id, "weak" or "missed")
//   #/cards                → flashcards
//   #/terms                → key terms & comparison tables
//   #/w/<widgetId>         → one widget on its own (handy for testing/sharing)
// A "#" URL never reloads the page and works on GitHub Pages without
// any server setup, which is why it is used instead of normal paths.
// =====================================================================
import { useEffect, useState } from 'react';
import { pageComponents } from './chapters';
import { pageById, pages, pageTag } from './data/pages';
import { effectiveTheme, setLastPage, setTheme, useStore } from './lib/store';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { HomePage } from './pages/HomePage';
import { TermsPage } from './pages/TermsPage';
import { PracticePage } from './practice/PracticePage';
import { W, widgets } from './widgets/registry';

/** Splits "#/p-transport/pt-psi" into ["p-transport", "pt-psi"] and re-renders when the hash changes. */
function useRoute(): string[] {
  const read = () => window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const on = () => setRoute(read());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

/** Bottom tab bar. `match` decides which tab is highlighted for the current page. */
const tabs: { href: string; ico: string; label: string; match: (page: string) => boolean }[] = [
  { href: '#/', ico: '🏠', label: 'หน้าแรก', match: (p) => p === '' },
  { href: '#/learn', ico: '📖', label: 'บทเรียน', match: (p) => p === 'learn' || !!pageById(p) },
  { href: '#/practice', ico: '✏️', label: 'ฝึกโจทย์', match: (p) => p === 'practice' },
  { href: '#/cards', ico: '🃏', label: 'แฟลชการ์ด', match: (p) => p === 'cards' },
  { href: '#/terms', ico: '📋', label: 'คำศัพท์', match: (p) => p === 'terms' },
];

/** The row of section chips at the top of a chapter page (ticked ones turn green). */
function Chips({ page }: { page: string }) {
  const done = useStore().done;
  const p = pageById(page)!;
  return (
    <nav className="chips" aria-label="หัวข้อในหน้านี้">
      {p.sections.map((s) => (
        <a key={s.id} className={`chip${done[s.id] ? ' done' : ''}`} href={`#/${page}/${s.id}`}>
          {done[s.id] ? '✓ ' : ''}
          {s.label}
        </a>
      ))}
    </nav>
  );
}

/** "◀ previous page · next page ▶" links at the bottom of a chapter page. */
function PageNav({ page }: { page: string }) {
  const ready = pages.filter((p) => pageComponents[p.id]);
  const i = ready.findIndex((p) => p.id === page);
  const prev = ready[i - 1];
  const next = ready[i + 1];
  return (
    <nav className="btn-row" style={{ justifyContent: 'space-between' }}>
      {prev ? <a className="btn ghost" href={`#/${prev.id}`}>◀ {pageTag(prev)}</a> : <span />}
      <a className="btn ghost" href={`#/practice/${page}`}>✏️ ฝึกโจทย์บทนี้</a>
      {next ? <a className="btn ghost" href={`#/${next.id}`}>{pageTag(next)} ▶</a> : <span />}
    </nav>
  );
}

export function App() {
  let [page = '', sub] = useRoute();
  const store = useStore();
  const theme = effectiveTheme(store);

  // "#/learn" means: the last page opened, or the first page if none yet.
  if (page === 'learn') page = pageById(store.lastPage)?.id ?? pages[0].id;
  const def = pageById(page);
  const PageC = def ? pageComponents[def.id] : undefined;

  // Put the theme on <html data-theme="..."> so styles.css can switch colours.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Remember the page for the "บทเรียน" tab.
  useEffect(() => {
    if (PageC && def) setLastPage(def.id);
  }, [PageC, def]);

  // Scroll to the section named in the URL, or to the top when the page changes.
  useEffect(() => {
    const el = sub && PageC ? document.getElementById(`sec-${sub}`) : null;
    if (el) el.scrollIntoView({ block: 'start' });
    else window.scrollTo(0, 0);
  }, [page, sub, PageC]);

  let body;
  if (def && PageC) {
    body = (
      <>
        <p className="eyebrow" style={{ marginBottom: 2 }}>
          บทที่ {def.unit} · {def.track === 'plant' ? '🌱 พืช ' : def.track === 'animal' ? '🐾 สัตว์ ' : ''}{def.num} · {def.en}
        </p>
        <h1>{def.title}</h1>
        <Chips page={def.id} />
        <PageC />
        <PageNav page={def.id} />
      </>
    );
  } else if (def) {
    body = (
      <div className="card">
        <h1>{def.title}</h1>
        <p>หน้านี้กำลังจัดทำ — เร็ว ๆ นี้</p>
      </div>
    );
  } else if (page === 'practice') body = <PracticePage key={sub ?? ''} filter={sub} />;
  else if (page === 'cards') body = <FlashcardsPage />;
  else if (page === 'terms') body = <TermsPage />;
  else if (page === 'w') {
    // single-widget view: a chip per widget, then the chosen one
    body = (
      <>
        <nav className="chips" style={{ flexWrap: 'wrap' }}>
          {Object.entries(widgets).map(([id, w]) => (
            <a key={id} className="chip" href={`#/w/${id}`}>
              {w.title}
            </a>
          ))}
        </nav>
        {sub && <W id={sub} />}
      </>
    );
  } else body = <HomePage />;

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#/" style={{ textDecoration: 'none' }}>
          2303107 · สรุปชีวะ
        </a>
        <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="สลับโหมดสว่าง/มืด">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </header>
      <main>{body}</main>
      <nav className="tabbar" aria-label="เมนูหลัก">
        {tabs.map((t) => (
          <a key={t.href} href={t.href} className={t.match(page) ? 'on' : ''}>
            <span className="ico">{t.ico}</span>
            {t.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
