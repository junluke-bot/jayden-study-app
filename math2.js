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
    prompt: "What is 4.3 × 6?",
    choices: ["25.8", "2.58", "258", "19.8"],
    answerIndex: 0,
    category: "decMult"
  },
  {
    prompt: "What is 7.2 × 8?",
    choices: ["57.6", "5.76", "576", "49.6"],
    answerIndex: 0,
    category: "decMult"
  },
  {
    prompt: "What is 3.6 × 9?",
    choices: ["32.4", "3.24", "324", "23.4"],
    answerIndex: 0,
    category: "decMult"
  },
  {
    prompt: "What is 8.5 × 3?",
    choices: ["25.5", "2.55", "255", "22.5"],
    answerIndex: 0,
    category: "decMult"
  },
  {
    prompt: "What is 6.7 × 5?",
    choices: ["33.5", "3.35", "335", "28.5"],
    answerIndex: 0,
    category: "decMult"
  },
  {
    prompt: "What is 2.9 × 4?",
    choices: ["11.6", "1.16", "116", "7.6"],
    answerIndex: 0,
    category: "decMult"
  }
];
