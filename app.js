// Iowa Assessments vocabulary quiz app logic.
// Depends on window.WORD_SETS defined in words.js.

(function () {
  "use strict";

  var STORAGE_KEY = "iowaVocabProgress";
  var STREAK_TO_CLEAR = 2;

  var HISTORY_DISPLAY_LIMIT = 20;
  var MATH2_SESSION_LENGTH = 10;

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
      if (!raw)
        return {
          missedWords: {},
          missedMath: {},
          missedMath2: {},
          missedReading: {},
          missedSocial: {},
          missedScience: {},
          missedDol: {},
          missedSpelling: {},
          missedWordStudy: {},
          history: []
        };
      var parsed = JSON.parse(raw);
      return {
        missedWords: parsed.missedWords || {},
        missedMath: parsed.missedMath || {},
        missedMath2: parsed.missedMath2 || {},
        missedReading: parsed.missedReading || {},
        missedSocial: parsed.missedSocial || {},
        missedScience: parsed.missedScience || {},
        missedDol: parsed.missedDol || {},
        missedSpelling: parsed.missedSpelling || {},
        missedWordStudy: parsed.missedWordStudy || {},
        history: parsed.history || []
      };
    } catch (e) {
      return {
        missedWords: {},
        missedMath: {},
        missedMath2: {},
        missedReading: {},
        missedSocial: {},
        missedScience: {},
        missedDol: {},
        missedSpelling: {},
        missedWordStudy: {},
        history: []
      };
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

  // ---------- Question diagrams (original SVG art, not scans) ----------

  var SVG_NS = "http://www.w3.org/2000/svg";

  function svgEl(tag, attrs) {
    var el = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs || {}).forEach(function (key) {
      el.setAttribute(key, attrs[key]);
    });
    return el;
  }

  function buildCoordGridDiagram(spec) {
    var min = spec.range[0];
    var max = spec.range[1];
    var n = max - min;
    var pad = 26;
    var cell = 32;
    var size = pad * 2 + cell * n;

    function px(x) {
      return pad + (x - min) * cell;
    }
    function py(y) {
      return pad + (max - y) * cell;
    }

    var svg = svgEl("svg", { viewBox: "0 0 " + size + " " + size, class: "diagram-svg" });

    for (var i = 0; i <= n; i++) {
      var gv = min + i;
      var isAxis = gv === 0;
      svg.appendChild(
        svgEl("line", {
          x1: px(gv), y1: py(min), x2: px(gv), y2: py(max),
          stroke: isAxis ? "var(--text)" : "var(--border)",
          "stroke-width": isAxis ? 2 : 1
        })
      );
      svg.appendChild(
        svgEl("line", {
          x1: px(min), y1: py(gv), x2: px(max), y2: py(gv),
          stroke: isAxis ? "var(--text)" : "var(--border)",
          "stroke-width": isAxis ? 2 : 1
        })
      );
    }

    for (var xi = min; xi <= max; xi++) {
      var xLabel = svgEl("text", {
        x: px(xi), y: py(min) + 16, "text-anchor": "middle",
        "font-size": 11, fill: "var(--muted)"
      });
      xLabel.textContent = String(xi);
      svg.appendChild(xLabel);
    }
    for (var yi = min; yi <= max; yi++) {
      var yLabel = svgEl("text", {
        x: px(min) - 10, y: py(yi) + 4, "text-anchor": "end",
        "font-size": 11, fill: "var(--muted)"
      });
      yLabel.textContent = String(yi);
      svg.appendChild(yLabel);
    }

    if (spec.polygon) {
      var polyPts = spec.polygon
        .map(function (pt) {
          return px(pt[0]) + "," + py(pt[1]);
        })
        .join(" ");
      svg.appendChild(
        svgEl("polygon", {
          points: polyPts, fill: "var(--accent)", "fill-opacity": 0.18,
          stroke: "var(--accent-dark)", "stroke-width": 2.5
        })
      );
    }

    (spec.points || []).forEach(function (p) {
      var cx = px(p.x);
      var cy = py(p.y);
      svg.appendChild(svgEl("circle", { cx: cx, cy: cy, r: 5, fill: "var(--accent-dark)" }));
      if (p.label) {
        var labelEl = svgEl("text", {
          x: cx + 9, y: cy - 9, "font-size": 16, "font-weight": 700,
          fill: "var(--accent-dark)"
        });
        labelEl.textContent = p.label;
        svg.appendChild(labelEl);
      }
    });

    return svg;
  }

  function buildLinePlotDiagram(spec) {
    var labels = spec.labels;
    var counts = spec.counts;
    var maxCount = Math.max.apply(null, counts);
    var colWidth = 56;
    var markSize = 16;
    var pad = 20;
    var width = pad * 2 + colWidth * labels.length;
    var topPad = spec.note ? 34 : 12;
    var height = topPad + markSize * maxCount + 40;

    var svg = svgEl("svg", { viewBox: "0 0 " + width + " " + height, class: "diagram-svg" });

    if (spec.note) {
      var noteEl = svgEl("text", {
        x: width / 2, y: 16, "text-anchor": "middle", "font-size": 11.5, fill: "var(--muted)"
      });
      noteEl.textContent = spec.note;
      svg.appendChild(noteEl);
    }

    var baseline = height - 24;
    svg.appendChild(
      svgEl("line", {
        x1: pad, y1: baseline, x2: width - pad, y2: baseline,
        stroke: "var(--text)", "stroke-width": 2
      })
    );

    labels.forEach(function (label, i) {
      var cx = pad + colWidth * i + colWidth / 2;
      var tickLabel = svgEl("text", {
        x: cx, y: baseline + 20, "text-anchor": "middle", "font-size": 13, fill: "var(--text)"
      });
      tickLabel.textContent = String(label);
      svg.appendChild(tickLabel);

      for (var k = 0; k < counts[i]; k++) {
        var cy = baseline - 12 - k * markSize;
        var half = 6;
        svg.appendChild(
          svgEl("line", {
            x1: cx - half, y1: cy - half, x2: cx + half, y2: cy + half,
            stroke: "var(--accent-dark)", "stroke-width": 2.5, "stroke-linecap": "round"
          })
        );
        svg.appendChild(
          svgEl("line", {
            x1: cx - half, y1: cy + half, x2: cx + half, y2: cy - half,
            stroke: "var(--accent-dark)", "stroke-width": 2.5, "stroke-linecap": "round"
          })
        );
      }
    });

    return svg;
  }

  function buildCubeBlockDiagram(spec) {
    var w = spec.width;
    var h = spec.height;
    var d = spec.depth;
    var s = 34;
    var isoX = 22;
    var isoY = 16;
    var pad = 18;

    var totalW = w * s + d * isoX + pad * 2;
    var totalH = h * s + d * isoY + pad * 2;

    var originX = pad + d * isoX;
    var originY = totalH - pad;

    function front(cx, cy) {
      return [originX + cx * s, originY - cy * s];
    }
    function back(pt, cz) {
      return [pt[0] + cz * isoX, pt[1] - cz * isoY];
    }
    function pts(list) {
      return list.map(function (p) { return p[0] + "," + p[1]; }).join(" ");
    }

    var svg = svgEl("svg", { viewBox: "0 0 " + totalW + " " + totalH, class: "diagram-svg" });

    var fbl = front(0, 0), fbr = front(w, 0), ftr = front(w, h), ftl = front(0, h);

    // Top face (lightest — catches the most light)
    svg.appendChild(
      svgEl("polygon", {
        points: pts([ftl, ftr, back(ftr, d), back(ftl, d)]),
        fill: "var(--accent)", "fill-opacity": 0.18, stroke: "var(--accent-dark)", "stroke-width": 2.2
      })
    );
    // Right face (darkest — in shadow)
    svg.appendChild(
      svgEl("polygon", {
        points: pts([fbr, ftr, back(ftr, d), back(fbr, d)]),
        fill: "var(--accent)", "fill-opacity": 0.85, stroke: "var(--accent-dark)", "stroke-width": 2.2
      })
    );
    // Front face (medium)
    svg.appendChild(
      svgEl("polygon", {
        points: pts([fbl, fbr, ftr, ftl]),
        fill: "var(--accent)", "fill-opacity": 0.5, stroke: "var(--accent-dark)", "stroke-width": 2.2
      })
    );

    var gridColor = "var(--accent-dark)";

    for (var cx = 1; cx < w; cx++) {
      var a = front(cx, 0), b = front(cx, h);
      svg.appendChild(svgEl("line", { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: gridColor, "stroke-width": 1.3, "stroke-opacity": 0.8 }));
      var ta = front(cx, h), tb = back(ta, d);
      svg.appendChild(svgEl("line", { x1: ta[0], y1: ta[1], x2: tb[0], y2: tb[1], stroke: gridColor, "stroke-width": 1.3, "stroke-opacity": 0.8 }));
    }
    for (var cy = 1; cy < h; cy++) {
      var c = front(0, cy), e = front(w, cy);
      svg.appendChild(svgEl("line", { x1: c[0], y1: c[1], x2: e[0], y2: e[1], stroke: gridColor, "stroke-width": 1.3, "stroke-opacity": 0.8 }));
      var ra = front(w, cy), rb = back(ra, d);
      svg.appendChild(svgEl("line", { x1: ra[0], y1: ra[1], x2: rb[0], y2: rb[1], stroke: gridColor, "stroke-width": 1.3, "stroke-opacity": 0.8 }));
    }
    for (var cz = 1; cz < d; cz++) {
      var tl = back(front(0, h), cz), tr = back(front(w, h), cz);
      svg.appendChild(svgEl("line", { x1: tl[0], y1: tl[1], x2: tr[0], y2: tr[1], stroke: gridColor, "stroke-width": 1.3, "stroke-opacity": 0.8 }));
      var rt = back(front(w, h), cz), rbm = back(front(w, 0), cz);
      svg.appendChild(svgEl("line", { x1: rt[0], y1: rt[1], x2: rbm[0], y2: rbm[1], stroke: gridColor, "stroke-width": 1.3, "stroke-opacity": 0.8 }));
    }

    return svg;
  }

  function buildCompositeBlocksDiagram(spec) {
    var s = 30;
    var isoX = 20;
    var isoY = 14;
    var pad = 18;

    var blocks = spec.blocks;
    var maxX = 0, maxY = 0, maxD = 0;
    blocks.forEach(function (b) {
      maxX = Math.max(maxX, b.x + b.w);
      maxY = Math.max(maxY, b.y + b.h);
      maxD = Math.max(maxD, b.z + b.d);
    });

    var totalW = maxX * s + maxD * isoX + pad * 2;
    var totalH = maxY * s + maxD * isoY + pad * 2;

    var originX = pad + maxD * isoX;
    var originY = totalH - pad;

    function proj(cx, cy, cz) {
      return [originX + cx * s + cz * isoX, originY - cy * s - cz * isoY];
    }
    function pts(list) {
      return list.map(function (p) { return p[0] + "," + p[1]; }).join(" ");
    }

    var svg = svgEl("svg", { viewBox: "0 0 " + totalW + " " + totalH, class: "diagram-svg" });

    var ordered = blocks.slice().sort(function (a, b) {
      return (a.z - b.z) || (a.y - b.y);
    });

    ordered.forEach(function (b) {
      var x0 = b.x, x1 = b.x + b.w, y0 = b.y, y1 = b.y + b.h, z0 = b.z, z1 = b.z + b.d;

      var fbl = proj(x0, y0, z0), fbr = proj(x1, y0, z0), ftr = proj(x1, y1, z0), ftl = proj(x0, y1, z0);
      var bbr = proj(x1, y0, z1), btr = proj(x1, y1, z1), btl = proj(x0, y1, z1);

      svg.appendChild(
        svgEl("polygon", {
          points: pts([ftl, ftr, btr, btl]),
          fill: "var(--accent)", "fill-opacity": 0.18, stroke: "var(--accent-dark)", "stroke-width": 2.2
        })
      );
      svg.appendChild(
        svgEl("polygon", {
          points: pts([fbr, ftr, btr, bbr]),
          fill: "var(--accent)", "fill-opacity": 0.85, stroke: "var(--accent-dark)", "stroke-width": 2.2
        })
      );
      svg.appendChild(
        svgEl("polygon", {
          points: pts([fbl, fbr, ftr, ftl]),
          fill: "var(--accent)", "fill-opacity": 0.5, stroke: "var(--accent-dark)", "stroke-width": 2.2
        })
      );

      var gridColor = "var(--accent-dark)";
      var cx, cy, cz, a, c, ta, tb, e, f, ra, rb, g, h2, rt, rbm;

      for (cx = x0 + 1; cx < x1; cx++) {
        a = proj(cx, y0, z0); c = proj(cx, y1, z0);
        svg.appendChild(svgEl("line", { x1: a[0], y1: a[1], x2: c[0], y2: c[1], stroke: gridColor, "stroke-width": 1.3, "stroke-opacity": 0.8 }));
        ta = proj(cx, y1, z0); tb = proj(cx, y1, z1);
        svg.appendChild(svgEl("line", { x1: ta[0], y1: ta[1], x2: tb[0], y2: tb[1], stroke: gridColor, "stroke-width": 1.3, "stroke-opacity": 0.8 }));
      }
      for (cy = y0 + 1; cy < y1; cy++) {
        e = proj(x0, cy, z0); f = proj(x1, cy, z0);
        svg.appendChild(svgEl("line", { x1: e[0], y1: e[1], x2: f[0], y2: f[1], stroke: gridColor, "stroke-width": 1.3, "stroke-opacity": 0.8 }));
        ra = proj(x1, cy, z0); rb = proj(x1, cy, z1);
        svg.appendChild(svgEl("line", { x1: ra[0], y1: ra[1], x2: rb[0], y2: rb[1], stroke: gridColor, "stroke-width": 1.3, "stroke-opacity": 0.8 }));
      }
      for (cz = z0 + 1; cz < z1; cz++) {
        g = proj(x0, y1, cz); h2 = proj(x1, y1, cz);
        svg.appendChild(svgEl("line", { x1: g[0], y1: g[1], x2: h2[0], y2: h2[1], stroke: gridColor, "stroke-width": 1.3, "stroke-opacity": 0.8 }));
        rt = proj(x1, y1, cz); rbm = proj(x1, y0, cz);
        svg.appendChild(svgEl("line", { x1: rt[0], y1: rt[1], x2: rbm[0], y2: rbm[1], stroke: gridColor, "stroke-width": 1.3, "stroke-opacity": 0.8 }));
      }
    });

    return svg;
  }

  function buildRhombusDiagram() {
    var svg = svgEl("svg", { viewBox: "0 0 200 140", class: "diagram-svg" });
    svg.appendChild(
      svgEl("polygon", {
        points: "40,115 120,95 143,16 63,36",
        fill: "var(--accent)", "fill-opacity": 0.18, stroke: "var(--accent-dark)", "stroke-width": 2.5
      })
    );
    return svg;
  }

  function buildDiagram(diagram) {
    if (diagram.type === "coordGrid") return buildCoordGridDiagram(diagram);
    if (diagram.type === "linePlot") return buildLinePlotDiagram(diagram);
    if (diagram.type === "cubeBlock") return buildCubeBlockDiagram(diagram);
    if (diagram.type === "compositeBlocks") return buildCompositeBlocksDiagram(diagram);
    if (diagram.type === "rhombus") return buildRhombusDiagram();
    return null;
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

  function isMath2Entry(entry) {
    return entry.mode === "math2" || entry.mode === "math2Review";
  }

  function isReadingEntry(entry) {
    return entry.mode === "reading" || entry.mode === "readingReview";
  }

  function isSocialEntry(entry) {
    return entry.mode === "social" || entry.mode === "socialReview";
  }

  function isScienceEntry(entry) {
    return entry.mode === "science" || entry.mode === "scienceReview";
  }

  function isDolEntry(entry) {
    return entry.mode === "dol" || entry.mode === "dolReview";
  }

  function isSpellingEntry(entry) {
    return entry.mode === "spelling" || entry.mode === "spellingReview";
  }

  function isWordStudyEntry(entry) {
    return entry.mode === "wordStudy" || entry.mode === "wordStudyReview";
  }

  function historyForTab(history, tab) {
    return history.filter(function (entry) {
      if (tab === "math") return isMathEntry(entry);
      if (tab === "math2") return isMath2Entry(entry);
      if (tab === "reading") return isReadingEntry(entry);
      if (tab === "social") return isSocialEntry(entry);
      if (tab === "science") return isScienceEntry(entry);
      if (tab === "dol") return isDolEntry(entry);
      if (tab === "spelling") return isSpellingEntry(entry);
      if (tab === "wordStudy") return isWordStudyEntry(entry);
      return (
        !isMathEntry(entry) &&
        !isMath2Entry(entry) &&
        !isReadingEntry(entry) &&
        !isSocialEntry(entry) &&
        !isScienceEntry(entry) &&
        !isDolEntry(entry) &&
        !isSpellingEntry(entry) &&
        !isWordStudyEntry(entry)
      );
    });
  }

  function setNameForEntry(entry) {
    if (entry.mode === "mathReview") return "Review Missed Math";
    if (entry.mode === "math2") return "Daily Math 2 Practice";
    if (entry.mode === "math2Review") return "Review Missed Math 2";
    if (entry.mode === "review") return "Review Missed Words";
    if (entry.mode === "readingReview") return "Review Missed Reading";
    if (entry.mode === "socialReview") return "Review Missed Social Studies";
    if (entry.mode === "scienceReview") return "Review Missed Science";
    if (entry.mode === "dolReview") return "Review Missed DOL";
    if (entry.mode === "spellingReview") return "Review Missed Spelling";
    if (entry.mode === "wordStudyReview") return "Review Missed Word Study";
    if (entry.mode === "reading") {
      var passage = window.READING_PASSAGES.filter(function (p) {
        return p.id === entry.setId;
      })[0];
      return passage ? passage.title : "Reading Passage";
    }
    if (entry.mode === "math") {
      var mathSet = window.MATH_SETS.filter(function (s) {
        return s.id === entry.setId;
      })[0];
      return mathSet ? mathSet.name : "Math";
    }
    if (entry.mode === "social") {
      var socialSet = window.SOCIAL_STUDIES_SETS.filter(function (s) {
        return s.id === entry.setId;
      })[0];
      return socialSet ? socialSet.name : "Social Studies";
    }
    if (entry.mode === "science") {
      var scienceSet = window.SCIENCE_SETS.filter(function (s) {
        return s.id === entry.setId;
      })[0];
      return scienceSet ? scienceSet.name : "Science";
    }
    if (entry.mode === "dol") {
      var dolSet = window.DOL_SETS.filter(function (s) {
        return s.id === entry.setId;
      })[0];
      return dolSet ? dolSet.name : "DOL";
    }
    if (entry.mode === "spelling") {
      var spellingSet = window.SPELLING_SETS.filter(function (s) {
        return s.id === entry.setId;
      })[0];
      return spellingSet ? spellingSet.name : "Spelling";
    }
    if (entry.mode === "wordStudy") {
      var wordStudySet = window.WORD_STUDY_SETS.filter(function (s) {
        return s.id === entry.setId;
      })[0];
      return wordStudySet ? wordStudySet.name : "Word Study";
    }
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

  function renderMissedInventory(missedMap, kind) {
    var keys = Object.keys(missedMap);
    if (keys.length === 0) return null;

    var list = document.createElement("ul");
    list.className = "missed-list";

    keys.forEach(function (key) {
      var item = missedMap[key].data;
      var li = document.createElement("li");
      if (kind === "word") {
        li.innerHTML =
          '<span class="missed-word">' +
          item.word +
          '</span><span class="missed-meaning">' +
          item.meaning +
          "</span>";
      } else {
        li.innerHTML =
          '<span class="missed-word missed-prompt">' +
          item.prompt +
          '</span><span class="missed-meaning">Answer: ' +
          item.choices[item.answerIndex] +
          "</span>";
      }
      list.appendChild(li);
    });

    return list;
  }

  function appendMissedInventory(labelText, missedMap, kind) {
    var list = renderMissedInventory(missedMap, kind);
    if (!list) return;

    var label = document.createElement("div");
    label.className = "section-label";
    label.textContent = labelText;
    homeScreen.appendChild(label);
    homeScreen.appendChild(list);
  }

  function renderHome() {
    var progress = loadProgress();
    var missedList = Object.keys(progress.missedWords);
    var missedMathList = Object.keys(progress.missedMath);
    var missedMath2List = Object.keys(progress.missedMath2);
    var missedReadingList = Object.keys(progress.missedReading);
    var missedSocialList = Object.keys(progress.missedSocial);
    var missedScienceList = Object.keys(progress.missedScience);
    var missedDolList = Object.keys(progress.missedDol);
    var missedSpellingList = Object.keys(progress.missedSpelling);
    var missedWordStudyList = Object.keys(progress.missedWordStudy);

    clearChildren(homeScreen);

    var tabBar = document.createElement("div");
    tabBar.className = "tab-bar";

    [
      { id: "words", label: "Words" },
      { id: "math", label: "Math" },
      { id: "math2", label: "Math 2" },
      { id: "reading", label: "Reading" },
      { id: "social", label: "Social" },
      { id: "science", label: "Science" },
      { id: "dol", label: "DOL" },
      { id: "spelling", label: "Spelling" },
      { id: "wordStudy", label: "Word Study" }
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

      if (
        window.MISSED_WORDS_SET &&
        window.MISSED_WORDS_SET.words &&
        window.MISSED_WORDS_SET.words.length > 0
      ) {
        var missedSetBtn = document.createElement("button");
        missedSetBtn.className = "set-card";
        missedSetBtn.innerHTML =
          '<span><span class="set-name">' +
          window.MISSED_WORDS_SET.name +
          '</span><span class="set-meta">' +
          window.MISSED_WORDS_SET.words.length +
          (window.MISSED_WORDS_SET.words.length === 1
            ? " question"
            : " questions") +
          "</span></span>";
        missedSetBtn.addEventListener("click", function () {
          startQuiz(window.MISSED_WORDS_SET, "normal");
        });
        setList.appendChild(missedSetBtn);
      }

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

        var exportBtn = document.createElement("button");
        exportBtn.className = "set-card review-card";
        exportBtn.innerHTML =
          '<span><span class="set-name">Export Missed Words</span>' +
          '<span class="set-meta">Save as missingwords.js</span></span>';
        exportBtn.addEventListener("click", function () {
          exportMissedWords(progress);
        });
        reviewWrap.appendChild(exportBtn);
      }

      homeScreen.appendChild(reviewWrap);
      appendMissedInventory("Missed Words Inventory", progress.missedWords, "word");
    } else if (activeHomeTab === "math") {
      var mathLabel = document.createElement("div");
      mathLabel.className = "section-label";
      mathLabel.textContent = "Math Sets";
      homeScreen.appendChild(mathLabel);

      var mathList = document.createElement("div");
      mathList.className = "set-list";

      window.MATH_SETS.forEach(function (set) {
        var btn = document.createElement("button");
        btn.className = "set-card";
        btn.innerHTML =
          '<span><span class="set-name">' +
          set.name +
          '</span><span class="set-meta">' +
          set.questions.length +
          " questions</span></span>";
        btn.addEventListener("click", function () {
          startMathQuiz(set);
        });
        mathList.appendChild(btn);
      });

      homeScreen.appendChild(mathList);

      var mathReviewLabel = document.createElement("div");
      mathReviewLabel.className = "section-label";
      mathReviewLabel.textContent = "Practice";
      homeScreen.appendChild(mathReviewLabel);

      var mathWrap = document.createElement("div");
      mathWrap.className = "home-actions";

      if (missedMathList.length === 0) {
        var mathNote = document.createElement("div");
        mathNote.className = "empty-note";
        mathNote.textContent =
          "No missed problems yet. Problems you miss will show up here to review.";
        mathWrap.appendChild(mathNote);
      } else {
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
      appendMissedInventory("Missed Math Inventory", progress.missedMath, "prompt");
    } else if (activeHomeTab === "math2") {
      var math2Label = document.createElement("div");
      math2Label.className = "section-label";
      math2Label.textContent = "Math 2 Practice";
      homeScreen.appendChild(math2Label);

      var math2Wrap = document.createElement("div");
      math2Wrap.className = "home-actions";

      var math2Btn = document.createElement("button");
      math2Btn.className = "set-card";
      math2Btn.innerHTML =
        '<span><span class="set-name">Daily Math 2 Practice</span>' +
        '<span class="set-meta">' +
        MATH2_SESSION_LENGTH +
        " mixed questions</span></span>";
      math2Btn.addEventListener("click", function () {
        startMath2Practice();
      });
      math2Wrap.appendChild(math2Btn);

      if (missedMath2List.length > 0) {
        var math2ReviewBtn = document.createElement("button");
        math2ReviewBtn.className = "set-card review-card";
        math2ReviewBtn.innerHTML =
          '<span><span class="set-name">Review Missed Math 2</span>' +
          '<span class="set-meta">' +
          missedMath2List.length +
          (missedMath2List.length === 1 ? " problem" : " problems") +
          "</span></span>";
        math2ReviewBtn.addEventListener("click", function () {
          startMath2Review(progress);
        });
        math2Wrap.appendChild(math2ReviewBtn);
      }

      homeScreen.appendChild(math2Wrap);
      appendMissedInventory("Missed Math 2 Inventory", progress.missedMath2, "prompt");
    } else if (activeHomeTab === "reading") {
      var readingLabel = document.createElement("div");
      readingLabel.className = "section-label";
      readingLabel.textContent = "Passages";
      homeScreen.appendChild(readingLabel);

      var readingList = document.createElement("div");
      readingList.className = "set-list";

      window.READING_PASSAGES.forEach(function (passage) {
        var btn = document.createElement("button");
        btn.className = "set-card";
        btn.innerHTML =
          '<span><span class="set-name">' +
          passage.title +
          '</span><span class="set-meta">' +
          passage.questions.length +
          " questions</span></span>";
        btn.addEventListener("click", function () {
          startReadingQuiz(passage);
        });
        readingList.appendChild(btn);
      });

      homeScreen.appendChild(readingList);

      var readingReviewLabel = document.createElement("div");
      readingReviewLabel.className = "section-label";
      readingReviewLabel.textContent = "Practice";
      homeScreen.appendChild(readingReviewLabel);

      var readingReviewWrap = document.createElement("div");
      readingReviewWrap.className = "home-actions";

      if (missedReadingList.length === 0) {
        var readingNote = document.createElement("div");
        readingNote.className = "empty-note";
        readingNote.textContent =
          "No missed questions yet. Questions you miss will show up here to review.";
        readingReviewWrap.appendChild(readingNote);
      } else {
        var readingReviewBtn = document.createElement("button");
        readingReviewBtn.className = "set-card review-card";
        readingReviewBtn.innerHTML =
          '<span><span class="set-name">Review Missed Reading</span>' +
          '<span class="set-meta">' +
          missedReadingList.length +
          (missedReadingList.length === 1 ? " question" : " questions") +
          "</span></span>";
        readingReviewBtn.addEventListener("click", function () {
          startReadingReview(progress);
        });
        readingReviewWrap.appendChild(readingReviewBtn);
      }

      homeScreen.appendChild(readingReviewWrap);
      appendMissedInventory("Missed Reading Inventory", progress.missedReading, "prompt");
    } else if (activeHomeTab === "social") {
      var socialLabel = document.createElement("div");
      socialLabel.className = "section-label";
      socialLabel.textContent = "Social Studies Sets";
      homeScreen.appendChild(socialLabel);

      var socialList = document.createElement("div");
      socialList.className = "set-list";

      window.SOCIAL_STUDIES_SETS.forEach(function (set) {
        var btn = document.createElement("button");
        btn.className = "set-card";
        btn.innerHTML =
          '<span><span class="set-name">' +
          set.name +
          '</span><span class="set-meta">' +
          set.questions.length +
          " questions</span></span>";
        btn.addEventListener("click", function () {
          startSocialQuiz(set);
        });
        socialList.appendChild(btn);
      });

      homeScreen.appendChild(socialList);

      var socialReviewLabel = document.createElement("div");
      socialReviewLabel.className = "section-label";
      socialReviewLabel.textContent = "Practice";
      homeScreen.appendChild(socialReviewLabel);

      var socialReviewWrap = document.createElement("div");
      socialReviewWrap.className = "home-actions";

      if (missedSocialList.length === 0) {
        var socialNote = document.createElement("div");
        socialNote.className = "empty-note";
        socialNote.textContent =
          "No missed questions yet. Questions you miss will show up here to review.";
        socialReviewWrap.appendChild(socialNote);
      } else {
        var socialReviewBtn = document.createElement("button");
        socialReviewBtn.className = "set-card review-card";
        socialReviewBtn.innerHTML =
          '<span><span class="set-name">Review Missed Social Studies</span>' +
          '<span class="set-meta">' +
          missedSocialList.length +
          (missedSocialList.length === 1 ? " question" : " questions") +
          "</span></span>";
        socialReviewBtn.addEventListener("click", function () {
          startSocialReview(progress);
        });
        socialReviewWrap.appendChild(socialReviewBtn);
      }

      homeScreen.appendChild(socialReviewWrap);
      appendMissedInventory("Missed Social Studies Inventory", progress.missedSocial, "prompt");
    } else if (activeHomeTab === "science") {
      var scienceLabel = document.createElement("div");
      scienceLabel.className = "section-label";
      scienceLabel.textContent = "Science Sets";
      homeScreen.appendChild(scienceLabel);

      var scienceList = document.createElement("div");
      scienceList.className = "set-list";

      window.SCIENCE_SETS.forEach(function (set) {
        var btn = document.createElement("button");
        btn.className = "set-card";
        btn.innerHTML =
          '<span><span class="set-name">' +
          set.name +
          '</span><span class="set-meta">' +
          set.questions.length +
          " questions</span></span>";
        btn.addEventListener("click", function () {
          startScienceQuiz(set);
        });
        scienceList.appendChild(btn);
      });

      homeScreen.appendChild(scienceList);

      var scienceReviewLabel = document.createElement("div");
      scienceReviewLabel.className = "section-label";
      scienceReviewLabel.textContent = "Practice";
      homeScreen.appendChild(scienceReviewLabel);

      var scienceReviewWrap = document.createElement("div");
      scienceReviewWrap.className = "home-actions";

      if (missedScienceList.length === 0) {
        var scienceNote = document.createElement("div");
        scienceNote.className = "empty-note";
        scienceNote.textContent =
          "No missed questions yet. Questions you miss will show up here to review.";
        scienceReviewWrap.appendChild(scienceNote);
      } else {
        var scienceReviewBtn = document.createElement("button");
        scienceReviewBtn.className = "set-card review-card";
        scienceReviewBtn.innerHTML =
          '<span><span class="set-name">Review Missed Science</span>' +
          '<span class="set-meta">' +
          missedScienceList.length +
          (missedScienceList.length === 1 ? " question" : " questions") +
          "</span></span>";
        scienceReviewBtn.addEventListener("click", function () {
          startScienceReview(progress);
        });
        scienceReviewWrap.appendChild(scienceReviewBtn);
      }

      homeScreen.appendChild(scienceReviewWrap);
      appendMissedInventory("Missed Science Inventory", progress.missedScience, "prompt");
    } else if (activeHomeTab === "dol") {
      var dolLabel = document.createElement("div");
      dolLabel.className = "section-label";
      dolLabel.textContent = "DOL Sets";
      homeScreen.appendChild(dolLabel);

      var dolList = document.createElement("div");
      dolList.className = "set-list";

      window.DOL_SETS.forEach(function (set) {
        var btn = document.createElement("button");
        btn.className = "set-card";
        btn.innerHTML =
          '<span><span class="set-name">' +
          set.name +
          '</span><span class="set-meta">' +
          set.questions.length +
          " questions</span></span>";
        btn.addEventListener("click", function () {
          startDolQuiz(set);
        });
        dolList.appendChild(btn);
      });

      homeScreen.appendChild(dolList);

      var dolReviewLabel = document.createElement("div");
      dolReviewLabel.className = "section-label";
      dolReviewLabel.textContent = "Practice";
      homeScreen.appendChild(dolReviewLabel);

      var dolReviewWrap = document.createElement("div");
      dolReviewWrap.className = "home-actions";

      if (missedDolList.length === 0) {
        var dolNote = document.createElement("div");
        dolNote.className = "empty-note";
        dolNote.textContent =
          "No missed questions yet. Questions you miss will show up here to review.";
        dolReviewWrap.appendChild(dolNote);
      } else {
        var dolReviewBtn = document.createElement("button");
        dolReviewBtn.className = "set-card review-card";
        dolReviewBtn.innerHTML =
          '<span><span class="set-name">Review Missed DOL</span>' +
          '<span class="set-meta">' +
          missedDolList.length +
          (missedDolList.length === 1 ? " question" : " questions") +
          "</span></span>";
        dolReviewBtn.addEventListener("click", function () {
          startDolReview(progress);
        });
        dolReviewWrap.appendChild(dolReviewBtn);
      }

      homeScreen.appendChild(dolReviewWrap);
      appendMissedInventory("Missed DOL Inventory", progress.missedDol, "prompt");
    } else if (activeHomeTab === "spelling") {
      var spellingLabel = document.createElement("div");
      spellingLabel.className = "section-label";
      spellingLabel.textContent = "Spelling Sets";
      homeScreen.appendChild(spellingLabel);

      var spellingList = document.createElement("div");
      spellingList.className = "set-list";

      window.SPELLING_SETS.forEach(function (set) {
        var btn = document.createElement("button");
        btn.className = "set-card";
        btn.innerHTML =
          '<span><span class="set-name">' +
          set.name +
          '</span><span class="set-meta">' +
          set.questions.length +
          " questions</span></span>";
        btn.addEventListener("click", function () {
          startSpellingQuiz(set);
        });
        spellingList.appendChild(btn);
      });

      homeScreen.appendChild(spellingList);

      var spellingReviewLabel = document.createElement("div");
      spellingReviewLabel.className = "section-label";
      spellingReviewLabel.textContent = "Practice";
      homeScreen.appendChild(spellingReviewLabel);

      var spellingReviewWrap = document.createElement("div");
      spellingReviewWrap.className = "home-actions";

      if (missedSpellingList.length === 0) {
        var spellingNote = document.createElement("div");
        spellingNote.className = "empty-note";
        spellingNote.textContent =
          "No missed words yet. Words you miss will show up here to review.";
        spellingReviewWrap.appendChild(spellingNote);
      } else {
        var spellingReviewBtn = document.createElement("button");
        spellingReviewBtn.className = "set-card review-card";
        spellingReviewBtn.innerHTML =
          '<span><span class="set-name">Review Missed Spelling</span>' +
          '<span class="set-meta">' +
          missedSpellingList.length +
          (missedSpellingList.length === 1 ? " word" : " words") +
          "</span></span>";
        spellingReviewBtn.addEventListener("click", function () {
          startSpellingReview(progress);
        });
        spellingReviewWrap.appendChild(spellingReviewBtn);
      }

      homeScreen.appendChild(spellingReviewWrap);
      appendMissedInventory("Missed Spelling Inventory", progress.missedSpelling, "prompt");
    } else {
      var wordStudyLabel = document.createElement("div");
      wordStudyLabel.className = "section-label";
      wordStudyLabel.textContent = "Word Study Sets";
      homeScreen.appendChild(wordStudyLabel);

      var wordStudyList = document.createElement("div");
      wordStudyList.className = "set-list";

      window.WORD_STUDY_SETS.forEach(function (set) {
        var btn = document.createElement("button");
        btn.className = "set-card";
        btn.innerHTML =
          '<span><span class="set-name">' +
          set.name +
          '</span><span class="set-meta">' +
          set.questions.length +
          " questions</span></span>";
        btn.addEventListener("click", function () {
          startWordStudyQuiz(set);
        });
        wordStudyList.appendChild(btn);
      });

      homeScreen.appendChild(wordStudyList);

      var wordStudyReviewLabel = document.createElement("div");
      wordStudyReviewLabel.className = "section-label";
      wordStudyReviewLabel.textContent = "Practice";
      homeScreen.appendChild(wordStudyReviewLabel);

      var wordStudyReviewWrap = document.createElement("div");
      wordStudyReviewWrap.className = "home-actions";

      if (missedWordStudyList.length === 0) {
        var wordStudyNote = document.createElement("div");
        wordStudyNote.className = "empty-note";
        wordStudyNote.textContent =
          "No missed words yet. Words you miss will show up here to review.";
        wordStudyReviewWrap.appendChild(wordStudyNote);
      } else {
        var wordStudyReviewBtn = document.createElement("button");
        wordStudyReviewBtn.className = "set-card review-card";
        wordStudyReviewBtn.innerHTML =
          '<span><span class="set-name">Review Missed Word Study</span>' +
          '<span class="set-meta">' +
          missedWordStudyList.length +
          (missedWordStudyList.length === 1 ? " word" : " words") +
          "</span></span>";
        wordStudyReviewBtn.addEventListener("click", function () {
          startWordStudyReview(progress);
        });
        wordStudyReviewWrap.appendChild(wordStudyReviewBtn);
      }

      homeScreen.appendChild(wordStudyReviewWrap);
      appendMissedInventory("Missed Word Study Inventory", progress.missedWordStudy, "prompt");
    }

    var tabHistory = historyForTab(progress.history, activeHomeTab);
    var tabNoun =
      activeHomeTab === "math"
        ? "math"
        : activeHomeTab === "math2"
        ? "math 2"
        : activeHomeTab === "reading"
        ? "reading"
        : activeHomeTab === "social"
        ? "social studies"
        : activeHomeTab === "science"
        ? "science"
        : activeHomeTab === "dol"
        ? "DOL"
        : activeHomeTab === "spelling"
        ? "spelling"
        : activeHomeTab === "wordStudy"
        ? "word study"
        : "word";

    var progressLabel = document.createElement("div");
    progressLabel.className = "section-label";
    progressLabel.textContent =
      activeHomeTab === "math"
        ? "Math Progress"
        : activeHomeTab === "math2"
        ? "Math 2 Progress"
        : activeHomeTab === "reading"
        ? "Reading Progress"
        : activeHomeTab === "social"
        ? "Social Studies Progress"
        : activeHomeTab === "science"
        ? "Science Progress"
        : activeHomeTab === "dol"
        ? "DOL Progress"
        : activeHomeTab === "spelling"
        ? "Spelling Progress"
        : activeHomeTab === "wordStudy"
        ? "Word Study Progress"
        : "Word Progress";
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
    label.textContent =
      tab === "math"
        ? "Math Score History"
        : tab === "math2"
        ? "Math 2 Score History"
        : tab === "reading"
        ? "Reading Score History"
        : tab === "social"
        ? "Social Studies Score History"
        : tab === "science"
        ? "Science Score History"
        : tab === "dol"
        ? "DOL Score History"
        : tab === "spelling"
        ? "Spelling Score History"
        : tab === "wordStudy"
        ? "Word Study Score History"
        : "Word Score History";
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

  function exportMissedWords(progress) {
    var words = Object.keys(progress.missedWords).map(function (key) {
      return progress.missedWords[key].data;
    });
    var fileText =
      "// Words Jayden has missed, captured from the Words tab.\n" +
      '// Replace missingwords.js in the project with this downloaded file to save it.\n' +
      "window.MISSED_WORDS_SET = {\n" +
      '  id: "missed-words",\n' +
      '  name: "Missed Words",\n' +
      "  words: " + JSON.stringify(words, null, 2) + "\n" +
      "};\n";
    var blob = new Blob([fileText], { type: "text/javascript" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "missingwords.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function mathQuestions(set) {
    return set.questions.map(function (q) {
      return {
        type: "math",
        setId: set.id,
        topic: set.name,
        prompt: q.prompt,
        diagram: q.diagram,
        choices: q.choices,
        answerIndex: q.answerIndex
      };
    });
  }

  function startMathQuiz(set) {
    quizState = {
      setId: set.id,
      mode: "math",
      questions: mathQuestions(set),
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

  function startMath2Practice() {
    var picked = shuffle(window.MATH2_QUESTIONS)
      .slice(0, MATH2_SESSION_LENGTH)
      .map(function (q) {
        return {
          type: "math2",
          topic: "Math 2",
          prompt: q.prompt,
          choices: q.choices,
          answerIndex: q.answerIndex
        };
      });
    quizState = {
      setId: null,
      mode: "math2",
      questions: picked,
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function startMath2Review(progress) {
    var problems = Object.keys(progress.missedMath2).map(function (key) {
      return progress.missedMath2[key].data;
    });
    quizState = {
      setId: null,
      mode: "math2Review",
      questions: shuffle(problems),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function readingQuestions(passage) {
    return passage.questions.map(function (q) {
      return {
        type: "reading",
        passageId: passage.id,
        passageTitle: passage.title,
        passageText: passage.text,
        prompt: q.prompt,
        choices: q.choices,
        answerIndex: q.answerIndex
      };
    });
  }

  function startReadingQuiz(passage) {
    quizState = {
      setId: passage.id,
      mode: "reading",
      questions: shuffle(readingQuestions(passage)),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function startReadingReview(progress) {
    var questions = Object.keys(progress.missedReading).map(function (key) {
      return progress.missedReading[key].data;
    });
    quizState = {
      setId: null,
      mode: "readingReview",
      questions: shuffle(questions),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function socialQuestions(set) {
    return set.questions.map(function (q) {
      return {
        type: "social",
        setId: set.id,
        topic: set.name,
        prompt: q.prompt,
        choices: q.choices,
        answerIndex: q.answerIndex
      };
    });
  }

  function startSocialQuiz(set) {
    quizState = {
      setId: set.id,
      mode: "social",
      questions: shuffle(socialQuestions(set)),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function startSocialReview(progress) {
    var questions = Object.keys(progress.missedSocial).map(function (key) {
      return progress.missedSocial[key].data;
    });
    quizState = {
      setId: null,
      mode: "socialReview",
      questions: shuffle(questions),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function scienceQuestions(set) {
    return set.questions.map(function (q) {
      return {
        type: "science",
        setId: set.id,
        topic: set.name,
        prompt: q.prompt,
        choices: q.choices,
        answerIndex: q.answerIndex
      };
    });
  }

  function startScienceQuiz(set) {
    quizState = {
      setId: set.id,
      mode: "science",
      questions: shuffle(scienceQuestions(set)),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function startScienceReview(progress) {
    var questions = Object.keys(progress.missedScience).map(function (key) {
      return progress.missedScience[key].data;
    });
    quizState = {
      setId: null,
      mode: "scienceReview",
      questions: shuffle(questions),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function dolQuestions(set) {
    return set.questions.map(function (q) {
      return {
        type: "dol",
        setId: set.id,
        topic: set.name,
        prompt: q.prompt,
        choices: q.choices,
        answerIndex: q.answerIndex
      };
    });
  }

  function startDolQuiz(set) {
    quizState = {
      setId: set.id,
      mode: "dol",
      questions: shuffle(dolQuestions(set)),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function startDolReview(progress) {
    var questions = Object.keys(progress.missedDol).map(function (key) {
      return progress.missedDol[key].data;
    });
    quizState = {
      setId: null,
      mode: "dolReview",
      questions: shuffle(questions),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function spellingQuestions(set) {
    return set.questions.map(function (q) {
      return {
        type: "spelling",
        setId: set.id,
        topic: set.name,
        prompt: q.prompt,
        choices: q.choices,
        answerIndex: q.answerIndex
      };
    });
  }

  function startSpellingQuiz(set) {
    quizState = {
      setId: set.id,
      mode: "spelling",
      questions: shuffle(spellingQuestions(set)),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function startSpellingReview(progress) {
    var questions = Object.keys(progress.missedSpelling).map(function (key) {
      return progress.missedSpelling[key].data;
    });
    quizState = {
      setId: null,
      mode: "spellingReview",
      questions: shuffle(questions),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function wordStudyQuestions(set) {
    return set.questions.map(function (q) {
      return {
        type: "wordStudy",
        setId: set.id,
        topic: set.name,
        prompt: q.prompt,
        choices: q.choices,
        answerIndex: q.answerIndex
      };
    });
  }

  function startWordStudyQuiz(set) {
    quizState = {
      setId: set.id,
      mode: "wordStudy",
      questions: shuffle(wordStudyQuestions(set)),
      index: 0,
      score: 0,
      missedThisRound: []
    };
    renderQuestion();
    showScreen(quizScreen);
  }

  function startWordStudyReview(progress) {
    var questions = Object.keys(progress.missedWordStudy).map(function (key) {
      return progress.missedWordStudy[key].data;
    });
    quizState = {
      setId: null,
      mode: "wordStudyReview",
      questions: shuffle(questions),
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

    if (q.type === "reading") {
      var passageCard = document.createElement("div");
      passageCard.className = "passage-card";

      var passageTitleEl = document.createElement("div");
      passageTitleEl.className = "passage-title";
      passageTitleEl.textContent = q.passageTitle;
      passageCard.appendChild(passageTitleEl);

      q.passageText.split("\n\n").forEach(function (para) {
        var p = document.createElement("p");
        p.className = "passage-para";
        p.textContent = para;
        passageCard.appendChild(p);
      });

      quizScreen.appendChild(passageCard);

      var questionCard = document.createElement("div");
      questionCard.className = "phrase-card";
      var questionEl = document.createElement("p");
      questionEl.className = "phrase-text reading-question";
      questionEl.textContent = q.prompt;
      questionCard.appendChild(questionEl);
      quizScreen.appendChild(questionCard);
    } else {
      var card = document.createElement("div");
      card.className = "phrase-card";

      if (q.type === "math" || q.type === "social" || q.type === "math2" || q.type === "science" || q.type === "dol" || q.type === "spelling" || q.type === "wordStudy") {
        var topicEl = document.createElement("div");
        topicEl.className = "math-topic";
        topicEl.textContent = q.topic;
        card.appendChild(topicEl);
      }

      var phraseEl = document.createElement("p");
      phraseEl.className = "phrase-text";
      if (q.type === "math" || q.type === "social" || q.type === "math2" || q.type === "science" || q.type === "dol" || q.type === "spelling" || q.type === "wordStudy") {
        phraseEl.classList.add("text-prompt");
        phraseEl.textContent = q.prompt;
      } else {
        phraseEl.innerHTML = highlightWord(q.phrase, q.word);
      }
      card.appendChild(phraseEl);

      if (q.diagram) {
        var diagramWrap = document.createElement("div");
        diagramWrap.className = "diagram-wrap";
        var diagramSvg = buildDiagram(q.diagram);
        if (diagramSvg) diagramWrap.appendChild(diagramSvg);
        card.appendChild(diagramWrap);
      }

      quizScreen.appendChild(card);
    }

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
    } else if (quizState.mode === "math2" || quizState.mode === "math2Review") {
      updateMath2ProgressForAnswer(q, isCorrect);
    } else if (quizState.mode === "reading" || quizState.mode === "readingReview") {
      updateReadingProgressForAnswer(q, isCorrect);
    } else if (quizState.mode === "social" || quizState.mode === "socialReview") {
      updateSocialProgressForAnswer(q, isCorrect);
    } else if (quizState.mode === "science" || quizState.mode === "scienceReview") {
      updateScienceProgressForAnswer(q, isCorrect);
    } else if (quizState.mode === "dol" || quizState.mode === "dolReview") {
      updateDolProgressForAnswer(q, isCorrect);
    } else if (quizState.mode === "spelling" || quizState.mode === "spellingReview") {
      updateSpellingProgressForAnswer(q, isCorrect);
    } else if (quizState.mode === "wordStudy" || quizState.mode === "wordStudyReview") {
      updateWordStudyProgressForAnswer(q, isCorrect);
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

  function updateMath2ProgressForAnswer(problem, isCorrect) {
    var progress = loadProgress();
    var key = problem.prompt;

    if (isCorrect) {
      if (progress.missedMath2[key]) {
        progress.missedMath2[key].streak++;
        if (progress.missedMath2[key].streak >= STREAK_TO_CLEAR) {
          delete progress.missedMath2[key];
        }
      }
    } else {
      progress.missedMath2[key] = { streak: 0, data: problem };
    }

    saveProgress(progress);
  }

  function updateReadingProgressForAnswer(question, isCorrect) {
    var progress = loadProgress();
    var key = question.passageId + "::" + question.prompt;

    if (isCorrect) {
      if (progress.missedReading[key]) {
        progress.missedReading[key].streak++;
        if (progress.missedReading[key].streak >= STREAK_TO_CLEAR) {
          delete progress.missedReading[key];
        }
      }
    } else {
      progress.missedReading[key] = { streak: 0, data: question };
    }

    saveProgress(progress);
  }

  function updateSocialProgressForAnswer(question, isCorrect) {
    var progress = loadProgress();
    var key = question.setId + "::" + question.prompt;

    if (isCorrect) {
      if (progress.missedSocial[key]) {
        progress.missedSocial[key].streak++;
        if (progress.missedSocial[key].streak >= STREAK_TO_CLEAR) {
          delete progress.missedSocial[key];
        }
      }
    } else {
      progress.missedSocial[key] = { streak: 0, data: question };
    }

    saveProgress(progress);
  }

  function updateScienceProgressForAnswer(question, isCorrect) {
    var progress = loadProgress();
    var key = question.setId + "::" + question.prompt;

    if (isCorrect) {
      if (progress.missedScience[key]) {
        progress.missedScience[key].streak++;
        if (progress.missedScience[key].streak >= STREAK_TO_CLEAR) {
          delete progress.missedScience[key];
        }
      }
    } else {
      progress.missedScience[key] = { streak: 0, data: question };
    }

    saveProgress(progress);
  }

  function updateDolProgressForAnswer(question, isCorrect) {
    var progress = loadProgress();
    var key = question.setId + "::" + question.prompt;

    if (isCorrect) {
      if (progress.missedDol[key]) {
        progress.missedDol[key].streak++;
        if (progress.missedDol[key].streak >= STREAK_TO_CLEAR) {
          delete progress.missedDol[key];
        }
      }
    } else {
      progress.missedDol[key] = { streak: 0, data: question };
    }

    saveProgress(progress);
  }

  function updateSpellingProgressForAnswer(question, isCorrect) {
    var progress = loadProgress();
    var key = question.setId + "::" + question.prompt;

    if (isCorrect) {
      if (progress.missedSpelling[key]) {
        progress.missedSpelling[key].streak++;
        if (progress.missedSpelling[key].streak >= STREAK_TO_CLEAR) {
          delete progress.missedSpelling[key];
        }
      }
    } else {
      progress.missedSpelling[key] = { streak: 0, data: question };
    }

    saveProgress(progress);
  }

  function updateWordStudyProgressForAnswer(question, isCorrect) {
    var progress = loadProgress();
    var key = question.setId + "::" + question.prompt;

    if (isCorrect) {
      if (progress.missedWordStudy[key]) {
        progress.missedWordStudy[key].streak++;
        if (progress.missedWordStudy[key].streak >= STREAK_TO_CLEAR) {
          delete progress.missedWordStudy[key];
        }
      }
    } else {
      progress.missedWordStudy[key] = { streak: 0, data: question };
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

    var isMath = mode === "math" || mode === "mathReview" || mode === "math2" || mode === "math2Review";
    var isReading = mode === "reading" || mode === "readingReview";
    var isSocial = mode === "social" || mode === "socialReview";
    var isScience = mode === "science" || mode === "scienceReview";
    var isDol = mode === "dol" || mode === "dolReview";
    var isSpelling = mode === "spelling" || mode === "spellingReview";
    var isWordStudy = mode === "wordStudy" || mode === "wordStudyReview";
    var usesPrompt = isMath || isReading || isSocial || isScience || isDol || isSpelling || isWordStudy;

    if (missed.length > 0) {
      var label = document.createElement("div");
      label.className = "section-label";
      label.textContent = isMath
        ? "Problems to Review"
        : isReading || isSocial || isScience || isDol || isSpelling || isWordStudy
        ? "Questions to Review"
        : "Words to Review";
      endScreen.appendChild(label);

      var list = document.createElement("ul");
      list.className = "missed-list";
      missed.forEach(function (item) {
        var li = document.createElement("li");
        if (usesPrompt) {
          li.innerHTML =
            '<span class="missed-word missed-prompt">' +
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
