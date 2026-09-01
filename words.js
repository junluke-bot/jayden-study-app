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
  },
  {
    id: "wonders-u1",
    name: "Wonders Unit 1",
    words: [
      {
        word: "debris",
        phrase: "debris scattered across the yard",
        choices: ["wreckage", "treasure", "blueprint", "harvest"],
        answerIndex: 0,
        meaning: "scattered pieces left after something breaks or is destroyed"
      },
      {
        word: "emphasis",
        phrase: "put emphasis on the last word",
        choices: ["importance", "boredom", "silence", "mistake"],
        answerIndex: 0,
        meaning: "special importance or attention given to something"
      },
      {
        word: "encounter",
        phrase: "to encounter a bear on the trail",
        choices: ["meet unexpectedly", "avoid completely", "plan carefully", "forget entirely"],
        answerIndex: 0,
        meaning: "to meet or come across unexpectedly"
      },
      {
        word: "generations",
        phrase: "three generations at the reunion",
        choices: ["age groups", "single day", "tiny amount", "empty rooms"],
        answerIndex: 0,
        meaning: "groups of people born around the same period of time"
      },
      {
        word: "indicated",
        phrase: "she indicated the correct answer",
        choices: ["showed", "hid", "denied", "forgot"],
        answerIndex: 0,
        meaning: "showed, pointed out, or gave a sign of something"
      },
      {
        word: "naturalist",
        phrase: "the naturalist studied the birds",
        choices: ["nature expert", "city planner", "math teacher", "movie director"],
        answerIndex: 0,
        meaning: "a person who studies plants, animals, and nature"
      },
      {
        word: "sheer",
        phrase: "a sheer cliff",
        choices: ["steep", "gentle", "muddy", "colorful"],
        answerIndex: 0,
        meaning: "very steep, sudden, or complete"
      },
      {
        word: "spectacular",
        phrase: "a spectacular fireworks show",
        choices: ["amazing", "dull", "quiet", "forgettable"],
        answerIndex: 0,
        meaning: "very impressive or exciting to see"
      },
      {
        word: "afford",
        phrase: "to afford a new bike",
        choices: ["pay for", "give away", "forget about", "break"],
        answerIndex: 0,
        meaning: "to have enough money or resources for something"
      },
      {
        word: "loan",
        phrase: "took out a loan for the car",
        choices: ["borrowed money", "free gift", "lost item", "extra chore"],
        answerIndex: 0,
        meaning: "money or something else borrowed and expected to be returned"
      },
      {
        word: "profit",
        phrase: "the shop's profit grew",
        choices: ["earnings", "expenses", "debt", "waste"],
        answerIndex: 0,
        meaning: "money left after the costs of doing business are paid"
      },
      {
        word: "prosper",
        phrase: "the business began to prosper",
        choices: ["succeed", "fail", "shrink", "vanish"],
        answerIndex: 0,
        meaning: "to do well or become successful"
      },
      {
        word: "risk",
        phrase: "the risk of getting hurt",
        choices: ["danger", "safety", "comfort", "reward"],
        answerIndex: 0,
        meaning: "the chance that something harmful or unwanted may happen"
      },
      {
        word: "savings",
        phrase: "spent years building her savings",
        choices: ["saved money", "quick spending", "borrowed cash", "lost coins"],
        answerIndex: 0,
        meaning: "money that is kept instead of spent"
      },
      {
        word: "scarce",
        phrase: "clean water was scarce",
        choices: ["limited", "plentiful", "cheap", "useless"],
        answerIndex: 0,
        meaning: "hard to find because there is not much available"
      },
      {
        word: "wages",
        phrase: "earned fair wages",
        choices: ["pay", "debt", "tax", "gift"],
        answerIndex: 0,
        meaning: "money paid to a worker for work performed"
      },
      {
        word: "access",
        phrase: "access to the library",
        choices: ["entry", "exit", "silence", "delay"],
        answerIndex: 0,
        meaning: "the ability or right to enter, use, or obtain something"
      },
      {
        word: "advance",
        phrase: "to advance to the next round",
        choices: ["move forward", "fall behind", "stop completely", "repeat"],
        answerIndex: 0,
        meaning: "to move forward or make progress"
      },
      {
        word: "analysis",
        phrase: "a careful analysis of the data",
        choices: ["examination", "guess", "celebration", "argument"],
        answerIndex: 0,
        meaning: "a careful study of something to understand it better"
      },
      {
        word: "cite",
        phrase: "In his report, Jayden should cite evidence from the article.",
        choices: ["quote as a source", "ignore completely", "invent randomly", "erase entirely"],
        answerIndex: 0,
        meaning: "to mention evidence or a source to support an idea"
      },
      {
        word: "counterpoint",
        phrase: "offered a counterpoint to the argument",
        choices: ["opposing point", "matching point", "final decision", "personal secret"],
        answerIndex: 0,
        meaning: "an opposing or contrasting point in an argument"
      },
      {
        word: "data",
        phrase: "The class recorded data from the science experiment.",
        choices: ["information", "opinions", "rumors", "artwork"],
        answerIndex: 0,
        meaning: "facts or information collected for study"
      },
      {
        word: "drawbacks",
        phrase: "weighed the drawbacks of the plan",
        choices: ["disadvantages", "benefits", "prizes", "rules"],
        answerIndex: 0,
        meaning: "disadvantages or negative parts of something"
      },
      {
        word: "reasoning",
        phrase: "explained her reasoning",
        choices: ["logic", "confusion", "silence", "apology"],
        answerIndex: 0,
        meaning: "the thinking used to reach a conclusion"
      }
    ]
  },
  {
    id: "wonders-u2",
    name: "Wonders Unit 2",
    words: [
      {
        word: "committees",
        phrase: "formed several committees",
        choices: ["groups assigned to tasks", "single leader", "empty rooms", "silent protests"],
        answerIndex: 0,
        meaning: "groups chosen to work on particular tasks"
      },
      {
        word: "convention",
        phrase: "attended a teachers' convention",
        choices: ["formal meeting", "quiet nap", "private letter", "secret code"],
        answerIndex: 0,
        meaning: "a formal meeting of people with a shared purpose"
      },
      {
        word: "debate",
        phrase: "a class debate",
        choices: ["discussion of opposing views", "agreement", "song", "silence"],
        answerIndex: 0,
        meaning: "a discussion in which different sides present arguments"
      },
      {
        word: "proposal",
        phrase: "submitted a proposal",
        choices: ["suggested plan", "final decision", "complaint", "apology"],
        answerIndex: 0,
        meaning: "a plan or suggestion offered for consideration"
      },
      {
        word: "representatives",
        phrase: "elected representatives",
        choices: ["people chosen to speak for others", "random strangers", "silent observers", "rule breakers"],
        answerIndex: 0,
        meaning: "people chosen to speak or act for others"
      },
      {
        word: "resolve",
        phrase: "to resolve the conflict",
        choices: ["settle", "worsen", "ignore", "hide"],
        answerIndex: 0,
        meaning: "to solve a problem or settle a disagreement"
      },
      {
        word: "situation",
        phrase: "a tricky situation",
        choices: ["circumstance", "celebration", "melody", "song"],
        answerIndex: 0,
        meaning: "the set of conditions happening at a certain time"
      },
      {
        word: "union",
        phrase: "a union of workers",
        choices: ["alliance", "rivalry", "silence", "distance"],
        answerIndex: 0,
        meaning: "a joining together of people, groups, or things"
      },
      {
        word: "assuring",
        phrase: "an assuring smile",
        choices: ["reassuring", "frightening", "confusing", "boring"],
        answerIndex: 0,
        meaning: "making someone feel certain or confident"
      },
      {
        word: "detected",
        phrase: "detected a strange smell",
        choices: ["discovered", "ignored", "created", "hid"],
        answerIndex: 0,
        meaning: "noticed or discovered something that was not obvious"
      },
      {
        word: "emerging",
        phrase: "the sun emerging from the clouds",
        choices: ["appearing", "disappearing", "freezing", "shrinking"],
        answerIndex: 0,
        meaning: "coming into view or beginning to develop"
      },
      {
        word: "gratitude",
        phrase: "expressed her gratitude",
        choices: ["thankfulness", "anger", "jealousy", "boredom"],
        answerIndex: 0,
        meaning: "a feeling of thankfulness"
      },
      {
        word: "guidance",
        phrase: "sought her teacher's guidance",
        choices: ["advice", "punishment", "silence", "competition"],
        answerIndex: 0,
        meaning: "help or advice that shows what to do"
      },
      {
        word: "outcome",
        phrase: "the outcome of the game",
        choices: ["result", "beginning", "rule", "question"],
        answerIndex: 0,
        meaning: "the final result of an action or event"
      },
      {
        word: "previous",
        phrase: "the previous chapter",
        choices: ["earlier", "upcoming", "final", "missing"],
        answerIndex: 0,
        meaning: "happening or existing before the present one"
      },
      {
        word: "pursuit",
        phrase: "the pursuit of a dream",
        choices: ["quest", "surrender", "delay", "refusal"],
        answerIndex: 0,
        meaning: "an effort to achieve, find, or follow something"
      },
      {
        word: "ambitious",
        phrase: "an ambitious goal",
        choices: ["determined to achieve something big", "easily satisfied", "careless", "forgetful"],
        answerIndex: 0,
        meaning: "having a strong desire to achieve something difficult"
      },
      {
        word: "memorized",
        phrase: "memorized the poem",
        choices: ["learned by heart", "forgot completely", "invented", "misspelled"],
        answerIndex: 0,
        meaning: "learned something so it can be remembered exactly"
      },
      {
        word: "satisfaction",
        phrase: "felt satisfaction after finishing",
        choices: ["contentment", "frustration", "confusion", "fear"],
        answerIndex: 0,
        meaning: "a pleased feeling from achieving or receiving something"
      },
      {
        word: "shuddered",
        phrase: "shuddered at the scary movie",
        choices: ["trembled", "laughed loudly", "cheered", "yawned"],
        answerIndex: 0,
        meaning: "shook suddenly, often from fear, cold, or disgust"
      },
      {
        word: "narrative",
        phrase: "wrote a personal narrative",
        choices: ["story", "recipe", "math problem", "map"],
        answerIndex: 0,
        meaning: "a story or an account of events"
      },
      {
        word: "repetition",
        phrase: "used repetition for emphasis",
        choices: ["repeating something", "avoiding something", "hiding something", "measuring something"],
        answerIndex: 0,
        meaning: "the use of something again and again"
      },
      {
        word: "free verse",
        phrase: "The poet wrote free verse without a regular rhyme pattern.",
        choices: ["poetry without regular rhyme or meter", "a rhymed sonnet", "a math equation", "a short story"],
        answerIndex: 0,
        meaning: "poetry without a regular rhyme or meter pattern"
      },
      {
        word: "rhyme",
        phrase: "“Light” and “night” rhyme.",
        choices: ["matching end sounds", "opposite meanings", "silent letters", "capital letters"],
        answerIndex: 0,
        meaning: "matching or similar sounds, often at the ends of words"
      }
    ]
  },
  {
    id: "wonders-u3",
    name: "Wonders Unit 3",
    words: [
      {
        word: "appreciation",
        phrase: "showed appreciation for the gift",
        choices: ["gratitude", "anger", "confusion", "boredom"],
        answerIndex: 0,
        meaning: "understanding the value of something and feeling thankful for it"
      },
      {
        word: "blurted",
        phrase: "blurted out the answer",
        choices: ["said suddenly without thinking", "whispered carefully", "wrote neatly", "sang softly"],
        answerIndex: 0,
        meaning: "said something suddenly without thinking first"
      },
      {
        word: "complimenting",
        phrase: "complimenting her artwork",
        choices: ["praising", "insulting", "ignoring", "copying"],
        answerIndex: 0,
        meaning: "saying something kind or admiring about someone"
      },
      {
        word: "congratulate",
        phrase: "stopped to congratulate the winner",
        choices: ["praise someone's success", "criticize someone", "ignore someone", "compete with someone"],
        answerIndex: 0,
        meaning: "to tell someone you are pleased about their success"
      },
      {
        word: "contradicted",
        phrase: "contradicted his own story",
        choices: ["said the opposite", "agreed completely", "repeated exactly", "forgot entirely"],
        answerIndex: 0,
        meaning: "said the opposite of what someone else said"
      },
      {
        word: "critical",
        phrase: "a critical decision",
        choices: ["very important", "unimportant", "funny", "quick"],
        answerIndex: 0,
        meaning: "very important, or involving careful judgment"
      },
      {
        word: "cultural",
        phrase: "a cultural festival",
        choices: ["related to customs and traditions", "related to math", "related to weather", "related to sports only"],
        answerIndex: 0,
        meaning: "related to the customs, beliefs, arts, or way of life of a group"
      },
      {
        word: "misunderstanding",
        phrase: "cleared up the misunderstanding",
        choices: ["confusion", "agreement", "celebration", "silence"],
        answerIndex: 0,
        meaning: "a failure to understand something correctly"
      },
      {
        word: "artificial",
        phrase: "artificial flowers",
        choices: ["man-made", "natural", "wild", "ancient"],
        answerIndex: 0,
        meaning: "made by people rather than occurring naturally"
      },
      {
        word: "collaborate",
        phrase: "The students collaborate to finish the group project.",
        choices: ["work together", "compete against each other", "ignore each other", "argue constantly"],
        answerIndex: 0,
        meaning: "to work together on a shared task"
      },
      {
        word: "dedicated",
        phrase: "a dedicated volunteer",
        choices: ["devoted", "careless", "lazy", "distracted"],
        answerIndex: 0,
        meaning: "strongly committed to a purpose or task"
      },
      {
        word: "flexible",
        phrase: "a flexible schedule",
        choices: ["adaptable", "rigid", "broken", "expensive"],
        answerIndex: 0,
        meaning: "able to bend, change, or adjust easily"
      },
      {
        word: "function",
        phrase: "the function of the heart",
        choices: ["purpose", "size", "color", "cost"],
        answerIndex: 0,
        meaning: "the purpose or job of something"
      },
      {
        word: "mimic",
        phrase: "the parrot can mimic sounds",
        choices: ["imitate", "invent", "ignore", "silence"],
        answerIndex: 0,
        meaning: "to copy the actions, appearance, or sounds of something"
      },
      {
        word: "obstacle",
        phrase: "overcame every obstacle",
        choices: ["barrier", "shortcut", "reward", "gift"],
        answerIndex: 0,
        meaning: "something that blocks progress or makes a task difficult"
      },
      {
        word: "techniques",
        phrase: "learned new painting techniques",
        choices: ["methods", "mistakes", "opinions", "rules only"],
        answerIndex: 0,
        meaning: "special methods used to do something skillfully"
      },
      {
        word: "archaeologist",
        phrase: "An archaeologist carefully examined the ancient pottery.",
        choices: ["scientist who studies the past", "teacher of math", "pilot of a plane", "chef at a restaurant"],
        answerIndex: 0,
        meaning: "a scientist who studies past people through objects and sites they left behind"
      },
      {
        word: "era",
        phrase: "the era of dinosaurs",
        choices: ["period of time", "single second", "short nap", "tiny space"],
        answerIndex: 0,
        meaning: "a long period of time known for particular events or features"
      },
      {
        word: "fragments",
        phrase: "fragments of an old vase",
        choices: ["small broken pieces", "whole objects", "brand new items", "giant boulders"],
        answerIndex: 0,
        meaning: "small broken pieces of something larger"
      },
      {
        word: "historian",
        phrase: "the historian wrote a book about the war",
        choices: ["person who studies the past", "person who predicts weather", "person who repairs cars", "person who bakes bread"],
        answerIndex: 0,
        meaning: "a person who studies and writes about the past"
      },
      {
        word: "intact",
        phrase: "the package arrived intact",
        choices: ["undamaged", "broken", "missing", "stolen"],
        answerIndex: 0,
        meaning: "whole and not damaged or missing parts"
      },
      {
        word: "preserved",
        phrase: "preserved the old photographs",
        choices: ["protected from damage", "destroyed on purpose", "sold quickly", "hidden forever"],
        answerIndex: 0,
        meaning: "kept safe from damage, decay, or change"
      },
      {
        word: "reconstruct",
        phrase: "reconstruct the ancient temple",
        choices: ["rebuild", "demolish", "paint", "ignore"],
        answerIndex: 0,
        meaning: "to build or form again, often from evidence or pieces"
      },
      {
        word: "remnants",
        phrase: "remnants of the old castle",
        choices: ["remaining small parts", "entire structure", "brand-new addition", "empty field"],
        answerIndex: 0,
        meaning: "small parts that remain after most of something is gone"
      }
    ]
  },
  {
    id: "wonders-u4",
    name: "Wonders Unit 4",
    words: [
      {
        word: "anticipation",
        phrase: "waited with anticipation",
        choices: ["excited expectation", "complete boredom", "sudden anger", "calm sleep"],
        answerIndex: 0,
        meaning: "a feeling of excitement or expectation about what will happen"
      },
      {
        word: "defy",
        phrase: "to defy the rules",
        choices: ["refuse to obey", "follow closely", "ignore quietly", "forget completely"],
        answerIndex: 0,
        meaning: "to refuse to obey or to resist boldly"
      },
      {
        word: "entitled",
        phrase: "entitled to a refund",
        choices: ["having a right to something", "forbidden from something", "unaware of something", "tired of something"],
        answerIndex: 0,
        meaning: "having a right to something"
      },
      {
        word: "neutral",
        phrase: "stayed neutral during the argument",
        choices: ["not taking sides", "strongly biased", "very angry", "extremely loud"],
        answerIndex: 0,
        meaning: "not supporting either side in a disagreement"
      },
      {
        word: "outspoken",
        phrase: "an outspoken critic",
        choices: ["willing to state opinions boldly", "shy and silent", "confused and unsure", "quiet and reserved"],
        answerIndex: 0,
        meaning: "willing to state opinions openly and strongly"
      },
      {
        word: "reserved",
        phrase: "a reserved personality",
        choices: ["quiet and not showing feelings easily", "loud and dramatic", "silly and playful", "angry and shouting"],
        answerIndex: 0,
        meaning: "quiet and not quick to show feelings"
      },
      {
        word: "sought",
        phrase: "sought help from a teacher",
        choices: ["looked for", "avoided", "forgot", "refused"],
        answerIndex: 0,
        meaning: "looked for or tried to obtain"
      },
      {
        word: "unequal",
        phrase: "an unequal division of chores",
        choices: ["not the same in size or amount", "perfectly balanced", "extremely fair", "exactly identical"],
        answerIndex: 0,
        meaning: "not the same in amount, size, value, or treatment"
      },
      {
        word: "astounded",
        phrase: "astounded by the magic trick",
        choices: ["amazed", "bored", "angered", "relaxed"],
        answerIndex: 0,
        meaning: "very surprised or amazed"
      },
      {
        word: "concealed",
        phrase: "concealed the gift",
        choices: ["hidden", "revealed", "destroyed", "sold"],
        answerIndex: 0,
        meaning: "hidden from sight or kept secret"
      },
      {
        word: "inquisitive",
        phrase: "an inquisitive student",
        choices: ["curious and eager to learn", "uninterested and bored", "angry and rude", "tired and sleepy"],
        answerIndex: 0,
        meaning: "curious and eager to learn or ask questions"
      },
      {
        word: "interpret",
        phrase: "Readers interpret clues to understand the character's feelings.",
        choices: ["explain the meaning of", "ignore completely", "memorize exactly", "erase entirely"],
        answerIndex: 0,
        meaning: "to explain or decide the meaning of something"
      },
      {
        word: "perplexed",
        phrase: "perplexed by the riddle",
        choices: ["confused", "delighted", "bored", "relaxed"],
        answerIndex: 0,
        meaning: "confused because something is difficult to understand"
      },
      {
        word: "precise",
        phrase: "precise measurements",
        choices: ["exact", "vague", "careless", "random"],
        answerIndex: 0,
        meaning: "exact, accurate, and carefully stated"
      },
      {
        word: "reconsider",
        phrase: "asked him to reconsider",
        choices: ["think about again", "decide immediately", "forget entirely", "refuse politely"],
        answerIndex: 0,
        meaning: "to think about something again before deciding"
      },
      {
        word: "suspicious",
        phrase: "felt suspicious of the stranger",
        choices: ["distrustful", "confident", "cheerful", "calm"],
        answerIndex: 0,
        meaning: "feeling that something may be wrong or dishonest"
      },
      {
        word: "barren",
        phrase: "a barren desert",
        choices: ["empty and lifeless", "lush and green", "crowded and busy", "colorful and bright"],
        answerIndex: 0,
        meaning: "unable to produce much plant life; empty and bare"
      },
      {
        word: "expression",
        phrase: "a surprised facial expression",
        choices: ["a way of showing feeling", "a math equation", "a type of food", "a musical instrument"],
        answerIndex: 0,
        meaning: "a way of showing an idea, feeling, or thought"
      },
      {
        word: "meaningful",
        phrase: "a meaningful gift",
        choices: ["important and special", "worthless and cheap", "ordinary and dull", "temporary and forgettable"],
        answerIndex: 0,
        meaning: "having an important purpose or special meaning"
      },
      {
        word: "plumes",
        phrase: "the peacock's colorful plumes",
        choices: ["showy feathers", "sharp claws", "tiny wings", "heavy bones"],
        answerIndex: 0,
        meaning: "large, showy feathers or feather-like shapes"
      },
      {
        word: "lyric",
        phrase: "wrote a lyric about the sea",
        choices: ["poem expressing personal feelings", "a math formula", "a news report", "a grocery list"],
        answerIndex: 0,
        meaning: "a type of poem that expresses personal feelings or thoughts"
      },
      {
        word: "alliteration",
        phrase: "“Wild winds whistle” uses alliteration.",
        choices: ["repeated beginning sounds", "repeated numbers", "repeated colors", "repeated shapes"],
        answerIndex: 0,
        meaning: "repetition of beginning consonant sounds in nearby words"
      },
      {
        word: "meter",
        phrase: "The poem's meter gives it a steady beat.",
        choices: ["pattern of stressed and unstressed beats", "number of pages", "title of a poem", "author's name"],
        answerIndex: 0,
        meaning: "the regular pattern of stressed and unstressed beats in poetry"
      },
      {
        word: "stanza",
        phrase: "The poem has four lines in its first stanza.",
        choices: ["group of lines in a poem", "single word in a poem", "title of a book", "ending punctuation"],
        answerIndex: 0,
        meaning: "a group of lines in a poem, similar to a paragraph"
      }
    ]
  },
  {
    id: "wonders-u5",
    name: "Wonders Unit 5",
    words: [
      {
        word: "approximately",
        phrase: "approximately ten miles away",
        choices: ["about", "exactly", "never", "always"],
        answerIndex: 0,
        meaning: "close to an exact amount but not exactly"
      },
      {
        word: "astronomical",
        phrase: "an astronomical price",
        choices: ["extremely large", "extremely small", "average", "cheap"],
        answerIndex: 0,
        meaning: "related to space and stars, or extremely large"
      },
      {
        word: "calculation",
        phrase: "double-checked her calculation",
        choices: ["math computation", "guess", "opinion", "story"],
        answerIndex: 0,
        meaning: "the process or result of working out a number"
      },
      {
        word: "criteria",
        phrase: "met all the criteria",
        choices: ["standards for judging something", "random guesses", "personal secrets", "old memories"],
        answerIndex: 0,
        meaning: "standards used to judge or decide something"
      },
      {
        word: "diameter",
        phrase: "We measured the diameter across the center of the circle.",
        choices: ["line across a circle's center", "edge of a square", "corner of a triangle", "height of a building"],
        answerIndex: 0,
        meaning: "a straight line across a circle through its center"
      },
      {
        word: "evaluate",
        phrase: "evaluate the results",
        choices: ["judge the value of", "ignore completely", "copy exactly", "hide from view"],
        answerIndex: 0,
        meaning: "to judge the quality, value, or importance of something"
      },
      {
        word: "orbit",
        phrase: "the moon's orbit around Earth",
        choices: ["curved path around another object", "straight line to nowhere", "sudden stop", "random bounce"],
        answerIndex: 0,
        meaning: "the curved path one object follows around another in space"
      },
      {
        word: "spheres",
        phrase: "the planets are spheres",
        choices: ["round three-dimensional shapes", "flat squares", "sharp triangles", "thin lines"],
        answerIndex: 0,
        meaning: "round three-dimensional shapes like balls"
      },
      {
        word: "assume",
        phrase: "assume he was right",
        choices: ["suppose without proof", "prove with facts", "deny completely", "forget entirely"],
        answerIndex: 0,
        meaning: "to accept something as true without being certain"
      },
      {
        word: "guarantee",
        phrase: "a money-back guarantee",
        choices: ["a firm promise", "a small hope", "a passing rumor", "a quiet wish"],
        answerIndex: 0,
        meaning: "a promise that something will happen or work as stated"
      },
      {
        word: "nominate",
        phrase: "nominate a class president",
        choices: ["formally suggest for a position", "quietly ignore", "harshly criticize", "secretly avoid"],
        answerIndex: 0,
        meaning: "to formally suggest someone for a position or award"
      },
      {
        word: "obviously",
        phrase: "obviously the answer was wrong",
        choices: ["clearly", "rarely", "secretly", "never"],
        answerIndex: 0,
        meaning: "in a way that is easy to see or understand"
      },
      {
        word: "rely",
        phrase: "rely on a friend",
        choices: ["depend on", "avoid", "forget", "distrust"],
        answerIndex: 0,
        meaning: "to depend on someone or something"
      },
      {
        word: "supportive",
        phrase: "a supportive coach",
        choices: ["encouraging and helpful", "harsh and critical", "distant and cold", "careless and lazy"],
        answerIndex: 0,
        meaning: "giving help, encouragement, or approval"
      },
      {
        word: "sympathy",
        phrase: "showed sympathy for her loss",
        choices: ["compassion", "jealousy", "anger", "pride"],
        answerIndex: 0,
        meaning: "care or sadness for someone else's trouble"
      },
      {
        word: "weakling",
        phrase: "teased for being a weakling",
        choices: ["a physically weak person", "a strong athlete", "a wise leader", "a fast runner"],
        answerIndex: 0,
        meaning: "a person or creature considered physically weak"
      },
      {
        word: "agricultural",
        phrase: "agricultural land",
        choices: ["related to farming", "related to fishing", "related to mining", "related to building"],
        answerIndex: 0,
        meaning: "related to farming, crops, or raising animals"
      },
      {
        word: "declined",
        phrase: "sales declined last year",
        choices: ["became fewer or smaller", "grew larger", "stayed the same", "disappeared instantly"],
        answerIndex: 0,
        meaning: "became smaller, weaker, or fewer; or politely refused"
      },
      {
        word: "disorder",
        phrase: "the room was in disorder",
        choices: ["a lack of order", "perfect neatness", "quiet calm", "bright light"],
        answerIndex: 0,
        meaning: "a lack of order or an unhealthy condition"
      },
      {
        word: "identify",
        phrase: "identify the bird by its song",
        choices: ["recognize and name", "forget completely", "hide from", "replace entirely"],
        answerIndex: 0,
        meaning: "to recognize and name someone or something"
      },
      {
        word: "probable",
        phrase: "a probable outcome",
        choices: ["likely to happen", "impossible", "forbidden", "accidental"],
        answerIndex: 0,
        meaning: "likely to happen or be true"
      },
      {
        word: "thrive",
        phrase: "plants thrive in sunlight",
        choices: ["grow well", "wither away", "stay hidden", "freeze completely"],
        answerIndex: 0,
        meaning: "to grow well, stay healthy, or succeed"
      },
      {
        word: "unexpected",
        phrase: "an unexpected visitor",
        choices: ["not predicted", "planned carefully", "boring and dull", "familiar and routine"],
        answerIndex: 0,
        meaning: "not predicted or planned"
      },
      {
        word: "widespread",
        phrase: "widespread flooding",
        choices: ["happening over a large area", "limited to one spot", "brief and rare", "imaginary"],
        answerIndex: 0,
        meaning: "existing or happening over a large area or among many people"
      }
    ]
  },
  {
    id: "wonders-u6",
    name: "Wonders Unit 6",
    words: [
      {
        word: "bulletin",
        phrase: "posted a bulletin on the board",
        choices: ["short public notice", "private diary", "secret code", "long novel"],
        answerIndex: 0,
        meaning: "a short public notice or news report"
      },
      {
        word: "contributions",
        phrase: "made generous contributions",
        choices: ["things given to help a cause", "things taken away", "things hidden", "things destroyed"],
        answerIndex: 0,
        meaning: "things given or done to help a person, group, or cause"
      },
      {
        word: "diversity",
        phrase: "celebrated the diversity of the class",
        choices: ["presence of many different kinds", "sameness in everything", "absence of people", "single type of thing"],
        answerIndex: 0,
        meaning: "the presence of many different kinds of people or things"
      },
      {
        word: "enlisted",
        phrase: "enlisted in the navy",
        choices: ["joined a group or cause", "quit a group", "avoided a group", "led a group"],
        answerIndex: 0,
        meaning: "joined the armed forces or signed up for a cause"
      },
      {
        word: "intercept",
        phrase: "intercept the pass",
        choices: ["stop before it arrives", "deliver safely", "ignore completely", "watch quietly"],
        answerIndex: 0,
        meaning: "to stop or catch something before it reaches its destination"
      },
      {
        word: "operations",
        phrase: "military operations",
        choices: ["organized activities for a purpose", "random accidents", "quiet naps", "empty rooms"],
        answerIndex: 0,
        meaning: "organized activities carried out for a purpose"
      },
      {
        word: "recruits",
        phrase: "trained the new recruits",
        choices: ["newly joined members", "retired veterans", "visiting guests", "former enemies"],
        answerIndex: 0,
        meaning: "new members who have recently joined a group"
      },
      {
        word: "survival",
        phrase: "wilderness survival skills",
        choices: ["continuing to live despite hardship", "quick surrender", "total defeat", "careless waste"],
        answerIndex: 0,
        meaning: "the act of continuing to live or exist despite difficulty"
      },
      {
        word: "adaptation",
        phrase: "an adaptation for desert life",
        choices: ["a change that helps survival", "a permanent illness", "a random accident", "a broken tool"],
        answerIndex: 0,
        meaning: "a feature or change that helps a living thing survive"
      },
      {
        word: "agile",
        phrase: "an agile gymnast",
        choices: ["able to move quickly and easily", "slow and clumsy", "heavy and stiff", "tired and weak"],
        answerIndex: 0,
        meaning: "able to move quickly and easily"
      },
      {
        word: "cache",
        phrase: "found a cache of supplies",
        choices: ["a hidden stored supply", "an empty box", "a public announcement", "a broken machine"],
        answerIndex: 0,
        meaning: "a hidden or stored supply of useful things"
      },
      {
        word: "dormant",
        phrase: "a dormant volcano",
        choices: ["temporarily inactive", "constantly erupting", "completely destroyed", "brand new"],
        answerIndex: 0,
        meaning: "temporarily inactive or not growing"
      },
      {
        word: "forage",
        phrase: "forage for berries",
        choices: ["search widely for food", "plant seeds carefully", "cook a meal", "store extra food"],
        answerIndex: 0,
        meaning: "to search widely for food or supplies"
      },
      {
        word: "frigid",
        phrase: "frigid winter air",
        choices: ["extremely cold", "extremely hot", "mildly warm", "slightly cool"],
        answerIndex: 0,
        meaning: "extremely cold"
      },
      {
        word: "hibernate",
        phrase: "Some animals hibernate when winter becomes very cold.",
        choices: ["spend winter in a deep sleep", "migrate south quickly", "build a new nest", "gather food all winter"],
        answerIndex: 0,
        meaning: "to spend winter in a deeply inactive state"
      },
      {
        word: "insulates",
        phrase: "fur insulates the animal from cold",
        choices: ["protects by slowing heat loss", "spreads heat quickly", "removes all warmth", "creates loud noise"],
        answerIndex: 0,
        meaning: "protects by slowing the movement of heat, sound, or electricity"
      },
      {
        word: "blares",
        phrase: "the alarm blares",
        choices: ["makes a loud harsh sound", "stays completely silent", "whispers softly", "hums quietly"],
        answerIndex: 0,
        meaning: "makes a very loud, harsh sound"
      },
      {
        word: "connection",
        phrase: "a strong connection between friends",
        choices: ["a link or relationship", "a total separation", "a hidden secret", "a broken promise"],
        answerIndex: 0,
        meaning: "a link or relationship between people, things, or ideas"
      },
      {
        word: "errand",
        phrase: "ran an errand for her mom",
        choices: ["a short trip to complete a task", "a long vacation", "a school test", "a birthday party"],
        answerIndex: 0,
        meaning: "a short trip made to complete a task"
      },
      {
        word: "exchange",
        phrase: "exchange seats with a friend",
        choices: ["trade one thing for another", "keep everything the same", "lose something forever", "hide something away"],
        answerIndex: 0,
        meaning: "to give one thing and receive another in return"
      },
      {
        word: "personification",
        phrase: "“The wind whispered” is an example of personification.",
        choices: ["giving human qualities to non-human things", "comparing two unlike things using like or as", "repeating the same sound", "describing the sound of a word"],
        answerIndex: 0,
        meaning: "giving human qualities to animals, objects, or ideas"
      },
      {
        word: "assonance",
        phrase: "The poet used assonance to create a repeated vowel sound.",
        choices: ["repetition of vowel sounds", "repetition of consonant sounds", "a rhyming couplet", "a type of rhythm"],
        answerIndex: 0,
        meaning: "repetition of vowel sounds in nearby words"
      },
      {
        word: "consonance",
        phrase: "The repeated ending sounds create consonance in the line.",
        choices: ["repetition of consonant sounds", "repetition of vowel sounds", "a type of rhyme scheme", "a poem's title"],
        answerIndex: 0,
        meaning: "repetition of consonant sounds in nearby words"
      },
      {
        word: "imagery",
        phrase: "vivid imagery filled the poem",
        choices: ["descriptive language that helps readers picture something", "a list of facts", "a math diagram", "a musical note"],
        answerIndex: 0,
        meaning: "descriptive language that helps readers picture or sense something"
      }
    ]
  },
  {
    id: "set14",
    name: "Word Set 14",
    words: [
      {
        word: "mock",
        phrase: "a mock assignment",
        choices: ["make-believe", "structured", "difficult", "real"],
        answerIndex: 0,
        meaning: "not real; fake or pretend"
      },
      {
        word: "peculiar",
        phrase: "a peculiar way",
        choices: ["distinct", "common", "usual", "vague"],
        answerIndex: 0,
        meaning: "strange or unusual"
      },
      {
        word: "queasy",
        phrase: "a queasy feeling",
        choices: ["anxious", "comfortable", "happy", "content"],
        answerIndex: 0,
        meaning: "feeling nauseated or uneasy"
      },
      {
        word: "sturdy",
        phrase: "a sturdy table",
        choices: ["strong", "weak", "uneven", "even"],
        answerIndex: 0,
        meaning: "strongly and solidly built"
      },
      {
        word: "sole",
        phrase: "the sole survivor",
        choices: ["one and only", "shared", "common", "living"],
        answerIndex: 0,
        meaning: "being the only one"
      },
      {
        word: "typical",
        phrase: "a typical reaction",
        choices: ["common", "abnormal", "rare", "unorthodox"],
        answerIndex: 0,
        meaning: "usual or ordinary"
      },
      {
        word: "valiant",
        phrase: "a valiant effort",
        choices: ["fearless", "timid", "timely", "weak"],
        answerIndex: 0,
        meaning: "showing courage or bravery"
      },
      {
        word: "vast",
        phrase: "the vast universe",
        choices: ["endless", "expand", "long", "interesting"],
        answerIndex: 0,
        meaning: "extremely large in area or extent"
      },
      {
        word: "abused",
        phrase: "an abused dog",
        choices: ["mistreated", "well liked", "defended", "protected"],
        answerIndex: 0,
        meaning: "treated cruelly or harmfully"
      },
      {
        word: "composed",
        phrase: "composed music",
        choices: ["constructed", "played", "listened", "liked"],
        answerIndex: 0,
        meaning: "created or written, as a piece of music"
      },
      {
        word: "edible",
        phrase: "edible berries",
        choices: ["eatable", "poisonous", "suitable", "harmful"],
        answerIndex: 0,
        meaning: "safe to eat"
      },
      {
        word: "portable",
        phrase: "a portable table",
        choices: ["easy to move", "lightweight", "inconvenient", "awkward"],
        answerIndex: 0,
        meaning: "able to be carried or moved easily"
      },
      {
        word: "realistic",
        phrase: "realistic expectations",
        choices: ["down-to-earth", "unusual", "impractical", "unique"],
        answerIndex: 0,
        meaning: "practical and sensible; based on what's actually possible"
      },
      {
        word: "summit",
        phrase: "a mountain summit",
        choices: ["peak", "camp site", "base", "lake"],
        answerIndex: 0,
        meaning: "the highest point of a mountain"
      },
      {
        word: "obsolete",
        phrase: "an obsolete machine",
        choices: ["out-of-date", "hard to use", "up-to-date", "useful"],
        answerIndex: 0,
        meaning: "no longer used; outdated"
      },
      {
        word: "myth",
        phrase: "an ancient myth",
        choices: ["legend", "time", "reality", "classic"],
        answerIndex: 0,
        meaning: "a traditional story, often about gods or heroes"
      },
      {
        word: "immense",
        phrase: "an immense collection",
        choices: ["massive", "envious", "beautiful", "limited"],
        answerIndex: 0,
        meaning: "extremely large"
      },
      {
        word: "escalated",
        phrase: "an escalated order",
        choices: ["raised", "reduced", "lost", "fulfilled"],
        answerIndex: 0,
        meaning: "increased quickly"
      },
      {
        word: "comply",
        phrase: "comply with the law",
        choices: ["obey", "ignore", "understand", "appeal"],
        answerIndex: 0,
        meaning: "to act in agreement with a rule or request"
      },
      {
        word: "intercepted",
        phrase: "he was intercepted",
        choices: ["cut off", "released", "encouraged", "occupied"],
        answerIndex: 0,
        meaning: "stopped or caught before reaching a destination"
      },
      {
        word: "identical",
        phrase: "identical shirts",
        choices: ["the same", "distinct", "different", "common"],
        answerIndex: 0,
        meaning: "exactly alike"
      },
      {
        word: "excavate",
        phrase: "excavate the building",
        choices: ["uncover", "leave", "sketch", "hold"],
        answerIndex: 0,
        meaning: "to dig out or expose by digging"
      },
      {
        word: "frigid",
        phrase: "a frigid day",
        choices: ["chilly", "warm", "dark", "bright"],
        answerIndex: 0,
        meaning: "very cold"
      },
      {
        word: "preserve",
        phrase: "preserve water",
        choices: ["conserve", "drank", "gave up", "found"],
        answerIndex: 0,
        meaning: "to keep safe or protect from loss"
      },
      {
        word: "reassure",
        phrase: "to reassure",
        choices: ["comfort", "supply", "deny", "sleep"],
        answerIndex: 0,
        meaning: "to restore confidence; to ease someone's worries"
      },
      {
        word: "exerted",
        phrase: "exerted his strength",
        choices: ["applied", "ignored", "concealed", "rested"],
        answerIndex: 0,
        meaning: "used effort or strength for something"
      },
      {
        word: "mischief",
        phrase: "create mischief",
        choices: ["trouble", "happiness", "obedience", "fairness"],
        answerIndex: 0,
        meaning: "playful troublemaking"
      },
      {
        word: "petrified",
        phrase: "petrified rocks",
        choices: ["fossilized", "softened", "darkened", "sticky"],
        answerIndex: 0,
        meaning: "turned into stone over a long time"
      },
      {
        word: "pasture",
        phrase: "across the pasture",
        choices: ["meadow", "road", "track", "park"],
        answerIndex: 0,
        meaning: "a grassy field used for grazing animals"
      },
      {
        word: "revert",
        phrase: "to revert",
        choices: ["go back", "stay put", "push through", "halt"],
        answerIndex: 0,
        meaning: "to return to a previous state or condition"
      },
      {
        word: "ruined",
        phrase: "ruined the job",
        choices: ["messed up", "fixed", "managed", "wrote"],
        answerIndex: 0,
        meaning: "spoiled or damaged"
      },
      {
        word: "companion",
        phrase: "his companion",
        choices: ["partner", "champion", "dog", "enemy"],
        answerIndex: 0,
        meaning: "a person who accompanies or spends time with another"
      },
      {
        word: "dedicate",
        phrase: "dedicate yourself",
        choices: ["devote", "strengthen", "beautify", "withhold"],
        answerIndex: 0,
        meaning: "to give one's time or effort to a purpose"
      },
      {
        word: "industrious",
        phrase: "an industrious attitude",
        choices: ["hardworking", "lazy", "conscious", "lackadaisical"],
        answerIndex: 0,
        meaning: "hardworking and diligent"
      },
      {
        word: "exasperated",
        phrase: "he was exasperated",
        choices: ["irritated", "tired", "happy", "lonely"],
        answerIndex: 0,
        meaning: "very annoyed or frustrated"
      },
      {
        word: "apathetic",
        phrase: "acted apathetic",
        choices: ["unconcerned", "caring", "upset", "frightened"],
        answerIndex: 0,
        meaning: "showing little interest or concern"
      },
      {
        word: "sparse",
        phrase: "sparse vegetation",
        choices: ["lacking", "abundant", "colorful", "ornate"],
        answerIndex: 0,
        meaning: "thinly scattered or not dense"
      }
    ]
  },
  {
    id: "set15",
    name: "Grade 4 Vocabulary",
    words: [
      {
        word: "captivity",
        phrase: "The lion lives in captivity.",
        choices: ["confinement", "freedom", "jungle", "Africa"],
        answerIndex: 0,
        meaning: "the state of being kept confined, not free"
      },
      {
        word: "disclose",
        phrase: "I cannot disclose that.",
        choices: ["reveal", "conceal", "withhold", "hide"],
        answerIndex: 0,
        meaning: "to make known; reveal"
      },
      {
        word: "descend",
        phrase: "Descend to 20,000 feet.",
        choices: ["lower", "increase", "rise", "ascend"],
        answerIndex: 0,
        meaning: "to move downward"
      },
      {
        word: "horror",
        phrase: "It was a horror movie.",
        choices: ["scary", "funny", "dramatic", "sad"],
        answerIndex: 0,
        meaning: "a feeling of intense fear or shock"
      },
      {
        word: "considerable",
        phrase: "a considerable amount of time",
        choices: ["large", "insignificant", "small", "itsy"],
        answerIndex: 0,
        meaning: "large in amount or size"
      },
      {
        word: "heroic",
        phrase: "a heroic effort",
        choices: ["bold", "meek", "true", "timid"],
        answerIndex: 0,
        meaning: "showing great courage"
      },
      {
        word: "jagged",
        phrase: "a jagged edge",
        choices: ["broken", "gentle", "smooth", "sloped"],
        answerIndex: 0,
        meaning: "having a sharp, uneven edge"
      },
      {
        word: "peculiar",
        phrase: "a peculiar smell",
        choices: ["distinguished", "stinky", "nasty", "normal"],
        answerIndex: 0,
        meaning: "distinctive; unusual in a particular way"
      },
      {
        word: "act in",
        phrase: "Please act in my interest.",
        choices: ["represent", "know", "disclose", "understand"],
        answerIndex: 0,
        meaning: "to represent or look out for someone's benefit"
      },
      {
        word: "sturdy",
        phrase: "Sturdy shoes",
        choices: ["durable", "wobbly", "unstable", "thin"],
        answerIndex: 0,
        meaning: "strongly built; not easily damaged"
      },
      {
        word: "variety",
        phrase: "a variety of interests",
        choices: ["array", "limitation", "uniformity", "preference"],
        answerIndex: 0,
        meaning: "a number of different types of something"
      },
      {
        word: "tragic",
        phrase: "A tragic story",
        choices: ["catastrophic", "horror", "blessed", "dramatic"],
        answerIndex: 0,
        meaning: "causing great sadness; disastrous"
      },
      {
        word: "valiant",
        phrase: "a valiant act",
        choices: ["courageous", "simple", "careless", "thoughtful"],
        answerIndex: 0,
        meaning: "showing courage or bravery"
      },
      {
        word: "indicate",
        phrase: "Please indicate your choice.",
        choices: ["announce", "conceal", "hide", "mislead"],
        answerIndex: 0,
        meaning: "to point out or make known"
      },
      {
        word: "proceed",
        phrase: "Proceed to the next station.",
        choices: ["go", "halt", "retreat", "wait"],
        answerIndex: 0,
        meaning: "to move forward; continue"
      },
      {
        word: "reveal",
        phrase: "Reveal the secret.",
        choices: ["disclose", "hide", "suppress", "keep"],
        answerIndex: 0,
        meaning: "to make something known that was hidden"
      },
      {
        word: "shabby",
        phrase: "a shabby couch",
        choices: ["shoddy", "comfortable", "expensive", "chic"],
        answerIndex: 0,
        meaning: "worn out and in poor condition"
      },
      {
        word: "pointless",
        phrase: "A pointless effort",
        choices: ["ridiculous", "sensible", "beneficial", "useful"],
        answerIndex: 0,
        meaning: "having no purpose"
      },
      {
        word: "modest",
        phrase: "You are too modest.",
        choices: ["bashful", "bold", "conceited", "proud"],
        answerIndex: 0,
        meaning: "not boastful; shy about one's abilities"
      },
      {
        word: "entire",
        phrase: "My entire wardrobe",
        choices: ["whole", "incomplete", "limited", "closet"],
        answerIndex: 0,
        meaning: "whole; complete"
      },
      {
        word: "skilled",
        phrase: "A skilled worker",
        choices: ["accomplished", "inept", "awkward", "driven"],
        answerIndex: 0,
        meaning: "having ability or expertise"
      },
      {
        word: "shriek",
        phrase: "To shriek with laughter",
        choices: ["scream", "giggle", "peep", "gasp"],
        answerIndex: 0,
        meaning: "to give a loud, high-pitched cry"
      },
      {
        word: "frantic",
        phrase: "a frantic call",
        choices: ["distressed", "calm", "docile", "mad"],
        answerIndex: 0,
        meaning: "wild with fear, worry, or excitement"
      },
      {
        word: "ease",
        phrase: "We talked with ease.",
        choices: ["comfort", "excitement", "difficulty", "unrest"],
        answerIndex: 0,
        meaning: "freedom from difficulty; comfort"
      },
      {
        word: "desire",
        phrase: "This is my greatest desire.",
        choices: ["longing", "gift", "aversion", "dislike"],
        answerIndex: 0,
        meaning: "a strong wish for something"
      },
      {
        word: "contribute",
        phrase: "I want to contribute.",
        choices: ["donate", "withdraw", "join", "neglect"],
        answerIndex: 0,
        meaning: "to give something, especially to help"
      },
      {
        word: "administer",
        phrase: "Please administer support.",
        choices: ["deliver", "deny", "withdraw", "shun"],
        answerIndex: 0,
        meaning: "to give or provide something"
      },
      {
        word: "humble",
        phrase: "The boy is humble.",
        choices: ["meek", "brave", "assertive", "friendly"],
        answerIndex: 0,
        meaning: "not proud; modest"
      },
      {
        word: "resist",
        phrase: "Don't resist change.",
        choices: ["oppose", "comply", "conform", "agree"],
        answerIndex: 0,
        meaning: "to refuse to accept or go along with"
      },
      {
        word: "gazebo",
        phrase: "The gazebo in the backyard",
        choices: ["pavilion", "arena", "theater", "grounds"],
        answerIndex: 0,
        meaning: "a small roofed structure, often open-sided, in a garden or yard"
      }
    ]
  },
  {
    id: "set16",
    name: "Grade 5 Vocabulary",
    words: [
      {
        word: "antagonist",
        phrase: "He plays the antagonist.",
        choices: ["adversary", "hero", "protagonist", "lead"],
        answerIndex: 0,
        meaning: "a character who opposes the main character"
      },
      {
        word: "records",
        phrase: "lost records",
        choices: ["documents", "oration", "books", "dvds"],
        answerIndex: 0,
        meaning: "written or official documents"
      },
      {
        word: "deprive",
        phrase: "Don't deprive him.",
        choices: ["constrain", "release", "indulge", "endow"],
        answerIndex: 0,
        meaning: "to keep someone from having or enjoying something"
      },
      {
        word: "nonchalant",
        phrase: "He acted nonchalant.",
        choices: ["easygoing", "intense", "nervous", "fine"],
        answerIndex: 0,
        meaning: "calm and relaxed; not worried"
      },
      {
        word: "perish",
        phrase: "Publish or perish",
        choices: ["be destroyed", "revive", "flourish", "germinate"],
        answerIndex: 0,
        meaning: "to die or come to an end"
      },
      {
        word: "minor",
        phrase: "a minor talent",
        choices: ["insignificant", "child", "big", "important"],
        answerIndex: 0,
        meaning: "small in size or importance"
      },
      {
        word: "gorge",
        phrase: "Don't gorge on the food",
        choices: ["gobble", "nibble", "graze", "taste"],
        answerIndex: 0,
        meaning: "to eat greedily or in large amounts"
      },
      {
        word: "obsolete",
        phrase: "The device is obsolete.",
        choices: ["dated", "contemporary", "broken", "moldy"],
        answerIndex: 0,
        meaning: "no longer used; outdated"
      },
      {
        word: "sparse",
        phrase: "His decor is sparse.",
        choices: ["simple", "lush", "overdone", "classic"],
        answerIndex: 0,
        meaning: "thinly spread; not dense"
      },
      {
        word: "vivid",
        phrase: "a vivid description",
        choices: ["graphic", "weak", "indulgent", "quiet"],
        answerIndex: 0,
        meaning: "producing a clear, strong image in the mind"
      },
      {
        word: "revert",
        phrase: "Click here to revert to the home page.",
        choices: ["return", "find", "open", "copy"],
        answerIndex: 0,
        meaning: "to return to a previous state"
      },
      {
        word: "motivate",
        phrase: "Motivate the team.",
        choices: ["excite", "depress", "gather", "persuade"],
        answerIndex: 0,
        meaning: "to give someone a reason to act"
      },
      {
        word: "provide",
        phrase: "Provide shelter",
        choices: ["supply", "remove", "obstruct", "design"],
        answerIndex: 0,
        meaning: "to supply or make available"
      },
      {
        word: "settle",
        phrase: "Don't settle for less",
        choices: ["accept", "move", "achieve", "reside"],
        answerIndex: 0,
        meaning: "to accept something as final, often less than hoped for"
      },
      {
        word: "suspend",
        phrase: "Suspend disbelief",
        choices: ["cease", "allow", "cause", "begin"],
        answerIndex: 0,
        meaning: "to stop something temporarily"
      },
      {
        word: "kin",
        phrase: "Next of kin",
        choices: ["relatives", "friends", "sisters", "neighbors"],
        answerIndex: 0,
        meaning: "family members; relatives"
      },
      {
        word: "pedestrian",
        phrase: "That new song is pedestrian.",
        choices: ["boring", "different", "exceptional", "bystander"],
        answerIndex: 0,
        meaning: "ordinary and dull; unremarkable"
      },
      {
        word: "excavate",
        phrase: "Excavate the find",
        choices: ["explore", "promote", "bury", "photograph"],
        answerIndex: 0,
        meaning: "to dig out or uncover"
      },
      {
        word: "intense",
        phrase: "An intense experience",
        choices: ["acute", "lazy", "quiet", "indifferent"],
        answerIndex: 0,
        meaning: "very strong or extreme"
      },
      {
        word: "mischief",
        phrase: "Full of mischief",
        choices: ["shenanigans", "giggles", "obedience", "jokes"],
        answerIndex: 0,
        meaning: "playful troublemaking"
      },
      {
        word: "exert",
        phrase: "to exert pressure",
        choices: ["apply", "misuse", "ignore", "shun"],
        answerIndex: 0,
        meaning: "to apply or use effort or force"
      },
      {
        word: "detect",
        phrase: "To detect a lie",
        choices: ["discover", "miss", "ignore", "overlook"],
        answerIndex: 0,
        meaning: "to discover or notice something"
      },
      {
        word: "bungle",
        phrase: "To bungle a job",
        choices: ["blunder", "fix", "succeed", "complete"],
        answerIndex: 0,
        meaning: "to do something clumsily or carelessly"
      },
      {
        word: "soundproof",
        phrase: "soundproof booth",
        choices: ["silent", "noisy", "airtight", "humming"],
        answerIndex: 0,
        meaning: "designed to block sound from passing through"
      },
      {
        word: "assume",
        phrase: "Assume the worst",
        choices: ["believe", "doubt", "deduce", "deny"],
        answerIndex: 0,
        meaning: "to accept something as true without proof"
      },
      {
        word: "compose",
        phrase: "Compose yourself.",
        choices: ["control", "arouse", "excite", "anger"],
        answerIndex: 0,
        meaning: "to calm or control oneself"
      },
      {
        word: "aim",
        phrase: "Aim for peace.",
        choices: ["strive", "give", "speak", "write"],
        answerIndex: 0,
        meaning: "to try hard for a goal; strive"
      },
      {
        word: "astound",
        phrase: "You astound me.",
        choices: ["amaze", "have", "bore", "horrify"],
        answerIndex: 0,
        meaning: "to surprise or amaze greatly"
      },
      {
        word: "occasion",
        phrase: "a special occasion",
        choices: ["event", "invitation", "trip", "decoration"],
        answerIndex: 0,
        meaning: "a particular event or happening"
      },
      {
        word: "illuminate",
        phrase: "Illuminate your point.",
        choices: ["explain", "confuse", "brighten", "sparkle"],
        answerIndex: 0,
        meaning: "to make something clear; to explain"
      }
    ]
  },
  {
    id: "set17",
    name: "Grade 6 Vocabulary",
    words: [
      {
        word: "appeal",
        phrase: "To appeal for help",
        choices: ["request", "recall", "retract", "repent"],
        answerIndex: 0,
        meaning: "to make an earnest request"
      },
      {
        word: "consent",
        phrase: "Give consent",
        choices: ["approval", "denial", "objection", "recommendation"],
        answerIndex: 0,
        meaning: "permission or approval"
      },
      {
        word: "complement",
        phrase: "A nice complement",
        choices: ["counterpart", "detriment", "praise", "favor"],
        answerIndex: 0,
        meaning: "something that completes or matches well with another thing"
      },
      {
        word: "collaborate",
        phrase: "To collaborate on the project",
        choices: ["cooperate", "disagree", "object", "oppose"],
        answerIndex: 0,
        meaning: "to work together with others"
      },
      {
        word: "defer",
        phrase: "To defer the discussion",
        choices: ["procrastinate", "advance", "expedite", "hasten"],
        answerIndex: 0,
        meaning: "to put off until later; delay"
      },
      {
        word: "conspicuous",
        phrase: "conspicuous consumption",
        choices: ["obvious", "concealed", "unremarkable", "subtle"],
        answerIndex: 0,
        meaning: "easily seen or noticed"
      },
      {
        word: "arid",
        phrase: "An arid climate",
        choices: ["dry", "wet", "cold", "humid"],
        answerIndex: 0,
        meaning: "extremely dry, especially due to lack of rain"
      },
      {
        word: "cultivate",
        phrase: "Cultivate a friendship.",
        choices: ["nurture", "harvest", "ignore", "neglect"],
        answerIndex: 0,
        meaning: "to develop or improve through effort"
      },
      {
        word: "esteem",
        phrase: "Hold him in esteem.",
        choices: ["admire", "ridicule", "desire", "kindness"],
        answerIndex: 0,
        meaning: "respect and admiration"
      },
      {
        word: "meager",
        phrase: "Meager earnings",
        choices: ["deficient", "adequate", "liberal", "superfluous"],
        answerIndex: 0,
        meaning: "small in amount; not enough"
      },
      {
        word: "omniscient",
        phrase: "An omniscient authority",
        choices: ["almighty", "local", "recognized", "international"],
        answerIndex: 0,
        meaning: "knowing everything"
      },
      {
        word: "priority",
        phrase: "Make that a priority.",
        choices: ["concern", "unimportant", "insignificant", "discussion"],
        answerIndex: 0,
        meaning: "something treated as more important than other things"
      },
      {
        word: "recount",
        phrase: "Recount what happened.",
        choices: ["convey", "conceal", "hide", "repress"],
        answerIndex: 0,
        meaning: "to tell or describe in detail"
      },
      {
        word: "remorse",
        phrase: "Full of remorse",
        choices: ["anguish", "happiness", "thoughts", "truth"],
        answerIndex: 0,
        meaning: "deep regret for something one has done"
      },
      {
        word: "stifle",
        phrase: "To stifle communication",
        choices: ["suppress", "encourage", "help", "participate"],
        answerIndex: 0,
        meaning: "to hold back or suppress"
      },
      {
        word: "verdict",
        phrase: "The verdict was read.",
        choices: ["judgment", "accusation", "jury", "accolade"],
        answerIndex: 0,
        meaning: "a formal decision or judgment"
      },
      {
        word: "terrain",
        phrase: "a rocky terrain",
        choices: ["landscape", "argument", "vacant lot", "lunar surface"],
        answerIndex: 0,
        meaning: "an area of land, especially in terms of its physical features"
      },
      {
        word: "swarm",
        phrase: "Don't swarm the celebrity.",
        choices: ["crowd", "ignore", "disperse", "target"],
        answerIndex: 0,
        meaning: "to gather in a large crowd"
      },
      {
        word: "sanctuary",
        phrase: "The dissident seeks sanctuary.",
        choices: ["asylum", "hotel", "hospitality", "friendship"],
        answerIndex: 0,
        meaning: "a safe place; a place of protection"
      },
      {
        word: "dissident",
        phrase: "The dissident seeks sanctuary.",
        choices: ["agitator", "politician", "conformist", "performer"],
        answerIndex: 0,
        meaning: "a person who publicly disagrees with authority"
      },
      {
        word: "verge",
        phrase: "On the verge of collapse",
        choices: ["border", "beginning", "opposite", "middle"],
        answerIndex: 0,
        meaning: "the edge or point at which something begins"
      },
      {
        word: "gangly",
        phrase: "A gangly kid",
        choices: ["tall and thin", "short and squat", "oppositional", "young"],
        answerIndex: 0,
        meaning: "tall, thin, and awkward in movement"
      },
      {
        word: "rural",
        phrase: "A rural setting",
        choices: ["country", "urban", "suburban", "desert"],
        answerIndex: 0,
        meaning: "relating to the countryside"
      },
      {
        word: "predicament",
        phrase: "A tough predicament",
        choices: ["bind", "solution", "history", "argument"],
        answerIndex: 0,
        meaning: "a difficult or unpleasant situation"
      },
      {
        word: "plummet",
        phrase: "The price will plummet.",
        choices: ["fall", "rise", "stabilize", "double"],
        answerIndex: 0,
        meaning: "to fall suddenly and steeply"
      },
      {
        word: "remote",
        phrase: "A remote chance",
        choices: ["unlikely", "likely", "close", "probable"],
        answerIndex: 0,
        meaning: "unlikely; distant"
      },
      {
        word: "exonerated",
        phrase: "The defendant was exonerated.",
        choices: ["vindicated", "found guilty", "blamed", "accused"],
        answerIndex: 0,
        meaning: "cleared of blame or wrongdoing"
      },
      {
        word: "retaliate",
        phrase: "He might retaliate.",
        choices: ["get even", "forgive", "disappoint", "sympathize"],
        answerIndex: 0,
        meaning: "to get even; to strike back"
      },
      {
        word: "idiom",
        phrase: "A unique idiom.",
        choices: ["expression", "southern accent", "storytelling ability", "singing voice"],
        answerIndex: 0,
        meaning: "an expression whose meaning isn't obvious from its individual words"
      },
      {
        word: "precise",
        phrase: "The precise time",
        choices: ["exact", "ambiguous", "false", "questionable"],
        answerIndex: 0,
        meaning: "exact and accurate"
      }
    ]
  },
  {
    id: "set18",
    name: "Grade 4 Vocabulary 2",
    words: [
      {
        word: "anticipate",
        phrase: "We anticipate a fun trip.",
        choices: ["expect", "forget", "dread", "avoid"],
        answerIndex: 0,
        meaning: "to expect or look forward to something"
      },
      {
        word: "clamor",
        phrase: "the clamor of the crowd",
        choices: ["uproar", "silence", "whisper", "calm"],
        answerIndex: 0,
        meaning: "a loud, confused noise, often from a crowd"
      },
      {
        word: "eager",
        phrase: "she was eager to start",
        choices: ["enthusiastic", "reluctant", "tired", "bored"],
        answerIndex: 0,
        meaning: "having or showing keen interest or enthusiasm"
      },
      {
        word: "reluctant",
        phrase: "he was reluctant to leave",
        choices: ["unwilling", "eager", "ready", "excited"],
        answerIndex: 0,
        meaning: "unwilling and hesitant"
      },
      {
        word: "banish",
        phrase: "to banish the villain",
        choices: ["exile", "welcome", "invite", "reward"],
        answerIndex: 0,
        meaning: "to send someone away as punishment"
      },
      {
        word: "compensation",
        phrase: "she received compensation for the damage",
        choices: ["payment", "debt", "request", "complaint"],
        answerIndex: 0,
        meaning: "something given to make up for a loss or harm"
      },
      {
        word: "dense",
        phrase: "a dense forest",
        choices: ["thick", "sparse", "open", "bare"],
        answerIndex: 0,
        meaning: "closely packed together; thick"
      },
      {
        word: "flaw",
        phrase: "a flaw in the plan",
        choices: ["defect", "strength", "benefit", "success"],
        answerIndex: 0,
        meaning: "a mistake or weakness that makes something imperfect"
      },
      {
        word: "gullible",
        phrase: "he is gullible and believes anything",
        choices: ["easily fooled", "suspicious", "wise", "cautious"],
        answerIndex: 0,
        meaning: "easily tricked or deceived"
      },
      {
        word: "impact",
        phrase: "the impact of the storm",
        choices: ["effect", "cause", "delay", "silence"],
        answerIndex: 0,
        meaning: "a strong effect or influence"
      },
      {
        word: "massive",
        phrase: "a massive iceberg",
        choices: ["enormous", "tiny", "narrow", "light"],
        answerIndex: 0,
        meaning: "very large in size, extent, or amount"
      }
    ]
  },
  {
    id: "set19",
    name: "Grade 5 Vocabulary 2",
    words: [
      {
        word: "accurate",
        phrase: "an accurate measurement",
        choices: ["precise", "wrong", "careless", "rough"],
        answerIndex: 0,
        meaning: "correct and exact"
      },
      {
        word: "crucial",
        phrase: "a crucial decision",
        choices: ["essential", "minor", "optional", "trivial"],
        answerIndex: 0,
        meaning: "extremely important; vital"
      },
      {
        word: "emerge",
        phrase: "the sun began to emerge",
        choices: ["appear", "vanish", "hide", "sink"],
        answerIndex: 0,
        meaning: "to come out or become visible"
      },
      {
        word: "ferocious",
        phrase: "a ferocious storm",
        choices: ["fierce", "gentle", "calm", "mild"],
        answerIndex: 0,
        meaning: "extremely fierce or violent"
      },
      {
        word: "persuade",
        phrase: "try to persuade him",
        choices: ["convince", "discourage", "ignore", "confuse"],
        answerIndex: 0,
        meaning: "to cause someone to do something through reasoning"
      },
      {
        word: "abrupt",
        phrase: "an abrupt stop",
        choices: ["sudden", "gradual", "expected", "slow"],
        answerIndex: 0,
        meaning: "sudden and unexpected"
      },
      {
        word: "barrier",
        phrase: "a barrier blocked the road",
        choices: ["obstacle", "path", "opening", "bridge"],
        answerIndex: 0,
        meaning: "something that blocks or prevents movement"
      },
      {
        word: "defiant",
        phrase: "a defiant look",
        choices: ["rebellious", "obedient", "cheerful", "shy"],
        answerIndex: 0,
        meaning: "boldly resisting authority"
      },
      {
        word: "fragile",
        phrase: "a fragile vase",
        choices: ["delicate", "sturdy", "unbreakable", "heavy"],
        answerIndex: 0,
        meaning: "easily broken or damaged"
      },
      {
        word: "gargantuan",
        phrase: "a gargantuan meal",
        choices: ["huge", "tiny", "average", "modest"],
        answerIndex: 0,
        meaning: "enormous; gigantic"
      },
      {
        word: "hinder",
        phrase: "rain will hinder our plans",
        choices: ["delay", "help", "speed up", "allow"],
        answerIndex: 0,
        meaning: "to create difficulty for; delay or obstruct"
      },
      {
        word: "jostle",
        phrase: "the crowd began to jostle",
        choices: ["push", "wait", "freeze", "applaud"],
        answerIndex: 0,
        meaning: "to bump or push roughly, as in a crowd"
      }
    ]
  },
  {
    id: "set20",
    name: "Grade 6 Vocabulary 2",
    words: [
      {
        word: "abundant",
        phrase: "an abundant harvest",
        choices: ["plentiful", "scarce", "meager", "limited"],
        answerIndex: 0,
        meaning: "existing in large quantities; plentiful"
      },
      {
        word: "bellow",
        phrase: "the coach began to bellow",
        choices: ["shout", "whisper", "sing", "hum"],
        answerIndex: 0,
        meaning: "to shout loudly"
      },
      {
        word: "diminish",
        phrase: "the pain will diminish",
        choices: ["decrease", "increase", "remain", "spread"],
        answerIndex: 0,
        meaning: "to become or make smaller; lessen"
      },
      {
        word: "exaggerate",
        phrase: "don't exaggerate the story",
        choices: ["overstate", "understate", "ignore", "forget"],
        answerIndex: 0,
        meaning: "to make something seem larger or more important than it is"
      },
      {
        word: "formidable",
        phrase: "a formidable opponent",
        choices: ["daunting", "weak", "harmless", "easy"],
        answerIndex: 0,
        meaning: "inspiring fear or respect through being impressive or powerful"
      },
      {
        word: "inevitably",
        phrase: "inevitably, the truth came out",
        choices: ["unavoidably", "possibly", "occasionally", "unlikely"],
        answerIndex: 0,
        meaning: "in a way that cannot be avoided; certainly"
      },
      {
        word: "rigorous",
        phrase: "a rigorous training schedule",
        choices: ["demanding", "easy", "relaxed", "casual"],
        answerIndex: 0,
        meaning: "extremely thorough and demanding"
      },
      {
        word: "unanimous",
        phrase: "a unanimous vote",
        choices: ["united", "divided", "split", "undecided"],
        answerIndex: 0,
        meaning: "fully in agreement; united in opinion"
      },
      {
        word: "dwell",
        phrase: "they dwell in the mountains",
        choices: ["live", "travel", "visit", "wander"],
        answerIndex: 0,
        meaning: "to live in or reside at a place"
      },
      {
        word: "eerie",
        phrase: "an eerie silence",
        choices: ["spooky", "comforting", "cheerful", "ordinary"],
        answerIndex: 0,
        meaning: "strange and frightening"
      },
      {
        word: "frivolous",
        phrase: "a frivolous excuse",
        choices: ["silly", "serious", "valid", "important"],
        answerIndex: 0,
        meaning: "not having any serious purpose; trivial"
      },
      {
        word: "hostile",
        phrase: "a hostile crowd",
        choices: ["unfriendly", "welcoming", "calm", "friendly"],
        answerIndex: 0,
        meaning: "unfriendly or aggressive"
      },
      {
        word: "improvises",
        phrase: "she improvises when she forgets her lines",
        choices: ["adapts on the spot", "memorizes exactly", "reads aloud", "rehearses"],
        answerIndex: 0,
        meaning: "creates or performs something without preparation"
      },
      {
        word: "linger",
        phrase: "the smell began to linger",
        choices: ["remain", "vanish", "fade quickly", "disperse"],
        answerIndex: 0,
        meaning: "to stay somewhere longer than necessary"
      },
      {
        word: "monotonous",
        phrase: "a monotonous lecture",
        choices: ["boring", "exciting", "varied", "lively"],
        answerIndex: 0,
        meaning: "dull and repetitive; lacking variety"
      }
    ]
  },
  {
    id: "set21",
    name: "Vocabulary Quiz Words",
    words: [
      {
        word: "melancholy",
        phrase: "a melancholy mood",
        choices: ["sad", "joyful", "excited", "calm"],
        answerIndex: 0,
        meaning: "a feeling of deep sadness"
      },
      {
        word: "replenish",
        phrase: "replenish the water supply",
        choices: ["refill", "empty", "drain", "waste"],
        answerIndex: 0,
        meaning: "to fill something up again"
      },
      {
        word: "vanish",
        phrase: "the rabbit seemed to vanish",
        choices: ["disappear", "appear", "remain", "arrive"],
        answerIndex: 0,
        meaning: "to disappear suddenly"
      },
      {
        word: "fascinating",
        phrase: "a fascinating documentary",
        choices: ["captivating", "boring", "dull", "tedious"],
        answerIndex: 0,
        meaning: "extremely interesting"
      },
      {
        word: "perilous",
        phrase: "a perilous journey",
        choices: ["dangerous", "safe", "easy", "calm"],
        answerIndex: 0,
        meaning: "full of danger or risk"
      },
      {
        word: "flawless",
        phrase: "a flawless performance",
        choices: ["perfect", "sloppy", "messy", "clumsy"],
        answerIndex: 0,
        meaning: "without any mistakes or imperfections"
      }
    ]
  },
  {
    id: "set22",
    name: "Missed Words",
    words: [
      {
        word: "abundant",
        phrase: "an abundant harvest",
        choices: ["plentiful", "scarce", "rotten", "hidden"],
        answerIndex: 0,
        meaning: "plentiful; a lot"
      },
      {
        word: "acquired",
        phrase: "she acquired a new skill",
        choices: ["gained", "lost", "forgot", "broke"],
        answerIndex: 0,
        meaning: "gained; obtained"
      },
      {
        word: "adequate",
        phrase: "adequate supplies for the trip",
        choices: ["enough", "insufficient", "excessive", "broken"],
        answerIndex: 0,
        meaning: "enough; sufficient"
      },
      {
        word: "altered",
        phrase: "he altered his plans",
        choices: ["changed", "kept", "copied", "ignored"],
        answerIndex: 0,
        meaning: "changed"
      },
      {
        word: "ample",
        phrase: "ample time to finish",
        choices: ["more than enough", "barely enough", "no time at all", "too little"],
        answerIndex: 0,
        meaning: "more than enough"
      },
      {
        word: "authentic",
        phrase: "an authentic signature",
        choices: ["genuine", "fake", "copied", "stolen"],
        answerIndex: 0,
        meaning: "genuine; real"
      },
      {
        word: "clarify",
        phrase: "please clarify your answer",
        choices: ["make clear", "confuse", "hide", "repeat"],
        answerIndex: 0,
        meaning: "make clear"
      },
      {
        word: "compatible",
        phrase: "the two programs are compatible",
        choices: ["able to work well together", "in conflict", "identical", "unrelated"],
        answerIndex: 0,
        meaning: "able to work well together"
      },
      {
        word: "concise",
        phrase: "a concise summary",
        choices: ["brief and clear", "long and wordy", "confusing", "incomplete"],
        answerIndex: 0,
        meaning: "brief and clear"
      },
      {
        word: "derives",
        phrase: "the word derives from Latin",
        choices: ["comes from", "destroys", "hides", "replaces"],
        answerIndex: 0,
        meaning: "gets or comes from"
      },
      {
        word: "distinct",
        phrase: "two distinct colors",
        choices: ["clearly different", "identical", "blended", "faded"],
        answerIndex: 0,
        meaning: "clearly different"
      },
      {
        word: "diverse",
        phrase: "a diverse group of students",
        choices: ["varied", "identical", "small", "quiet"],
        answerIndex: 0,
        meaning: "varied; different"
      },
      {
        word: "frequent",
        phrase: "a frequent visitor",
        choices: ["happening often", "happening rarely", "happening once", "happening never"],
        answerIndex: 0,
        meaning: "happening often"
      },
      {
        word: "frivolous",
        phrase: "a frivolous excuse",
        choices: ["not serious", "very serious", "important", "urgent"],
        answerIndex: 0,
        meaning: "not serious; unimportant"
      },
      {
        word: "gradual",
        phrase: "a gradual change",
        choices: ["slow, little by little", "sudden", "instant", "reversed"],
        answerIndex: 0,
        meaning: "happening slowly, little by little"
      },
      {
        word: "implied",
        phrase: "she implied she was upset",
        choices: ["suggested without saying directly", "stated clearly", "denied", "shouted"],
        answerIndex: 0,
        meaning: "suggested without directly saying"
      },
      {
        word: "indifferent",
        phrase: "he seemed indifferent to the outcome",
        choices: ["unconcerned", "excited", "furious", "devoted"],
        answerIndex: 0,
        meaning: "unconcerned; not interested"
      },
      {
        word: "inhibit",
        phrase: "fear can inhibit progress",
        choices: ["hold back", "speed up", "support", "celebrate"],
        answerIndex: 0,
        meaning: "restrain; hold back"
      },
      {
        word: "innovative",
        phrase: "an innovative invention",
        choices: ["new and original", "outdated", "copied", "broken"],
        answerIndex: 0,
        meaning: "new; original"
      },
      {
        word: "interpret",
        phrase: "interpret the poem's meaning",
        choices: ["explain the meaning of", "memorize", "ignore", "rewrite"],
        answerIndex: 0,
        meaning: "understand or explain the meaning"
      },
      {
        word: "legitimate",
        phrase: "a legitimate excuse",
        choices: ["valid", "fake", "silly", "rude"],
        answerIndex: 0,
        meaning: "valid; genuine"
      },
      {
        word: "meticulous",
        phrase: "meticulous notes",
        choices: ["extremely careful", "careless", "messy", "quick"],
        answerIndex: 0,
        meaning: "extremely careful"
      },
      {
        word: "objective",
        phrase: "an objective report",
        choices: ["unbiased", "one-sided", "emotional", "exaggerated"],
        answerIndex: 0,
        meaning: "unbiased; based on facts"
      },
      {
        word: "postpone",
        phrase: "postpone the meeting",
        choices: ["delay until later", "start immediately", "cancel forever", "speed up"],
        answerIndex: 0,
        meaning: "delay until later"
      },
      {
        word: "prominent",
        phrase: "a prominent landmark",
        choices: ["noticeable", "hidden", "tiny", "forgettable"],
        answerIndex: 0,
        meaning: "noticeable; important"
      },
      {
        word: "prospect",
        phrase: "the prospect of a new job",
        choices: ["possibility", "certainty", "memory", "mistake"],
        answerIndex: 0,
        meaning: "possibility"
      },
      {
        word: "recede",
        phrase: "the floodwaters began to recede",
        choices: ["move back", "rise higher", "freeze", "boil"],
        answerIndex: 0,
        meaning: "move back or away"
      },
      {
        word: "skeptical",
        phrase: "she was skeptical of the claim",
        choices: ["doubtful", "trusting", "excited", "careless"],
        answerIndex: 0,
        meaning: "doubtful"
      },
      {
        word: "tentative",
        phrase: "a tentative plan",
        choices: ["uncertain; not final", "final and fixed", "impossible", "forgotten"],
        answerIndex: 0,
        meaning: "uncertain; not final"
      }
    ]
  }
];
