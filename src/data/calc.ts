// =====================================================================
// The few calculations that appear on the Unit 5 slides.
//
// Biology is mostly not numeric, so this file is short. Numeric practice
// questions and widgets call these functions instead of doing their own
// arithmetic, and calc.test.ts checks each one against the slide examples.
//
// To add a formula: write a small function here with a comment saying which
// slide it comes from, then add a test with that slide's own numbers.
// =====================================================================

/**
 * Cardiac output (L/min) = heart rate (beats/min) × stroke volume (mL/beat) / 1000.
 * Animal 5.4, slide 93: 70 beat/min × 75 mL/beat = 5.25 L/min.
 */
export function cardiacOutput(heartRate: number, strokeVolumeMl: number): number {
  return (heartRate * strokeVolumeMl) / 1000;
}

/**
 * Water potential Ψw = Ψs + Ψp (MPa).
 * Plant 5.4, slides 12–14. Ψs (solute potential) is 0 for pure water and
 * negative for solutions; Ψp (pressure potential) is + for turgor, − for tension.
 */
export function waterPotential(psiS: number, psiP: number): number {
  return psiS + psiP;
}

/**
 * Turgor pressure a cell reaches after soaking until its Ψw equals the
 * solution's Ψw, assuming its Ψs stays the same (as on plant 5.4 slide 14):
 *   Ψp = Ψw(solution) − Ψs(cell)
 * Slide example: −0.244 − (−0.732) = 0.488 MPa.
 */
export function turgorAtEquilibrium(psiSolution: number, psiSCell: number): number {
  return psiSolution - psiSCell;
}

/**
 * Which way water moves between two places: always from HIGHER Ψw to LOWER Ψw.
 * Returns 'a→b', 'b→a' or 'none' (equal = no NET movement).
 */
export function waterFlowDirection(psiA: number, psiB: number): 'a→b' | 'b→a' | 'none' {
  const d = psiA - psiB;
  if (Math.abs(d) < 1e-9) return 'none';
  return d > 0 ? 'a→b' : 'b→a';
}

/**
 * Net filtration pressure across a capillary wall (mmHg):
 *   NFP = capillary blood pressure (CHP) − blood colloid osmotic pressure (BCOP).
 * + means fluid leaves the capillary, − means it comes back in.
 * Animal 5.4, slide 104 figure: 35 − 25 = +10 (arteriole end), 18 − 25 = −7 (venule end).
 */
export function netFiltrationPressure(chp: number, bcop: number): number {
  return chp - bcop;
}

// ------------------------------------------------------------- Unit 6

/**
 * Quadrat sampling density = all individuals counted in all quadrats
 *                            ÷ (number of quadrats × quadrat size).
 * Unit 6.2 slide 5: 9 ÷ (3 × 1 m²) = 3 stems/m².
 */
export function quadratDensity(totalCounted: number, nQuadrats: number, quadratArea: number): number {
  return totalCounted / (nQuadrats * quadratArea);
}

/** Population size = density × area of the study site. Slide 5: 3 × (2 × 3) = 18 stems. */
export function populationFromDensity(density: number, area: number): number {
  return density * area;
}

/**
 * Mark–recapture estimate N = (marked in 1st capture × caught in 2nd) ÷ marked found in 2nd.
 * Unit 6.2 slide 6: 4 squirrels marked; 2nd capture 6 squirrels, 2 of them marked → 6 ÷ 2 × 4 = 12.
 */
export function markRecapture(markedFirst: number, caughtSecond: number, recaptured: number): number {
  return (caughtSecond / recaptured) * markedFirst;
}

/** Change in population size = births − deaths + immigrants − emigrants (slide 9). */
export function populationChange(births: number, deaths: number, immigrants = 0, emigrants = 0): number {
  return births - deaths + immigrants - emigrants;
}

/** Per-capita rate, e.g. birth rate b = B / N (slides 11–12). */
export function perCapita(count: number, N: number): number {
  return count / N;
}

/** Per-capita rate of increase r = b − d (slide 11). r > 0 grows, < 0 declines, = 0 ZPG. */
export function rateOfIncrease(b: number, d: number): number {
  return b - d;
}

/**
 * Energy reaching trophic level `level` (1 = producers) when each step passes on `efficiency`
 * of the energy (Unit 6.4: about 10 %, range 5–20 %).
 */
export function energyAtLevel(producerEnergy: number, level: number, efficiency = 0.1): number {
  return producerEnergy * efficiency ** (level - 1);
}

/** Adiabatic cooling: temperature drop of about 6.5 °C per 1000 m climbed (Unit 6.1 slide 17). */
export function adiabaticDrop(metresClimbed: number): number {
  return (6.5 * metresClimbed) / 1000;
}

/** Round to a number of decimal places (for showing results; avoids 0.30000000004). */
export function round(x: number, places = 3): number {
  const f = 10 ** places;
  return Math.round(x * f) / f;
}
