// =====================================================================
// Page components for each chapter page in src/data/pages.ts.
//
// pages.ts holds the titles and sections (plain data, read by the tests);
// this file adds the React component that draws each page.
//
// To add a page (e.g. a new unit):
//   1. add it to src/data/pages.ts (id, title, sections),
//   2. write src/pages/<Name>Page.tsx (copy an existing page),
//   3. import it below and add it to `pageComponents`.
// A page in pages.ts without a component here shows as "เร็ว ๆ นี้".
// =====================================================================
import type { ComponentType } from 'react';
import type { PageId } from './data/types';
import { ACirculationPage } from './pages/ACirculationPage';
import { AControlPage } from './pages/AControlPage';
import { ADigestionPage } from './pages/ADigestionPage';
import { AExcretionPage } from './pages/AExcretionPage';
import { AFormPage } from './pages/AFormPage';
import { AOrganizationPage } from './pages/AOrganizationPage';
import { ARespirationPage } from './pages/ARespirationPage';
import { AApplicationsPage } from './pages/AApplicationsPage';
import { PNutritionPage } from './pages/PNutritionPage';
import { PResponsePage } from './pages/PResponsePage';
import { PStructurePage } from './pages/PStructurePage';
import { PTransportPage } from './pages/PTransportPage';
import { CMuseumPage } from './pages/CMuseumPage';
import { EIntroPage } from './pages/EIntroPage';
import { EPopulationPage } from './pages/EPopulationPage';
import { ECommunityPage } from './pages/ECommunityPage';
import { EEcosystemPage } from './pages/EEcosystemPage';
import { EIssuesPage } from './pages/EIssuesPage';

export const pageComponents: Partial<Record<PageId, ComponentType>> = {
  'p-structure': PStructurePage,
  'p-nutrition': PNutritionPage,
  'p-transport': PTransportPage,
  'p-response': PResponsePage,
  'a-organization': AOrganizationPage,
  'a-form': AFormPage,
  'a-digestion': ADigestionPage,
  'a-circulation': ACirculationPage,
  'a-respiration': ARespirationPage,
  'a-control': AControlPage,
  'a-excretion': AExcretionPage,
  'a-applications': AApplicationsPage,
  'e-intro': EIntroPage,
  'e-population': EPopulationPage,
  'e-community': ECommunityPage,
  'e-ecosystem': EEcosystemPage,
  'e-issues': EIssuesPage,
  'c-museum': CMuseumPage,
};

/** Units shown on the home page, including the ones not written yet. */
export const units = [
  { num: 5, title: 'บทที่ 5 : การดำรงสภาวะปกติเพื่อการอยู่รอด', en: 'Maintaining steady state: key to survive' },
  { num: 6, title: 'บทที่ 6 : ความสัมพันธ์ระหว่างสิ่งมีชีวิตกับสิ่งแวดล้อม', en: 'Interactions of organisms and environment' },
  { num: 7, title: 'บทที่ 7 : บทสรุป', en: 'Conclusion' },
];
