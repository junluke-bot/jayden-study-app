// Randomly-generated math practice problems.
// Depends on nothing; exposes window.MATH_PROBLEM_TYPES, a list of
// { id, name, generate() } where generate() returns a question shaped like:
//   { type: "math", topic, prompt, choices, answerIndex }
// (choices[0] is always the correct answer, mirroring the words.js convention —
// app.js shuffles choice order at render time.)

(function () {
  "use strict";

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      var t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  }

  function reduceFraction(num, den) {
    var g = gcd(num, den);
    return [num / g, den / g];
  }

  function fractionText(num, den) {
    return num + "/" + den;
  }

  function numericDistractors(correct, scale, count) {
    var set = new Set();
    var guard = 0;
    while (set.size < count && guard < 300) {
      guard++;
      var delta = randInt(1, scale) * (Math.random() < 0.5 ? 1 : -1);
      var candidate = correct + delta;
      if (candidate > 0 && candidate !== correct) {
        set.add(candidate);
      }
    }
    return Array.from(set);
  }

  function fractionDistractors(correctText, baseNum, baseDen, extraTexts) {
    var set = new Set();
    extraTexts.forEach(function (t) {
      if (t !== correctText && set.size < 3) set.add(t);
    });
    var guard = 0;
    while (set.size < 3 && guard < 100) {
      guard++;
      var fakeNum = baseNum + randInt(-2, 2);
      var fakeDen = baseDen + randInt(-2, 2);
      if (fakeNum > 0 && fakeDen > 0) {
        var t = fractionText(fakeNum, fakeDen);
        if (t !== correctText) set.add(t);
      }
    }
    return Array.from(set).slice(0, 3);
  }

  function toMixedText(num, den) {
    var reduced = reduceFraction(num, den);
    var n = reduced[0], d = reduced[1];
    var whole = Math.floor(n / d);
    var rem = n % d;
    if (rem === 0) return String(whole);
    if (whole === 0) return fractionText(rem, d);
    return whole + " " + fractionText(rem, d);
  }

  function mixedPromptText(whole, num, den) {
    return whole + " " + fractionText(num, den);
  }

  function mixedDistractors(correctText, baseNum, baseDen, rawPairs, extraTexts) {
    var set = new Set();
    (extraTexts || []).forEach(function (t) {
      if (t !== correctText && set.size < 3) set.add(t);
    });
    rawPairs.forEach(function (pair) {
      if (set.size >= 3) return;
      if (pair[0] > 0 && pair[1] > 0) {
        var t = toMixedText(pair[0], pair[1]);
        if (t !== correctText) set.add(t);
      }
    });
    var guard = 0;
    while (set.size < 3 && guard < 100) {
      guard++;
      var fakeNum = baseNum + randInt(-2, 2);
      var fakeDen = baseDen + randInt(-2, 2);
      if (fakeNum > 0 && fakeDen > 0) {
        var t = toMixedText(fakeNum, fakeDen);
        if (t !== correctText) set.add(t);
      }
    }
    return Array.from(set).slice(0, 3);
  }

  function formatCents(cents) {
    return (cents / 100).toFixed(2);
  }

  function generateDecimalAddition() {
    var aCents = randInt(100, 9999);
    var bCents = randInt(100, 9999);
    var correctCents = aCents + bCents;
    var scale = Math.max(50, Math.round(correctCents * 0.08));
    var distractors = numericDistractors(correctCents, scale, 3);
    return {
      type: "math",
      topic: "Decimal Addition",
      prompt: formatCents(aCents) + " + " + formatCents(bCents),
      choices: [formatCents(correctCents)].concat(distractors.map(formatCents)),
      answerIndex: 0
    };
  }

  function generateDecimalSubtraction() {
    var aCents = randInt(200, 9999);
    var bCents = randInt(100, aCents - 1);
    var correctCents = aCents - bCents;
    var scale = Math.max(50, Math.round(correctCents * 0.08));
    var distractors = numericDistractors(correctCents, scale, 3);
    return {
      type: "math",
      topic: "Decimal Subtraction",
      prompt: formatCents(aCents) + " − " + formatCents(bCents),
      choices: [formatCents(correctCents)].concat(distractors.map(formatCents)),
      answerIndex: 0
    };
  }

  function generateMultiplication() {
    var a = randInt(100, 999);
    var b = randInt(10, 99);
    var correct = a * b;
    var scale = Math.max(20, Math.round(correct * 0.08));
    var distractors = numericDistractors(correct, scale, 3);
    return {
      type: "math",
      topic: "3-digit × 2-digit Multiplication",
      prompt: a + " × " + b,
      choices: [String(correct)].concat(distractors.map(String)),
      answerIndex: 0
    };
  }

  function generateFractionMultiplication() {
    var n1 = randInt(1, 9), d1 = randInt(2, 9);
    var n2 = randInt(1, 9), d2 = randInt(2, 9);
    var rawNum = n1 * n2, rawDen = d1 * d2;
    var reduced = reduceFraction(rawNum, rawDen);
    var correctText = fractionText(reduced[0], reduced[1]);
    var extras = [
      fractionText(rawNum, rawDen),
      fractionText(n1 + n2, d1 + d2),
      fractionText(n1 * d2, d1 * n2)
    ];
    var distractors = fractionDistractors(correctText, reduced[0], reduced[1], extras);
    return {
      type: "math",
      topic: "Fraction Multiplication",
      prompt: fractionText(n1, d1) + " × " + fractionText(n2, d2),
      choices: [correctText].concat(distractors),
      answerIndex: 0
    };
  }

  function generateFractionDivision() {
    var n1 = randInt(1, 9), d1 = randInt(2, 9);
    var n2 = randInt(1, 9), d2 = randInt(2, 9);
    // a/b ÷ c/d = a/b × d/c
    var rawNum = n1 * d2, rawDen = d1 * n2;
    var reduced = reduceFraction(rawNum, rawDen);
    var correctText = fractionText(reduced[0], reduced[1]);
    var extras = [
      fractionText(rawNum, rawDen),
      fractionText(n1 * n2, d1 * d2),
      fractionText(n1 * d1, n2 * d2)
    ];
    var distractors = fractionDistractors(correctText, reduced[0], reduced[1], extras);
    return {
      type: "math",
      topic: "Fraction Division",
      prompt: fractionText(n1, d1) + " ÷ " + fractionText(n2, d2),
      choices: [correctText].concat(distractors),
      answerIndex: 0
    };
  }

  function generateMixedFractionMultiplication() {
    var whole = randInt(1, 5);
    var d1 = randInt(2, 9);
    var n1 = randInt(1, d1 - 1);
    var n2 = randInt(1, 9), d2 = randInt(2, 9);
    var improperNum = whole * d1 + n1;

    var rawNum = improperNum * n2;
    var rawDen = d1 * d2;
    var reduced = reduceFraction(rawNum, rawDen);
    var correctText = toMixedText(rawNum, rawDen);

    var extraTexts = [];
    if (reduced[0] >= reduced[1]) {
      extraTexts.push(fractionText(reduced[0], reduced[1]));
    }

    var rawPairs = [
      [n1 * n2, d1 * d2], // ignored the whole number part
      [whole * n2, d2], // ignored the fractional part
      [improperNum * d2, n2 * d1] // accidentally divided instead of multiplying
    ];

    var distractors = mixedDistractors(correctText, reduced[0], reduced[1], rawPairs, extraTexts);

    return {
      type: "math",
      topic: "Mixed Number × Fraction",
      prompt: mixedPromptText(whole, n1, d1) + " × " + fractionText(n2, d2),
      choices: [correctText].concat(distractors),
      answerIndex: 0
    };
  }

  function generateMixedFractionDivision() {
    var whole = randInt(1, 5);
    var d1 = randInt(2, 9);
    var n1 = randInt(1, d1 - 1);
    var n2 = randInt(1, 9), d2 = randInt(2, 9);
    var improperNum = whole * d1 + n1;

    // improperNum/d1 ÷ n2/d2 = improperNum/d1 × d2/n2
    var rawNum = improperNum * d2;
    var rawDen = d1 * n2;
    var reduced = reduceFraction(rawNum, rawDen);
    var correctText = toMixedText(rawNum, rawDen);

    var extraTexts = [];
    if (reduced[0] >= reduced[1]) {
      extraTexts.push(fractionText(reduced[0], reduced[1]));
    }

    var rawPairs = [
      [improperNum * n2, d1 * d2], // accidentally multiplied instead of dividing
      [whole * d2, n2], // ignored the fractional part
      [n1 * d2, d1 * n2] // used only the fractional part, ignored the whole number
    ];

    var distractors = mixedDistractors(correctText, reduced[0], reduced[1], rawPairs, extraTexts);

    return {
      type: "math",
      topic: "Mixed Number ÷ Fraction",
      prompt: mixedPromptText(whole, n1, d1) + " ÷ " + fractionText(n2, d2),
      choices: [correctText].concat(distractors),
      answerIndex: 0
    };
  }

  window.MATH_PROBLEM_TYPES = [
    { id: "decAdd", name: "Decimal Addition", generate: generateDecimalAddition },
    { id: "decSub", name: "Decimal Subtraction", generate: generateDecimalSubtraction },
    { id: "mult3x2", name: "3-digit × 2-digit Multiplication", generate: generateMultiplication },
    { id: "fracMult", name: "Fraction Multiplication", generate: generateFractionMultiplication },
    { id: "fracDiv", name: "Fraction Division", generate: generateFractionDivision },
    { id: "mixedFracMult", name: "Mixed Number × Fraction", generate: generateMixedFractionMultiplication },
    { id: "mixedFracDiv", name: "Mixed Number ÷ Fraction", generate: generateMixedFractionDivision }
  ];
})();
