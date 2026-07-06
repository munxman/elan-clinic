# ⚠️ NOT THE LIVE SITE ⚠️

**This repository is NOT deployed to elanclinic.ee.**

The live site at https://elanclinic.ee is hosted on **Zone.ee (veebimajutus.ee)** via **FTP**.

## Where the live source lives

```
/Users/lasagnelatte/.openclaw/workspace/elan-website/
```

Deployed via FTP per `~/.openclaw/workspace/skills/website-deploy/SKILL.md`.

## Status of this repo

- **Purpose:** Backup / experimental / staging playground only
- **Do NOT edit and expect changes to appear on elanclinic.ee**
- **Do NOT delete** — kept as a backup / rebuild reference in case Zone.ee is ever lost
- GitHub Pages build for this repo has been retired

## If you (or an agent) landed here trying to fix the live site

STOP. Open the workspace directory instead:

```bash
cd /Users/lasagnelatte/.openclaw/workspace/elan-website/
```

And follow the deploy skill:

```bash
cat ~/.openclaw/workspace/skills/website-deploy/SKILL.md
```

## Verifying which site is live

```bash
curl -sI https://elanclinic.ee/et.html | head -3
# Response header 'server: Apache' → Zone.ee (live)
# Response header 'server: GitHub.com' → GitHub Pages (this repo, NOT live)
```

---

_Flag added 2026-07-07 after a full evening of edits landed in the wrong repo._
