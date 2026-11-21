// =====================================================================
// Joins every question bank into one list.
// To add a bank (e.g. a new unit): create the file, import it here and add it
// to `allQuestions`. The tests and the practice page pick it up from here.
// =====================================================================
import type { Question } from '../types';
import { aControl } from './a-control';
import { aCirculation } from './a-circulation';
import { aDigestion } from './a-digestion';
import { aApplications, aExcretion } from './a-excretion';
import { aForm, aOrganization } from './a-organization';
import { aRespiration } from './a-respiration';
import { cMuseum } from './c-unit7';
import { eCommunity, eEcosystem, eIntro, eIssues, ePopulation } from './e-unit6';
import { pNutrition } from './p-nutrition';
import { pResponse } from './p-response';
import { pStructure } from './p-structure';
import { pTransport } from './p-transport';

export const allQuestions: Question[] = [
  ...pStructure,
  ...pNutrition,
  ...pTransport,
  ...pResponse,
  ...aOrganization,
  ...aForm,
  ...aDigestion,
  ...aCirculation,
  ...aRespiration,
  ...aControl,
  ...aExcretion,
  ...aApplications,
  ...eIntro,
  ...ePopulation,
  ...eCommunity,
  ...eEcosystem,
  ...eIssues,
  ...cMuseum,
];

/** Questions that may be shown in practice (excludes 'needs-key'). */
export const readyQuestions = allQuestions.filter((q) => q.status !== 'needs-key');
