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
  },
  {
    id: "math-test-1",
    name: "Math Test",
    questions: [
      {
        prompt: "A jug contains 4.8 liters of water. After 1.65 liters are used, how much water remains?",
        choices: ["3.15 L", "3.05 L", "3.25 L", "3.35 L"],
        answerIndex: 0
      },
      {
        prompt:
          "A class has 35 students. Three-fifths of the students brought lunch from home. How many students brought lunch from home?",
        choices: ["21", "14", "18", "28"],
        answerIndex: 0
      },
      {
        prompt: "What is the value of 0.072 × 10³?",
        choices: ["72", "0.72", "7.2", "720"],
        answerIndex: 0
      },
      {
        prompt: "A ribbon is 15 inches long. Which measurement is equivalent to 15 inches?",
        choices: ["1 1/4 ft", "1 1/3 ft", "1 1/2 ft", "1 3/4 ft"],
        answerIndex: 0
      },
      {
        prompt: "A square playground has a perimeter of 64 feet. What is the area of the playground?",
        choices: ["256 square feet", "128 square feet", "512 square feet", "1,024 square feet"],
        answerIndex: 0
      },
      {
        prompt:
          "The table shows the number of books returned to a library: Monday 24, Tuesday 31, Wednesday 28, Thursday 37. The library wants 150 books returned by the end of Thursday. How many more books were needed to reach the goal?",
        choices: ["30", "20", "40", "120"],
        answerIndex: 0
      },
      {
        prompt: "A rectangular prism is 7 cm long, 4 cm wide, and 5 cm high. What is its volume?",
        choices: ["140 cubic centimeters", "16 cubic centimeters", "35 cubic centimeters", "280 cubic centimeters"],
        answerIndex: 0
      },
      {
        prompt: "A rectangular floor has an area of 96 square feet. Its length is 12 feet. What is the perimeter of the floor?",
        choices: ["40 ft", "20 ft", "32 ft", "48 ft"],
        answerIndex: 0
      },
      {
        prompt:
          "A bus needs to arrive at school at 3:40 P.M. The trip takes 35 minutes. Students need 15 minutes to load the bus before it leaves. At what time should they start loading?",
        choices: ["2:50 P.M.", "2:40 P.M.", "3:05 P.M.", "3:20 P.M."],
        answerIndex: 0
      },
      {
        prompt: "Which fraction is greatest?",
        choices: ["1/2", "3/8", "5/12", "7/16"],
        answerIndex: 0
      },
      {
        prompt:
          "The table shows laps completed by four runners: Ava 18, Ben 23, Carlos 21, Dana 26. Each lap is 200 meters. How many more meters did Dana run than Ava?",
        choices: ["1,600 m", "800 m", "1,200 m", "8,800 m"],
        answerIndex: 0
      },
      {
        prompt:
          "A school receives 6 boxes of markers. Each box has 42 markers. The school gives 87 markers to classrooms. How many markers remain?",
        choices: ["165", "155", "175", "252"],
        answerIndex: 0
      },
      {
        prompt: "A rectangle has a perimeter of 54 yards. Its length is 17 yards. What is its area?",
        choices: ["170 square yards", "136 square yards", "180 square yards", "289 square yards"],
        answerIndex: 0
      },
      {
        prompt: "Which expression has a value of 6.4?",
        choices: ["0.64 × 10", "6.4 × 10", "64 × 10", "640 ÷ 10"],
        answerIndex: 0
      },
      {
        prompt: "A container holds 3 quarts of juice. How many cups of juice does it hold?",
        choices: ["12 cups", "6 cups", "8 cups", "16 cups"],
        answerIndex: 0
      },
      {
        prompt:
          "A quadrilateral has two pairs of parallel sides, four equal sides, and no right angles. Which figure must it be?",
        choices: ["Rhombus", "Rectangle", "Square", "Trapezoid"],
        answerIndex: 0
      },
      {
        prompt: "A rectangular prism has a volume of 180 cubic centimeters. Its length is 9 cm and its width is 5 cm. What is its height?",
        choices: ["4 cm", "5 cm", "20 cm", "36 cm"],
        answerIndex: 0
      },
      {
        prompt:
          "A container holds 3 pounds of trail mix. The trail mix is divided into bags that each hold 1/4 pound. How many bags can be filled?",
        choices: ["12", "7", "8", "16"],
        answerIndex: 0
      },
      {
        prompt:
          "The temperatures at noon for four days were 68°F, 72°F, 65°F, and 75°F. What is the difference between the highest and lowest temperatures?",
        choices: ["10°F", "7°F", "13°F", "140°F"],
        answerIndex: 0
      },
      {
        prompt:
          "A store receives 8 cartons with 36 bottles in each carton. It sells 95 bottles. Which equation can be used to find n, the number of bottles remaining?",
        choices: [
          "n = (8 × 36) − 95",
          "n = (8 + 36) − 95",
          "n = 95 − (8 × 36)",
          "n = (95 − 36) × 8"
        ],
        answerIndex: 0
      },
      {
        prompt: "A square has an area of 100 square feet. What is its perimeter?",
        choices: ["40 ft", "20 ft", "50 ft", "100 ft"],
        answerIndex: 0
      },
      {
        prompt:
          "A square garden has an area of 144 square feet. A fence will go around the garden except for a 3-foot-wide gate. How many feet of fencing are needed?",
        choices: ["45 ft", "48 ft", "51 ft", "141 ft"],
        answerIndex: 0
      },
      {
        prompt:
          "A rectangular recreation area is 24 yards long and 18 yards wide. A rectangular garden measuring 8 yards by 9 yards uses part of the area. The remaining area is divided equally among 4 activity stations. What is the area of each activity station?",
        choices: ["90 square yards", "72 square yards", "108 square yards", "360 square yards"],
        answerIndex: 0
      }
    ]
  }
];
