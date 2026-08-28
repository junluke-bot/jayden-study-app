// Math question sets for the Iowa Assessments practice app,
// transcribed from an Iowa Assessments practice test booklet (Test A).
// Limited to fractions, decimals, and geometry (measurement/volume/shapes/
// coordinates). Figure/graph/grid-dependent questions from the source
// booklet were left out since this app only renders text, matching the
// math2.js convention.
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
      }
    ]
  },
  {
    id: "set2",
    name: "Math Set 2",
    questions: [
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
      },
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
      }
    ]
  },
  {
    id: "set3",
    name: "Math Set 3",
    questions: [
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
  },
  {
    id: "set4",
    name: "Math Set 4",
    questions: [
      {
        prompt:
          "Which digit in the number 276,325 has 10 times greater value than it has in the number 723,652?",
        choices: ["6", "3", "5", "7"],
        answerIndex: 0
      },
      {
        prompt: 'Which of the following numbers is equal to "twenty-five and twelve thousandths"?',
        choices: ["25.012", "25.12", "25,012", "2,512,000"],
        answerIndex: 0
      },
      {
        prompt: "What digit makes this true? 4.758 < 4.7__8",
        choices: ["6", "1", "3", "4"],
        answerIndex: 0
      },
      {
        prompt: "What is the area of an elementary school basketball court with a length of 74 ft and a width of 42 ft?",
        choices: ["3,108 sq. ft.", "444 sq. ft.", "1,776 sq. ft.", "4,446 sq. ft."],
        answerIndex: 0
      },
      {
        prompt: "5 people share 1/2 lb of chocolate equally. How much chocolate will each person get?",
        choices: ["1/10 lb.", "2/7 lb.", "2 1/2 lb.", "10 lb."],
        answerIndex: 0
      },
      {
        prompt: "3 5/8 − 1 3/4 = ?",
        choices: ["1 7/8", "2 2/4", "2 1/8", "5 2/4"],
        answerIndex: 0
      },
      {
        prompt: "A row of circles has 4 yellow circles and 3 red circles. What fraction of the circles are red?",
        choices: ["3/7", "3/4", "4/3", "4/7"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "set5",
    name: "Math Set 5",
    questions: [
      {
        prompt: "Each of 5 pieces of cheese weighs 3/4 of a pound. How much do the pieces of cheese weigh altogether?",
        choices: ["15/4 lb.", "2 lb.", "15/20 lb.", "8/9 lb."],
        answerIndex: 0
      },
      {
        prompt:
          "The sides of a rectangle are 6 and 10. How many times will the area of the rectangle decrease if the shorter side is divided in half?",
        choices: ["2", "3", "4", "5"],
        answerIndex: 0
      },
      {
        prompt: "Marsha sold 2/3 of a pound of cake to each of 5 customers. How many pounds of cake did Marsha sell in total?",
        choices: ["less than 5 pounds", "more than 5 pounds", "5 pounds", "more than 10 pounds"],
        answerIndex: 0
      },
      {
        prompt: "A stick is 1/2 a yard long. Joshua cut the stick into 3 equal pieces. What is the length of each piece?",
        choices: ["1/6 yard", "3/6 yard", "1 1/2 yard", "2 yard"],
        answerIndex: 0
      },
      {
        prompt: "How many cans of 1/3 of a liter can be filled with 2 liters of juice?",
        choices: ["6", "3", "2", "1"],
        answerIndex: 0
      },
      {
        prompt: "Peter's stick is 3 feet long. Michael's stick is 2 inches shorter than Peter's. How long is Michael's stick?",
        choices: ["2 ft 10 in.", "2 ft 8 in.", "3 ft 2 in.", "1 ft."],
        answerIndex: 0
      },
      {
        prompt: "A right rectangular prism has dimensions 1 in × 2 in × 4 in. What is its volume?",
        choices: ["8 in³", "7 in³", "4 in³", "2 in³"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "set6",
    name: "Math Set 6",
    questions: [
      {
        prompt: "What is the volume of a box whose width is 3 ft, length is 5 ft, and height is 2 ft?",
        choices: ["30 ft³", "15 ft³", "10 ft³", "6 ft³"],
        answerIndex: 0
      },
      {
        prompt: "How many angles does a pentagon have?",
        choices: ["5", "6", "4", "3"],
        answerIndex: 0
      },
      {
        prompt: "Which of the following attributes does NOT belong to a square?",
        choices: ["The sum of interior angles is 180°", "All angles are equal", "The number of sides is 4", "Opposite sides are parallel"],
        answerIndex: 0
      },
      {
        prompt:
          "A solid figure is made of two parts: a yellow piece with a volume of 2/5 and a green piece with a volume of 3/4. What is the total volume of the solid figure?",
        choices: ["1 3/20", "1 1/10", "3/10", "5/9"],
        answerIndex: 0
      },
      {
        prompt: "Fill in the missing sign: 3 × 1/5 ___ 3 × 7/4",
        choices: ["<", ">", "=", "≥"],
        answerIndex: 0
      },
      {
        prompt: "Convert 36 feet to inches.",
        choices: ["432 inches", "48 inches", "108 inches", "360 inches"],
        answerIndex: 0
      },
      {
        prompt: "What is the area of the base of a right rectangular prism with a volume of 312 and a height of 13?",
        choices: ["24", "13", "299", "325"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "set7",
    name: "Math Set 7",
    questions: [
      {
        prompt: "What is the position of point A?",
        diagram: { type: "coordGrid", range: [-4, 4], points: [{ x: -3, y: 1, label: "A" }] },
        choices: ["(-3,1)", "(1,-3)", "(3,1)", "(1,3)"],
        answerIndex: 0
      },
      {
        prompt: "What type of figure is ABCD?",
        diagram: {
          type: "coordGrid",
          range: [0, 6],
          polygon: [[1, 1], [4, 1], [6, 4], [3, 4]],
          points: [
            { x: 1, y: 1, label: "A" },
            { x: 4, y: 1, label: "B" },
            { x: 6, y: 4, label: "C" },
            { x: 3, y: 4, label: "D" }
          ]
        },
        choices: ["Parallelogram", "Rhombus", "Square", "Rectangle"],
        answerIndex: 0
      },
      {
        prompt: "Which point is at (1, -2)?",
        diagram: {
          type: "coordGrid",
          range: [-4, 4],
          points: [
            { x: -1, y: 2, label: "X" },
            { x: -3, y: 1, label: "Y" },
            { x: 1, y: -2, label: "Z" },
            { x: 2, y: -1, label: "W" }
          ]
        },
        choices: ["Z", "X", "Y", "W"],
        answerIndex: 0
      },
      {
        prompt: "What type of quadrilateral is this?",
        diagram: { type: "rhombus" },
        choices: ["Rhombus", "Rectangle", "Square", "Trapezoid"],
        answerIndex: 0
      },
      {
        prompt:
          "The line plot below shows the number of coins Sarah has in each pocket. What is the total amount of money that Sarah has?",
        diagram: {
          type: "linePlot",
          labels: [1, 2, 3, 4],
          counts: [1, 4, 5, 2],
          note: "Each X represents 1/2 of a dollar"
        },
        choices: ["$6", "$2", "$4", "$24"],
        answerIndex: 0
      },
      {
        prompt: "What is the volume of the cube below, which consists of unit cubes?",
        diagram: { type: "cubeBlock", width: 2, height: 2, depth: 2 },
        choices: ["8 unit cubes", "4 unit cubes", "12 unit cubes", "24 unit cubes"],
        answerIndex: 0
      },
      {
        prompt: "What is the volume of the prism below, which consists of unit cubes?",
        diagram: { type: "cubeBlock", width: 2, height: 3, depth: 2 },
        choices: ["12 unit cubes", "16 unit cubes", "4 unit cubes", "6 unit cubes"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "set8",
    name: "Math Set 8",
    questions: [
      {
        prompt: "What is the volume of the solid figure below?",
        diagram: {
          type: "compositeBlocks",
          blocks: [
            { x: 0, y: 3, z: 0, w: 5, h: 1, d: 1 },
            { x: 2, y: 0, z: 0, w: 1, h: 3, d: 1 }
          ]
        },
        choices: ["8", "9", "16", "20"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "set9",
    name: "Math Set 9",
    questions: [
      {
        prompt:
          "Maria has a 2-gallon container of orange juice. She pours out 15 ounces for breakfast. How much orange juice is left in the container, in ounces?",
        choices: ["241", "256", "231", "251"],
        answerIndex: 0
      },
      {
        prompt:
          "Carlos filled a 4-quart pitcher with iced tea. He served 12 ounces to a friend. How much iced tea remains in the pitcher, in ounces?",
        choices: ["116", "128", "106", "120"],
        answerIndex: 0
      },
      {
        prompt:
          "A recipe calls for 1 gallon of milk. Jenny has already used 40 ounces of it. How many ounces of milk does she have left from the original gallon?",
        choices: ["88", "128", "98", "78"],
        answerIndex: 0
      },
      {
        prompt:
          "Tom bought a 3-quart bottle of sports drink. He drank 18 ounces during practice. How many ounces of sports drink are left in the bottle?",
        choices: ["78", "96", "88", "68"],
        answerIndex: 0
      },
      {
        prompt:
          "A water cooler holds 5 gallons of water. By the end of the morning, 30 ounces have been used. How many ounces of water remain in the cooler?",
        choices: ["610", "640", "620", "600"],
        answerIndex: 0
      }
    ]
  }
];
