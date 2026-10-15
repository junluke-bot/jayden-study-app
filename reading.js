// Reading comprehension passages for the Iowa Assessments practice app.
// Transcribed from a Scholastic News "Big Debate" article (October 26, 2026
// issue) about the $50.1 million sale of a T. rex fossil named Gus.
// Each passage has an id, title, the passage text (paragraphs separated by
// "\n\n"), and multiple choice questions.
// Each question has:
//   prompt      - the question text
//   choices     - four answer options (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/math.js convention

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
          "According to the article, why does the sale of Gus make him \"the most expensive fossil ever\"?",
        choices: [
          "His $50.1 million sale price was higher than any fossil had ever sold for before.",
          "He is the oldest dinosaur fossil that scientists have ever discovered.",
          "He is the only Tyrannosaurus rex skeleton that has ever been found.",
          "He was found in a more remote location than any other fossil."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "According to the \"YES\" side of the debate, why do some people think it's fine for commercial fossil hunters to sell dinosaur fossils?",
        choices: [
          "Without fossil hunters, many rare fossils might never be found and could be destroyed by nature before anyone collects them.",
          "Museums always have enough money to buy every fossil they want.",
          "Selling fossils is not valuable work, so it doesn't matter who buys them.",
          "Landowners are required by law to give away any fossils found on their property."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "According to the \"NO\" side of the debate, why do many paleontologists worry about wealthy private collectors buying fossils like Gus?",
        choices: [
          "Most museums can't afford to compete with wealthy collectors, and fossils kept in private collections may never be shared with the public or studied by scientists.",
          "Private collectors are required by law to destroy any fossils they purchase.",
          "Wealthy collectors always give their fossils away to museums for free.",
          "Museums are not interested in displaying dinosaur fossils."
        ],
        answerIndex: 0
      }
    ]
  }
];
