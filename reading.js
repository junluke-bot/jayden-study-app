// Reading comprehension passages for the Iowa Assessments practice app,
// transcribed from an Iowa 5th Grade ELA practice test (Test C).
// Each passage has an id, title, the passage text (paragraphs separated by
// "\n\n"), and multiple choice questions.
// Each question has:
//   prompt      - the question text
//   choices     - four answer options (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/math.js convention

window.READING_PASSAGES = [
  {
    id: "passage1",
    title: '"I\'m Nobody" by Emily Dickinson',
    text: [
      "I'm nobody! Who are you?",
      "Are you nobody, too?",
      "Then there's a pair of us — don't tell!",
      "They'd banish us, you know.",
      "How dreary to be somebody!",
      "How public, like a frog",
      "To tell your name the livelong day",
      "To an admiring bog!"
    ].join("\n\n"),
    questions: [
      {
        prompt:
          'Read the following line from the poem: "They\'d banish us, you know." Which of the following BEST expresses what the line means?',
        choices: [
          "We would be forced to leave.",
          "There is only room for one of us.",
          "I have never met anyone like you.",
          "The earth is big enough for two people like me."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following BEST reflects the poem's meaning?",
        choices: [
          "It's better to be a humble nobody than a proud somebody.",
          "Optimism is not possible in painful situations.",
          "Nature is always pleasant.",
          "Life is too difficult to remain positive."
        ],
        answerIndex: 0
      },
      {
        prompt:
          'Read the following line from the poem: "How dreary to be somebody!" What does the underlined word "dreary" MOST LIKELY mean?',
        choices: ["tiresome", "lively", "simple", "colorful"],
        answerIndex: 0
      },
      {
        prompt: "Which of the following BEST expresses how stanza two differs from stanza one?",
        choices: [
          "The first stanza talks about being common, while the second stanza talks about being famous.",
          "The first stanza is about a person, while the second stanza is written about a frog.",
          "The first stanza is about someone who is depressed, while the second stanza is about someone who is happy.",
          "The first stanza rhymes, while the second stanza does not."
        ],
        answerIndex: 0
      },
      {
        prompt: 'Which of the following BEST identifies the narrator of "I\'m Nobody"?',
        choices: [
          "A person who is not famous",
          "A person who is famous",
          "A frog",
          "A fisherman"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following paintings would BEST accompany this poem?",
        choices: [
          "a painting of a person with a question mark covering their face",
          "a painting of a well-dressed businessman",
          "a painting of a frog",
          "a pond surrounded by wildflowers"
        ],
        answerIndex: 0
      }
    ]
  },
  {
    id: "passage2",
    title: 'Spiders on the Common (adapted from "Wild Life in Woods and Fields" by Arabella B. Buckley)',
    text: [
      "When we cross the common on a fine summer morning we see many spiders' webs sparkling in the sun. The webs on the bushes are round. They are fastened to the plants by long silk threads. Each web has spokes like a wheel. These spokes are joined together with rings of silk. There are drops of gum all over the rings. It is these drops which sparkle like diamonds, making the web so pretty.",
      "The spider spins a little tent in the center of the web. In this tent she hides, till some insect flies against the gummy threads. Then she feels the web shake, and darts out to catch the fly before it breaks the threads.",
      "We saw a little bee today fly right against the web on the gorse bush. Out came the spider from her tent. Paul caught her, while she was busy, and showed us the two fangs with sharp points, which hang down in front of her head. Above them are her eight eyes, four large ones and four small ones. She has eight legs with such strange claws! Each one is like a comb. What do you think they are for? She uses them to guide the silk threads as she makes her web.",
      "We turned her on her back and saw six little pockets. They are where she pulls the silk from. It comes out through tiny holes. She draws it through the combs on her legs, and so makes her web as she runs along.",
      'Besides the webs on the plant, there are webs all over the area close to the ground. These are not made with spokes like the round webs. The threads are mixed up like wool. For a long time we could not find the spider. At last one day Paul said, "Here is a hole right in the middle of the web. It goes down into the ground."',
      "This hole was lined with silk threads. Just then a beetle crawled on the web, and shook it. At once the spider darted out from the tunnel in the ground and seized the beetle. She was so quick that she had carried him down into her hole before we could catch her.",
      'There are many spiders on the common which do not spin webs, though they hang from a thread. They spring on the flies and beetles on the ground and are called "hunting-spiders."'
    ].join("\n\n"),
    questions: [
      {
        prompt:
          "Which of the following details from the passage BEST illustrates how the hunting spider differs from the web-spinning spiders?",
        choices: [
          "They spring on flies and bees on the ground",
          "Paul caught her, while she was busy, and showed us the two fangs with sharp points",
          "This hole was lined with silk threads",
          "It goes down into the ground"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following BEST summarizes the passage's main idea?",
        choices: [
          "Spiders are smart predators",
          "Spiders live on plants",
          "Spiders communicate with each other",
          "Spiders are unable to communicate with each other"
        ],
        answerIndex: 0
      },
      {
        prompt: "The spider uses its comb-like claws to do which of the following:",
        choices: [
          "Guide the silk threads",
          "Spin webs",
          "Remove silk threads from its body",
          "Kill its prey"
        ],
        answerIndex: 0
      },
      {
        prompt: "The narrator of this passage is MOST LIKELY which of the following:",
        choices: ["A young girl", "A housewife", "A scientist", "A hiker"],
        answerIndex: 0
      },
      {
        prompt:
          "Which of the following details from the passage expresses how the spider's anatomy or physical design helps it in its role as a predator?",
        choices: [
          "...showed us the two fangs with sharp points.",
          "She has eight legs....",
          "They are where she pulls the silk from.",
          "Besides the webs on the plant, there are webs all over the area close to the ground."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "If a student wanted to learn more about the hunting-spider, which of the following locations would BEST match their needs?",
        choices: [
          "A website about tiny predators",
          "A magazine about flying insects",
          "A blog site about hiking in the woods",
          "A newspaper article about exotic wildlife"
        ],
        answerIndex: 0
      }
    ]
  },
  {
    id: "passage3",
    title: 'Silvertip (adapted from "The Dooryard Stories" by Clara Pierson)',
    text: [
      'A very small, wet, and hungry Kitten pattered up and down a board walk one cold and rainy night. His fur was so soaked that it dripped water when he moved, and his poor little pink-cushioned paws splashed more water up from the puddly boards every time he stepped. His tail looked like a wet wisp of fur, and his little round face was very sad. "Meouw!" said he. "Meouw! Meouw!"',
      'He heard somebody coming up the street. "I will follow that Gentleman," he thought, "and I will cry so that he will be sorry for me and give me a home."',
      'When this person came nearer he saw that it was not a Gentleman at all, but a Lady who could hardly keep from being blown away. He could not have seen her except that Cat\'s eyes can see in the dark. "Meouw!" said the Kitten. "Meouw! Meouw!"',
      '"Poor little kitty!" said a voice above him. "Poor little kitty! But you must not come with me."',
      '"Meouw!" answered he, and trotted right along after her. He was a Kitten who was not easily discouraged. He rubbed up against her foot and made her stop for fear of stepping on him. Then he felt himself gently lifted up and put aside. He scrambled back and rubbed against her other foot. And so it was for more than two blocks. The Lady, as he always called her afterward, kept pushing him gently to one side and he kept scrambling back. Sometimes she even had to stand quite still for fear of stepping on him.',
      '"Meouw!" said the Kitten, and he made up his mind that anybody who spoke so kindly to strange Kittens would be a good friend. "I will stick to her," he said to himself. "I don\'t care how many times she pushes me away, I will scramble back."',
      'When they turned in at a gate he saw a big house ahead of him with many windows brightly lighted and another light on the porch. "I like that home," he said to himself. "I will slip through the door when she opens it."',
      'But after she had turned the key in the door she pushed him back and closed the screen between them. Then he heard her say: "Poor little kitty! I want to take you in, but we have agreed not to adopt another Cat." Then she closed the door.',
      "He wanted to explain that he was not really a Cat, only a little Kitten, but he had no chance to say anything, so he waited outside and thought and cried. He did not know that the Lady and her husband feared that Cats would eat the many birds who nested in the trees on the lawn. He thought it very hard luck for a tiny Kitten to be left out in the cold rain while the Lady was reading by a blazing grate fire. He did not know that as she sat by the fire she thought about him instead of her book, for she loved little Kittens, and found it hard to leave any out in the street alone.",
      'While he was thinking and crying, a tall Gentleman with a black beard and twinkling brown eyes came striding up to the brightly lighted porch. "Well, Pussy-cat!" said the Gentleman, and took a bunch of shining, jingling things out of his pocket and stuck one of them into a little hole in the door and turned it. Then the door swung open, and the Gentleman, who was trying to close his umbrella and shake off the rain, called first to the Lady and then to the kitten. "O Clara!" he cried. "Come to see this poor little Kitten. Here Kitty, Kitty, Kitty! I know you want to see him. Here Kitty, Kitty, Kitty! I should have thought you would have heard him crying. Here Kitty, Kitty, Kitty!"',
      'The Lady came running out and was laughing. "Yes, John," she said, "I have had the pleasure of meeting him before. He was under my feet most of the way home from church to-night, and I could hardly bear to leave him outside. But you know what we promised each other, that we would not adopt another Cat, on account of the birds."',
      'The Gentleman sat down upon the stairs and wiped the Kitten off with his handkerchief. "Y-yes, I know," he said weakly, "but Clara, look at this poor little fellow. He couldn\'t catch a Chipping Sparrow."',
      '"Not now," answered the Lady, "yet he will grow, if he is like most Kittens, and you know what we said. If we don\'t stick to it we will soon have as many Cats as we did a few years ago."',
      'The Kitten saw that if he wanted to stay in this home he must insist upon it and be very firm indeed with these people. So he kept on crying and stuck his sharp claws into the Gentleman\'s sleeve. The Gentleman said "Ouch!" and lifted him on to his coat lapel. There he clung and shook and cried.',
      '"Well, I suppose we mustn\'t keep him then," said he; "but we will give him a warm supper anyway." So they got some milk and heated it, and set it in a shallow dish before the grate. How that Kitten did eat! The Lady sat on the floor beside him, and the Gentleman drew his chair up close, and they said that it seemed hard to turn him out, but that they would have to do it because they had promised each other.',
      "The Kitten lapped up his milk with a soft click-clicking of his little pink tongue, and then turned his head this way and that until he had licked all the corners clean. He was so full of warm milk that his sides bulged out, and his fur had begun to dry and stuck up in pointed wisps all over him. He pretended to lap milk long after it was gone. This was partly to show them how well he could wash dishes, and partly to put off the time when he should be thrust out of doors."
    ].join("\n\n"),
    questions: [
      {
        prompt: "Which of the following reasons is NOT one of the reasons that the kitten decides to follow the human?",
        choices: ["It is injured", "It is starving", "It is soaked", "It is cold"],
        answerIndex: 0
      },
      {
        prompt: "How does the woman show that she doesn't want the kitten to follow her?",
        choices: [
          "She gently pushes him away",
          "She throws rocks at him",
          "She pretends to be angry",
          "She locks Kitten behind a gate"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Perseverance means that one does not give up, even when things are difficult or very hard. How did Kitten show perseverance in the passage?",
        choices: [
          "He decided that he would continue to follow the woman",
          "He laid down and went to sleep",
          "He went into a man's garage",
          "He entered the woman's door when she opened it"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Read the following detail from the passage: Kitten to be left out in the cold rain while the Lady was reading by a blazing grate fire. How did Kitten label the woman because of this observation?",
        choices: [
          "He thought she was selfish",
          "He thought she was beautiful",
          "He thought she was perfect",
          "He thought she was rich"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "What had MOST LIKELY happened to John and Clara in the past to make them promise that there would be no more cats?",
        choices: [
          "Their yard had become a place for the cats to prey",
          "Their home had become too dirty, due to untrained housecats",
          "One of them had developed a pet allergy",
          "Their favorite and most cherished cat had died"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following points of view is the story told from?",
        choices: [
          "An all-knowing narrator (third person)",
          "The Kitten (first person)",
          "John (first person)",
          "Clara (first person)"
        ],
        answerIndex: 0
      }
    ]
  },
  {
    id: "passage4",
    title: "The President's Radio Address (adapted, given by Bill Clinton, January 1, 2000)",
    text: [
      "The President. Good morning, and Happy New Year — or, we should say, happy new millennium. Last night Hillary and I joined thousands of Americans on the National Mall to say goodbye to a remarkable century. We also said hello to the new millennium.",
      "One of the most remarkable details about last night's celebration is the way it was shared all around the world. Millions of Americans, and billions of others across the globe, watched the New Year come in. Midnight broke first in Asia, then in Europe, then Africa, South America, finally, here in North America.",
      "Isn't it amazing that people all over the planet could experience the same events at the same time? Imagining this a thousand years ago would have seemed impossible. It would have also seemed impossible one hundred years ago. Technology has connected people from all over the world. We have a global economy and the Internet.",
      "Our growth in America is directly tied to other nations. We cannot separate our future from other people. We must have partners to trade with, secure democracies to keep peace, and work together to overcome challenges. Today, those challenges include terrorism and environmental destruction.",
      "As we begin the 21st century, we need to be focused on what lies ahead. We are enjoying widespread economic success and national self-confidence.",
      'Almost 55 years ago, President Franklin Roosevelt said that "we cannot live alone at peace . . . our own well-being is dependent on the well-being of other nations far away."',
      "I believe Roosevelt's words will prove even truer in the 21st century. With America fulfilling our responsibilities, we can make this new century a time of extraordinary peace, freedom, and prosperity for our people and for all the citizens of the world. Thank you, and Happy New Year."
    ].join("\n\n"),
    questions: [
      {
        prompt:
          "Which of the following statements from the passage reveals the celebration that the President is reflecting back on?",
        choices: [
          "...We should say, happy new millennium.",
          "Isn't it amazing how people all over the planet could experience the same event at the same time?",
          "Our growth in America is directly tied to other nations.",
          "I believe Roosevelt's words will prove even truer..."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following BEST expresses the main idea of this passage?",
        choices: [
          "Success and prosperity lie ahead for America and its citizens",
          "The New Year is a great reason to celebrate",
          "People from all over the world celebrated together",
          "President Roosevelt was a great president"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which person in the world would have MOST LIKELY celebrated the New Year first?",
        choices: [
          "A person residing in Asia",
          "A person residing in South America",
          "A person residing in Africa",
          "A person residing in North America"
        ],
        answerIndex: 0
      },
      {
        prompt: "What does the word millennium from the passage mean?",
        choices: ["1,000 years", "100 years", "10 years", "5 years"],
        answerIndex: 0
      },
      {
        prompt:
          "President Clinton provides a direct quotation from President Franklin Roosevelt. Where would someone MOST LIKELY find this and other Presidential quotes?",
        choices: [
          "A book about White House history",
          "The Biography of Bill Clinton",
          "The Biography of Theodore Roosevelt",
          "A book about elections"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Bill Clinton delivered this speech on January 1, 2000. If he was president both while celebrating New Year's Eve and on New Year's Day, which set of dates would he have been president?",
        choices: ["1997 – 2001", "2001 - 2005", "1995 - 1999", "1992 - 1996"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "passage5",
    title: "Two Fables from Aesop's Fables",
    text: [
      "The Goose That Laid the Golden Eggs",
      "A Man and his Wife had the good fortune to possess a Goose which laid a Golden Egg every day. Lucky though they were, they soon began to think they were not getting rich fast enough, and, imagining the bird must be made of gold inside, they decided to kill it in order to secure the whole store of precious metal at once. But when they cut it open they found it was just like any other goose. Thus, they neither got rich all at once, as they had hoped, nor enjoyed any longer the daily addition to their wealth.",
      "Much wants more and loses all.",
      "The Lion and the Mouse",
      'A Lion asleep in his lair was waked up by a Mouse running over his face. Losing his temper he seized it with his paw and was about to kill it. The Mouse, terrified, entreated him to spare its life. "Please let me go," it cried, "and one day I will repay you for your kindness."',
      "The idea of so insignificant a creature ever being able to do anything for him amused the Lion so much that he laughed aloud, and good-humouredly let it go. But the Mouse's chance came, after all. One day the Lion got entangled in a net which had been spread for game by some hunters, and the Mouse heard and recognized his roars of anger and ran to the spot. Without more ado it set to work to gnaw the ropes with its teeth, and succeeded before long in setting the Lion free.",
      '"There!" said the Mouse, "you laughed at me when I promised I would repay you: but now you see, even a Mouse can help a Lion."'
    ].join("\n\n"),
    questions: [
      {
        prompt: 'The man and his wife in "The Goose that Laid the Golden Eggs" became which of the following?',
        choices: ["greedy", "angry", "thankful", "wealthy"],
        answerIndex: 0
      },
      {
        prompt: "Which of the following do these passages have in common?",
        choices: [
          "They use animals to teach life lessons",
          "They use humans to teach life lessons",
          "They use money as a way to teach about greed",
          "They use kindness to show how important it is to treat others the way we want to be treated"
        ],
        answerIndex: 0
      },
      {
        prompt:
          'Read the following statement from the passage: The Mouse, terrified, entreated him to spare its life. What does the underlined word "entreated" MOST LIKELY mean?',
        choices: ["begged", "slept", "denied", "ran"],
        answerIndex: 0
      },
      {
        prompt: "These passages are told from which point of view?",
        choices: [
          "A third person narrator's point of view",
          "The main human character's point of view",
          "The smallest animal's point of view",
          "The largest animal's point of view"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following BEST identifies the organizational structure found within these passages?",
        choices: ["Cause and effect", "Chronological", "Problem/solution", "Comparison/contrast"],
        answerIndex: 0
      },
      {
        prompt: "Which of the following statements is MOST LIKELY true about the characters from these passages?",
        choices: [
          "The Mouse is honest",
          "The Lion is selfish",
          'The Man from "The Goose that Laid the Golden Eggs" makes the best choices',
          'The goose from "The Goose that Laid the Golden Eggs" had the least intelligence'
        ],
        answerIndex: 0
      }
    ]
  }
];
