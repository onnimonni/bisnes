import pptxgen from 'pptxgenjs';

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';

const BG = 'fafaf8';
const ACCENT = '1b5e20';
const TEXT = '212121';
const MUTED = '757575';
const DULL = 'c8c8c8';
const PINK = 'c62828';
const PURPLE = '2e7d32';
const DARK_CARD = 'e8f5e9';
const GREEN = '00c853';

function addSlideBase(opts = {}) {
  const slide = pptx.addSlide();
  slide.background = { color: BG };
  if (opts.title) {
    slide.addText(opts.title, {
      x: 0.8, y: 0.4, w: 11.5, h: 1,
      fontSize: 36, bold: true, color: ACCENT,
    });
  }
  return slide;
}

function bullets(items, fontSize = 24) {
  return items.map(text => ({
    text,
    options: { bullet: true, color: TEXT, fontSize, breakLine: true, lineSpacingMultiple: 1.4 },
  }));
}

// ============================================================
// Slide 1: Title — Big, bold, anchored
// ============================================================
const s1 = addSlideBase();
s1.addText('bisnes', {
  x: 0, y: 1.2, w: '100%', h: 2,
  fontSize: 120, bold: true, color: ACCENT, align: 'center',
  charSpacing: -2,
});
s1.addText('The new standard for AI-native\ndeveloper environments', {
  x: 2, y: 3.4, w: 9, h: 1.5,
  fontSize: 32, color: MUTED, align: 'center',
  lineSpacingMultiple: 1.3,
});
s1.addText('$ devenv shell  # everything installs', {
  x: 3, y: 5.2, w: 7, h: 0.7,
  fontSize: 20, color: GREEN, align: 'center',
  fontFace: 'Courier New',
});

// ============================================================
// Slide 2: The Problem — fewer words, bigger impact
// ============================================================
const s2 = addSlideBase({ title: 'Setup Is the Bottleneck' });

s2.addText(bullets([
  'Config sprawl: Docker + Makefile + CI + .env',
  '"Works on my machine" kills velocity',
  'AI agents choke on scattered configs',
  'New dev onboarding: days, not minutes',
], 26), { x: 1, y: 2.0, w: 7.5, h: 4.5, valign: 'middle' });

s2.addShape(pptx.ShapeType.roundRect, {
  x: 9, y: 2.5, w: 3.5, h: 3.2,
  fill: { color: DARK_CARD }, rectRadius: 0.15,
});
s2.addText('2\u20135 DAYS', {
  x: 9, y: 2.8, w: 3.5, h: 1.5,
  fontSize: 56, bold: true, color: PINK, align: 'center',
});
s2.addText('wasted before writing\na single line of business logic', {
  x: 9.1, y: 4.3, w: 3.3, h: 1,
  fontSize: 16, color: MUTED, align: 'center',
});

// ============================================================
// Slide 3: Before / After — show, don't tell
// ============================================================
const s3 = addSlideBase({ title: 'Before & After' });

// Left: Before
s3.addShape(pptx.ShapeType.roundRect, {
  x: 0.5, y: 1.6, w: 5.8, h: 5,
  fill: { color: DARK_CARD }, rectRadius: 0.15,
});
s3.addText('\u274C Traditional Setup', {
  x: 0.8, y: 1.8, w: 5.2, h: 0.7,
  fontSize: 26, bold: true, color: PINK,
});
s3.addText(
  'Dockerfile\ndocker-compose.yml\nMakefile\n.env.example\n.github/workflows/ci.yml\npackage.json\n.eslintrc.js\n.prettierrc\ntsconfig.json\nJestfile',
  {
    x: 1, y: 2.6, w: 5, h: 3.8,
    fontSize: 18, color: MUTED, fontFace: 'Courier New',
    lineSpacingMultiple: 1.35,
  },
);

// Right: After
s3.addShape(pptx.ShapeType.roundRect, {
  x: 6.8, y: 1.6, w: 5.8, h: 5,
  fill: { color: DARK_CARD }, rectRadius: 0.15,
  line: { color: ACCENT, width: 2 },
});
s3.addText('\u2705 bisnes', {
  x: 7.1, y: 1.8, w: 5.2, h: 0.7,
  fontSize: 26, bold: true, color: ACCENT,
});
s3.addText('devenv.nix', {
  x: 7.3, y: 3.6, w: 5, h: 1,
  fontSize: 36, bold: true, color: TEXT, fontFace: 'Courier New',
});
s3.addText('One file. Every language, service,\ntool, and AI agent.', {
  x: 7.3, y: 4.7, w: 5, h: 1,
  fontSize: 20, color: MUTED,
  lineSpacingMultiple: 1.3,
});

