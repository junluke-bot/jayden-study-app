// Reading comprehension passages for the Iowa Assessments practice app.
// Each passage has an id, title, the passage text (paragraphs separated by
// "\n\n"), and a list of questions. A passage can mix two question types:
//   - Multiple choice: { prompt, choices (4 options, choices[0] correct),
//     answerIndex: 0 }, matching the words.js/math.js convention.
//   - Short answer: { prompt, sampleAnswer } with NO choices/answerIndex.
//     sampleAnswer is a model answer broken into the four RACE parts
//     { restate, answer, cite, explain } — app.js renders four labeled
//     textareas (enforcing the RACE strategy: Restate, Answer, Cite
//     evidence, Explain) instead of multiple-choice buttons, and reveals
//     the model answer after Jayden writes his own so he can self-check it.
//
// "fossils-for-sale" is adapted from a Scholastic News "Big Debate" article
// (October 26, 2026 issue) about the $50.1 million sale of a T. rex fossil
// named Gus.
//
// "city-of-orphans" is a full-book comprehension test for Avi's novel City
// of Orphans (no excerpt to reread — Jayden answers from having read the
// whole book), transcribed from a 15-question multiple-choice Part A plus
// a 4-question short-response Part B.

window.READING_PASSAGES = [
  {
    id: "fossils-for-sale",
    title: 'Should Fossils Be for Sale? (adapted from Scholastic News)',
    text: [
      "Tyrannosaurus rex is called the king of the dinosaurs. Now it has the price tag to prove it. In July, a T. rex skeleton sold to a mystery buyer for $50.1 million, making it the most expensive fossil ever. The 67-million-year-old dinosaur, named Gus, is one of the most complete T. rex skeletons ever found.",
      "That skeleton was bought at an auction by a billionaire collector for $44.6 million. Some people think these sales will inspire fossil hunters to search for other prehistoric treasures. But the soaring prices worry many paleontologists (scientists who study fossils). Fossils bought by private collectors often end up in their homes or offices, where scientists don't have access to them for research.",
      "Commercial fossil hunters found Gus on a ranch in South Dakota in 2021. They made a deal with the ranch's owners to sell the prized discovery at an auction, where it would go to the person who bid the most money. Gus's sale broke the record that had been set in 2024 by a bid for a Stegosaurus named Apex.",
      "Should wealthy collectors be allowed to buy dinosaur fossils?",
      "YES: Some people argue that without commercial fossil hunters, rare fossils like Gus might never be found. That's because museums and universities often can't afford to pay for excavations, or digs. \"Fossils that are not collected eventually get destroyed,\" says Jacob Jett, vice president of Triebold Paleontology, a fossil-finding company. \"They get eroded by nature.\" Some fossil hunters say the money they make from their discoveries is a reward for their skill and years of hard work. Excavating each of Gus's bones and carefully putting together the skeleton took nearly five years. Other people argue that landowners deserve to be paid for fossils found on their property. Fossils owned by collectors sometimes end up in museums anyway. For example, Apex's owner loaned the skeleton to the American Museum of Natural History in New York City.",
      "NO: Many paleontologists think museums are the best places for fossils. But most U.S. museums don't have the kind of money that wealthy individuals have, so they cannot compete. \"Museums and universities couldn't even attempt to buy Gus, because the starting bid was $19 million,\" says paleontologist Stuart Sumida. Fossils are a direct link to prehistoric life on Earth. Though some collectors donate or lend their fossils to museums, many others don't share them with the public. \"Fossils teach us about the history of our planet on a huge scale,\" says Sumida. \"If they're in private collections, we'll never learn about them.\" Some people think the U.S. should follow the example of countries that have stricter laws to protect fossils. In Brazil, for instance, all fossils belong to the government, so they can't be sold by the people who find them.",
      "57% of all T. rex fossils that have been discovered were found by commercial fossil hunters (as of October 2024). The highest price ever paid by a U.S. museum for a dinosaur skeleton is $8.4 million — far less than Gus's $50.1 million sale.",
      "The Stegosaurus named Apex, the previous record holder, is currently on loan to the American Museum of Natural History until 2028."
    ].join("\n\n"),
    questions: [
      {
        prompt:
          "Based on the article, why does the sale of Gus make him \"the most expensive fossil ever\"?",
        sampleAnswer: {
          restate:
            "The article explains why Gus's sale makes him the most expensive fossil ever.",
          answer:
            "Gus is the most expensive fossil ever because his skeleton sold for $50.1 million, more than any fossil has ever sold for.",
          cite:
            "According to the article, \"a T. rex skeleton sold to a mystery buyer for $50.1 million, making it the most expensive fossil ever.\"",
          explain:
            "This shows that no other fossil sale — including the earlier $44.6 million sale of Gus himself, or the record set in 2024 by the Stegosaurus Apex — came close to this price, which is why $50.1 million set a new record."
        }
      },
      {
        prompt:
          "According to the \"YES\" side of the debate, why do some people think it's fine for commercial fossil hunters to sell dinosaur fossils?",
        sampleAnswer: {
          restate:
            "The YES side explains why some people think it's fine for commercial fossil hunters to sell dinosaur fossils.",
          answer:
            "Some people think it's fine because fossil hunters often find rare fossils that museums could never afford to search for themselves, and hunters deserve to be paid for their work.",
          cite:
            "The article states that \"museums and universities often can't afford to pay for excavations,\" and quotes Jacob Jett saying fossils that aren't collected \"get eroded by nature.\"",
          explain:
            "This evidence shows that without commercial fossil hunters taking on the cost and risk of digging up fossils, discoveries like Gus might be destroyed by weathering before anyone finds them, so selling fossils can actually help preserve them."
        }
      },
      {
        prompt:
          "According to the \"NO\" side of the debate, why do many paleontologists worry about wealthy private collectors buying fossils like Gus?",
        sampleAnswer: {
          restate:
            "The NO side explains why many paleontologists worry about wealthy private collectors buying fossils like Gus.",
          answer:
            "Many paleontologists worry because most museums can't compete financially with wealthy collectors, and fossils bought privately might never be available for public viewing or scientific study.",
          cite:
            "The article says museums and universities \"couldn't even attempt to buy Gus, because the starting bid was $19 million,\" and quotes Stuart Sumida saying, \"If they're in private collections, we'll never learn about them.\"",
          explain:
            "This shows that when fossils go to private buyers instead of museums, important scientific information about prehistoric life could be lost to both scientists and the public forever."
        }
      }
    ]
  },
  {
    id: "city-of-orphans",
    title: "City of Orphans by Avi — Full-Book Practice Test",
    text: [
      "This practice test covers the whole novel City of Orphans by Avi, not just one excerpt. Answer each question using what you remember from reading the entire book.",
      "Part A is multiple choice. Part B asks you to write short responses using specific events from the novel — use the RACE strategy (Restate, Answer, Cite evidence, Explain) for each one."
    ].join("\n\n"),
    questions: [
      {
        prompt: "Why does Maks sell newspapers on New York streets?",
        choices: [
          "His family needs money to survive.",
          "He wants to investigate crimes.",
          "He hopes to impress Bruno.",
          "His teachers require it."
        ],
        answerIndex: 0
      },
      {
        prompt: "What does Willa do when Maks is threatened by the Plug Uglies?",
        choices: [
          "She helps defend him with her stick.",
          "She reports him to the police.",
          "She joins Bruno's gang.",
          "She pretends she does not know him."
        ],
        answerIndex: 0
      },
      {
        prompt: "What is Emma accused of stealing?",
        choices: [
          "A watch at the Waldorf Hotel",
          "A newspaper from a street stand",
          "A ring from a neighbor",
          "Money from the Geless home"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why does Maks seek help from Bartleby Donck?",
        choices: [
          "To help investigate Emma's case",
          "To get a better newspaper route",
          "To purchase a hotel",
          "To join the police force"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the best inference about Maks when he refuses to give up on Emma?",
        choices: [
          "He is determined to protect his family despite danger.",
          "He believes he is stronger than adults.",
          "He cares more about adventure than family.",
          "He already knows every detail of the crime."
        ],
        answerIndex: 0
      },
      {
        prompt: "Why is the contrast between the Geless home and the Waldorf Hotel important?",
        choices: [
          "It shows unequal living conditions and wealth.",
          "It shows that the hotel is older.",
          "It proves the family dislikes New York.",
          "It makes the hotel seem less important."
        ],
        answerIndex: 0
      },
      {
        prompt: "What does Bruno's gang threaten in addition to Maks's safety?",
        choices: [
          "The ability of newsboys to sell certain newspapers freely",
          "The supply of food at the hotel",
          "The Geless family's school grades",
          "The city's train system"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the main purpose of Willa joining the Geless family?",
        choices: [
          "It shows how care and loyalty can create a sense of belonging.",
          "It proves Willa has never been in danger.",
          "It creates a rivalry with Emma.",
          "It lets Willa avoid helping anyone."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which statement best explains the role of the 1893 New York setting?",
        choices: [
          "It makes poverty, street crime, and immigrant struggles central to events.",
          "It removes most problems from Maks's life.",
          "It guarantees that the police will solve every crime.",
          "It keeps the characters from ever meeting."
        ],
        answerIndex: 0
      },
      {
        prompt: "What does the phrase \"No money. No justice.\" suggest in the novel?",
        choices: [
          "Poor people can face obstacles when seeking fair treatment.",
          "A fair trial is always free.",
          "People with money never commit crimes.",
          "Maks should stop helping Emma."
        ],
        answerIndex: 0
      },
      {
        prompt: "How does Maks develop during his investigation?",
        choices: [
          "He learns to act more resourcefully and courageously.",
          "He becomes less willing to trust anyone.",
          "He stops caring about his family.",
          "He decides never to sell newspapers again."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "What is most strongly suggested by Willa helping the family even when she has little herself?",
        choices: [
          "She values loyalty and connection more than possessions.",
          "She expects to become wealthy soon.",
          "She wants the family to owe her money.",
          "She believes danger can never affect her."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which event most directly helps resolve Emma's arrest?",
        choices: [
          "The missing watch is recovered and evidence is presented.",
          "Maks promises to sell more papers.",
          "Bruno becomes a newsboy.",
          "The Waldorf closes for repairs."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which theme is most strongly supported by Maks and Willa's actions?",
        choices: [
          "Courage and cooperation can help people face injustice.",
          "Wealth always solves difficult problems.",
          "Children should never trust each other.",
          "Luck is more important than every choice."
        ],
        answerIndex: 0
      },
      {
        prompt: "Why is the ending hopeful despite the losses and hardships?",
        choices: [
          "The family finds greater stability and Willa gains belonging.",
          "Every character becomes wealthy immediately.",
          "The city becomes free of danger.",
          "Maks forgets everything that happened."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "How does Maks change from the beginning to the end of the novel? Explain using TWO events from different parts of the book.",
        sampleAnswer: {
          restate: "Maks changes a great deal from the beginning to the end of the novel.",
          answer:
            "At the start, Maks is just a newsboy focused on getting by day to day, but by the end he has become a resourceful and courageous investigator willing to take real risks for his family.",
          cite:
            "Early in the book, Maks simply sells newspapers to help his family survive, with no larger plan beyond earning money. Later, after Emma is accused of stealing a watch at the Waldorf Hotel, Maks seeks help from Bartleby Donck and works to track down the evidence that finally gets the watch recovered.",
          explain:
            "The first event shows Maks in his ordinary, cautious daily routine, while the second shows him actively investigating a serious crime and standing up to danger from people like Bruno's gang. Comparing these two events shows that Maks grows from a boy just trying to get by into someone who acts resourcefully and courageously to protect the people he loves."
        }
      },
      {
        prompt:
          "Why does Willa help Maks and his family? What do her actions reveal about her character? Support your answer with TWO examples.",
        sampleAnswer: {
          restate: "Willa helps Maks and his family for reasons that reveal a lot about who she is.",
          answer:
            "Willa helps because she values loyalty and connection, even though she has very little herself, which shows that she is caring and selfless.",
          cite:
            "One example is when Willa helps defend Maks with her stick when he is threatened by the Plug Uglies. Another example is that Willa ends up joining the Geless family and helping them even though she has little of her own.",
          explain:
            "Defending Maks in a dangerous moment shows she is brave and willing to put herself at risk for someone else, and choosing to stay with the Geless family despite having so little of her own shows that she cares more about loyalty and belonging than about money or safety. Together, these two examples reveal that Willa is a loyal, caring person who finds a sense of family through helping others."
        }
      },
      {
        prompt:
          "Explain how the setting of New York City in 1893 contributes to the conflict. Use TWO specific details (for example, working conditions, wealth, or crime).",
        sampleAnswer: {
          restate: "The setting of New York City in 1893 plays a big role in creating the conflict in the novel.",
          answer:
            "The poverty and crime of the 1893 city create the dangerous conditions and unfair treatment that drive the main conflicts in the story.",
          cite:
            "One detail is that Maks has to sell newspapers on the streets because his family needs money to survive, showing the poverty immigrant families faced. Another detail is the contrast between the Geless home and the wealthy Waldorf Hotel, which shows the unequal living conditions and wealth of the time.",
          explain:
            "Maks's need to work as a newsboy puts him in the middle of street gangs like the Plug Uglies and Bruno's crew, creating real danger. The contrast between the Geless home and the Waldorf Hotel also helps explain why someone like Emma, a poor immigrant, is quickly blamed for a crime at a wealthy hotel — the setting's inequality is part of why \"No money. No justice.\" becomes true for the family."
        }
      },
      {
        prompt:
          "Choose ONE theme — family, courage, loyalty, or justice. Explain how the author develops it through TWO events from the novel.",
        sampleAnswer: {
          restate: "The author develops the theme of courage through events involving Maks and Willa.",
          answer:
            "Avi develops the theme that courage helps people face injustice through Maks's determination to clear Emma's name and Willa's willingness to defend Maks in danger.",
          cite:
            "First, even though Maks faces real danger from Bruno's gang, he refuses to give up on investigating Emma's case and works to prove she did not steal the watch. Second, Willa shows courage by helping defend Maks with her stick when he is threatened by the Plug Uglies.",
          explain:
            "Maks's refusal to give up, even when it's risky, shows that courage means continuing to act even when you're afraid or in danger, and Willa physically stepping in to help him shows that courage can also mean standing up for someone else. Together, these two events show how the author uses both characters' brave choices to support the theme that courage helps people face injustice."
        }
      }
    ]
  }
];
