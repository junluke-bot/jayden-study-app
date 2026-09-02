// Math question sets for the Iowa Assessments practice app.
// Each set has an id, a display name, and a list of questions.
// Each question has:
//   prompt      - the question text
//   choices     - four answer options (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/math2.js convention

window.MATH_SETS = [
  {
    id: "set1",
    name: "Daily Practice",
    questions: [
      {
        prompt:
          "A store had 45.8 pounds of rice. It sold 18.65 pounds in the morning and received 6.5 more pounds in the afternoon. How many pounds of rice does the store have now?",
        choices: ["33.65", "20.65", "27.15", "34.15"],
        answerIndex: 0
      },
      {
        prompt: "A rectangular playground is 7 1/2 yards long and 4 1/2 yards wide. What is its perimeter?",
        choices: ["24 yards", "12 yards", "33 3/4 yards", "48 yards"],
        answerIndex: 0
      },
      {
        prompt: "There are 48 students in a club. 3/8 of the students are in fifth grade. How many students are not in fifth grade?",
        choices: ["30", "18", "24", "36"],
        answerIndex: 0
      },
      {
        prompt:
          "Noah read 22 pages Monday, 28 Tuesday, 25 Wednesday, and 20 Thursday. He wants to average 24 pages per day for 5 days. How many pages must he read Friday?",
        choices: ["25", "24", "26", "29"],
        answerIndex: 0
      },
      {
        prompt: "A rectangle has a perimeter of 22 feet. Its length is 7 feet. What is its width?",
        choices: ["4 feet", "7 1/2 feet", "8 feet", "15 feet"],
        answerIndex: 0
      },
      {
        prompt: "A box contains 60 pencils. 1/5 are red and 1/3 are blue. The rest are yellow. How many pencils are yellow?",
        choices: ["28", "32", "40", "48"],
        answerIndex: 0
      },
      {
        prompt: "A school collected $125.50 on Monday and $98.75 on Tuesday. It spent $46.25 on supplies. How much money remained?",
        choices: ["$178.00", "$180.00", "$224.25", "$270.50"],
        answerIndex: 0
      }
    ]
  }
];
