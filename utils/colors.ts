export function getRandomHex(): string {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

export function hexToHsl(hex: string): { h: number; s: number; l: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  const a = [rgb.r, rgb.g, rgb.b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

export function getContrastScore(ratio: number): { level: string; aa: boolean; aaa: boolean; aaLarge: boolean; aaaLarge: boolean } {
  return {
    level: ratio >= 7 ? "Excellent" : ratio >= 4.5 ? "Good" : ratio >= 3 ? "Fair" : "Poor",
    aa: ratio >= 4.5,
    aaa: ratio >= 7,
    aaLarge: ratio >= 3,
    aaaLarge: ratio >= 4.5,
  };
}

export function generateHarmoniousPalette(): string[] {
  const baseHue = Math.floor(Math.random() * 360);
  const schemes = [
    [0, 30, 60, 180, 210],
    [0, 120, 240, 60, 300],
    [0, 180, 90, 270, 45],
    [0, 60, 120, 180, 240],
    [0, 72, 144, 216, 288],
  ];
  const scheme = schemes[Math.floor(Math.random() * schemes.length)];
  const s = 60 + Math.floor(Math.random() * 30);
  const l = 45 + Math.floor(Math.random() * 20);
  return scheme.map((offset) => hslToHex((baseHue + offset) % 360, s, l));
}

export function getTextColor(bgHex: string): string {
  return getLuminance(bgHex) > 0.5 ? "#000000" : "#ffffff";
}

/* ── RGB ↔ HSV ─────────────────────────────────────────────── */
export function hexToHsv(hex: string): { h: number; s: number; v: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const d = max - min;
  let h = 0, s = max === 0 ? 0 : d / max, v = max;
  if (d !== 0) {
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), v: Math.round(v * 100) };
}

export function hsvToHex(h: number, s: number, v: number): string {
  s /= 100; v /= 100;
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;
  if (h < 60) { r = c; g = x; }
  else if (h < 120) { r = x; g = c; }
  else if (h < 180) { g = c; b = x; }
  else if (h < 240) { g = x; b = c; }
  else if (h < 300) { r = x; b = c; }
  else { r = c; b = x; }
  return rgbToHex(Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255));
}

/* ── RGB ↔ CMYK (approx) ───────────────────────────────────── */
export function hexToCmyk(hex: string): { c: number; m: number; y: number; k: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
  const k = 1 - Math.max(r, g, b);
  const c = k === 1 ? 0 : (1 - r - k) / (1 - k);
  const m = k === 1 ? 0 : (1 - g - k) / (1 - k);
  const y = k === 1 ? 0 : (1 - b - k) / (1 - k);
  return { c: Math.round(c * 100), m: Math.round(m * 100), y: Math.round(y * 100), k: Math.round(k * 100) };
}

/* ── Mix / Blend ────────────────────────────────────────────── */
export function mixColors(hex1: string, hex2: string, weight: number = 0.5): string {
  const rgb1 = hexToRgb(hex1), rgb2 = hexToRgb(hex2);
  if (!rgb1 || !rgb2) return hex1;
  const w = Math.max(0, Math.min(1, weight));
  return rgbToHex(
    Math.round(rgb1.r * (1 - w) + rgb2.r * w),
    Math.round(rgb1.g * (1 - w) + rgb2.g * w),
    Math.round(rgb1.b * (1 - w) + rgb2.b * w)
  );
}

/* ── Shades, Tints, Tones ──────────────────────────────────── */
export function generateShades(hex: string, count: number = 10): string[] {
  const hsl = hexToHsl(hex);
  if (!hsl) return [];
  return Array.from({ length: count }, (_, i) => {
    const l = Math.round((hsl.l / count) * (i + 1));
    return hslToHex(hsl.h, hsl.s, l);
  });
}

export function generateTints(hex: string, count: number = 10): string[] {
  const hsl = hexToHsl(hex);
  if (!hsl) return [];
  return Array.from({ length: count }, (_, i) => {
    const l = Math.round(hsl.l + ((100 - hsl.l) / count) * (i + 1));
    return hslToHex(hsl.h, hsl.s, Math.min(100, l));
  });
}

export function generateTones(hex: string, count: number = 10): string[] {
  const hsl = hexToHsl(hex);
  if (!hsl) return [];
  return Array.from({ length: count }, (_, i) => {
    const s = Math.round((hsl.s / count) * (i + 1));
    return hslToHex(hsl.h, s, hsl.l);
  });
}

/* ── Pastel & Neon ──────────────────────────────────────────── */
export function generatePastelColors(count: number = 10): string[] {
  return Array.from({ length: count }, () => {
    const h = Math.floor(Math.random() * 360);
    return hslToHex(h, 60 + Math.floor(Math.random() * 20), 80 + Math.floor(Math.random() * 15));
  });
}

export function generateNeonColors(count: number = 10): string[] {
  return Array.from({ length: count }, () => {
    const h = Math.floor(Math.random() * 360);
    return hslToHex(h, 90 + Math.floor(Math.random() * 10), 50 + Math.floor(Math.random() * 10));
  });
}

/* ── Harmony ─────────────────────────────────────────────────── */
export function getComplementaryColor(hex: string): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  return hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l);
}

