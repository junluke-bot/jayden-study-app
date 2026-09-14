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
        choices: ["avoid", "confront", "greet", "repeat"],
        answerIndex: 0,
        meaning: "to avoid or escape from, often by cleverness"
      },
      {
        word: "courteous",
        phrase: "a courteous greeting",
        choices: ["respectful", "impolite", "quiet", "anxious"],
        answerIndex: 0,
        meaning: "polite and considerate toward others"
      },
      {
        word: "perish",
        phrase: "many plants perish in winter",
        choices: ["pass away", "flourish", "blossom", "prosper"],
        answerIndex: 0,
        meaning: "to die or come to an end"
      },
      {
        word: "immense",
        phrase: "an immense mountain",
        choices: ["massive", "minuscule", "slender", "typical"],
        answerIndex: 0,
        meaning: "extremely large; huge"
      },
      {
        word: "astound",
        phrase: "the magic trick will astound you",
        choices: ["astonish", "weary", "irritate", "fatigue"],
        answerIndex: 0,
        meaning: "to amaze or shock with surprise"
      },
      {
        word: "feeble",
        phrase: "a feeble excuse",
        choices: ["frail", "sturdy", "brilliant", "amusing"],
        answerIndex: 0,
        meaning: "weak; lacking strength or effectiveness"
      },
      {
        word: "withdraw",
        phrase: "to withdraw from the race",
        choices: ["retreat", "persist", "triumph", "begin"],
        answerIndex: 0,
        meaning: "to remove oneself from something, or take back"
      },
      {
        word: "industrious",
        phrase: "an industrious worker",
        choices: ["diligent", "idle", "absent-minded", "sloppy"],
        answerIndex: 0,
        meaning: "hardworking and diligent"
      },
      {
        word: "saunter",
        phrase: "to saunter down the street",
        choices: ["amble", "sprint", "conceal", "leap"],
        answerIndex: 0,
        meaning: "to walk in a slow, relaxed manner"
      },
      {
        word: "sluggish",
        phrase: "a sluggish turtle",
        choices: ["lethargic", "speedy", "noisy", "famished"],
        answerIndex: 0,
        meaning: "slow-moving; lacking energy"
      },
      {
        word: "exasperate",
        phrase: "his jokes exasperate her",
        choices: ["irritate", "delight", "soothe", "entertain"],
        answerIndex: 0,
        meaning: "to irritate or annoy intensely"
      },
      {
        word: "obsolete",
        phrase: "an obsolete computer",
        choices: ["antiquated", "current", "trendy", "costly"],
        answerIndex: 0,
        meaning: "no longer in use; outdated"
      },
      {
        word: "deprive",
        phrase: "to deprive someone of sleep",
        choices: ["withhold", "grant", "distribute", "present"],
        answerIndex: 0,
        meaning: "to take something away from someone"
      },
      {
        word: "nonchalant",
        phrase: "a nonchalant shrug",
        choices: ["indifferent", "anxious", "thrilled", "furious"],
        answerIndex: 0,
        meaning: "calm and casual; unconcerned"
      },
      {
        word: "exult",
        phrase: "to exult in victory",
        choices: ["celebrate", "grieve", "fret", "gripe"],
        answerIndex: 0,
        meaning: "to show great joy or triumph"
      },
      {
        word: "sparse",
        phrase: "a sparse crowd",
        choices: ["meager", "packed", "jolly", "noisy"],
        answerIndex: 0,
        meaning: "thinly spread or scattered; not dense"
      },
      {
        word: "taunt",
        phrase: "to taunt a rival",
        choices: ["tease", "compliment", "assist", "disregard"],
        answerIndex: 0,
        meaning: "to mock or provoke with insults"
      },
      {
        word: "hearty",
        phrase: "a hearty laugh",
        choices: ["robust", "feeble", "hushed", "gloomy"],
        answerIndex: 0,
        meaning: "warm, enthusiastic, and full of energy"
      },
      {
        word: "suspend",
        phrase: "to suspend the game",
        choices: ["halt temporarily", "resume", "complete", "commence"],
        answerIndex: 0,
        meaning: "to stop something temporarily"
      },
      {
        word: "solitary",
        phrase: "a solitary walk",
        choices: ["isolated", "packed", "clamorous", "hectic"],
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
        choices: ["do away with", "establish", "disregard", "debate"],
        answerIndex: 0,
        meaning: "to officially end or put a stop to something, especially a law"
      },
      {
        word: "absurd",
        phrase: "an absurd idea",
        choices: ["preposterous", "logical", "solemn", "dull"],
        answerIndex: 0,
        meaning: "completely unreasonable or silly"
      },
      {
        word: "abuse",
        phrase: "to abuse a privilege",
        choices: ["mistreat", "safeguard", "distribute", "overlook"],
        answerIndex: 0,
        meaning: "to use something wrongly or harmfully"
      },
      {
        word: "access",
        phrase: "to access the files",
        choices: ["get into", "obstruct", "misplace", "conceal"],
        answerIndex: 0,
        meaning: "the means or ability to reach or use something"
      },
      {
        word: "accomplish",
        phrase: "to accomplish a goal",
        choices: ["fulfill", "quit", "overlook", "postpone"],
        answerIndex: 0,
        meaning: "to succeed in finishing something"
      },
      {
        word: "achievement",
        phrase: "a proud achievement",
        choices: ["triumph", "defeat", "error", "chore"],
        answerIndex: 0,
        meaning: "something successfully done through effort"
      },
      {
        word: "aggressive",
        phrase: "an aggressive dog",
        choices: ["combative", "mild", "peaceful", "kind"],
        answerIndex: 0,
        meaning: "ready to attack or act with force"
      },
      {
        word: "alternate",
        phrase: "to alternate between tasks",
        choices: ["rotate", "duplicate", "disregard", "merge"],
        answerIndex: 0,
        meaning: "to take turns doing one thing, then another"
      },
      {
        word: "altitude",
        phrase: "flying at a high altitude",
        choices: ["elevation", "pace", "mass", "depth"],
        answerIndex: 0,
        meaning: "the height of something above sea level"
      },
      {
        word: "antagonist",
        phrase: "the story's antagonist",
        choices: ["adversary", "protagonist", "storyteller", "companion"],
        answerIndex: 0,
        meaning: "a person who opposes the main character"
      },
      {
        word: "antonym",
        phrase: "find the antonym for hot",
        choices: ["contrasting word", "synonym", "rhyme", "invented word"],
        answerIndex: 0,
        meaning: "a word that means the opposite of another word"
      },
      {
        word: "anxious",
        phrase: "feeling anxious before the test",
        choices: ["uneasy", "relaxed", "thrilled", "indifferent"],
        answerIndex: 0,
        meaning: "feeling nervous or worried"
      },
      {
        word: "apparent",
        phrase: "it was apparent that he was tired",
        choices: ["evident", "concealed", "untrue", "puzzling"],
        answerIndex: 0,
        meaning: "clear and easy to see or understand"
      },
      {
        word: "approximate",
        phrase: "an approximate answer",
        choices: ["rough", "precise", "incorrect", "conclusive"],
        answerIndex: 0,
        meaning: "close to the exact number or amount, but not precise"
      },
      {
        word: "aroma",
        phrase: "the aroma of fresh bread",
        choices: ["fragrance", "noise", "flavor", "feel"],
        answerIndex: 0,
        meaning: "a pleasant or noticeable smell"
      },
      {
        word: "assume",
        phrase: "to assume he was right",
        choices: ["suppose", "verify", "refute", "disregard"],
        answerIndex: 0,
        meaning: "to think something is true without proof"
      },
      {
        word: "available",
        phrase: "tickets are available",
        choices: ["accessible", "unavailable", "concealed", "damaged"],
        answerIndex: 0,
        meaning: "able to be used or obtained"
      },
      {
        word: "avalanche",
        phrase: "an avalanche of snow",
        choices: ["snowslide", "gust", "pond", "murmur"],
        answerIndex: 0,
        meaning: "a large mass of snow, ice, and rock sliding down a mountain"
      },
      {
        word: "banquet",
        phrase: "a wedding banquet",
        choices: ["grand meal", "bite", "starvation", "rest"],
        answerIndex: 0,
        meaning: "a large, formal meal for many people"
      },
      {
        word: "beverage",
        phrase: "a cold beverage",
        choices: ["refreshment", "treat", "sweet", "dinner"],
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
        choices: ["flavorless", "zesty", "scrumptious", "tangy"],
        answerIndex: 0,
        meaning: "lacking strong flavor; plain and dull"
      },
      {
        word: "blizzard",
        phrase: "caught in a blizzard",
        choices: ["whiteout", "heat wave", "gentle wind", "dry spell"],
        answerIndex: 0,
        meaning: "a severe snowstorm with strong winds"
      },
      {
        word: "budge",
        phrase: "the rock wouldn't budge",
        choices: ["shift", "shrivel", "expand", "vanish"],
        answerIndex: 0,
        meaning: "to move slightly, especially when pushed"
      },
      {
        word: "bungle",
        phrase: "to bungle the job",
        choices: ["fumble", "master", "organize", "complete"],
        answerIndex: 0,
        meaning: "to do something badly or clumsily"
      },
      {
        word: "cautiously",
        phrase: "she walked cautiously",
        choices: ["warily", "carelessly", "hastily", "noisily"],
        answerIndex: 0,
        meaning: "with care, to avoid danger or mistakes"
      },
      {
        word: "challenge",
        phrase: "a math challenge",
        choices: ["trial", "prize", "break", "hobby"],
        answerIndex: 0,
        meaning: "something that tests one's abilities; a difficult task"
      },
      {
        word: "character",
        phrase: "the story's main character",
        choices: ["persona", "location", "conclusion", "heading"],
        answerIndex: 0,
        meaning: "a person portrayed in a story"
      },
      {
        word: "combine",
        phrase: "to combine two ingredients",
        choices: ["merge", "divide", "extract", "conceal"],
        answerIndex: 0,
        meaning: "to join or merge two or more things together"
      },
      {
        word: "companion",
        phrase: "a loyal companion",
        choices: ["comrade", "outsider", "foe", "competitor"],
        answerIndex: 0,
        meaning: "a person who spends time with or accompanies another"
      },
      {
        word: "compassion",
        phrase: "showing compassion for others",
        choices: ["empathy", "harshness", "rage", "envy"],
        answerIndex: 0,
        meaning: "a feeling of caring about others' suffering"
      },
      {
        word: "compensate",
        phrase: "to compensate for the loss",
        choices: ["reimburse", "disregard", "aggravate", "trigger"],
        answerIndex: 0,
        meaning: "to make up for a loss, often with payment"
      },
      {
        word: "comply",
        phrase: "to comply with the rules",
        choices: ["conform", "violate", "disregard", "challenge"],
        answerIndex: 0,
        meaning: "to act according to a rule or request"
      },
      {
        word: "compose",
        phrase: "to compose a song",
        choices: ["write", "demolish", "duplicate", "erase"],
        answerIndex: 0,
        meaning: "to write or create something, like music or a letter"
      },
      {
        word: "concept",
        phrase: "a difficult concept",
        choices: ["notion", "item", "noise", "location"],
        answerIndex: 0,
        meaning: "an idea or general notion"
      },
      {
        word: "confident",
        phrase: "feeling confident about the test",
        choices: ["self-assured", "jittery", "unsure", "bewildered"],
        answerIndex: 0,
        meaning: "feeling sure of oneself and one's abilities"
      },
      {
        word: "convert",
        phrase: "to convert the garage into a room",
        choices: ["transform", "wreck", "trade", "disregard"],
        answerIndex: 0,
        meaning: "to change something into a different form"
      },
      {
        word: "course",
        phrase: "changed course",
        choices: ["route", "finale", "blunder", "dispute"],
        answerIndex: 0,
        meaning: "a direction taken, or a plan of action"
      },
      {
        word: "crave",
        phrase: "to crave chocolate",
        choices: ["long for", "detest", "overlook", "shun"],
        answerIndex: 0,
        meaning: "to have a powerful wish for something"
      },
      {
        word: "debate",
        phrase: "a class debate",
        choices: ["argument", "consensus", "quiet", "tune"],
        answerIndex: 0,
        meaning: "a formal discussion of opposing views"
      },
      {
        word: "decline",
        phrase: "to decline an invitation",
        choices: ["turn down", "welcome", "demand", "overlook"],
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
        choices: ["commit", "squander", "evade", "neglect"],
        answerIndex: 0,
        meaning: "to give time or effort to a purpose"
      },
      {
        word: "detect",
        phrase: "to detect a problem",
        choices: ["discover", "overlook", "create", "conceal"],
        answerIndex: 0,
        meaning: "to discover or notice something"
      },
      {
        word: "dictate",
        phrase: "to dictate the rules",
        choices: ["order", "inquire", "murmur", "plead"],
        answerIndex: 0,
        meaning: "to state or give orders with authority"
      },
      {
        word: "document",
        phrase: "to document the results",
        choices: ["log", "overlook", "conceal", "demolish"],
        answerIndex: 0,
        meaning: "to record details in writing"
      },
      {
        word: "duplicate",
        phrase: "to duplicate the key",
        choices: ["replicate", "shatter", "misplace", "conceal"],
        answerIndex: 0,
        meaning: "to make an exact copy of something"
      },
      {
        word: "edible",
        phrase: "edible mushrooms",
        choices: ["fit to eat", "toxic", "ornamental", "costly"],
        answerIndex: 0,
        meaning: "fit or safe to be eaten"
      },
      {
        word: "endanger",
        phrase: "to endanger the animals",
        choices: ["threaten", "shield", "assist", "rescue"],
        answerIndex: 0,
        meaning: "to put something in danger"
      },
      {
        word: "escalate",
        phrase: "the conflict began to escalate",
        choices: ["intensify", "diminish", "halt", "conclude"],
        answerIndex: 0,
        meaning: "to become greater or more serious"
      },
      {
        word: "excavate",
        phrase: "to excavate the ruins",
        choices: ["unearth", "entomb", "construct", "decorate"],
        answerIndex: 0,
        meaning: "to dig up earth to uncover something buried"
      },
      {
        word: "exert",
        phrase: "to exert herself during practice",
        choices: ["apply effort", "recuperate", "unwind", "disregard"],
        answerIndex: 0,
        meaning: "to make a physical or mental effort"
      },
      {
        word: "exhibit",
        phrase: "to exhibit artwork",
        choices: ["showcase", "conceal", "wreck", "trade"],
        answerIndex: 0,
        meaning: "to publicly show something"
      },
      {
        word: "frigid",
        phrase: "frigid temperatures",
        choices: ["icy", "scorching", "temperate", "toasty"],
        answerIndex: 0,
        meaning: "extremely cold"
      },
      {
        word: "gigantic",
        phrase: "a gigantic building",
        choices: ["colossal", "minuscule", "medium", "slim"],
        answerIndex: 0,
        meaning: "extremely large; huge"
      },
      {
        word: "gorge",
        phrase: "a deep gorge",
        choices: ["ravine", "mound", "pond", "meadow"],
        answerIndex: 0,
        meaning: "a deep, narrow valley, often with a river"
      },
      {
        word: "guardian",
        phrase: "his legal guardian",
        choices: ["caretaker", "outsider", "opponent", "pupil"],
        answerIndex: 0,
        meaning: "a person who protects or takes care of someone"
      },
      {
        word: "hazy",
        phrase: "a hazy morning",
        choices: ["misty", "crisp", "cloudless", "vivid"],
        answerIndex: 0,
        meaning: "slightly foggy or unclear"
      },
      {
        word: "homonym",
        phrase: "bark can be a tricky homonym",
        choices: ["sound-alike term", "antonym", "rhyme", "invented term"],
        answerIndex: 0,
        meaning: "a word that sounds like another but has a different meaning"
      },
      {
        word: "identical",
        phrase: "identical twins",
        choices: ["indistinguishable", "dissimilar", "somewhat alike", "unconnected"],
        answerIndex: 0,
        meaning: "exactly the same in every way"
      },
      {
        word: "illuminate",
        phrase: "to illuminate the room",
        choices: ["light up", "dim", "chill", "heat"],
        answerIndex: 0,
        meaning: "to light up or make bright"
      },
      {
        word: "impressive",
        phrase: "an impressive performance",
        choices: ["striking", "unremarkable", "dull", "unmemorable"],
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
        choices: ["autonomous", "reliant", "bewildered", "reckless"],
        answerIndex: 0,
        meaning: "not relying on others; self-sufficient"
      },
      {
        word: "intense",
        phrase: "intense heat",
        choices: ["fierce", "moderate", "feeble", "soft"],
        answerIndex: 0,
        meaning: "very strong or extreme in degree"
      },
      {
        word: "intercept",
        phrase: "to intercept the pass",
        choices: ["cut off", "permit", "hand over", "disregard"],
        answerIndex: 0,
        meaning: "to stop or catch something before it reaches its destination"
      },
      {
        word: "jubilation",
        phrase: "shouts of jubilation",
        choices: ["elation", "sorrow", "fury", "tedium"],
        answerIndex: 0,
        meaning: "a feeling of great happiness and triumph"
      },
      {
        word: "kin",
        phrase: "his closest kin",
        choices: ["relatives", "outsiders", "colleagues", "peers"],
        answerIndex: 0,
        meaning: "one's family or relatives"
      },
      {
        word: "luxurious",
        phrase: "a luxurious hotel",
        choices: ["opulent", "simple", "inexpensive", "damaged"],
        answerIndex: 0,
        meaning: "extremely comfortable and elegant"
      },
      {
        word: "major",
        phrase: "a major decision",
        choices: ["considerable", "trivial", "absurd", "brief"],
        answerIndex: 0,
        meaning: "greater in importance, size, or seriousness"
      },
      {
        word: "miniature",
        phrase: "a miniature model",
        choices: ["pint-sized", "massive", "typical", "lofty"],
        answerIndex: 0,
        meaning: "a very small version of something"
      },
      {
        word: "minor",
        phrase: "a minor injury",
        choices: ["slight", "serious", "deadly", "significant"],
        answerIndex: 0,
        meaning: "small in size, importance, or seriousness"
      },
      {
        word: "mischief",
        phrase: "full of mischief",
        choices: ["trouble-making", "kindliness", "dullness", "gloom"],
        answerIndex: 0,
        meaning: "playful behavior that causes minor trouble"
      },
      {
        word: "monarch",
        phrase: "the reigning monarch",
        choices: ["sovereign", "attendant", "warrior", "laborer"],
        answerIndex: 0,
        meaning: "a king, queen, or other ruler"
      },
      {
        word: "moral",
        phrase: "the moral of the story",
        choices: ["teaching point", "heading", "persona", "backdrop"],
        answerIndex: 0,
        meaning: "a lesson about right and wrong"
      },
      {
        word: "myth",
        phrase: "an ancient myth",
        choices: ["folktale", "truth", "instructions", "note"],
        answerIndex: 0,
        meaning: "a traditional story, especially about gods or heroes"
      },
      {
        word: "narrator",
        phrase: "the story's narrator",
        choices: ["teller of the tale", "antagonist", "artist", "reviser"],
        answerIndex: 0,
        meaning: "the person who tells the story"
      },
      {
        word: "navigate",
        phrase: "to navigate the ship",
        choices: ["guide", "collide", "mend", "construct"],
        answerIndex: 0,
        meaning: "to plan and direct the course of travel"
      },
      {
        word: "negative",
        phrase: "a negative attitude",
        choices: ["pessimistic", "favorable", "upbeat", "optimistic"],
        answerIndex: 0,
        meaning: "expressing disapproval or unfavorable views"
      },
      {
        word: "numerous",
        phrase: "numerous mistakes",
        choices: ["countless", "scarce", "none", "single"],
        answerIndex: 0,
        meaning: "existing in great numbers"
      },
      {
        word: "oasis",
        phrase: "an oasis in the desert",
        choices: ["refuge", "sand hill", "barren land", "precipice"],
        answerIndex: 0,
        meaning: "a fertile spot in the desert with water; a pleasant retreat"
      },
      {
        word: "occasion",
        phrase: "a special occasion",
        choices: ["happening", "blunder", "quarrel", "task"],
        answerIndex: 0,
        meaning: "a particular time or event"
      },
      {
        word: "overthrow",
        phrase: "to overthrow the government",
        choices: ["oust", "back", "vote in", "commend"],
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
        choices: ["excuse", "penalize", "blame", "detain"],
        answerIndex: 0,
        meaning: "to forgive someone for a fault or crime"
      },
      {
        word: "pasture",
        phrase: "cows grazing in the pasture",
        choices: ["grazing field", "roadway", "shoreline", "precipice"],
        answerIndex: 0,
        meaning: "a grassy field where animals graze"
      },
      {
        word: "pedestrian",
        phrase: "a pedestrian crossing the street",
        choices: ["person on foot", "motorist", "bike rider", "rider"],
        answerIndex: 0,
        meaning: "a person traveling on foot"
      },
      {
        word: "petrify",
        phrase: "the news would petrify her",
        choices: ["horrify", "please", "tire", "soothe"],
        answerIndex: 0,
        meaning: "to make someone extremely afraid"
      },
      {
        word: "portable",
        phrase: "a portable radio",
        choices: ["transportable", "bulky", "stationary", "pricey"],
        answerIndex: 0,
        meaning: "able to be easily carried or moved"
      },
      {
        word: "prefix",
        phrase: "un- is a common prefix",
        choices: ["beginning word part", "ending word part", "complete word", "full phrase"],
        answerIndex: 0,
        meaning: "a word part added to the beginning of a word"
      },
      {
        word: "preserve",
        phrase: "to preserve the forest",
        choices: ["safeguard", "ruin", "trade away", "disregard"],
        answerIndex: 0,
        meaning: "to keep something safe or in its original state"
      },
      {
        word: "protagonist",
        phrase: "the story's protagonist",
        choices: ["main character", "antagonist", "storyteller", "minor role"],
        answerIndex: 0,
        meaning: "the main character in a story"
      },
      {
        word: "provide",
        phrase: "to provide food",
        choices: ["furnish", "seize", "conceal", "squander"],
        answerIndex: 0,
        meaning: "to give or supply something needed"
      },
      {
        word: "purchase",
        phrase: "to purchase a ticket",
        choices: ["acquire", "vend", "misplace", "locate"],
        answerIndex: 0,
        meaning: "to obtain something by paying for it"
      },
      {
        word: "realistic",
        phrase: "a realistic painting",
        choices: ["true to life", "animated", "fuzzy", "conceptual"],
        answerIndex: 0,
        meaning: "representing things as they really look or are"
      },
      {
        word: "reassure",
        phrase: "to reassure a worried friend",
        choices: ["console", "alarm", "perplex", "disregard"],
        answerIndex: 0,
        meaning: "to say or do something to remove someone's doubts or fears"
      },
      {
        word: "reign",
        phrase: "the king's reign",
        choices: ["rule of a monarch", "penalty", "combat", "voyage"],
        answerIndex: 0,
        meaning: "the period during which a monarch rules"
      },
      {
        word: "reliable",
        phrase: "a reliable friend",
        choices: ["trustworthy", "erratic", "negligent", "deceitful"],
        answerIndex: 0,
        meaning: "consistently good and able to be trusted"
      },
      {
        word: "require",
        phrase: "to require patience and skill",
        choices: ["demand", "shun", "squander", "overlook"],
        answerIndex: 0,
        meaning: "to need something for a particular purpose"
      },
      {
        word: "resemble",
        phrase: "many children resemble their parents",
        choices: ["take after", "disregard", "evade", "overlook"],
        answerIndex: 0,
        meaning: "to look or be like someone or something"
      },
      {
        word: "retain",
        phrase: "to retain information",
        choices: ["hold onto", "misplace", "overlook", "erase"],
        answerIndex: 0,
        meaning: "to continue to have or remember something"
      },
      {
        word: "retire",
        phrase: "to retire from work",
        choices: ["step down", "commence", "enlist", "progress"],
        answerIndex: 0,
        meaning: "to leave one's job, typically because of age"
      },
      {
        word: "revert",
        phrase: "to revert to old habits",
        choices: ["go back", "progress", "upgrade", "overlook"],
        answerIndex: 0,
        meaning: "to go back to a former state or habit"
      },
      {
        word: "route",
        phrase: "the fastest route",
        choices: ["course", "holdup", "error", "quarrel"],
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
        choices: ["hardly ever", "often", "forever", "continually"],
        answerIndex: 0,
        meaning: "not often; rarely"
      },
      {
        word: "senseless",
        phrase: "a senseless act",
        choices: ["meaningless", "sensible", "useful", "prudent"],
        answerIndex: 0,
        meaning: "having no meaning or reasonable purpose"
      },
      {
        word: "sever",
        phrase: "to sever the rope",
        choices: ["cut off", "connect", "mend", "fasten"],
        answerIndex: 0,
        meaning: "to cut off or separate something"
      },
      {
        word: "slither",
        phrase: "the snake began to slither",
        choices: ["glide", "hop", "dash", "soar"],
        answerIndex: 0,
        meaning: "to move by sliding along the ground like a snake"
      },
      {
        word: "soar",
        phrase: "the eagle began to soar",
        choices: ["climb high", "descend", "creep", "stiffen"],
        answerIndex: 0,
        meaning: "to fly or rise high into the air"
      },
      {
        word: "solo",
        phrase: "a solo performance",
        choices: ["unaccompanied", "jointly", "noisily", "silently"],
        answerIndex: 0,
        meaning: "done alone, without others"
      },
      {
        word: "spurt",
        phrase: "a sudden spurt of energy",
        choices: ["surge", "shortage", "postponement", "drop"],
        answerIndex: 0,
        meaning: "a sudden brief burst of activity or growth"
      },
      {
        word: "strategy",
        phrase: "a winning strategy",
        choices: ["tactic", "blunder", "dispute", "hunch"],
        answerIndex: 0,
        meaning: "a careful plan for achieving a goal"
      },
      {
        word: "suffix",
        phrase: "-ful is a common suffix",
        choices: ["ending word part", "beginning word part", "complete word", "full phrase"],
        answerIndex: 0,
        meaning: "a word part added to the end of a word"
      },
      {
        word: "suffocate",
        phrase: "to suffocate without air",
        choices: ["smother", "inhale", "rest", "sprint"],
        answerIndex: 0,
        meaning: "to have trouble breathing, or to die from lack of air"
      },
      {
        word: "summit",
        phrase: "the mountain's summit",
        choices: ["highest point", "foot", "slope", "lowland"],
        answerIndex: 0,
        meaning: "the highest point of a mountain"
      },
      {
        word: "synonym",
        phrase: "happy and glad form a synonym pair",
        choices: ["word with a similar meaning", "antonym", "rhyme", "invented word"],
        answerIndex: 0,
        meaning: "a word that means the same as another word"
      },
      {
        word: "talon",
        phrase: "the eagle's talon",
        choices: ["sharp nail", "plume", "bill", "limb"],
        answerIndex: 0,
        meaning: "a sharp claw, especially of a bird of prey"
      },
      {
        word: "thrifty",
        phrase: "a thrifty shopper",
        choices: ["economical", "extravagant", "reckless", "lavish"],
        answerIndex: 0,
        meaning: "careful about spending money; not wasteful"
      },
      {
        word: "translate",
        phrase: "to translate the book",
        choices: ["convert language", "revise", "condense", "depict"],
        answerIndex: 0,
        meaning: "to change words from one language into another"
      },
      {
        word: "tropical",
        phrase: "a tropical island",
        choices: ["steamy", "frosty", "parched", "stony"],
        answerIndex: 0,
        meaning: "relating to the hot, humid regions near the equator"
      },
      {
        word: "visible",
        phrase: "barely visible in the fog",
        choices: ["in view", "concealed", "silent", "drab"],
        answerIndex: 0,
        meaning: "able to be seen"
      },
      {
        word: "visual",
        phrase: "a visual aid",
        choices: ["relating to sight", "relating to hearing", "verbal", "in writing"],
        answerIndex: 0,
        meaning: "relating to seeing or sight"
      },
      {
        word: "vivid",
        phrase: "a vivid memory",
        choices: ["vibrant", "drab", "washed-out", "tedious"],
        answerIndex: 0,
        meaning: "producing powerful, clear images in the mind; brightly colored"
      },
      {
        word: "wilderness",
        phrase: "lost in the wilderness",
        choices: ["untamed land", "metropolis", "reading room", "shopping center"],
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
        choices: ["satisfactory", "superb", "inadequate", "unattainable"],
        answerIndex: 0,
        meaning: "sufficient; acceptable"
      },
      {
        word: "adorn",
        phrase: "he adorned his room with posters",
        choices: ["embellish", "strip bare", "tidy", "harm"],
        answerIndex: 0,
        meaning: "to decorate"
      },
      {
        word: "adversity",
        phrase: "her childhood was full of adversity",
        choices: ["misfortune", "comfort", "amusement", "tedium"],
        answerIndex: 0,
        meaning: "misfortune; challenging circumstances"
      },
      {
        word: "aesthetic",
        phrase: "the shoes have little aesthetic value",
        choices: ["relating to beauty", "monetary", "clinical", "judicial"],
        answerIndex: 0,
        meaning: "relating to art or beauty"
      },
      {
        word: "aggravate",
        phrase: "passing notes aggravated their teacher",
        choices: ["irk", "delight", "pacify", "assist"],
        answerIndex: 0,
        meaning: "annoy; make worse"
      },
      {
        word: "alleviate",
        phrase: "ways to alleviate stress",
        choices: ["relieve", "intensify", "provoke", "disregard"],
        answerIndex: 0,
        meaning: "make less severe"
      },
      {
        word: "amateur",
        phrase: "an amateur photographer",
        choices: ["novice", "veteran", "renowned", "specialist"],
        answerIndex: 0,
        meaning: "nonprofessional; unskilled"
      },
      {
        word: "ambiance",
        phrase: "a luxurious ambiance",
        choices: ["mood of a place", "instructions", "tune", "bill"],
        answerIndex: 0,
        meaning: "the atmosphere or mood of a place"
      },
      {
        word: "ambiguous",
        phrase: "the painting's ambiguous smile",
        choices: ["vague", "plain", "upbeat", "irate"],
        answerIndex: 0,
        meaning: "unclear; uncertain"
      },
      {
        word: "animosity",
        phrase: "animosity between the director and the actor",
        choices: ["resentment", "affection", "interest", "admiration"],
        answerIndex: 0,
        meaning: "intense hostility"
      },
      {
        word: "anomaly",
        phrase: "an anomaly in the blood test results",
        choices: ["irregularity", "typical outcome", "upgrade", "standard test"],
        answerIndex: 0,
        meaning: "something abnormal"
      },
      {
        word: "arid",
        phrase: "the desert is so arid",
        choices: ["parched", "moist", "lush", "frigid"],
        answerIndex: 0,
        meaning: "dry; barren"
      },
      {
        word: "articulate",
        phrase: "how articulate the student was",
        choices: ["eloquent", "muddled", "speechless", "impolite"],
        answerIndex: 0,
        meaning: "able to speak fluently and logically"
      },
      {
        word: "authentic",
        phrase: "an authentic designer bag",
        choices: ["legitimate", "counterfeit", "inexpensive", "loaned"],
        answerIndex: 0,
        meaning: "genuine"
      },
      {
        word: "bemuse",
        phrase: "bemused by the confusing evidence",
        choices: ["baffle", "explain", "please", "tire"],
        answerIndex: 0,
        meaning: "confuse, bewilder"
      },
      {
        word: "bewilder",
        phrase: "bewildered by Shakespeare's language",
        choices: ["perplex", "entertain", "comfort", "persuade"],
        answerIndex: 0,
        meaning: "confuse severely"
      },
      {
        word: "blend",
        phrase: "blend the ingredients completely",
        choices: ["combine", "split", "scorch", "gauge"],
        answerIndex: 0,
        meaning: "mix together"
      },
      {
        word: "bliss",
        phrase: "a cozy chair and a good book is bliss",
        choices: ["euphoria", "despair", "monotony", "wrath"],
        answerIndex: 0,
        meaning: "total happiness"
      },
      {
        word: "boisterous",
        phrase: "his boisterous laughter",
        choices: ["rowdy", "hushed", "mild", "timid"],
        answerIndex: 0,
        meaning: "energetic; noisy"
      },
      {
        word: "brandish",
        phrase: "she brandished her sword",
        choices: ["wield", "conceal", "let go of", "shine"],
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
        choices: ["surrender", "resist", "overlook", "rejoice"],
        answerIndex: 0,
        meaning: "surrender; to give in"
      },
      {
        word: "chasm",
        phrase: "a chasm hundreds of feet deep",
        choices: ["deep divide", "mound", "crossing", "small pool"],
        answerIndex: 0,
        meaning: "a deep divide"
      },
      {
        word: "chronological",
        phrase: "read the books in chronological order",
        choices: ["in sequence by date", "ABC order", "scrambled order", "backwards order"],
        answerIndex: 0,
        meaning: "in the order in which events occurred"
      },
      {
        word: "circumvent",
        phrase: "circumvent the dangerous terrain",
        choices: ["get around", "face directly", "chart", "aggravate"],
        answerIndex: 0,
        meaning: "find a way around"
      },
      {
        word: "collaborate",
        phrase: "fun to collaborate with others",
        choices: ["team up", "rival", "quarrel", "separate"],
        answerIndex: 0,
        meaning: "work together"
      },
      {
        word: "colleague",
        phrase: "her friendly colleagues",
        choices: ["workmate", "supervisor", "client", "outsider"],
        answerIndex: 0,
        meaning: "someone a person works with"
      },
      {
        word: "comprehend",
        phrase: "couldn't comprehend why",
        choices: ["grasp", "disregard", "overlook", "question"],
        answerIndex: 0,
        meaning: "understand"
      },
      {
        word: "conjecture",
        phrase: "based on conjecture, not evidence",
        choices: ["speculation", "evidence", "rule", "certainty"],
        answerIndex: 0,
        meaning: "idea or opinion without evidence"
      },
      {
        word: "conservative",
        phrase: "his conservative style of dressing",
        choices: ["cautious", "daring", "showy", "reckless"],
        answerIndex: 0,
        meaning: "traditional; cautious"
      },
      {
        word: "contend",
        phrase: "Leticia contended she was the best choice",
        choices: ["assert", "concur", "refute", "yield"],
        answerIndex: 0,
        meaning: "argue; assert"
      },
      {
        word: "courtesy",
        phrase: "had the courtesy to tell him",
        choices: ["civility", "impoliteness", "muteness", "bewilderment"],
        answerIndex: 0,
        meaning: "respect, politeness"
      },
      {
        word: "creed",
        phrase: "practice their creed freely",
        choices: ["doctrine", "penalty", "statute", "formula"],
        answerIndex: 0,
        meaning: "system of beliefs"
      },
      {
        word: "custom",
        phrase: "a common custom in Europe",
        choices: ["customary practice", "offense", "mishap", "blunder"],
        answerIndex: 0,
        meaning: "traditional behavior"
      },
      {
        word: "dearth",
        phrase: "the dearth of information",
        choices: ["scarcity", "plenty", "overflow", "extra supply"],
        answerIndex: 0,
        meaning: "lack"
      },
      {
        word: "debacle",
        phrase: "a major debacle for the restaurant",
        choices: ["fiasco", "triumph", "gain", "festivity"],
        answerIndex: 0,
        meaning: "disaster"
      },
      {
        word: "deduct",
        phrase: "deducted $500 from her paycheck",
        choices: ["take away", "add on", "triple", "increase"],
        answerIndex: 0,
        meaning: "take away; subtract"
      },
      {
        word: "defective",
        phrase: "returned the defective computer",
        choices: ["faulty", "functional", "brand-new", "costly"],
        answerIndex: 0,
        meaning: "not functioning"
      },
      {
        word: "delight",
        phrase: "it delighted Norah to hear the news",
        choices: ["gladden", "distress", "tire", "trouble"],
        answerIndex: 0,
        meaning: "please; pleasure"
      },
      {
        word: "demolish",
        phrase: "demolished the old mansion",
        choices: ["raze", "erect", "fix", "decorate"],
        answerIndex: 0,
        meaning: "destroy"
      },
      {
        word: "deteriorate",
        phrase: "the abandoned warehouse deteriorated quickly",
        choices: ["decline", "improve", "restore", "gleam"],
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
        choices: ["spread out", "assemble", "doze", "charge"],
        answerIndex: 0,
        meaning: "scatter"
      },
      {
        word: "durable",
        phrase: "the durable sedan",
        choices: ["sturdy", "flimsy", "pricey", "vibrant"],
        answerIndex: 0,
        meaning: "long-lasting"
      },
      {
        word: "efface",
        phrase: "the rain effaced the footsteps",
        choices: ["wipe away", "expose", "emphasize", "capture"],
        answerIndex: 0,
        meaning: "erase"
      },
      {
        word: "elation",
        phrase: "he felt an elation he had never experienced",
        choices: ["exhilaration", "grief", "dread", "rage"],
        answerIndex: 0,
        meaning: "intense joy"
      },
      {
        word: "embrace",
        phrase: "Jillian embraced the idea of a break",
        choices: ["accept warmly", "refuse", "dismiss", "delay"],
        answerIndex: 0,
        meaning: "accept enthusiastically"
      },
      {
        word: "enigma",
        phrase: "remained an enigma to her",
        choices: ["puzzle", "answer", "truth", "routine"],
        answerIndex: 0,
        meaning: "puzzle"
      },
      {
        word: "erratic",
        phrase: "New York's erratic weather",
        choices: ["inconsistent", "consistent", "dull", "calm"],
        answerIndex: 0,
        meaning: "unpredictable"
      },
      {
        word: "exalt",
        phrase: "Neil Armstrong was exalted as a hero",
        choices: ["glorify", "condemn", "overlook", "disregard"],
        answerIndex: 0,
        meaning: "praise"
      },
      {
        word: "exonerate",
        phrase: "the defendant was exonerated",
        choices: ["absolve", "found guilty", "detained", "interrogated"],
        answerIndex: 0,
        meaning: "remove guilt or blame"
      },
      {
        word: "expel",
        phrase: "expelled from the school",
        choices: ["banish", "invite", "advance", "employ"],
        answerIndex: 0,
        meaning: "remove by force"
      },
      {
        word: "extravagant",
        phrase: "the diamond chandelier was too extravagant",
        choices: ["excessive", "modest", "affordable", "basic"],
        answerIndex: 0,
        meaning: "unnecessarily fancy"
      },
      {
        word: "ferocity",
        phrase: "the mother bear's ferocity",
        choices: ["savagery", "tenderness", "timidity", "serenity"],
        answerIndex: 0,
        meaning: "fierceness"
      },
      {
        word: "fiasco",
        phrase: "a financial fiasco",
        choices: ["failure", "victory", "deal", "scheme"],
        answerIndex: 0,
        meaning: "failure, disaster"
      },
      {
        word: "flamboyant",
        phrase: "flamboyant clothing",
        choices: ["flashy", "understated", "bland", "humble"],
        answerIndex: 0,
        meaning: "attention-grabbing"
      },
      {
        word: "gaffe",
        phrase: "the actor's gaffe",
        choices: ["slip-up", "accomplishment", "praise", "honor"],
        answerIndex: 0,
        meaning: "an embarrassing mistake"
      },
      {
        word: "glitch",
        phrase: "a computer glitch",
        choices: ["hiccup", "improvement", "win", "benefit"],
        answerIndex: 0,
        meaning: "minor malfunction"
      },
      {
        word: "hoax",
        phrase: "hoaxes on April Fools' Day",
        choices: ["deception", "fact", "present", "prize"],
        answerIndex: 0,
        meaning: "trick, deception"
      },
      {
        word: "idiosyncrasy",
        phrase: "a few idiosyncrasies",
        choices: ["peculiarity", "advantage", "regulation", "skill"],
        answerIndex: 0,
        meaning: "eccentricity, quirk"
      },
      {
        word: "impeccable",
        phrase: "his impeccable manners",
        choices: ["perfect", "careless", "impolite", "mediocre"],
        answerIndex: 0,
        meaning: "faultless, perfect"
      },
      {
        word: "impertinent",
        phrase: "impertinent comments",
        choices: ["insolent", "courteous", "bashful", "gentle"],
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
        choices: ["invention", "outdated custom", "error", "regulation"],
        answerIndex: 0,
        meaning: "a novel idea or thing"
      },
      {
        word: "instigate",
        phrase: "instigated heated arguments",
        choices: ["incite", "stop", "resolve", "disregard"],
        answerIndex: 0,
        meaning: "initiate; provoke"
      },
      {
        word: "investigate",
        phrase: "investigated the claims",
        choices: ["probe", "overlook", "accept without question", "dismiss"],
        answerIndex: 0,
        meaning: "thoroughly examine"
      },
      {
        word: "ironic",
        phrase: "it was ironic that the medicine made him worse",
        choices: ["contrary to expectation", "foreseeable", "dull", "apparent"],
        answerIndex: 0,
        meaning: "different from what is expected; sarcastic"
      },
      {
        word: "laborious",
        phrase: "years of laborious training",
        choices: ["strenuous", "effortless", "speedy", "idle"],
        answerIndex: 0,
        meaning: "labor-intensive, arduous, effortful"
      },
      {
        word: "laud",
        phrase: "should laud her achievements",
        choices: ["commend", "condemn", "disregard", "ridicule"],
        answerIndex: 0,
        meaning: "praise"
      },
      {
        word: "livid",
        phrase: "the news left her livid",
        choices: ["enraged", "serene", "content", "drowsy"],
        answerIndex: 0,
        meaning: "furious"
      },
      {
        word: "lore",
        phrase: "part of our town's lore",
        choices: ["traditional knowledge", "statute", "formula", "bill"],
        answerIndex: 0,
        meaning: "mythology, stories, body of traditions"
      },
      {
        word: "loquacious",
        phrase: "so loquacious and charming",
        choices: ["chatty", "mute", "timid", "solemn"],
        answerIndex: 0,
        meaning: "talkative"
      },
      {
        word: "malice",
        phrase: "his review was motivated by malice",
        choices: ["ill will", "generosity", "interest", "delight"],
        answerIndex: 0,
        meaning: "ill will, spite"
      },
      {
        word: "medley",
        phrase: "a medley of snacks",
        choices: ["assortment", "one object", "instructions", "scarcity"],
        answerIndex: 0,
        meaning: "assortment, mixture, miscellany"
      },
      {
        word: "merit",
        phrase: "judged on the merits of their arguments",
        choices: ["worth", "look", "price", "duration"],
        answerIndex: 0,
        meaning: "worthiness, value"
      },
      {
        word: "mock",
        phrase: "mock her brother's short stature",
        choices: ["deride", "compliment", "overlook", "defend"],
        answerIndex: 0,
        meaning: "make fun of"
      },
      {
        word: "modify",
        phrase: "modified her curriculum",
        choices: ["alter", "preserve", "erase completely", "duplicate"],
        answerIndex: 0,
        meaning: "alter; change"
      },
      {
        word: "narrative",
        phrase: "Aaron's inconsistent narrative",
        choices: ["account", "quiet", "inquiry", "statute"],
        answerIndex: 0,
        meaning: "story"
      },
      {
        word: "nemesis",
        phrase: "defeat his nemesis",
        choices: ["archenemy", "ally", "mentor", "relative"],
        answerIndex: 0,
        meaning: "enemy"
      },
      {
        word: "nimble",
        phrase: "the soccer player's nimble moves",
        choices: ["quick-footed", "awkward", "sluggish", "weary"],
        answerIndex: 0,
        meaning: "quick; agile"
      },
      {
        word: "obstinate",
        phrase: "the obstinate boy would not follow instructions",
        choices: ["headstrong", "compliant", "adaptable", "inquisitive"],
        answerIndex: 0,
        meaning: "stubborn"
      },
      {
        word: "opponent",
        phrase: "her opponent Jeffrey",
        choices: ["adversary", "partner", "trainer", "supporter"],
        answerIndex: 0,
        meaning: "person or group competing against another"
      },
      {
        word: "overt",
        phrase: "his overt flirtation",
        choices: ["open", "concealed", "covert", "understated"],
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
        choices: ["deal", "dispute", "penalty", "error"],
        answerIndex: 0,
        meaning: "agreement"
      },
      {
        word: "painstaking",
        phrase: "painstaking attention to detail",
        choices: ["meticulous", "sloppy", "hasty", "idle"],
        answerIndex: 0,
        meaning: "difficult; with great effort"
      },
      {
        word: "paradox",
        phrase: "it seemed like a paradox",
        choices: ["puzzling statement", "certainty", "habit", "answer"],
        answerIndex: 0,
        meaning: "something that does not follow"
      },
      {
        word: "peril",
        phrase: "knew she was in peril",
        choices: ["hazard", "security", "ease", "tedium"],
        answerIndex: 0,
        meaning: "danger"
      },
      {
        word: "pester",
        phrase: "would constantly pester his sister",
        choices: ["bother", "assist", "soothe", "disregard"],
        answerIndex: 0,
        meaning: "annoy"
      },
      {
        word: "practical",
        phrase: "the guide was not very practical",
        choices: ["functional", "impractical", "costly", "attractive"],
        answerIndex: 0,
        meaning: "useful, logical"
      },
      {
        word: "precocious",
        phrase: "the precocious child",
        choices: ["ahead of one's age", "behind", "typical", "awkward"],
        answerIndex: 0,
        meaning: "advanced at a young age"
      },
      {
        word: "prominent",
        phrase: "the prominent guest at her party",
        choices: ["distinguished", "obscure", "dull", "reserved"],
        answerIndex: 0,
        meaning: "well-known, important"
      },
      {
        word: "prototype",
        phrase: "the prototype of the computer",
        choices: ["original design", "finished version", "defective copy", "promotion"],
        answerIndex: 0,
        meaning: "original model"
      },
      {
        word: "query",
        phrase: "various queries for the teacher",
        choices: ["inquiry", "response", "grievance", "excuse"],
        answerIndex: 0,
        meaning: "question, request"
      },
      {
        word: "rapid",
        phrase: "the most rapid land animal",
        choices: ["swift", "sluggish", "silent", "weighty"],
        answerIndex: 0,
        meaning: "fast"
      },
      {
        word: "raze",
        phrase: "the historic mansion was razed",
        choices: ["level", "construct", "renovate", "decorate"],
        answerIndex: 0,
        meaning: "destroy"
      },
      {
        word: "redundant",
        phrase: "her attempts to clarify were redundant",
        choices: ["superfluous", "vital", "lucid", "concise"],
        answerIndex: 0,
        meaning: "extra, unnecessary, duplicated"
      },
      {
        word: "remedy",
        phrase: "no known remedy to the common cold",
        choices: ["treatment", "trigger", "sign", "illness"],
        answerIndex: 0,
        meaning: "cure"
      },
      {
        word: "reprimand",
        phrase: "severely reprimanded by his parents",
        choices: ["rebuke", "compliment", "applaud", "pardon"],
        answerIndex: 0,
        meaning: "criticize, condemn"
      },
      {
        word: "retort",
        phrase: "Jane retorted with a stern critique",
        choices: ["snap back", "remain quiet", "nod along", "chuckle"],
        answerIndex: 0,
        meaning: "respond in a forceful manner"
      },
      {
        word: "rural",
        phrase: "a rural area surrounded by fields",
        choices: ["rustic", "metropolitan", "factory-filled", "seaside"],
        answerIndex: 0,
        meaning: "characteristic of the countryside"
      },
      {
        word: "sage",
        phrase: "the sage's poignant answer",
        choices: ["wise elder", "simpleton", "youngster", "outsider"],
        answerIndex: 0,
        meaning: "wise individual"
      },
      {
        word: "sarcastic",
        phrase: "he was being sarcastic about the burnt cookies",
        choices: ["snide", "genuine", "tender", "timid"],
        answerIndex: 0,
        meaning: "ironically mocking"
      },
      {
        word: "scoff",
        phrase: "Jessica scoffed at the idea",
        choices: ["sneer at", "concur", "weep", "grin warmly"],
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
        choices: ["protected", "exposed", "uneasy", "misplaced"],
        answerIndex: 0,
        meaning: "safe from harm; firmly attached"
      },
      {
        word: "serene",
        phrase: "Angie felt serene by the stream",
        choices: ["tranquil", "tense", "irate", "perplexed"],
        answerIndex: 0,
        meaning: "completely calm; clear"
      },
      {
        word: "skeptic",
        phrase: "a well-known skeptic",
        choices: ["disbeliever", "advocate", "authority", "enthusiast"],
        answerIndex: 0,
        meaning: "someone who doubts"
      },
      {
        word: "sloth",
        phrase: "the cold weather inclined her towards sloth",
        choices: ["idleness", "vigor", "thrill", "appetite"],
        answerIndex: 0,
        meaning: "inactivity, laziness"
      },
      {
        word: "sly",
        phrase: "a sly bite of cake",
        choices: ["cunning", "truthful", "awkward", "boisterous"],
        answerIndex: 0,
        meaning: "sneaky or mischievous"
      },
      {
        word: "sporadic",
        phrase: "the desert rainfall was sporadic",
        choices: ["occasional", "continuous", "routine", "expected"],
        answerIndex: 0,
        meaning: "occurring at irregular intervals"
      },
      {
        word: "stifle",
        phrase: "made her best effort to stifle her cough",
        choices: ["smother", "unleash", "promote", "boost"],
        answerIndex: 0,
        meaning: "suppress or stop"
      },
      {
        word: "subtle",
        phrase: "only subtle differences between the twins",
        choices: ["understated", "blatant", "conspicuous", "massive"],
        answerIndex: 0,
        meaning: "difficult to notice or describe"
      },
      {
        word: "sympathize",
        phrase: "not difficult to sympathize with the flood victims",
        choices: ["empathize with", "resent", "disregard", "fault"],
        answerIndex: 0,
        meaning: "feel sorry for"
      },
      {
        word: "tact",
        phrase: "presented his argument with such tact",
        choices: ["sensitivity", "bluntness", "hostility", "bewilderment"],
        answerIndex: 0,
        meaning: "the ability to act or speak without offending others"
      },
      {
        word: "tentative",
        phrase: "made tentative plans with Jessica",
        choices: ["hesitant", "settled", "conclusive", "assured"],
        answerIndex: 0,
        meaning: "not certain"
      },
      {
        word: "timid",
        phrase: "very timid in approaching his teacher",
        choices: ["meek", "daring", "self-assured", "boisterous"],
        answerIndex: 0,
        meaning: "shy"
      },
      {
        word: "tolerance",
        phrase: "a high tolerance for variations in temperature",
        choices: ["acceptance", "irritability", "frailty", "dread"],
        answerIndex: 0,
        meaning: "open-mindedness; endurance"
      },
      {
        word: "unconventional",
        phrase: "unconventional hair colors",
        choices: ["unorthodox", "ordinary", "dull", "customary"],
        answerIndex: 0,
        meaning: "out of the ordinary"
      },
      {
        word: "uniform",
        phrase: "a uniform width",
        choices: ["unvarying", "diverse", "haphazard", "irregular"],
        answerIndex: 0,
        meaning: "the same"
      },
      {
        word: "universal",
        phrase: "a universal rule at the school",
        choices: ["worldwide", "voluntary", "regional", "uncommon"],
        answerIndex: 0,
        meaning: "the same for all cases"
      },
      {
        word: "vendetta",
        phrase: "a vendetta against the Jones family",
        choices: ["feud", "companionship", "partnership", "present"],
        answerIndex: 0,
        meaning: "grudge"
      },
      {
        word: "vital",
        phrase: "water is such a vital resource",
        choices: ["crucial", "trivial", "scarce", "costly"],
        answerIndex: 0,
        meaning: "extremely important; energetic"
      },
      {
        word: "vulnerable",
        phrase: "one of the most vulnerable parts of the body",
        choices: ["defenseless", "shielded", "sturdy", "concealed"],
        answerIndex: 0,
        meaning: "open to attack or harm"
      },
      {
        word: "wicked",
        phrase: "the wicked witch cast spells",
        choices: ["villainous", "benevolent", "tender", "just"],
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
        choices: ["rubble", "loot", "plan", "crop"],
        answerIndex: 0,
        meaning: "scattered pieces left after something breaks or is destroyed"
      },
      {
        word: "emphasis",
        phrase: "put emphasis on the last word",
        choices: ["stress", "dullness", "hush", "error"],
        answerIndex: 0,
        meaning: "special importance or attention given to something"
      },
      {
        word: "encounter",
        phrase: "to encounter a bear on the trail",
        choices: ["run into", "steer clear of", "arrange in advance", "overlook completely"],
        answerIndex: 0,
        meaning: "to meet or come across unexpectedly"
      },
      {
        word: "generations",
        phrase: "three generations at the reunion",
        choices: ["family lines over time", "one moment", "a small bit", "vacant spaces"],
        answerIndex: 0,
        meaning: "groups of people born around the same period of time"
      },
      {
        word: "indicated",
        phrase: "she indicated the correct answer",
        choices: ["pointed out", "concealed", "refused", "overlooked"],
        answerIndex: 0,
        meaning: "showed, pointed out, or gave a sign of something"
      },
      {
        word: "naturalist",
        phrase: "the naturalist studied the birds",
        choices: ["wildlife scientist", "urban designer", "numbers instructor", "filmmaker"],
        answerIndex: 0,
        meaning: "a person who studies plants, animals, and nature"
      },
      {
        word: "sheer",
        phrase: "a sheer cliff",
        choices: ["vertical", "sloping", "slushy", "vivid"],
        answerIndex: 0,
        meaning: "very steep, sudden, or complete"
      },
      {
        word: "spectacular",
        phrase: "a spectacular fireworks show",
        choices: ["breathtaking", "tedious", "subdued", "unmemorable"],
        answerIndex: 0,
        meaning: "very impressive or exciting to see"
      },
      {
        word: "afford",
        phrase: "to afford a new bike",
        choices: ["have the means for", "donate", "disregard", "damage"],
        answerIndex: 0,
        meaning: "to have enough money or resources for something"
      },
      {
        word: "loan",
        phrase: "took out a loan for the car",
        choices: ["borrowed sum", "gift with no cost", "misplaced item", "added task"],
        answerIndex: 0,
        meaning: "money or something else borrowed and expected to be returned"
      },
      {
        word: "profit",
        phrase: "the shop's profit grew",
        choices: ["gain", "costs", "liability", "squandering"],
        answerIndex: 0,
        meaning: "money left after the costs of doing business are paid"
      },
      {
        word: "prosper",
        phrase: "the business began to prosper",
        choices: ["flourish", "collapse", "dwindle", "disappear"],
        answerIndex: 0,
        meaning: "to do well or become successful"
      },
      {
        word: "risk",
        phrase: "the risk of getting hurt",
        choices: ["chance of harm", "protection", "ease", "payoff"],
        answerIndex: 0,
        meaning: "the chance that something harmful or unwanted may happen"
      },
      {
        word: "savings",
        phrase: "spent years building her savings",
        choices: ["money set aside", "impulsive purchases", "loaned funds", "misplaced change"],
        answerIndex: 0,
        meaning: "money that is kept instead of spent"
      },
      {
        word: "scarce",
        phrase: "clean water was scarce",
        choices: ["in short supply", "abundant", "affordable", "worthless"],
        answerIndex: 0,
        meaning: "hard to find because there is not much available"
      },
      {
        word: "wages",
        phrase: "earned fair wages",
        choices: ["earnings", "liability", "levy", "present"],
        answerIndex: 0,
        meaning: "money paid to a worker for work performed"
      },
      {
        word: "access",
        phrase: "access to the library",
        choices: ["admission", "departure", "quiet", "holdup"],
        answerIndex: 0,
        meaning: "the ability or right to enter, use, or obtain something"
      },
      {
        word: "advance",
        phrase: "to advance to the next round",
        choices: ["progress", "lag", "halt", "redo"],
        answerIndex: 0,
        meaning: "to move forward or make progress"
      },
      {
        word: "analysis",
        phrase: "a careful analysis of the data",
        choices: ["close study", "hunch", "party", "quarrel"],
        answerIndex: 0,
        meaning: "a careful study of something to understand it better"
      },
      {
        word: "cite",
        phrase: "In his report, Jayden should cite evidence from the article.",
        choices: ["reference", "disregard entirely", "fabricate", "delete entirely"],
        answerIndex: 0,
        meaning: "to mention evidence or a source to support an idea"
      },
      {
        word: "counterpoint",
        phrase: "offered a counterpoint to the argument",
        choices: ["rebuttal", "supporting point", "verdict", "private matter"],
        answerIndex: 0,
        meaning: "an opposing or contrasting point in an argument"
      },
      {
        word: "data",
        phrase: "The class recorded data from the science experiment.",
        choices: ["facts", "views", "gossip", "illustrations"],
        answerIndex: 0,
        meaning: "facts or information collected for study"
      },
      {
        word: "drawbacks",
        phrase: "weighed the drawbacks of the plan",
        choices: ["downsides", "perks", "awards", "regulations"],
        answerIndex: 0,
        meaning: "disadvantages or negative parts of something"
      },
      {
        word: "reasoning",
        phrase: "explained her reasoning",
        choices: ["rationale", "bewilderment", "quiet", "excuse"],
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
        choices: ["task forces", "lone chief", "vacant halls", "quiet demonstrations"],
        answerIndex: 0,
        meaning: "groups chosen to work on particular tasks"
      },
      {
        word: "convention",
        phrase: "attended a teachers' convention",
        choices: ["assembly", "brief rest", "confidential note", "cipher"],
        answerIndex: 0,
        meaning: "a formal meeting of people with a shared purpose"
      },
      {
        word: "debate",
        phrase: "a class debate",
        choices: ["formal argument", "consensus", "tune", "hush"],
        answerIndex: 0,
        meaning: "a discussion in which different sides present arguments"
      },
      {
        word: "proposal",
        phrase: "submitted a proposal",
        choices: ["offer of a plan", "settled verdict", "grievance", "excuse"],
        answerIndex: 0,
        meaning: "a plan or suggestion offered for consideration"
      },
      {
        word: "representatives",
        phrase: "elected representatives",
        choices: ["delegates", "unknown passersby", "quiet onlookers", "lawbreakers"],
        answerIndex: 0,
        meaning: "people chosen to speak or act for others"
      },
      {
        word: "resolve",
        phrase: "to resolve the conflict",
        choices: ["work out", "aggravate", "disregard", "conceal"],
        answerIndex: 0,
        meaning: "to solve a problem or settle a disagreement"
      },
      {
        word: "situation",
        phrase: "a tricky situation",
        choices: ["state of affairs", "festivity", "tune", "ballad"],
        answerIndex: 0,
        meaning: "the set of conditions happening at a certain time"
      },
      {
        word: "union",
        phrase: "a union of workers",
        choices: ["coalition", "competition", "hush", "separation"],
        answerIndex: 0,
        meaning: "a joining together of people, groups, or things"
      },
      {
        word: "assuring",
        phrase: "an assuring smile",
        choices: ["comforting", "alarming", "puzzling", "tedious"],
        answerIndex: 0,
        meaning: "making someone feel certain or confident"
      },
      {
        word: "detected",
        phrase: "detected a strange smell",
        choices: ["spotted", "overlooked", "invented", "concealed"],
        answerIndex: 0,
        meaning: "noticed or discovered something that was not obvious"
      },
      {
        word: "emerging",
        phrase: "the sun emerging from the clouds",
        choices: ["coming into view", "vanishing", "icing over", "contracting"],
        answerIndex: 0,
        meaning: "coming into view or beginning to develop"
      },
      {
        word: "gratitude",
        phrase: "expressed her gratitude",
        choices: ["appreciation", "fury", "envy", "tedium"],
        answerIndex: 0,
        meaning: "a feeling of thankfulness"
      },
      {
        word: "guidance",
        phrase: "sought her teacher's guidance",
        choices: ["direction", "penalty", "hush", "rivalry"],
        answerIndex: 0,
        meaning: "help or advice that shows what to do"
      },
      {
        word: "outcome",
        phrase: "the outcome of the game",
        choices: ["upshot", "start", "regulation", "inquiry"],
        answerIndex: 0,
        meaning: "the final result of an action or event"
      },
      {
        word: "previous",
        phrase: "the previous chapter",
        choices: ["prior", "forthcoming", "concluding", "absent"],
        answerIndex: 0,
        meaning: "happening or existing before the present one"
      },
      {
        word: "pursuit",
        phrase: "the pursuit of a dream",
        choices: ["chase", "capitulation", "postponement", "rejection"],
        answerIndex: 0,
        meaning: "an effort to achieve, find, or follow something"
      },
      {
        word: "ambitious",
        phrase: "an ambitious goal",
        choices: ["driven", "content with little", "negligent", "absent-minded"],
        answerIndex: 0,
        meaning: "having a strong desire to achieve something difficult"
      },
      {
        word: "memorized",
        phrase: "memorized the poem",
        choices: ["committed to memory", "erased from memory", "made up", "spelled wrong"],
        answerIndex: 0,
        meaning: "learned something so it can be remembered exactly"
      },
      {
        word: "satisfaction",
        phrase: "felt satisfaction after finishing",
        choices: ["fulfillment", "irritation", "bewilderment", "dread"],
        answerIndex: 0,
        meaning: "a pleased feeling from achieving or receiving something"
      },
      {
        word: "shuddered",
        phrase: "shuddered at the scary movie",
        choices: ["shivered", "roared with laughter", "celebrated", "stretched sleepily"],
        answerIndex: 0,
        meaning: "shook suddenly, often from fear, cold, or disgust"
      },
      {
        word: "narrative",
        phrase: "wrote a personal narrative",
        choices: ["account of events", "instructions", "equation", "chart"],
        answerIndex: 0,
        meaning: "a story or an account of events"
      },
      {
        word: "repetition",
        phrase: "used repetition for emphasis",
        choices: ["recurrence", "avoidance", "concealment", "measurement"],
        answerIndex: 0,
        meaning: "the use of something again and again"
      },
      {
        word: "free verse",
        phrase: "The poet wrote free verse without a regular rhyme pattern.",
        choices: ["unrhymed poetry", "a structured rhyming poem", "a formula", "a brief tale"],
        answerIndex: 0,
        meaning: "poetry without a regular rhyme or meter pattern"
      },
      {
        word: "rhyme",
        phrase: "“Light” and “night” rhyme.",
        choices: ["similar sounding words", "contrasting meanings", "unpronounced letters", "uppercase letters"],
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
        choices: ["thankfulness", "irritation", "bafflement", "monotony"],
        answerIndex: 0,
        meaning: "understanding the value of something and feeling thankful for it"
      },
      {
        word: "blurted",
        phrase: "blurted out the answer",
        choices: ["blabbed out", "murmured cautiously", "printed carefully", "hummed gently"],
        answerIndex: 0,
        meaning: "said something suddenly without thinking first"
      },
      {
        word: "complimenting",
        phrase: "complimenting her artwork",
        choices: ["admiring aloud", "insulting", "overlooking", "imitating"],
        answerIndex: 0,
        meaning: "saying something kind or admiring about someone"
      },
      {
        word: "congratulate",
        phrase: "stopped to congratulate the winner",
        choices: ["commend someone", "criticize someone", "disregard someone", "rival someone"],
        answerIndex: 0,
        meaning: "to tell someone you are pleased about their success"
      },
      {
        word: "contradicted",
        phrase: "contradicted his own story",
        choices: ["disagreed with", "concurred fully", "echoed exactly", "overlooked entirely"],
        answerIndex: 0,
        meaning: "said the opposite of what someone else said"
      },
      {
        word: "critical",
        phrase: "a critical decision",
        choices: ["crucial", "trivial", "amusing", "hasty"],
        answerIndex: 0,
        meaning: "very important, or involving careful judgment"
      },
      {
        word: "cultural",
        phrase: "a cultural festival",
        choices: ["related to a way of life", "related to numbers", "related to climate", "related to athletics"],
        answerIndex: 0,
        meaning: "related to the customs, beliefs, arts, or way of life of a group"
      },
      {
        word: "misunderstanding",
        phrase: "cleared up the misunderstanding",
        choices: ["mix-up", "accord", "festivity", "hush"],
        answerIndex: 0,
        meaning: "a failure to understand something correctly"
      },
      {
        word: "artificial",
        phrase: "artificial flowers",
        choices: ["synthetic", "organic", "untamed", "prehistoric"],
        answerIndex: 0,
        meaning: "made by people rather than occurring naturally"
      },
      {
        word: "collaborate",
        phrase: "The students collaborate to finish the group project.",
        choices: ["join forces", "compete", "disregard one another", "bicker"],
        answerIndex: 0,
        meaning: "to work together on a shared task"
      },
      {
        word: "dedicated",
        phrase: "a dedicated volunteer",
        choices: ["committed", "negligent", "idle", "unfocused"],
        answerIndex: 0,
        meaning: "strongly committed to a purpose or task"
      },
      {
        word: "flexible",
        phrase: "a flexible schedule",
        choices: ["pliable", "inflexible", "damaged", "costly"],
        answerIndex: 0,
        meaning: "able to bend, change, or adjust easily"
      },
      {
        word: "function",
        phrase: "the function of the heart",
        choices: ["role", "dimension", "hue", "price"],
        answerIndex: 0,
        meaning: "the purpose or job of something"
      },
      {
        word: "mimic",
        phrase: "the parrot can mimic sounds",
        choices: ["copy", "originate", "disregard", "quiet"],
        answerIndex: 0,
        meaning: "to copy the actions, appearance, or sounds of something"
      },
      {
        word: "obstacle",
        phrase: "overcame every obstacle",
        choices: ["hurdle", "quick route", "prize", "present"],
        answerIndex: 0,
        meaning: "something that blocks progress or makes a task difficult"
      },
      {
        word: "techniques",
        phrase: "learned new painting techniques",
        choices: ["approaches", "errors", "viewpoints", "regulations"],
        answerIndex: 0,
        meaning: "special methods used to do something skillfully"
      },
      {
        word: "archaeologist",
        phrase: "An archaeologist carefully examined the ancient pottery.",
        choices: ["digger of ancient sites", "numbers teacher", "aircraft pilot", "restaurant cook"],
        answerIndex: 0,
        meaning: "a scientist who studies past people through objects and sites they left behind"
      },
      {
        word: "era",
        phrase: "the era of dinosaurs",
        choices: ["epoch", "brief instant", "quick doze", "small gap"],
        answerIndex: 0,
        meaning: "a long period of time known for particular events or features"
      },
      {
        word: "fragments",
        phrase: "fragments of an old vase",
        choices: ["shards", "complete pieces", "fresh items", "huge rocks"],
        answerIndex: 0,
        meaning: "small broken pieces of something larger"
      },
      {
        word: "historian",
        phrase: "the historian wrote a book about the war",
        choices: ["chronicler of the past", "weather forecaster", "auto mechanic", "baker"],
        answerIndex: 0,
        meaning: "a person who studies and writes about the past"
      },
      {
        word: "intact",
        phrase: "the package arrived intact",
        choices: ["whole", "shattered", "absent", "taken"],
        answerIndex: 0,
        meaning: "whole and not damaged or missing parts"
      },
      {
        word: "preserved",
        phrase: "preserved the old photographs",
        choices: ["kept safe", "deliberately ruined", "quickly sold off", "permanently concealed"],
        answerIndex: 0,
        meaning: "kept safe from damage, decay, or change"
      },
      {
        word: "reconstruct",
        phrase: "reconstruct the ancient temple",
        choices: ["restore", "tear down", "decorate", "disregard"],
        answerIndex: 0,
        meaning: "to build or form again, often from evidence or pieces"
      },
      {
        word: "remnants",
        phrase: "remnants of the old castle",
        choices: ["leftover pieces", "whole building", "new extension", "vacant lot"],
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
        choices: ["eager expectation", "utter dullness", "abrupt rage", "peaceful slumber"],
        answerIndex: 0,
        meaning: "a feeling of excitement or expectation about what will happen"
      },
      {
        word: "defy",
        phrase: "to defy the rules",
        choices: ["rebel against", "comply with", "overlook silently", "disregard entirely"],
        answerIndex: 0,
        meaning: "to refuse to obey or to resist boldly"
      },
      {
        word: "entitled",
        phrase: "entitled to a refund",
        choices: ["deserving of something", "barred from something", "oblivious to something", "weary of something"],
        answerIndex: 0,
        meaning: "having a right to something"
      },
      {
        word: "neutral",
        phrase: "stayed neutral during the argument",
        choices: ["impartial", "one-sided", "furious", "boisterous"],
        answerIndex: 0,
        meaning: "not supporting either side in a disagreement"
      },
      {
        word: "outspoken",
        phrase: "an outspoken critic",
        choices: ["frank and vocal", "timid and mute", "puzzled and hesitant", "withdrawn and quiet"],
        answerIndex: 0,
        meaning: "willing to state opinions openly and strongly"
      },
      {
        word: "reserved",
        phrase: "a reserved personality",
        choices: ["restrained", "flamboyant", "goofy", "irate"],
        answerIndex: 0,
        meaning: "quiet and not quick to show feelings"
      },
      {
        word: "sought",
        phrase: "sought help from a teacher",
        choices: ["searched for", "shunned", "overlooked", "declined"],
        answerIndex: 0,
        meaning: "looked for or tried to obtain"
      },
      {
        word: "unequal",
        phrase: "an unequal division of chores",
        choices: ["uneven", "evenly matched", "completely just", "precisely the same"],
        answerIndex: 0,
        meaning: "not the same in amount, size, value, or treatment"
      },
      {
        word: "astounded",
        phrase: "astounded by the magic trick",
        choices: ["stunned", "unimpressed", "enraged", "at ease"],
        answerIndex: 0,
        meaning: "very surprised or amazed"
      },
      {
        word: "concealed",
        phrase: "concealed the gift",
        choices: ["disguised", "exposed", "demolished", "traded"],
        answerIndex: 0,
        meaning: "hidden from sight or kept secret"
      },
      {
        word: "inquisitive",
        phrase: "an inquisitive student",
        choices: ["probing", "indifferent", "hostile", "drowsy"],
        answerIndex: 0,
        meaning: "curious and eager to learn or ask questions"
      },
      {
        word: "interpret",
        phrase: "Readers interpret clues to understand the character's feelings.",
        choices: ["make sense of", "disregard totally", "learn by rote", "wipe out entirely"],
        answerIndex: 0,
        meaning: "to explain or decide the meaning of something"
      },
      {
        word: "perplexed",
        phrase: "perplexed by the riddle",
        choices: ["mystified", "thrilled", "uninterested", "calm"],
        answerIndex: 0,
        meaning: "confused because something is difficult to understand"
      },
      {
        word: "precise",
        phrase: "precise measurements",
        choices: ["accurate", "imprecise", "sloppy", "arbitrary"],
        answerIndex: 0,
        meaning: "exact, accurate, and carefully stated"
      },
      {
        word: "reconsider",
        phrase: "asked him to reconsider",
        choices: ["rethink", "decide at once", "dismiss completely", "turn down"],
        answerIndex: 0,
        meaning: "to think about something again before deciding"
      },
      {
        word: "suspicious",
        phrase: "felt suspicious of the stranger",
        choices: ["wary", "trusting", "upbeat", "relaxed"],
        answerIndex: 0,
        meaning: "feeling that something may be wrong or dishonest"
      },
      {
        word: "barren",
        phrase: "a barren desert",
        choices: ["desolate", "verdant", "bustling", "vivid"],
        answerIndex: 0,
        meaning: "unable to produce much plant life; empty and bare"
      },
      {
        word: "expression",
        phrase: "a surprised facial expression",
        choices: ["outward display", "a formula", "a dish", "an instrument"],
        answerIndex: 0,
        meaning: "a way of showing an idea, feeling, or thought"
      },
      {
        word: "meaningful",
        phrase: "a meaningful gift",
        choices: ["significant", "trivial", "mundane", "fleeting"],
        answerIndex: 0,
        meaning: "having an important purpose or special meaning"
      },
      {
        word: "plumes",
        phrase: "the peacock's colorful plumes",
        choices: ["ornate feathers", "talons", "small wings", "dense bones"],
        answerIndex: 0,
        meaning: "large, showy feathers or feather-like shapes"
      },
      {
        word: "lyric",
        phrase: "wrote a lyric about the sea",
        choices: ["personal poem", "an equation", "a news article", "a shopping list"],
        answerIndex: 0,
        meaning: "a type of poem that expresses personal feelings or thoughts"
      },
      {
        word: "alliteration",
        phrase: "“Wild winds whistle” uses alliteration.",
        choices: ["matching starting sounds", "repeated digits", "repeated hues", "repeated forms"],
        answerIndex: 0,
        meaning: "repetition of beginning consonant sounds in nearby words"
      },
      {
        word: "meter",
        phrase: "The poem's meter gives it a steady beat.",
        choices: ["rhythmic pattern", "page count", "poem's title", "writer's name"],
        answerIndex: 0,
        meaning: "the regular pattern of stressed and unstressed beats in poetry"
      },
      {
        word: "stanza",
        phrase: "The poem has four lines in its first stanza.",
        choices: ["verse paragraph", "one word", "book's title", "closing punctuation"],
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
        choices: ["roughly", "precisely", "not at all", "invariably"],
        answerIndex: 0,
        meaning: "close to an exact amount but not exactly"
      },
      {
        word: "astronomical",
        phrase: "an astronomical price",
        choices: ["sky-high", "minuscule", "moderate", "affordable"],
        answerIndex: 0,
        meaning: "related to space and stars, or extremely large"
      },
      {
        word: "calculation",
        phrase: "double-checked her calculation",
        choices: ["figuring", "hunch", "viewpoint", "tale"],
        answerIndex: 0,
        meaning: "the process or result of working out a number"
      },
      {
        word: "criteria",
        phrase: "met all the criteria",
        choices: ["benchmarks", "wild guesses", "private matters", "past recollections"],
        answerIndex: 0,
        meaning: "standards used to judge or decide something"
      },
      {
        word: "diameter",
        phrase: "We measured the diameter across the center of the circle.",
        choices: ["width straight through the center", "side of a square", "point of a triangle", "building's height"],
        answerIndex: 0,
        meaning: "a straight line across a circle through its center"
      },
      {
        word: "evaluate",
        phrase: "evaluate the results",
        choices: ["assess", "disregard totally", "duplicate exactly", "conceal from sight"],
        answerIndex: 0,
        meaning: "to judge the quality, value, or importance of something"
      },
      {
        word: "orbit",
        phrase: "the moon's orbit around Earth",
        choices: ["circular route in space", "aimless straight line", "abrupt halt", "erratic bounce"],
        answerIndex: 0,
        meaning: "the curved path one object follows around another in space"
      },
      {
        word: "spheres",
        phrase: "the planets are spheres",
        choices: ["ball-shaped objects", "flat rectangles", "pointed triangles", "narrow lines"],
        answerIndex: 0,
        meaning: "round three-dimensional shapes like balls"
      },
      {
        word: "assume",
        phrase: "assume he was right",
        choices: ["take for granted", "confirm with evidence", "reject outright", "overlook completely"],
        answerIndex: 0,
        meaning: "to accept something as true without being certain"
      },
      {
        word: "guarantee",
        phrase: "a money-back guarantee",
        choices: ["assurance", "faint hope", "brief rumor", "silent wish"],
        answerIndex: 0,
        meaning: "a promise that something will happen or work as stated"
      },
      {
        word: "nominate",
        phrase: "nominate a class president",
        choices: ["put forward", "silently overlook", "sharply condemn", "covertly dodge"],
        answerIndex: 0,
        meaning: "to formally suggest someone for a position or award"
      },
      {
        word: "obviously",
        phrase: "obviously the answer was wrong",
        choices: ["plainly", "seldom", "covertly", "not at all"],
        answerIndex: 0,
        meaning: "in a way that is easy to see or understand"
      },
      {
        word: "rely",
        phrase: "rely on a friend",
        choices: ["count on", "steer clear of", "overlook", "doubt"],
        answerIndex: 0,
        meaning: "to depend on someone or something"
      },
      {
        word: "supportive",
        phrase: "a supportive coach",
        choices: ["nurturing", "judgmental", "aloof", "neglectful"],
        answerIndex: 0,
        meaning: "giving help, encouragement, or approval"
      },
      {
        word: "sympathy",
        phrase: "showed sympathy for her loss",
        choices: ["pity", "envy", "rage", "arrogance"],
        answerIndex: 0,
        meaning: "care or sadness for someone else's trouble"
      },
      {
        word: "weakling",
        phrase: "teased for being a weakling",
        choices: ["frail person", "powerful athlete", "sage ruler", "speedy runner"],
        answerIndex: 0,
        meaning: "a person or creature considered physically weak"
      },
      {
        word: "agricultural",
        phrase: "agricultural land",
        choices: ["related to crops and livestock", "related to fishing", "related to mining", "related to construction"],
        answerIndex: 0,
        meaning: "related to farming, crops, or raising animals"
      },
      {
        word: "declined",
        phrase: "sales declined last year",
        choices: ["dropped off", "expanded", "remained constant", "vanished at once"],
        answerIndex: 0,
        meaning: "became smaller, weaker, or fewer; or politely refused"
      },
      {
        word: "disorder",
        phrase: "the room was in disorder",
        choices: ["chaos", "tidiness", "stillness", "brightness"],
        answerIndex: 0,
        meaning: "a lack of order or an unhealthy condition"
      },
      {
        word: "identify",
        phrase: "identify the bird by its song",
        choices: ["pinpoint", "overlook entirely", "evade", "substitute completely"],
        answerIndex: 0,
        meaning: "to recognize and name someone or something"
      },
      {
        word: "probable",
        phrase: "a probable outcome",
        choices: ["expected", "unlikely", "prohibited", "unintentional"],
        answerIndex: 0,
        meaning: "likely to happen or be true"
      },
      {
        word: "thrive",
        phrase: "plants thrive in sunlight",
        choices: ["flourish", "decline", "remain concealed", "stiffen entirely"],
        answerIndex: 0,
        meaning: "to grow well, stay healthy, or succeed"
      },
      {
        word: "unexpected",
        phrase: "an unexpected visitor",
        choices: ["surprising", "anticipated", "tedious", "commonplace"],
        answerIndex: 0,
        meaning: "not predicted or planned"
      },
      {
        word: "widespread",
        phrase: "widespread flooding",
        choices: ["far-reaching", "localized", "fleeting", "fictional"],
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
        choices: ["announcement", "personal journal", "cipher", "lengthy book"],
        answerIndex: 0,
        meaning: "a short public notice or news report"
      },
      {
        word: "contributions",
        phrase: "made generous contributions",
        choices: ["donations", "things removed", "things concealed", "things ruined"],
        answerIndex: 0,
        meaning: "things given or done to help a person, group, or cause"
      },
      {
        word: "diversity",
        phrase: "celebrated the diversity of the class",
        choices: ["variety", "uniformity", "emptiness", "one kind only"],
        answerIndex: 0,
        meaning: "the presence of many different kinds of people or things"
      },
      {
        word: "enlisted",
        phrase: "enlisted in the navy",
        choices: ["signed up", "resigned from", "stayed away from", "headed up"],
        answerIndex: 0,
        meaning: "joined the armed forces or signed up for a cause"
      },
      {
        word: "intercept",
        phrase: "intercept the pass",
        choices: ["cut off in transit", "hand off safely", "pay no attention to", "observe silently"],
        answerIndex: 0,
        meaning: "to stop or catch something before it reaches its destination"
      },
      {
        word: "operations",
        phrase: "military operations",
        choices: ["coordinated efforts", "chance mishaps", "brief rests", "vacant spaces"],
        answerIndex: 0,
        meaning: "organized activities carried out for a purpose"
      },
      {
        word: "recruits",
        phrase: "trained the new recruits",
        choices: ["new members", "seasoned veterans", "temporary visitors", "past rivals"],
        answerIndex: 0,
        meaning: "new members who have recently joined a group"
      },
      {
        word: "survival",
        phrase: "wilderness survival skills",
        choices: ["staying alive", "giving up fast", "complete loss", "reckless squandering"],
        answerIndex: 0,
        meaning: "the act of continuing to live or exist despite difficulty"
      },
      {
        word: "adaptation",
        phrase: "an adaptation for desert life",
        choices: ["survival trait", "chronic sickness", "chance mishap", "damaged device"],
        answerIndex: 0,
        meaning: "a feature or change that helps a living thing survive"
      },
      {
        word: "agile",
        phrase: "an agile gymnast",
        choices: ["nimble", "sluggish", "rigid", "fatigued"],
        answerIndex: 0,
        meaning: "able to move quickly and easily"
      },
      {
        word: "cache",
        phrase: "found a cache of supplies",
        choices: ["stockpile", "vacant container", "open declaration", "malfunctioning device"],
        answerIndex: 0,
        meaning: "a hidden or stored supply of useful things"
      },
      {
        word: "dormant",
        phrase: "a dormant volcano",
        choices: ["lying inactive", "actively erupting", "utterly ruined", "freshly made"],
        answerIndex: 0,
        meaning: "temporarily inactive or not growing"
      },
      {
        word: "forage",
        phrase: "forage for berries",
        choices: ["scavenge", "sow seeds", "prepare a dish", "stockpile provisions"],
        answerIndex: 0,
        meaning: "to search widely for food or supplies"
      },
      {
        word: "frigid",
        phrase: "frigid winter air",
        choices: ["bitterly cold", "sweltering", "lukewarm", "mildly chilly"],
        answerIndex: 0,
        meaning: "extremely cold"
      },
      {
        word: "hibernate",
        phrase: "Some animals hibernate when winter becomes very cold.",
        choices: ["lie dormant through winter", "fly south rapidly", "construct a fresh nest", "forage all winter long"],
        answerIndex: 0,
        meaning: "to spend winter in a deeply inactive state"
      },
      {
        word: "insulates",
        phrase: "fur insulates the animal from cold",
        choices: ["traps warmth in", "conducts heat fast", "strips away heat", "makes a racket"],
        answerIndex: 0,
        meaning: "protects by slowing the movement of heat, sound, or electricity"
      },
      {
        word: "blares",
        phrase: "the alarm blares",
        choices: ["blasts noisily", "falls silent", "speaks in a hush", "murmurs softly"],
        answerIndex: 0,
        meaning: "makes a very loud, harsh sound"
      },
      {
        word: "connection",
        phrase: "a strong connection between friends",
        choices: ["bond", "complete split", "concealed matter", "broken vow"],
        answerIndex: 0,
        meaning: "a link or relationship between people, things, or ideas"
      },
      {
        word: "errand",
        phrase: "ran an errand for her mom",
        choices: ["quick task outing", "extended holiday", "classroom exam", "festive celebration"],
        answerIndex: 0,
        meaning: "a short trip made to complete a task"
      },
      {
        word: "exchange",
        phrase: "exchange seats with a friend",
        choices: ["swap", "leave unchanged", "lose permanently", "stash away"],
        answerIndex: 0,
        meaning: "to give one thing and receive another in return"
      },
      {
        word: "personification",
        phrase: "“The wind whispered” is an example of personification.",
        choices: ["human traits given to objects", "a like/as comparison", "sound repetition", "a word that sounds like its meaning"],
        answerIndex: 0,
        meaning: "giving human qualities to animals, objects, or ideas"
      },
      {
        word: "assonance",
        phrase: "The poet used assonance to create a repeated vowel sound.",
        choices: ["repeated vowel sounds", "repeated consonant sounds", "two rhyming lines", "a beat pattern"],
        answerIndex: 0,
        meaning: "repetition of vowel sounds in nearby words"
      },
      {
        word: "consonance",
        phrase: "The repeated ending sounds create consonance in the line.",
        choices: ["repeated consonant sounds", "repeated vowel sounds", "a rhyme pattern", "a poem's name"],
        answerIndex: 0,
        meaning: "repetition of consonant sounds in nearby words"
      },
      {
        word: "imagery",
        phrase: "vivid imagery filled the poem",
        choices: ["vivid descriptive language", "a factual list", "a geometric figure", "a single note"],
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
        choices: ["pretend", "organized", "tough", "genuine"],
        answerIndex: 0,
        meaning: "not real; fake or pretend"
      },
      {
        word: "peculiar",
        phrase: "a peculiar way",
        choices: ["odd", "ordinary", "routine", "unclear"],
        answerIndex: 0,
        meaning: "strange or unusual"
      },
      {
        word: "queasy",
        phrase: "a queasy feeling",
        choices: ["nauseated", "at ease", "cheerful", "satisfied"],
        answerIndex: 0,
        meaning: "feeling nauseated or uneasy"
      },
      {
        word: "sturdy",
        phrase: "a sturdy table",
        choices: ["solid", "flimsy", "lopsided", "level"],
        answerIndex: 0,
        meaning: "strongly and solidly built"
      },
      {
        word: "sole",
        phrase: "the sole survivor",
        choices: ["single", "joint", "widespread", "alive"],
        answerIndex: 0,
        meaning: "being the only one"
      },
      {
        word: "typical",
        phrase: "a typical reaction",
        choices: ["standard", "unusual", "scarce", "unconventional"],
        answerIndex: 0,
        meaning: "usual or ordinary"
      },
      {
        word: "valiant",
        phrase: "a valiant effort",
        choices: ["brave", "cowardly", "punctual", "feeble"],
        answerIndex: 0,
        meaning: "showing courage or bravery"
      },
      {
        word: "vast",
        phrase: "the vast universe",
        choices: ["immense", "shrink", "brief", "dull"],
        answerIndex: 0,
        meaning: "extremely large in area or extent"
      },
      {
        word: "abused",
        phrase: "an abused dog",
        choices: ["harmed", "adored", "stood up for", "safeguarded"],
        answerIndex: 0,
        meaning: "treated cruelly or harmfully"
      },
      {
        word: "composed",
        phrase: "composed music",
        choices: ["written", "performed", "heard", "enjoyed"],
        answerIndex: 0,
        meaning: "created or written, as a piece of music"
      },
      {
        word: "edible",
        phrase: "edible berries",
        choices: ["consumable", "toxic", "appropriate", "dangerous"],
        answerIndex: 0,
        meaning: "safe to eat"
      },
      {
        word: "portable",
        phrase: "a portable table",
        choices: ["movable", "cumbersome", "impractical", "clunky"],
        answerIndex: 0,
        meaning: "able to be carried or moved easily"
      },
      {
        word: "realistic",
        phrase: "realistic expectations",
        choices: ["practical", "odd", "unworkable", "one-of-a-kind"],
        answerIndex: 0,
        meaning: "practical and sensible; based on what's actually possible"
      },
      {
        word: "summit",
        phrase: "a mountain summit",
        choices: ["apex", "campground", "bottom", "pond"],
        answerIndex: 0,
        meaning: "the highest point of a mountain"
      },
      {
        word: "obsolete",
        phrase: "an obsolete machine",
        choices: ["outmoded", "difficult to operate", "current", "practical"],
        answerIndex: 0,
        meaning: "no longer used; outdated"
      },
      {
        word: "myth",
        phrase: "an ancient myth",
        choices: ["fable", "era", "fact", "masterpiece"],
        answerIndex: 0,
        meaning: "a traditional story, often about gods or heroes"
      },
      {
        word: "immense",
        phrase: "an immense collection",
        choices: ["vast", "jealous", "attractive", "restricted"],
        answerIndex: 0,
        meaning: "extremely large"
      },
      {
        word: "escalated",
        phrase: "an escalated order",
        choices: ["stepped up", "lowered", "misplaced", "completed"],
        answerIndex: 0,
        meaning: "increased quickly"
      },
      {
        word: "comply",
        phrase: "comply with the law",
        choices: ["cooperate", "defy", "misunderstand", "protest"],
        answerIndex: 0,
        meaning: "to act in agreement with a rule or request"
      },
      {
        word: "intercepted",
        phrase: "he was intercepted",
        choices: ["blocked", "freed", "motivated", "busy"],
        answerIndex: 0,
        meaning: "stopped or caught before reaching a destination"
      },
      {
        word: "identical",
        phrase: "identical shirts",
        choices: ["matching", "unique", "varied", "ordinary"],
        answerIndex: 0,
        meaning: "exactly alike"
      },
      {
        word: "excavate",
        phrase: "excavate the building",
        choices: ["dig out", "abandon", "draw", "grip"],
        answerIndex: 0,
        meaning: "to dig out or expose by digging"
      },
      {
        word: "frigid",
        phrase: "a frigid day",
        choices: ["freezing", "balmy", "dim", "radiant"],
        answerIndex: 0,
        meaning: "very cold"
      },
      {
        word: "preserve",
        phrase: "preserve water",
        choices: ["save", "consumed", "surrendered", "discovered"],
        answerIndex: 0,
        meaning: "to keep safe or protect from loss"
      },
      {
        word: "reassure",
        phrase: "to reassure",
        choices: ["soothe", "provide", "refuse", "rest"],
        answerIndex: 0,
        meaning: "to restore confidence; to ease someone's worries"
      },
      {
        word: "exerted",
        phrase: "exerted his strength",
        choices: ["used", "disregarded", "hid", "relaxed"],
        answerIndex: 0,
        meaning: "used effort or strength for something"
      },
      {
        word: "mischief",
        phrase: "create mischief",
        choices: ["naughtiness", "joy", "compliance", "justice"],
        answerIndex: 0,
        meaning: "playful troublemaking"
      },
      {
        word: "petrified",
        phrase: "petrified rocks",
        choices: ["turned to stone", "made soft", "made dark", "made tacky"],
        answerIndex: 0,
        meaning: "turned into stone over a long time"
      },
      {
        word: "pasture",
        phrase: "across the pasture",
        choices: ["grassland", "highway", "trail", "playground"],
        answerIndex: 0,
        meaning: "a grassy field used for grazing animals"
      },
      {
        word: "revert",
        phrase: "to revert",
        choices: ["return", "remain", "persevere", "stop"],
        answerIndex: 0,
        meaning: "to return to a previous state or condition"
      },
      {
        word: "ruined",
        phrase: "ruined the job",
        choices: ["spoiled", "repaired", "handled", "composed"],
        answerIndex: 0,
        meaning: "spoiled or damaged"
      },
      {
        word: "companion",
        phrase: "his companion",
        choices: ["associate", "victor", "pet", "adversary"],
        answerIndex: 0,
        meaning: "a person who accompanies or spends time with another"
      },
      {
        word: "dedicate",
        phrase: "dedicate yourself",
        choices: ["commit", "empower", "adorn", "hold back"],
        answerIndex: 0,
        meaning: "to give one's time or effort to a purpose"
      },
      {
        word: "industrious",
        phrase: "an industrious attitude",
        choices: ["diligent", "idle", "aware", "apathetic"],
        answerIndex: 0,
        meaning: "hardworking and diligent"
      },
      {
        word: "exasperated",
        phrase: "he was exasperated",
        choices: ["frustrated", "exhausted", "delighted", "isolated"],
        answerIndex: 0,
        meaning: "very annoyed or frustrated"
      },
      {
        word: "apathetic",
        phrase: "acted apathetic",
        choices: ["indifferent", "compassionate", "distressed", "scared"],
        answerIndex: 0,
        meaning: "showing little interest or concern"
      },
      {
        word: "sparse",
        phrase: "sparse vegetation",
        choices: ["scant", "plentiful", "vibrant", "elaborate"],
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
        choices: ["imprisonment", "liberty", "rainforest", "continent"],
        answerIndex: 0,
        meaning: "the state of being kept confined, not free"
      },
      {
        word: "disclose",
        phrase: "I cannot disclose that.",
        choices: ["divulge", "cover up", "keep back", "stash"],
        answerIndex: 0,
        meaning: "to make known; reveal"
      },
      {
        word: "descend",
        phrase: "Descend to 20,000 feet.",
        choices: ["go down", "climb up", "soar", "go higher"],
        answerIndex: 0,
        meaning: "to move downward"
      },
      {
        word: "horror",
        phrase: "It was a horror movie.",
        choices: ["frightening", "hilarious", "theatrical", "sorrowful"],
        answerIndex: 0,
        meaning: "a feeling of intense fear or shock"
      },
      {
        word: "considerable",
        phrase: "a considerable amount of time",
        choices: ["substantial", "negligible", "minor", "tiny"],
        answerIndex: 0,
        meaning: "large in amount or size"
      },
      {
        word: "heroic",
        phrase: "a heroic effort",
        choices: ["courageous", "cowardly", "honest", "fearful"],
        answerIndex: 0,
        meaning: "showing great courage"
      },
      {
        word: "jagged",
        phrase: "a jagged edge",
        choices: ["rough-edged", "mild", "even", "slanted"],
        answerIndex: 0,
        meaning: "having a sharp, uneven edge"
      },
      {
        word: "peculiar",
        phrase: "a peculiar smell",
        choices: ["unusual", "smelly", "unpleasant", "typical"],
        answerIndex: 0,
        meaning: "distinctive; unusual in a particular way"
      },
      {
        word: "act in",
        phrase: "Please act in my interest.",
        choices: ["look out for", "be aware of", "reveal", "comprehend"],
        answerIndex: 0,
        meaning: "to represent or look out for someone's benefit"
      },
      {
        word: "sturdy",
        phrase: "Sturdy shoes",
        choices: ["tough", "shaky", "rickety", "flimsy"],
        answerIndex: 0,
        meaning: "strongly built; not easily damaged"
      },
      {
        word: "variety",
        phrase: "a variety of interests",
        choices: ["assortment", "restriction", "sameness", "favorite"],
        answerIndex: 0,
        meaning: "a number of different types of something"
      },
      {
        word: "tragic",
        phrase: "A tragic story",
        choices: ["heartbreaking", "terrifying", "fortunate", "theatrical"],
        answerIndex: 0,
        meaning: "causing great sadness; disastrous"
      },
      {
        word: "valiant",
        phrase: "a valiant act",
        choices: ["gallant", "plain", "reckless", "considerate"],
        answerIndex: 0,
        meaning: "showing courage or bravery"
      },
      {
        word: "indicate",
        phrase: "Please indicate your choice.",
        choices: ["signal", "cover up", "stash", "deceive"],
        answerIndex: 0,
        meaning: "to point out or make known"
      },
      {
        word: "proceed",
        phrase: "Proceed to the next station.",
        choices: ["continue on", "stop", "withdraw", "pause"],
        answerIndex: 0,
        meaning: "to move forward; continue"
      },
      {
        word: "reveal",
        phrase: "Reveal the secret.",
        choices: ["unveil", "conceal", "stifle", "retain"],
        answerIndex: 0,
        meaning: "to make something known that was hidden"
      },
      {
        word: "shabby",
        phrase: "a shabby couch",
        choices: ["run-down", "cozy", "costly", "fashionable"],
        answerIndex: 0,
        meaning: "worn out and in poor condition"
      },
      {
        word: "pointless",
        phrase: "A pointless effort",
        choices: ["futile", "reasonable", "helpful", "worthwhile"],
        answerIndex: 0,
        meaning: "having no purpose"
      },
      {
        word: "modest",
        phrase: "You are too modest.",
        choices: ["unassuming", "brazen", "vain", "boastful"],
        answerIndex: 0,
        meaning: "not boastful; shy about one's abilities"
      },
      {
        word: "entire",
        phrase: "My entire wardrobe",
        choices: ["complete", "partial", "restricted", "wardrobe"],
        answerIndex: 0,
        meaning: "whole; complete"
      },
      {
        word: "skilled",
        phrase: "A skilled worker",
        choices: ["proficient", "unskilled", "clumsy", "ambitious"],
        answerIndex: 0,
        meaning: "having ability or expertise"
      },
      {
        word: "shriek",
        phrase: "To shriek with laughter",
        choices: ["screech", "chuckle", "squeak", "gulp"],
        answerIndex: 0,
        meaning: "to give a loud, high-pitched cry"
      },
      {
        word: "frantic",
        phrase: "a frantic call",
        choices: ["frenzied", "composed", "tame", "furious"],
        answerIndex: 0,
        meaning: "wild with fear, worry, or excitement"
      },
      {
        word: "ease",
        phrase: "We talked with ease.",
        choices: ["effortlessness", "thrill", "hardship", "turmoil"],
        answerIndex: 0,
        meaning: "freedom from difficulty; comfort"
      },
      {
        word: "desire",
        phrase: "This is my greatest desire.",
        choices: ["craving", "present", "distaste", "disfavor"],
        answerIndex: 0,
        meaning: "a strong wish for something"
      },
      {
        word: "contribute",
        phrase: "I want to contribute.",
        choices: ["give", "remove", "enroll", "disregard"],
        answerIndex: 0,
        meaning: "to give something, especially to help"
      },
      {
        word: "administer",
        phrase: "Please administer support.",
        choices: ["dispense", "refuse", "retract", "avoid"],
        answerIndex: 0,
        meaning: "to give or provide something"
      },
      {
        word: "humble",
        phrase: "The boy is humble.",
        choices: ["unpretentious", "bold", "forceful", "sociable"],
        answerIndex: 0,
        meaning: "not proud; modest"
      },
      {
        word: "resist",
        phrase: "Don't resist change.",
        choices: ["withstand", "obey", "submit", "consent"],
        answerIndex: 0,
        meaning: "to refuse to accept or go along with"
      },
      {
        word: "gazebo",
        phrase: "The gazebo in the backyard",
        choices: ["garden structure", "stadium", "playhouse", "property"],
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
        choices: ["foe", "champion", "main character", "star"],
        answerIndex: 0,
        meaning: "a character who opposes the main character"
      },
      {
        word: "records",
        phrase: "lost records",
        choices: ["files", "speech", "novels", "discs"],
        answerIndex: 0,
        meaning: "written or official documents"
      },
      {
        word: "deprive",
        phrase: "Don't deprive him.",
        choices: ["deny", "free", "pamper", "grant"],
        answerIndex: 0,
        meaning: "to keep someone from having or enjoying something"
      },
      {
        word: "nonchalant",
        phrase: "He acted nonchalant.",
        choices: ["cool and casual", "high-strung", "jittery", "so-so"],
        answerIndex: 0,
        meaning: "calm and relaxed; not worried"
      },
      {
        word: "perish",
        phrase: "Publish or perish",
        choices: ["expire", "revitalize", "thrive", "sprout"],
        answerIndex: 0,
        meaning: "to die or come to an end"
      },
      {
        word: "minor",
        phrase: "a minor talent",
        choices: ["trivial", "youngster", "major", "crucial"],
        answerIndex: 0,
        meaning: "small in size or importance"
      },
      {
        word: "gorge",
        phrase: "Don't gorge on the food",
        choices: ["devour", "peck at", "browse", "sample"],
        answerIndex: 0,
        meaning: "to eat greedily or in large amounts"
      },
      {
        word: "obsolete",
        phrase: "The device is obsolete.",
        choices: ["old-fashioned", "modern", "malfunctioning", "stale"],
        answerIndex: 0,
        meaning: "no longer used; outdated"
      },
      {
        word: "sparse",
        phrase: "His decor is sparse.",
        choices: ["bare", "abundant", "excessive", "timeless"],
        answerIndex: 0,
        meaning: "thinly spread; not dense"
      },
      {
        word: "vivid",
        phrase: "a vivid description",
        choices: ["lifelike", "faint", "excessive", "muted"],
        answerIndex: 0,
        meaning: "producing a clear, strong image in the mind"
      },
      {
        word: "revert",
        phrase: "Click here to revert to the home page.",
        choices: ["go back to", "locate", "unlock", "duplicate"],
        answerIndex: 0,
        meaning: "to return to a previous state"
      },
      {
        word: "motivate",
        phrase: "Motivate the team.",
        choices: ["inspire", "sadden", "collect", "urge"],
        answerIndex: 0,
        meaning: "to give someone a reason to act"
      },
      {
        word: "provide",
        phrase: "Provide shelter",
        choices: ["furnish", "take away", "block", "plan"],
        answerIndex: 0,
        meaning: "to supply or make available"
      },
      {
        word: "settle",
        phrase: "Don't settle for less",
        choices: ["agree to", "relocate", "accomplish", "dwell"],
        answerIndex: 0,
        meaning: "to accept something as final, often less than hoped for"
      },
      {
        word: "suspend",
        phrase: "Suspend disbelief",
        choices: ["halt", "permit", "trigger", "initiate"],
        answerIndex: 0,
        meaning: "to stop something temporarily"
      },
      {
        word: "kin",
        phrase: "Next of kin",
        choices: ["family members", "pals", "siblings only", "neighbors"],
        answerIndex: 0,
        meaning: "family members; relatives"
      },
      {
        word: "pedestrian",
        phrase: "That new song is pedestrian.",
        choices: ["unremarkable", "unusual", "outstanding", "onlooker"],
        answerIndex: 0,
        meaning: "ordinary and dull; unremarkable"
      },
      {
        word: "excavate",
        phrase: "Excavate the find",
        choices: ["dig into", "advertise", "cover up", "capture on film"],
        answerIndex: 0,
        meaning: "to dig out or uncover"
      },
      {
        word: "intense",
        phrase: "An intense experience",
        choices: ["severe", "sluggish", "subdued", "apathetic"],
        answerIndex: 0,
        meaning: "very strong or extreme"
      },
      {
        word: "mischief",
        phrase: "Full of mischief",
        choices: ["tomfoolery", "laughter", "cooperation", "riddles"],
        answerIndex: 0,
        meaning: "playful troublemaking"
      },
      {
        word: "exert",
        phrase: "to exert pressure",
        choices: ["exercise", "abuse", "overlook", "avoid"],
        answerIndex: 0,
        meaning: "to apply or use effort or force"
      },
      {
        word: "detect",
        phrase: "To detect a lie",
        choices: ["sense", "fail to notice", "disregard", "skip over"],
        answerIndex: 0,
        meaning: "to discover or notice something"
      },
      {
        word: "bungle",
        phrase: "To bungle a job",
        choices: ["botch up", "repair", "triumph", "finish"],
        answerIndex: 0,
        meaning: "to do something clumsily or carelessly"
      },
      {
        word: "soundproof",
        phrase: "soundproof booth",
        choices: ["sound-blocking", "loud", "sealed tight", "buzzing"],
        answerIndex: 0,
        meaning: "designed to block sound from passing through"
      },
      {
        word: "assume",
        phrase: "Assume the worst",
        choices: ["presume", "question", "conclude logically", "refuse"],
        answerIndex: 0,
        meaning: "to accept something as true without proof"
      },
      {
        word: "compose",
        phrase: "Compose yourself.",
        choices: ["calm oneself", "stir up", "thrill", "enrage"],
        answerIndex: 0,
        meaning: "to calm or control oneself"
      },
      {
        word: "aim",
        phrase: "Aim for peace.",
        choices: ["target", "donate", "talk", "pen"],
        answerIndex: 0,
        meaning: "to try hard for a goal; strive"
      },
      {
        word: "astound",
        phrase: "You astound me.",
        choices: ["stun", "possess", "tire out", "terrify"],
        answerIndex: 0,
        meaning: "to surprise or amaze greatly"
      },
      {
        word: "occasion",
        phrase: "a special occasion",
        choices: ["instance", "invite", "journey", "ornament"],
        answerIndex: 0,
        meaning: "a particular event or happening"
      },
      {
        word: "illuminate",
        phrase: "Illuminate your point.",
        choices: ["clarify", "puzzle", "glisten", "darken"],
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
        choices: ["plead", "remember", "withdraw", "regret"],
        answerIndex: 0,
        meaning: "to make an earnest request"
      },
      {
        word: "consent",
        phrase: "Give consent",
        choices: ["permission", "refusal", "protest", "suggestion"],
        answerIndex: 0,
        meaning: "permission or approval"
      },
      {
        word: "complement",
        phrase: "A nice complement",
        choices: ["match", "drawback", "compliment", "kindness"],
        answerIndex: 0,
        meaning: "something that completes or matches well with another thing"
      },
      {
        word: "collaborate",
        phrase: "To collaborate on the project",
        choices: ["team up", "argue", "protest", "resist"],
        answerIndex: 0,
        meaning: "to work together with others"
      },
      {
        word: "defer",
        phrase: "To defer the discussion",
        choices: ["postpone", "move up", "speed along", "rush"],
        answerIndex: 0,
        meaning: "to put off until later; delay"
      },
      {
        word: "conspicuous",
        phrase: "conspicuous consumption",
        choices: ["noticeable", "hidden", "ordinary", "faint"],
        answerIndex: 0,
        meaning: "easily seen or noticed"
      },
      {
        word: "arid",
        phrase: "An arid climate",
        choices: ["parched", "damp", "chilly", "muggy"],
        answerIndex: 0,
        meaning: "extremely dry, especially due to lack of rain"
      },
      {
        word: "cultivate",
        phrase: "Cultivate a friendship.",
        choices: ["foster", "pick", "disregard", "spoil"],
        answerIndex: 0,
        meaning: "to develop or improve through effort"
      },
      {
        word: "esteem",
        phrase: "Hold him in esteem.",
        choices: ["regard highly", "mock", "long for", "gentleness"],
        answerIndex: 0,
        meaning: "respect and admiration"
      },
      {
        word: "meager",
        phrase: "Meager earnings",
        choices: ["scanty", "plentiful", "generous", "excess"],
        answerIndex: 0,
        meaning: "small in amount; not enough"
      },
      {
        word: "omniscient",
        phrase: "An omniscient authority",
        choices: ["all-knowing", "regional", "well-known", "worldwide"],
        answerIndex: 0,
        meaning: "knowing everything"
      },
      {
        word: "priority",
        phrase: "Make that a priority.",
        choices: ["top concern", "trivial matter", "afterthought", "debate"],
        answerIndex: 0,
        meaning: "something treated as more important than other things"
      },
      {
        word: "recount",
        phrase: "Recount what happened.",
        choices: ["narrate", "keep secret", "cover up", "suppress"],
        answerIndex: 0,
        meaning: "to tell or describe in detail"
      },
      {
        word: "remorse",
        phrase: "Full of remorse",
        choices: ["guilt", "joy", "curiosity", "honesty"],
        answerIndex: 0,
        meaning: "deep regret for something one has done"
      },
      {
        word: "stifle",
        phrase: "To stifle communication",
        choices: ["choke off", "promote", "assist", "join in"],
        answerIndex: 0,
        meaning: "to hold back or suppress"
      },
      {
        word: "verdict",
        phrase: "The verdict was read.",
        choices: ["ruling", "charge", "panel", "honor"],
        answerIndex: 0,
        meaning: "a formal decision or judgment"
      },
      {
        word: "terrain",
        phrase: "a rocky terrain",
        choices: ["ground", "debate", "empty lot", "moon rock"],
        answerIndex: 0,
        meaning: "an area of land, especially in terms of its physical features"
      },
      {
        word: "swarm",
        phrase: "Don't swarm the celebrity.",
        choices: ["mob", "overlook", "scatter", "single out"],
        answerIndex: 0,
        meaning: "to gather in a large crowd"
      },
      {
        word: "sanctuary",
        phrase: "The dissident seeks sanctuary.",
        choices: ["refuge", "resort", "welcome", "companionship"],
        answerIndex: 0,
        meaning: "a safe place; a place of protection"
      },
      {
        word: "dissident",
        phrase: "The dissident seeks sanctuary.",
        choices: ["rebel", "official", "loyalist", "entertainer"],
        answerIndex: 0,
        meaning: "a person who publicly disagrees with authority"
      },
      {
        word: "verge",
        phrase: "On the verge of collapse",
        choices: ["brink", "start", "reverse", "center"],
        answerIndex: 0,
        meaning: "the edge or point at which something begins"
      },
      {
        word: "gangly",
        phrase: "A gangly kid",
        choices: ["lanky", "stout", "defiant", "youthful"],
        answerIndex: 0,
        meaning: "tall, thin, and awkward in movement"
      },
      {
        word: "rural",
        phrase: "A rural setting",
        choices: ["countryside", "downtown", "suburban", "arid"],
        answerIndex: 0,
        meaning: "relating to the countryside"
      },
      {
        word: "predicament",
        phrase: "A tough predicament",
        choices: ["fix", "remedy", "backstory", "debate"],
        answerIndex: 0,
        meaning: "a difficult or unpleasant situation"
      },
      {
        word: "plummet",
        phrase: "The price will plummet.",
        choices: ["drop sharply", "climb", "level off", "double"],
        answerIndex: 0,
        meaning: "to fall suddenly and steeply"
      },
      {
        word: "remote",
        phrase: "A remote chance",
        choices: ["slim", "strong", "nearby", "certain"],
        answerIndex: 0,
        meaning: "unlikely; distant"
      },
      {
        word: "exonerated",
        phrase: "The defendant was exonerated.",
        choices: ["acquitted", "convicted", "faulted", "charged"],
        answerIndex: 0,
        meaning: "cleared of blame or wrongdoing"
      },
      {
        word: "retaliate",
        phrase: "He might retaliate.",
        choices: ["strike back", "pardon", "let down", "empathize"],
        answerIndex: 0,
        meaning: "to get even; to strike back"
      },
      {
        word: "idiom",
        phrase: "A unique idiom.",
        choices: ["turn of phrase", "drawl", "narrative skill", "singing voice"],
        answerIndex: 0,
        meaning: "an expression whose meaning isn't obvious from its individual words"
      },
      {
        word: "precise",
        phrase: "The precise time",
        choices: ["accurate", "vague", "incorrect", "doubtful"],
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
        choices: ["look forward to", "overlook", "fear", "avoid"],
        answerIndex: 0,
        meaning: "to expect or look forward to something"
      },
      {
        word: "clamor",
        phrase: "the clamor of the crowd",
        choices: ["racket", "stillness", "murmur", "hush"],
        answerIndex: 0,
        meaning: "a loud, confused noise, often from a crowd"
      },
      {
        word: "eager",
        phrase: "she was eager to start",
        choices: ["keen", "hesitant", "worn out", "uninterested"],
        answerIndex: 0,
        meaning: "having or showing keen interest or enthusiasm"
      },
      {
        word: "reluctant",
        phrase: "he was reluctant to leave",
        choices: ["hesitant", "keen", "prepared", "thrilled"],
        answerIndex: 0,
        meaning: "unwilling and hesitant"
      },
      {
        word: "banish",
        phrase: "to banish the villain",
        choices: ["cast out", "greet", "invite in", "praise"],
        answerIndex: 0,
        meaning: "to send someone away as punishment"
      },
      {
        word: "compensation",
        phrase: "she received compensation for the damage",
        choices: ["reimbursement", "fine", "petition", "grievance"],
        answerIndex: 0,
        meaning: "something given to make up for a loss or harm"
      },
      {
        word: "dense",
        phrase: "a dense forest",
        choices: ["packed tightly", "scattered", "wide open", "empty"],
        answerIndex: 0,
        meaning: "closely packed together; thick"
      },
      {
        word: "flaw",
        phrase: "a flaw in the plan",
        choices: ["shortcoming", "advantage", "perk", "victory"],
        answerIndex: 0,
        meaning: "a mistake or weakness that makes something imperfect"
      },
      {
        word: "gullible",
        phrase: "he is gullible and believes anything",
        choices: ["naive", "wary", "shrewd", "guarded"],
        answerIndex: 0,
        meaning: "easily tricked or deceived"
      },
      {
        word: "impact",
        phrase: "the impact of the storm",
        choices: ["influence", "origin", "postponement", "quiet"],
        answerIndex: 0,
        meaning: "a strong effect or influence"
      },
      {
        word: "massive",
        phrase: "a massive iceberg",
        choices: ["gigantic", "minuscule", "slender", "featherweight"],
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
        choices: ["exact", "mistaken", "sloppy", "approximate"],
        answerIndex: 0,
        meaning: "correct and exact"
      },
      {
        word: "crucial",
        phrase: "a crucial decision",
        choices: ["vital", "small", "optional", "unimportant"],
        answerIndex: 0,
        meaning: "extremely important; vital"
      },
      {
        word: "emerge",
        phrase: "the sun began to emerge",
        choices: ["come into view", "disappear", "duck away", "descend"],
        answerIndex: 0,
        meaning: "to come out or become visible"
      },
      {
        word: "ferocious",
        phrase: "a ferocious storm",
        choices: ["violent", "mild", "peaceful", "light"],
        answerIndex: 0,
        meaning: "extremely fierce or violent"
      },
      {
        word: "persuade",
        phrase: "try to persuade him",
        choices: ["win over", "talk out of", "disregard", "puzzle"],
        answerIndex: 0,
        meaning: "to cause someone to do something through reasoning"
      },
      {
        word: "abrupt",
        phrase: "an abrupt stop",
        choices: ["unexpected", "steady", "anticipated", "unhurried"],
        answerIndex: 0,
        meaning: "sudden and unexpected"
      },
      {
        word: "barrier",
        phrase: "a barrier blocked the road",
        choices: ["blockade", "route", "gap", "crossing"],
        answerIndex: 0,
        meaning: "something that blocks or prevents movement"
      },
      {
        word: "defiant",
        phrase: "a defiant look",
        choices: ["insubordinate", "compliant", "pleasant", "timid"],
        answerIndex: 0,
        meaning: "boldly resisting authority"
      },
      {
        word: "fragile",
        phrase: "a fragile vase",
        choices: ["breakable", "solid", "indestructible", "weighty"],
        answerIndex: 0,
        meaning: "easily broken or damaged"
      },
      {
        word: "gargantuan",
        phrase: "a gargantuan meal",
        choices: ["colossal", "small", "typical", "plain"],
        answerIndex: 0,
        meaning: "enormous; gigantic"
      },
      {
        word: "hinder",
        phrase: "rain will hinder our plans",
        choices: ["impede", "assist", "hasten", "permit"],
        answerIndex: 0,
        meaning: "to create difficulty for; delay or obstruct"
      },
      {
        word: "jostle",
        phrase: "the crowd began to jostle",
        choices: ["shove", "pause", "stand still", "cheer"],
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
        choices: ["copious", "sparse", "insufficient", "restricted"],
        answerIndex: 0,
        meaning: "existing in large quantities; plentiful"
      },
      {
        word: "bellow",
        phrase: "the coach began to bellow",
        choices: ["roar", "murmur", "hum a tune", "chant softly"],
        answerIndex: 0,
        meaning: "to shout loudly"
      },
      {
        word: "diminish",
        phrase: "the pain will diminish",
        choices: ["lessen", "grow", "persist", "spread out"],
        answerIndex: 0,
        meaning: "to become or make smaller; lessen"
      },
      {
        word: "exaggerate",
        phrase: "don't exaggerate the story",
        choices: ["blow out of proportion", "downplay", "leave out", "forget"],
        answerIndex: 0,
        meaning: "to make something seem larger or more important than it is"
      },
      {
        word: "formidable",
        phrase: "a formidable opponent",
        choices: ["intimidating", "feeble", "unthreatening", "simple"],
        answerIndex: 0,
        meaning: "inspiring fear or respect through being impressive or powerful"
      },
      {
        word: "inevitably",
        phrase: "inevitably, the truth came out",
        choices: ["certainly", "conceivably", "sometimes", "improbably"],
        answerIndex: 0,
        meaning: "in a way that cannot be avoided; certainly"
      },
      {
        word: "rigorous",
        phrase: "a rigorous training schedule",
        choices: ["strict", "effortless", "laid-back", "informal"],
        answerIndex: 0,
        meaning: "extremely thorough and demanding"
      },
      {
        word: "unanimous",
        phrase: "a unanimous vote",
        choices: ["in complete agreement", "split down the middle", "contested", "undecided"],
        answerIndex: 0,
        meaning: "fully in agreement; united in opinion"
      },
      {
        word: "dwell",
        phrase: "they dwell in the mountains",
        choices: ["reside", "journey", "pass through", "roam"],
        answerIndex: 0,
        meaning: "to live in or reside at a place"
      },
      {
        word: "eerie",
        phrase: "an eerie silence",
        choices: ["unsettling", "soothing", "upbeat", "unremarkable"],
        answerIndex: 0,
        meaning: "strange and frightening"
      },
      {
        word: "frivolous",
        phrase: "a frivolous excuse",
        choices: ["trifling", "grave", "sound", "pressing"],
        answerIndex: 0,
        meaning: "not having any serious purpose; trivial"
      },
      {
        word: "hostile",
        phrase: "a hostile crowd",
        choices: ["antagonistic", "warm", "peaceful", "cordial"],
        answerIndex: 0,
        meaning: "unfriendly or aggressive"
      },
      {
        word: "improvises",
        phrase: "she improvises when she forgets her lines",
        choices: ["makes it up on the fly", "recites word for word", "reads from a script", "practices repeatedly"],
        answerIndex: 0,
        meaning: "creates or performs something without preparation"
      },
      {
        word: "linger",
        phrase: "the smell began to linger",
        choices: ["persist", "disappear", "clear out fast", "scatter"],
        answerIndex: 0,
        meaning: "to stay somewhere longer than necessary"
      },
      {
        word: "monotonous",
        phrase: "a monotonous lecture",
        choices: ["tedious", "engaging", "diverse", "spirited"],
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
        choices: ["gloomy", "cheerful", "lively", "serene"],
        answerIndex: 0,
        meaning: "a feeling of deep sadness"
      },
      {
        word: "replenish",
        phrase: "replenish the water supply",
        choices: ["restock", "use up", "spill", "squander"],
        answerIndex: 0,
        meaning: "to fill something up again"
      },
      {
        word: "vanish",
        phrase: "the rabbit seemed to vanish",
        choices: ["vanish from sight", "come into view", "stay put", "show up"],
        answerIndex: 0,
        meaning: "to disappear suddenly"
      },
      {
        word: "fascinating",
        phrase: "a fascinating documentary",
        choices: ["riveting", "dreary", "flat", "monotonous"],
        answerIndex: 0,
        meaning: "extremely interesting"
      },
      {
        word: "perilous",
        phrase: "a perilous journey",
        choices: ["hazardous", "secure", "effortless", "tranquil"],
        answerIndex: 0,
        meaning: "full of danger or risk"
      },
      {
        word: "flawless",
        phrase: "a flawless performance",
        choices: ["impeccable", "sloppy", "flawed", "awkward"],
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
        choices: ["ample", "sparse", "spoiled", "buried"],
        answerIndex: 0,
        meaning: "plentiful; a lot"
      },
      {
        word: "acquired",
        phrase: "she acquired a new skill",
        choices: ["picked up", "misplaced", "unlearned", "damaged"],
        answerIndex: 0,
        meaning: "gained; obtained"
      },
      {
        word: "adequate",
        phrase: "adequate supplies for the trip",
        choices: ["sufficient", "lacking", "overflowing", "damaged"],
        answerIndex: 0,
        meaning: "enough; sufficient"
      },
      {
        word: "altered",
        phrase: "he altered his plans",
        choices: ["modified", "preserved", "duplicated", "disregarded"],
        answerIndex: 0,
        meaning: "changed"
      },
      {
        word: "ample",
        phrase: "ample time to finish",
        choices: ["plenty of", "barely any", "zero", "insufficient"],
        answerIndex: 0,
        meaning: "more than enough"
      },
      {
        word: "authentic",
        phrase: "an authentic signature",
        choices: ["real", "counterfeit", "duplicated", "pilfered"],
        answerIndex: 0,
        meaning: "genuine; real"
      },
      {
        word: "clarify",
        phrase: "please clarify your answer",
        choices: ["explain more clearly", "muddle", "conceal", "restate word for word"],
        answerIndex: 0,
        meaning: "make clear"
      },
      {
        word: "compatible",
        phrase: "the two programs are compatible",
        choices: ["work well together", "clash with each other", "exactly alike", "totally unrelated"],
        answerIndex: 0,
        meaning: "able to work well together"
      },
      {
        word: "concise",
        phrase: "a concise summary",
        choices: ["short and to the point", "drawn out and wordy", "muddled", "unfinished"],
        answerIndex: 0,
        meaning: "brief and clear"
      },
      {
        word: "derives",
        phrase: "the word derives from Latin",
        choices: ["originates from", "wipes out", "conceals", "swaps out"],
        answerIndex: 0,
        meaning: "gets or comes from"
      },
      {
        word: "distinct",
        phrase: "two distinct colors",
        choices: ["separate and different", "the same", "merged together", "washed out"],
        answerIndex: 0,
        meaning: "clearly different"
      },
      {
        word: "diverse",
        phrase: "a diverse group of students",
        choices: ["mixed", "uniform", "tiny", "silent"],
        answerIndex: 0,
        meaning: "varied; different"
      },
      {
        word: "frequent",
        phrase: "a frequent visitor",
        choices: ["regular", "occasional", "one-time", "never-occurring"],
        answerIndex: 0,
        meaning: "happening often"
      },
      {
        word: "frivolous",
        phrase: "a frivolous excuse",
        choices: ["lacking substance", "weighty", "critical", "pressing"],
        answerIndex: 0,
        meaning: "not serious; unimportant"
      },
      {
        word: "gradual",
        phrase: "a gradual change",
        choices: ["happening bit by bit", "abrupt", "instantaneous", "undone"],
        answerIndex: 0,
        meaning: "happening slowly, little by little"
      },
      {
        word: "implied",
        phrase: "she implied she was upset",
        choices: ["hinted at", "announced plainly", "denied outright", "yelled"],
        answerIndex: 0,
        meaning: "suggested without directly saying"
      },
      {
        word: "indifferent",
        phrase: "he seemed indifferent to the outcome",
        choices: ["apathetic", "thrilled", "enraged", "committed"],
        answerIndex: 0,
        meaning: "unconcerned; not interested"
      },
      {
        word: "inhibit",
        phrase: "fear can inhibit progress",
        choices: ["restrain", "accelerate", "back", "celebrate"],
        answerIndex: 0,
        meaning: "restrain; hold back"
      },
      {
        word: "innovative",
        phrase: "an innovative invention",
        choices: ["groundbreaking", "old-fashioned", "borrowed", "faulty"],
        answerIndex: 0,
        meaning: "new; original"
      },
      {
        word: "interpret",
        phrase: "interpret the poem's meaning",
        choices: ["make sense of", "memorize word for word", "disregard", "rewrite entirely"],
        answerIndex: 0,
        meaning: "understand or explain the meaning"
      },
      {
        word: "legitimate",
        phrase: "a legitimate excuse",
        choices: ["justified", "bogus", "absurd", "impolite"],
        answerIndex: 0,
        meaning: "valid; genuine"
      },
      {
        word: "meticulous",
        phrase: "meticulous notes",
        choices: ["painstakingly thorough", "sloppy", "disorganized", "hasty"],
        answerIndex: 0,
        meaning: "extremely careful"
      },
      {
        word: "objective",
        phrase: "an objective report",
        choices: ["impartial", "biased", "emotional", "overblown"],
        answerIndex: 0,
        meaning: "unbiased; based on facts"
      },
      {
        word: "postpone",
        phrase: "postpone the meeting",
        choices: ["push back", "kick off right away", "scrap entirely", "rush forward"],
        answerIndex: 0,
        meaning: "delay until later"
      },
      {
        word: "prominent",
        phrase: "a prominent landmark",
        choices: ["conspicuous", "concealed", "minuscule", "unmemorable"],
        answerIndex: 0,
        meaning: "noticeable; important"
      },
      {
        word: "prospect",
        phrase: "the prospect of a new job",
        choices: ["chance", "guarantee", "recollection", "slip-up"],
        answerIndex: 0,
        meaning: "possibility"
      },
      {
        word: "recede",
        phrase: "the floodwaters began to recede",
        choices: ["retreat", "surge upward", "ice over", "boil"],
        answerIndex: 0,
        meaning: "move back or away"
      },
      {
        word: "skeptical",
        phrase: "she was skeptical of the claim",
        choices: ["unconvinced", "trusting", "eager", "unbothered"],
        answerIndex: 0,
        meaning: "doubtful"
      },
      {
        word: "tentative",
        phrase: "a tentative plan",
        choices: ["subject to change", "set in stone", "unworkable", "forgotten"],
        answerIndex: 0,
        meaning: "uncertain; not final"
      }
    ]
  }
];
