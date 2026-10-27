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
    // Transcribed from Jayden's "G.3 & G.4 Geometry Study Guide" quiz
    // (photos of a Microsoft Forms page, 26 numbered items - #1 was a
    // name field). Two items (9 and 23) had their answer choices cut off
    // in the photos and are skipped. Shapes shown in the original form
    // are redrawn here as original SVG diagrams (not scans) using
    // app.js's polygon diagram helpers.
    id: "geometryMeasurementPractice",
    name: "Geometry & Measurement Practice",
    questions: [
      {
        prompt:
          "Juanita classified a scalene triangle, an isosceles trapezoid, a rectangle, and an equilateral triangle into two categories based on one property. Category A: scalene triangle, isosceles trapezoid. Category B: rectangle, equilateral triangle. Which property did Juanita likely use to put only the rectangle and the equilateral triangle in Category B?",
        choices: [
          "All of the angles within each shape are equal in measure.",
          "Both shapes have at least one acute angle.",
          "Both shapes do not have a pair of parallel sides.",
          "Neither of the shapes have a pair of perpendicular sides."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which polygon is also a rectangle?",
        choices: ["square", "parallelogram", "rhombus", "right trapezoid"],
        answerIndex: 0
      },
      {
        prompt: "John studies a square, a parallelogram, a trapezoid, and a quadrilateral. Which shape MUST also be a rhombus?",
        choices: ["square", "parallelogram", "trapezoid", "quadrilateral"],
        answerIndex: 0
      },
      {
        prompt: "True or false? This kite-shaped figure has opposite sides that are parallel.",
        diagram: {
          type: "polygon",
          viewBox: [180, 170],
          points: [[100, 15], [150, 75], [95, 155], [35, 80]]
        },
        choices: ["False", "True"],
        answerIndex: 0
      },
      {
        prompt: "True or false? This trapezoid has 2 sets of opposite parallel lines.",
        diagram: {
          type: "polygon",
          viewBox: [200, 150],
          points: [[60, 20], [140, 20], [170, 130], [30, 130]]
        },
        choices: ["False", "True"],
        answerIndex: 0
      },
      {
        prompt:
          "Select the pair of polygons where EACH polygon has at least one obtuse angle and at least one acute angle. A: a right triangle and a rhombus (not a square). B: a trapezoid with two slanted sides and a rhombus (not a square). C: a right triangle and a regular hexagon. D: a trapezoid with two slanted sides and a regular hexagon.",
        choices: ["B", "A", "C", "D"],
        answerIndex: 0
      },
      {
        prompt: "True or false? This rectangle has 2 sets of opposite parallel lines.",
        diagram: {
          type: "polygon",
          viewBox: [190, 120],
          points: [[20, 20], [170, 20], [170, 100], [20, 100]]
        },
        choices: ["True", "False"],
        answerIndex: 0
      },
      {
        prompt: "Which shape is described by the clues? The shape has no right angles. All of the sides are congruent.",
        choices: ["equilateral triangle", "scalene triangle", "isosceles triangle", "right triangle"],
        answerIndex: 0
      },
      {
        prompt: "Name the polygon shown.",
        diagram: {
          type: "polygon",
          viewBox: [140, 140],
          points: [[70, 10], [130, 55], [105, 130], [35, 130], [10, 55]]
        },
        choices: ["pentagon", "hexagon", "quadrilateral", "octagon"],
        answerIndex: 0
      },
      {
        prompt: "Which polygon has one or more pairs of parallel sides AND more than one pair of perpendicular sides?",
        choices: ["square", "octagon", "rhombus", "trapezoid"],
        answerIndex: 0
      },
      {
        prompt: "Which triangle is an isosceles triangle?",
        diagram: {
          type: "multiPolygon",
          items: [
            { viewBox: [110, 100], label: "A", points: [[40, 15], [15, 80], [85, 80]] },
            { viewBox: [110, 100], label: "B", points: [[15, 15], [15, 85], [95, 85]], rightAngles: [1] },
            { viewBox: [110, 100], label: "C", points: [[50, 10], [30, 90], [70, 90]] },
            { viewBox: [110, 100], label: "D", points: [[15, 65], [105, 78], [35, 88]] }
          ]
        },
        choices: ["triangle C", "triangle A", "triangle B", "triangle D"],
        answerIndex: 0
      },
      {
        prompt: "How many sides are on an octagon?",
        choices: ["8", "9", "6", "4"],
        answerIndex: 0
      },
      {
        prompt: "This shape is a quadrilateral with only ONE pair of parallel sides. What is it?",
        choices: ["trapezoid", "parallelogram", "square", "rhombus"],
        answerIndex: 0
      },
      {
        prompt: "Which of these statements about a rectangle is always TRUE?",
        choices: [
          "A rectangle is a quadrilateral and a parallelogram.",
          "A rectangle is a rhombus and a square.",
          "A rectangle is a parallelogram and a square.",
          "A rectangle is a quadrilateral and a rhombus."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which polygon could have one or more pairs of parallel sides and NO pairs of perpendicular sides?",
        choices: ["rhombus", "triangle", "square", "pentagon"],
        answerIndex: 0
      },
      {
        prompt:
          "Nick has a square piece of paper. He draws the two diagonals of the square, finds the point where they intersect, and labels that point A. Then he folds each of the four corners of the paper onto point A. What geometric shape is produced?",
        choices: ["square", "right triangle", "isosceles triangle", "pentagon"],
        answerIndex: 0
      },
      {
        prompt:
          "Treshun wrote these clues about a mystery shape: It is a quadrilateral. All sides are equal in length. There are two equal obtuse angles and two equal acute angles. Which shape is he describing?",
        choices: ["rhombus", "pentagon", "square", "rectangle"],
        answerIndex: 0
      },
      {
        prompt: "Which triangle has 1 obtuse angle and 2 acute angles?",
        choices: ["obtuse triangle", "acute triangle", "equilateral triangle", "right triangle"],
        answerIndex: 0
      },
      {
        prompt: "Which quadrilateral has four right angles?",
        choices: ["rectangle", "parallelogram", "rhombus", "trapezoid"],
        answerIndex: 0
      },
      {
        prompt: "Classify the quadrilateral based on its attributes (opposite sides marked with matching tick marks to show they are the same length; no right angles shown).",
        diagram: {
          type: "polygon",
          viewBox: [200, 130],
          points: [[60, 20], [170, 20], [130, 110], [20, 110]],
          ticks: [2, 1, 2, 1]
        },
        choices: ["parallelogram", "rhombus", "square", "trapezoid"],
        answerIndex: 0
      },
      {
        prompt: "Classify the triangle based on its sides.",
        diagram: {
          type: "polygon",
          viewBox: [170, 130],
          points: [[30, 20], [30, 110], [140, 110]],
          rightAngles: [1],
          sideLabels: [
            { side: 0, text: "3 cm", offset: -16 },
            { side: 1, text: "4 cm", offset: 16 },
            { side: 2, text: "5 cm", offset: -16 }
          ]
        },
        choices: ["scalene", "acute", "isosceles", "equilateral"],
        answerIndex: 0
      },
      {
        prompt: "Mike drew an isosceles triangle with one side that measured 5 inches and another side that measured 6 inches. What is the length of the third side?",
        choices: ["6 inches", "8 inches", "4 inches", "3 inches"],
        answerIndex: 0
      },
      {
        prompt: "Which set of attributes BEST describes this quadrilateral (a trapezoid with two right angles on the left side and one slanted side on the right)?",
        diagram: {
          type: "polygon",
          viewBox: [200, 130],
          points: [[20, 15], [110, 15], [180, 110], [20, 110]],
          rightAngles: [0, 3]
        },
        choices: [
          "Opposite sides may or may not be congruent. At least one pair of opposite sides is parallel.",
          "Opposite sides are congruent and parallel.",
          "Opposite sides are congruent and parallel. There are 4 right angles.",
          "All four sides are congruent, and there are no parallel sides."
        ],
        answerIndex: 0
      }
    ]
  }
];
