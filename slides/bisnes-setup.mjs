import pptxgen from 'pptxgenjs';

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';

const BG = '1a1a2e';
const ACCENT = '00d4ff';
const TEXT = 'e0e0e0';
const PINK = 'ff6b9d';
const PURPLE = 'c44dff';
const DARK_CARD = '16213e';

function addSlideBase(opts = {}) {
  const slide = pptx.addSlide();
  slide.background = { color: BG };
  if (opts.title) {
    slide.addText(opts.title, {
      x: 0.5, y: 0.3, w: 12, h: 0.8,
      fontSize: 28, bold: true, color: ACCENT,
    });
  }
  return slide;
}

function bullets(items) {
  return items.map(text => ({
    text,
    options: { bullet: true, color: TEXT, fontSize: 18, breakLine: true },
  }));
}

// --- Slide 1: Title ---
const s1 = addSlideBase();
s1.addText('bisnes', {
  x: 1, y: 1.5, w: 11, h: 1.5,
  fontSize: 52, bold: true, color: ACCENT, align: 'center',
  fontFace: 'Arial',
});
s1.addText('The AI-native starter template\nfor building billion dollar businesses', {
  x: 1, y: 3.2, w: 11, h: 1.5,
  fontSize: 24, color: TEXT, align: 'center',
});
s1.addText('One file. Fully reproducible. AI-first.', {
  x: 1, y: 5, w: 11, h: 0.6,
  fontSize: 16, color: PURPLE, align: 'center', italic: true,
});

// --- Slide 2: The Problem ---
const s2 = addSlideBase({ title: 'The Problem' });
s2.addText(bullets([
  'Founders waste weeks on setup',
  'Docker + Makefile + CI = config sprawl',
  '"Works on my machine" kills teams',
  'AI agents can\'t navigate messy configs',
  'Onboarding new devs takes days',
]), { x: 0.8, y: 1.5, w: 8, h: 4, valign: 'top' });

s2.addShape(pptx.ShapeType.roundRect, {
  x: 9, y: 1.8, w: 3.5, h: 3.5,
  fill: { color: DARK_CARD },
  rectRadius: 0.2,
});
s2.addText('Avg setup time\nfor new projects', {
  x: 9.2, y: 2, w: 3.1, h: 1, fontSize: 14, color: TEXT, align: 'center',
});
s2.addText('2-5 days', {
  x: 9.2, y: 3, w: 3.1, h: 1.2,
  fontSize: 36, bold: true, color: PINK, align: 'center',
});
s2.addText('wasted before writing\nany business logic', {
  x: 9.2, y: 4.2, w: 3.1, h: 0.8, fontSize: 12, color: TEXT, align: 'center',
});

// --- Slide 3: The Solution ---
const s3 = addSlideBase({ title: 'The Solution: devenv.nix' });
s3.addText('Everything declared in one file', {
  x: 0.5, y: 1.3, w: 12, h: 0.6, fontSize: 18, color: PURPLE, italic: true,
});

const boxes = [
  { label: 'Languages', desc: 'Elixir, JS, Rust...', icon: '{ }' },
  { label: 'Services', desc: 'Postgres, Redis...', icon: '◆' },
  { label: 'Tools', desc: 'Git hooks, linters', icon: '⚙' },
  { label: 'AI Agents', desc: 'MCP servers, perms', icon: '◉' },
];

boxes.forEach((box, i) => {
  const xPos = 0.5 + i * 3.1;
  s3.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: 2.2, w: 2.8, h: 3.5,
    fill: { color: DARK_CARD }, rectRadius: 0.2,
    line: { color: ACCENT, width: 1 },
  });
  s3.addText(box.icon, {
    x: xPos, y: 2.4, w: 2.8, h: 0.8,
    fontSize: 28, color: ACCENT, align: 'center',
  });
  s3.addText(box.label, {
    x: xPos, y: 3.3, w: 2.8, h: 0.6,
    fontSize: 20, bold: true, color: TEXT, align: 'center',
  });
  s3.addText(box.desc, {
    x: xPos, y: 4, w: 2.8, h: 0.6,
    fontSize: 14, color: TEXT, align: 'center',
  });
});

// --- Slide 4: Why AI-Native ---
const s4 = addSlideBase({ title: 'Why AI-Native Matters' });

const comparison = [
  [
    { text: '', options: { fill: { color: DARK_CARD } } },
    { text: 'Traditional', options: { bold: true, color: PINK, fill: { color: DARK_CARD }, align: 'center' } },
    { text: 'bisnes', options: { bold: true, color: ACCENT, fill: { color: DARK_CARD }, align: 'center' } },
  ],
  [
    { text: 'Config files', options: { color: TEXT, fill: { color: BG } } },
    { text: '5-10 scattered', options: { color: TEXT, fill: { color: BG }, align: 'center' } },
    { text: '1 (devenv.nix)', options: { color: TEXT, fill: { color: BG }, align: 'center' } },
  ],
  [
    { text: 'AI can modify', options: { color: TEXT, fill: { color: DARK_CARD } } },
    { text: 'Fragile', options: { color: PINK, fill: { color: DARK_CARD }, align: 'center' } },
    { text: 'Reliable', options: { color: ACCENT, fill: { color: DARK_CARD }, align: 'center' } },
  ],
  [
    { text: 'Reproducible', options: { color: TEXT, fill: { color: BG } } },
    { text: 'Sometimes', options: { color: TEXT, fill: { color: BG }, align: 'center' } },
    { text: 'Always', options: { color: ACCENT, fill: { color: BG }, align: 'center' } },
  ],
  [
    { text: 'Add a service', options: { color: TEXT, fill: { color: DARK_CARD } } },
    { text: 'Docker + config + env', options: { color: TEXT, fill: { color: DARK_CARD }, align: 'center' } },
    { text: 'One line in Nix', options: { color: TEXT, fill: { color: DARK_CARD }, align: 'center' } },
  ],
  [
    { text: 'Onboarding', options: { color: TEXT, fill: { color: BG } } },
    { text: 'Days', options: { color: PINK, fill: { color: BG }, align: 'center' } },
    { text: 'Minutes', options: { color: ACCENT, fill: { color: BG }, align: 'center' } },
  ],
];

