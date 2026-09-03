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
  },
  {
    id: "daily-drill-2",
    name: "Math Daily Drill 2",
    questions: [
      {
        prompt: "Which number makes the equation true? 5.2 × □ = 52",
        choices: ["10", "0.1", "1", "100"],
        answerIndex: 0
      },
      {
        prompt: "A piece of string is 5 yards 2 feet long. How many feet long is the string?",
        choices: ["17 feet", "7 feet", "15 feet", "20 feet"],
        answerIndex: 0
      },
      {
        prompt:
          "A container is 3/4 full of juice. Mia uses 1/2 of the juice that is currently in the container. What fraction of the whole container of juice did Mia use?",
        choices: ["3/8", "1/4", "1/2", "5/8"],
        answerIndex: 0
      },
      {
        prompt:
          "A rectangular garden is 12 feet long and 8 feet wide. 1/4 of the garden's total area is used for flowers. How many square feet are used for flowers?",
        choices: ["24 square feet", "20 square feet", "32 square feet", "96 square feet"],
        answerIndex: 0
      },
      {
        prompt:
          "A rectangular playground is 15 yards long and 12 yards wide. 1/3 of the playground is used for a basketball area. What is the area of the part NOT used for basketball?",
        choices: ["120 square yards", "60 square yards", "90 square yards", "180 square yards"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "daily-drill-3",
    name: "Math Daily Drill 3",
    questions: [
      {
        prompt:
          "A bucket is 2/3 full of paint. Liam uses 3/4 of the paint that is currently in the bucket. What fraction of the whole bucket of paint did he use?",
        choices: ["1/2", "5/7", "1/3", "3/4"],
        answerIndex: 0
      },
      {
        prompt: "Which number makes the equation true? 4.5 × □ = 450",
        choices: ["100", "0.1", "1", "10"],
        answerIndex: 0
      },
      {
        prompt: "A rope is 4 yards 1 foot long. How many feet long is the rope?",
        choices: ["13 ft", "7 ft", "11 ft", "15 ft"],
        answerIndex: 0
      },
      {
        prompt:
          "A rectangular pool deck has a length of 18 feet and a width of 11 feet. A railing will go around the entire deck. How many feet of railing are needed?",
        choices: ["58 ft", "29 ft", "198 ft", "396 ft"],
        answerIndex: 0
      },
      {
        prompt:
          "Minutes read each day: Monday 25, Tuesday 30, Wednesday 20, Thursday 35. How many more minutes were read on Tuesday and Thursday combined than on Monday and Wednesday combined?",
        choices: ["20", "10", "15", "25"],
        answerIndex: 0
      },
      {
        prompt:
          "A store received 9 crates of oranges. Each crate held 24 oranges. The oranges were packed equally into 18 bags. How many oranges were in each bag?",
        choices: ["12", "8", "16", "24"],
        answerIndex: 0
      },
      {
        prompt:
          "A rectangular garden is 20 yards long and 16 yards wide. Two-fifths of its total area will be used for vegetables. What is the area of the part not used for vegetables?",
        choices: ["192 square yards", "128 square yards", "64 square yards", "256 square yards"],
        answerIndex: 0
      }
    ]
  }
];
