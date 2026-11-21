# สรุปชีวะ · 2303107

An interactive study site (in Thai) for Chula course 2303107 General Biology, built from the
lecture decks. It is meant to be read on a phone. Ready so far:

| Unit | Pages | Lecture decks |
|---|---|---|
| 5 🌱 plants | 5.1–5.2 structure & growth · 5.3 nutrition · 5.4 transport · 5.5 responses & hormones | `Unit_5_1_tissue`, `Unit_5_3_nutrition`, `Unit_5.4Transport`, `Unit_5.5_Responses` |
| 5 🐾 animals | 5.1 organization · 5.2 form & homeostasis · 5.3 digestion · 5.4 circulation · 5.5 respiration · 5.6 nervous & endocrine · 5.7 excretion · 5.8 applications | `Gen_bio_107_Unit_5`, `slide เพิ่มเติม 28 ต.ค.` |
| 6 🌍 ecology | 6.1 intro & biomes · 6.2 population · 6.3 community · 6.4 ecosystems · 6.5 ecosystem services & issues | `2303107_General_Biology_lect1`, `6-2` … `6-5` decks |
| 7 🏛️ conclusion | 7 the natural history museum: 4 fundamental questions · museums · museomics & ancient DNA · digitization · past/present/future | `Unit 7 Conclusion` |

All three units of the course material are written.

- 18 chapter pages, 91 sections, each with a "เข้าใจแล้ว" button
- 54 widgets, each with a "ลองสังเกต" line and a reset button. They are built on the **real slide pictures**
  (96 figures cut from the lecture PDFs; the class has permission to use them): tap points on the
  picture, a highlight box that moves step by step, or the slide figure next to sliders. Only three small
  simulations still draw their own graph (glucose, J/S growth, quadrat field), and each also shows the slide.
- 320 practice questions in 7 types (237 for Unit 5, 57 for Unit 6, 26 for Unit 7), plus 7 held back (see below). Options are shuffled every time,
  hints open one at a time, every option is explained, and accuracy is tracked per topic. There is a
  weakest-topic drill and a "questions I got wrong" drill.
- Flashcards (83 key terms), plus a key-terms page with 15 comparison tables
- Static site: Vite + React + TypeScript, no math library (Unicode is enough: Ψw, Ca²⁺, H₂O)
- Progress is stored in `localStorage` only (key `bioweb:v1`)

## Run

Requires Node 20 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:5180. Saving a file updates the page in about a second.
To try it on a phone on the same Wi-Fi, run `npm run dev -- --host` and open the "Network" address it
prints. To look at one widget alone, open `#/w/<id>` (ids are in `src/widgets/all.ts`), for example
http://localhost:5180/#/w/water-potential.

## Test

```bash
npm test
```

- `src/data/data.test.ts` checks that every question, diagram and slide picture is well-formed:
  - ids are unique, and every question's topic is a real section
  - each mcq has exactly one correct option, and every option has an explanation
  - "ข้อ ก และ ค ถูก" options agree with the truth of the statements they combine
  - true/false questions have a reason; order questions have ≥ 3 distinct steps; match pairs are unique
  - label targets exist in their diagram; sort items go to bins that exist
  - every diagram's picture exists, its tap points sit inside the picture, and every crop in
    `figures.json` has an image
  - numeric answers equal what `calc.ts` computes
  - every section has questions, and every glossary link points to a real section
- `src/data/calc.test.ts` checks the formulas against the slides' own numbers: cardiac output 5.25 L/min,
  Ψp = 0.488 MPa, the Ψ values in the pressure-flow figure, and NFP +10 / −7 mmHg. For Unit 6 it checks
  quadrat 9 ÷ (3 × 1) = 3 → 18 stems, mark–recapture 6 ÷ 2 × 4 = 12, b = 48 ÷ 1000, 25 deaths,
  r = −0.006 → −12 per year, the 10 % rule and adiabatic cooling 6.5 °C per 1000 m.
