// =====================================================================
// Widget: estimate a plant population with quadrats (Unit 6.2 slide 5).
// A 6 m × 4 m field has clumped plants. Tap the field to drop 1 m²
// quadrats; the widget counts plants inside them, then estimates
//   density = counted ÷ (n × 1 m²),  size = density × 24 m²
// using calc.ts, and compares with the true count.
// =====================================================================
import { useMemo, useState } from 'react';
import { Readout, WidgetFrame } from '../components/ui';
import { populationFromDensity, quadratDensity, round } from '../data/calc';
import { seeded } from '../practice/engine';

const W = 6; // metres
const H = 4;
const S = 48; // pixels per metre

/** Fixed field (same every visit) with clumped plants, as on the slide. */
function makeField(seed: number) {
  const rng = seeded(seed);
  const pts: [number, number][] = [];
  for (let c = 0; c < 6; c++) {
    const cx = 0.5 + rng() * (W - 1);
    const cy = 0.5 + rng() * (H - 1);
    const n = 3 + Math.floor(rng() * 6);
    for (let k = 0; k < n; k++) pts.push([Math.min(W - 0.05, Math.max(0.05, cx + (rng() - 0.5) * 1.2)), Math.min(H - 0.05, Math.max(0.05, cy + (rng() - 0.5) * 1.2))]);
  }
  return pts;
}

export function QuadratSampler() {
  const [seed, setSeed] = useState(7);
  const plants = useMemo(() => makeField(seed), [seed]);
  const [quads, setQuads] = useState<[number, number][]>([]);
  const inside = (q: [number, number]) => plants.filter(([x, y]) => x >= q[0] && x < q[0] + 1 && y >= q[1] && y < q[1] + 1).length;
  const counted = quads.reduce((a, q) => a + inside(q), 0);
  const density = quads.length ? quadratDensity(counted, quads.length, 1) : 0;
  const estimate = populationFromDensity(density, W * H);

  const drop = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM()!.inverse());
    const qx = Math.min(W - 1, Math.max(0, Math.floor(p.x / S)));
    const qy = Math.min(H - 1, Math.max(0, Math.floor(p.y / S)));
    if (!quads.some(([a, b]) => a === qx && b === qy)) setQuads([...quads, [qx, qy]]);
  };
  const random3 = () => {
    const rng = seeded(Date.now() % 100000);
    const out: [number, number][] = [];
    while (out.length < 3) {
      const q: [number, number] = [Math.floor(rng() * W), Math.floor(rng() * H)];
      if (!out.some(([a, b]) => a === q[0] && b === q[1])) out.push(q);
    }
    setQuads(out);
  };
  return (
    <WidgetFrame
      title="ประมาณประชากรด้วย quadrat"
      notice="แตะในแปลงเพื่อวาง quadrat ขนาด 1 m² — ยิ่งวาง**มาก**และ**กระจายแบบสุ่ม** ค่าประมาณยิ่งใกล้จำนวนจริง · พืชขึ้นเป็น**กลุ่ม (clumped)** จึงวางน้อยอันแล้วคลาดได้มาก"
      onReset={() => setQuads([])}
    >
      <svg viewBox={`0 0 ${W * S} ${H * S}`} className="stage" onClick={drop} role="img" aria-label="แปลงพืช 6 × 4 เมตร" style={{ cursor: 'crosshair' }}>
        <rect x={0} y={0} width={W * S} height={H * S} className="fill-tone tone-tan" opacity={0.35} />
        {Array.from({ length: W - 1 }, (_, i) => <line key={`v${i}`} x1={(i + 1) * S} y1={0} x2={(i + 1) * S} y2={H * S} className="s-muted" strokeWidth={0.4} strokeDasharray="2 3" />)}
        {Array.from({ length: H - 1 }, (_, i) => <line key={`h${i}`} x1={0} y1={(i + 1) * S} x2={W * S} y2={(i + 1) * S} className="s-muted" strokeWidth={0.4} strokeDasharray="2 3" />)}
        {plants.map(([x, y], i) => <circle key={i} cx={x * S} cy={y * S} r={4} className="fill-tone tone-pink" />)}
        {quads.map((q, i) => (
          <g key={i}>
            <rect x={q[0] * S + 1} y={q[1] * S + 1} width={S - 2} height={S - 2} className="f-none s-accent" strokeWidth={3} />
            <text x={q[0] * S + 6} y={q[1] * S + 16} className="small">{inside(q)}</text>
          </g>
        ))}
      </svg>
      <div className="btn-row" style={{ marginTop: 8 }}>
        <button className="btn ghost" onClick={random3}>🎲 สุ่มวาง 3 อัน</button>
        <button className="btn ghost" onClick={() => { setSeed(seed + 1); setQuads([]); }}>🌱 แปลงใหม่</button>
      </div>
      <div className="readouts">
        <Readout k="quadrat ที่วาง" v={`${quads.length} อัน · นับได้ ${counted} ต้น`} />
        <Readout k="ความหนาแน่น = นับได้ ÷ (n × 1 m²)" v={quads.length ? `${round(density, 2)} ต้น/m²` : '—'} />
        <Readout k="ประมาณทั้งแปลง (× 24 m²)" v={quads.length ? `${round(estimate, 1)} ต้น` : '—'} hl />
        <Readout k="จำนวนจริง" v={`${plants.length} ต้น`} />
      </div>
    </WidgetFrame>
  );
}
