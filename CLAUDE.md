# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A React + Vite static site: the S6 competency portfolio for a BUT3 Informatique student (Enzo Saccone, parcours *Réalisation d'applications*, IUT Lyon 1), required for the final oral defense. This is not a showcase site — it's a graded deliverable scored out of 100 against a fixed rubric, and every design/content decision should trace back to that rubric. It has two jobs at once — a personal showcase and a portfolio that maps missions/internships to the French national skills referential (*référentiel*). `PRODUCT.md` has the full rubric and constraints; `DESIGN.md` has the full visual system spec. Read both before making product or visual decisions — this section only covers what changes how you write code.

Repo: `github.com/Sawuto/portfolio-but3`. Live: `https://sawuto.github.io/portfolio-but3/`.

Rubric point breakdown (100 total): 30 auto-évaluation/posture réflexive (oral, site supports it), 25 lien avec le référentiel (site), 20 présentation des missions + accès aux traces (site), 15 rédaction/mise en forme (site), 10 respect du temps (oral, 5 min — timing penalties are steep: 30s off is A+, 1min off is B).

## Commands

```bash
npm install
npm run dev          # http://localhost:5173
npm run build         # → dist/
npm run preview       # serve the build to sanity-check before publishing (port 4173)
```

No test suite, linter, or type checker is configured. Verify changes with `npm run build && npm run preview` and manual keyboard-only navigation.

Deployment is automatic: `.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. Never hand-push `dist/`.

## The one file that holds content

**`src/content/portfolio.js`** is the only file meant to change routinely — it holds every piece of actual portfolio content (identity, missions/`stations`, competency self-assessments/`sondes`, traces/evidence links, the S4→S6 progression). Code changes (components, styles, data model) are a different kind of task than content edits; don't conflate them. Missing fields use the `A_REMPLIR('hint')` sentinel (see `estARemplir` in `src/lib/sondes.js`), which renders as a dotted-underline "en travaux" marker via `Champ` and is aggregated into the "avis de travaux" banner on the homepage — never fabricate content to fill a gap, use `A_REMPLIR` instead.

**`src/data/referentiel.js`** is the national skills referential, quoted verbatim from RNCP35475. The grading rubric specifically penalizes paraphrasing it — never reword competency or *apprentissage critique* labels here or anywhere they're referenced from `portfolio.js`.

**Confidentiality — this site is public.** Never let any of the following appear, in content or in code: client/employer organization names, colleague/classmate/teacher names, ticket numbers, branch names, product version numbers, internal table/column/class names, internal hostnames or environment names, third-party account identifiers (except classmates' own repo URLs, which are deliberately excluded from public rendering — see the `prive` flag below), postal address, birth date, student ID numbers, or demo credentials. Alternance missions are described functionally: what it solves, for whom, what approach — never the underlying implementation specifics that would identify the client.

A trace/repo entry with `prive: true` (see usage in `Sections.jsx`) must never render as a clickable link — it would 404 for the jury. Respect that flag; don't work around it.

## Architecture

**Domain vocabulary (transit-map metaphor) governs the whole codebase** — component names, data shapes, and prose all use it, and it's not decorative:
- *ligne* (line) = one of the 6 national competencies (`c1`…`c6`)
- *zone* = a competency level/niveau
- *station* = a mission/SAÉ/project (`stations[]` in `portfolio.js`)
- *sonde* (sounding) = a self-assessed competency level attached to a station, with `niveau`, `ac` (apprentissages critiques mobilized), and a `justification`
- *correspondance* = a station that touches multiple competencies (interaction highlight in `Reseau.jsx`)
- *terminus* = the max level the RA track actually reaches for that competency (3 for c1/c2/c3, capped at 2 for the other three — `niveauMaxParcours` in `referentiel.js`)
- *levé* (survey/leve) = S4 vs S6 snapshot of the self-assessment

**Data flow**: `portfolio.js` (content) + `referentiel.js` (fixed national reference) → `src/lib/sondes.js` (all aggregation/validation logic) → components read the aggregated shape, never raw content directly for anything involving levels or competencies.

- `releve()` aggregates every station's `sondes` per competency per *levé* (S4/S6), taking the max level per levé; `monteeEnCompetence` entries in `portfolio.js` can override the computed level directly. If literally no sonde exists anywhere, it falls back to `exempleDeLeve` (clearly stamped as a placeholder, never confused with real data).
- `anomalies()` implements the two named grading-rubric traps: a station with exactly one *sonde* (likely under-attributing a multi-competency mission) and any *sonde* whose `ac` label doesn't match the referential verbatim, or exceeds a competency's `niveauMaxParcours`.
- `avancement()` walks all content fields and produces the `manques` (missing-field) list and completion percentage shown in the homepage "avis de travaux".

**Routing** (`src/lib/routeur.js`): hand-rolled, no dependency, fragment-based, two disjoint shapes — `#/ligne/c1` (a competency page, matched by the `#/ligne/` prefix) vs `#ancre` (a homepage anchor). This is deliberate so the built site stays servable as static files with zero server rewrite rules. `base: './'` in `vite.config.js` is likewise required for GitHub Pages subpath deployment — don't remove it.

