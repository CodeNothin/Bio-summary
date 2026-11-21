// =====================================================================
// Tiny helpers that build Shape objects (see types.ts) for the diagrams.
// They only do geometry — rings, stars, points around a circle — so the
// diagram files can stay short and readable.
//
// Angles are in degrees, 0° = pointing right, 90° = pointing DOWN
// (SVG's y axis points down).
// =====================================================================
import type { Shape } from '../types';

const rad = (deg: number) => (deg * Math.PI) / 180;
const r1 = (x: number) => Math.round(x * 10) / 10;

/** The point `dist` away from (cx, cy) in direction `angle`. */
export function polar(cx: number, cy: number, dist: number, angle: number): [number, number] {
  return [r1(cx + dist * Math.cos(rad(angle))), r1(cy + dist * Math.sin(rad(angle)))];
}

export const circle = (cx: number, cy: number, r: number): Shape => ({ kind: 'circle', cx, cy, r });
export const ellipse = (cx: number, cy: number, rx: number, ry: number): Shape => ({ kind: 'ellipse', cx, cy, rx, ry });
export const rect = (x: number, y: number, w: number, h: number, rx = 0): Shape => ({ kind: 'rect', x, y, w, h, rx });
export const path = (d: string): Shape => ({ kind: 'path', d });
/** A stroke-only line through the given points. */
export const line = (...pts: [number, number][]): Shape => ({
  kind: 'path',
  line: true,
  d: pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' '),
});

/** A thick stroke-only curve from an SVG path string (tubes, nerves). `w` = stroke width. */
export const tube = (d: string, w = 7): Shape => ({ kind: 'path', d, line: true, w });

/** A filled ring (annulus) between radius rIn and rOut. */
export function ring(cx: number, cy: number, rOut: number, rIn: number): Shape {
  const c = (r: number) => `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0`;
  return { kind: 'path', d: `${c(rOut)} ${c(rIn)}`, evenodd: true };
}

/** A star with `n` arms (used for the xylem "arms" in a dicot root). */
export function star(cx: number, cy: number, n: number, rOut: number, rIn: number, rot = 0): Shape {
  const pts: string[] = [];
  for (let i = 0; i < n * 2; i++) {
    const [x, y] = polar(cx, cy, i % 2 === 0 ? rOut : rIn, rot + (i * 180) / n);
    pts.push(`${i ? 'L' : 'M'}${x} ${y}`);
  }
  return { kind: 'path', d: pts.join(' ') + ' Z' };
}

/** `n` circles of radius r spread evenly on a circle of radius `dist`. */
export function circlesAround(cx: number, cy: number, n: number, dist: number, r: number, rot = 0): Shape[] {
  return Array.from({ length: n }, (_, i) => {
    const [x, y] = polar(cx, cy, dist, rot + (i * 360) / n);
    return circle(x, y, r);
  });
}

/** A closed polygon through the points. */
export function poly(...pts: [number, number][]): Shape {
  return path(pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ') + ' Z');
}
