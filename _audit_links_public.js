const fs = require('fs');
const path = require('path');

const EXCLUDE_DIRS = new Set(['.git', '_tmp', '_drafts', 'templates', 'sections']);

function walk(dir) {
  let out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (EXCLUDE_DIRS.has(ent.name)) continue;
      out = out.concat(walk(p));
    } else if (ent.isFile() && ent.name.toLowerCase().endsWith('.html')) {
      out.push(p);
    }
  }
  return out;
}

const root = process.cwd();
const files = walk(root);
const out = [];

for (const f of files) {
  const rel = path.relative(root, f).replace(/\\/g, '/');
  const c = fs.readFileSync(f, 'utf8');
  const links = [...c.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi)].map(m => m[1]);
  out.push({ path: rel, links });
}

fs.writeFileSync(path.join(root, '..', 'notes', 'elan-links-public.json'), JSON.stringify(out, null, 2), 'utf8');
console.log('ok', out.length);
