// =====================================================================
// Checks the formulas in calc.ts against the numbers printed on the slides.
// If a test here fails, either the formula or the slide reading is wrong —
// fix the formula, never the expected slide number.
// =====================================================================
import { describe, expect, it } from 'vitest';
import {
  adiabaticDrop,
  cardiacOutput,
  energyAtLevel,
  markRecapture,
  perCapita,
  populationChange,
  populationFromDensity,
  quadratDensity,
  rateOfIncrease,
  netFiltrationPressure,
  turgorAtEquilibrium,
  waterFlowDirection,
  waterPotential,
} from './calc';

describe('animal 5.4 – circulation', () => {
  it('cardiac output, slide 93: 70 × 75 mL = 5.25 L/min', () => {
    expect(cardiacOutput(70, 75)).toBeCloseTo(5.25, 6);
  });
  it('capillary exchange, slide 104: +10 at the arteriole end, −7 at the venule end', () => {
    expect(netFiltrationPressure(35, 25)).toBe(10);
    expect(netFiltrationPressure(25, 25)).toBe(0);
    expect(netFiltrationPressure(18, 25)).toBe(-7);
  });
});

describe('plant 5.4 – water potential', () => {
  it('pure water and 0.1 M sucrose, slide 13', () => {
    expect(waterPotential(0, 0)).toBe(0);
    expect(waterPotential(-0.244, 0)).toBeCloseTo(-0.244, 6);
  });
  it('flaccid cell in sucrose, slide 14: Ψp = 0.488 MPa', () => {
    expect(waterPotential(-0.732, 0)).toBeCloseTo(-0.732, 6);
    expect(turgorAtEquilibrium(-0.244, -0.732)).toBeCloseTo(0.488, 6);
    // after equilibrium the cell's Ψw equals the solution's
    expect(waterPotential(-0.732, 0.488)).toBeCloseTo(-0.244, 6);
  });
  it('pressure-flow figure, slide 33: every Ψw = Ψs + Ψp', () => {
    expect(waterPotential(-1.7, 0.6)).toBeCloseTo(-1.1, 6); // sieve tube at source
    expect(waterPotential(-0.7, 0.3)).toBeCloseTo(-0.4, 6); // sieve tube at sink
    expect(waterPotential(-0.1, -0.7)).toBeCloseTo(-0.8, 6); // xylem next to source
    expect(waterPotential(-0.1, -0.5)).toBeCloseTo(-0.6, 6); // xylem next to sink
  });
  it('water moves from higher to lower Ψw (soil −0.3 → root xylem −0.6, slide 9)', () => {
    expect(waterFlowDirection(-0.3, -0.6)).toBe('a→b');
    expect(waterFlowDirection(-1.0, -0.8)).toBe('b→a');
    expect(waterFlowDirection(-0.244, -0.244)).toBe('none');
  });
});

describe('unit 6 – population, ecosystems, climate', () => {
  it('quadrat sampling, 6.2 slide 5: 9 stems in 3 quadrats of 1 m² → 3 /m², 18 stems in 2 × 3 m', () => {
    const d = quadratDensity(9, 3, 1);
    expect(d).toBe(3);
    expect(populationFromDensity(d, 2 * 3)).toBe(18);
  });
  it('mark-recapture, 6.2 slide 6: 4 marked, recapture 6 with 2 marked → 12', () => {
    expect(markRecapture(4, 6, 2)).toBe(12);
  });
  it('per-capita rates, 6.2 slides 12: b = 48/1000, deaths = 0.05 × 500, r = 0.034 − 0.040', () => {
    // NOTE: the slide prints 0.0048 — that is a slip; 48/1000 = 0.048
    expect(perCapita(48, 1000)).toBeCloseTo(0.048, 9);
    expect(0.05 * 500).toBeCloseTo(25, 9);
    expect(rateOfIncrease(0.034, 0.04)).toBeCloseTo(-0.006, 9);
    expect(rateOfIncrease(0.034, 0.04) * 2000).toBeCloseTo(-12, 9);
  });
  it('change in size, 6.2 slide 10: villages A and B both +5 from 8 births and 3 deaths', () => {
    expect(populationChange(8, 3)).toBe(5);
  });
  it('10 % rule, 6.4: 10,000 units at producers → 1,000 → 100 → 10', () => {
    expect(energyAtLevel(10000, 2)).toBeCloseTo(1000, 6);
    expect(energyAtLevel(10000, 4)).toBeCloseTo(10, 6);
  });
  it('adiabatic cooling, 6.1 slide 17: 6.5 °C per 1000 m', () => {
    expect(adiabaticDrop(1000)).toBeCloseTo(6.5, 9);
    expect(adiabaticDrop(2000)).toBeCloseTo(13, 9);
  });
});
