// Spelling practice sets for the Iowa Assessments practice app.
// Mirrors every set in words.js (Word Set 1-13 and the Wonders Unit 1-6 sets):
// each spelling set quizzes the exact same words, asking the student to pick
// the correctly spelled word to fill the blank in its original phrase.
// Each question has:
//   prompt      - the phrase with the target word blanked out
//   choices     - four spellings (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/dol.js convention

window.SPELLING_SETS = [
  {
    id: "spelling-set1",
    name: "Spelling Set 1",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the question\"",
        choices: ["evade", "eavde", "evvade", "evde"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ greeting\"",
        choices: ["courteous", "cuorteous", "coourteous", "curteous"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"many plants ______ in winter\"",
        choices: ["perish", "preish", "peerish", "prish"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ mountain\"",
        choices: ["immense", "imemnse", "immmense", "imense"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the magic trick will ______ you\"",
        choices: ["astound", "atsound", "asstound", "astund"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ excuse\"",
        choices: ["feeble", "febele", "feeeble", "feble"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ from the race\"",
        choices: ["withdraw", "wtihdraw", "wiithdraw", "wthdraw"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ worker\"",
        choices: ["industrious", "idnustrious", "inndustrious", "indstrious"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ down the street\"",
        choices: ["saunter", "suanter", "saaunter", "sunter"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ turtle\"",
        choices: ["sluggish", "sulggish", "slluggish", "slugish"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"his jokes ______ her\"",
        choices: ["exasperate", "eaxsperate", "exxasperate", "exsperate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ computer\"",
        choices: ["obsolete", "osbolete", "obbsolete", "obslete"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ someone of sleep\"",
        choices: ["deprive", "dperive", "deeprive", "dprive"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ shrug\"",
        choices: ["nonchalant", "nnochalant", "noonchalant", "nnchalant"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ in victory\"",
        choices: ["exult", "euxlt", "exxult", "exlt"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ crowd\"",
        choices: ["sparse", "saprse", "spparse", "sprse"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ a rival\"",
        choices: ["taunt", "tuant", "taaunt", "tunt"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ laugh\"",
        choices: ["hearty", "haerty", "heearty", "harty"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the game\"",
        choices: ["suspend", "ssupend", "suuspend", "sspend"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ walk\"",
        choices: ["solitary", "sloitary", "soolitary", "slitary"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-set2",
    name: "Spelling Set 2",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ an unfair law\"",
        choices: ["abolish", "aoblish", "abbolish", "ablish"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ idea\"",
        choices: ["absurd", "asburd", "abbsurd", "absrd"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ a privilege\"",
        choices: ["abuse", "aubse", "abbuse", "abse"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the files\"",
        choices: ["access", "acecss", "acccess", "acess"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ a goal\"",
        choices: ["accomplish", "acocmplish", "acccomplish", "acomplish"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a proud ______\"",
        choices: ["achievement", "ahcievement", "acchievement", "achevement"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ dog\"",
        choices: ["aggressive", "agrgessive", "agggressive", "agressive"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ between tasks\"",
        choices: ["alternate", "atlernate", "allternate", "altrnate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"flying at a high ______\"",
        choices: ["altitude", "atlitude", "alltitude", "alttude"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the story's ______\"",
        choices: ["antagonist", "atnagonist", "anntagonist", "antgonist"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"find the ______ for hot\"",
        choices: ["antonym", "atnonym", "anntonym", "antnym"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"feeling ______ before the test\"",
        choices: ["anxious", "axnious", "annxious", "anxous"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"it was ______ that he was tired\"",
        choices: ["apparent", "apaprent", "appparent", "aparent"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ answer\"",
        choices: ["approximate", "aprpoximate", "appproximate", "aproximate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ of fresh bread\"",
        choices: ["aroma", "aorma", "arroma", "arma"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ he was right\"",
        choices: ["assume", "asusme", "asssume", "asume"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"tickets are ______\"",
        choices: ["available", "aavilable", "avvailable", "avilable"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ of snow\"",
        choices: ["avalanche", "aavlanche", "avvalanche", "avlanche"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a wedding ______\"",
        choices: ["banquet", "bnaquet", "baanquet", "bnquet"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a cold ______\"",
        choices: ["beverage", "bveerage", "beeverage", "bverage"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-set3",
    name: "Spelling Set 3",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"______ food\"",
        choices: ["bland", "balnd", "blland", "blnd"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"caught in a ______\"",
        choices: ["blizzard", "bilzzard", "bllizzard", "blizard"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the rock wouldn't ______\"",
        choices: ["budge", "bduge", "buudge", "bdge"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the job\"",
        choices: ["bungle", "bnugle", "buungle", "bngle"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"she walked ______\"",
        choices: ["cautiously", "cuatiously", "caautiously", "cutiously"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a math ______\"",
        choices: ["challenge", "cahllenge", "chhallenge", "chalenge"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the story's main ______\"",
        choices: ["character", "cahracter", "chharacter", "chracter"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ two ingredients\"",
        choices: ["combine", "cmobine", "coombine", "cmbine"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a loyal ______\"",
        choices: ["companion", "cmopanion", "coompanion", "cmpanion"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"showing ______ for others\"",
        choices: ["compassion", "cmopassion", "coompassion", "compasion"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ for the loss\"",
        choices: ["compensate", "cmopensate", "coompensate", "cmpensate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ with the rules\"",
        choices: ["comply", "cmoply", "coomply", "cmply"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ a song\"",
        choices: ["compose", "cmopose", "coompose", "cmpose"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a difficult ______\"",
        choices: ["concept", "cnocept", "cooncept", "cncept"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"feeling ______ about the test\"",
        choices: ["confident", "cnofident", "coonfident", "cnfident"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the garage into a room\"",
        choices: ["convert", "cnovert", "coonvert", "cnvert"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"changed ______\"",
        choices: ["course", "cuorse", "coourse", "curse"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ chocolate\"",
        choices: ["crave", "carve", "crrave", "crve"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a class ______\"",
        choices: ["debate", "dbeate", "deebate", "dbate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ an invitation\"",
        choices: ["decline", "dceline", "deecline", "dcline"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-set4",
    name: "Spelling Set 4",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ time to practice\"",
        choices: ["dedicate", "ddeicate", "deedicate", "ddicate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ a problem\"",
        choices: ["detect", "dteect", "deetect", "dtect"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the rules\"",
        choices: ["dictate", "dcitate", "diictate", "dctate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the results\"",
        choices: ["document", "dcoument", "doocument", "dcument"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the key\"",
        choices: ["duplicate", "dpulicate", "duuplicate", "dplicate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ mushrooms\"",
        choices: ["edible", "eidble", "eddible", "edble"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the animals\"",
        choices: ["endanger", "ednanger", "enndanger", "endnger"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the conflict began to ______\"",
        choices: ["escalate", "ecsalate", "esscalate", "esclate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the ruins\"",
        choices: ["excavate", "ecxavate", "exxcavate", "excvate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ herself during practice\"",
        choices: ["exert", "eexrt", "exxert", "exrt"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ artwork\"",
        choices: ["exhibit", "ehxibit", "exxhibit", "exhbit"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ temperatures\"",
        choices: ["frigid", "firgid", "frrigid", "frgid"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ building\"",
        choices: ["gigantic", "ggiantic", "giigantic", "ggantic"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a deep ______\"",
        choices: ["gorge", "groge", "goorge", "grge"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"his legal ______\"",
        choices: ["guardian", "gaurdian", "guuardian", "gardian"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ morning\"",
        choices: ["hazy", "hzay", "haazy", "hzy"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"bark can be a tricky ______\"",
        choices: ["homonym", "hmoonym", "hoomonym", "hmonym"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ twins\"",
        choices: ["identical", "iedntical", "iddentical", "idntical"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the room\"",
        choices: ["illuminate", "ilulminate", "illluminate", "iluminate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ performance\"",
        choices: ["impressive", "ipmressive", "immpressive", "impresive"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-set5",
    name: "Spelling Set 5",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ thinker\"",
        choices: ["independent", "idnependent", "inndependent", "indpendent"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ heat\"",
        choices: ["intense", "itnense", "inntense", "intnse"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the pass\"",
        choices: ["intercept", "itnercept", "inntercept", "intrcept"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"shouts of ______\"",
        choices: ["jubilation", "jbuilation", "juubilation", "jbilation"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"his closest ______\"",
        choices: ["kin", "kni", "kiin", "kn"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ hotel\"",
        choices: ["luxurious", "lxuurious", "luuxurious", "lxurious"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ decision\"",
        choices: ["major", "mjaor", "maajor", "mjor"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ model\"",
        choices: ["miniature", "mniiature", "miiniature", "mniature"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ injury\"",
        choices: ["minor", "mnior", "miinor", "mnor"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"full of ______\"",
        choices: ["mischief", "msichief", "miischief", "mschief"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the reigning ______\"",
        choices: ["monarch", "mnoarch", "moonarch", "mnarch"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ of the story\"",
        choices: ["moral", "mroal", "mooral", "mral"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ancient ______\"",
        choices: ["myth", "mtyh", "myyth", "mith"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the story's ______\"",
        choices: ["narrator", "nrarator", "naarrator", "narator"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the ship\"",
        choices: ["navigate", "nvaigate", "naavigate", "nvigate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ attitude\"",
        choices: ["negative", "ngeative", "neegative", "ngative"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ mistakes\"",
        choices: ["numerous", "nmuerous", "nuumerous", "nmerous"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ in the desert\"",
        choices: ["oasis", "osais", "oaasis", "osis"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a special ______\"",
        choices: ["occasion", "ocacsion", "occcasion", "ocasion"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the government\"",
        choices: ["overthrow", "oevrthrow", "ovverthrow", "ovrthrow"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-set6",
    name: "Spelling Set 6",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ a criminal\"",
        choices: ["pardon", "pradon", "paardon", "prdon"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"cows grazing in the ______\"",
        choices: ["pasture", "psature", "paasture", "psture"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ crossing the street\"",
        choices: ["pedestrian", "pdeestrian", "peedestrian", "pdestrian"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the news would ______ her\"",
        choices: ["petrify", "pterify", "peetrify", "ptrify"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ radio\"",
        choices: ["portable", "protable", "poortable", "prtable"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"un- is a common ______\"",
        choices: ["prefix", "perfix", "prrefix", "prfix"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the forest\"",
        choices: ["preserve", "perserve", "prreserve", "prserve"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the story's ______\"",
        choices: ["protagonist", "portagonist", "prrotagonist", "prtagonist"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ food\"",
        choices: ["provide", "porvide", "prrovide", "prvide"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ a ticket\"",
        choices: ["purchase", "pruchase", "puurchase", "prchase"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ painting\"",
        choices: ["realistic", "raelistic", "reealistic", "ralistic"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ a worried friend\"",
        choices: ["reassure", "raessure", "reeassure", "reasure"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the king's ______\"",
        choices: ["reign", "riegn", "reeign", "rign"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ friend\"",
        choices: ["reliable", "rleiable", "reeliable", "rliable"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ patience and skill\"",
        choices: ["require", "rqeuire", "reequire", "rquire"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"many children ______ their parents\"",
        choices: ["resemble", "rseemble", "reesemble", "rsemble"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ information\"",
        choices: ["retain", "rteain", "reetain", "rtain"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ from work\"",
        choices: ["retire", "rteire", "reetire", "rtire"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ to old habits\"",
        choices: ["revert", "rveert", "reevert", "rvert"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the fastest ______\"",
        choices: ["route", "ruote", "rooute", "rute"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-set7",
    name: "Spelling Set 7",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"he ______ visits\"",
        choices: ["seldom", "sledom", "seeldom", "sldom"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ act\"",
        choices: ["senseless", "sneseless", "seenseless", "senseles"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the rope\"",
        choices: ["sever", "sveer", "seever", "sver"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the snake began to ______\"",
        choices: ["slither", "silther", "sllither", "slther"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the eagle began to ______\"",
        choices: ["soar", "saor", "sooar", "sar"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ performance\"",
        choices: ["solo", "sloo", "soolo", "slo"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a sudden ______ of energy\"",
        choices: ["spurt", "suprt", "sppurt", "sprt"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a winning ______\"",
        choices: ["strategy", "srtategy", "sttrategy", "strtegy"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"-ful is a common ______\"",
        choices: ["suffix", "sfufix", "suuffix", "sufix"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ without air\"",
        choices: ["suffocate", "sfufocate", "suuffocate", "sufocate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the mountain's ______\"",
        choices: ["summit", "smumit", "suummit", "sumit"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"happy and glad form a ______ pair\"",
        choices: ["synonym", "snyonym", "syynonym", "synnym"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the eagle's ______\"",
        choices: ["talon", "tlaon", "taalon", "tlon"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ shopper\"",
        choices: ["thrifty", "trhifty", "thhrifty", "thrfty"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the book\"",
        choices: ["translate", "tarnslate", "trranslate", "trnslate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ island\"",
        choices: ["tropical", "torpical", "trropical", "trpical"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"barely ______ in the fog\"",
        choices: ["visible", "vsiible", "viisible", "vsible"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ aid\"",
        choices: ["visual", "vsiual", "viisual", "vsual"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ memory\"",
        choices: ["vivid", "vviid", "viivid", "vvid"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"lost in the ______\"",
        choices: ["wilderness", "wliderness", "wiilderness", "wildernes"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-set8",
    name: "Spelling Set 8",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"her grades were ______\"",
        choices: ["adequate", "aedquate", "addequate", "adquate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"he ______ his room with posters\"",
        choices: ["adorn", "aodrn", "addorn", "adrn"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"her childhood was full of ______\"",
        choices: ["adversity", "avdersity", "addversity", "advrsity"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the shoes have little ______ value\"",
        choices: ["aesthetic", "asethetic", "aeesthetic", "asthetic"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"passing notes ______ their teacher\"",
        choices: ["aggravate", "agrgavate", "agggravate", "agravate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"ways to ______ stress\"",
        choices: ["alleviate", "alelviate", "allleviate", "aleviate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ photographer\"",
        choices: ["amateur", "aamteur", "ammateur", "amteur"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a luxurious ______\"",
        choices: ["ambiance", "abmiance", "ammbiance", "ambance"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the painting's ______ smile\"",
        choices: ["ambiguous", "abmiguous", "ammbiguous", "ambguous"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ between the director and the actor\"",
        choices: ["animosity", "ainmosity", "annimosity", "anmosity"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ in the blood test results\"",
        choices: ["anomaly", "aonmaly", "annomaly", "anmaly"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the desert is so ______\"",
        choices: ["arid", "aird", "arrid", "ard"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"how ______ the student was\"",
        choices: ["articulate", "atriculate", "arrticulate", "artculate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ designer bag\"",
        choices: ["authentic", "atuhentic", "auuthentic", "athentic"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ by the confusing evidence\"",
        choices: ["bemuse", "bmeuse", "beemuse", "bmuse"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ by Shakespeare's language\"",
        choices: ["bewilder", "bweilder", "beewilder", "bwilder"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ the ingredients completely\"",
        choices: ["blend", "belnd", "bllend", "blnd"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a cozy chair and a good book is ______\"",
        choices: ["bliss", "bilss", "blliss", "blis"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"his ______ laughter\"",
        choices: ["boisterous", "biosterous", "booisterous", "bisterous"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"she ______ her sword\"",
        choices: ["brandish", "barndish", "brrandish", "brndish"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-set9",
    name: "Spelling Set 9",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"her parents would not ______ to her demands\"",
        choices: ["capitulate", "cpaitulate", "caapitulate", "cpitulate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ hundreds of feet deep\"",
        choices: ["chasm", "cahsm", "chhasm", "chsm"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"read the books in ______ order\"",
        choices: ["chronological", "crhonological", "chhronological", "chrnological"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ the dangerous terrain\"",
        choices: ["circumvent", "cricumvent", "ciircumvent", "crcumvent"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"fun to ______ with others\"",
        choices: ["collaborate", "clolaborate", "coollaborate", "colaborate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"her friendly ______\"",
        choices: ["colleague", "cloleague", "coolleague", "coleague"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"couldn't ______ why\"",
        choices: ["comprehend", "cmoprehend", "coomprehend", "cmprehend"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"based on ______, not evidence\"",
        choices: ["conjecture", "cnojecture", "coonjecture", "cnjecture"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"his ______ style of dressing\"",
        choices: ["conservative", "cnoservative", "coonservative", "cnservative"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"Leticia ______ she was the best choice\"",
        choices: ["contend", "cnotend", "coontend", "cntend"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"had the ______ to tell him\"",
        choices: ["courtesy", "cuortesy", "coourtesy", "curtesy"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"practice their ______ freely\"",
        choices: ["creed", "cered", "crreed", "cred"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a common ______ in Europe\"",
        choices: ["custom", "csutom", "cuustom", "cstom"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ of information\"",
        choices: ["dearth", "daerth", "deearth", "darth"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a major ______ for the restaurant\"",
        choices: ["debacle", "dbeacle", "deebacle", "dbacle"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ $500 from her paycheck\"",
        choices: ["deduct", "ddeuct", "deeduct", "dduct"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"returned the ______ computer\"",
        choices: ["defective", "dfeective", "deefective", "dfective"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"it ______ Norah to hear the news\"",
        choices: ["delight", "dleight", "deelight", "dlight"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ the old mansion\"",
        choices: ["demolish", "dmeolish", "deemolish", "dmolish"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the abandoned warehouse ______ quickly\"",
        choices: ["deteriorate", "dteeriorate", "deeteriorate", "dteriorate"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-set10",
    name: "Spelling Set 10",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"the antelopes ______\"",
        choices: ["disperse", "dsiperse", "diisperse", "dsperse"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ sedan\"",
        choices: ["durable", "druable", "duurable", "drable"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the rain ______ the footsteps\"",
        choices: ["efface", "efafce", "effface", "eface"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"he felt an ______ he had never experienced\"",
        choices: ["elation", "ealtion", "ellation", "eltion"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"Jillian ______ the idea of a break\"",
        choices: ["embrace", "ebmrace", "emmbrace", "embrce"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"remained an ______ to her\"",
        choices: ["enigma", "eingma", "ennigma", "engma"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"New York's ______ weather\"",
        choices: ["erratic", "erartic", "errratic", "eratic"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"Neil Armstrong was ______ as a hero\"",
        choices: ["exalt", "eaxlt", "exxalt", "exlt"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the defendant was ______\"",
        choices: ["exonerate", "eoxnerate", "exxonerate", "exnerate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ from the school\"",
        choices: ["expel", "epxel", "exxpel", "expl"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the diamond chandelier was too ______\"",
        choices: ["extravagant", "etxravagant", "exxtravagant", "extrvagant"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the mother bear's ______\"",
        choices: ["ferocity", "freocity", "feerocity", "frocity"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a financial ______\"",
        choices: ["fiasco", "faisco", "fiiasco", "fasco"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ clothing\"",
        choices: ["flamboyant", "falmboyant", "fllamboyant", "flmboyant"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the actor's ______\"",
        choices: ["gaffe", "gfafe", "gaaffe", "gafe"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a computer ______\"",
        choices: ["glitch", "giltch", "gllitch", "gltch"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ on April Fools' Day\"",
        choices: ["hoax", "haox", "hooax", "hax"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a few ______\"",
        choices: ["idiosyncrasy", "iidosyncrasy", "iddiosyncrasy", "idosyncrasy"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"his ______ manners\"",
        choices: ["impeccable", "ipmeccable", "immpeccable", "impecable"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ comments\"",
        choices: ["impertinent", "ipmertinent", "immpertinent", "imprtinent"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-set11",
    name: "Spelling Set 11",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"her most recent ______\"",
        choices: ["innovation", "inonvation", "innnovation", "inovation"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ heated arguments\"",
        choices: ["instigate", "isntigate", "innstigate", "instgate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ the claims\"",
        choices: ["investigate", "ivnestigate", "innvestigate", "invstigate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"it was ______ that the medicine made him worse\"",
        choices: ["ironic", "iornic", "irronic", "irnic"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"years of ______ training\"",
        choices: ["laborious", "lbaorious", "laaborious", "lborious"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"should ______ her achievements\"",
        choices: ["laud", "luad", "laaud", "lud"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the news left her ______\"",
        choices: ["livid", "lviid", "liivid", "lvid"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"part of our town's ______\"",
        choices: ["lore", "lroe", "loore", "lre"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"so ______ and charming\"",
        choices: ["loquacious", "lqouacious", "looquacious", "lquacious"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"his review was motivated by ______\"",
        choices: ["malice", "mlaice", "maalice", "mlice"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ of snacks\"",
        choices: ["medley", "mdeley", "meedley", "mdley"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"judged on the ______ of their arguments\"",
        choices: ["merit", "mreit", "meerit", "mrit"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ her brother's short stature\"",
        choices: ["mock", "mcok", "moock", "mck"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ her curriculum\"",
        choices: ["modify", "mdoify", "moodify", "mdify"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"Aaron's inconsistent ______\"",
        choices: ["narrative", "nrarative", "naarrative", "narative"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"defeat his ______\"",
        choices: ["nemesis", "nmeesis", "neemesis", "nmesis"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the soccer player's ______ moves\"",
        choices: ["nimble", "nmible", "niimble", "nmble"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ boy would not follow instructions\"",
        choices: ["obstinate", "osbtinate", "obbstinate", "obstnate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"her ______ Jeffrey\"",
        choices: ["opponent", "opopnent", "oppponent", "oponent"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"his ______ flirtation\"",
        choices: ["overt", "oevrt", "ovvert", "ovrt"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-set12",
    name: "Spelling Set 12",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"made a ______ not to play catch in the house\"",
        choices: ["pact", "pcat", "paact", "pct"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ attention to detail\"",
        choices: ["painstaking", "pianstaking", "paainstaking", "pinstaking"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"it seemed like a ______\"",
        choices: ["paradox", "praadox", "paaradox", "pradox"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"knew she was in ______\"",
        choices: ["peril", "preil", "peeril", "pril"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"would constantly ______ his sister\"",
        choices: ["pester", "pseter", "peester", "pster"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the guide was not very ______\"",
        choices: ["practical", "parctical", "prractical", "prctical"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ child\"",
        choices: ["precocious", "percocious", "prrecocious", "prcocious"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ guest at her party\"",
        choices: ["prominent", "porminent", "prrominent", "prminent"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ of the computer\"",
        choices: ["prototype", "portotype", "prrototype", "prtotype"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"various ______ for the teacher\"",
        choices: ["query", "qeury", "quuery", "qery"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the most ______ land animal\"",
        choices: ["rapid", "rpaid", "raapid", "rpid"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the historic mansion was ______\"",
        choices: ["raze", "rzae", "raaze", "rze"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"her attempts to clarify were ______\"",
        choices: ["redundant", "rdeundant", "reedundant", "rdundant"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"no known ______ to the common cold\"",
        choices: ["remedy", "rmeedy", "reemedy", "rmedy"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"severely ______ by his parents\"",
        choices: ["reprimand", "rperimand", "reeprimand", "rprimand"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"Jane ______ with a stern critique\"",
        choices: ["retort", "rteort", "reetort", "rtort"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ area surrounded by fields\"",
        choices: ["rural", "rrual", "ruural", "rral"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ poignant answer\"",
        choices: ["sage", "sgae", "saage", "sge"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"he was being ______ about the burnt cookies\"",
        choices: ["sarcastic", "sracastic", "saarcastic", "srcastic"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"Jessica ______ at the idea\"",
        choices: ["scoff", "socff", "sccoff", "scof"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-set13",
    name: "Spelling Set 13",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"made him feel ______\"",
        choices: ["secure", "sceure", "seecure", "scure"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"Angie felt ______ by the stream\"",
        choices: ["serene", "sreene", "seerene", "srene"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a well-known ______\"",
        choices: ["skeptic", "sekptic", "skkeptic", "skptic"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the cold weather inclined her towards ______\"",
        choices: ["sloth", "solth", "slloth", "slth"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ bite of cake\"",
        choices: ["sly", "syl", "slly", "cly"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the desert rainfall was ______\"",
        choices: ["sporadic", "sopradic", "spporadic", "spradic"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"made her best effort to ______ her cough\"",
        choices: ["stifle", "sitfle", "sttifle", "stfle"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"only ______ differences between the twins\"",
        choices: ["subtle", "sbutle", "suubtle", "sbtle"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"not difficult to ______ with the flood victims\"",
        choices: ["sympathize", "smypathize", "syympathize", "sympthize"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"presented his argument with such ______\"",
        choices: ["tact", "tcat", "taact", "tct"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"made ______ plans with Jessica\"",
        choices: ["tentative", "tnetative", "teentative", "tntative"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"very ______ in approaching his teacher\"",
        choices: ["timid", "tmiid", "tiimid", "tmid"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a high ______ for variations in temperature\"",
        choices: ["tolerance", "tloerance", "toolerance", "tlerance"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ hair colors\"",
        choices: ["unconventional", "ucnonventional", "unnconventional", "uncnventional"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ width\"",
        choices: ["uniform", "uinform", "unniform", "unform"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ rule at the school\"",
        choices: ["universal", "uinversal", "unniversal", "unversal"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ against the Jones family\"",
        choices: ["vendetta", "vnedetta", "veendetta", "vendeta"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"water is such a ______ resource\"",
        choices: ["vital", "vtial", "viital", "vtal"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"one of the most ______ parts of the body\"",
        choices: ["vulnerable", "vlunerable", "vuulnerable", "vlnerable"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ witch cast spells\"",
        choices: ["wicked", "wciked", "wiicked", "wcked"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-u1",
    name: "Spelling Unit 1",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"______ scattered across the yard\"",
        choices: ["debris", "dberis", "deebris", "dbris"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"put ______ on the last word\"",
        choices: ["emphasis", "epmhasis", "emmphasis", "emphsis"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ a bear on the trail\"",
        choices: ["encounter", "ecnounter", "enncounter", "encunter"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"three ______ at the reunion\"",
        choices: ["generations", "gneerations", "geenerations", "gnerations"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"she ______ the correct answer\"",
        choices: ["indicated", "idnicated", "inndicated", "indcated"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ studied the birds\"",
        choices: ["naturalist", "ntauralist", "naaturalist", "nturalist"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ cliff\"",
        choices: ["sheer", "seher", "shheer", "sher"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ fireworks show\"",
        choices: ["spectacular", "sepctacular", "sppectacular", "spctacular"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ a new bike\"",
        choices: ["afford", "afofrd", "affford", "aford"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"took out a ______ for the car\"",
        choices: ["loan", "laon", "looan", "lan"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the shop's ______ grew\"",
        choices: ["profit", "porfit", "prrofit", "prfit"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the business began to ______\"",
        choices: ["prosper", "porsper", "prrosper", "prsper"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ of getting hurt\"",
        choices: ["risk", "rsik", "riisk", "rsk"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"spent years building her ______\"",
        choices: ["savings", "svaings", "saavings", "svings"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"clean water was ______\"",
        choices: ["scarce", "sacrce", "sccarce", "scrce"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"earned fair ______\"",
        choices: ["wages", "wgaes", "waages", "wges"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ to the library\"",
        choices: ["access", "acecss", "acccess", "acess"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ to the next round\"",
        choices: ["advance", "avdance", "addvance", "advnce"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a careful ______ of the data\"",
        choices: ["analysis", "aanlysis", "annalysis", "anlysis"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"In his report, Jayden should ______ evidence from the article.\"",
        choices: ["cite", "ctie", "ciite", "cte"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"offered a ______ to the argument\"",
        choices: ["counterpoint", "cuonterpoint", "coounterpoint", "cunterpoint"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"The class recorded ______ from the science experiment.\"",
        choices: ["data", "dtaa", "daata", "dta"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"weighed the ______ of the plan\"",
        choices: ["drawbacks", "darwbacks", "drrawbacks", "drwbacks"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"explained her ______\"",
        choices: ["reasoning", "raesoning", "reeasoning", "rasoning"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-u2",
    name: "Spelling Unit 2",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"formed several ______\"",
        choices: ["committees", "cmomittees", "coommittees", "comittees"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"attended a teachers' ______\"",
        choices: ["convention", "cnovention", "coonvention", "cnvention"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a class ______\"",
        choices: ["debate", "dbeate", "deebate", "dbate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"submitted a ______\"",
        choices: ["proposal", "porposal", "prroposal", "prposal"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"elected ______\"",
        choices: ["representatives", "rperesentatives", "reepresentatives", "rpresentatives"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the conflict\"",
        choices: ["resolve", "rseolve", "reesolve", "rsolve"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a tricky ______\"",
        choices: ["situation", "stiuation", "siituation", "stuation"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ of workers\"",
        choices: ["union", "uinon", "unnion", "unon"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ smile\"",
        choices: ["assuring", "asusring", "asssuring", "asuring"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ a strange smell\"",
        choices: ["detected", "dteected", "deetected", "dtected"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the sun ______ from the clouds\"",
        choices: ["emerging", "eemrging", "emmerging", "emrging"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"expressed her ______\"",
        choices: ["gratitude", "gartitude", "grratitude", "grtitude"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"sought her teacher's ______\"",
        choices: ["guidance", "giudance", "guuidance", "gidance"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ of the game\"",
        choices: ["outcome", "otucome", "ouutcome", "otcome"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ chapter\"",
        choices: ["previous", "pervious", "prrevious", "prvious"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ of a dream\"",
        choices: ["pursuit", "prusuit", "puursuit", "prsuit"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ goal\"",
        choices: ["ambitious", "abmitious", "ammbitious", "ambtious"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ the poem\"",
        choices: ["memorized", "mmeorized", "meemorized", "mmorized"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"felt ______ after finishing\"",
        choices: ["satisfaction", "staisfaction", "saatisfaction", "stisfaction"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ at the scary movie\"",
        choices: ["shuddered", "suhddered", "shhuddered", "shudered"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"wrote a personal ______\"",
        choices: ["narrative", "nrarative", "naarrative", "narative"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"used ______ for emphasis\"",
        choices: ["repetition", "rpeetition", "reepetition", "rpetition"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"The poet wrote ______ without a regular rhyme pattern.\"",
        choices: ["free verse", "fere verse", "frree verse", "fre verse"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"“Light” and “night” ______.\"",
        choices: ["rhyme", "ryhme", "rhhyme", "rhime"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-u3",
    name: "Spelling Unit 3",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"showed ______ for the gift\"",
        choices: ["appreciation", "aprpeciation", "apppreciation", "apreciation"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ out the answer\"",
        choices: ["blurted", "bulrted", "bllurted", "blrted"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ her artwork\"",
        choices: ["complimenting", "cmoplimenting", "coomplimenting", "cmplimenting"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"stopped to ______ the winner\"",
        choices: ["congratulate", "cnogratulate", "coongratulate", "cngratulate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ his own story\"",
        choices: ["contradicted", "cnotradicted", "coontradicted", "cntradicted"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ decision\"",
        choices: ["critical", "cirtical", "crritical", "crtical"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ festival\"",
        choices: ["cultural", "clutural", "cuultural", "cltural"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"cleared up the ______\"",
        choices: ["misunderstanding", "msiunderstanding", "miisunderstanding", "msunderstanding"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ flowers\"",
        choices: ["artificial", "atrificial", "arrtificial", "artficial"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"The students ______ to finish the group project.\"",
        choices: ["collaborate", "clolaborate", "coollaborate", "colaborate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ volunteer\"",
        choices: ["dedicated", "ddeicated", "deedicated", "ddicated"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ schedule\"",
        choices: ["flexible", "felxible", "fllexible", "flxible"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ of the heart\"",
        choices: ["function", "fnuction", "fuunction", "fnction"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the parrot can ______ sounds\"",
        choices: ["mimic", "mmiic", "miimic", "mmic"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"overcame every ______\"",
        choices: ["obstacle", "osbtacle", "obbstacle", "obstcle"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"learned new painting ______\"",
        choices: ["techniques", "tcehniques", "teechniques", "tchniques"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"An ______ carefully examined the ancient pottery.\"",
        choices: ["archaeologist", "acrhaeologist", "arrchaeologist", "archeologist"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ of dinosaurs\"",
        choices: ["era", "ear", "erra", "eraa"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ of an old vase\"",
        choices: ["fragments", "fargments", "frragments", "frgments"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the ______ wrote a book about the war\"",
        choices: ["historian", "hsitorian", "hiistorian", "hstorian"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the package arrived ______\"",
        choices: ["intact", "itnact", "inntact", "intct"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ the old photographs\"",
        choices: ["preserved", "perserved", "prreserved", "prserved"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ the ancient temple\"",
        choices: ["reconstruct", "rceonstruct", "reeconstruct", "rconstruct"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ of the old castle\"",
        choices: ["remnants", "rmenants", "reemnants", "rmnants"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-u4",
    name: "Spelling Unit 4",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"waited with ______\"",
        choices: ["anticipation", "atnicipation", "annticipation", "antcipation"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"to ______ the rules\"",
        choices: ["defy", "dfey", "deefy", "dfy"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ to a refund\"",
        choices: ["entitled", "etnitled", "enntitled", "enttled"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"stayed ______ during the argument\"",
        choices: ["neutral", "nuetral", "neeutral", "nutral"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ critic\"",
        choices: ["outspoken", "otuspoken", "ouutspoken", "otspoken"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ personality\"",
        choices: ["reserved", "rseerved", "reeserved", "rserved"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ help from a teacher\"",
        choices: ["sought", "suoght", "soought", "sught"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ division of chores\"",
        choices: ["unequal", "uenqual", "unnequal", "unqual"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ by the magic trick\"",
        choices: ["astounded", "atsounded", "asstounded", "astunded"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ the gift\"",
        choices: ["concealed", "cnocealed", "cooncealed", "cncealed"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ student\"",
        choices: ["inquisitive", "iqnuisitive", "innquisitive", "inqisitive"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"Readers ______ clues to understand the character's feelings.\"",
        choices: ["interpret", "itnerpret", "innterpret", "intrpret"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ by the riddle\"",
        choices: ["perplexed", "preplexed", "peerplexed", "prplexed"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ measurements\"",
        choices: ["precise", "percise", "prrecise", "prcise"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"asked him to ______\"",
        choices: ["reconsider", "rceonsider", "reeconsider", "rconsider"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"felt ______ of the stranger\"",
        choices: ["suspicious", "ssupicious", "suuspicious", "sspicious"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ desert\"",
        choices: ["barren", "braren", "baarren", "baren"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a surprised facial ______\"",
        choices: ["expression", "epxression", "exxpression", "expresion"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ gift\"",
        choices: ["meaningful", "maeningful", "meeaningful", "maningful"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the peacock's colorful ______\"",
        choices: ["plumes", "pulmes", "pllumes", "plmes"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"wrote a ______ about the sea\"",
        choices: ["lyric", "lryic", "lyyric", "lyrc"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"“Wild winds whistle” uses ______.\"",
        choices: ["alliteration", "alilteration", "allliteration", "aliteration"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"The poem's ______ gives it a steady beat.\"",
        choices: ["meter", "mteer", "meeter", "mter"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"The poem has four lines in its first ______.\"",
        choices: ["stanza", "satnza", "sttanza", "stnza"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-u5",
    name: "Spelling Unit 5",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"______ ten miles away\"",
        choices: ["approximately", "aprpoximately", "appproximately", "aproximately"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ price\"",
        choices: ["astronomical", "atsronomical", "asstronomical", "astrnomical"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"double-checked her ______\"",
        choices: ["calculation", "claculation", "caalculation", "clculation"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"met all the ______\"",
        choices: ["criteria", "cirteria", "crriteria", "crteria"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"We measured the ______ across the center of the circle.\"",
        choices: ["diameter", "daimeter", "diiameter", "dameter"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ the results\"",
        choices: ["evaluate", "eavluate", "evvaluate", "evluate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the moon's ______ around Earth\"",
        choices: ["orbit", "obrit", "orrbit", "orbt"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the planets are ______\"",
        choices: ["spheres", "shperes", "sppheres", "sphres"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ he was right\"",
        choices: ["assume", "asusme", "asssume", "asume"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a money-back ______\"",
        choices: ["guarantee", "gaurantee", "guuarantee", "guarante"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ a class president\"",
        choices: ["nominate", "nmoinate", "noominate", "nminate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ the answer was wrong\"",
        choices: ["obviously", "ovbiously", "obbviously", "obvously"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ on a friend\"",
        choices: ["rely", "rley", "reely", "rly"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ coach\"",
        choices: ["supportive", "spuportive", "suupportive", "suportive"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"showed ______ for her loss\"",
        choices: ["sympathy", "smypathy", "syympathy", "sympthy"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"teased for being a ______\"",
        choices: ["weakling", "waekling", "weeakling", "wakling"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ land\"",
        choices: ["agricultural", "argicultural", "aggricultural", "agrcultural"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"sales ______ last year\"",
        choices: ["declined", "dcelined", "deeclined", "dclined"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the room was in ______\"",
        choices: ["disorder", "dsiorder", "diisorder", "dsorder"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ the bird by its song\"",
        choices: ["identify", "iedntify", "iddentify", "idntify"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ outcome\"",
        choices: ["probable", "porbable", "prrobable", "prbable"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"plants ______ in sunlight\"",
        choices: ["thrive", "trhive", "thhrive", "thrve"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ visitor\"",
        choices: ["unexpected", "uenxpected", "unnexpected", "unxpected"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ flooding\"",
        choices: ["widespread", "wdiespread", "wiidespread", "wdespread"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-u6",
    name: "Spelling Unit 6",
    questions: [
      {
        prompt: "Which is the correct spelling of the missing word? \"posted a ______ on the board\"",
        choices: ["bulletin", "bluletin", "buulletin", "buletin"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"made generous ______\"",
        choices: ["contributions", "cnotributions", "coontributions", "cntributions"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"celebrated the ______ of the class\"",
        choices: ["diversity", "dviersity", "diiversity", "dversity"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ in the navy\"",
        choices: ["enlisted", "elnisted", "ennlisted", "enlsted"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ the pass\"",
        choices: ["intercept", "itnercept", "inntercept", "intrcept"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"military ______\"",
        choices: ["operations", "oeprations", "opperations", "oprations"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"trained the new ______\"",
        choices: ["recruits", "rceruits", "reecruits", "rcruits"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"wilderness ______ skills\"",
        choices: ["survival", "sruvival", "suurvival", "srvival"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ for desert life\"",
        choices: ["adaptation", "aadptation", "addaptation", "adptation"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"an ______ gymnast\"",
        choices: ["agile", "aigle", "aggile", "agle"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"found a ______ of supplies\"",
        choices: ["cache", "ccahe", "caache", "cche"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a ______ volcano\"",
        choices: ["dormant", "dromant", "doormant", "drmant"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ for berries\"",
        choices: ["forage", "froage", "foorage", "frage"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ winter air\"",
        choices: ["frigid", "firgid", "frrigid", "frgid"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"Some animals ______ when winter becomes very cold.\"",
        choices: ["hibernate", "hbiernate", "hiibernate", "hbernate"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"fur ______ the animal from cold\"",
        choices: ["insulates", "isnulates", "innsulates", "inslates"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"the alarm ______\"",
        choices: ["blares", "balres", "bllares", "blres"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"a strong ______ between friends\"",
        choices: ["connection", "cnonection", "coonnection", "conection"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"ran an ______ for her mom\"",
        choices: ["errand", "erarnd", "errrand", "erand"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"______ seats with a friend\"",
        choices: ["exchange", "ecxhange", "exxchange", "exchnge"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"“The wind whispered” is an example of ______.\"",
        choices: ["personification", "presonification", "peersonification", "prsonification"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"The poet used ______ to create a repeated vowel sound.\"",
        choices: ["assonance", "asosnance", "asssonance", "asonance"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"The repeated ending sounds create ______ in the line.\"",
        choices: ["consonance", "cnosonance", "coonsonance", "cnsonance"],
        answerIndex: 0
      },
      {
        prompt: "Which is the correct spelling of the missing word? \"vivid ______ filled the poem\"",
        choices: ["imagery", "iamgery", "immagery", "imgery"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "spelling-phonics1",
    name: "Phonics & Word Study 1",
    questions: [
      {
        prompt: "What is the vowel in the word \"snap\"?",
        choices: ["a", "s", "n", "p"],
        answerIndex: 0
      },
      {
        prompt: "What are the vowels in the word \"huddle\"?",
        choices: ["u and e", "u and d", "h and e", "u and l"],
        answerIndex: 0
      },
      {
        prompt: "Does the vowel E in the word \"wet\" make a long or short sound?",
        choices: ["Short vowel sound", "Long vowel sound"],
        answerIndex: 0
      },
      {
        prompt: "Does the vowel U in the word \"cute\" make a long or short sound?",
        choices: ["Long vowel sound", "Short vowel sound"],
        answerIndex: 0
      },
      {
        prompt: "Does the vowel A in the word \"magic\" make a long or short sound?",
        choices: ["Short vowel sound", "Long vowel sound"],
        answerIndex: 0
      },
      {
        prompt: "How many consonants are in the word \"trip\"?",
        choices: ["Three", "One", "Two", "Four"],
        answerIndex: 0
      },
      {
        prompt: "Which letters are the consonants in the word \"grade\"?",
        choices: ["g, r, d", "g, r, a", "r, a, d", "g, a, d"],
        answerIndex: 0
      },
      {
        prompt: "How many syllables are in the word \"holiday\"?",
        choices: ["3", "2", "4", "1"],
        answerIndex: 0
      },
      {
        prompt: "How many syllables are in the word \"cake\"?",
        choices: ["1", "2", "3", "4"],
        answerIndex: 0
      },
      {
        prompt: "How many syllables are in the word \"playful\"?",
        choices: ["2", "1", "3", "4"],
        answerIndex: 0
      },
      {
        prompt: "Is /ch/ a phoneme or a phonogram?",
        choices: ["Phoneme", "Phonogram"],
        answerIndex: 0
      },
      {
        prompt: "Is the letter H a phoneme or a phonogram?",
        choices: ["Phonogram", "Phoneme"],
        answerIndex: 0
      },
      {
        prompt: "What is a phoneme?",
        choices: ["A sound", "A symbol that represents a sound", "A syllable", "A prefix"],
        answerIndex: 0
      },
      {
        prompt: "What is a phonogram?",
        choices: ["A symbol that represents a sound", "A sound", "A base word", "A suffix"],
        answerIndex: 0
      },
      {
        prompt: "What is the base word of \"renewable\"?",
        choices: ["new", "renew", "able", "wable"],
        answerIndex: 0
      },
      {
        prompt: "What is the base word of \"unexpected\"?",
        choices: ["expect", "expected", "unexpect", "expectun"],
        answerIndex: 0
      },
      {
        prompt: "What is the prefix in \"dishonest\"?",
        choices: ["dis-", "honest", "-est", "un-"],
        answerIndex: 0
      },
      {
        prompt: "What is the suffix in \"helped\"?",
        choices: ["-ed", "help", "-ing", "-er"],
        answerIndex: 0
      },
      {
        prompt: "What is the prefix in \"pretreatment\"?",
        choices: ["pre-", "treat", "-ment", "post-"],
        answerIndex: 0
      },
      {
        prompt: "What is the suffix in \"pretreatment\"?",
        choices: ["-ment", "pre-", "treat", "-tion"],
        answerIndex: 0
      }
    ]
  }
];