// ============================================================
// Slide 4: Why AI-Native — reframed with visual weight
// ============================================================
const s4 = addSlideBase({ title: 'Built for AI Agent Collaboration' });

// Left column — faded "legacy" card
s4.addShape(pptx.ShapeType.roundRect, {
  x: 0.5, y: 1.6, w: 5.8, h: 4.8,
  fill: { color: 'fbe9e7' }, rectRadius: 0.15,
  line: { color: 'e57373', width: 1.5 },
});
s4.addText('Legacy Stack', {
  x: 0.8, y: 1.8, w: 5.2, h: 0.7,
  fontSize: 28, bold: true, color: PINK, align: 'center',
});
s4.addText('\u274C Agent Unfriendly', {
  x: 0.8, y: 2.6, w: 5.2, h: 0.6,
  fontSize: 22, color: MUTED, align: 'center', italic: true,
});
s4.addText(bullets([
  'Scattered config files',
  'Implicit "magic" scripts',
  'Agents break things',
], 22), { x: 1, y: 3.4, w: 5, h: 2.8 });

// Right column
s4.addShape(pptx.ShapeType.roundRect, {
  x: 6.8, y: 1.6, w: 5.8, h: 4.8,
  fill: { color: DARK_CARD }, rectRadius: 0.15,
  line: { color: ACCENT, width: 2 },
});
s4.addText('bisnes', {
  x: 7.1, y: 1.8, w: 5.2, h: 0.7,
  fontSize: 28, bold: true, color: ACCENT, align: 'center',
});
s4.addText('\u2705 Agent Friendly', {
  x: 7.1, y: 2.6, w: 5.2, h: 0.6,
  fontSize: 22, color: MUTED, align: 'center', italic: true,
});
s4.addText(bullets([
  'Single declarative file',
  'Explicit & reproducible',
  'Agents read & modify safely',
], 22), { x: 7.3, y: 3.4, w: 5, h: 2.8 });

// ============================================================
// Slide 5: Why Now — the missing "secret sauce" slide
// ============================================================
const s5 = addSlideBase({ title: 'Why Now?' });

const reasonRows = [
  [
    { text: '92%', options: { fontSize: 64, bold: true, color: ACCENT, align: 'right', fill: { color: BG } } },
    { text: [
      { text: 'of devs now use AI coding assistants', options: { fontSize: 26, color: TEXT, breakLine: true } },
      { text: 'GitHub Survey 2025', options: { fontSize: 16, color: MUTED, italic: true } },
    ], options: { fill: { color: BG } } },
  ],
  [
    { text: '10x', options: { fontSize: 64, bold: true, color: PINK, align: 'right', fill: { color: BG } } },
    { text: [
      { text: 'more config files per repo vs 2015', options: { fontSize: 26, color: TEXT, breakLine: true } },
      { text: 'DevOps Research', options: { fontSize: 16, color: MUTED, italic: true } },
    ], options: { fill: { color: BG } } },
  ],
  [
    { text: '0', options: { fontSize: 64, bold: true, color: PURPLE, align: 'right', fill: { color: BG } } },
    { text: [
      { text: 'tools that unify env + AI agent config', options: { fontSize: 26, color: TEXT, breakLine: true } },
      { text: 'We checked', options: { fontSize: 16, color: MUTED, italic: true } },
    ], options: { fill: { color: BG } } },
  ],
];

s5.addTable(reasonRows, {
  x: 0.8, y: 1.8, w: 11.5, colW: [3.5, 8],
  rowH: [1.7, 1.7, 1.7],
  border: { pt: 0 },
  valign: 'middle',
});

// ============================================================
// Slide 6: What's Included — bigger text, cleaner table
// ============================================================
const s6 = addSlideBase({ title: 'Production-Ready Stack' });