s4.addTable(comparison, {
  x: 1, y: 1.5, w: 11, colW: [3, 4, 4],
  fontSize: 16, color: TEXT,
  border: { type: 'solid', pt: 1, color: '2a2a4a' },
  rowH: [0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
});

// --- Slide 5: What's Included ---
const s5 = addSlideBase({ title: 'What\'s Included Out of the Box' });

const features = [
  ['Elixir', 'Production-ready BEAM stack'],
  ['Node.js + npm', 'pptxgenjs, tooling, scripts'],
  ['Playwright MCP', 'AI-driven browser automation'],
  ['Consult LLM MCP', 'Gemini UX review built in'],
  ['Claude Code', 'Permissions & hooks configured'],
  ['Git hooks', 'Lint, test, secrets check'],
];

features.forEach((row, i) => {
  const yPos = 1.4 + i * 0.75;
  const bgColor = i % 2 === 0 ? DARK_CARD : BG;
  s5.addShape(pptx.ShapeType.roundRect, {
    x: 0.5, y: yPos, w: 12, h: 0.65,
    fill: { color: bgColor }, rectRadius: 0.1,
  });
  s5.addText(row[0], {
    x: 0.8, y: yPos, w: 3, h: 0.65,
    fontSize: 18, bold: true, color: ACCENT, valign: 'middle',
  });
  s5.addText(row[1], {
    x: 4, y: yPos, w: 8, h: 0.65,
    fontSize: 16, color: TEXT, valign: 'middle',
  });
});

// --- Slide 6: Developer Experience ---
const s6 = addSlideBase({ title: 'Developer Experience' });

const dxData = [
  { name: 'Setup speed', labels: ['Traditional', 'bisnes'], values: [40, 2] },
];

s6.addChart(pptx.ChartType.bar, dxData, {
  x: 0.5, y: 1.5, w: 5.5, h: 4,
  showTitle: true, title: 'Hours to first commit',
  titleColor: TEXT, titleFontSize: 14,
  showValue: true,
  valueFontSize: 14, valueColor: TEXT,
  chartColors: [PINK, ACCENT],
  catAxisLabelColor: TEXT, catAxisLabelFontSize: 12,
  valAxisLabelColor: TEXT, valAxisHidden: true,
  plotBgrdColor: DARK_CARD,
  showLegend: false,
});

s6.addText(bullets([
  'devenv shell → ready to code',
  'AI reads one file, understands all',
  'No Docker, no Vagrant, no Nix flake',
  'Works on Mac, Linux, WSL2',
]), { x: 6.5, y: 1.5, w: 6, h: 4, valign: 'top' });

// --- Slide 7: How It Works ---
const s7 = addSlideBase({ title: 'How It Works' });
s7.addText('Three commands to launch a business', {
  x: 0.5, y: 1.3, w: 12, h: 0.6, fontSize: 18, color: PURPLE, italic: true,
});

const steps = [
  { num: '1', cmd: 'git clone', desc: 'Clone the template' },
  { num: '2', cmd: 'devenv shell', desc: 'Everything installs' },
  { num: '3', cmd: 'code .', desc: 'Start building' },
];

steps.forEach((step, i) => {
  const xPos = 0.8 + i * 4;
  s7.addShape(pptx.ShapeType.roundRect, {
    x: xPos, y: 2.3, w: 3.5, h: 3,
    fill: { color: DARK_CARD }, rectRadius: 0.2,
    line: { color: ACCENT, width: 1 },
  });
  s7.addText(step.num, {
    x: xPos, y: 2.5, w: 3.5, h: 1,
    fontSize: 36, bold: true, color: ACCENT, align: 'center',
  });
  s7.addText(step.cmd, {
    x: xPos, y: 3.4, w: 3.5, h: 0.7,
    fontSize: 20, bold: true, color: PINK, align: 'center',
    fontFace: 'Courier New',
  });
  s7.addText(step.desc, {
    x: xPos, y: 4.2, w: 3.5, h: 0.6,
    fontSize: 16, color: TEXT, align: 'center',
  });
  if (i < steps.length - 1) {
    s7.addText('→', {
      x: xPos + 3.5, y: 3.2, w: 0.5, h: 0.8,
      fontSize: 28, color: ACCENT, align: 'center', valign: 'middle',
    });
  }
});

// --- Slide 8: Closing ---
const s8 = addSlideBase();
s8.addText('Stop configuring.\nStart building.', {
  x: 1, y: 1.5, w: 11, h: 2,
  fontSize: 44, bold: true, color: ACCENT, align: 'center',
});
s8.addText('github.com/onnimonni/bisnes', {
  x: 1, y: 3.8, w: 11, h: 0.8,
  fontSize: 22, color: PINK, align: 'center',
  fontFace: 'Courier New',
});
s8.addText('Clone it. Ship it. Scale it.', {
  x: 1, y: 5, w: 11, h: 0.6,
  fontSize: 18, color: PURPLE, align: 'center', italic: true,
});

pptx.writeFile({ fileName: 'slides/bisnes-setup.pptx' });