- `src/pages/pages.test.tsx` renders each chapter page and checks that every ready question's `inText`
  phrase appears in its own section, so page text can't drop an answer a question asks. It applies to
  pages whose questions have `inText` (so far พืช 5.4). It also renders every widget and checks it has
  a `<How>` line.
- `src/practice/engine.test.ts` shuffles every mcq 50 times and checks that the right answer is never
  lost and the combined-option letters still match. It also checks that numeric answers and listed
  slips are recognised.

## Build

```bash
npm run build
```

This type-checks, then writes the static site to `dist/`. `npm run preview` serves that build locally.

## Deploy to GitHub Pages

`.github/workflows/deploy.yml` tests, builds and publishes on every push to `main`.

1. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or run the workflow from the Actions tab). The site appears at
   `https://<user>.github.io/<repo>/`.

Keep only this one workflow. No path configuration is needed: Vite uses `base: './'` and the app uses
hash routes (`#/p-transport`, `#/practice`, …), so it works under any repository name.

## Project layout

```
src/
  data/                  ALL study data — no React here, so the tests can read it
    types.ts             shapes of questions, diagrams, glossary terms (start here)
    pages.ts             every chapter page and its sections (= practice topics)
    calc.ts              the few formulas on the slides (cardiac output, Ψw, NFP, quadrat, mark–recapture, r, 10 % rule)
    glossary.ts          key terms (flashcards) and comparison tables
    figures.json         which slide pictures exist: id (deck-page) → crop box, plus image sizes
    figures.ts           figure lookup (image URL, size, caption "สไลด์ … หน้า …")
    diagrams/            plant.ts, animal.ts: slide pictures with tap points and label covers
    questions/           one question bank per page (Unit 6: e-unit6.ts, Unit 7: c-unit7.ts); index.ts joins them
    *.test.ts            the checks above
  chapters.ts            page id → page component; the list of units
  App.tsx                top bar, router (#/...), bottom tab bar
  pages/                 one file per chapter page, plus Home, Terms, Flashcards
  widgets/               one file per widget; all.ts registers them (simple diagram explorers are made there)
  components/            ui.tsx (Section, WidgetFrame, controls), SlideFig (picture + tap points /
                         highlight box / label covers), TapDiagram, DiagramStepper
  assets/slides/         the cut slide pictures (<deck>-<page>.webp), made by scripts/crop-slides.py
  practice/              engine.ts (shuffle/pick/check), QuestionView.tsx (7 types), PracticePage.tsx
  lib/store.ts           localStorage progress
scripts/crop-slides.py   cuts the figures in figures.json out of the PDFs (Python + PyMuPDF + Pillow)
Source/                  (git-ignored) per-slide notes I took from the decks: notes-plant.md, notes-animal.md,
                         notes-unit6.md, notes-unit7.md; pdf/ holds the lecture PDFs named by deck id
```

Every file starts with a comment that explains what it does and how to change it.

Rules the code follows:

- Answers, explanations and diagram labels live only in `src/data/`. Pages and widgets display them.
- Every widget has a "ลองสังเกต" line and a reset button.
- Thai text uses `**bold**` (rendered by `<T>`), with the English term in brackets.
- Pictures are the slides' own figures (use is permitted). Positions on a picture (tap points,
  highlight boxes, label covers) are written in **percent of the cropped picture**, [x, y] or
  [x0, y0, x1, y1], measured from the top-left corner.

## Editing content

- **Fix an answer or explanation:** edit the question in `src/data/questions/<page>.ts`, then run `npm test`.
- **Add a question:** copy one of the same type in that file and give it a new unique `id`. For an
  "ข้อ ก และ ค ถูก" option, write `{ combo: [0, 2], correct: true, why: '…' }` and add
  `truth: true/false` to the options it combines. The letters are generated after shuffling.
- **Add a diagram part:** add it to `src/data/diagrams/*.ts` (`id`, `label`, `info`, `tone`, `at`).
  `at` is the tap point in percent of the picture. If the slide prints the part's name, add a box to
  `masks` so label questions hide it. Do not rename an id that a label question uses; the test will tell
  you if you do.
