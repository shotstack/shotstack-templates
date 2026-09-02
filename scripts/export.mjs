/**
 * One-time exporter: pulls the live Studio templates from the Shotstack CMS and
 * writes one folder per template (template.json + README.md) plus the root README.
 *
 * Only the canonical copy of each template is exported: where a `-v2` twin exists,
 * the old-dashboard original is skipped — the same rule the website's template hub
 * uses to hide duplicates.
 *
 * Usage (env vars via your secret manager; the output dir must be absolute):
 *   STRAPI_BASE_URL=... STRAPI_TOKEN=... node scripts/export.mjs C:\path\to\shotstack-templates
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://shotstack.io';
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const RESOLUTIONS = { preview: [512, 288], mobile: [640, 360], sd: [1024, 576], hd: [1280, 720], 1080: [1920, 1080] };

const outDir = process.argv[2];
const base = process.env.STRAPI_BASE_URL;
const token = process.env.STRAPI_TOKEN;
if (!outDir || !base || !token) {
  console.error('Usage: STRAPI_BASE_URL=... STRAPI_TOKEN=... node export.mjs <absolute output dir>');
  process.exit(1);
}

// --- fetch every published template (paginated) ---
async function fetchAll() {
  const all = [];
  for (let page = 1; ; page++) {
    const url = `${base}/api/studio-templates?populate[category]=true&populate[thumbnail]=true&pagination[page]=${page}&pagination[pageSize]=100&sort=slug`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) throw new Error(`CMS request failed: HTTP ${res.status}`);
    const body = await res.json();
    all.push(...body.data.map((item) => item.attributes ?? item));
    const { page: p, pageCount } = body.meta.pagination;
    if (p >= pageCount) return all;
  }
}

// --- minimal spec derivation from the Edit JSON (mirrors the website's template-derive) ---
function deriveSpec(jsonString) {
  let edit = {};
  try {
    edit = JSON.parse(jsonString);
  } catch {
    return null;
  }
  const output = edit.output ?? {};
  const clips = (edit.timeline?.tracks ?? []).flatMap((t) => t.clips ?? []);
  let width = typeof output.size?.width === 'number' ? output.size.width : undefined;
  let height = typeof output.size?.height === 'number' ? output.size.height : undefined;
  if ((!width || !height) && output.resolution && RESOLUTIONS[output.resolution]) {
    [width, height] = RESOLUTIONS[output.resolution];
    if (output.aspectRatio === '9:16') [width, height] = [height, width];
    if (output.aspectRatio === '1:1') width = height;
  }
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const aspect =
    output.aspectRatio ??
    (Number.isInteger(width) && Number.isInteger(height) && width > 0 && height > 0
      ? `${width / gcd(width, height)}:${height / gcd(width, height)}`
      : undefined);
  let end = 0;
  for (const clip of clips) {
    if (typeof clip.start === 'number' && typeof clip.length === 'number') end = Math.max(end, clip.start + clip.length);
  }
  return {
    edit,
    format: output.format ?? 'mp4',
    aspect,
    durationSec: end > 0 ? Math.round(end * 10) / 10 : undefined,
    mergeFields: edit.merge ?? []
  };
}

const cell = (value) => String(value ?? '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
const rel = (attr) => attr?.data?.attributes ?? attr; // v4 relation shape or flattened

function templateReadme(a, spec, slug) {
  const category = rel(a.category)?.label ?? rel(a.category)?.name ?? 'Other';
  const thumb = rel(a.thumbnail)?.url;
  const description = a.seo?.description ?? `A ${a.type?.toLowerCase() ?? 'video'} template for the Shotstack Edit API.`;
  const facts = [
    `**Type:** ${a.type ?? 'Video'}`,
    spec.aspect && `**Aspect:** ${spec.aspect}`,
    spec.durationSec && `**Duration:** ${spec.durationSec}s`,
    `**Format:** ${spec.format}`,
    `**Category:** ${category}`
  ].filter(Boolean);
  const header = spec.mergeFields.map((m) => m.find.toLowerCase()).join(',');
  const mergeSection = spec.mergeFields.length
    ? `## Merge fields

Each CSV column overrides the merge field of the same name; missing columns keep the default.

\`data.csv\` header row:

\`\`\`
${header}
\`\`\`

| Field | Default value |
| --- | --- |
${spec.mergeFields.map((m) => `| \`${cell(m.find)}\` | ${cell(m.replace)} |`).join('\n')}
`
    : `## Merge fields

This template has no merge fields — render it as-is, or edit \`template.json\` directly.
`;
  return `# ${a.heading ?? slug}

${description}

${facts.join(' · ')}

${thumb ? `![${cell(a.heading ?? slug)} preview](${thumb})\n` : ''}
[**Preview and customise this template on shotstack.io →**](${SITE}/studio/templates/${slug}/)

## Render a batch from the command line

\`template.json\` is the full [Shotstack Edit API](${SITE}/docs/api/) payload. From the repo root:

\`\`\`sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/${slug}
\`\`\`

One video is rendered per \`data.csv\` row (free, watermarked sandbox renders — [get a key](https://dashboard.shotstack.io/register)).

${mergeSection}
---

Also works with the [Shotstack MCP server](${SITE}/docs/guide/agents/mcp-server/): give your AI assistant this folder's \`template.json\` and ask it to adapt the template to your data.
`;
}

function rootReadme(groups, total) {
  const sections = [...groups.entries()]
    .sort(([a], [b]) => (a === 'Other' ? 1 : b === 'Other' ? -1 : a.localeCompare(b)))
    .map(
      ([label, items]) =>
        `### ${label}\n\n${items.map((t) => `- [${t.heading}](templates/${t.slug}/) — [live preview](${SITE}/studio/templates/${t.slug}/)`).join('\n')}`
    )
    .join('\n\n');
  return `# Shotstack Studio Templates

${total} ready-to-render video, image and audio templates for the [Shotstack Edit API](${SITE}/docs/api/) —
the cloud video editing API. Every folder contains the template's full Edit API JSON (\`template.json\`)
and a README with its merge fields, so you can render it, batch-personalise it, or hand it to an AI assistant.

## Quick start

\`\`\`sh
npm install csv-parse
SHOTSTACK_API_KEY=your_sandbox_key node render.mjs templates/<slug>
\`\`\`

[render.mjs](render.mjs) renders any template once per row of a \`data.csv\` you put in its folder —
each column overrides the merge field of the same name. Sandbox renders are free and watermarked
([get a key](https://dashboard.shotstack.io/register)).

Prefer a UI? Every template links to its page on [shotstack.io/studio/templates](${SITE}/studio/templates/),
where you can preview it, open it in the Studio editor, or send it to your AI assistant via the
[Shotstack MCP server](${SITE}/docs/guide/agents/mcp-server/).

## Templates

${sections}

## License

[PolyForm Shield 1.0.0](LICENSE) — © Shotstack Pty Ltd. The media assets the templates reference
(hosted on \`templates.shotstack.io\`) remain the property of Shotstack Pty Ltd and may only be used
with the Shotstack platform, per the [Terms of Service](${SITE}/terms/).
`;
}

// --- main ---
const items = await fetchAll();
const slugs = new Set(items.map((a) => a.slug));
const canonical = items.filter((a) => !(slugs.has(`${a.slug}-v2`) && !a.showInV2Dashboard));

const groups = new Map();
let written = 0;
const skipped = [];
for (const a of canonical) {
  const slug = a.slug ?? '';
  if (!SLUG_RE.test(slug)) {
    skipped.push(`${slug || '(no slug)'}: invalid slug`);
    continue;
  }
  const jsonString = typeof a.json === 'string' ? a.json : a.json ? JSON.stringify(a.json) : '';
  const spec = jsonString ? deriveSpec(jsonString) : null;
  if (!spec) {
    skipped.push(`${slug}: missing or unparseable template JSON`);
    continue;
  }
  const dir = join(outDir, 'templates', slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'template.json'), JSON.stringify(spec.edit, null, 2) + '\n');
  writeFileSync(join(dir, 'README.md'), templateReadme(a, spec, slug));
  const label = rel(a.category)?.label ?? rel(a.category)?.name ?? 'Other';
  if (!groups.has(label)) groups.set(label, []);
  groups.get(label).push({ slug, heading: a.heading ?? slug });
  written++;
}

writeFileSync(join(outDir, 'README.md'), rootReadme(groups, written));

console.log(`Fetched ${items.length} templates; ${canonical.length} canonical after twin filter; wrote ${written}.`);
if (skipped.length) console.log(`Skipped:\n  ${skipped.join('\n  ')}`);
