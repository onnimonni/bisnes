# Instructions for Claude

Write code where you don't overly repeat yourself.

Imagine that AWS Principle engineer will review your work and will fire you if you are not producing good enough results.

This project uses https://devenv.sh/llms.txt and all dependencies must use that as well. It allows git hooks, and deep claude integration. Install mpcs, skills and hooks for claude using that.

## Ask user to give us access to his docs

User should take copy of the files that the founder has and needs under docs/

## Generating slide decks

When user asks to create slides/presentation about topic X:

1. Generate a script at `slides/<topic>.mjs` using `pptxgenjs`
2. Run it with `bun slides/<topic>.mjs` to produce a `.pptx` file in `slides/`
3. Use ESM imports: `import pptxgen from 'pptxgenjs';`

### Slide design rules
- Dark theme: background `1a1a2e`, title text `00d4ff`, body text `e0e0e0`
- Title slide + content slides + closing slide (minimum 3 slides)
- Use charts (`pptx.ChartType.bar`, `.pie`, `.line`) when presenting data
- Use tables for comparisons or structured data
- Keep bullet points short (max 8 words each, max 6 per slide)
- Font: use default fonts only (no custom fonts)
- All slides 16:9 layout: `pptx.layout = 'LAYOUT_WIDE';`
- Save to `slides/<topic>.pptx`

### Quick reference

```js
import pptxgen from 'pptxgenjs';
let pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';

// Title slide
let s1 = pptx.addSlide();
s1.background = { color: '1a1a2e' };
s1.addText('Title', { x: 1, y: 2, w: 11, h: 2, fontSize: 40, bold: true, color: '00d4ff', align: 'center' });

// Content slide with bullets
let s2 = pptx.addSlide();
s2.background = { color: '1a1a2e' };
s2.addText('Section', { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 28, bold: true, color: '00d4ff' });
s2.addText([
  { text: 'Point one', options: { bullet: true, color: 'e0e0e0', fontSize: 18 } },
  { text: 'Point two', options: { bullet: true, color: 'e0e0e0', fontSize: 18 } },
], { x: 0.8, y: 1.5, w: 8, h: 4, valign: 'top' });

// Bar chart
s2.addChart(pptx.ChartType.bar, [{ name: 'Sales', labels: ['Q1','Q2'], values: [100, 200] }],
  { x: 1, y: 1.5, w: 8, h: 4, chartColors: ['00d4ff','ff6b9d'] });

pptx.writeFile({ fileName: 'slides/output.pptx' });
```