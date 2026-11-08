// Spelling Bee practice sets for the Iowa Assessments practice app.
// Transcribed from the 2026-2027 School Spelling Bee Study List with
// Definitions (450 words, split into 9 sets of 50, in list order).
// This is a typed spelling-bee format, not multiple choice: Jayden is
// given the word's part of speech and dictionary definition (read like
// a pronouncer would say "Your word is... definition: ...") and types
// the spelling himself. app.js grades it by trimmed, case-insensitive
// comparison against `word`.
// Each question has:
//   prompt - the definition-based clue, phrased as an instruction
//   word   - the correct spelling Jayden must type

window.SPELLING_SETS = [
  {
    id: "spelling-set1",
    name: "Spelling Set 1",
    questions: [
      {
        prompt: "Spell the word that matches this definition. (verb) \"went by moving the legs quickly : went faster than a walk\"",
        word: "ran"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"air that is moving\"",
        word: "wind"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"one of the appendages of an animal that are used chiefly in supporting the body and in moving from point to point especially by walking\"",
        word: "leg"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"earth, soil, or sand\"",
        word: "dirt"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a slender bar resembling a wand of wood\"",
        word: "rod"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"correct, proper, or right\"",
        word: "good"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"the greatest number of\"",
        word: "most"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"injured in body or spirit\"",
        word: "hurt"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"easily frightened or scared\"",
        word: "shy"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a young rabbit\"",
        word: "bunny"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"from a higher place to a lower place\"",
        word: "down"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"things to put the foot on in moving upward or downward\"",
        word: "steps"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"any natural or prepared liquid for swallowing : a beverage\"",
        word: "drink"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"lacking importance or serious meaning\"",
        word: "silly"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"not well or in good health\"",
        word: "sick"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a track or way made for a specific use\"",
        word: "path"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a fine spray : fog\"",
        word: "mist"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"objects in the sky resembling luminous points and usually only bright enough to be seen at night\"",
        word: "stars"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a vehicle built for moving things in its own frame\"",
        word: "truck"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"combustion as manifested in light, flame, and heat\"",
        word: "fire"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"not moving: stationary\"",
        word: "still"
      },
      {
        prompt: "Spell the word that matches this definition. (interjection) \"used as a familiar greeting or in answering the telephone or to express surprise\"",
        word: "hello"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a low densely branched woody plant\"",
        word: "bush"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"coming or doing after the due, usual, or proper time : not early\"",
        word: "late"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a device that raises or transfers fluids or gases especially by suction or pressure or both\"",
        word: "pump"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a hard protective covering of an animal\"",
        word: "shell"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a long, thin thread used for knitting or weaving\"",
        word: "yarn"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"the parts of an animal's body that it moves to fly\"",
        word: "wings"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"tapering to a fine point\"",
        word: "sharp"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"involving little difficulty or hardship to do\"",
        word: "easy"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the physical part of human beings\"",
        word: "body"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a building containing living quarters for one or a few families\"",
        word: "house"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"having large amounts of wealth\"",
        word: "rich"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a scheduled period of work or duty\"",
        word: "shift"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a hollow muscular organ of vertebrate animals that by its rhythmic contraction acts as a force pump maintaining the circulation of the blood\"",
        word: "heart"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a large, long tooth that sticks out of an animal's mouth\"",
        word: "tusk"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to send forth a ball or puck in a game especially toward a particular goal\"",
        word: "shoot"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a marine aquatic carnivorous mammal that lives near cold seacoasts or on ice floats, has webbed flippers adapted for swimming, and has been hunted for its fur, hide, and oil\"",
        word: "seal"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"being any number that can be exactly divided by two\"",
        word: "even"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to plunge into water headfirst\"",
        word: "dive"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"sharp nails on the toes of animals, especially when such nails are slender and curved (as with those of a bird or cat)\"",
        word: "claws"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to break (something brittle or hollow) with a sharp or explosive sound\"",
        word: "crack"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to move toward something : to approach\"",
        word: "come"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"all right : satisfactory, adequate\"",
        word: "fine"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the season between autumn and spring\"",
        word: "winter"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a round fruit that grows on trees and has crisp white flesh and red, yellow, or green skin\"",
        word: "apple"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a noise or tone\"",
        word: "sound"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"overgrown with or covered with a plant of a class of spore-producing plants or something like it\"",
        word: "mossy"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a color that is like that of ripe lemons or sunflowers\"",
        word: "yellow"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to send out rays of light\"",
        word: "shine"
      }
    ]
  },
  {
    id: "spelling-set2",
    name: "Spelling Set 2",
    questions: [
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"thin slices of potatoes that are deep-fried in fat\"",
        word: "chips"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"pods containing seeds that are eaten as vegetables\"",
        word: "beans"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the opening through which food passes into the body of an animal\"",
        word: "mouth"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to throw a liquid upon in the form of small drops\"",
        word: "spray"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a cycle in a calendar having 365 days divided into 12 months beginning with January and ending with December\"",
        word: "year"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the real state of affairs : something that is the case : a fact\"",
        word: "truth"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a thin sheet of fibers used in many ways, including as a surface for writing\"",
        word: "paper"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a long-eared, short-tailed, plant-eating mammal with long powerful hind legs and usually thick soft fur\"",
        word: "rabbit"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to give food to\"",
        word: "feed"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"of greater than average height among others of a kind or class\"",
        word: "tallest"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an interior or internal portion : the part within\"",
        word: "inside"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"subject to severe cold : chilly\"",
        word: "frozen"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to utter words : to talk\"",
        word: "speak"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"very steep, perpendicular or overhanging faces of rock, earth, or glacial ice of considerable height : precipices\"",
        word: "cliffs"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an aquatic mammal that resembles a large fish\"",
        word: "whale"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a formal organized coming together of buyers and sellers of goods\"",
        word: "market"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a company of domestic mammals (as sheep or goats) herded together\"",
        word: "flock"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to chew with a crushing or grinding noise\"",
        word: "crunch"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"any relatively long-bodied reptile with legs and tapering tail\"",
        word: "lizard"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to be on one's guard : to be cautious : to take care\"",
        word: "beware"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a tiny glittering particle or surface or a sudden burst of reflected light\"",
        word: "sparkle"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a knitted or sometimes crocheted jacket or pullover made in various styles and usually having ribbing around the neck, cuffs, and lower edge\"",
        word: "sweater"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a person skilled in caring for and waiting on the infirm, the injured, or the sick\"",
        word: "nurse"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"not true, correct, or right\"",
        word: "wrong"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"moved by a quick springy leap or in a series of leaps : jumped\"",
        word: "hopped"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"something that is used to pay for goods or services\"",
        word: "money"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a small single-story low-roofed house of simple construction\"",
        word: "cabin"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the absence in part or in whole of light\"",
        word: "darkness"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"on every occasion : at all times\"",
        word: "always"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to grow, spring up, or come forth\"",
        word: "sprout"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to cut (something) with deliberate care or practiced precision\"",
        word: "carve"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"the dark figures cast upon a surface by a body intercepting the rays from a source of light\"",
        word: "shadows"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the early part of the day until noon\"",
        word: "morning"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"having life : not dead or inanimate\"",
        word: "alive"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"soil, ground\"",
        word: "earth"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"one that seeks the society or welfare of another whom he or she holds in affection, respect, or esteem or whose companionship and personality are pleasurable\"",
        word: "friend"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"delightful for beauty, harmony, or grace : attractive because of natural charm\"",
        word: "lovely"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to go back or come back again (as to a place, person, or condition)\"",
        word: "return"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"one of two equal parts into which a thing is divisible\"",
        word: "half"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"moving or able to move with great speed\"",
        word: "swift"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a father's or mother's father\"",
        word: "grandfather"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"impressions of the foot on a surface\"",
        word: "footprints"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to be afraid of\"",
        word: "fear"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"experiencing a desire for drink\"",
        word: "thirsty"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"one that is of the same or equal standing (as in law, rank, quality, age, ability) with another : an equal\"",
        word: "peer"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"benignly gracious or kind in manner : not harsh or stern : mild\"",
        word: "gentle"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a puzzling question to be guessed at\"",
        word: "riddle"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the ability to speak\"",
        word: "voice"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a sweet juicy edible fruit which is used as a fresh or cooked fruit, in preserves or dried\"",
        word: "peach"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a flat bread made of thin batter consisting basically of flour, liquid, and leavening and cooked on both sides on a griddle\"",
        word: "pancake"
      }
    ]
  },
  {
    id: "spelling-set3",
    name: "Spelling Set 3",
    questions: [
      {
        prompt: "Spell the word that matches this definition. (noun) \"an unhealthy condition of the body or mind\"",
        word: "illness"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a soft metallic element that is bluish white when freshly cut but tarnishes readily in moist air to dull gray and is used often in solder, acid-resistant linings, and also shields against radioactivity\"",
        word: "lead"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a deep, sudden, unintentional sound that usually indicates pain, grief, or sometimes disapproval or annoyance\"",
        word: "groan"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a slow-moving brownish or grayish mammal with very long front legs and long curved claws that hangs from branches and eats leaves and fruit\"",
        word: "sloth"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to form a fabric by the interlacing of a yarn or yarns in a series of connected loops by means of hand or machine needles\"",
        word: "knit"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a loose piece of outer clothing (such as a cape or an overcoat)\"",
        word: "cloak"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a public procession : the movement of people or things in order\"",
        word: "parade"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a small wind instrument in which sound is produced by the forcible passage of breath through a slit in a short tube (as of wood or metal)\"",
        word: "whistle"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"constituting an entire number or amount\"",
        word: "total"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"in a building\"",
        word: "indoors"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a cause of disturbance, annoyance, or distress\"",
        word: "trouble"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to rest\"",
        word: "relax"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to arrive at the end of : to complete\"",
        word: "finish"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a day on which one is free from usual everyday activity or work\"",
        word: "holiday"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"freedom from exposure to danger\"",
        word: "safety"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"characterized by physical or moral bravery : courageous : valiant\"",
        word: "stout"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"arachnids having a short, usually unsegmented abdomen, poison fangs, and two or more pairs of spinnerets at the posterior end of the abdomen for spinning threads of silk for various uses (as in making cocoons for their eggs or webs to catch prey)\"",
        word: "spiders"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"having nothing removed or left out : whole\"",
        word: "entire"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a room or section of a building given over to books, manuscripts, or other literary and sometimes artistic materials usually kept in some convenient order for use but not for sale\"",
        word: "library"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to direct or supervise especially toward some desirable end, course, way, or development\"",
        word: "guide"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an institution or place where sick or injured persons are given medical or surgical care\"",
        word: "hospital"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a strong yellow condiment made of crushed seeds made into a paste\"",
        word: "mustard"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an association of persons for carrying on a commercial or industrial enterprise or business\"",
        word: "company"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"an extremely pungent and aromatic rootlike plant stem that is usually dried and ground to a fine brownish powder and used as a spice\"",
        word: "ginger"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"not as wide as usual or as expected\"",
        word: "narrow"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"intermediate in amount, quality, position, or degree : average\"",
        word: "medium"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"cents of the U.S. or Canada\"",
        word: "pennies"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"marching, tramping, walking\"",
        word: "hiking"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"lacking in judgment, fit consideration, or intelligence\"",
        word: "foolish"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"filled with fear or alarm\"",
        word: "afraid"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to bring to mind again : to think of again\"",
        word: "remember"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to proceed, spring, or arise as a consequence\"",
        word: "result"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"fascinating and delighting : extremely pleasing : marked by compelling attraction or appeal\"",
        word: "charming"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a firsthand document or primary reference work\"",
        word: "source"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"dense concretions formed in various mollusks by deposition of thin layers of nacre about a foreign particle, that are typically round, and that exhibit various colors but are usually white or light-colored\"",
        word: "pearls"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"having or suggestive of a sharp distinctive flavor that lingers on the tongue\"",
        word: "tangy"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"wild mammals fierce by nature; especially : carnivorous wild mammals\"",
        word: "beasts"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"trembling due to cold, fear, or physical pressure\"",
        word: "shivering"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a roomy usually flat-bottomed boat used principally in harbors or inland waterways for the transport of goods\"",
        word: "barge"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"in a manner that is moodily cross, surly or ill-humored\"",
        word: "grumpily"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"without roughness, abruptness, or interruption\"",
        word: "smoothly"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a small house typically used in the summer\"",
        word: "cottage"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"modest or meek in spirit, manner, or appearance : not proud or haughty\"",
        word: "humble"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"seven tens : twice 35 : five times 14\"",
        word: "seventy"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to hang loosely especially with a swinging or jerking motion\"",
        word: "dangle"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the length to be traveled\"",
        word: "distance"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a light, gentle soft-blowing wind\"",
        word: "breeze"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"sailed or hovered in the air often at a great height : glided\"",
        word: "soared"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"reduced to a state of extreme physical or nervous fatigue\"",
        word: "frazzled"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a large woody plant having hollow stems that are so hard and durable as to be used for furniture and the young shoots of which are utilized as food\"",
        word: "bamboo"
      }
    ]
  },
  {
    id: "spelling-set4",
    name: "Spelling Set 4",
    questions: [
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"disks or devices of other shapes that are used as fasteners on clothing or upholstery by passing them through a hole or loop\"",
        word: "buttons"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to hold close for warmth or comfort or in affection : to hug\"",
        word: "cuddle"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"swollen or tending to swell in size : bloated\"",
        word: "puffy"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"proceeded quietly or cautiously walking on or as if walking on the ends of the feet\"",
        word: "tiptoed"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"having mental quickness or intelligence\"",
        word: "clever"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the part of a building that is either completely or partly below the ground level\"",
        word: "basement"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a coarse heavy plain-woven fabric typically made from hemp or jute that is used for bagging and wrapping items\"",
        word: "burlap"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"lands containing much soil moisture, such as a swamp or bog\"",
        word: "wetlands"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to request the presence or participation of : to solicit the company of : to ask\"",
        word: "invite"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"slender-bodied diurnal insects that have very large broad wings which are often strikingly colored and patterned\"",
        word: "butterflies"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a mass or growth of large seaweeds\"",
        word: "kelp"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"something that may be owned or possessed; specifically : a piece of real estate\"",
        word: "property"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"with attention to precision or to details : cautiously\"",
        word: "carefully"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"drawing air noisily up the nose repeatedly to prevent mucus running from the nose (as in a cold)\"",
        word: "sniffling"
      },
      {
        prompt: "Spell the word that matches this definition. (preposition) \"immediately under\"",
        word: "beneath"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a usually four-wheeled vehicle used mainly on farms to pull or drive equipment\"",
        word: "tractor"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to consent to expressly or formally\"",
        word: "permit"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a usually canvas rooflike cover extended over a place as a shelter from the sun, rain, or wind\"",
        word: "awning"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"given to ready change, inconstancy, whimsical choice, or unpredictable variability\"",
        word: "fickle"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"removal or lightening of something oppressive, painful, or distressing\"",
        word: "relief"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"of, taking place on, or relating to the moon\"",
        word: "lunar"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"withholding social or business dealings from (a person, employer, or a nation) as an expression of disapproval or means of coercion\"",
        word: "boycotting"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"fused or liquefied by heat : melted\"",
        word: "molten"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"choice, superior, select\"",
        word: "elite"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"formed by interlacing strands, such as cloth\"",
        word: "woven"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to declare openly or publicly\"",
        word: "proclaim"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a cuplike cover made usually of metal or plastic with a pitted surface and used to protect the end of a finger when pushing a needle through material\"",
        word: "thimble"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"protection, care, maintenance, and tuition : guardianship\"",
        word: "custody"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"rolled oats mixed with other ingredients (such as brown sugar, raisins, coconut and nuts) and eaten for breakfast or as a snack\"",
        word: "granola"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a human engaged or experienced in battle or the close combat typical of ancient or medieval times\"",
        word: "warrior"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"very firm rather than pliant in composition or structure : lacking flexibility\"",
        word: "rigid"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"violently hostile or aggressive in temperament\"",
        word: "fierce"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the sound of air being expelled from the lungs in the expression of an emotion (such as joy)\"",
        word: "laughter"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"fixed compensation paid regularly for services\"",
        word: "salary"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to cause to pass from view either suddenly or gradually\"",
        word: "disappear"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"one that runs in a track event in which artificial barriers must be leaped\"",
        word: "hurdler"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to act or move idly or lazily : to stand, sit, or recline indolently\"",
        word: "lounge"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"characterized by or showing marked good humor especially as exhibited in mirth, hilarity, or conviviality\"",
        word: "jovial"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"of poor quality : second-rate\"",
        word: "inferior"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the 12th month\"",
        word: "December"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a portion of time which is measurable or during which something exists, lasts, or is in progress\"",
        word: "duration"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a reference source in print or electronic form containing words usually alphabetically arranged along with information about their forms, pronunciations, functions, etymologies, meanings, and syntactical and idiomatic uses\"",
        word: "dictionary"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a place where a commercial or industrial enterprise is carried on\"",
        word: "business"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to place again (as in possession or in a former position)\"",
        word: "reinstate"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to look over : to inspect visually or by use of other senses\"",
        word: "examine"
      },
      {
        prompt: "Spell the word that matches this definition. (preposition) \"against\"",
        word: "versus"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a song to quiet children or soothe them to sleep\"",
        word: "lullaby"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"utterly different : contrary\"",
        word: "opposite"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"thin gauzy papers\"",
        word: "tissues"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a large oceanic game fish : a spearfish\"",
        word: "marlin"
      }
    ]
  },
  {
    id: "spelling-set5",
    name: "Spelling Set 5",
    questions: [
      {
        prompt: "Spell the word that matches this definition. (noun) \"the evening of October 31 observed especially by displaying jack-o'-lanterns, dressing up in disguise, and trick-or-treating in the evening\"",
        word: "Halloween"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to pay a formal expression (as by speech, gesture, or ceremony) of esteem, respect, affection, or admiration to\"",
        word: "compliment"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to come to a settlement or agreement by mutual concession\"",
        word: "compromise"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an uncommon happening\"",
        word: "incident"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"characteristic of a country in eastern Asia made up of islands in the western Pacific\"",
        word: "Japanese"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the commitment of something other than money to a long-term interest or project\"",
        word: "investment"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"eyeglasses with lenses having one part that corrects for near vision and one for distant vision\"",
        word: "bifocals"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"tools used to cut, serve, and eat food\"",
        word: "cutlery"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a tool consisting of a metal bar with a sharpened edge at one end used for working on the surface of materials by chipping or carving\"",
        word: "chisel"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an event or campaign organized to collect or gather money\"",
        word: "fundraiser"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a specialist in the history of Earth and its life especially as recorded in rocks\"",
        word: "geologist"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"made a loud deep hollow prolonged sound\"",
        word: "bellowed"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a living being\"",
        word: "organism"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a migratory game bird of Europe, Asia, and Africa that is about seven inches long\"",
        word: "quail"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the whole mass of air surrounding the earth\"",
        word: "atmosphere"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the act or an instance of failing to come up to expectations : the state or condition of being defeated in expectation or hope\"",
        word: "disappointment"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"absent from school without permission\"",
        word: "truant"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an unbound publication with a small number of pages\"",
        word: "pamphlet"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a very light colorless inert gas used for diluting oxygen, inflating balloons, and in many chemical and metallurgical processes\"",
        word: "helium"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"put an idea or proposition into the mind\"",
        word: "suggested"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"anthropoid apes of equatorial Africa that are smaller and more arboreal than the gorillas\"",
        word: "chimpanzees"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"arising from or indicative of extreme need or pressure of circumstance\"",
        word: "desperate"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a source of irritation\"",
        word: "annoyance"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an act of preventing (one) from proceeding by intrusive or interpolated comment or action\"",
        word: "interruption"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to bring or direct toward a common center or objective : to focus\"",
        word: "concentrate"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a decorated vessel (as of papier-mâché) filled with candies, fruits, and gifts and hung up to be broken with sticks by blindfolded persons as part of especially Latin-American festivities\"",
        word: "piñata"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a geographical region that belongs to or is controlled by a political authority\"",
        word: "territory"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"ones that depart from the company to which they belong or from the direct or proper course\"",
        word: "stragglers"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"any organism exhibiting deficient pigmentation\"",
        word: "albino"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"unworthy of serious consideration : absurd : comical : preposterous\"",
        word: "ridiculous"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a single track for railway cars that usually sit over it or hang suspended from it\"",
        word: "monorail"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"serving in or intended for an act or an instance of making a first or preliminary study of\"",
        word: "exploratory"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a dark grayish blue color\"",
        word: "indigo"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"fresh pork sausage for frying or grilling\"",
        word: "bratwurst"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"proceeding according to the order of the letters of a language arranged in a customary order\"",
        word: "alphabetical"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"strict adherence to a code of moral values : incorruptibility\"",
        word: "integrity"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a state in the northwestern part of the U.S\"",
        word: "Oregon"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the act of contradicting\"",
        word: "rebuttal"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an irrational attitude of animosity or hostility focused against a person, a group of people, a race, or their supposed characteristics\"",
        word: "prejudice"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an entire union of interests and responsibilities in a group\"",
        word: "solidarity"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a blotched or spotted animal\"",
        word: "calico"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a man-made object or vehicle intended to orbit Earth, the Moon, or other celestial body and usually instrumented for the transmission of space data\"",
        word: "sputnik"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a case for holding integrated circuits containing a computer program\"",
        word: "cartridge"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the separation of a group of people based on their race, class, or ethnic group by such means as restricting where they live, the people with whom they interact, and which schools they can attend\"",
        word: "segregation"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"round thin cakes of unleavened cornmeal bread usually eaten hot with a topping or filling that may include ground meat, cheese, and any of various sauces\"",
        word: "tortillas"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a resident of a country who is not on active duty in one of the armed forces\"",
        word: "civilian"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a substance used to enrich soil\"",
        word: "fertilizer"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a person who is in training to learn a trade from a skilled worker\"",
        word: "apprentice"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"produced by artificial processes : man-made\"",
        word: "synthetic"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a powerful ruler : a dictator\"",
        word: "Caesar"
      }
    ]
  },
  {
    id: "spelling-set6",
    name: "Spelling Set 6",
    questions: [
      {
        prompt: "Spell the word that matches this definition. (noun) \"a woman who practices black magic\"",
        word: "sorceress"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"characterized by bewitching intangible irresistibly magnetic charm\"",
        word: "glamorous"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"small amphibians that resemble lizards, are covered with a soft moist skin, live in moist dark places, and feed on small animals such as aquatic worms and insects\"",
        word: "salamanders"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"temporary forced withdrawal from the exercise of office, powers, or privileges as a member or communicant\"",
        word: "suspension"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an unusual manifestation or eccentricity in manner or behavior\"",
        word: "singularity"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"of, relating to, suggestive of, or being an intentional fabrication\"",
        word: "fictitious"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an automobile having a top that may be folded back, lowered, or removed\"",
        word: "convertible"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"sarcastic, impertinent, or irreverent manner or tone\"",
        word: "snarkiness"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a considerable body of troops organized to act together : an army\"",
        word: "battalion"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"not resulting directly from an action or cause : indirect\"",
        word: "collateral"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the rites or ceremonies with which one is made a member of a sect or society or is invested with a particular function or status\"",
        word: "initiation"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a cosmetic for covering the eyelashes and eyebrows\"",
        word: "mascara"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the sum of the lengths of the line segments forming a polygon\"",
        word: "perimeter"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"something done or said that may serve as an example or rule to authorize or justify a subsequent act of the same or an analogous kind\"",
        word: "precedent"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to come into actual existence\"",
        word: "materialize"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a silver-white malleable metallic element that occurs abundantly in nature\"",
        word: "magnesium"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"commendably thorough or precise : strict\"",
        word: "meticulous"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an important food fish that is usually smaller than the common cod and has a black lateral line and a dark spot just behind the gills\"",
        word: "haddock"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"subnormal temperature of the body\"",
        word: "hypothermia"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a specialist in the examination of the eye for defects and faults of refraction and the prescription of correctional lenses and exercises but not including the use of drugs or surgery\"",
        word: "optometrist"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a unit of frequency equal to one million cycles per second\"",
        word: "megahertz"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a Soviet aerospace center; especially : a Soviet spacecraft launching installation\"",
        word: "cosmodrome"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"inflammation of one or more joints due to infectious, metabolic, or constitutional causes\"",
        word: "arthritis"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a dog of a breed of terriers that have a long head with small ears and heavy eyebrows, mustache, beard, and wiry coat\"",
        word: "schnauzer"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an act or instance of revolting against civil or political authority or against an established government\"",
        word: "insurrection"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"unconsolidated residual or transported material that overlies or covers the solid rock in place\"",
        word: "regolith"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"one participating in an athletic contest involving participation by each contestant in five different events\"",
        word: "pentathlete"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"excessively meticulous : fussy\"",
        word: "persnickety"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"any program for setting up a centralized autocratic national regime that has severely nationalistic policies, exercises rigid censorship, and forcibly suppresses opposition\"",
        word: "fascism"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"large, often long-tailed, and brilliantly colored birds of mostly terrestrial habits\"",
        word: "pheasants"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"one who comes before in order of time; especially : a person who has previously occupied a position or office to which another has succeeded\"",
        word: "predecessor"
      },
      {
        prompt: "Spell the word that matches this definition. (geographical entry) \"country in western Africa on the Atlantic; a republic of the French Community, formerly a territory of French West Africa\"",
        word: "Senegal"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a place where water is collected and kept in quantity for use when wanted\"",
        word: "reservoir"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the power to attract through personal magnetism and charm\"",
        word: "duende"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"mentally active : fully possessed of one's mental faculties : awake\"",
        word: "conscious"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"used for a light-polarizing material used especially in eyeglasses and lamps to prevent glare and in various optical devices\"",
        word: "Polaroid"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the decaying flesh of a dead animal\"",
        word: "carrion"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"relating to, based on, or tracing descent through the maternal line\"",
        word: "matrilineal"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"in a manner deserving mercy or compassion\"",
        word: "piteously"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the dried flower head of any herb of a large genus of herbs of the northern hemisphere used for bruises, sprains, and swellings\"",
        word: "arnica"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"of, relating to, or shaped like an elongated circle\"",
        word: "elliptical"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a disease of the eye marked by increased pressure within the eyeball that damages the optic disk and results in gradual loss of vision and ultimate blindness\"",
        word: "glaucoma"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a heavy silver-white metallic element that is used especially in hardening platinum for alloys suitable for surgical instruments and jewelry\"",
        word: "iridium"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a blood-pressure-raising hormone of the medulla of the glands adjacent to the kidneys, used chiefly as a heart stimulant\"",
        word: "adrenaline"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a graveyard : a burial ground\"",
        word: "cemetery"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"marked by short clear-cut playing or singing of tones or chords\"",
        word: "staccato"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a meeting at an appointed place and time\"",
        word: "rendezvous"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a South American herb whose flower heads yield a yellow dye\"",
        word: "romerillo"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a small dog of a breed of German origin having long drooping ears, commonly a short sleek coat, and the legs short in comparison with the body length\"",
        word: "dachshund"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the Greek god of the winds\"",
        word: "Aeolus"
      }
    ]
  },
  {
    id: "spelling-set7",
    name: "Spelling Set 7",
    questions: [
      {
        prompt: "Spell the word that matches this definition. (noun) \"any of various small semiaquatic salamanders\"",
        word: "newt"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"sounded with a repeated and often monotonous hum like a vibrating string on an instrument\"",
        word: "thrummed"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a structure (as of earth or gravel) raised usually to prevent water from overflowing a level tract of country, to retain water in a reservoir or a stream in its bed, or to carry a roadway or railroad\"",
        word: "embankment"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"a turned-back facing usually wide and pointed at the top and tapering to nothing at the bottom that is usually one of a pair along the front edges of a jacket, dress, or coat and extends from the collar or neckline to or toward the waistline\"",
        word: "lapels"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the quality or state of being very free or openhanded in giving\"",
        word: "generosity"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"made shiny or lustrous : polished\"",
        word: "burnished"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"something that binds or holds together\"",
        word: "mortar"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"not softening, yielding, or swerving in resolution or determination\"",
        word: "unrelenting"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"becoming helpless or ineffectual : losing the ability to function naturally or efficiently\"",
        word: "wallowing"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"of or relating to a state as governing or being supreme over colonies or dependencies\"",
        word: "imperial"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"continuing in a course of action without regard to opposition or previous failure\"",
        word: "persistent"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"people who deliberately set fire to a building or other property\"",
        word: "arsonists"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"making whimpering sounds : whining\"",
        word: "mewling"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a machine by which mechanical energy is changed into electrical energy\"",
        word: "generator"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a territory or country subject to a ruler or under the control of a particular government\"",
        word: "dominion"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"power to require and receive submission : the right to expect obedience\"",
        word: "authority"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"of, relating to, or resembling an unobstructed or complete and comprehensive view of a region in every direction\"",
        word: "panoramic"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a short-haired German dog, typically with a black coat\"",
        word: "Doberman"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"small rodents that are usually colored tawny yellowish and that are notable for population fluctuations and recurrent mass migrations\"",
        word: "lemmings"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"in a manner having the power of resolving or putting an end to : conclusively\"",
        word: "decisively"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"gloves designed to protect the hand from injury\"",
        word: "gauntlets"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"not endowed with consciousness or animal life\"",
        word: "inanimate"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the fact or condition of occurring at short intervals : occurrence often repeated : common occurrence\"",
        word: "frequency"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"of or relating to hearing\"",
        word: "auditory"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"appealing to the taste especially in appearance\"",
        word: "appetizing"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"ones that watch or guard : sentries\"",
        word: "sentinels"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"in a careless or inattentive manner\"",
        word: "blithely"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"able to maintain oneself or itself without outside aid : capable of providing for one's or its own needs\"",
        word: "self-sufficient"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"likely to be or become\"",
        word: "prospective"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a purchase by prepayment of the future issues of a publication usually for a fixed period (such as a year)\"",
        word: "subscription"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"having little substance or strength : flimsy : weak\"",
        word: "tenuous"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"undesirably noticeable by reason of violation of good taste or sense\"",
        word: "conspicuous"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an idea formed prior to actual knowledge or experience\"",
        word: "preconception"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a group of people moving along on a particular course especially in a continuous, orderly, often formal or ceremonial way and usually arranged in a long line\"",
        word: "procession"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a wind instrument that combines the reed mouthpiece of a clarinet with a usually curved conical metal tube made in various sizes\"",
        word: "saxophone"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"being or set at right angles to a given line or plane\"",
        word: "perpendicular"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a half of the terrestrial globe as divided by the equator or into halves one of which contains Europe, Asia, and Africa and the other the Americas\"",
        word: "hemisphere"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"having the character of an originative power, principle, or source : containing or contributing the seeds of later development\"",
        word: "seminal"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to move at or as if at a three-beat gait resembling but smoother and slower than the gallop\"",
        word: "canter"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"relating to or having the character of a rushing stream of water\"",
        word: "torrential"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the quality or state of being hesitant from dislike, doubt, fear, or scruple\"",
        word: "reluctance"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the premises or the residence of an official appointed by or with the authority of a government to reside in a foreign country to represent the interests of citizens of the appointing country\"",
        word: "consulate"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a manner of preparing food : a style of cooking\"",
        word: "cuisine"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"walked about idly and in a leisurely manner\"",
        word: "sauntered"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a mechanical device having one or more blades which when rotated about a central shaft produce a forward thrust due to the aerodynamic forces acting upon them\"",
        word: "propeller"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"fashionable\"",
        word: "modish"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an acute highly contagious infectious virus disease\"",
        word: "influenza"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an evergreen shrub or tree having a prostrate or shrubby habit\"",
        word: "juniper"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a medium-sized sofa with arms and a back\"",
        word: "settee"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"not knowing or perceiving : not aware\"",
        word: "unconscious"
      }
    ]
  },
  {
    id: "spelling-set8",
    name: "Spelling Set 8",
    questions: [
      {
        prompt: "Spell the word that matches this definition. (adjective) \"emitting a scent\"",
        word: "odorant"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a palace or other large imposing residence\"",
        word: "palazzo"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"delicate skill : exquisite grace\"",
        word: "finesse"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"leafage\"",
        word: "foliage"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"made of needlework consisting of the interlocking of looped stitches formed with a single thread and a hooked needle\"",
        word: "crocheted"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"not applicable or pertinent\"",
        word: "irrelevant"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the whole body of courses offered by an educational institution or one of its branches\"",
        word: "curriculum"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"in a questioning, curious manner\"",
        word: "quizzically"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"regretfully excusing or acknowledging\"",
        word: "apologetic"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"in a manner employing tact and the effort to establish harmony and goodwill\"",
        word: "diplomatically"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"mysterious, puzzling\"",
        word: "enigmatic"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"growths in size, number, or value\"",
        word: "increments"
      },
      {
        prompt: "Spell the word that matches this definition. (geographical entry) \"state of the eastern U.S., capital Dover\"",
        word: "Delaware"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to adjust precisely for a particular function\"",
        word: "calibrate"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a proposition tentatively assumed in order to draw out its logical or empirical consequences and so test its accord with facts that are known or may be determined\"",
        word: "hypothesis"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the action of inspiring anew with courage, spirit, or hope or the state of being so inspired\"",
        word: "reassurance"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"rising and falling in waves : fluctuating\"",
        word: "undulating"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a sideboard, buffet, or bookcase patterned after an elaborate cupboard of the Renaissance period; especially : one without legs whose base rests flat on the floor\"",
        word: "credenza"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"capable of being understood : intelligible, conceivable\"",
        word: "comprehensible"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a territory that is controlled politically by a larger, more powerful state especially for foreign relations and defense\"",
        word: "protectorate"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a cooking utensil in which the food to be cooked is exposed to the source of heat (as live coals or electricity) through a wire grill\"",
        word: "brazier"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an exceptional, unusual, or abnormal thing or occurrence\"",
        word: "phenomenon"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"sharply perceptive : penetrating\"",
        word: "trenchant"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"of, relating to, or associated with the lungs\"",
        word: "pulmonary"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"like a figment of the imagination : illusive, spectral, unreal\"",
        word: "phantasmal"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to lighten : to lessen : to relieve\"",
        word: "alleviate"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"feeling extreme discouragement, dejection, or depression\"",
        word: "despondent"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an approach especially to a correct estimate or to a given quantity\"",
        word: "approximation"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"one of a large class of arthropods including scorpions, spiders, and mites\"",
        word: "arachnid"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a diplomatic mission in a foreign country headed by a minister\"",
        word: "legation"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a process of animal orientation and navigation that involves emission of high-frequency sounds that are reflected back from environing surfaces\"",
        word: "echolocation"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"vessels for burning material used to produce a fragrant odor; especially : such vessels swung on chains in a religious ritual\"",
        word: "censers"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"attractions to or likings for something\"",
        word: "affinities"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"distrust of oneself or of one's own powers : modest reserve\"",
        word: "diffidence"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a large disastrous fire involving many buildings\"",
        word: "conflagration"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"in a diseased manner\"",
        word: "pathologically"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a thing in which something (as a soul, idea, principle or type) is made concrete by expression in perceptible form : an incarnation\"",
        word: "embodiment"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"either of two flammable gaseous hydrocarbons obtained usually from petroleum or natural gas and occurring in gasoline and in liquefied petroleum gas\"",
        word: "butane"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the regulation of body temperature\"",
        word: "thermotaxis"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a sweet syrupy alcohol that is formed by fermentation of sugars, and used chiefly as a solvent and plasticizer, as a moistening agent, emollient, and lubricant, and as an emulsifying agent\"",
        word: "glycerin"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"small toothed whales that tend to live in a community rather than alone\"",
        word: "porpoises"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a clouding of the lens of the eye varying in degree from slight to complete opacity and obstructing the passage of light\"",
        word: "cataract"
      },
      {
        prompt: "Spell the word that matches this definition. (verb) \"to introduce or induct into an office with suitable ceremonies or solemnities : to invest with power or authority in a formal manner\"",
        word: "inaugurate"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"having a nearly white color and a surface that spreads out light\"",
        word: "alabaster"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"relating to, arising in, or acting through the mind especially in its affective or cognitive functions\"",
        word: "psychological"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a baked custard pie usually having an added savory ingredient (as chopped ham, seafood, or vegetables)\"",
        word: "quiche"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the emission of light from living organisms (such as fireflies, dinoflagellates, and bacteria)\"",
        word: "bioluminescence"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a European annual herb with many leaves and whitish yellow flowers that is grown to use in salad\"",
        word: "arugula"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a collection of individuals or of particular things : an aggregation\"",
        word: "assemblage"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a polite, tactful, or less explicit term used to avoid the direct naming of an unpleasant, painful, or frightening reality\"",
        word: "euphemism"
      }
    ]
  },
  {
    id: "spelling-set9",
    name: "Spelling Set 9",
    questions: [
      {
        prompt: "Spell the word that matches this definition. (noun) \"any of several small, crestless American birds usually having the crown of the head darker than the body plumage\"",
        word: "chickadee"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an instrument to observe, measure, and record quivering or trembling motion\"",
        word: "vibrometer"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a chronic disease characterized by the formation of nodules on the surface of the body that are accompanied by loss of sensation followed sooner or later by involvement of nerves\"",
        word: "leprosy"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"one who attends or assists : a follower\"",
        word: "acolyte"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"not characterized by balanced proportions\"",
        word: "asymmetric"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a semisolid dressing made by emulsifying a mixture of raw eggs or egg yolks, vegetable oil, and vinegar or lemon juice usually together with salt and condiments\"",
        word: "mayonnaise"
      },
      {
        prompt: "Spell the word that matches this definition. (interjection) \"used to express triumph concerning a discovery\"",
        word: "eureka"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"not likely to arouse hostility or give offense : inoffensive\"",
        word: "innocuous"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"any of an ancient breed of dogs originating in China that have loose wrinkled skin especially when young, a short bristly coat, blue-black tongue, and wide blunt muzzle\"",
        word: "shar-pei"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"something spit out and usually consisting of saliva with or without mucus or other materials from the respiratory passages\"",
        word: "sputum"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"animals such as earthworms and leeches\"",
        word: "annelids"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"capital city and port on the Mediterranean Sea in northwestern Libya\"",
        word: "Tripoli"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"physiological regulation of body temperature by metabolic means; especially : the property or state of being warm-blooded\"",
        word: "endothermy"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"somewhat resembling the blue of the sky\"",
        word: "cerulean"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a flammable hydrocarbon oil usually obtained by distillation of petroleum and used as a fuel, solvent, and thinner\"",
        word: "kerosene"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"of or relating to the scientific study of the nervous system\"",
        word: "neurological"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a usually chocolate-frosted oblong cream puff with whipped cream or custard filling\"",
        word: "éclair"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a street or passage closed at one end\"",
        word: "cul-de-sac"
      },
      {
        prompt: "Spell the word that matches this definition. (geographical entry) \"state in the northeastern U.S. that has the Delaware River as its eastern border and borders on Lake Erie in the northwest\"",
        word: "Pennsylvania"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"large whales typically of colder waters that lack teeth but have baleen plates in the upper jaw which are used to filter chiefly small crustaceans (such as krill) out of large quantities of seawater\"",
        word: "mysticetes"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the quality or state of having or showing a disposition to be easily enraged\"",
        word: "irascibility"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"substances (as acids, bases, or salts) that when dissolved in a suitable solvent (as water) or when fused become ionic conductors\"",
        word: "electrolytes"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a vessel in which holy oil is kept\"",
        word: "ampulla"
      },
      {
        prompt: "Spell the word that matches this definition. (geographical entry) \"country of northeastern Africa; became part of Ethiopia in 1962 and then became independent in 1993\"",
        word: "Eritrea"
      },
      {
        prompt: "Spell the word that matches this definition. (adverb) \"in a style marked by the absence of instrumental accompaniment\"",
        word: "a cappella"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"producing, involving, or being adverse effects on organs or nerves involved in hearing or balance\"",
        word: "ototoxic"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"simple epithelial sense organs composed of one or a few cells with a nerve connection and usually taking the form of a spine, plate, rod, cone, or peg\"",
        word: "sensilla"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"any plant of a small genus of ornamental shrubs with opposite leaves and bright yellow bell-shaped flowers which appear before the leaves in early spring\"",
        word: "forsythia"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the Semitic language that is the official language of Ethiopia\"",
        word: "Amharic"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"the Greek goddess of love and beauty\"",
        word: "Aphrodite"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"bearing the name of, being, or relating to one for whom or which something is named\"",
        word: "eponymous"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a crystalline phenolic acid found in many plants that is used especially in making pharmaceuticals and dyes, and as an antiseptic and disinfectant especially in treating skin diseases\"",
        word: "salicylic acid"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a hard cheese resembling derby\"",
        word: "Gloucester"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"an Australian moth that is made into a paste and eaten by the aborigines when the moths estivate in huge clusters in rocky mountains\"",
        word: "bogong moth"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"relating to a Protestant Christian church that is governed by a graded system of representative ecclesiastical bodies and is traditionally Calvinistic in doctrine\"",
        word: "Presbyterian"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"crustaceans that burrow in mud or beneath stones in shallow water along the seashore\"",
        word: "stomatopods"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"dry-cured spiced ham\"",
        word: "prosciutto"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a Japanese member of a gang of criminals\"",
        word: "yakuza"
      },
      {
        prompt: "Spell the word that matches this definition. (geographical entry) \"country in western Africa on the Atlantic\"",
        word: "Sierra Leone"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a gum resin containing oil obtained from East African or Arabian trees, valued in ancient times in worship and for embalming and scenting, and still an important resin used to produce a fragrant odor when burned\"",
        word: "frankincense"
      },
      {
        prompt: "Spell the word that matches this definition. (adjective) \"of or like a substance that forms part of the hard outer covering of insects, crustaceans, and some other invertebrates\"",
        word: "chitinous"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a pidgin English spoken in Sierra Leone\"",
        word: "Krio"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"the stiff hairs that grow about the nostrils or on other parts of the face in many mammals (as the whiskers of a cat or the hairs of the nostrils of humans)\"",
        word: "vibrissae"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"any mammal of a small genus of rare insectivorous mammals of Cuba and Haiti that are nearly two feet long and have a long snout, hard fur, and a long scaly tail\"",
        word: "solenodon"
      },
      {
        prompt: "Spell the word that matches this definition. (plural noun) \"sensory hairs on an arthropod or other invertebrate\"",
        word: "trichobothria"
      },
      {
        prompt: "Spell the word that matches this definition. (geographical entry) \"city and national capital, central Ethiopia\"",
        word: "Addis Ababa"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a novel about the usually early development or spiritual education of the main character\"",
        word: "Bildungsroman"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a bacterium of a genus of lactic-acid-forming bacteria\"",
        word: "lactobacillus"
      },
      {
        prompt: "Spell the word that matches this definition. (geographical entry) \"ancient district of eastern Asia Minor chiefly in the valley of the upper Kızıl Irmak in modern Turkey\"",
        word: "Cappadocia"
      },
      {
        prompt: "Spell the word that matches this definition. (noun) \"a state of euphoria believed to occur in patients with pulmonary tuberculosis\"",
        word: "spes phthisica"
      }
    ]
  }
];
