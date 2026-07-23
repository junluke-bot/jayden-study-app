// Iowa Assessments vocabulary quiz app logic.
// Depends on window.WORD_SETS defined in words.js.

(function () {
  "use strict";

  var STORAGE_KEY = "iowaVocabProgress";
  var STREAK_TO_CLEAR = 2;

  var HISTORY_DISPLAY_LIMIT = 20;
  var MATH_SESSION_LENGTH = 5;

  var homeScreen = document.getElementById("home-screen");
  var quizScreen = document.getElementById("quiz-screen");
  var endScreen = document.getElementById("end-screen");
  var historyScreen = document.getElementById("history-screen");

  var quizState = null;
  var activeHomeTab = "words";

  // ---------- Persistence ----------

  function loadProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { missedWords: {}, missedMath: {}, history: [] };
      var parsed = JSON.parse(raw);
      return {
        missedWords: parsed.missedWords || {},
        missedMath: parsed.missedMath || {},
        history: parsed.history || []
      };
    } catch (e) {
      return { missedWords: {}, missedMath: {}, history: [] };
    }
  }

  function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  // ---------- Helpers ----------

  function shuffle(array) {
    var copy = array.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function highlightWord(phrase, word) {
    var pattern = new RegExp("(" + word + ")", "i");
    return phrase.replace(pattern, "<mark>$1</mark>");
  }

  function clearChildren(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
  }

  function showScreen(screen) {
    [homeScreen, quizScreen, endScreen, historyScreen].forEach(function (s) {
      s.classList.toggle("hidden", s !== screen);
    });
    window.scrollTo(0, 0);
  }

  function isMathEntry(entry) {
    return entry.mode === "math" || entry.mode === "mathReview";
  }

  function historyForTab(history, tab) {
    return history.filter(function (entry) {
      return tab === "math" ? isMathEntry(entry) : !isMathEntry(entry);
    });
  }

  function setNameForEntry(entry) {
    if (entry.mode === "math") return "Daily Math Practice";
    if (entry.mode === "mathReview") return "Review Missed Math";
    if (entry.mode === "review") return "Review Missed Words";
    var set = window.WORD_SETS.filter(function (s) {
      return s.id === entry.setId;
    })[0];
    return set ? set.name : "Word Set";
  }

  function formatHistoryDate(isoString) {
    var d = new Date(isoString);
    return d.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric"
    }) + " · " + d.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit"
    });
  }

  // ---------- Home screen ----------

  function renderHome() {
    var progress = loadProgress();
    var missedList = Object.keys(progress.missedWords);
    var missedMathList = Object.keys(progress.missedMath);

    clearChildren(homeScreen);

    var tabBar = document.createElement("div");
    tabBar.className = "tab-bar";

    [
      { id: "words", label: "Words" },
      { id: "math", label: "Math" }
    ].forEach(function (tab) {
      var tabBtn = document.createElement("button");
      tabBtn.className = "tab-btn" + (activeHomeTab === tab.id ? " active" : "");
      tabBtn.textContent = tab.label;
      tabBtn.addEventListener("click", function () {
        activeHomeTab = tab.id;
        renderHome();
      });
      tabBar.appendChild(tabBtn);
    });

    homeScreen.appendChild(tabBar);

    if (activeHomeTab === "words") {
      var setsLabel = document.createElement("div");
      setsLabel.className = "section-label";
      setsLabel.textContent = "Word Sets";
      homeScreen.appendChild(setsLabel);

      var setList = document.createElement("div");
      setList.className = "set-list";

      window.WORD_SETS.forEach(function (set) {
        var btn = document.createElement("button");
        btn.className = "set-card";
        btn.innerHTML =
          '<span><span class="set-name">' +
          set.name +
          '</span><span class="set-meta">' +
          set.words.length +
          " questions</span></span>";
        btn.addEventListener("click", function () {
          startQuiz(set, "normal");
        });
        setList.appendChild(btn);
      });

      homeScreen.appendChild(setList);

      var reviewLabel = document.createElement("div");
      reviewLabel.className = "section-label";
      reviewLabel.textContent = "Practice";
      homeScreen.appendChild(reviewLabel);

      var reviewWrap = document.createElement("div");
      reviewWrap.className = "home-actions";

      if (missedList.length === 0) {
        var note = document.createElement("div");
        note.className = "empty-note";
        note.textContent =
          "No missed words yet. Great job! Words you miss in a quiz will show up here to review.";
        reviewWrap.appendChild(note);
      } else {
        var reviewBtn = document.createElement("button");
        reviewBtn.className = "set-card review-card";
        reviewBtn.innerHTML =
          '<span><span class="set-name">Review Missed Words</span>' +
          '<span class="set-meta">' +
          missedList.length +
          (missedList.length === 1 ? " word" : " words") +
          "</span></span>";
        reviewBtn.addEventListener("click", function () {
          startReviewQuiz(progress);
        });
        reviewWrap.appendChild(reviewBtn);
      }

      homeScreen.appendChild(reviewWrap);
    } else {
      var mathLabel = document.createElement("div");
      mathLabel.className = "section-label";
      mathLabel.textContent = "Math Practice";
      homeScreen.appendChild(mathLabel);

      var mathWrap = document.createElement("div");
      mathWrap.className = "home-actions";

      var mathBtn = document.createElement("button");
      mathBtn.className = "set-card";
      mathBtn.innerHTML =
        '<span><span class="set-name">Daily Math Practice</span>' +
        '<span class="set-meta">' +
        MATH_SESSION_LENGTH +
        " mixed questions</span></span>";
      mathBtn.addEventListener("click", function () {
        startMathPractice();
      });
      mathWrap.appendChild(mathBtn);

      if (missedMathList.length > 0) {
        var mathReviewBtn = document.createElement("button");
        mathReviewBtn.className = "set-card review-card";
        mathReviewBtn.innerHTML =
          '<span><span class="set-name">Review Missed Math</span>' +
          '<span class="set-meta">' +
          missedMathList.length +
          (missedMathList.length === 1 ? " problem" : " problems") +
          "</span></span>";
        mathReviewBtn.addEventListener("click", function () {
          startMathReview(progress);
        });
        mathWrap.appendChild(mathReviewBtn);
      }

      homeScreen.appendChild(mathWrap);
    }

    var tabHistory = historyForTab(progress.history, activeHomeTab);
    var tabNoun = activeHomeTab === "math" ? "math" : "word";

    var progressLabel = document.createElement("div");
    progressLabel.className = "section-label";
    progressLabel.textContent = activeHomeTab === "math" ? "Math Progress" : "Word Progress";
    homeScreen.appendChild(progressLabel);

    var progressWrap = document.createElement("div");
    progressWrap.className = "home-actions";

    if (tabHistory.length === 0) {
      var historyNote = document.createElement("div");
      historyNote.className = "empty-note";
      historyNote.textContent =
        "No " + tabNoun + " quiz results yet. Finish a quiz to start building your score history.";
      progressWrap.appendChild(historyNote);
    } else {
      var historyBtn = document.createElement("button");
      historyBtn.className = "set-card";
      historyBtn.innerHTML =
        '<span><span class="set-name">Score History</span>' +
        '<span class="set-meta">' +
        tabHistory.length +
        (tabHistory.length === 1 ? " result" : " results") +
        "</span></span>";
      historyBtn.addEventListener("click", function () {
        renderHistory(tabHistory, activeHomeTab);
      });
      progressWrap.appendChild(historyBtn);
    }

    homeScreen.appendChild(progressWrap);
    showScreen(homeScreen);
  }

  // ---------- History screen ----------

  function renderHistory(tabHistory, tab) {
    clearChildren(historyScreen);

    var backBtn = document.createElement("button");
    backBtn.className = "back-btn";
    backBtn.textContent = "← Back";
    backBtn.addEventListener("click", renderHome);
    historyScreen.appendChild(backBtn);

    var label = document.createElement("div");
    label.className = "section-label";
    label.textContent = tab === "math" ? "Math Score History" : "Word Score History";
    historyScreen.appendChild(label);

    var recent = tabHistory
      .slice()
      .reverse()
      .slice(0, HISTORY_DISPLAY_LIMIT);

    var list = document.createElement("ul");
    list.className = "history-list";

    recent.forEach(function (entry) {
      var pct = entry.total === 0 ? 0 : entry.score / entry.total;
      var tier = pct >= 0.8 ? "tier-high" : pct >= 0.5 ? "tier-mid" : "tier-low";

      var li = document.createElement("li");
      li.className = tier;
      li.innerHTML =
        '<span class="history-info"><span class="history-title">' +
        setNameForEntry(entry) +
        '</span><span class="history-date">' +
        formatHistoryDate(entry.date) +
        '</span></span><span class="history-score">' +
        entry.score +
        "/" +
        entry.total +
        "</span>";
      list.appendChild(li);
    });

    historyScreen.appendChild(list);
    showScreen(historyScreen);
  }

  // ---------- Quiz flow ----------

  function startQuiz(set, mode) {
    var questions = shuffle(set.words);
    quizState = {
      setId: set.id,
      mode: mode,
      questions: questions,
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function startReviewQuiz(progress) {
    var words = Object.keys(progress.missedWords).map(function (key) {
      return progress.missedWords[key].data;
    });
    quizState = {
      setId: null,
      mode: "review",
      questions: shuffle(words),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function startMathPractice() {
    var types = window.MATH_PROBLEM_TYPES;
    var guaranteed = types.map(function (t) {
      return t.generate();
    });
    var extras = [];
    for (var i = guaranteed.length; i < MATH_SESSION_LENGTH; i++) {
      var type = types[Math.floor(Math.random() * types.length)];
      extras.push(type.generate());
    }
    quizState = {
      setId: null,
      mode: "math",
      questions: shuffle(guaranteed.concat(extras)),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function startMathReview(progress) {
    var problems = Object.keys(progress.missedMath).map(function (key) {
      return progress.missedMath[key].data;
    });
    quizState = {
      setId: null,
      mode: "mathReview",
      questions: shuffle(problems),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function renderQuestion() {
    var q = quizState.questions[quizState.index];
    var options = shuffle(
      q.choices.map(function (text, i) {
        return { text: text, correct: i === q.answerIndex };
      })
    );

    clearChildren(quizScreen);

    var backBtn = document.createElement("button");
    backBtn.className = "back-btn";
    backBtn.textContent = "← Back";
    backBtn.addEventListener("click", function () {
      quizState = null;
      renderHome();
    });
    quizScreen.appendChild(backBtn);

    var progressEl = document.createElement("div");
    progressEl.className = "quiz-progress";
    progressEl.textContent =
      "Question " + (quizState.index + 1) + " of " + quizState.questions.length;
    quizScreen.appendChild(progressEl);

    var card = document.createElement("div");
    card.className = "phrase-card";

    if (q.type === "math") {
      var topicEl = document.createElement("div");
      topicEl.className = "math-topic";
      topicEl.textContent = q.topic;
      card.appendChild(topicEl);
    }

    var phraseEl = document.createElement("p");
    phraseEl.className = "phrase-text";
    if (q.type === "math") {
      phraseEl.classList.add("math-prompt");
      phraseEl.textContent = q.prompt;
    } else {
      phraseEl.innerHTML = highlightWord(q.phrase, q.word);
    }
    card.appendChild(phraseEl);
    quizScreen.appendChild(card);

    var choicesEl = document.createElement("div");
    choicesEl.className = "choices";
    var letters = ["A", "B", "C", "D"];

    options.forEach(function (opt, i) {
      var btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.innerHTML =
        '<span class="choice-letter">' +
        letters[i] +
        "</span><span>" +
        opt.text +
        "</span>";
      btn.addEventListener("click", function () {
        handleAnswer(opt.correct, choicesEl, btn);
      });
      choicesEl.appendChild(btn);
    });

    quizScreen.appendChild(choicesEl);
  }

  function handleAnswer(isCorrect, choicesEl, selectedBtn) {
    var q = quizState.questions[quizState.index];
    var correctText = q.choices[q.answerIndex];
    var buttons = choicesEl.querySelectorAll(".choice-btn");

    buttons.forEach(function (b) {
      b.disabled = true;
      var label = b.querySelector("span:last-child").textContent;
      if (label === correctText) {
        b.classList.add("correct");
      }
    });

    if (!isCorrect) {
      selectedBtn.classList.add("incorrect");
    }

    if (isCorrect) {
      quizState.score++;
    } else {
      quizState.missedThisRound.push(q);
    }
    if (quizState.mode === "math" || quizState.mode === "mathReview") {
      updateMathProgressForAnswer(q, isCorrect);
    } else {
      updateProgressForAnswer(q, isCorrect);
    }

    var nextBtn = document.createElement("button");
    nextBtn.className = "next-btn";
    nextBtn.textContent =
      quizState.index + 1 < quizState.questions.length ? "Next" : "See Results";
    nextBtn.addEventListener("click", function () {
      quizState.index++;
      if (quizState.index < quizState.questions.length) {
        renderQuestion();
      } else {
        finishQuiz();
      }
    });
    quizScreen.appendChild(nextBtn);
  }

  function updateProgressForAnswer(word, isCorrect) {
    var progress = loadProgress();
    var key = word.word;

    if (isCorrect) {
      if (progress.missedWords[key]) {
        progress.missedWords[key].streak++;
        if (progress.missedWords[key].streak >= STREAK_TO_CLEAR) {
          delete progress.missedWords[key];
        }
      }
    } else {
      progress.missedWords[key] = { streak: 0, data: word };
    }

    saveProgress(progress);
  }

  function updateMathProgressForAnswer(problem, isCorrect) {
    var progress = loadProgress();
    var key = problem.prompt;

    if (isCorrect) {
      if (progress.missedMath[key]) {
        progress.missedMath[key].streak++;
        if (progress.missedMath[key].streak >= STREAK_TO_CLEAR) {
          delete progress.missedMath[key];
        }
      }
    } else {
      progress.missedMath[key] = { streak: 0, data: problem };
    }

    saveProgress(progress);
  }

  function finishQuiz() {
    var progress = loadProgress();
    progress.history.push({
      setId: quizState.setId,
      mode: quizState.mode,
      score: quizState.score,
      total: quizState.questions.length,
      date: new Date().toISOString()
    });
    saveProgress(progress);
    renderEndScreen(
      quizState.score,
      quizState.questions.length,
      quizState.missedThisRound,
      quizState.mode
    );
  }

  // ---------- End screen ----------

  function encouragingMessage(score, total) {
    var pct = total === 0 ? 0 : score / total;
    if (pct === 1) return "Perfect score! Amazing work!";
    if (pct >= 0.9) return "Outstanding job!";
    if (pct >= 0.7) return "Great work — keep it up!";
    if (pct >= 0.5) return "Good effort — a little more practice will help!";
    return "Keep practicing — you'll get there!";
  }

  function renderEndScreen(score, total, missed, mode) {
    clearChildren(endScreen);

    var scoreBox = document.createElement("div");
    scoreBox.className = "end-score";
    scoreBox.innerHTML =
      '<div class="score-number">' +
      score +
      " / " +
      total +
      '</div><div class="score-message">' +
      encouragingMessage(score, total) +
      "</div>";
    endScreen.appendChild(scoreBox);

    var isMath = mode === "math" || mode === "mathReview";

    if (missed.length > 0) {
      var label = document.createElement("div");
      label.className = "section-label";
      label.textContent = isMath ? "Problems to Review" : "Words to Review";
      endScreen.appendChild(label);

      var list = document.createElement("ul");
      list.className = "missed-list";
      missed.forEach(function (item) {
        var li = document.createElement("li");
        if (isMath) {
          li.innerHTML =
            '<span class="missed-word">' +
            item.prompt +
            '</span><span class="missed-meaning">Answer: ' +
            item.choices[item.answerIndex] +
            "</span>";
        } else {
          li.innerHTML =
            '<span class="missed-word">' +
            item.word +
            '</span><span class="missed-meaning">' +
            item.meaning +
            "</span>";
        }
        list.appendChild(li);
      });
      endScreen.appendChild(list);
    }

    var homeBtn = document.createElement("button");
    homeBtn.className = "home-btn";
    homeBtn.textContent = "Back to Home";
    homeBtn.addEventListener("click", function () {
      quizState = null;
      renderHome();
    });
    endScreen.appendChild(homeBtn);

    showScreen(endScreen);
  }

  // ---------- Offline support ----------

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {
        // Offline caching is a nice-to-have; ignore registration failures
        // (e.g. when opened directly from the filesystem without a server).
      });
    });
  }

  // ---------- Init ----------

  renderHome();
})();
