// A second math question bank for the Iowa Assessments practice app.
// Five original computation questions covering multi-digit multiplication,
// long division, and fraction/decimal arithmetic.
//
// Each question has:
//   prompt      - the question text
//   choices     - four answer options (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/math.js convention
//   category    - identifies the computation type so app.js can generate
//                 fresh practice problems of the same type when this
//                 question is missed (see MATH2_GENERATORS in app.js)

window.MATH2_QUESTIONS = [
  {
    prompt: "What is 356 × 47?",
    choices: ["16,732", "16,832", "15,732", "17,632"],
    answerIndex: 0,
    category: "mult3x2"
  },
  {
    prompt: "What is 8,568 ÷ 24?",
    choices: ["357", "358", "347", "367"],
    answerIndex: 0,
    category: "div4x2"
  },
  {
    prompt: "What is 2/3 + 1/4?",
    choices: ["11/12", "3/7", "3/12", "9/12"],
    answerIndex: 0,
    category: "fracAddSub"
  },
  {
    prompt: "What is 3/5 × 2/3?",
    choices: ["2/5", "5/8", "6/8", "3/2"],
    answerIndex: 0,
    category: "fracMulDiv"
  },
  {
    prompt: "What is 6.4 × 7?",
    choices: ["44.8", "4.48", "448", "43.8"],
    answerIndex: 0,
    category: "decMult"
  }
];
