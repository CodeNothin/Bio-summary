// =====================================================================
// Shows ONE practice question of any type and checks the answer.
//
// Each type has its own small view below (McqView, TfView, …). They all
// receive the question and an `onAnswered(correct)` callback, which they
// call exactly once, when the student presses "ตรวจคำตอบ" (or taps a
// choice). After that they show feedback: what was right, and — for
// multiple choice — why EVERY option is right or wrong.
//
// To add a question type: write a view here and add it to the switch in
// QuestionView at the bottom.
// =====================================================================
import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { TapDiagram } from '../components/TapDiagram';
import { T } from '../components/ui';
import { diagrams } from '../data/diagrams';
import type { Label, Match, Mcq, Numeric, Order, Question, Sort, TrueFalse } from '../data/types';
import { checkNumeric, parseNumber, prepareMcq, shuffle } from './engine';

type Props<Q> = { q: Q; onAnswered: (correct: boolean) => void };

function Verdict({ ok, children }: { ok: boolean; children?: ReactNode }) {
  return (
    <div className={`feedback ${ok ? 'good' : 'bad'}`} role="status">
      <b>{ok ? '✓ ถูกต้อง' : '✗ ยังไม่ถูก'}</b>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------- mcq
function McqView({ q, onAnswered }: Props<Mcq>) {
  const shown = useMemo(() => prepareMcq(q), [q]);
  const [pick, setPick] = useState<number | null>(null);
  const answered = pick !== null;
  return (
    <>
      <p className="q-prompt">
        <T>{q.prompt}</T>
      </p>
      {q.diagram && <TapDiagram diagram={diagrams[q.diagram]} maxWidth={460} quiz />}
      <div className="choice-list">
        {shown.map((o, i) => {
          const cls = answered ? (o.correct ? 'good' : i === pick ? 'bad' : '') : '';
          return (
            <button
              key={o.orig}
              className={cls}
              disabled={answered}
              onClick={() => {
                setPick(i);
                onAnswered(o.correct);
              }}
            >
              <span className="letter">{o.letter}.</span> <T>{o.text}</T>
              {answered && (
                <span className="why">
                  {o.correct ? '✓ ' : '✗ '}
                  <T>{o.why}</T>
                </span>
              )}
            </button>
          );
        })}
      </div>
      {answered && <Verdict ok={shown[pick].correct} />}
    </>
  );
}

// ---------------------------------------------------------------- true / false
function TfView({ q, onAnswered }: Props<TrueFalse>) {
  const [pick, setPick] = useState<boolean | null>(null);
  const answered = pick !== null;
  const choose = (v: boolean) => {
    setPick(v);
    onAnswered(v === q.answer);
  };
  const cls = (v: boolean) => (!answered ? '' : v === q.answer ? 'good' : v === pick ? 'bad' : '');
  return (
    <>
      <p className="small" style={{ marginBottom: 4 }}>ข้อความนี้ถูกหรือผิด?</p>
      <p className="statement">
        <T>{q.statement}</T>
      </p>
      <div className="tf-row">
        <button className={cls(true)} disabled={answered} onClick={() => choose(true)}>
          ✓ ถูก
        </button>
        <button className={cls(false)} disabled={answered} onClick={() => choose(false)}>
          ✗ ผิด
        </button>
      </div>
      {answered && (
        <Verdict ok={pick === q.answer}>
          <br />
          ข้อความนี้ <b>{q.answer ? 'ถูก' : 'ผิด'}</b> — <T>{q.why}</T>
        </Verdict>
      )}
    </>
  );
}

// ---------------------------------------------------------------- order
function OrderView({ q, onAnswered }: Props<Order>) {
  // shuffle until the order differs from the answer (so it is never pre-solved)
  const [items, setItems] = useState(() => {
    let s = shuffle(q.steps);
    for (let k = 0; k < 10 && s.every((x, i) => x === q.steps[i]); k++) s = shuffle(q.steps);
    return s;
  });
  const [checked, setChecked] = useState(false);
  const move = (i: number, d: -1 | 1) => {
    const j = i + d;
    if (j < 0 || j >= items.length) return;
    const a = items.slice();
    [a[i], a[j]] = [a[j], a[i]];
    setItems(a);
  };
  const ok = items.every((x, i) => x === q.steps[i]);
  return (
    <>
      <p className="q-prompt">
        <T>{q.prompt}</T>
      </p>
      <p className="small">กด ▲ ▼ เพื่อเลื่อนลำดับ แล้วกดตรวจคำตอบ</p>
      <ol className="order-list">
        {items.map((s, i) => (
          <li key={s} className={checked ? (s === q.steps[i] ? 'good' : 'bad') : ''}>
            <span className="num">{i + 1}</span>
            <span>
              <T>{s}</T>
            </span>
            <span className="mini-btns">
              <button onClick={() => move(i, -1)} disabled={checked || i === 0} aria-label="เลื่อนขึ้น">▲</button>
              <button onClick={() => move(i, 1)} disabled={checked || i === items.length - 1} aria-label="เลื่อนลง">▼</button>
            </span>
          </li>
        ))}
      </ol>
      {!checked ? (
        <button className="btn" onClick={() => { setChecked(true); onAnswered(ok); }}>ตรวจคำตอบ</button>
      ) : (
        <Verdict ok={ok}>
          {!ok && (
            <>
              <br />
              ลำดับที่ถูก:
              <ol style={{ margin: '4px 0 0' }}>
                {q.steps.map((s) => (
                  <li key={s}><T>{s}</T></li>
                ))}
              </ol>
            </>
          )}
        </Verdict>
      )}
    </>
  );
}

// ---------------------------------------------------------------- match
function MatchView({ q, onAnswered }: Props<Match>) {
  const lefts = useMemo(() => shuffle(q.pairs.map((p) => p.left)), [q]);
  const rights = useMemo(() => shuffle(q.pairs.map((p) => p.right)), [q]);
  const [sel, setSel] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const rightOf = (l: string) => q.pairs.find((p) => p.left === l)!.right;
  const allChosen = lefts.every((l) => sel[l]);
  const ok = lefts.every((l) => sel[l] === rightOf(l));
  return (
    <>
      <p className="q-prompt">
        <T>{q.prompt}</T>
      </p>
      <div className="match-grid">
        {lefts.map((l) => (
          <div key={l} className={`match-row${checked ? (sel[l] === rightOf(l) ? ' good' : ' bad') : ''}`}>
            <b>
              <T>{l}</T>
            </b>
            <select value={sel[l] ?? ''} disabled={checked} onChange={(e) => { const v = e.target.value; setSel((cur) => ({ ...cur, [l]: v })); }} aria-label={`คู่ของ ${l}`}>
              <option value="">— เลือก —</option>
              {rights.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            {checked && sel[l] !== rightOf(l) && (
              <div className="small">
                ✓ ที่ถูก: <T>{rightOf(l)}</T>
              </div>
            )}
          </div>
        ))}
      </div>
      {!checked ? (
        <button className="btn" disabled={!allChosen} onClick={() => { setChecked(true); onAnswered(ok); }}>
          ตรวจคำตอบ
        </button>
      ) : (
        <Verdict ok={ok} />
      )}
    </>
  );
}

// ---------------------------------------------------------------- sort
function SortView({ q, onAnswered }: Props<Sort>) {
  const items = useMemo(() => shuffle(q.items), [q]);
  const [sel, setSel] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const allChosen = items.every((i) => sel[i.text]);
  const ok = items.every((i) => sel[i.text] === i.bin);
  const binLabel = (id: string) => q.bins.find((b) => b.id === id)!.label;
  return (
    <>
      <p className="q-prompt">
        <T>{q.prompt}</T>
      </p>
      <div>
        {items.map((it) => (
          <div key={it.text} className={`sort-item${checked ? (sel[it.text] === it.bin ? ' good' : ' bad') : ''}`}>
            <b>{it.text}</b>
            <div className="seg">
              {q.bins.map((b) => (
                <button
                  key={b.id}
                  className={sel[it.text] === b.id ? 'on' : ''}
                  disabled={checked}
                  onClick={() => setSel((cur) => ({ ...cur, [it.text]: b.id }))}
                >
                  {b.label}
                </button>
              ))}
            </div>
            {checked && sel[it.text] !== it.bin && <div className="small">✓ ที่ถูก: {binLabel(it.bin)}</div>}
          </div>
        ))}
      </div>
      {!checked ? (
        <button className="btn" disabled={!allChosen} onClick={() => { setChecked(true); onAnswered(ok); }}>
          ตรวจคำตอบ
        </button>
      ) : (
        <Verdict ok={ok} />
      )}
    </>
  );
}

// ---------------------------------------------------------------- label
function LabelView({ q, onAnswered }: Props<Label>) {
  const d = diagrams[q.diagram];
  const [tap, setTap] = useState<string | null>(null);
  const answered = tap !== null;
  const tapped = d.parts.find((p) => p.id === tap);
  const target = d.parts.find((p) => p.id === q.target)!;
  return (
    <>
      <p className="q-prompt">
        <T>{q.prompt}</T>
      </p>
      <p className="small">{d.title} — แตะส่วนที่ถูกต้องในภาพ</p>
      <TapDiagram
        diagram={d}
        onTap={answered ? undefined : (id) => { setTap(id); onAnswered(id === q.target); }}
        mark={answered ? { id: q.target, ok: true } : null}
        highlight={answered ? [q.target, tap!] : undefined}
        maxWidth={460}
        quiz
      />
      {answered && (
        <Verdict ok={tap === q.target}>
          <br />
          {tap !== q.target && tapped && (
            <>
              คุณแตะ <b>{tapped.label}</b> — <T>{tapped.info}</T>
              <br />
            </>
          )}
          คำตอบ: <b>{target.label}</b> (ขอบสีเขียวในภาพ)
        </Verdict>
      )}
    </>
  );
}

// ---------------------------------------------------------------- numeric
function NumericView({ q, onAnswered }: Props<Numeric>) {
  const [text, setText] = useState('');
  const [result, setResult] = useState<{ ok: boolean; msg?: string } | null>(null);
  const value = parseNumber(text);
  return (
    <>
      <p className="q-prompt">
        <T>{q.prompt}</T>
      </p>
      <div className="answer-row">
        <input
          inputMode="decimal"
          value={text}
          disabled={!!result}
          onChange={(e) => setText(e.target.value)}
          placeholder="พิมพ์ตัวเลข"
          aria-label="คำตอบ"
        />
        <span style={{ alignSelf: 'center' }}>{q.unit}</span>
      </div>
      {text && value === null && <p className="small">อ่านตัวเลขไม่ออก — ใช้รูปแบบเช่น 5.25 หรือ −0.488</p>}
      {!result ? (
        <button
          className="btn"
          disabled={value === null}
          onClick={() => {
            const r = checkNumeric(q, value!);
            setResult(r);
            onAnswered(r.ok);
          }}
        >
          ตรวจคำตอบ
        </button>
      ) : (
        <Verdict ok={result.ok}>
          {result.msg && (
            <>
              <br />
              <T>{result.msg}</T>
            </>
          )}
          <br />
          คำตอบ: <b>{q.answer} {q.unit}</b>
        </Verdict>
      )}
    </>
  );
}

// ---------------------------------------------------------------- dispatcher
export function QuestionView({ q, onAnswered }: { q: Question; onAnswered: (correct: boolean) => void }) {
  switch (q.type) {
    case 'mcq': return <McqView q={q} onAnswered={onAnswered} />;
    case 'tf': return <TfView q={q} onAnswered={onAnswered} />;
    case 'order': return <OrderView q={q} onAnswered={onAnswered} />;
    case 'match': return <MatchView q={q} onAnswered={onAnswered} />;
    case 'sort': return <SortView q={q} onAnswered={onAnswered} />;
    case 'label': return <LabelView q={q} onAnswered={onAnswered} />;
    case 'numeric': return <NumericView q={q} onAnswered={onAnswered} />;
  }
}

/** Thai name of each question type, for the small tag above a question. */
export const typeName: Record<Question['type'], string> = {
  mcq: 'เลือกตอบ',
  tf: 'ถูก/ผิด',
  order: 'เรียงลำดับ',
  match: 'จับคู่',
  sort: 'จัดกลุ่ม',
  label: 'แตะภาพ',
  numeric: 'คำนวณ',
};
