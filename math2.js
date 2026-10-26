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
        prompt: "412 × 58 = ?",
        choices: ["23,896", "22,896", "23,996", "24,896"],
        answerIndex: 0
      },
      {
        prompt: "6,552 ÷ 24 = ?",
        choices: ["273", "263", "283", "293"],
        answerIndex: 0
      },
      {
        prompt: "8,436 ÷ 6 = ?",
        choices: ["1,406", "1,416", "1,306", "1,046"],
        answerIndex: 0
      },
      {
        prompt: "5,616 ÷ 8 = ?",
        choices: ["702", "712", "692", "720"],
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
  },
  {
    // From Jayden's "Combined Fractions, Geometry & Measurement Plan" -
    // area/perimeter, volume, angles, coordinate plane and shape
    // classification, several with original diagrams (not scans from the
    // PDF) built from app.js's diagram helpers.
    id: "geometryMeasurementPractice",
    name: "Geometry & Measurement Practice",
    questions: [
      {
        prompt: "A rectangle is 4 1/2 ft by 2 2/3 ft. Find its area.",
        choices: ["12 sq ft", "11 1/2 sq ft", "12 1/2 sq ft", "10 1/2 sq ft"],
        answerIndex: 0
      },
      {
        prompt: "A rectangle has a perimeter of 15 ft. One side is 3 1/2 ft. Find the length of the other side.",
        choices: ["4 ft", "7 1/2 ft", "11 1/2 ft", "4 1/2 ft"],
        answerIndex: 0
      },
      {
        prompt: "A garden has an area of 12 sq yd and a width of 2 2/5 yd. Find its length.",
        choices: ["5 yd", "4 4/5 yd", "6 yd", "4 1/2 yd"],
        answerIndex: 0
      },
      {
        prompt: "A square has a side length of 3 3/4 in. What is its perimeter?",
        choices: ["15 in", "11 1/4 in", "13 1/2 in", "16 in"],
        answerIndex: 0
      },
      {
        prompt: "A box is 3 1/2 ft long, 2 ft wide, and 1 1/2 ft high. Find its volume.",
        diagram: { type: "cubeBlock", width: 3.5, height: 1.5, depth: 2 },
        choices: ["10 1/2 cubic ft", "7 cubic ft", "9 cubic ft", "12 cubic ft"],
        answerIndex: 0
      },
      {
        prompt: "A rectangular prism has a volume of 18 cubic ft, a length of 3 ft, and a width of 2 ft. Find its height.",
        choices: ["3 ft", "6 ft", "9 ft", "2 1/2 ft"],
        answerIndex: 0
      },
      {
        prompt: "A rectangular prism has a volume of 15 cubic ft, a length of 2 1/2 ft, and a width of 2 ft. Find its height.",
        choices: ["3 ft", "6 ft", "7 1/2 ft", "2 1/2 ft"],
        answerIndex: 0
      },
      {
        prompt: "What is 1/4 of a 360-degree turn?",
        choices: ["90°", "120°", "72°", "80°"],
        answerIndex: 0
      },
      {
        prompt: "An angle measures 120°. One part of it is 2/3 of the total angle. How many degrees is that part?",
        choices: ["80°", "40°", "60°", "90°"],
        answerIndex: 0
      },
      {
        prompt: "A 135° angle is split into two parts. One part is 47°. Find the unknown part.",
        choices: ["88°", "90°", "82°", "78°"],
        answerIndex: 0
      },
      {
        prompt: "The graph shows points A(2, 1), B(2, 5), C(6, 5), and D(6, 1) connected in order. What shape is formed, and what is its area?",
        diagram: {
          type: "coordGrid",
          range: [0, 7],
          polygon: [[2, 1], [2, 5], [6, 5], [6, 1]],
          points: [
            { x: 2, y: 1, label: "A" },
            { x: 2, y: 5, label: "B" },
            { x: 6, y: 5, label: "C" },
            { x: 6, y: 1, label: "D" }
          ]
        },
        choices: [
          "A square with side length 4 units and area 16 square units.",
          "A rectangle with side lengths 4 and 5 units and area 20 square units.",
          "A rectangle with side lengths 2 and 6 units and area 12 square units.",
          "A square with side length 5 units and area 25 square units."
        ],
        answerIndex: 0
      },
      {
        prompt: "On the graph, point M is at (1, 3) and point N is at (1, 8). What is the vertical distance between M and N?",
        diagram: {
          type: "coordGrid",
          range: [0, 9],
          points: [
            { x: 1, y: 3, label: "M" },
            { x: 1, y: 8, label: "N" }
          ]
        },
        choices: ["5 units", "6 units", "4 units", "11 units"],
        answerIndex: 0
      },
      {
        prompt: "Which statement about squares and rectangles is true?",
        choices: [
          "Every square is a rectangle, but not every rectangle is a square.",
          "Every rectangle is a square.",
          "No squares are rectangles.",
          "Every square is a rhombus, but no rectangle is a square."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which property is shared by every square and every rhombus?",
        choices: [
          "All four sides are equal in length.",
          "All four angles are right angles.",
          "Opposite sides are not parallel.",
          "It has exactly one pair of parallel sides."
        ],
        answerIndex: 0
      },
      {
        prompt: "Is the statement \"A rhombus is a square\" always, sometimes, or never true?",
        choices: ["Sometimes true", "Always true", "Never true", "Not enough information"],
        answerIndex: 0
      },
      {
        prompt: "This figure has 4 sides of equal length, but its angles are not right angles. What shape is it?",
        diagram: { type: "rhombus" },
        choices: ["Rhombus", "Square", "Rectangle", "Trapezoid"],
        answerIndex: 0
      },
      {
        prompt: "The line plot shows five length measurements, in inches. Find the total length of all five measurements.",
        diagram: {
          type: "linePlot",
          labels: ["1 1/4", "1 1/2", "1 3/4", "2"],
          counts: [1, 2, 1, 1],
          note: "Each X = one measurement (inches)"
        },
        choices: ["8 inches", "7 1/2 inches", "8 1/2 inches", "6 3/4 inches"],
        answerIndex: 0
      },
      {
        prompt: "Using the same five measurements (1 1/4, 1 1/2, 1 1/2, 1 3/4, and 2 inches), find the difference between the longest and shortest measurement.",
        diagram: {
          type: "linePlot",
          labels: ["1 1/4", "1 1/2", "1 3/4", "2"],
          counts: [1, 2, 1, 1],
          note: "Each X = one measurement (inches)"
        },
        choices: ["3/4 inch", "1/2 inch", "1 inch", "1/4 inch"],
        answerIndex: 0
      }
    ]
  }
];
