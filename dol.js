// Daily Oral Language (DOL) question sets for the Iowa Assessments practice app,
// transcribed from a Daily Language Review workbook (Monday-Thursday grammar drills).
// Each set has an id, a display name (used as the on-screen topic label),
// and a list of questions.
// Each question has:
//   prompt      - the question text
//   choices     - four answer options (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/math.js convention

window.DOL_SETS = [
  {
    id: "monday",
    name: "Monday",
    questions: [
      {
        prompt:
          'Which sentence is correctly written? "has you ever been to a audition for a play"',
        choices: [
          "Have you ever been to an audition for a play?",
          "Has you ever been to an audition for a play.",
          "Have you never been to an audition for a play?",
          "Have you ever being to a audition for a play?"
        ],
        answerIndex: 0
      },
      {
        prompt:
          'Which sentence is correctly written? "were glad that sammy is on our team this year"',
        choices: [
          "We are glad that Sammy is on our team this year.",
          "Were glad that Sammy is on our team this year.",
          "We was glad that sammy is on our team this year.",
          "We are glad that sammy is on our team this year"
        ],
        answerIndex: 0
      },
      {
        prompt: 'Is the word "oxen" singular or plural?',
        choices: ["Plural", "Singular", "Both singular and plural", "Neither"],
        answerIndex: 0
      },
      {
        prompt: 'Which word rhymes with "truth"?',
        choices: ["Tooth", "Trust", "Path", "Taught"],
        answerIndex: 0
      },
      {
        prompt:
          'Which word or words best complete the sentence: "___ you finished making your bed yet?"',
        choices: ["Aren't", "Are not", "Arent", "Ain't"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "tuesday",
    name: "Tuesday",
    questions: [
      {
        prompt: 'What is an antonym for "build"?',
        choices: ["Break", "Construct", "Create", "Assemble"],
        answerIndex: 0
      },
      {
        prompt: 'What is an antonym for "tidy"?',
        choices: ["Messy", "Neat", "Clean", "Organized"],
        answerIndex: 0
      },
      {
        prompt:
          'Which sentence is correctly written? "allen watch television from 630 to 830 last night"',
        choices: [
          "Allen watched television from 6:30 to 8:30 last night.",
          "Allen watch television from 6:30 to 8:30 last night.",
          "allen watched television from 630 to 830 last night.",
          "Allen watched television from 6.30 to 8.30 last night"
        ],
        answerIndex: 0
      },
      {
        prompt:
          'Which sentence is correctly written? "them boys rides the bus two school every day"',
        choices: [
          "Those boys ride the bus to school every day.",
          "Them boys ride the bus two school every day.",
          "Those boys rides the bus to school every day.",
          "Those boy ride the bus to school every day."
        ],
        answerIndex: 0
      },
      {
        prompt: 'What type of sentence is "Ouch, that hurts!"?',
        choices: ["Exclamatory", "Declarative", "Interrogative", "Imperative"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "wednesday",
    name: "Wednesday",
    questions: [
      {
        prompt:
          'Which sentence is correctly written? "werent there no cookies left"',
        choices: [
          "Weren't there any cookies left?",
          "Weren't there no cookies left?",
          "Werent there any cookies left?",
          "Were there not no cookies left?"
        ],
        answerIndex: 0
      },
      {
        prompt:
          'Which sentence is correctly written? "why cant jerome never get here on time"',
        choices: [
          "Why can't Jerome ever get here on time?",
          "Why can't Jerome never get here on time?",
          "Why cant Jerome ever get here on time?",
          "Why can't jerome ever get here on time."
        ],
        answerIndex: 0
      },
      {
        prompt: "Complete the analogy: height : inches :: weight : ___",
        choices: ["Pounds", "Feet", "Liters", "Miles"],
        answerIndex: 0
      },
      {
        prompt:
          'Where would you probably hear an umpire yell, "You\'re out!"?',
        choices: [
          "On a baseball field",
          "In a courtroom",
          "In a classroom",
          "At a grocery store"
        ],
        answerIndex: 0
      },
      {
        prompt: 'What is the root word, or base word, of "illegal"?',
        choices: ["Legal", "Ill", "Leg", "Egal"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "thursday",
    name: "Thursday",
    questions: [
      {
        prompt: 'What is the correct abbreviation for "ounce"?',
        choices: ["oz.", "oun.", "ozc.", "on."],
        answerIndex: 0
      },
      {
        prompt:
          'What reference source would you use to find the meaning of "etiquette"?',
        choices: ["A dictionary", "An atlas", "A thesaurus", "An almanac"],
        answerIndex: 0
      },
      {
        prompt:
          'Which sentence is correctly written? "put corrines ice skates in that there closet"',
        choices: [
          "Put Corrine's ice skates in that closet.",
          "Put corrines ice skates in that there closet.",
          "Put Corrines ice skates in that closet.",
          "Put Corrine's ice skates in that there closet."
        ],
        answerIndex: 0
      },
      {
        prompt:
          'Which sentence is correctly written? "what time are we at miss grissoms recital"',
        choices: [
          "What time are we at Miss Grissom's recital?",
          "What time are we at miss grissoms recital.",
          "What time are we at Miss Grissoms recital?",
          "What time we are at Miss Grissom's recital?"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of these words has four syllables?",
        choices: ["Temperature", "Decorate", "Equation", "Recycle"],
        answerIndex: 0
      }
    ]
  }
];
