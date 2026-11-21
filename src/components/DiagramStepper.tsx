// =====================================================================
// A step-through widget on top of a tappable diagram: each step has a
// title, a text and the list of diagram parts to spotlight (others dim).
// Used for "follow the food / the blood / the filtrate" widgets.
//
// Example:
//   <DiagramStepper diagram="heart" title="เส้นทางเลือด" notice="…"
//     steps={[{ title: 'atrium ขวา', text: '…', hl: ['ra'] }, …]} />
// =====================================================================
import { useState } from 'react';
import { diagrams } from '../data/diagrams';
import { TapDiagram } from './TapDiagram';
import { StepNav, T, WidgetFrame } from './ui';

export interface Step {
  title: string;
  text: string;
  /** part ids to spotlight */
  hl: string[];
}

export function DiagramStepper({ diagram, title, notice, steps, maxWidth }: {
  diagram: string; title: string; notice: string; steps: Step[]; maxWidth?: number;
}) {
  const [i, setI] = useState(0);
  const d = diagrams[diagram];
  const s = steps[i];
  return (
    <WidgetFrame title={title} notice={notice} onReset={() => setI(0)}>
      <TapDiagram diagram={d} highlight={s.hl} maxWidth={maxWidth ?? 300} />
      <div className="step-text">
        <b>{i + 1}. {s.title}</b>
        <br />
        <T>{s.text}</T>
      </div>
      <StepNav i={i} n={steps.length} setI={setI} />
    </WidgetFrame>
  );
}
