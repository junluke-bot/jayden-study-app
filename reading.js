// Reading comprehension passages for the Iowa Assessments practice app.
// Passages 1-5 are transcribed from an Iowa 5th Grade ELA practice test (Test C).
// Passages 6-10 use public-domain/government texts (Burgess's Reddy Fox,
// Eggleston's Michael Angelo story, La Fontaine's fable, an Aesop's fable,
// and a girlshealth.gov article) with original comprehension questions.
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
  },
  {
    id: "passage6",
    title: "Reddy Grows Careless (adapted from The Adventures of Reddy Fox by Thornton W. Burgess)",
    text: [
      "Ol' Mistah Buzzard was right. Trouble was right at the heels of Reddy Fox, although Reddy wouldn't have believed it if he had been told. He had stolen that plump pet chicken of Farmer Brown's boy for no reason under the sun but to show off. He wanted everyone to know how bold he was. He thought himself so smart that he could do just exactly what he pleased and no one could stop him. He liked to strut around through the Green Forest and over the Green Meadows and brag about what he had done and what he could do.",
      "Now people who brag and boast and who like to show off are almost sure to come to grief. And when they do, very few people are sorry for them. None of the little meadow and forest people liked Reddy Fox, anyway, and they were getting so tired of his boasting that they just ached to see him get into trouble.",
      "Peter Rabbit, happy-go-lucky Peter Rabbit, shook his head gravely when he heard how Reddy had stolen that pet chicken of Farmer Brown's boy, and was boasting about it to everyone.",
      "\"Reddy Fox is getting so puffed up that pretty soon he won't be able to see his own feet,\" said Peter Rabbit. \"If Reddy doesn't watch out, someday he'll step right into a trap.\"",
      "Now when Farmer Brown's boy heard about the boldness of Reddy Fox, he shut his mouth tight in a way that was unpleasant to see and reached for his gun. \"I can't afford to raise chickens to feed foxes!\" said he. Then he whistled for Bowser the Hound, and together they started out. It wasn't long before Bowser found Reddy's tracks.",
      "Reddy Fox, taking a nap on the edge of the Green Forest, heard Bowser's big, deep voice. He pricked up his ears, then he grinned. \"I feel just like a good run today,\" said he, and trotted off along the Crooked Little Path down the hill.",
      "Now this was a beautiful summer day and Reddy knew that in summer men and boys seldom hunt foxes. \"It's only Bowser the Hound,\" thought Reddy, \"and when I've had a good run, I'll play a trick on him so that he will lose my track.\" So Reddy didn't use his eyes as he should have done. You see, he thought himself so smart that he had grown careless. He kept looking back to see where Bowser the Hound was, but didn't look around to make sure that no other danger was near.",
      "Ol' Mistah Buzzard, sailing round and round, way up in the blue, blue sky, could see everything going on down below. He could see Reddy Fox running along the edge of the Green Forest and every few minutes stopping to chuckle and listen to Bowser the Hound trying to pick out the trail Reddy had made so hard to follow by his twists and turns. And he saw something else, did Ol' Mistah Buzzard. It looked to him very much like the barrel of a gun sticking out from behind an old tree just ahead of Reddy.",
      "\"Ah reckon it's just like Ah said: Reddy Fox is gwine to meet trouble right smart soon,\" muttered Ol' Mistah Buzzard."
    ].join("\n\n"),
    questions: [
      {
        prompt: "Why do the other animals want to see Reddy Fox get into trouble?",
        choices: [
          "They are tired of his bragging and boasting.",
          "They are jealous that he caught a chicken.",
          "They are afraid of him.",
          "They want Farmer Brown's boy to like them instead."
        ],
        answerIndex: 0
      },
      {
        prompt: "What does it mean that Reddy Fox has \"grown careless\"?",
        choices: [
          "He has stopped paying close attention to danger.",
          "He has become messy in his appearance.",
          "He has forgotten how to run quickly.",
          "He has lost interest in chickens."
        ],
        answerIndex: 0
      },
      {
        prompt: "Why does Peter Rabbit warn that Reddy might \"step right into a trap\"?",
        choices: [
          "He thinks Reddy's overconfidence will lead him into danger.",
          "He wants Jimmy Skunk to set an actual trap for Reddy.",
          "He is worried a trap has been left in the forest by mistake.",
          "He heard Farmer Brown's boy planning it out loud."
        ],
        answerIndex: 0
      },
      {
        prompt: "How does the author build suspense at the end of the passage?",
        choices: [
          "By showing a hidden danger is near while Reddy still feels safe.",
          "By describing the weather changing suddenly.",
          "By having Bowser the Hound give up the chase.",
          "By revealing that Reddy already escaped safely."
        ],
        answerIndex: 0
      },
      {
        prompt: "What can readers infer about Ol' Mistah Buzzard's role in the story?",
        choices: [
          "He is an observer who can see danger the other characters cannot.",
          "He is the one hunting Reddy Fox.",
          "He is Farmer Brown's boy in disguise.",
          "He is trying to warn Reddy directly."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which word best describes Reddy Fox's attitude at the start of the passage?",
        choices: ["Boastful", "Fearful", "Modest", "Lonely"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "passage7",
    title: "How a Boy Was Hired Out, and What Came of It (adapted from Strange Stories from History for Young People by George Cary Eggleston)",
    text: [
      "When Michael Angelo was twelve years of age, although he had had no instruction in art, he did a piece of work which greatly pleased the painter Ghirlandajo. That artist at once declared that here was a lad of genius, who must quit his school studies and become a painter.",
      "When Michael Angelo had been with Ghirlandajo about two years, he went one day to the Gardens of St. Mark, where the Prince Lorenzo de' Medici — who was the foremost patron of art in Florence — had established a rich museum of art-works at great expense. One of the workmen in the garden gave the boy leave to try his hand at copying some of the sculptures there, and Michael, who had hitherto studied only painting, was glad of a chance to experiment with the chisel, which he preferred to the brush. He chose for his model an ancient figure of a faun, which was somewhat mutilated. The mouth, indeed, was entirely broken off, but the boy was very self-reliant, and this did not trouble him. He worked day after day at the piece, creating a mouth for it of his own imagining, with the lips parted in laughter and the teeth displayed.",
      "When he had finished, and was looking at his work, a man standing near asked if he might offer a criticism.",
      "\"Yes,\" answered the boy, \"if it is a just one.\" \"Of that you shall be the judge,\" said the man. \"Very well. What is it?\" \"The forehead of your faun is old, but the mouth is young. See, it has a full set of perfect teeth. A faun so old as this one is would not have perfect teeth.\"",
      "The lad admitted the justice of the criticism, and proceeded to remedy the defect by chipping away two or three of the teeth, and chiseling the gums so as to give them a shriveled appearance.",
      "The next morning, when Michael went to remove his faun from the garden, it was gone. He searched everywhere for it, but without success. Finally, seeing the man who had made the suggestion about the teeth, he asked him if he knew where it was. \"Yes,\" replied the man, \"and if you will follow me I'll show you where it is.\" \"Will you give it back to me? I made it, and have a right to it.\" \"Oh, if you must have it, you shall.\"",
      "With that he led the way into the palace of the prince, and there, among the most precious works of art in the collection, stood the faun. The young sculptor cried out in alarm, declaring that the Prince Lorenzo would never forgive the introduction of so rude a piece of work among his treasures of sculpture. To his astonishment the man declared that he was himself the Prince Lorenzo de' Medici, and that he set the highest value upon this work.",
      "\"I am your protector and friend,\" he added. \"Henceforth you shall be counted as my son, for you are destined to become one of the great masters of art.\"",
      "This was overwhelming good-fortune. Lorenzo de' Medici was a powerful nobleman, known far and wide to be a most expert judge of works of art. His approval was in itself fame and fortune."
    ].join("\n\n"),
    questions: [
      {
        prompt: "Why was Michael Angelo not troubled by the faun's missing mouth?",
        choices: [
          "He was confident enough to invent a new mouth himself.",
          "He planned to ask Ghirlandajo for help.",
          "He did not notice the mouth was missing.",
          "He preferred sculptures without mouths."
        ],
        answerIndex: 0
      },
      {
        prompt: "How did Michael Angelo react to the stranger's criticism of his sculpture?",
        choices: [
          "He accepted it and fixed the problem.",
          "He argued that the criticism was unfair.",
          "He abandoned the sculpture entirely.",
          "He ignored the comment completely."
        ],
        answerIndex: 0
      },
      {
        prompt: "What was surprising about the identity of the man who criticized the sculpture?",
        choices: [
          "He turned out to be the powerful Prince Lorenzo de' Medici.",
          "He turned out to be Ghirlandajo in disguise.",
          "He turned out to be a thief.",
          "He turned out to be another young sculptor."
        ],
        answerIndex: 0
      },
      {
        prompt: "Why does the author include the detail that the faun was placed among the prince's \"most precious works of art\"?",
        choices: [
          "To show how highly the prince valued Michael Angelo's work.",
          "To explain how expensive the museum was.",
          "To show that the faun was stolen property.",
          "To describe what the garden looked like."
        ],
        answerIndex: 0
      },
      {
        prompt: "What lesson does this story MOST LIKELY teach?",
        choices: [
          "Being open to feedback can lead to great rewards.",
          "Famous people should not be trusted.",
          "Art museums are dangerous places.",
          "Only trained painters can become sculptors."
        ],
        answerIndex: 0
      },
      {
        prompt: "Based on the passage, how would you describe Prince Lorenzo de' Medici?",
        choices: [
          "Generous and a skilled judge of art.",
          "Suspicious and secretive.",
          "Cruel and demanding.",
          "Careless and easily fooled."
        ],
        answerIndex: 0
      }
    ]
  },
  {
    id: "passage8",
    title: "The Dove and the Ant (by Jean de La Fontaine)",
    text: [
      "An Ant who in a brook would drink",
      "Fell off the bank. He tried",
      "To swim, and felt his courage sink--",
      "This ocean seemed so wide.",
      "But for a dove who flew above",
      "He would have drowned and died.",
      "The friendly Dove within her beak",
      "A bridge of grass-stem bore:",
      "On this the Ant, though worn and weak.",
      "Contrived to reach the shore",
      "Said he: \"The tact of this kind act",
      "I'll cherish evermore.\"",
      "Behold! A barefoot wretch went by",
      "With slingshot in his hand.",
      "Said he: \"You'll make a pigeon pie",
      "That will be kind of grand.\"",
      "He meant to murder the gentle bird--",
      "Who did not understand.",
      "The Ant then stung him on the heel",
      "(So quick to see the sling).",
      "He turned his head, and missed a meal:",
      "The pigeon pie took wing.",
      "And so the Dove lived on to love--",
      "Beloved by everything."
    ].join("\n\n"),
    questions: [
      {
        prompt: "Why does the Ant almost drown at the beginning of the poem?",
        choices: [
          "He falls into a brook and cannot swim well enough to escape it.",
          "He is pushed in by another animal.",
          "He is caught in a storm.",
          "He falls asleep near the water."
        ],
        answerIndex: 0
      },
      {
        prompt: "How does the Dove help the Ant?",
        choices: [
          "She gives him a blade of grass to use as a bridge to safety.",
          "She carries him across in her beak.",
          "She calls for help from other birds.",
          "She pulls him out with her claws."
        ],
        answerIndex: 0
      },
      {
        prompt: "What does the Ant do to repay the Dove's kindness?",
        choices: [
          "He stings a hunter's heel to stop him from catching the Dove.",
          "He builds the Dove a nest.",
          "He warns other ants about the hunter.",
          "He brings the Dove food."
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the theme, or lesson, of this poem?",
        choices: [
          "A kind act is often repaid with kindness.",
          "Only the strong can help others.",
          "It is foolish to trust strangers.",
          "Small creatures should avoid danger."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which word best describes the \"barefoot wretch\" in the poem?",
        choices: ["Dangerous", "Generous", "Careful", "Friendly"],
        answerIndex: 0
      },
      {
        prompt: "Why might the poet have chosen a tiny ant to be the hero who saves the Dove?",
        choices: [
          "To show that even the smallest creature can make a big difference.",
          "To show that ants are the smartest animals.",
          "To make the poem funnier.",
          "To explain how ants build bridges."
        ],
        answerIndex: 0
      }
    ]
  },
  {
    id: "passage9",
    title: "Mercury and the Woodman (from Aesop's Fables)",
    text: [
      "A poor Woodman was cutting down a tree near the edge of a deep pool in the forest. It was late in the day and the Woodman was tired. He had been working since sunrise and his strokes were not so sure as they had been early that morning. Thus it happened that the axe slipped and flew out of his hands into the pool.",
      "The Woodman was in despair. The axe was all he possessed with which to make a living, and he had not money enough to buy a new one. As he stood wringing his hands and weeping, the god Mercury suddenly appeared and asked what the trouble was. The Woodman told what had happened, and straightway the kind Mercury dived into the pool. When he came up again he held a wonderful golden axe.",
      "\"Is this your axe?\" Mercury asked the Woodman.",
      "\"No,\" answered the honest Woodman, \"that is not my axe.\" Mercury laid the golden axe on the bank and sprang back into the pool. This time he brought up an axe of silver, but the Woodman declared again that his axe was just an ordinary one with a wooden handle.",
      "Mercury dived down for the third time, and when he came up again he had the very axe that had been lost.",
      "The poor Woodman was very glad that his axe had been found and could not thank the kind god enough. Mercury was greatly pleased with the Woodman's honesty.",
      "\"I admire your honesty,\" he said, \"and as a reward you may have all three axes, the gold and the silver as well as your own.\"",
      "The happy Woodman returned to his home with his treasures, and soon the story of his good fortune was known to everybody in the village. Now there were several Woodmen in the village who believed that they could easily win the same good fortune. They hurried out into the woods, one here, one there, and hiding their axes in the bushes, pretended they had lost them. Then they wept and wailed and called on Mercury to help them.",
      "And indeed, Mercury did appear, first to this one, then to that. To each one he showed an axe of gold, and each one eagerly claimed it to be the one he had lost. But Mercury did not give them the golden axe. Instead he gave them each a hard whack over the head with it and sent them home. And when they returned next day to look for their own axes, they were nowhere to be found.",
      "Moral: Honesty is the best policy."
    ].join("\n\n"),
    questions: [
      {
        prompt: "Why does Mercury reward the Woodman with all three axes?",
        choices: [
          "Because the Woodman was honest about which axe was really his.",
          "Because the Woodman worked hard cutting down trees.",
          "Because the Woodman prayed to Mercury.",
          "Because the Woodman was the poorest man in the village."
        ],
        answerIndex: 0
      },
      {
        prompt: "What lesson do the other Woodmen fail to understand?",
        choices: [
          "That dishonesty does not lead to a real reward.",
          "That gold axes are heavier than silver ones.",
          "That Mercury only appears once per village.",
          "That trees should not be cut down near water."
        ],
        answerIndex: 0
      },
      {
        prompt: "How does Mercury punish the dishonest Woodmen?",
        choices: [
          "He hits each of them with the golden axe instead of rewarding them.",
          "He takes away their real axes right away.",
          "He tells the whole village about their lie.",
          "He turns their axes to stone."
        ],
        answerIndex: 0
      },
      {
        prompt: "What can readers infer happened to the dishonest Woodmen's own axes?",
        choices: [
          "They lost their real axes for good because of their trick.",
          "Mercury returned them along with a golden axe.",
          "Their axes turned into gold overnight.",
          "The other villagers stole them."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which detail shows that the first Woodman was truly poor?",
        choices: [
          "The axe was all he possessed with which to make a living.",
          "He had been working since sunrise.",
          "He wept and wailed by the pool.",
          "He lived in a village with many other Woodmen."
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the moral of this fable?",
        choices: [
          "Honesty is the best policy.",
          "Hard work always pays off.",
          "Never trust a stranger.",
          "Greed makes people stronger."
        ],
        answerIndex: 0
      }
    ]
  },
  {
    id: "passage10",
    title: "Why Fitness Matters (adapted from girlshealth.gov)",
    text: [
      "What is physical fitness? A condition or state of being that helps you look, feel and do your best. It is the ability to do tasks full of energy, and still be able to do other things with your time, such as schoolwork and activities with family and friends. It is a basis for good health and well-being. Fitness involves performance of the heart and lungs, and the muscles of the body. Fitness can also influence how alert you are and how you feel emotionally.",
      "Exercise is an important part of a lifetime of good health! Exercising is also fun and is something you can do with friends. Regular exercise provides both mental and physical health benefits.",
      "Mental health benefits of exercise: One of the great things about exercise is that it can improve your mental health. Regular exercise can help you feel less stressed, can improve your self-esteem, and can help you to feel ready to learn in school. Kids who exercise may also have reduced symptoms of anxiety and depression.",
      "Exercise can also improve your overall mood. Did you have an argument with a friend? Or did you do poorly on a test? A workout at the gym or a brisk 30-minute walk will make your brain produce chemicals that will make you happier and more relaxed than before you started working out.",
      "What if you're having trouble sleeping? Again, it's exercise to the rescue! Regular exercise can help you fall asleep faster and help you sleep deeper. A good night's sleep can improve your concentration and productivity in school the next day.",
      "Physical health benefits of exercise: Another great thing about exercise is that it can keep your body healthy. Kids who exercise often have a healthier body weight than kids who don't exercise. Exercise makes your bones solid, improves your heart and lungs, and makes your muscles strong.",
      "Exercise can also affect specific diseases that affect adolescents and teens. New research shows that teens who exercise regularly (about 60 minutes of brisk exercise each day) burn more calories and use blood sugar more efficiently than teens who don't exercise. This could protect them from developing type 2 diabetes.",
      "Here is something else to consider: children and adolescents who are overweight are more likely to become adults who are overweight. If you start good habits, like daily exercise, when you are young, you will be likely to continue them when you're older.",
      "Get moving! The more time you spend in front of the television or playing video games, the less time you have to be active. Not being active is called a sedentary lifestyle. Leading a sedentary lifestyle can cause weight gain and even obesity, which can lead to type 2 diabetes, high cholesterol levels, and high blood pressure. Make physical activity a regular part of your life. It can help you protect your health!"
    ].join("\n\n"),
    questions: [
      {
        prompt: "According to the passage, which is a mental health benefit of exercise?",
        choices: [
          "It can reduce stress and improve self-esteem.",
          "It can make your bones stronger.",
          "It can help you grow taller.",
          "It can improve your eyesight."
        ],
        answerIndex: 0
      },
      {
        prompt: "What does the passage say can happen if someone leads a sedentary lifestyle?",
        choices: [
          "They may gain weight and develop health problems like diabetes.",
          "They may become better at video games.",
          "They may sleep less than active people.",
          "They may become more focused in school."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which detail from the passage explains why exercise can help someone sleep better?",
        choices: [
          "Regular exercise helps you fall asleep faster and sleep more deeply.",
          "Exercise makes you too tired to dream.",
          "Exercise raises your body temperature at night.",
          "Exercise reduces the amount of sleep you need."
        ],
        answerIndex: 0
      },
      {
        prompt: "Why does the author most likely include information about type 2 diabetes?",
        choices: [
          "To show a serious health risk that regular exercise can help prevent.",
          "To explain how diabetes is diagnosed.",
          "To compare type 1 and type 2 diabetes.",
          "To describe a treatment for diabetes."
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the main purpose of this passage?",
        choices: [
          "To explain how exercise benefits both the mind and the body.",
          "To convince readers to join a sports team.",
          "To describe the history of physical education.",
          "To warn readers about the dangers of exercise."
        ],
        answerIndex: 0
      },
      {
        prompt: "Based on the passage, which habit would most likely help someone avoid a sedentary lifestyle?",
        choices: [
          "Taking a 30-minute walk instead of watching television.",
          "Reading a book before bed.",
          "Playing a video game with a friend.",
          "Eating a healthy snack after school."
        ],
        answerIndex: 0
      }
    ]
  }
];
