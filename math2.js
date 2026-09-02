// Fixed Math 2 practice sets, alongside the procedurally-generated unit
// conversion questions in app.js. Each set has an id, a display name, and
// a list of questions.
// Each question has:
//   prompt      - the question text
//   choices     - four answer options (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/math.js convention

window.MATH2_SETS = [
  {
    id: "computation1",
    name: "Computation Practice",
    questions: [
      {
        prompt: "8,304 − 5,768 = ?",
        choices: ["2,536", "2,546", "3,536", "3,546"],
        answerIndex: 0
      },
      {
        prompt: "347 × 26 = ?",
        choices: ["9,022", "8,322", "8,922", "9,122"],
        answerIndex: 0
      },
      {
        prompt: "6,552 ÷ 24 = ?",
        choices: ["273", "263", "283", "293"],
        answerIndex: 0
      },
      {
        prompt: "3/4 + 5/8 = ?",
        choices: ["1 3/8", "1 1/8", "1 5/8", "1 7/8"],
        answerIndex: 0
      },
      {
        prompt: "5/6 × 3/5 = ?",
        choices: ["1/2", "2/3", "3/4", "5/6"],
        answerIndex: 0
      },
      {
        prompt: "4.72 + 8.6 = ?",
        choices: ["13.32", "12.32", "13.22", "14.32"],
        answerIndex: 0
      },
      {
        prompt: "7.5 − 2.86 = ?",
        choices: ["4.64", "4.54", "5.36", "5.64"],
        answerIndex: 0
      },
      {
        prompt: "3.8 × 2.4 = ?",
        choices: ["9.12", "8.12", "8.22", "9.22"],
        answerIndex: 0
      },
      {
        prompt: "9.6 ÷ 1.2 = ?",
        choices: ["8", "0.8", "80", "800"],
        answerIndex: 0
      },
      {
        prompt: "7/8 ÷ 1/4 = ?",
        choices: ["3 1/2", "2 1/2", "3", "4"],
        answerIndex: 0
      }
    ]
  }
];