- **Add or re-cut a slide picture:** put the PDFs in `Source/pdf/` (`p1` `p3` `p4` `p5` = plant decks,
  `a5` / `a5x` = animal deck and the 28 Oct extra slides, `e1`–`e5` = Unit 6, `c7` = Unit 7), add
  `"<deck>-<page>": [x0, y0, x1, y1]` (fractions of the slide) to `src/data/figures.json`, then run
  `python scripts/crop-slides.py <deck>-<page>`. Show it with `<SlideFig id="…" />`. If you change an
  existing crop, re-check the tap points and boxes that use it.
- **Change page text:** edit `src/pages/<Name>Page.tsx`. Every `<Section id>` must exist in `pages.ts`.

### How page text is written

Each page is "everything you need to know" for someone who sat in the lecture but doesn't remember
it. It is not the slides reworded, and not a bare checklist. `PTransportPage.tsx` (พืช 5.4) is the
model:

- Explain each idea in a sentence or two (what it is → how → why), with keywords in **bold**.
- One line per equation (`<p className="big-rule">`). Calculators are allowed in the exam.
- Keep the slides' numbers, comparison tables, step lists and the widgets, placed where they fit.
- Researcher names and years, long lists of minor items and the Minecraft analogies go in
  `<More title="…">` fold-outs.
- Write only what the slides say (`Source/notes-*.md`).
- Give every question `inText`: the phrase on the page that answers it. `npm test` checks it.
- Every widget has a grey `<How>` line saying what you can do and what will happen: above the picture
  if the controls change the picture, below it if the picture stays the same. `npm test` checks every
  widget has one.

## Adding a chapter

1. In `src/data/types.ts`, add the page ids to `PageId`. In `src/data/pages.ts`, add the pages and their sections.
2. Questions: create `src/data/questions/<page>.ts` and add it to `questions/index.ts`.
   Any calculation goes in `calc.ts` with a test that uses the slide's own example.
3. Page: copy a page file, keep its `<Section>` / `<W id>` pattern, and register it in `src/chapters.ts`.
4. Widgets: create one file each in `src/widgets/` and register it in `all.ts`.
5. Terms: add flashcards and comparison tables to `glossary.ts`.

## Decisions taken from the user (where the slides were unclear)

| # | Topic | What the site does |
|---|---|---|
| 1 | Essential amino acids | 8 = the ones adults **cannot make** (slide). A note says 9 are needed (with histidine). |
| 2 | Collagen fiber | Worded exactly as slide 15 ("fibrin and microfibril", flexibility + strength) |
| 3 | Heart chambers | Frogs have 3 chambers. The table's "4 (incomplete)" for turtles/lizards = a partly divided ventricle. |
| 4 | Open circulation examples | As on the slide ("mollusk (กุ้ง กั้ง ปู)") |
| 5 | Feeding type | Uses the slide's term "Bulb feeder" |
| 6 | Kidney step 1 | "infiltration (filtration)" |
| 7 | Pleural fluid | Keeps the slide's word "surfactant" |
| 8 | Myelin sentence | Kept where the slide places it (under nonmyelinated); not asked in questions |
| 9 | Amphibian waste | Counts for both ammonia and urea; no question forces one answer |
| 12 | Pepsin activation | Both HCl and pepsin itself |
| 13 | Mock exam | None. The site has flashcards and practice sets instead. |
| 14 | Poiseuille | "Flow increases with radius" as on the slide. The r⁴ in the equation is shown, but there are no r⁴ calculations. |
| 15 | Sulfur | "mobile", as on the slide, plus a note: moves easily in soil, roots and xylem but not easily via the phloem |
| 16 | Secondary wall | Worded as slide 32 ("สารกลุ่มไขมัน… ติดสีชมพูแดง") |

## Open questions (search for `TODO(professor-method)`)

