// Reading comprehension passages for the Iowa Assessments practice app.
// Each passage has an id, title, the passage text (paragraphs separated by
// "\n\n"), and 5 multiple choice questions.
// Each question has:
//   prompt      - the question text
//   choices     - four answer options (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/math.js convention

window.READING_PASSAGES = [
  {
    id: "passage1",
    title: "The Kite Contest",
    text:
      "Every spring, the town of Millbrook held a kite-flying contest on the " +
      "hill behind the old mill. Marcus had entered every year since he was " +
      "seven, but he had never placed higher than fourth. This year felt " +
      "different. He had spent three weekends building a diamond-shaped kite " +
      "out of bamboo strips and a bright red tablecloth his grandmother no " +
      "longer used.\n\n" +
      "On the morning of the contest, the wind was weaker than Marcus had " +
      "hoped. Other kids' kites drifted lazily, barely climbing above the " +
      "treetops. Marcus almost gave up before his turn, worried his kite " +
      "would just flop to the ground like it had during practice. But when " +
      "he finally let out the string, a sudden gust caught the red fabric " +
      "and the kite shot upward, spinning once before steadying high above " +
      "the hill.\n\n" +
      "The judges watched Marcus's kite climb higher than any other that " +
      "day. When his name was called for first place, Marcus could hardly " +
      "believe it. He thought about all the hours spent measuring bamboo " +
      "and stitching fabric, and how close he had come to not flying his " +
      "kite at all.\n\n" +
      "As he walked home holding his blue ribbon, Marcus realized that the " +
      "hardest part of winning hadn't been building the kite — it had been " +
      "trusting it enough to let it fly.",
    questions: [
      {
        prompt: "What is the passage mostly about?",
        choices: [
          "A boy who finally succeeds in a kite contest after years of trying",
          "A group of judges deciding who built the best kite",
          "A grandmother who gives away an old tablecloth",
          "A town that holds a contest every year for no reason"
        ],
        answerIndex: 0
      },
      {
        prompt: "What did Marcus use for the fabric part of his kite?",
        choices: [
          "a red tablecloth",
          "a paper bag",
          "a plastic sheet",
          "a cotton shirt"
        ],
        answerIndex: 0
      },
      {
        prompt: 'In the passage, the word "steadying" most nearly means',
        choices: [
          "becoming stable and balanced",
          "falling apart",
          "speeding up",
          "changing color"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why did Marcus almost give up before his turn?",
        choices: [
          "He was worried the weak wind would make his kite fail like it had during practice",
          "He forgot his kite at home",
          "He didn't want to compete against his friends",
          "He thought the judges would not show up"
        ],
        answerIndex: 0
      },
      {
        prompt: "What did Marcus learn by the end of the story?",
        choices: [
          "That trusting his work was the hardest but most important part of succeeding",
          "That kites need very strong wind to fly",
          "That his grandmother's tablecloth was too old to use",
          "That winning a contest is not important"
        ],
        answerIndex: 0
      }
    ]
  }
];