export function getAnalogousColors(hex: string): string[] {
  const hsl = hexToHsl(hex);
  if (!hsl) return [hex];
  return [
    hslToHex((hsl.h - 30 + 360) % 360, hsl.s, hsl.l),
    hex,
    hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l),
  ];
}

export function getTriadicColors(hex: string): string[] {
  const hsl = hexToHsl(hex);
  if (!hsl) return [hex];
  return [hex, hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l), hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l)];
}

export function getSplitComplementaryColors(hex: string): string[] {
  const hsl = hexToHsl(hex);
  if (!hsl) return [hex];
  return [
    hex,
    hslToHex((hsl.h + 150) % 360, hsl.s, hsl.l),
    hslToHex((hsl.h + 210) % 360, hsl.s, hsl.l),
  ];
}

export function getTetradicColors(hex: string): string[] {
  const hsl = hexToHsl(hex);
  if (!hsl) return [hex];
  return [
    hex,
    hslToHex((hsl.h + 90) % 360, hsl.s, hsl.l),
    hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l),
    hslToHex((hsl.h + 270) % 360, hsl.s, hsl.l),
  ];
}

/* ── Color Name Lookup (simplified top 140) ────────────────── */
const namedColors: Record<string, string> = {
  aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4",
  azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000",
  blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a",
  burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e",
  coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c",
  cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc",
  darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3",
  deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969",
  dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22",
  fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700",
  goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f",
  grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c",
  indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa",
  lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6",
  lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3",
  lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899",
  lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32",
  linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6",
  olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500",
  orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee",
  palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f",
  pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080",
  rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1",
  saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57",
  seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb",
  slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa",
  springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080",
  thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee",
  wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00",
  yellowgreen: "#9acd32",
};

export function findClosestColorName(hex: string): string {
  const target = hexToRgb(hex);
  if (!target) return "Unknown";
  let bestName = "Unknown";
  let bestDist = Infinity;
  for (const [name, value] of Object.entries(namedColors)) {
    const rgb = hexToRgb(value);
    if (!rgb) continue;
    const dist = Math.sqrt(
      Math.pow(target.r - rgb.r, 2) + Math.pow(target.g - rgb.g, 2) + Math.pow(target.b - rgb.b, 2)
    );
    if (dist < bestDist) {
      bestDist = dist;
      bestName = name;
    }
  }
  return bestName;
}

/* ── Color Blindness Simulation (matrix approx) ──────────────── */
export function simulateProtanopia(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const r = 0.567 * rgb.r + 0.433 * rgb.g;
  const g = 0.558 * rgb.r + 0.442 * rgb.g;
  const b = 0.242 * rgb.g + 0.758 * rgb.b;
  return rgbToHex(Math.round(r), Math.round(g), Math.round(b));
}

export function simulateDeuteranopia(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const r = 0.625 * rgb.r + 0.375 * rgb.g;
  const g = 0.7 * rgb.r + 0.3 * rgb.g;
  const b = 0.3 * rgb.g + 0.7 * rgb.b;
  return rgbToHex(Math.round(r), Math.round(g), Math.round(b));
}

export function simulateTritanopia(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const r = 0.95 * rgb.r + 0.05 * rgb.g;
  const g = 0.433 * rgb.r + 0.567 * rgb.g;
  const b = 0.475 * rgb.r + 0.525 * rgb.g;
  return rgbToHex(Math.round(r), Math.round(g), Math.round(b));
}

/* ── Extract dominant colors from canvas pixels ────────────── */
export function extractDominantColors(pixelData: Uint8ClampedArray, count: number = 5): string[] {
  const step = Math.floor(pixelData.length / 4 / (count * 50));
  const samples: { r: number; g: number; b: number }[] = [];
  for (let i = 0; i < pixelData.length; i += 4 * Math.max(1, step)) {
    samples.push({ r: pixelData[i], g: pixelData[i + 1], b: pixelData[i + 2] });
  }
  // Simple k-means-ish: pick most distinct colors
  const palette: string[] = [];
  for (const sample of samples) {
    const hex = rgbToHex(sample.r, sample.g, sample.b);
    let distinct = true;
    for (const existing of palette) {
      const e = hexToRgb(existing)!;
      const dist = Math.sqrt(Math.pow(sample.r - e.r, 2) + Math.pow(sample.g - e.g, 2) + Math.pow(sample.b - e.b, 2));
      if (dist < 60) { distinct = false; break; }
    }
    if (distinct) palette.push(hex);
    if (palette.length >= count) break;
  }
  return palette;
}