These still need the professor's version. Questions with `status: 'needs-key'` stay in the data files
but are **never shown** in practice until the answer is filled in. To publish one, set
`status: 'ready'` (or delete the line), check that `correct` and every `why` are filled in, and run `npm test`.

- **10 · Calcium hormones:** slide 168 lists 2 (PTH, calcitonin); the extra deck lists 3 (+ calcitriol).
  The site shows both, and no question asks "how many". Files: `src/pages/AApplicationsPage.tsx`,
  `src/data/questions/a-excretion.ts`.
- **11 · OGTT table:** shown on page 5.8, with no numeric classification questions, because the slide's
  ranges have gaps (161–199 at 2–3 h).
- **17–23 · exercise questions without an answer key**, kept as `needs-key`:
  - `p-transport.ts`
    - `pt-root-03`: why root hairs take up water. No option says Ψw(root) < Ψw(soil).
    - `pt-root-04`: which cortex pathway uses bulk flow.
  - `p-response.ts`
    - `pr-ho-11`: vessel differentiation. The slides say brassinosteroid, which is not among the options.
    - `pr-ho-12`: crown gall.
  - `p-structure.ts`
    - `pl-xs-07`: tyloses. Not taught in the slides.
    - `pl-cell-06`: fiber cap counted as ground tissue?
    - `pl-gr-06`: simple vs compound leaf. Not taught in the slides.

- **Unit 6 (no question is held back; the site's choice is shown on the page with a note):**
  - **24 · Birth rate example (6.2):** the slide prints b = 48 ÷ 1000 = 0.0048. The site uses 0.048, and
    the practice question recognises 0.0048 as a decimal slip. File: `src/pages/EPopulationPage.tsx`.
  - **25 · Mark–recapture wording (6.2):** "if there are 4 marked squirrels total = 6/2 × 4 = 12". The site
    teaches N = marked × caught ÷ recaptured, which gives the same 12.
  - **26 · Facilitation (6.3):** shown on the slides as both +/+ and 0/+. The site accepts both; no question
    asks for its sign. File: `src/pages/ECommunityPage.tsx`.
  - **27 · "Which trophic level is most vulnerable to extinction?" (6.4):** asked on the slide without an
    answer. The site answers "the top consumers". File: `src/pages/EEcosystemPage.tsx`.
  - Not marked TODO, but worth knowing: "national defense" is listed under provisioning services, as on
    the slide. The snowshoe hare–lynx questions Q1–Q5 have no answers on the slide and are not used. The
    slides mention a diversity index but give no formula, so there are no diversity calculations.

- **Unit 7 (photo-only slides; nothing is asked about them):**
  - **28 · Slides 7 and 9:** Wallace/Darwin portraits with specimens, and "Museum as a research institute ->
    Content providers", have no explanation text. The page reads them as "their collections are in the
    museum" and "museums produce knowledge and data through research". File: `src/pages/CMuseumPage.tsx`.
  - **29 · Slide 12:** Jurassic Park (1993) next to Modi et al. 2021, "Successful extraction of insect DNA
    from recent copal inclusions: limits and perspectives". The page only states the paper's title and that
    it names limits.
  - The "เชื่อมกับบท…" line in the four-questions widget is the site's own pointer to earlier pages.

## Scope notes

- Only material in the decks is covered. The surface-to-volume widget (`exchange-surface`) is a teaching
  aid for slide 32's point about folded surfaces; it is not new exam content.
- Unit 6 widgets: the growth curves are a step-by-step logistic model shown under the slide's own
  J/S figure. Each file comment says so.
- The glucose simulator and the transpiration and auxin widgets are qualitative models of the slides'
  rules, not measured data. Their file comments say so.
- Label questions use the slide pictures with the slide's printed labels covered. The covers were
  placed by eye; if a printed word still peeks out on some screen, widen its box in `masks`.
- Typos on the slides are corrected silently on the site (peristasis, Pyrolic, H. pyroli,
  Procarbozypeptidase, Autonomictic, and the positive-feedback slide titled "Negative").
  A note on page 5.6 mentions the last one.
