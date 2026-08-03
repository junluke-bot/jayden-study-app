# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A phone-friendly study app for a 10-year-old (Jayden) prepping for the Iowa Assessments. Plain HTML/CSS/JavaScript, no framework, no build step, no package manager, no test suite — everything runs directly from static files. See `jayden-study-app-plan.md` for the original feature plan.

Keep the UI simple and friendly: big tap targets, minimal text, no settings screens. Plain JS only — no build step, no frameworks. Everything must work on a phone browser.

## Running it

There's no dev server or build command. Options:
- Open `index.html` directly in a browser, or
- Serve the folder statically (needed for the service worker to register), e.g. `npx serve` or any static file server, then visit the served `index.html`.

To verify changes actually render (not just parse), drive the page with a headless browser rather than only reading the code — see the `run` skill.

## Architecture

**Data/logic split.** Content lives in standalone data files, each attaching a plain array to `window`; all app logic and rendering lives in one IIFE in `app.js`. Load order in `index.html` matters: data scripts (`words.js`, `math.js`, `reading.js`, `social.js`) load before `app.js`, which reads their `window.*` globals at init.

| File | Exposes | Shape |
|---|---|---|
| `words.js` | `window.WORD_SETS` | sets of `{ word, phrase, choices, answerIndex, meaning }` |
| `math.js` | `window.MATH_PROBLEM_TYPES` | `{ id, name, generate() }` — problems are generated at quiz time, not static data |
| `reading.js` | `window.READING_PASSAGES` | passages with `{ title, text, questions: [{prompt, choices, answerIndex}] }` |
| `social.js` | `window.SOCIAL_STUDIES_SETS` | sets of `{ prompt, choices, answerIndex }`, grouped by topic (Civics, U.S. History, Economics) |
| `science.js` | `window.SCIENCE_SETS` | sets of `{ prompt, choices, answerIndex }`, grouped by topic (Ecology, Energy, States of Matter, Forces & Motion, Earth & the Universe, Scientific Method & Tools) |

Convention across all data files: `choices[0]` is always the correct answer; `app.js` shuffles choice order at render time (never shuffle in the data files themselves).

**One quiz engine, many content modes.** `app.js` doesn't have separate code paths per subject — one `renderQuestion()`/`handleAnswer()` pair drives Words, Math, Reading, Social Studies, and Science, discriminated by `q.type` (`"math"`, `"math2"`, `"reading"`, `"social"`, `"science"`, or absent for word questions) and by `quizState.mode` (`"normal"`, `"review"`, `"math"`, `"mathReview"`, `"math2"`, `"math2Review"`, `"reading"`, `"readingReview"`, `"social"`, `"socialReview"`, `"science"`, `"scienceReview"`). When adding a new subject, follow this pattern rather than branching the UI separately:
- a `start<Subject>Quiz()` / `start<Subject>Review()` pair that builds `quizState`
- a case in `renderQuestion()`'s type branch for how the prompt card renders
- a `update<Subject>ProgressForAnswer()` for the missed-item tracking
- entries in `isMathEntry`-style helpers, `historyForTab`, and `setNameForEntry` so history/tabs pick it up

**Screens are hand-rendered, not routed.** Four `<section class="screen">` elements (`home-screen`, `quiz-screen`, `end-screen`, `history-screen`) are shown/hidden via `showScreen()`; each render function clears and rebuilds its section's DOM from scratch (`clearChildren` + `createElement`/`innerHTML`) rather than diffing.

**Persistence.** Everything lives in one `localStorage` key (`iowaVocabProgress`), shaped as `{ missedWords, missedMath, missedMath2, missedReading, missedSocial, missedScience, history }`. Each `missed*` map is a spaced-repetition deck: missing a question adds it with `streak: 0`; a correct review answer increments the streak; hitting `STREAK_TO_CLEAR` (2) removes it. `history` is an append-only log of `{ setId, mode, score, total, date }` used for the per-tab score history screen.

**Offline cache.** `sw.js` precaches an explicit `ASSETS` list under `CACHE_NAME`. When adding a new top-level script/asset file, add it to `ASSETS` *and* bump `CACHE_NAME` (e.g. `iowa-vocab-v10` → `v11`) — otherwise existing installs keep serving the old cached set and never pick up the new file.