**Rendering content safely**: always go through `Champ`/`ChampProse`/`ChampListe` (`src/components/Champ.jsx`) to render any value sourced from `portfolio.js`, rather than interpolating it directly — these are what turn an unfilled `A_REMPLIR` sentinel into the "en travaux" marker instead of a broken render or a false-looking blank.

**Components**:
- `Reseau.jsx` — the network diagram (homepage), including the correspondance-highlight interaction
- `PageLigne.jsx` — one competency's page (`#/ligne/cN`) plus the `IndexLignes` homepage summary
- `Sections.jsx` — missions, trajet, itinéraire, notice sections (homepage)
- `ModeSoutenance.jsx` — the timed, scripted defense-mode overlay (`S` key), 5-minute countdown through fixed steps, arrow-key navigation
- `Icones.jsx` — hand-drawn icon set (no unicode-as-icon, per `DESIGN.md`)

## Product constraints that shape code decisions

From `PRODUCT.md` / `DESIGN.md` — these aren't style preferences, they're graded requirements:
- The jury only spends 5 minutes live on this site: default-collapsed `<details>` everywhere except the first view; anything added should ask "does the jury need this open by default?"
- Never let a competency render at a level above its `niveauMaxParcours` without the rubric-violation alert already wired for that case (`plafondDepasse` / the `anomalies()` erreur path). C1/C2/C6 cap at 3, C3/C4/C5 cap at 2 — verified against RNCP35475 and the student's S5 transcript (`BC1-N3`, `BC2-N3`, `BC6-N3`). Note C1's level-3 label in `portfolio.js` intentionally follows the Lyon 1 transcript wording ("Adapter des applications sur un ensemble de supports") rather than the RNCP fiche wording, since the jury reads their own UE transcript — don't "fix" this to match `referentiel.js`.
- Referential text (competency names, *apprentissages critiques*) is always quoted verbatim — enforced in code via `acConnu`/`infosAc` matching against `referentiel.js`, not by convention alone.
- Each trace's `demontre` field should state what it proves *and its limitation* — the rubric's top tier explicitly wants reflection on the traces, not just their presence.
- Justifications are capped at two sentences by convention — the jury has 5 minutes.
- `etatDuLeve.valide` stays `false` until the self-assessed levels have been reread by the student; the site footer announces the levels as provisional until then. Don't flip it yourself.
- One typeface family (Barlow / Barlow Semi Condensed) and the documented color tokens in `DESIGN.md` — no ad hoc new colors or fonts.
- Full keyboard operability is a requirement, not a nicety (the site is piloted live during a projected defense).

## Before committing

`npm run build` must pass. There's no installed test suite; when making non-trivial content or `sondes.js` changes, verify by rendering the homepage and all 6 competency pages and checking: no *apprentissage critique* label is missing from or misattributed in `referentiel.js`, no competency exceeds its parcours terminus, no competency lacks a mission, no station declares only one *sonde*, the ModeSoutenance script totals exactly 300 seconds, no confidential data per the list above leaks into rendered output, and no raw `[object Object]`/sentinel object leaks into HTML (i.e. every `A_REMPLIR()` use goes through `Champ`).
