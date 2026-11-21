// =====================================================================
// Widget: exponential (J) vs logistic (S) growth (Unit 6.2 slides 14–18).
// Sliders set the per-capita rate r and the carrying capacity K. The
// logistic curve is computed step by step: N(t+1) = N + r·N·(1 − N/K);
// the exponential curve uses N(t+1) = N + r·N. "Add nutrients" raises K
// temporarily, like the algae bloom on slide 18. The slide's own J and S
// curves (slide 14, or slide 17 with its phases) are shown above the
// simulated graph.
// =====================================================================
import { useState } from 'react';
import { SlideFig } from '../components/SlideFig';
import { Readout, Slider, Toggle, WidgetFrame } from '../components/ui';

const STEPS = 60;

export function GrowthCurves() {
  const [r, setR] = useState(0.15);
  const [K, setK] = useState(500);
  const [bloom, setBloom] = useState(false);
  const N0 = 10;
  const exp: number[] = [N0];
  const log: number[] = [N0];
  for (let t = 1; t <= STEPS; t++) {
    const k = bloom && t > 30 && t < 45 ? K * 1.6 : K; // nutrients raise K for a while
    exp.push(exp[t - 1] * (1 + r));
    log.push(log[t - 1] + r * log[t - 1] * (1 - log[t - 1] / k));
  }
  const top = 1000;
  const px = (t: number) => 30 + (t / STEPS) * 260;
  const py = (n: number) => 180 - (Math.min(n, top * 1.05) / top) * 165;
  const line = (arr: number[]) => arr.map((n, t) => `${t ? 'L' : 'M'}${px(t).toFixed(1)} ${py(n).toFixed(1)}`).join(' ');
  return (
    <WidgetFrame
      title="การเติบโตแบบ J (exponential) vs S (logistic)"
      notice="เพิ่ม r: ทั้งสองแบบโตเร็วขึ้น · ลด K: เส้น S หยุดที่ระดับต่ำลง (**ช่วง stationary: อัตราเกิด = อัตราตาย**) · เปิด**ปุ๋ยไหลลงน้ำ**: K เพิ่มชั่วคราว ประชากรพุ่งแล้วลดลงเมื่อปัจจัยจำกัดอื่นกลับมา"
      onReset={() => { setR(0.15); setK(500); setBloom(false); }}
    >
      <SlideFig id="e2-14" />
      <p className="small" style={{ margin: '4px 0' }}>ลองเอง: ปรับ r และ K แล้วดูกราฟจำลอง</p>
      <svg viewBox="0 0 300 200" className="stage" role="img" aria-label="กราฟการเติบโตของประชากร">
        <line x1={30} y1={180} x2={292} y2={180} className="s-muted" />
        <line x1={30} y1={10} x2={30} y2={180} className="s-muted" />
        <line x1={30} y1={py(K)} x2={292} y2={py(K)} className="s-good" strokeDasharray="5 4" />
        <text x={290} y={py(K) - 4} textAnchor="end" className="small">K = {K}</text>
        <path d={line(exp)} className="f-none s-bad" strokeWidth={2.5} />
        <path d={line(log)} className="f-none s-accent" strokeWidth={2.5} />
        <text x={36} y={22} className="small" fill="var(--bad)">J: exponential</text>
        <text x={36} y={36} className="small">S: logistic</text>
        <text x={160} y={196} textAnchor="middle" className="small mut">เวลา →</text>
      </svg>
      <div className="controls">
        <Slider label="r (อัตราการเพิ่มต่อหัว)" value={r} min={0.05} max={0.3} step={0.01} onChange={setR} show={r.toFixed(2)} />
        <Slider label="K (carrying capacity)" value={K} min={200} max={900} step={10} onChange={setK} show={`${K}`} />
      </div>
      <div className="seg" style={{ marginTop: 8 }}>
        <Toggle on={bloom} label="ปุ๋ย N, P ไหลลงน้ำ (K เพิ่มชั่วคราว)" onChange={setBloom} />
      </div>
      <div className="readouts">
        <Readout k="logistic ตอนท้าย" v={`${Math.round(log[STEPS])} ตัว`} hl />
        <Readout k="exponential ตอนท้าย" v={exp[STEPS] > 99999 ? 'มากเกินกราฟ ↑' : `${Math.round(exp[STEPS])} ตัว`} />
      </div>
    </WidgetFrame>
  );
}
