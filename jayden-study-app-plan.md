# Jayden's Study App — Build Plan for Claude Code

## The app in one sentence
A phone-friendly web app where Jayden practices Iowa Assessment–style questions, and the app automatically re-drills the ones he misses.

---

## Feature list

### Phase 1 — MVP (build this first)
- Vocabulary quiz in Iowa format: word in a short phrase → pick the synonym from 4 choices
- Instant feedback (correct answer shown in green when he misses)
- Multiple word sets (Set 1, Set 2...) selectable from a home screen
- Score screen at the end with a list of missed words
- Works well on a phone: big tap targets, no typing required

### Phase 2 — What makes it actually effective
- **Missed-words deck**: every wrong answer goes into a review deck that resurfaces those words in future sessions until he gets each one right 2 times in a row (simple spaced repetition)
- **Score history**: saves each quiz result (date, set, score) so you can see progress over time
- **Streak counter**: days in a row practiced — great motivator for kids

### Phase 3 — Nice to have
- More subjects: reading comprehension (point of view, context clues — his weak spots), math facts
- A parent view: which words he misses most often
- Sound effect / confetti on a personal best

---

## Starter prompt (paste this into Claude Code on day one)

```
Build a study web app for my 5th grader, Jayden, to prep for the Iowa
Assessments. Plain HTML/CSS/JavaScript, no frameworks, everything in a
single project folder I can deploy to GitHub Pages.

Requirements:
- Home screen listing word sets; tapping one starts a 20-question quiz
- Iowa Assessment format: show a word in a short phrase (e.g. "to evade
  the question") with the target word highlighted, and 4 answer choices
  (A-D); he picks the synonym
- Instant feedback: wrong pick turns red, correct answer turns green,
  then a "Next" button
- End screen: score, encouraging message, and a list of missed words
  with their meanings
- Save results and missed words in localStorage so progress persists
- A "Review missed words" mode on the home screen that quizzes only
  words he previously got wrong, removing each word after he answers
  it correctly twice
- Mobile-first design: large tap targets, readable serif for the word
  phrases, works offline once loaded
- Word data lives in a separate words.js file so I can easily add sets

Start with one word set using these words: evade, courteous, perish,
immense, astound, feeble, withdraw, industrious, saunter, sluggish,
exasperate, obsolete, deprive, nonchalant, exult, sparse, taunt,
hearty, suspend, solitary, thrifty, vivid.
```

## Good follow-up prompts (after the MVP works)
- "Add a second word set with these words: [paste from your Word doc]"
- "Add a score history page showing the last 20 quiz results with dates"
- "Add a daily streak counter to the home screen"
- "Help me deploy this to GitHub Pages step by step"

## CLAUDE.md (run /init first, then add these lines)
```
This is a study app for a 10-year-old. Keep the UI simple and friendly.
Big tap targets, minimal text, no settings screens. Plain JS only —
no build step, no frameworks. Everything must work on a phone browser.
```

---

## Tips for the build sessions
1. **One feature per request.** "Add score history" then test it, rather than asking for five things at once.
2. **Test on the actual phone early** — open the folder's index.html or the deployed link on Jayden's device after each feature.
3. **Let Claude Code fix its own bugs.** Paste the error or describe what's broken ("the Next button doesn't show after I answer") — that's normal workflow, not a failure.
4. **Commit as you go.** Ask Claude Code to "commit this with a good message" after each working feature, so you can always roll back.
