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
        prompt: "A recipe calls for 2 quarts of milk. Sarah has 3 cups of milk. How many more cups does she need?",
        choices: ["5 cups", "3 cups", "8 cups", "11 cups"],
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
  },
  {
    id: "daily-drill",
    name: "Math Daily Drill",
    questions: [
      {
        prompt:
          "A water bottle is 3/4 full. Jayden drinks 1/3 of the water that is currently in the bottle. What fraction of the whole bottle of water did he drink?",
        choices: ["1/4", "1/12", "5/12", "7/12"],
        answerIndex: 0
      },
      {
        prompt: "Which number makes the equation true? 3.6 × [ ___ ] = 36",
        choices: ["10", "0.1", "1", "100"],
        answerIndex: 0
      },
      {
        prompt: "A ribbon is 3 yards 2 feet long. How many feet long is the ribbon?",
        choices: ["11 ft", "5 ft", "9 ft", "12 ft"],
        answerIndex: 0
      },
      {
        prompt:
          "A rectangular garden has a length of 14 feet and a width of 9 feet. A fence will go around the entire garden. How many feet of fencing are needed?",
        choices: ["46 ft", "23 ft", "126 ft", "252 ft"],
        answerIndex: 0
      },
      {
        prompt:
          "Books checked out from the library: Monday 36, Tuesday 48, Wednesday 42, Thursday 54. How many more books were checked out on Tuesday and Thursday combined than on Monday and Wednesday combined?",
        choices: ["24", "12", "18", "30"],
        answerIndex: 0
      },
      {
        prompt:
          "A school bought 8 boxes of pencils. Each box contained 36 pencils. The pencils were shared equally among 12 classrooms. How many pencils did each classroom receive?",
        choices: ["24", "18", "32", "48"],
        answerIndex: 0
      },
      {
        prompt:
          "A rectangular playground is 24 yards long and 18 yards wide. One-fourth of its total area will be used for a basketball practice area. What is the area of the part not used for basketball?",
        choices: ["324 square yards", "108 square yards", "216 square yards", "432 square yards"],
        answerIndex: 0
      }
    ]
  }
];
