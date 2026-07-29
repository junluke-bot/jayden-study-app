// A second math question bank for the Iowa Assessments practice app,
// transcribed from an Iowa Assessments practice test booklet.
// Unlike math.js (which procedurally generates problems), this is a fixed
// bank of real test questions. Figure/graph/grid-dependent questions from
// the source booklet were left out since this app only renders text.
//
// Each question has:
//   prompt      - the question text
//   choices     - four answer options (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/math.js convention

window.MATH2_QUESTIONS = [
  {
    prompt: "Which expression represents 6 less than the product of 7 and 4?",
    choices: ["(7 × 4) - 6", "(7 + 4) - 6", "7 ÷ 4 - 6", "(17 ÷ 4) - 6"],
    answerIndex: 0
  },
  {
    prompt: "Which shape always has four equal angles?",
    choices: ["Rectangle", "Rhombus", "Trapezoid", "Hexagon"],
    answerIndex: 0
  },
  {
    prompt: "Which answer choice makes this conversion correct? ___ gallons = 32 quarts",
    choices: ["8", "5", "6", "7"],
    answerIndex: 0
  },
  {
    prompt: "How many 1/8 servings would be in 5 cups?",
    choices: ["40", "5/8", "8/5", "45"],
    answerIndex: 0
  },
  {
    prompt:
      "Ms. Brown has 2,448 stickers to distribute equally into 48 folders. How many stickers will she put in each folder?",
    choices: ["51", "50", "52", "54"],
    answerIndex: 0
  },
  {
    prompt: "Alex drew a polygon where all the angles were obtuse. What polygon would Alex have drawn?",
    choices: ["Octagon", "Square", "Rectangle", "Triangle"],
    answerIndex: 0
  },
  {
    prompt: "Which statement describes the value of the expression below? 36 × 1/6",
    choices: [
      "The value of the expression is less than 36.",
      "The value of the expression is equal to 36.",
      "The value of the expression is greater than 36.",
      "The value of the expression is greater than 1 but less than 6."
    ],
    answerIndex: 0
  },
  {
    prompt:
      "Jordan bought 6 gallons of water on Monday. Each day, he drinks 3 quarts of water. After 5 days, how many quarts of water will he have left?",
    choices: ["9", "24", "18", "12"],
    answerIndex: 0
  },
  {
    prompt: "A farmer's market sells 1,600 pounds of strawberries every summer. What is the weight in ounces?",
    choices: ["25,600 ounces", "3,200 ounces", "16,000 ounces", "27,200 ounces"],
    answerIndex: 0
  },
  {
    prompt:
      "Mr. Garcia has 144 student portfolios to organize. He plans to place them equally into 24 folders. How many portfolios will be in each folder?",
    choices: ["6", "3,456", "120", "10"],
    answerIndex: 0
  },
  {
    prompt:
      "The owner of a bakery ordered new cake ingredients. Of the ingredients ordered, 1/5 are flour, 3/10 are sugar, and the rest are butter. What fraction of the ingredients are butter?",
    choices: ["1/2", "7/15", "9/20", "11/20"],
    answerIndex: 0
  },
  {
    prompt: "Michael drew a polygon where all angles were acute. What type of shape did he draw?",
    choices: ["Triangle", "Hexagon", "Quadrilateral", "Pentagon"],
    answerIndex: 0
  },
  {
    prompt: "Sarah jogged 3/4 mile every day for 6 days. How many yards did she jog in total?",
    choices: ["7,920", "3,520", "4,160", "4,620"],
    answerIndex: 0
  },
  {
    prompt:
      "Pattern A: 5, 15, 25, 35, 45, 55. Pattern B: 1, 3, 5, 7, 9, 11. Which answer choice would always be correct about the two patterns?",
    choices: [
      "Each term in Pattern A is 5 times the corresponding term in Pattern B.",
      "Each term in Pattern B is 5 times the corresponding term in Pattern A.",
      "Each term in Pattern A is 4 more than the corresponding term in Pattern B.",
      "Each term in Pattern A is 5 more than the corresponding term in Pattern B."
    ],
    answerIndex: 0
  },
  {
    prompt:
      "Lisa made a rectangular prism. The volume in one layer is 14 cubic inches, and the prism has 5 layers. What is the total volume?",
    choices: ["70 cubic inches", "14 cubic inches", "28 cubic inches", "210 cubic inches"],
    answerIndex: 0
  },
  {
    prompt: "Which expression represents 9 times the sum of 6 and 3?",
    choices: ["(6 + 3) × 9", "(6 + 3) ÷ 9", "(6 × 3) + 9", "(6 ÷ 3) × 9"],
    answerIndex: 0
  },
  {
    prompt: "Which statement correctly describes the values of the 3 in 345.21 and 30.45?",
    choices: [
      "The value of the 3 in 345.21 is 10 times the value of the 3 in 30.45.",
      "The value of the 3 in 345.21 is 1/10 the value of the 3 in 30.45.",
      "The value of the 3 in 345.21 is 1/100 the value of the 3 in 30.45.",
      "The value of the 3 in 345.21 is 100 times the value of the 3 in 30.45."
    ],
    answerIndex: 0
  },
  {
    prompt: "Which situation represents 1/9 ÷ 3?",
    choices: [
      "A baker has 1/9 of a cake and cuts it into 3 equal smaller parts.",
      "9 loaves of bread are split evenly among 3 people.",
      "A box of pencils is divided equally into 3 groups, and each group is further split into 3 equal pieces.",
      "A bag of candy is split equally into 3 equal pieces."
    ],
    answerIndex: 0
  },
  {
    prompt:
      "Emma and Noah both walk to school. Emma's house is 5/6 mile from school. Noah's house is 8/9 mile from school. How much farther, in miles, does Noah have to walk?",
    choices: ["1/18", "3/3", "1/6", "1/3"],
    answerIndex: 0
  },
  {
    prompt: "Solve using the Dividing Powers of Ten: 572.4 ÷ 10²",
    choices: ["5.724", "0.5724", "57,240", "57.24"],
    answerIndex: 0
  },
  {
    prompt: "Which expression shows this: 7 more than the quotient of 18 and 3?",
    choices: ["(18 ÷ 3) + 7", "(18 + 3) ÷ 7", "18 ÷ 3 × 7", "(18 × 3) + 7"],
    answerIndex: 0
  },
  {
    prompt: "Which answer choice makes this conversion correct? ___ cups = 32 ounces",
    choices: ["4", "6", "8", "10"],
    answerIndex: 0
  },
  {
    prompt: "Which answer choice makes this conversion correct? ___ ounces = 6 cups",
    choices: ["48", "12", "24", "64"],
    answerIndex: 0
  },
  {
    prompt: "Which answer choice makes this conversion correct? ___ pints = 8 quarts",
    choices: ["16", "14", "20", "24"],
    answerIndex: 0
  },
  {
    prompt:
      "Ajay makes a rectangular prism using 64 cubes that measure 1 inch on each side. The volume of this rectangular prism is 64 cubic inches. What are the dimensions of Ajay's prism?",
    choices: [
      "Length: 4, Width: 4, Height: 4",
      "Length: 2, Width: 4, Height: 6",
      "Length: 3, Width: 3, Height: 6",
      "Length: 5, Width: 5, Height: 4"
    ],
    answerIndex: 0
  },
  {
    prompt:
      "Yesterday, Carla ran 3⅔ miles in the morning. Then, she ran 4⅚ miles in the evening. How many miles did she run altogether?",
    choices: ["8 1/2", "7 3/6", "8 5/6", "8 1/3"],
    answerIndex: 0
  },
  {
    prompt: "Choose the shape that has just one pair of parallel sides.",
    choices: ["Trapezoid", "Rectangle", "Rhombus", "Triangle"],
    answerIndex: 0
  },
  {
    prompt: "Solve: 684.92 ÷ 10³",
    choices: ["0.68492", "6.8492", "68,492", "684.92"],
    answerIndex: 0
  },
  {
    prompt:
      "Isabel lives 2¾ miles from the library, while Miguel lives 1⅞ miles from the library. How much farther does Isabel live from the library than Miguel?",
    choices: ["7/8 miles", "2 3/4 miles", "1 1/8 miles", "5/8 miles"],
    answerIndex: 0
  },
  {
    prompt: "Solve: 5⅔ - 3¼ = ?",
    choices: ["2 5/12", "2 3/4", "2 1/6", "2 2/9"],
    answerIndex: 0
  },
  {
    prompt:
      "David has a 3-gallon jug of lemonade. He poured out 20 ounces into a thermos. How much lemonade is left in the jug, in ounces?",
    choices: ["364", "300", "380", "396"],
    answerIndex: 0
  },
  {
    prompt:
      "What is the value of the missing number (?) in this subtraction problem? 507,318 minus 2?4,791 equals 212,527.",
    choices: ["9", "8", "7", "0"],
    answerIndex: 0
  },
  {
    prompt:
      "In the Huntington Theater, there are 3 sections. Each section has 20 rows, and each row has 10 seats. How many seats are there in the Huntington Theater?",
    choices: ["600", "33", "200", "70"],
    answerIndex: 0
  },
  {
    prompt:
      "If tickets at the Huntington Theater (600 seats) sell for $50 each, how much would it cost to buy all the tickets in the theater?",
    choices: ["$30,000", "$3,000", "$1,650", "$300,000"],
    answerIndex: 0
  },
  {
    prompt:
      "A gardener used this table to calculate seeds needed: 3 rows needs 24 seeds, 4 rows needs 32 seeds, 5 rows needs 40 seeds, 6 rows needs 48 seeds. What rule explains how the number of seeds relates to the number of rows?",
    choices: ["Multiply by 8", "Add 21", "Add 8", "Multiply by 6"],
    answerIndex: 0
  },
  {
    prompt:
      "Using the rule that the number of seeds is the number of rows multiplied by 8, if a gardener plants 10 rows, how many seeds will they need?",
    choices: ["80", "18", "56", "60"],
    answerIndex: 0
  },
  {
    prompt: "Which expression equals 385.49?",
    choices: [
      "(3 × 100) + (8 × 10) + (5 × 1) + (4 × 1/10) + (9 × 1/100)",
      "(3 × 100) + (5 × 10) + (8 × 1) + (4 × 1/10) + (9 × 1/100)",
      "(3 × 100) + (8 × 10) + (4 × 1) + (4 × 1/10) + (9 × 1/100)",
      "(3 × 100) + (8 × 10) + (5 × 1) + (9 × 1/10) + (4 × 1/100)"
    ],
    answerIndex: 0
  },
  {
    prompt: "Which shape does not have any parallel sides?",
    choices: ["Kite", "Rhombus", "Square", "Trapezoid"],
    answerIndex: 0
  },
  {
    prompt:
      "Maya has a picture that is 30 inches wide. The length of the picture is 1½ times as long as it is wide. What is the length of the picture?",
    choices: ["45 inches", "35 inches", "40 inches", "50 inches"],
    answerIndex: 0
  },
  {
    prompt: "5.482 was rounded to 5.48. What is the place value name of the place it was rounded to?",
    choices: ["Hundredths place", "Tens place", "Ones place", "Tenths place"],
    answerIndex: 0
  },
  {
    prompt: "How would you order these decimals from least to greatest? 3.21, 3.12, 3.25, 3.02",
    choices: [
      "3.02, 3.12, 3.21, 3.25",
      "3.12, 3.02, 3.21, 3.25",
      "3.25, 3.21, 3.12, 3.02",
      "3.25, 3.12, 3.02, 3.21"
    ],
    answerIndex: 0
  }
];