const features = [
  ['Elixir + Phoenix', 'Production backend on BEAM'],
  ['Bun + Node.js', 'Fast runtime, tooling, scripts'],
  ['AI Browser Agent', 'Playwright browser automation'],
  ['AI UX Agent', 'Gemini for automated UX reviews'],
  ['AI Coding Agent', 'Claude with configured permissions'],
  ['Git Hooks', 'Lint, test, secret scanning'],
];

const featureRows = features.map((row, i) => ([
  { text: row[0], options: { bold: true, color: ACCENT, fill: { color: i % 2 === 0 ? DARK_CARD : BG } } },
  { text: row[1], options: { color: TEXT, fill: { color: i % 2 === 0 ? DARK_CARD : BG } } },
]));

s6.addTable(featureRows, {
  x: 0.8, y: 1.8, w: 11.5, colW: [4, 7.5],
  rowH: features.map(() => 0.9),
  border: { pt: 0 },
  fontSize: 22, color: TEXT,
  valign: 'middle',
});

// ============================================================
// Slide 7: DX — horizontal bars + big contrast
// ============================================================
const s7 = addSlideBase({ title: 'Clone to First Commit' });

const dxData = [
  { name: 'Hours', labels: ['Typical Project', 'bisnes'], values: [40, 0.5] },
];

s7.addChart(pptx.ChartType.bar, dxData, {
  x: 1.0, y: 2.0, w: 11, h: 3.8,
  barDir: 'bar',
  showValue: true, valueFontSize: 20, valueColor: TEXT,
  chartColors: [DULL, GREEN],
  catAxisLabelColor: TEXT, catAxisLabelFontSize: 18,
  valAxisHidden: true,
  plotBgrdColor: 'f0f4f0',
  showLegend: false,
});

s7.addText(
  '80x faster from clone to first commit',
  { x: 1, y: 6.0, w: 11, h: 0.8, fontSize: 24, color: PURPLE, align: 'center', bold: true },
);

// ============================================================
// Slide 8: How It Works — 3 steps, bigger text
// ============================================================
const s8 = addSlideBase({ title: 'Get Started in 3 Commands' });

const steps = [
  { num: '1', cmd: '$ git clone ...', desc: 'Clone the repo' },
  { num: '2', cmd: '$ devenv shell', desc: 'Everything installs' },
  { num: '3', cmd: '$ claude --yolo', desc: 'Start building' },
];

steps.forEach((step, i) => {
  const xPos = 0.6 + i * 4.2;
  s8.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: 2.2, w: 3.6, h: 4.0,
    fill: { color: DARK_CARD }, rectRadius: 0.15,
  });
  s8.addText(step.num, {
    x: xPos + 0.3, y: 2.5, w: 1, h: 0.9,
    fontSize: 40, bold: true, color: ACCENT,
  });
  s8.addText(step.cmd, {
    x: xPos, y: 3.8, w: 3.6, h: 0.8,
    fontSize: 22, color: PINK, align: 'center',
    fontFace: 'Courier New',
  });
  s8.addText(step.desc, {
    x: xPos, y: 4.8, w: 3.6, h: 0.7,
    fontSize: 20, color: TEXT, align: 'center',
  });
  if (i < steps.length - 1) {
    s8.addText('\u2192', {
      x: xPos + 3.6, y: 3.7, w: 0.6, h: 1,
      fontSize: 44, color: ACCENT, align: 'center', valign: 'middle',
    });
  }
});

// ============================================================
// Slide 9: Closing CTA — bold, clean
// ============================================================
const s9 = addSlideBase();
s9.addText('Stop configuring.\nStart building.', {
  x: 0, y: 1.5, w: '100%', h: 2.5,
  fontSize: 64, bold: true, color: ACCENT, align: 'center',
  lineSpacingMultiple: 1.2,
});
s9.addText('github.com/onnimonni/bisnes', {
  x: 0, y: 4.2, w: '100%', h: 1,
  fontSize: 34, color: PINK, align: 'center',
  fontFace: 'Courier New',
  hyperlink: { url: 'https://github.com/onnimonni/bisnes', tooltip: 'Go to repository' },
});
s9.addText('$ devenv shell', {
  x: 0, y: 5.5, w: '100%', h: 0.8,
  fontSize: 24, color: GREEN, align: 'center',
  fontFace: 'Courier New',
});

pptx.writeFile({ fileName: 'slides/bisnes-setup.pptx' });
