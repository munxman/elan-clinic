const fs = require('fs');
const path = require('path');

function walk(dir){
  let out=[];
  for (const ent of fs.readdirSync(dir,{withFileTypes:true})){
    const p=path.join(dir,ent.name);
    if(ent.isDirectory()) out=out.concat(walk(p));
    else if(ent.isFile() && ent.name.toLowerCase().endsWith('.html')) out.push(p);
  }
  return out;
}

function firstMatch(re,s){
  const m = re.exec(s);
  return m?m[1].replace(/\s+/g,' ').trim():'';
}

const root=process.cwd();
const files=walk(root).sort();
for(const f of files){
  const c=fs.readFileSync(f,'utf8');
  const rel=path.relative(root,f).replace(/\\/g,'/');
  const title=firstMatch(/<title[^>]*>([\s\S]*?)<\/title>/i,c);
  const h1=firstMatch(/<h1[^>]*>([\s\S]*?)<\/h1>/i,c).replace(/<[^>]+>/g,'').trim();
  const desc=firstMatch(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i,c);
  const canonical=firstMatch(/<link\s+rel=["']canonical["']\s+href=["']([\s\S]*?)["']/i,c);
  const lang=firstMatch(/<html[^>]+lang=["']([\s\S]*?)["']/i,c);
  const noindex=/<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i.test(c);
  const schemaTypes=[...new Set([...c.matchAll(/"@type"\s*:\s*"(.*?)"/g)].map(m=>m[1]))].join(',');
  console.log(JSON.stringify({path:rel,title,h1,desc,canonical,lang,noindex,schema:schemaTypes}));
}
