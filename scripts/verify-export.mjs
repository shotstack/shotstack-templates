/**
 * Fidelity check: re-fetches the CMS and confirms every exported template.json
 * is value-identical to the CMS `json` field (deep equality after parsing —
 * the export pretty-prints, so bytes differ but no key, value or ordering may).
 * Also flags high-precision number literals in the raw CMS text that JSON
 * parsing could round, and any folder/CMS set mismatch.
 *
 *   STRAPI_BASE_URL=... STRAPI_TOKEN=... node scripts/verify-export.mjs <repo dir>
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const repo = process.argv[2];
const base = process.env.STRAPI_BASE_URL;
const token = process.env.STRAPI_TOKEN;
if (!repo || !base || !token) {
  console.error('Usage: STRAPI_BASE_URL=... STRAPI_TOKEN=... node verify-export.mjs <repo dir>');
  process.exit(1);
}

const all = [];
for (let page = 1; ; page++) {
  const res = await fetch(
    `${base}/api/studio-templates?pagination[page]=${page}&pagination[pageSize]=100&sort=slug`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error(`CMS request failed: HTTP ${res.status}`);
  const body = await res.json();
  all.push(...body.data.map((item) => item.attributes ?? item));
  if (body.meta.pagination.page >= body.meta.pagination.pageCount) break;
}
const slugs = new Set(all.map((a) => a.slug));
const canonical = all.filter((a) => !(slugs.has(`${a.slug}-v2`) && !a.showInV2Dashboard));

function deepEqual(x, y, path = '$') {
  if (Object.is(x, y)) return null;
  if (typeof x !== typeof y || x === null || y === null) return path;
  if (Array.isArray(x) !== Array.isArray(y)) return path;
  if (typeof x !== 'object') return path;
  const xk = Object.keys(x);
  const yk = Object.keys(y);
  if (xk.length !== yk.length) return `${path} (key count ${xk.length} vs ${yk.length})`;
  for (let i = 0; i < xk.length; i++) {
    if (xk[i] !== yk[i]) return `${path} (key order/name: ${xk[i]} vs ${yk[i]})`;
    const bad = deepEqual(x[xk[i]], y[yk[i]], `${path}.${xk[i]}`);
    if (bad) return bad;
  }
  return null;
}

const folders = new Set(readdirSync(join(repo, 'templates')));
const expected = new Set(canonical.map((a) => a.slug));
const problems = [];

for (const slug of folders) if (!expected.has(slug)) problems.push(`extra folder not in CMS canonical set: ${slug}`);
for (const a of canonical) {
  const slug = a.slug;
  if (!folders.has(slug)) {
    problems.push(`missing folder: ${slug}`);
    continue;
  }
  const raw = typeof a.json === 'string' ? a.json : JSON.stringify(a.json);
  // Flag only literals that actually change value when parsed as a double —
  // an exact round-trip (JSON.stringify(Number(lit)) === lit) loses nothing.
  const risky = (raw.match(/-?\d[\d.]{16,}(?:[eE][+-]?\d+)?/g) ?? []).filter(
    (lit) => JSON.stringify(Number(lit)) !== lit.replace(/^(-?)0+(?=\d)/, '$1')
  );
  if (risky.length) problems.push(`${slug}: lossy number literal(s) in CMS text: ${[...new Set(risky)].join(', ')}`);
  let cms, file;
  try {
    cms = JSON.parse(raw);
  } catch {
    problems.push(`${slug}: CMS json unparseable`);
    continue;
  }
  try {
    file = JSON.parse(readFileSync(join(repo, 'templates', slug, 'template.json'), 'utf8'));
  } catch {
    problems.push(`${slug}: repo template.json missing/unparseable`);
    continue;
  }
  const diff = deepEqual(cms, file);
  if (diff) problems.push(`${slug}: MISMATCH at ${diff}`);
}

console.log(`CMS canonical: ${canonical.length} · repo folders: ${folders.size}`);
if (problems.length) {
  console.log(`PROBLEMS (${problems.length}):\n  ${problems.join('\n  ')}`);
  process.exit(1);
}
console.log('OK: every exported template.json is value-identical to its CMS source (keys, order, values).');
