// Word data for the Iowa Assessments vocabulary quiz app.
// Each set has an id, a display name, and 20 words.
// Each word has:
//   word        - the target vocabulary word
//   phrase      - a short phrase using the word (word itself is highlighted in the UI)
//   choices     - four answer options (one correct synonym + three distractors)
//   answerIndex - index into choices[] of the correct synonym
//   meaning     - a short definition shown on the end screen for missed words

window.WORD_SETS = [
  {
    id: "set1",
    name: "Word Set 1",
    words: [
      {
        word: "evade",
        phrase: "to evade the question",
        choices: ["dodge", "answer", "welcome", "repeat"],
        answerIndex: 0,
        meaning: "to avoid or escape from, often by cleverness"
      },
      {
        word: "courteous",
        phrase: "a courteous greeting",
        choices: ["polite", "rude", "silent", "nervous"],
        answerIndex: 0,
        meaning: "polite and considerate toward others"
      },
      {
        word: "perish",
        phrase: "many plants perish in winter",
        choices: ["die", "grow", "bloom", "thrive"],
        answerIndex: 0,
        meaning: "to die or come to an end"
      },
      {
        word: "immense",
        phrase: "an immense mountain",
        choices: ["huge", "tiny", "narrow", "ordinary"],
        answerIndex: 0,
        meaning: "extremely large; huge"
      },
      {
        word: "astound",
        phrase: "the magic trick will astound you",
        choices: ["amaze", "bore", "anger", "tire"],
        answerIndex: 0,
        meaning: "to amaze or shock with surprise"
      },
      {
        word: "feeble",
        phrase: "a feeble excuse",
        choices: ["weak", "strong", "clever", "funny"],
        answerIndex: 0,
        meaning: "weak; lacking strength or effectiveness"
      },
      {
        word: "withdraw",
        phrase: "to withdraw from the race",
        choices: ["quit", "continue", "win", "start"],
        answerIndex: 0,
        meaning: "to remove oneself from something, or take back"
      },
      {
        word: "industrious",
        phrase: "an industrious worker",
        choices: ["hardworking", "lazy", "forgetful", "careless"],
        answerIndex: 0,
        meaning: "hardworking and diligent"
      },
      {
        word: "saunter",
        phrase: "to saunter down the street",
        choices: ["stroll", "race", "hide", "jump"],
        answerIndex: 0,
        meaning: "to walk in a slow, relaxed manner"
      },
      {
        word: "sluggish",
        phrase: "a sluggish turtle",
        choices: ["slow", "fast", "loud", "hungry"],
        answerIndex: 0,
        meaning: "slow-moving; lacking energy"
      },
      {
        word: "exasperate",
        phrase: "his jokes exasperate her",
        choices: ["annoy", "please", "relax", "amuse"],
        answerIndex: 0,
        meaning: "to irritate or annoy intensely"
      },
      {
        word: "obsolete",
        phrase: "an obsolete computer",
        choices: ["outdated", "modern", "popular", "expensive"],
        answerIndex: 0,
        meaning: "no longer in use; outdated"
      },
      {
        word: "deprive",
        phrase: "to deprive someone of sleep",
        choices: ["deny", "give", "share", "offer"],
        answerIndex: 0,
        meaning: "to take something away from someone"
      },
      {
        word: "nonchalant",
        phrase: "a nonchalant shrug",
        choices: ["unconcerned", "worried", "excited", "angry"],
        answerIndex: 0,
        meaning: "calm and casual; unconcerned"
      },
      {
        word: "exult",
        phrase: "to exult in victory",
        choices: ["rejoice", "mourn", "worry", "complain"],
        answerIndex: 0,
        meaning: "to show great joy or triumph"
      },
      {
        word: "sparse",
        phrase: "a sparse crowd",
        choices: ["scanty", "dense", "cheerful", "loud"],
        answerIndex: 0,
        meaning: "thinly spread or scattered; not dense"
      },
      {
        word: "taunt",
        phrase: "to taunt a rival",
        choices: ["mock", "praise", "help", "ignore"],
        answerIndex: 0,
        meaning: "to mock or provoke with insults"
      },
      {
        word: "hearty",
        phrase: "a hearty laugh",
        choices: ["enthusiastic", "weak", "quiet", "sad"],
        answerIndex: 0,
        meaning: "warm, enthusiastic, and full of energy"
      },
      {
        word: "suspend",
        phrase: "to suspend the game",
        choices: ["pause", "continue", "finish", "start"],
        answerIndex: 0,
        meaning: "to stop something temporarily"
      },
      {
        word: "solitary",
        phrase: "a solitary walk",
        choices: ["alone", "crowded", "noisy", "busy"],
        answerIndex: 0,
        meaning: "alone; without others"
      }
    ]
  },
  {
    id: "set2",
    name: "Word Set 2",
    words: [
      {
        word: "abolish",
        phrase: "to abolish an unfair law",
        choices: ["eliminate", "create", "ignore", "discuss"],
        answerIndex: 0,
        meaning: "to officially end or put a stop to something, especially a law"
      },
      {
        word: "absurd",
        phrase: "an absurd idea",
        choices: ["ridiculous", "sensible", "serious", "boring"],
        answerIndex: 0,
        meaning: "completely unreasonable or silly"
      },
      {
        word: "abuse",
        phrase: "to abuse a privilege",
        choices: ["misuse", "protect", "share", "ignore"],
        answerIndex: 0,
        meaning: "to use something wrongly or harmfully"
      },
      {
        word: "access",
        phrase: "to access the files",
        choices: ["reach", "block", "lose", "hide"],
        answerIndex: 0,
        meaning: "the means or ability to reach or use something"
      },
      {
        word: "accomplish",
        phrase: "to accomplish a goal",
        choices: ["achieve", "abandon", "forget", "delay"],
        answerIndex: 0,
        meaning: "to succeed in finishing something"
      },
      {
        word: "achievement",
        phrase: "a proud achievement",
        choices: ["accomplishment", "failure", "mistake", "task"],
        answerIndex: 0,
        meaning: "something successfully done through effort"
      },
      {
        word: "aggressive",
        phrase: "an aggressive dog",
        choices: ["hostile", "gentle", "calm", "friendly"],
        answerIndex: 0,
        meaning: "ready to attack or act with force"
      },
      {
        word: "alternate",
        phrase: "to alternate between tasks",
        choices: ["switch", "repeat", "ignore", "combine"],
        answerIndex: 0,
        meaning: "to take turns doing one thing, then another"
      },
      {
        word: "altitude",
        phrase: "flying at a high altitude",
        choices: ["height", "speed", "weight", "depth"],
        answerIndex: 0,
        meaning: "the height of something above sea level"
      },
      {
        word: "antagonist",
        phrase: "the story's antagonist",
        choices: ["villain", "hero", "narrator", "friend"],
        answerIndex: 0,
        meaning: "a person who opposes the main character"
      },
      {
        word: "antonym",
        phrase: "find the antonym for hot",
        choices: ["opposite word", "same-meaning word", "rhyming word", "made-up word"],
        answerIndex: 0,
        meaning: "a word that means the opposite of another word"
      },
      {
        word: "anxious",
        phrase: "feeling anxious before the test",
        choices: ["worried", "calm", "excited", "bored"],
        answerIndex: 0,
        meaning: "feeling nervous or worried"
      },
      {
        word: "apparent",
        phrase: "it was apparent that he was tired",
        choices: ["obvious", "hidden", "false", "confusing"],
        answerIndex: 0,
        meaning: "clear and easy to see or understand"
      },
      {
        word: "approximate",
        phrase: "an approximate answer",
        choices: ["estimated", "exact", "wrong", "final"],
        answerIndex: 0,
        meaning: "close to the exact number or amount, but not precise"
      },
      {
        word: "aroma",
        phrase: "the aroma of fresh bread",
        choices: ["scent", "sound", "taste", "texture"],
        answerIndex: 0,
        meaning: "a pleasant or noticeable smell"
      },
      {
        word: "assume",
        phrase: "to assume he was right",
        choices: ["presume", "prove", "deny", "forget"],
        answerIndex: 0,
        meaning: "to think something is true without proof"
      },
      {
        word: "available",
        phrase: "tickets are available",
        choices: ["obtainable", "sold out", "hidden", "broken"],
        answerIndex: 0,
        meaning: "able to be used or obtained"
      },
      {
        word: "avalanche",
        phrase: "an avalanche of snow",
        choices: ["landslide", "breeze", "puddle", "whisper"],
        answerIndex: 0,
        meaning: "a large mass of snow, ice, and rock sliding down a mountain"
      },
      {
        word: "banquet",
        phrase: "a wedding banquet",
        choices: ["feast", "snack", "fast", "nap"],
        answerIndex: 0,
        meaning: "a large, formal meal for many people"
      },
      {
        word: "beverage",
        phrase: "a cold beverage",
        choices: ["drink", "snack", "dessert", "meal"],
        answerIndex: 0,
        meaning: "a drink of any kind"
      }
    ]
  },
  {
    id: "set3",
    name: "Word Set 3",
    words: [
      {
        word: "bland",
        phrase: "bland food",
        choices: ["tasteless", "spicy", "delicious", "sour"],
        answerIndex: 0,
        meaning: "lacking strong flavor; plain and dull"
      },
      {
        word: "blizzard",
        phrase: "caught in a blizzard",
        choices: ["snowstorm", "sunny day", "breeze", "drought"],
        answerIndex: 0,
        meaning: "a severe snowstorm with strong winds"
      },
      {
        word: "budge",
        phrase: "the rock wouldn't budge",
        choices: ["move", "shrink", "grow", "disappear"],
        answerIndex: 0,
        meaning: "to move slightly, especially when pushed"
      },
      {
        word: "bungle",
        phrase: "to bungle the job",
        choices: ["botch", "perfect", "plan", "finish"],
        answerIndex: 0,
        meaning: "to do something badly or clumsily"
      },
      {
        word: "cautiously",
        phrase: "she walked cautiously",
        choices: ["carefully", "recklessly", "quickly", "loudly"],
        answerIndex: 0,
        meaning: "with care, to avoid danger or mistakes"
      },
      {
        word: "challenge",
        phrase: "a math challenge",
        choices: ["test", "reward", "rest", "game"],
        answerIndex: 0,
        meaning: "something that tests one's abilities; a difficult task"
      },
      {
        word: "character",
        phrase: "the story's main character",
        choices: ["figure", "setting", "ending", "title"],
        answerIndex: 0,
        meaning: "a person portrayed in a story"
      },
      {
        word: "combine",
        phrase: "to combine two ingredients",
        choices: ["mix", "separate", "remove", "hide"],
        answerIndex: 0,
        meaning: "to join or merge two or more things together"
      },
      {
        word: "companion",
        phrase: "a loyal companion",
        choices: ["friend", "stranger", "enemy", "rival"],
        answerIndex: 0,
        meaning: "a person who spends time with or accompanies another"
      },
      {
        word: "compassion",
        phrase: "showing compassion for others",
        choices: ["sympathy", "cruelty", "anger", "jealousy"],
        answerIndex: 0,
        meaning: "a feeling of caring about others' suffering"
      },
      {
        word: "compensate",
        phrase: "to compensate for the loss",
        choices: ["repay", "ignore", "worsen", "cause"],
        answerIndex: 0,
        meaning: "to make up for a loss, often with payment"
      },
      {
        word: "comply",
        phrase: "to comply with the rules",
        choices: ["obey", "break", "ignore", "question"],
        answerIndex: 0,
        meaning: "to act according to a rule or request"
      },
      {
        word: "compose",
        phrase: "to compose a song",
        choices: ["create", "destroy", "copy", "delete"],
        answerIndex: 0,
        meaning: "to write or create something, like music or a letter"
      },
      {
        word: "concept",
        phrase: "a difficult concept",
        choices: ["idea", "object", "sound", "place"],
        answerIndex: 0,
        meaning: "an idea or general notion"
      },
      {
        word: "confident",
        phrase: "feeling confident about the test",
        choices: ["sure", "nervous", "doubtful", "confused"],
        answerIndex: 0,
        meaning: "feeling sure of oneself and one's abilities"
      },
      {
        word: "convert",
        phrase: "to convert the garage into a room",
        choices: ["change", "destroy", "sell", "ignore"],
        answerIndex: 0,
        meaning: "to change something into a different form"
      },
      {
        word: "course",
        phrase: "changed course",
        choices: ["path", "ending", "mistake", "argument"],
        answerIndex: 0,
        meaning: "a direction taken, or a plan of action"
      },
      {
        word: "crave",
        phrase: "to crave chocolate",
        choices: ["desire", "dislike", "forget", "avoid"],
        answerIndex: 0,
        meaning: "to have a powerful wish for something"
      },
      {
        word: "debate",
        phrase: "a class debate",
        choices: ["discussion", "agreement", "silence", "song"],
        answerIndex: 0,
        meaning: "a formal discussion of opposing views"
      },
      {
        word: "decline",
        phrase: "to decline an invitation",
        choices: ["refuse", "accept", "request", "forget"],
        answerIndex: 0,
        meaning: "to politely refuse something, or to decrease"
      }
    ]
  },
  {
    id: "set4",
    name: "Word Set 4",
    words: [
      {
        word: "dedicate",
        phrase: "to dedicate time to practice",
        choices: ["devote", "waste", "avoid", "forget"],
        answerIndex: 0,
        meaning: "to give time or effort to a purpose"
      },
      {
        word: "detect",
        phrase: "to detect a problem",
        choices: ["notice", "ignore", "cause", "hide"],
        answerIndex: 0,
        meaning: "to discover or notice something"
      },
      {
        word: "dictate",
        phrase: "to dictate the rules",
        choices: ["command", "ask", "whisper", "request"],
        answerIndex: 0,
        meaning: "to state or give orders with authority"
      },
      {
        word: "document",
        phrase: "to document the results",
        choices: ["record", "forget", "hide", "destroy"],
        answerIndex: 0,
        meaning: "to record details in writing"
      },
      {
        word: "duplicate",
        phrase: "to duplicate the key",
        choices: ["copy", "break", "lose", "hide"],
        answerIndex: 0,
        meaning: "to make an exact copy of something"
      },
      {
        word: "edible",
        phrase: "edible mushrooms",
        choices: ["safe to eat", "poisonous", "decorative", "expensive"],
        answerIndex: 0,
        meaning: "fit or safe to be eaten"
      },
      {
        word: "endanger",
        phrase: "to endanger the animals",
        choices: ["risk", "protect", "help", "save"],
        answerIndex: 0,
        meaning: "to put something in danger"
      },
      {
        word: "escalate",
        phrase: "the conflict began to escalate",
        choices: ["increase", "decrease", "pause", "end"],
        answerIndex: 0,
        meaning: "to become greater or more serious"
      },
      {
        word: "excavate",
        phrase: "to excavate the ruins",
        choices: ["dig up", "bury", "build", "paint"],
        answerIndex: 0,
        meaning: "to dig up earth to uncover something buried"
      },
      {
        word: "exert",
        phrase: "to exert herself during practice",
        choices: ["strain", "rest", "relax", "ignore"],
        answerIndex: 0,
        meaning: "to make a physical or mental effort"
      },
      {
        word: "exhibit",
        phrase: "to exhibit artwork",
        choices: ["display", "hide", "destroy", "sell"],
        answerIndex: 0,
        meaning: "to publicly show something"
      },
      {
        word: "frigid",
        phrase: "frigid temperatures",
        choices: ["freezing", "boiling", "mild", "warm"],
        answerIndex: 0,
        meaning: "extremely cold"
      },
      {
        word: "gigantic",
        phrase: "a gigantic building",
        choices: ["enormous", "tiny", "average", "narrow"],
        answerIndex: 0,
        meaning: "extremely large; huge"
      },
      {
        word: "gorge",
        phrase: "a deep gorge",
        choices: ["canyon", "hill", "lake", "field"],
        answerIndex: 0,
        meaning: "a deep, narrow valley, often with a river"
      },
      {
        word: "guardian",
        phrase: "his legal guardian",
        choices: ["protector", "stranger", "rival", "student"],
        answerIndex: 0,
        meaning: "a person who protects or takes care of someone"
      },
      {
        word: "hazy",
        phrase: "a hazy morning",
        choices: ["foggy", "clear", "sunny", "bright"],
        answerIndex: 0,
        meaning: "slightly foggy or unclear"
      },
      {
        word: "homonym",
        phrase: "bark can be a tricky homonym",
        choices: ["sound-alike word", "opposite word", "rhyming word", "made-up word"],
        answerIndex: 0,
        meaning: "a word that sounds like another but has a different meaning"
      },
      {
        word: "identical",
        phrase: "identical twins",
        choices: ["exactly alike", "very different", "mostly similar", "unrelated"],
        answerIndex: 0,
        meaning: "exactly the same in every way"
      },
      {
        word: "illuminate",
        phrase: "to illuminate the room",
        choices: ["brighten", "darken", "cool", "warm"],
        answerIndex: 0,
        meaning: "to light up or make bright"
      },
      {
        word: "impressive",
        phrase: "an impressive performance",
        choices: ["remarkable", "ordinary", "boring", "forgettable"],
        answerIndex: 0,
        meaning: "deserving admiration because of its quality"
      }
    ]
  },
  {
    id: "set5",
    name: "Word Set 5",
    words: [
      {
        word: "independent",
        phrase: "an independent thinker",
        choices: ["self-reliant", "dependent", "confused", "careless"],
        answerIndex: 0,
        meaning: "not relying on others; self-sufficient"
      },
      {
        word: "intense",
        phrase: "intense heat",
        choices: ["extreme", "mild", "weak", "gentle"],
        answerIndex: 0,
        meaning: "very strong or extreme in degree"
      },
      {
        word: "intercept",
        phrase: "to intercept the pass",
        choices: ["block", "allow", "deliver", "ignore"],
        answerIndex: 0,
        meaning: "to stop or catch something before it reaches its destination"
      },
      {
        word: "jubilation",
        phrase: "shouts of jubilation",
        choices: ["joy", "sadness", "anger", "boredom"],
        answerIndex: 0,
        meaning: "a feeling of great happiness and triumph"
      },
      {
        word: "kin",
        phrase: "his closest kin",
        choices: ["family", "strangers", "coworkers", "classmates"],
        answerIndex: 0,
        meaning: "one's family or relatives"
      },
      {
        word: "luxurious",
        phrase: "a luxurious hotel",
        choices: ["lavish", "plain", "cheap", "broken"],
        answerIndex: 0,
        meaning: "extremely comfortable and elegant"
      },
      {
        word: "major",
        phrase: "a major decision",
        choices: ["significant", "minor", "silly", "quick"],
        answerIndex: 0,
        meaning: "greater in importance, size, or seriousness"
      },
      {
        word: "miniature",
        phrase: "a miniature model",
        choices: ["tiny", "giant", "average", "tall"],
        answerIndex: 0,
        meaning: "a very small version of something"
      },
      {
        word: "minor",
        phrase: "a minor injury",
        choices: ["small", "severe", "fatal", "major"],
        answerIndex: 0,
        meaning: "small in size, importance, or seriousness"
      },
      {
        word: "mischief",
        phrase: "full of mischief",
        choices: ["prank", "kindness", "boredom", "sadness"],
        answerIndex: 0,
        meaning: "playful behavior that causes minor trouble"
      },
      {
        word: "monarch",
        phrase: "the reigning monarch",
        choices: ["ruler", "servant", "soldier", "farmer"],
        answerIndex: 0,
        meaning: "a king, queen, or other ruler"
      },
      {
        word: "moral",
        phrase: "the moral of the story",
        choices: ["lesson", "title", "character", "setting"],
        answerIndex: 0,
        meaning: "a lesson about right and wrong"
      },
      {
        word: "myth",
        phrase: "an ancient myth",
        choices: ["legend", "fact", "recipe", "letter"],
        answerIndex: 0,
        meaning: "a traditional story, especially about gods or heroes"
      },
      {
        word: "narrator",
        phrase: "the story's narrator",
        choices: ["storyteller", "villain", "illustrator", "editor"],
        answerIndex: 0,
        meaning: "the person who tells the story"
      },
      {
        word: "navigate",
        phrase: "to navigate the ship",
        choices: ["steer", "crash", "repair", "build"],
        answerIndex: 0,
        meaning: "to plan and direct the course of travel"
      },
      {
        word: "negative",
        phrase: "a negative attitude",
        choices: ["unfavorable", "positive", "cheerful", "hopeful"],
        answerIndex: 0,
        meaning: "expressing disapproval or unfavorable views"
      },
      {
        word: "numerous",
        phrase: "numerous mistakes",
        choices: ["many", "few", "zero", "one"],
        answerIndex: 0,
        meaning: "existing in great numbers"
      },
      {
        word: "oasis",
        phrase: "an oasis in the desert",
        choices: ["haven", "dune", "wasteland", "cliff"],
        answerIndex: 0,
        meaning: "a fertile spot in the desert with water; a pleasant retreat"
      },
      {
        word: "occasion",
        phrase: "a special occasion",
        choices: ["event", "mistake", "argument", "chore"],
        answerIndex: 0,
        meaning: "a particular time or event"
      },
      {
        word: "overthrow",
        phrase: "to overthrow the government",
        choices: ["topple", "support", "elect", "praise"],
        answerIndex: 0,
        meaning: "to remove a ruler or government from power by force"
      }
    ]
  },
  {
    id: "set6",
    name: "Word Set 6",
    words: [
      {
        word: "pardon",
        phrase: "to pardon a criminal",
        choices: ["forgive", "punish", "accuse", "arrest"],
        answerIndex: 0,
        meaning: "to forgive someone for a fault or crime"
      },
      {
        word: "pasture",
        phrase: "cows grazing in the pasture",
        choices: ["meadow", "street", "beach", "cliff"],
        answerIndex: 0,
        meaning: "a grassy field where animals graze"
      },
      {
        word: "pedestrian",
        phrase: "a pedestrian crossing the street",
        choices: ["walker", "driver", "cyclist", "passenger"],
        answerIndex: 0,
        meaning: "a person traveling on foot"
      },
      {
        word: "petrify",
        phrase: "the news would petrify her",
        choices: ["terrify", "delight", "bore", "calm"],
        answerIndex: 0,
        meaning: "to make someone extremely afraid"
      },
      {
        word: "portable",
        phrase: "a portable radio",
        choices: ["movable", "heavy", "fixed", "expensive"],
        answerIndex: 0,
        meaning: "able to be easily carried or moved"
      },
      {
        word: "prefix",
        phrase: "un- is a common prefix",
        choices: ["word beginning", "word ending", "whole word", "sentence"],
        answerIndex: 0,
        meaning: "a word part added to the beginning of a word"
      },
      {
        word: "preserve",
        phrase: "to preserve the forest",
        choices: ["protect", "destroy", "sell", "ignore"],
        answerIndex: 0,
        meaning: "to keep something safe or in its original state"
      },
      {
        word: "protagonist",
        phrase: "the story's protagonist",
        choices: ["hero", "villain", "narrator", "extra"],
        answerIndex: 0,
        meaning: "the main character in a story"
      },
      {
        word: "provide",
        phrase: "to provide food",
        choices: ["supply", "take", "hide", "waste"],
        answerIndex: 0,
        meaning: "to give or supply something needed"
      },
      {
        word: "purchase",
        phrase: "to purchase a ticket",
        choices: ["buy", "sell", "lose", "find"],
        answerIndex: 0,
        meaning: "to obtain something by paying for it"
      },
      {
        word: "realistic",
        phrase: "a realistic painting",
        choices: ["lifelike", "cartoonish", "blurry", "abstract"],
        answerIndex: 0,
        meaning: "representing things as they really look or are"
      },
      {
        word: "reassure",
        phrase: "to reassure a worried friend",
        choices: ["comfort", "frighten", "confuse", "ignore"],
        answerIndex: 0,
        meaning: "to say or do something to remove someone's doubts or fears"
      },
      {
        word: "reign",
        phrase: "the king's reign",
        choices: ["rule", "punishment", "battle", "journey"],
        answerIndex: 0,
        meaning: "the period during which a monarch rules"
      },
      {
        word: "reliable",
        phrase: "a reliable friend",
        choices: ["dependable", "unpredictable", "careless", "dishonest"],
        answerIndex: 0,
        meaning: "consistently good and able to be trusted"
      },
      {
        word: "require",
        phrase: "to require patience and skill",
        choices: ["need", "avoid", "waste", "forget"],
        answerIndex: 0,
        meaning: "to need something for a particular purpose"
      },
      {
        word: "resemble",
        phrase: "many children resemble their parents",
        choices: ["look like", "ignore", "avoid", "forget"],
        answerIndex: 0,
        meaning: "to look or be like someone or something"
      },
      {
        word: "retain",
        phrase: "to retain information",
        choices: ["keep", "lose", "forget", "delete"],
        answerIndex: 0,
        meaning: "to continue to have or remember something"
      },
      {
        word: "retire",
        phrase: "to retire from work",
        choices: ["resign", "start", "apply", "advance"],
        answerIndex: 0,
        meaning: "to leave one's job, typically because of age"
      },
      {
        word: "revert",
        phrase: "to revert to old habits",
        choices: ["return", "advance", "improve", "forget"],
        answerIndex: 0,
        meaning: "to go back to a former state or habit"
      },
      {
        word: "route",
        phrase: "the fastest route",
        choices: ["path", "delay", "mistake", "argument"],
        answerIndex: 0,
        meaning: "a way or course taken to get somewhere"
      }
    ]
  },
  {
    id: "set7",
    name: "Word Set 7",
    words: [
      {
        word: "seldom",
        phrase: "he seldom visits",
        choices: ["rarely", "frequently", "always", "constantly"],
        answerIndex: 0,
        meaning: "not often; rarely"
      },
      {
        word: "senseless",
        phrase: "a senseless act",
        choices: ["pointless", "reasonable", "helpful", "wise"],
        answerIndex: 0,
        meaning: "having no meaning or reasonable purpose"
      },
      {
        word: "sever",
        phrase: "to sever the rope",
        choices: ["cut", "join", "repair", "tie"],
        answerIndex: 0,
        meaning: "to cut off or separate something"
      },
      {
        word: "slither",
        phrase: "the snake began to slither",
        choices: ["slide", "jump", "run", "fly"],
        answerIndex: 0,
        meaning: "to move by sliding along the ground like a snake"
      },
      {
        word: "soar",
        phrase: "the eagle began to soar",
        choices: ["ascend", "sink", "crawl", "freeze"],
        answerIndex: 0,
        meaning: "to fly or rise high into the air"
      },
      {
        word: "solo",
        phrase: "a solo performance",
        choices: ["alone", "together", "loudly", "quietly"],
        answerIndex: 0,
        meaning: "done alone, without others"
      },
      {
        word: "spurt",
        phrase: "a sudden spurt of energy",
        choices: ["burst", "lack", "delay", "decline"],
        answerIndex: 0,
        meaning: "a sudden brief burst of activity or growth"
      },
      {
        word: "strategy",
        phrase: "a winning strategy",
        choices: ["plan", "mistake", "argument", "guess"],
        answerIndex: 0,
        meaning: "a careful plan for achieving a goal"
      },
      {
        word: "suffix",
        phrase: "-ful is a common suffix",
        choices: ["word ending", "word beginning", "whole word", "sentence"],
        answerIndex: 0,
        meaning: "a word part added to the end of a word"
      },
      {
        word: "suffocate",
        phrase: "to suffocate without air",
        choices: ["choke", "breathe", "sleep", "run"],
        answerIndex: 0,
        meaning: "to have trouble breathing, or to die from lack of air"
      },
      {
        word: "summit",
        phrase: "the mountain's summit",
        choices: ["peak", "base", "side", "valley"],
        answerIndex: 0,
        meaning: "the highest point of a mountain"
      },
      {
        word: "synonym",
        phrase: "happy and glad form a synonym pair",
        choices: ["same-meaning word", "opposite word", "rhyming word", "made-up word"],
        answerIndex: 0,
        meaning: "a word that means the same as another word"
      },
      {
        word: "talon",
        phrase: "the eagle's talon",
        choices: ["claw", "feather", "beak", "wing"],
        answerIndex: 0,
        meaning: "a sharp claw, especially of a bird of prey"
      },
      {
        word: "thrifty",
        phrase: "a thrifty shopper",
        choices: ["frugal", "wasteful", "careless", "generous"],
        answerIndex: 0,
        meaning: "careful about spending money; not wasteful"
      },
      {
        word: "translate",
        phrase: "to translate the book",
        choices: ["interpret", "rewrite", "summarize", "illustrate"],
        answerIndex: 0,
        meaning: "to change words from one language into another"
      },
      {
        word: "tropical",
        phrase: "a tropical island",
        choices: ["humid", "icy", "arid", "rocky"],
        answerIndex: 0,
        meaning: "relating to the hot, humid regions near the equator"
      },
      {
        word: "visible",
        phrase: "barely visible in the fog",
        choices: ["noticeable", "hidden", "loud", "colorful"],
        answerIndex: 0,
        meaning: "able to be seen"
      },
      {
        word: "visual",
        phrase: "a visual aid",
        choices: ["optical", "auditory", "spoken", "written"],
        answerIndex: 0,
        meaning: "relating to seeing or sight"
      },
      {
        word: "vivid",
        phrase: "a vivid memory",
        choices: ["bright", "dull", "faded", "boring"],
        answerIndex: 0,
        meaning: "producing powerful, clear images in the mind; brightly colored"
      },
      {
        word: "wilderness",
        phrase: "lost in the wilderness",
        choices: ["wilds", "city", "library", "mall"],
        answerIndex: 0,
        meaning: "a wild, natural area with no people"
      }
    ]
  },
  {
    id: "set8",
    name: "Word Set 8",
    words: [
      {
        word: "adequate",
        phrase: "her grades were adequate",
        choices: ["sufficient", "excellent", "poor", "impossible"],
        answerIndex: 0,
        meaning: "sufficient; acceptable"
      },
      {
        word: "adorn",
        phrase: "he adorned his room with posters",
        choices: ["decorate", "empty", "clean", "damage"],
        answerIndex: 0,
        meaning: "to decorate"
      },
      {
        word: "adversity",
        phrase: "her childhood was full of adversity",
        choices: ["hardship", "luxury", "fun", "boredom"],
        answerIndex: 0,
        meaning: "misfortune; challenging circumstances"
      },
      {
        word: "aesthetic",
        phrase: "the shoes have little aesthetic value",
        choices: ["artistic", "financial", "medical", "legal"],
        answerIndex: 0,
        meaning: "relating to art or beauty"
      },
      {
        word: "aggravate",
        phrase: "passing notes aggravated their teacher",
        choices: ["annoy", "please", "calm", "help"],
        answerIndex: 0,
        meaning: "annoy; make worse"
      },
      {
        word: "alleviate",
        phrase: "ways to alleviate stress",
        choices: ["ease", "worsen", "cause", "ignore"],
        answerIndex: 0,
        meaning: "make less severe"
      },
      {
        word: "amateur",
        phrase: "an amateur photographer",
        choices: ["unskilled", "professional", "famous", "expert"],
        answerIndex: 0,
        meaning: "nonprofessional; unskilled"
      },
      {
        word: "ambiance",
        phrase: "a luxurious ambiance",
        choices: ["atmosphere", "recipe", "melody", "invoice"],
        answerIndex: 0,
        meaning: "the atmosphere or mood of a place"
      },
      {
        word: "ambiguous",
        phrase: "the painting's ambiguous smile",
        choices: ["unclear", "obvious", "cheerful", "angry"],
        answerIndex: 0,
        meaning: "unclear; uncertain"
      },
      {
        word: "animosity",
        phrase: "animosity between the director and the actor",
        choices: ["hostility", "friendship", "curiosity", "respect"],
        answerIndex: 0,
        meaning: "intense hostility"
      },
      {
        word: "anomaly",
        phrase: "an anomaly in the blood test results",
        choices: ["abnormality", "normal result", "improvement", "routine check"],
        answerIndex: 0,
        meaning: "something abnormal"
      },
      {
        word: "arid",
        phrase: "the desert is so arid",
        choices: ["dry", "humid", "fertile", "cold"],
        answerIndex: 0,
        meaning: "dry; barren"
      },
      {
        word: "articulate",
        phrase: "how articulate the student was",
        choices: ["well-spoken", "confused", "silent", "rude"],
        answerIndex: 0,
        meaning: "able to speak fluently and logically"
      },
      {
        word: "authentic",
        phrase: "an authentic designer bag",
        choices: ["genuine", "fake", "cheap", "borrowed"],
        answerIndex: 0,
        meaning: "genuine"
      },
      {
        word: "bemuse",
        phrase: "bemused by the confusing evidence",
        choices: ["confuse", "clarify", "delight", "bore"],
        answerIndex: 0,
        meaning: "confuse, bewilder"
      },
      {
        word: "bewilder",
        phrase: "bewildered by Shakespeare's language",
        choices: ["confuse", "amuse", "reassure", "convince"],
        answerIndex: 0,
        meaning: "confuse severely"
      },
      {
        word: "blend",
        phrase: "blend the ingredients completely",
        choices: ["mix", "separate", "burn", "measure"],
        answerIndex: 0,
        meaning: "mix together"
      },
      {
        word: "bliss",
        phrase: "a cozy chair and a good book is bliss",
        choices: ["joy", "misery", "boredom", "anger"],
        answerIndex: 0,
        meaning: "total happiness"
      },
      {
        word: "boisterous",
        phrase: "his boisterous laughter",
        choices: ["loud", "quiet", "gentle", "shy"],
        answerIndex: 0,
        meaning: "energetic; noisy"
      },
      {
        word: "brandish",
        phrase: "she brandished her sword",
        choices: ["wave threateningly", "hide", "drop", "polish"],
        answerIndex: 0,
        meaning: "wave something in anger or excitement"
      }
    ]
  },
  {
    id: "set9",
    name: "Word Set 9",
    words: [
      {
        word: "capitulate",
        phrase: "her parents would not capitulate to her demands",
        choices: ["give in", "fight back", "forget", "celebrate"],
        answerIndex: 0,
        meaning: "surrender; to give in"
      },
      {
        word: "chasm",
        phrase: "a chasm hundreds of feet deep",
        choices: ["gap", "hill", "bridge", "puddle"],
        answerIndex: 0,
        meaning: "a deep divide"
      },
      {
        word: "chronological",
        phrase: "read the books in chronological order",
        choices: ["time order", "alphabetical order", "random order", "reverse order"],
        answerIndex: 0,
        meaning: "in the order in which events occurred"
      },
      {
        word: "circumvent",
        phrase: "circumvent the dangerous terrain",
        choices: ["avoid", "confront", "map", "worsen"],
        answerIndex: 0,
        meaning: "find a way around"
      },
      {
        word: "collaborate",
        phrase: "fun to collaborate with others",
        choices: ["cooperate", "compete", "argue", "isolate"],
        answerIndex: 0,
        meaning: "work together"
      },
      {
        word: "colleague",
        phrase: "her friendly colleagues",
        choices: ["coworker", "boss", "customer", "stranger"],
        answerIndex: 0,
        meaning: "someone a person works with"
      },
      {
        word: "comprehend",
        phrase: "couldn't comprehend why",
        choices: ["understand", "ignore", "forget", "doubt"],
        answerIndex: 0,
        meaning: "understand"
      },
      {
        word: "conjecture",
        phrase: "based on conjecture, not evidence",
        choices: ["guess", "proof", "law", "fact"],
        answerIndex: 0,
        meaning: "idea or opinion without evidence"
      },
      {
        word: "conservative",
        phrase: "his conservative style of dressing",
        choices: ["traditional", "bold", "flashy", "careless"],
        answerIndex: 0,
        meaning: "traditional; cautious"
      },
      {
        word: "contend",
        phrase: "Leticia contended she was the best choice",
        choices: ["argue", "agree", "deny", "apologize"],
        answerIndex: 0,
        meaning: "argue; assert"
      },
      {
        word: "courtesy",
        phrase: "had the courtesy to tell him",
        choices: ["politeness", "rudeness", "silence", "confusion"],
        answerIndex: 0,
        meaning: "respect, politeness"
      },
      {
        word: "creed",
        phrase: "practice their creed freely",
        choices: ["belief system", "punishment", "law", "recipe"],
        answerIndex: 0,
        meaning: "system of beliefs"
      },
      {
        word: "custom",
        phrase: "a common custom in Europe",
        choices: ["tradition", "crime", "accident", "mistake"],
        answerIndex: 0,
        meaning: "traditional behavior"
      },
      {
        word: "dearth",
        phrase: "the dearth of information",
        choices: ["shortage", "abundance", "excess", "surplus"],
        answerIndex: 0,
        meaning: "lack"
      },
      {
        word: "debacle",
        phrase: "a major debacle for the restaurant",
        choices: ["disaster", "success", "profit", "celebration"],
        answerIndex: 0,
        meaning: "disaster"
      },
      {
        word: "deduct",
        phrase: "deducted $500 from her paycheck",
        choices: ["subtract", "add", "double", "multiply"],
        answerIndex: 0,
        meaning: "take away; subtract"
      },
      {
        word: "defective",
        phrase: "returned the defective computer",
        choices: ["broken", "working", "new", "expensive"],
        answerIndex: 0,
        meaning: "not functioning"
      },
      {
        word: "delight",
        phrase: "it delighted Norah to hear the news",
        choices: ["please", "upset", "bore", "worry"],
        answerIndex: 0,
        meaning: "please; pleasure"
      },
      {
        word: "demolish",
        phrase: "demolished the old mansion",
        choices: ["tear down", "build", "repair", "paint"],
        answerIndex: 0,
        meaning: "destroy"
      },
      {
        word: "deteriorate",
        phrase: "the abandoned warehouse deteriorated quickly",
        choices: ["worsen", "improve", "rebuild", "shine"],
        answerIndex: 0,
        meaning: "fall apart"
      }
    ]
  },
  {
    id: "set10",
    name: "Word Set 10",
    words: [
      {
        word: "disperse",
        phrase: "the antelopes dispersed",
        choices: ["scatter", "gather", "sleep", "attack"],
        answerIndex: 0,
        meaning: "scatter"
      },
      {
        word: "durable",
        phrase: "the durable sedan",
        choices: ["long-lasting", "fragile", "expensive", "colorful"],
        answerIndex: 0,
        meaning: "long-lasting"
      },
      {
        word: "efface",
        phrase: "the rain effaced the footsteps",
        choices: ["erase", "reveal", "highlight", "photograph"],
        answerIndex: 0,
        meaning: "erase"
      },
      {
        word: "elation",
        phrase: "he felt an elation he had never experienced",
        choices: ["joy", "sorrow", "fear", "anger"],
        answerIndex: 0,
        meaning: "intense joy"
      },
      {
        word: "embrace",
        phrase: "Jillian embraced the idea of a break",
        choices: ["welcome", "reject", "ignore", "postpone"],
        answerIndex: 0,
        meaning: "accept enthusiastically"
      },
      {
        word: "enigma",
        phrase: "remained an enigma to her",
        choices: ["mystery", "solution", "fact", "habit"],
        answerIndex: 0,
        meaning: "puzzle"
      },
      {
        word: "erratic",
        phrase: "New York's erratic weather",
        choices: ["unpredictable", "steady", "boring", "mild"],
        answerIndex: 0,
        meaning: "unpredictable"
      },
      {
        word: "exalt",
        phrase: "Neil Armstrong was exalted as a hero",
        choices: ["praise", "criticize", "ignore", "forget"],
        answerIndex: 0,
        meaning: "praise"
      },
      {
        word: "exonerate",
        phrase: "the defendant was exonerated",
        choices: ["clear of blame", "convicted", "arrested", "questioned"],
        answerIndex: 0,
        meaning: "remove guilt or blame"
      },
      {
        word: "expel",
        phrase: "expelled from the school",
        choices: ["kick out", "welcome", "promote", "hire"],
        answerIndex: 0,
        meaning: "remove by force"
      },
      {
        word: "extravagant",
        phrase: "the diamond chandelier was too extravagant",
        choices: ["lavish", "plain", "cheap", "simple"],
        answerIndex: 0,
        meaning: "unnecessarily fancy"
      },
      {
        word: "ferocity",
        phrase: "the mother bear's ferocity",
        choices: ["fierceness", "gentleness", "shyness", "calmness"],
        answerIndex: 0,
        meaning: "fierceness"
      },
      {
        word: "fiasco",
        phrase: "a financial fiasco",
        choices: ["disaster", "triumph", "bargain", "plan"],
        answerIndex: 0,
        meaning: "failure, disaster"
      },
      {
        word: "flamboyant",
        phrase: "flamboyant clothing",
        choices: ["showy", "plain", "dull", "modest"],
        answerIndex: 0,
        meaning: "attention-grabbing"
      },
      {
        word: "gaffe",
        phrase: "the actor's gaffe",
        choices: ["blunder", "achievement", "compliment", "award"],
        answerIndex: 0,
        meaning: "an embarrassing mistake"
      },
      {
        word: "glitch",
        phrase: "a computer glitch",
        choices: ["malfunction", "upgrade", "success", "feature"],
        answerIndex: 0,
        meaning: "minor malfunction"
      },
      {
        word: "hoax",
        phrase: "hoaxes on April Fools' Day",
        choices: ["trick", "truth", "gift", "reward"],
        answerIndex: 0,
        meaning: "trick, deception"
      },
      {
        word: "idiosyncrasy",
        phrase: "a few idiosyncrasies",
        choices: ["quirk", "strength", "rule", "talent"],
        answerIndex: 0,
        meaning: "eccentricity, quirk"
      },
      {
        word: "impeccable",
        phrase: "his impeccable manners",
        choices: ["flawless", "sloppy", "rude", "average"],
        answerIndex: 0,
        meaning: "faultless, perfect"
      },
      {
        word: "impertinent",
        phrase: "impertinent comments",
        choices: ["rude", "polite", "shy", "kind"],
        answerIndex: 0,
        meaning: "irrelevant; insolent, disrespectful"
      }
    ]
  },
  {
    id: "set11",
    name: "Word Set 11",
    words: [
      {
        word: "innovation",
        phrase: "her most recent innovation",
        choices: ["new idea", "old habit", "mistake", "rule"],
        answerIndex: 0,
        meaning: "a novel idea or thing"
      },
      {
        word: "instigate",
        phrase: "instigated heated arguments",
        choices: ["provoke", "prevent", "solve", "ignore"],
        answerIndex: 0,
        meaning: "initiate; provoke"
      },
      {
        word: "investigate",
        phrase: "investigated the claims",
        choices: ["examine", "ignore", "believe blindly", "forget"],
        answerIndex: 0,
        meaning: "thoroughly examine"
      },
      {
        word: "ironic",
        phrase: "it was ironic that the medicine made him worse",
        choices: ["unexpected", "predictable", "boring", "obvious"],
        answerIndex: 0,
        meaning: "different from what is expected; sarcastic"
      },
      {
        word: "laborious",
        phrase: "years of laborious training",
        choices: ["difficult", "easy", "quick", "lazy"],
        answerIndex: 0,
        meaning: "labor-intensive, arduous, effortful"
      },
      {
        word: "laud",
        phrase: "should laud her achievements",
        choices: ["praise", "criticize", "ignore", "mock"],
        answerIndex: 0,
        meaning: "praise"
      },
      {
        word: "livid",
        phrase: "the news left her livid",
        choices: ["furious", "calm", "happy", "sleepy"],
        answerIndex: 0,
        meaning: "furious"
      },
      {
        word: "lore",
        phrase: "part of our town's lore",
        choices: ["legend", "law", "recipe", "invoice"],
        answerIndex: 0,
        meaning: "mythology, stories, body of traditions"
      },
      {
        word: "loquacious",
        phrase: "so loquacious and charming",
        choices: ["talkative", "silent", "shy", "serious"],
        answerIndex: 0,
        meaning: "talkative"
      },
      {
        word: "malice",
        phrase: "his review was motivated by malice",
        choices: ["spite", "kindness", "curiosity", "joy"],
        answerIndex: 0,
        meaning: "ill will, spite"
      },
      {
        word: "medley",
        phrase: "a medley of snacks",
        choices: ["mixture", "single item", "recipe", "shortage"],
        answerIndex: 0,
        meaning: "assortment, mixture, miscellany"
      },
      {
        word: "merit",
        phrase: "judged on the merits of their arguments",
        choices: ["value", "appearance", "cost", "length"],
        answerIndex: 0,
        meaning: "worthiness, value"
      },
      {
        word: "mock",
        phrase: "mock her brother's short stature",
        choices: ["ridicule", "praise", "ignore", "protect"],
        answerIndex: 0,
        meaning: "make fun of"
      },
      {
        word: "modify",
        phrase: "modified her curriculum",
        choices: ["change", "keep the same", "delete entirely", "copy"],
        answerIndex: 0,
        meaning: "alter; change"
      },
      {
        word: "narrative",
        phrase: "Aaron's inconsistent narrative",
        choices: ["story", "silence", "question", "law"],
        answerIndex: 0,
        meaning: "story"
      },
      {
        word: "nemesis",
        phrase: "defeat his nemesis",
        choices: ["rival", "friend", "teacher", "sibling"],
        answerIndex: 0,
        meaning: "enemy"
      },
      {
        word: "nimble",
        phrase: "the soccer player's nimble moves",
        choices: ["agile", "clumsy", "slow", "tired"],
        answerIndex: 0,
        meaning: "quick; agile"
      },
      {
        word: "obstinate",
        phrase: "the obstinate boy would not follow instructions",
        choices: ["stubborn", "obedient", "flexible", "curious"],
        answerIndex: 0,
        meaning: "stubborn"
      },
      {
        word: "opponent",
        phrase: "her opponent Jeffrey",
        choices: ["rival", "teammate", "coach", "fan"],
        answerIndex: 0,
        meaning: "person or group competing against another"
      },
      {
        word: "overt",
        phrase: "his overt flirtation",
        choices: ["obvious", "hidden", "secret", "subtle"],
        answerIndex: 0,
        meaning: "obvious"
      }
    ]
  },
  {
    id: "set12",
    name: "Word Set 12",
    words: [
      {
        word: "pact",
        phrase: "made a pact not to play catch in the house",
        choices: ["agreement", "argument", "punishment", "mistake"],
        answerIndex: 0,
        meaning: "agreement"
      },
      {
        word: "painstaking",
        phrase: "painstaking attention to detail",
        choices: ["careful", "careless", "quick", "lazy"],
        answerIndex: 0,
        meaning: "difficult; with great effort"
      },
      {
        word: "paradox",
        phrase: "it seemed like a paradox",
        choices: ["contradiction", "fact", "routine", "solution"],
        answerIndex: 0,
        meaning: "something that does not follow"
      },
      {
        word: "peril",
        phrase: "knew she was in peril",
        choices: ["danger", "safety", "comfort", "boredom"],
        answerIndex: 0,
        meaning: "danger"
      },
      {
        word: "pester",
        phrase: "would constantly pester his sister",
        choices: ["annoy", "help", "comfort", "ignore"],
        answerIndex: 0,
        meaning: "annoy"
      },
      {
        word: "practical",
        phrase: "the guide was not very practical",
        choices: ["useful", "useless", "expensive", "beautiful"],
        answerIndex: 0,
        meaning: "useful, logical"
      },
      {
        word: "precocious",
        phrase: "the precocious child",
        choices: ["advanced", "delayed", "average", "clumsy"],
        answerIndex: 0,
        meaning: "advanced at a young age"
      },
      {
        word: "prominent",
        phrase: "the prominent guest at her party",
        choices: ["notable", "unknown", "boring", "shy"],
        answerIndex: 0,
        meaning: "well-known, important"
      },
      {
        word: "prototype",
        phrase: "the prototype of the computer",
        choices: ["first model", "final product", "broken copy", "advertisement"],
        answerIndex: 0,
        meaning: "original model"
      },
      {
        word: "query",
        phrase: "various queries for the teacher",
        choices: ["question", "answer", "complaint", "apology"],
        answerIndex: 0,
        meaning: "question, request"
      },
      {
        word: "rapid",
        phrase: "the most rapid land animal",
        choices: ["fast", "slow", "quiet", "heavy"],
        answerIndex: 0,
        meaning: "fast"
      },
      {
        word: "raze",
        phrase: "the historic mansion was razed",
        choices: ["demolish", "build", "restore", "paint"],
        answerIndex: 0,
        meaning: "destroy"
      },
      {
        word: "redundant",
        phrase: "her attempts to clarify were redundant",
        choices: ["unnecessary", "essential", "clear", "brief"],
        answerIndex: 0,
        meaning: "extra, unnecessary, duplicated"
      },
      {
        word: "remedy",
        phrase: "no known remedy to the common cold",
        choices: ["cure", "cause", "symptom", "disease"],
        answerIndex: 0,
        meaning: "cure"
      },
      {
        word: "reprimand",
        phrase: "severely reprimanded by his parents",
        choices: ["scold", "reward", "praise", "excuse"],
        answerIndex: 0,
        meaning: "criticize, condemn"
      },
      {
        word: "retort",
        phrase: "Jane retorted with a stern critique",
        choices: ["respond sharply", "stay silent", "agree quietly", "laugh"],
        answerIndex: 0,
        meaning: "respond in a forceful manner"
      },
      {
        word: "rural",
        phrase: "a rural area surrounded by fields",
        choices: ["countryside", "urban", "industrial", "coastal"],
        answerIndex: 0,
        meaning: "characteristic of the countryside"
      },
      {
        word: "sage",
        phrase: "the sage's poignant answer",
        choices: ["wise person", "fool", "child", "stranger"],
        answerIndex: 0,
        meaning: "wise individual"
      },
      {
        word: "sarcastic",
        phrase: "he was being sarcastic about the burnt cookies",
        choices: ["mocking", "sincere", "gentle", "shy"],
        answerIndex: 0,
        meaning: "ironically mocking"
      },
      {
        word: "scoff",
        phrase: "Jessica scoffed at the idea",
        choices: ["mock", "agree", "cry", "smile warmly"],
        answerIndex: 0,
        meaning: "mock or ridicule"
      }
    ]
  },
  {
    id: "set13",
    name: "Word Set 13",
    words: [
      {
        word: "secure",
        phrase: "made him feel secure",
        choices: ["safe", "unsafe", "nervous", "lost"],
        answerIndex: 0,
        meaning: "safe from harm; firmly attached"
      },
      {
        word: "serene",
        phrase: "Angie felt serene by the stream",
        choices: ["calm", "anxious", "angry", "confused"],
        answerIndex: 0,
        meaning: "completely calm; clear"
      },
      {
        word: "skeptic",
        phrase: "a well-known skeptic",
        choices: ["doubter", "believer", "expert", "fan"],
        answerIndex: 0,
        meaning: "someone who doubts"
      },
      {
        word: "sloth",
        phrase: "the cold weather inclined her towards sloth",
        choices: ["laziness", "energy", "excitement", "hunger"],
        answerIndex: 0,
        meaning: "inactivity, laziness"
      },
      {
        word: "sly",
        phrase: "a sly bite of cake",
        choices: ["sneaky", "honest", "clumsy", "loud"],
        answerIndex: 0,
        meaning: "sneaky or mischievous"
      },
      {
        word: "sporadic",
        phrase: "the desert rainfall was sporadic",
        choices: ["irregular", "constant", "daily", "predictable"],
        answerIndex: 0,
        meaning: "occurring at irregular intervals"
      },
      {
        word: "stifle",
        phrase: "made her best effort to stifle her cough",
        choices: ["suppress", "release", "encourage", "amplify"],
        answerIndex: 0,
        meaning: "suppress or stop"
      },
      {
        word: "subtle",
        phrase: "only subtle differences between the twins",
        choices: ["faint", "obvious", "loud", "huge"],
        answerIndex: 0,
        meaning: "difficult to notice or describe"
      },
      {
        word: "sympathize",
        phrase: "not difficult to sympathize with the flood victims",
        choices: ["feel compassion for", "envy", "ignore", "blame"],
        answerIndex: 0,
        meaning: "feel sorry for"
      },
      {
        word: "tact",
        phrase: "presented his argument with such tact",
        choices: ["diplomacy", "rudeness", "anger", "confusion"],
        answerIndex: 0,
        meaning: "the ability to act or speak without offending others"
      },
      {
        word: "tentative",
        phrase: "made tentative plans with Jessica",
        choices: ["uncertain", "definite", "final", "confident"],
        answerIndex: 0,
        meaning: "not certain"
      },
      {
        word: "timid",
        phrase: "very timid in approaching his teacher",
        choices: ["shy", "bold", "confident", "loud"],
        answerIndex: 0,
        meaning: "shy"
      },
      {
        word: "tolerance",
        phrase: "a high tolerance for variations in temperature",
        choices: ["endurance", "sensitivity", "weakness", "fear"],
        answerIndex: 0,
        meaning: "open-mindedness; endurance"
      },
      {
        word: "unconventional",
        phrase: "unconventional hair colors",
        choices: ["unusual", "typical", "boring", "traditional"],
        answerIndex: 0,
        meaning: "out of the ordinary"
      },
      {
        word: "uniform",
        phrase: "a uniform width",
        choices: ["consistent", "varied", "random", "uneven"],
        answerIndex: 0,
        meaning: "the same"
      },
      {
        word: "universal",
        phrase: "a universal rule at the school",
        choices: ["all-encompassing", "optional", "local", "rare"],
        answerIndex: 0,
        meaning: "the same for all cases"
      },
      {
        word: "vendetta",
        phrase: "a vendetta against the Jones family",
        choices: ["grudge", "friendship", "alliance", "gift"],
        answerIndex: 0,
        meaning: "grudge"
      },
      {
        word: "vital",
        phrase: "water is such a vital resource",
        choices: ["essential", "unimportant", "rare", "expensive"],
        answerIndex: 0,
        meaning: "extremely important; energetic"
      },
      {
        word: "vulnerable",
        phrase: "one of the most vulnerable parts of the body",
        choices: ["exposed", "protected", "strong", "hidden"],
        answerIndex: 0,
        meaning: "open to attack or harm"
      },
      {
        word: "wicked",
        phrase: "the wicked witch cast spells",
        choices: ["evil", "kind", "gentle", "fair"],
        answerIndex: 0,
        meaning: "evil or wrong"
      }
    ]
  }
];
