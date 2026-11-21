// =====================================================================
// All diagrams in one lookup table: id → Diagram.
// To add a diagram: write it in plant.ts or animal.ts (or a new file),
// add it to that file's list, and it appears here automatically.
// =====================================================================
import type { Diagram } from '../types';
import { animalDiagrams } from './animal';
import { plantDiagrams } from './plant';

export const allDiagrams: Diagram[] = [...plantDiagrams, ...animalDiagrams];

export const diagrams: Record<string, Diagram> = Object.fromEntries(allDiagrams.map((d) => [d.id, d]));
