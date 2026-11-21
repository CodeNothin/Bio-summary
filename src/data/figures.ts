// =====================================================================
// Slide pictures: the figures cut from the lecture PDFs.
//
// The list of figures (which slide, which part of it) is
// src/data/figures.json; the images themselves are
// src/assets/slides/<id>.webp, made by `python scripts/crop-slides.py`.
// id = <deck>-<pdf page>, e.g. 'a5-92' = animal deck, page 92.
//
// To add a picture: add an id + crop box to figures.json, run the
// script, then use <SlideFig id="..." /> (src/components/SlideFig.tsx).
// The test in data.test.ts checks every id used in the data exists.
// =====================================================================
import spec from './figures.json';

/** A box [x0, y0, x1, y1] in percent of a cropped picture (0–100 from the top-left). */
export type Box = [number, number, number, number];

export interface Figure {
  id: string;
  /** image URL (bundled by Vite) */
  src: string;
  /** pixel size of the image */
  w: number;
  h: number;
  /** "สไลด์ <deck> หน้า <n>" */
  caption: string;
}

// Vite turns every .webp in the folder into a URL at build time.
const urls = import.meta.glob('../assets/slides/*.webp', { eager: true, import: 'default' }) as Record<string, string>;

const decks = spec.decks as Record<string, string>;
const sizes = spec.sizes as Record<string, number[]>;

export const figures: Record<string, Figure> = Object.fromEntries(
  Object.keys(spec.figures).map((id) => {
    const deck = id.slice(0, id.lastIndexOf('-'));
    const page = id.slice(id.lastIndexOf('-') + 1);
    const [w, h] = sizes[id] ?? [4, 3];
    return [id, { id, src: urls[`../assets/slides/${id}.webp`] ?? '', w, h, caption: `สไลด์ ${decks[deck] ?? deck} หน้า ${page}` }];
  }),
);

/** Look up a figure; throws on a typo so it shows up in tests and dev. */
export function fig(id: string): Figure {
  const f = figures[id];
  if (!f) throw new Error(`unknown slide figure "${id}" (add it to src/data/figures.json)`);
  return f;
}

