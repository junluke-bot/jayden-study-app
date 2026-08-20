// Math question sets for the Iowa Assessments practice app,
// transcribed from an Iowa Assessments practice test booklet (Test A).
// Figure/graph/grid-dependent questions from the source booklet were left
// out since this app only renders text, matching the math2.js convention.
// Each set has an id, a display name, and a list of questions.
// Each question has:
//   prompt      - the question text
//   choices     - four answer options (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/math2.js convention

window.MATH_SETS = [
  {
    id: "set1",
    name: "Math Set 1",
    questions: [
      {
        prompt: "Which rule generates the numerical pattern below? 3, 6, 9, 12, …",
        choices: ["Add 3", "Subtract 3", "Multiply by 2", "Divide by 4"],
        answerIndex: 0
      },
      {
        prompt: "What is the value of (16 + 8) − 4 ÷ 2?",
        choices: ["22", "18", "10", "8"],
        answerIndex: 0
      },
      {
        prompt:
          "There are 4 cars with 5 passengers in each car. After driving 30 miles, one person from each car left. After driving 10 more miles, 3 people left the first car. How many passengers are left in the 4 cars?",
        choices: ["13", "1", "4", "16"],
        answerIndex: 0
      },
      {
        prompt:
          "There are 5 bags with 6 marbles in each bag. If the number of marbles in each bag increases by 2, which expression shows the total number of marbles?",
        choices: ["5 × (6 + 2)", "5 × 6 + 2", "6 × (5 + 2)", "6 × 5 + 2"],
        answerIndex: 0
      },
      {
        prompt:
          "The price of a pack of chewing gum is $2.35 and the price of a bottle of water is $1.15. John bought 3 packs of chewing gum and 2 bottles of water. How much did he pay in total?",
        choices: ["$9.35", "$8.15", "$3.50", "$5"],
        answerIndex: 0
      },
      {
        prompt:
          "Which digit in the number 643,289 represents 1/10 of the value that it represents in the number 462,398?",
        choices: ["9", "3", "6", "8"],
        answerIndex: 0
      },
      {
        prompt: "How would you read the number 4.032?",
        choices: [
          "Four and thirty-two thousandths",
          "Four thousands thirty-two",
          "Four and thirty-two",
          "Forty and thirty-two"
        ],
        answerIndex: 0
      },
      {
        prompt: "Complete the sentence to make it true: 24.637 ___ 24.367",
        choices: [">", "<", "=", "≤"],
        answerIndex: 0
      },
      {
        prompt: "Round the number 265.283 to the nearest hundredth.",
        choices: ["265.28", "265.27", "265.29", "300"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "set2",
    name: "Math Set 2",
    questions: [
      {
        prompt: "One bag of chocolate candies contains 42 candies. How many candies are in 136 bags?",
        choices: ["5,712", "816", "3,264", "8,160"],
        answerIndex: 0
      },
      {
        prompt: "168 trees are arranged in 14 rows. How many trees are in each row?",
        choices: ["12", "210", "182", "154"],
        answerIndex: 0
      },
      {
        prompt: "Add 2/3 + 4/5",
        choices: ["1 7/15", "6/8", "8/15", "4/11"],
        answerIndex: 0
      },
      {
        prompt:
          "The length of a yellow ant is 3/4 of an inch, and the length of a black ant is 5/8 of an inch. What is the difference between the lengths of the yellow and black ants?",
        choices: ["1/8 inch", "2/4 inch", "15/32 inch", "8/12 inch"],
        answerIndex: 0
      },
      {
        prompt: "Three friends shared 10 pounds of ice cream equally. How many pounds did each of them get?",
        choices: ["3 1/3 lb.", "3/10 lb.", "7 lb.", "13 lb."],
        answerIndex: 0
      },
      {
        prompt:
          "Samantha bought 4/5 of a pound of ice cream. She ate 1/3 of the ice cream. How many pounds of ice cream did Samantha eat?",
        choices: ["4/15 lb.", "5/8 lb.", "5/12 lb.", "1/3 lb."],
        answerIndex: 0
      },
      {
        prompt:
          "The sides of a rectangle are 6 ft. and 4 ft. How many times will the area of the rectangle increase if the longer side is doubled?",
        choices: ["2", "12", "8", "4"],
        answerIndex: 0
      },
      {
        prompt: "Complete the sentence to make it true: 2 × 3/7 ___ 2 × 7/3",
        choices: ["<", ">", "=", "≥"],
        answerIndex: 0
      },
      {
        prompt: "Peter hikes 3/4 of a mile every day. How many miles does Peter hike in 5 days?",
        choices: ["3 3/4", "15/20", "2", "5"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "set3",
    name: "Math Set 3",
    questions: [
      {
        prompt:
          "1/3 of all students in the class are boys. They are divided into 2 equal groups. What fraction of all students are boys in one group?",
        choices: ["1/6", "3/6", "2/3", "2/6"],
        answerIndex: 0
      },
      {
        prompt: "One bowl can hold 1/2 a pound of rice. How many bowls will it take to hold 4 pounds of rice?",
        choices: ["8", "2", "4", "6"],
        answerIndex: 0
      },
      {
        prompt:
          "A right rectangular prism has a length of 2 ft, a width of 2 ft, and a height of 3 ft. What is its volume?",
        choices: ["12 ft³", "4 ft³", "6 ft³", "7 ft³"],
        answerIndex: 0
      },
      {
        prompt:
          "A duck starts at position (4, 3) on a coordinate grid. It moves 2 units up and 1 unit right. What is its new position?",
        choices: ["(5,5)", "(6,4)", "(5,1)", "(3,5)"],
        answerIndex: 0
      },
      {
        prompt: "Which of the following statements is true for a rhombus?",
        choices: [
          "Opposite sides are parallel",
          "All angles are equal",
          "A rhombus has 5 sides",
          "The sum of interior angles is 180°"
        ],
        answerIndex: 0
      },
      {
        prompt: "A right rectangular prism has dimensions 13 in × 15 in × 32 in. What is its volume?",
        choices: ["6,240 in³", "896 in³", "480 in³", "416 in³"],
        answerIndex: 0
      },
      {
        prompt: 'Fill in the missing sign to make this true: "four and twenty-six hundredths" ___ 4.62',
        choices: ["<", "≥", "=", ">"],
        answerIndex: 0
      },
      {
        prompt: "What is the area of a painting with a width of 4/5 of a yard and a height of 2/3 of a yard?",
        choices: [
          "8/15 square yards",
          "3/4 square yards",
          "3 1/3 square yards",
          "1 7/15 square yards"
        ],
        answerIndex: 0
      },
      {
        prompt: "Round to the nearest tenth the result of 2.48 − 0.4",
        choices: ["2.1", "2.8", "2.4", "2.0"],
        answerIndex: 0
      }
    ]
  }
];
