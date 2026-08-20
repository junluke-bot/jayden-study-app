// Word Study sets for the Iowa Assessments practice app.
// Each set has an id, a display name, and a list of definition-matching
// questions built from a vocabulary word list (word, part of speech,
// definition). Each question has:
//   prompt      - "What does \"word\" mean?" (or "refer to?" for place names)
//   choices     - four definitions (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/math2.js convention

window.WORD_STUDY_SETS = [
  {
    id: "wordstudy-set1",
    name: "Word Study Set 1",
    questions: [
      {
        prompt: "What does \"hesitate\" mean?",
        choices: ["to delay or pause typically for a moment.", "colleagues or comrades.", "close companions.", "showing care for others' suffering."],
        answerIndex: 0
      },
      {
        prompt: "What does \"scorcher\" mean?",
        choices: ["something that is very hot.", "a pleasant smell.", "a light, springy rhythm or tone.", "a chemical used for bleaching or disinfecting."],
        answerIndex: 0
      },
      {
        prompt: "What does \"scavenger\" mean?",
        choices: ["an animal that feeds on dead or discarded material.", "male heads of families.", "a greenish gas used as a disinfectant.", "payments for repeated use of work."],
        answerIndex: 0
      },
      {
        prompt: "What does \"fragments\" mean?",
        choices: ["broken or incomplete parts.", "suggesting evil or harm.", "widely known; famous.", "a sweet soft drink."],
        answerIndex: 0
      },
      {
        prompt: "What does \"deflated\" mean?",
        choices: ["let the air or gas out of something.", "a city in southern Arizona.", "argumentative; quarrelsome.", "a greenish gas used as a disinfectant."],
        answerIndex: 0
      },
      {
        prompt: "What does \"unleash\" mean?",
        choices: ["to release from restraint.", "widely known; famous.", "inflammation of a joint sac.", "small and not important; worthless."],
        answerIndex: 0
      },
      {
        prompt: "What does \"ration\" mean?",
        choices: ["a fixed portion of food or supplies.", "a young unmarried woman in Germany.", "a Chinese stir-fried noodle dish.", "very large."],
        answerIndex: 0
      },
      {
        prompt: "What does \"cosmetics\" mean?",
        choices: ["products applied to the body to improve appearance.", "having a high reputation; honored.", "a reference of words and synonyms.", "exclusion from a group."],
        answerIndex: 0
      },
      {
        prompt: "What does \"crawdad\" mean?",
        choices: ["a small freshwater crustacean; crayfish.", "very thin and bony.", "hair growing on the upper lip.", "a set of signs and symptoms."],
        answerIndex: 0
      },
      {
        prompt: "What does \"frustration\" mean?",
        choices: ["the feeling of being upset or annoyed because you cannot do something.", "the first model of something.", "objects shaped like cans or tubes.", "a decorative hanging light."],
        answerIndex: 0
      },
      {
        prompt: "What does \"unruly\" mean?",
        choices: ["hard to control; disorderly.", "a style of type without small finishing strokes.", "a messenger who transports packages or information.", "moving quickly with short steps."],
        answerIndex: 0
      },
      {
        prompt: "What does \"mascot\" mean?",
        choices: ["a person, animal, or thing that is a symbol for a group.", "argumentative; quarrelsome.", "to officially approve.", "a city in southern Arizona."],
        answerIndex: 0
      },
      {
        prompt: "What does \"aroma\" mean?",
        choices: ["a pleasant smell.", "with regret.", "a chemical used for bleaching or disinfecting.", "smoothly and easily."],
        answerIndex: 0
      },
      {
        prompt: "What does \"moustache\" mean?",
        choices: ["hair growing on the upper lip.", "written records of money or goods received.", "a group that performs together.", "a fast run of a horse."],
        answerIndex: 0
      },
      {
        prompt: "What does \"artifacts\" mean?",
        choices: ["objects made by humans, often of historical interest.", "a person guided by a mentor.", "the mind or personality.", "a knot of hair at the back of the head."],
        answerIndex: 0
      },
      {
        prompt: "What does \"perfume\" mean?",
        choices: ["a liquid with a pleasant smell worn on the body.", "a small, specialized shop.", "formally; with authority.", "a person, animal, or thing that is a symbol for a group."],
        answerIndex: 0
      },
      {
        prompt: "What does \"sinister\" mean?",
        choices: ["suggesting evil or harm.", "neighing softly, like a horse.", "to release from restraint.", "a person who dislikes people."],
        answerIndex: 0
      },
      {
        prompt: "What does \"tuxedo\" mean?",
        choices: ["a formal suit for men.", "a brief news announcement.", "a beetle that damages cotton.", "inflammation of a joint sac."],
        answerIndex: 0
      },
      {
        prompt: "What does \"discoveries\" mean?",
        choices: ["things that are found or learned for the first time.", "government by the people.", "people of high rank.", "a serious lung disease."],
        answerIndex: 0
      },
      {
        prompt: "What does \"lurches\" mean?",
        choices: ["moves suddenly and unsteadily.", "French resistance fighters in WWII.", "wood paneling on the lower part of a wall.", "inflammation of air passages in the lungs."],
        answerIndex: 0
      },
    ]
  },
  {
    id: "wordstudy-set2",
    name: "Word Study Set 2",
    questions: [
      {
        prompt: "What does \"language\" mean?",
        choices: ["a system of words and their use by a people.", "a city in southern Arizona.", "showing care for others' suffering.", "very offensive or disgusting."],
        answerIndex: 0
      },
      {
        prompt: "What does \"prognosis\" mean?",
        choices: ["a prediction of how a disease will develop.", "a city on Lake Erie in Pennsylvania.", "the highest social class.", "a channel with a gate for controlling water."],
        answerIndex: 0
      },
      {
        prompt: "What does \"Buffalo\" refer to?",
        choices: ["a city in western New York.", "a messenger who transports packages or information.", "stuffed pasta tubes.", "carved by cutting off small pieces."],
        answerIndex: 0
      },
      {
        prompt: "What does \"sequins\" mean?",
        choices: ["small shiny discs used to decorate clothing.", "a fixed portion of food or supplies.", "a plant with large flowers.", "a channel with a gate for controlling water."],
        answerIndex: 0
      },
      {
        prompt: "What does \"gallop\" mean?",
        choices: ["a fast run of a horse.", "light brown color.", "in a forceful way.", "proposing someone for an honor or job."],
        answerIndex: 0
      },
      {
        prompt: "What does \"fabulous\" mean?",
        choices: ["wonderful; excellent.", "suggesting evil or harm.", "math statements showing equality.", "a set of signs and symptoms."],
        answerIndex: 0
      },
      {
        prompt: "What does \"lanky\" mean?",
        choices: ["tall and thin in an awkward way.", "a brief news announcement.", "a fierce attack.", "a full-body exercise with squat, plank, and jump."],
        answerIndex: 0
      },
      {
        prompt: "What does \"fluently\" mean?",
        choices: ["smoothly and easily.", "the mind or personality.", "braided; interwoven.", "a pastry shop."],
        answerIndex: 0
      },
      {
        prompt: "What does \"mysterious\" mean?",
        choices: ["hard to understand or explain.", "proposing someone for an honor or job.", "related to trade.", "a layered pasta dish."],
        answerIndex: 0
      },
      {
        prompt: "What does \"brandished\" mean?",
        choices: ["waved something, especially a weapon, in a threatening way.", "a feeling of guilt.", "exclusion from a group.", "in a very cowardly way."],
        answerIndex: 0
      },
      {
        prompt: "What does \"sardines\" mean?",
        choices: ["small fish often packed in cans.", "a young unmarried woman in Germany.", "something that harms its creator.", "very dirty, unpleasant conditions."],
        answerIndex: 0
      },
      {
        prompt: "What does \"anguish\" mean?",
        choices: ["severe mental or physical pain.", "stuffed pasta tubes.", "a fixed portion of food or supplies.", "a small sharp surgical knife."],
        answerIndex: 0
      },
      {
        prompt: "What does \"conical\" mean?",
        choices: ["shaped like a cone.", "a device for slowing a fall.", "an arranged meeting.", "a prediction of how a disease will develop."],
        answerIndex: 0
      },
      {
        prompt: "What does \"rickety\" mean?",
        choices: ["likely to fall apart; unstable.", "severe mental or physical pain.", "a group of islands.", "having a crossed stripe pattern."],
        answerIndex: 0
      },
      {
        prompt: "What does \"lilt\" mean?",
        choices: ["a light, springy rhythm or tone.", "an outline, diagram, or plan.", "narrow openings or cracks.", "a knot of hair at the back of the head."],
        answerIndex: 0
      },
      {
        prompt: "What does \"pediatric\" mean?",
        choices: ["relating to medical care of children.", "a small hair clip.", "fastened firmly; also, completely fascinated.", "rule by one person with total power."],
        answerIndex: 0
      },
      {
        prompt: "What does \"porridge\" mean?",
        choices: ["a soft food made by boiling grains in water or milk.", "a device that reduces noise from an engine.", "a bakery, especially for bread.", "stuffed pasta tubes."],
        answerIndex: 0
      },
      {
        prompt: "What does \"democracy\" mean?",
        choices: ["government by the people.", "having a crossed stripe pattern.", "a Chinese stir-fried noodle dish.", "one who takes selfish advantage of situations."],
        answerIndex: 0
      },
      {
        prompt: "What does \"rummage\" mean?",
        choices: ["to search through in a disorderly way.", "an aircraft with freely rotating blades.", "people of high rank.", "breathed too quickly and deeply."],
        answerIndex: 0
      },
      {
        prompt: "What does \"beige\" mean?",
        choices: ["light brown color.", "a restaurant that sells pizza.", "related to ships or sailing.", "neighing softly, like a horse."],
        answerIndex: 0
      },
    ]
  },
  {
    id: "wordstudy-set3",
    name: "Word Study Set 3",
    questions: [
      {
        prompt: "What does \"ancestral\" mean?",
        choices: ["relating to family members from long ago.", "a dark, dense bread.", "the highest social class.", "to a large degree."],
        answerIndex: 0
      },
      {
        prompt: "What does \"grimace\" mean?",
        choices: ["a twisted expression showing dislike or pain.", "a person who is easily scared.", "great enthusiasm.", "a small high-pitched flute."],
        answerIndex: 0
      },
      {
        prompt: "What does \"gaunt\" mean?",
        choices: ["very thin and bony.", "a small hair clip.", "argumentative; quarrelsome.", "a person who assists guests or residents."],
        answerIndex: 0
      },
      {
        prompt: "What does \"enormous\" mean?",
        choices: ["very large.", "having a high reputation; honored.", "and other similar things; and so on.", "not known; strange."],
        answerIndex: 0
      },
      {
        prompt: "What does \"geranium\" mean?",
        choices: ["a garden plant with rounded leaves and bright flowers.", "a bakery, especially for bread.", "information used to influence opinions.", "a city on Lake Erie in Pennsylvania."],
        answerIndex: 0
      },
      {
        prompt: "What does \"nautical\" mean?",
        choices: ["related to ships or sailing.", "inflammation of a joint sac.", "friendly; peaceful.", "a bakery, especially for bread."],
        answerIndex: 0
      },
      {
        prompt: "What does \"dubious\" mean?",
        choices: ["doubtful or unsure.", "a sweet soft drink.", "a full-body exercise with squat, plank, and jump.", "one who takes selfish advantage of situations."],
        answerIndex: 0
      },
      {
        prompt: "What does \"ebony\" mean?",
        choices: ["very dark; black.", "argumentative; quarrelsome.", "power; strength.", "supports sticking out from a wall."],
        answerIndex: 0
      },
      {
        prompt: "What does \"foreign\" mean?",
        choices: ["from another country.", "a barrier blocking a passage.", "a leisurely walk in a public place.", "full of excitement and energy."],
        answerIndex: 0
      },
      {
        prompt: "What does \"paltry\" mean?",
        choices: ["small and not important; worthless.", "from another country.", "a strong chemical used in cleaning and soap.", "products applied to the body to improve appearance."],
        answerIndex: 0
      },
      {
        prompt: "What does \"plaited\" mean?",
        choices: ["braided; interwoven.", "very offensive or disgusting.", "a layered pasta dish.", "a decorative hanging light."],
        answerIndex: 0
      },
      {
        prompt: "What does \"monsieur\" mean?",
        choices: ["the French title equivalent to 'Mr.'; mister.", "pretending to be better than one is.", "a formal suit for men.", "plaster used on walls."],
        answerIndex: 0
      },
      {
        prompt: "What does \"manticores\" mean?",
        choices: ["mythical beasts with a human head and lion body.", "structures that carry smoke outside.", "the highest social class.", "a dark outline of a shape."],
        answerIndex: 0
      },
      {
        prompt: "What does \"prestigious\" mean?",
        choices: ["having a high reputation; honored.", "from another country.", "small fish often packed in cans.", "a plant used as animal feed."],
        answerIndex: 0
      },
      {
        prompt: "What does \"fraidycat\" mean?",
        choices: ["a person who is easily scared.", "waved something, especially a weapon, in a threatening way.", "a great, disastrous event.", "a trip to see animals, especially in Africa."],
        answerIndex: 0
      },
      {
        prompt: "What does \"guttural\" mean?",
        choices: ["produced in the throat.", "having a crossed stripe pattern.", "an organized violent attack on a minority group.", "a person who assists guests or residents."],
        answerIndex: 0
      },
      {
        prompt: "What does \"lo mein\" mean?",
        choices: ["a Chinese stir-fried noodle dish.", "providing extra help or support.", "a checked cotton fabric.", "a strong chemical used in cleaning and soap."],
        answerIndex: 0
      },
      {
        prompt: "What does \"courier\" mean?",
        choices: ["a messenger who transports packages or information.", "a layered pasta dish.", "relating to certain toothed whales.", "small fish often packed in cans."],
        answerIndex: 0
      },
      {
        prompt: "What does \"sans serif\" mean?",
        choices: ["a style of type without small finishing strokes.", "one who takes selfish advantage of situations.", "tall and thin in an awkward way.", "exclusion from a group."],
        answerIndex: 0
      },
      {
        prompt: "What does \"psyche\" mean?",
        choices: ["the mind or personality.", "easily scared; jumpy.", "removal from a job or position.", "an attested copy of a document."],
        answerIndex: 0
      },
    ]
  },
  {
    id: "wordstudy-set4",
    name: "Word Study Set 4",
    questions: [
      {
        prompt: "What does \"stucco\" mean?",
        choices: ["plaster used on walls.", "something that harms its creator.", "not known; strange.", "a task given to someone."],
        answerIndex: 0
      },
      {
        prompt: "What does \"Frankenstein\" mean?",
        choices: ["something that harms its creator.", "payments for repeated use of work.", "providing extra help or support.", "a reference of words and synonyms."],
        answerIndex: 0
      },
      {
        prompt: "What does \"schema\" mean?",
        choices: ["an outline, diagram, or plan.", "a full-body exercise with squat, plank, and jump.", "a fragrant substance used in medicine and repellents.", "able to be predicted."],
        answerIndex: 0
      },
      {
        prompt: "What does \"et cetera\" mean?",
        choices: ["and other similar things; and so on.", "proposing someone for an honor or job.", "a fragrant substance used in medicine and repellents.", "glass in fibrous form used in products."],
        answerIndex: 0
      },
      {
        prompt: "What does \"vidimus\" mean?",
        choices: ["an attested copy of a document.", "tropical plants that look like palms.", "photographers who chase celebrities.", "plaster used on walls."],
        answerIndex: 0
      },
      {
        prompt: "What does \"delphine\" mean?",
        choices: ["relating to certain toothed whales.", "moves suddenly and unsteadily.", "without a name being given.", "a light, springy rhythm or tone."],
        answerIndex: 0
      },
      {
        prompt: "What does \"slough\" mean?",
        choices: ["a swampy place; a state of deep sadness.", "a strong chemical used in cleaning and soap.", "braided; interwoven.", "information used to influence opinions."],
        answerIndex: 0
      },
      {
        prompt: "What does \"archipelago\" mean?",
        choices: ["a group of islands.", "exclusion from a group.", "smoothly and easily.", "corn dough with filling, steamed in a husk."],
        answerIndex: 0
      },
      {
        prompt: "What does \"serape\" mean?",
        choices: ["a colorful shawl or blanket worn as a cloak.", "likely to fall apart; unstable.", "objects shaped like cans or tubes.", "very excited and interested."],
        answerIndex: 0
      },
      {
        prompt: "What does \"puissance\" mean?",
        choices: ["power; strength.", "walking or acting in a bold, showy way.", "colleagues or comrades.", "a task given to someone."],
        answerIndex: 0
      },
      {
        prompt: "What does \"pinioning\" mean?",
        choices: ["binding or restraining the arms or wings.", "severe mental or physical pain.", "the frame of a vehicle.", "requiring hard work."],
        answerIndex: 0
      },
      {
        prompt: "What does \"chignon\" mean?",
        choices: ["a knot of hair at the back of the head.", "showing care for others' suffering.", "a feeling of guilt.", "a pastry shop."],
        answerIndex: 0
      },
      {
        prompt: "What does \"pheromone\" mean?",
        choices: ["a chemical signal affecting other animals of the same species.", "something that harms its creator.", "information used to influence opinions.", "the feeling of being upset or annoyed because you cannot do something."],
        answerIndex: 0
      },
      {
        prompt: "What does \"galleon\" mean?",
        choices: ["a large sailing ship from the 1500s-1700s.", "an organized violent attack on a minority group.", "a knot of hair at the back of the head.", "inflammation of a joint sac."],
        answerIndex: 0
      },
      {
        prompt: "What does \"magnanimous\" mean?",
        choices: ["very generous, especially to a rival.", "flattering talk used to persuade.", "a serious throat infection.", "argumentative; quarrelsome."],
        answerIndex: 0
      },
      {
        prompt: "What does \"chartreuse\" mean?",
        choices: ["a bright yellow-green color.", "a young unmarried woman in Germany.", "having no equal.", "objects shaped like cans or tubes."],
        answerIndex: 0
      },
      {
        prompt: "What does \"wainscoting\" mean?",
        choices: ["wood paneling on the lower part of a wall.", "a small group trained for a special purpose.", "people of high rank.", "a sweet pastry with nuts and syrup."],
        answerIndex: 0
      },
      {
        prompt: "What does \"Nehru\" mean?",
        choices: ["a hip-length jacket with a stand-up collar.", "a dark purple berry.", "the highest mountain in Africa.", "hard to control; disorderly."],
        answerIndex: 0
      },
      {
        prompt: "What does \"gangly\" mean?",
        choices: ["tall, thin, and awkward.", "written accounts of a person's own life.", "a set of signs and symptoms.", "a type of French tapestry or rug."],
        answerIndex: 0
      },
      {
        prompt: "What does \"swaggering\" mean?",
        choices: ["walking or acting in a bold, showy way.", "a device for slowing a fall.", "a small, specialized shop.", "a group that performs together."],
        answerIndex: 0
      },
    ]
  },
  {
    id: "wordstudy-set5",
    name: "Word Study Set 5",
    questions: [
      {
        prompt: "What does \"chimneys\" mean?",
        choices: ["structures that carry smoke outside.", "a small, specialized shop.", "objects shaped like cans or tubes.", "a group of islands."],
        answerIndex: 0
      },
      {
        prompt: "What does \"riveted\" mean?",
        choices: ["fastened firmly; also, completely fascinated.", "irregular; occurring here and there.", "moves suddenly and unsteadily.", "a feeling of guilt."],
        answerIndex: 0
      },
      {
        prompt: "What does \"plaid\" mean?",
        choices: ["having a crossed stripe pattern.", "very excited and interested.", "to release from restraint.", "a final demand with consequences."],
        answerIndex: 0
      },
      {
        prompt: "What does \"dirge\" mean?",
        choices: ["a funeral or mourning song.", "government by the people.", "carved by cutting off small pieces.", "a device for slowing a fall."],
        answerIndex: 0
      },
      {
        prompt: "What does \"zeal\" mean?",
        choices: ["great enthusiasm.", "requiring hard work.", "a fixed portion of food or supplies.", "having no equal."],
        answerIndex: 0
      },
      {
        prompt: "What does \"whittled\" mean?",
        choices: ["carved by cutting off small pieces.", "the French title equivalent to 'Mr.'; mister.", "irregular; occurring here and there.", "a serious throat infection."],
        answerIndex: 0
      },
      {
        prompt: "What does \"depots\" mean?",
        choices: ["stations or warehouses.", "something that harms its creator.", "structures that carry smoke outside.", "a brief news announcement."],
        answerIndex: 0
      },
      {
        prompt: "What does \"fiberglass\" mean?",
        choices: ["glass in fibrous form used in products.", "proposing someone for an honor or job.", "broken or incomplete parts.", "narrow openings or cracks."],
        answerIndex: 0
      },
      {
        prompt: "What does \"salvaged\" mean?",
        choices: ["rescued from loss or damage.", "let the air or gas out of something.", "a brief news announcement.", "the headwaiter in a restaurant."],
        answerIndex: 0
      },
      {
        prompt: "What does \"fissures\" mean?",
        choices: ["narrow openings or cracks.", "a French breed of beef cattle.", "the first model of something.", "a prediction of how a disease will develop."],
        answerIndex: 0
      },
      {
        prompt: "What does \"enthusiastic\" mean?",
        choices: ["very excited and interested.", "in a forceful way.", "a tower for bells.", "widely known; famous."],
        answerIndex: 0
      },
      {
        prompt: "What does \"discipline\" mean?",
        choices: ["controlled behavior; a field of study.", "a dark outline of a shape.", "a full-body exercise with squat, plank, and jump.", "the feeling of being upset or annoyed because you cannot do something."],
        answerIndex: 0
      },
      {
        prompt: "What does \"unfamiliar\" mean?",
        choices: ["not known; strange.", "relating to certain toothed whales.", "from another country.", "things that are found or learned for the first time."],
        answerIndex: 0
      },
      {
        prompt: "What does \"scurrying\" mean?",
        choices: ["moving quickly with short steps.", "a fragrant substance used in medicine and repellents.", "a fast run of a horse.", "a person who does beauty treatments."],
        answerIndex: 0
      },
      {
        prompt: "What does \"dignitaries\" mean?",
        choices: ["people of high rank.", "a restaurant that sells pizza.", "a dark, dense bread.", "severe mental or physical pain."],
        answerIndex: 0
      },
      {
        prompt: "What does \"pizzeria\" mean?",
        choices: ["a restaurant that sells pizza.", "mythical beasts with a human head and lion body.", "a group that performs together.", "hard to understand or explain."],
        answerIndex: 0
      },
      {
        prompt: "What does \"dismissal\" mean?",
        choices: ["removal from a job or position.", "medieval stone-throwing machines.", "related to trade.", "avoiding other people; solitary."],
        answerIndex: 0
      },
      {
        prompt: "What does \"skittish\" mean?",
        choices: ["easily scared; jumpy.", "binding or restraining the arms or wings.", "suggesting something bad is coming.", "a serious throat infection."],
        answerIndex: 0
      },
      {
        prompt: "What does \"careened\" mean?",
        choices: ["tilted or swayed wildly.", "an animal that feeds on dead or discarded material.", "very offensive or disgusting.", "moves suddenly and unsteadily."],
        answerIndex: 0
      },
      {
        prompt: "What does \"nomination\" mean?",
        choices: ["proposing someone for an honor or job.", "exclusion from a group.", "a dark purple berry.", "a Chinese stir-fried noodle dish."],
        answerIndex: 0
      },
    ]
  },
  {
    id: "wordstudy-set6",
    name: "Word Study Set 6",
    questions: [
      {
        prompt: "What does \"opportunist\" mean?",
        choices: ["one who takes selfish advantage of situations.", "to officially approve.", "to release from restraint.", "braided; interwoven."],
        answerIndex: 0
      },
      {
        prompt: "What does \"dictatorship\" mean?",
        choices: ["rule by one person with total power.", "a person, animal, or thing that is a symbol for a group.", "having no equal.", "likely to fall apart; unstable."],
        answerIndex: 0
      },
      {
        prompt: "What does \"comrades\" mean?",
        choices: ["close companions.", "smoothly and easily.", "products applied to the body to improve appearance.", "impossible to defeat."],
        answerIndex: 0
      },
      {
        prompt: "What does \"sporadic\" mean?",
        choices: ["irregular; occurring here and there.", "smoothly and easily.", "a pastry shop.", "showing care for others' suffering."],
        answerIndex: 0
      },
      {
        prompt: "What does \"promenade\" mean?",
        choices: ["a leisurely walk in a public place.", "relating to medical care of children.", "a bright yellow-green color.", "relating to certain toothed whales."],
        answerIndex: 0
      },
      {
        prompt: "What does \"repugnant\" mean?",
        choices: ["very offensive or disgusting.", "neighing softly, like a horse.", "a dark outline of a shape.", "products applied to the body to improve appearance."],
        answerIndex: 0
      },
      {
        prompt: "What does \"invincible\" mean?",
        choices: ["impossible to defeat.", "hard to control; disorderly.", "a fragrant substance used in medicine and repellents.", "to officially approve."],
        answerIndex: 0
      },
      {
        prompt: "What does \"renowned\" mean?",
        choices: ["widely known; famous.", "to delay or pause typically for a moment.", "pretending to be better than one is.", "leading; top-billed."],
        answerIndex: 0
      },
      {
        prompt: "What does \"parachute\" mean?",
        choices: ["a device for slowing a fall.", "a great, disastrous event.", "rule by one person with total power.", "impossible to defeat."],
        answerIndex: 0
      },
      {
        prompt: "What does \"laborious\" mean?",
        choices: ["requiring hard work.", "irregular; occurring here and there.", "goodbye in French.", "smoothly and easily."],
        answerIndex: 0
      },
      {
        prompt: "What does \"appointment\" mean?",
        choices: ["an arranged meeting.", "a sport played with sticks and a ball.", "a state of uncertainty.", "a pastry shop."],
        answerIndex: 0
      },
      {
        prompt: "What does \"foreseeable\" mean?",
        choices: ["able to be predicted.", "a dark, dense bread.", "a person, animal, or thing that is a symbol for a group.", "small and not important; worthless."],
        answerIndex: 0
      },
      {
        prompt: "What does \"ratify\" mean?",
        choices: ["to officially approve.", "a type of French tapestry or rug.", "rattles used as instruments.", "a chemical signal affecting other animals of the same species."],
        answerIndex: 0
      },
      {
        prompt: "What does \"scalpel\" mean?",
        choices: ["a small sharp surgical knife.", "a set of signs and symptoms.", "a fragrant substance used in medicine and repellents.", "a small group trained for a special purpose."],
        answerIndex: 0
      },
      {
        prompt: "What does \"reclusive\" mean?",
        choices: ["avoiding other people; solitary.", "a pastry shop.", "mythical beasts with a human head and lion body.", "a plant used as animal feed."],
        answerIndex: 0
      },
      {
        prompt: "What does \"compassionate\" mean?",
        choices: ["showing care for others' suffering.", "suggesting something bad is coming.", "a bright yellow-green color.", "broken or incomplete parts."],
        answerIndex: 0
      },
      {
        prompt: "What does \"bulletin\" mean?",
        choices: ["a brief news announcement.", "a style of type without small finishing strokes.", "payments for repeated use of work.", "a layered pasta dish."],
        answerIndex: 0
      },
      {
        prompt: "What does \"alfalfa\" mean?",
        choices: ["a plant used as animal feed.", "crisscrossed strips forming an open pattern.", "able to be predicted.", "power; strength."],
        answerIndex: 0
      },
      {
        prompt: "What does \"officially\" mean?",
        choices: ["formally; with authority.", "a device that reduces noise from an engine.", "a set of signs and symptoms.", "seriously and respectfully."],
        answerIndex: 0
      },
      {
        prompt: "What does \"crematorium\" mean?",
        choices: ["a place where bodies are cremated.", "very dirty, unpleasant conditions.", "a small freshwater crustacean; crayfish.", "to a large degree."],
        answerIndex: 0
      },
    ]
  },
  {
    id: "wordstudy-set7",
    name: "Word Study Set 7",
    questions: [
      {
        prompt: "What does \"bayonet\" mean?",
        choices: ["a blade attached to a rifle.", "to give or allow unwillingly.", "wood paneling on the lower part of a wall.", "French resistance fighters in WWII."],
        answerIndex: 0
      },
      {
        prompt: "What does \"amicable\" mean?",
        choices: ["friendly; peaceful.", "a person who is easily scared.", "in a very cowardly way.", "severe mental or physical pain."],
        answerIndex: 0
      },
      {
        prompt: "What does \"exuberant\" mean?",
        choices: ["full of excitement and energy.", "small appetizers before a meal.", "a style of type without small finishing strokes.", "a soft food made by boiling grains in water or milk."],
        answerIndex: 0
      },
      {
        prompt: "What does \"beautician\" mean?",
        choices: ["a person who does beauty treatments.", "a small sharp surgical knife.", "a person, animal, or thing that is a symbol for a group.", "power; strength."],
        answerIndex: 0
      },
      {
        prompt: "What does \"equations\" mean?",
        choices: ["math statements showing equality.", "a sweet or candy.", "a city in western New York.", "plaster used on walls."],
        answerIndex: 0
      },
      {
        prompt: "What does \"assignment\" mean?",
        choices: ["a task given to someone.", "an animal that feeds on dead or discarded material.", "relating to the sea east of Italy.", "a sweet pastry with nuts and syrup."],
        answerIndex: 0
      },
      {
        prompt: "What does \"ultimatum\" mean?",
        choices: ["a final demand with consequences.", "great enthusiasm.", "a prediction of how a disease will develop.", "not known; strange."],
        answerIndex: 0
      },
      {
        prompt: "What does \"whinnying\" mean?",
        choices: ["neighing softly, like a horse.", "a garden plant with rounded leaves and bright flowers.", "to a large degree.", "a city in western New York."],
        answerIndex: 0
      },
      {
        prompt: "What does \"squalor\" mean?",
        choices: ["very dirty, unpleasant conditions.", "the highest social class.", "a dark outline of a shape.", "a person, animal, or thing that is a symbol for a group."],
        answerIndex: 0
      },
      {
        prompt: "What does \"memoirs\" mean?",
        choices: ["written accounts of a person's own life.", "great enthusiasm.", "a leisurely walk in a public place.", "structures that carry smoke outside."],
        answerIndex: 0
      },
      {
        prompt: "What does \"cylinders\" mean?",
        choices: ["objects shaped like cans or tubes.", "a Chinese stir-fried noodle dish.", "walking or acting in a bold, showy way.", "rattles used as instruments."],
        answerIndex: 0
      },
      {
        prompt: "What does \"ominous\" mean?",
        choices: ["suggesting something bad is coming.", "a device for slowing a fall.", "with regret.", "a person who is easily scared."],
        answerIndex: 0
      },
      {
        prompt: "What does \"muffler\" mean?",
        choices: ["a device that reduces noise from an engine.", "suggesting something bad is coming.", "payments for repeated use of work.", "a city on Lake Ontario in New York."],
        answerIndex: 0
      },
      {
        prompt: "What does \"syndrome\" mean?",
        choices: ["a set of signs and symptoms.", "seriously and respectfully.", "a small hair clip.", "a person who is easily scared."],
        answerIndex: 0
      },
      {
        prompt: "What does \"premises\" mean?",
        choices: ["a building and its land.", "a funeral or mourning song.", "not known; strange.", "neighing softly, like a horse."],
        answerIndex: 0
      },
      {
        prompt: "What does \"safari\" mean?",
        choices: ["a trip to see animals, especially in Africa.", "things that are found or learned for the first time.", "an outline, diagram, or plan.", "government by the people."],
        answerIndex: 0
      },
      {
        prompt: "What does \"lasagna\" mean?",
        choices: ["a layered pasta dish.", "a person guided by a mentor.", "breathed too quickly and deeply.", "small and not important; worthless."],
        answerIndex: 0
      },
      {
        prompt: "What does \"substantially\" mean?",
        choices: ["to a large degree.", "likely to fall apart; unstable.", "an animal that feeds on dead or discarded material.", "argumentative; quarrelsome."],
        answerIndex: 0
      },
      {
        prompt: "What does \"mercantile\" mean?",
        choices: ["related to trade.", "the highest social class.", "structures that carry smoke outside.", "very offensive or disgusting."],
        answerIndex: 0
      },
      {
        prompt: "What does \"formidable\" mean?",
        choices: ["inspiring fear or respect.", "objects made by humans, often of historical interest.", "a swampy place; a state of deep sadness.", "things that are found or learned for the first time."],
        answerIndex: 0
      },
    ]
  },
  {
    id: "wordstudy-set8",
    name: "Word Study Set 8",
    questions: [
      {
        prompt: "What does \"propaganda\" mean?",
        choices: ["information used to influence opinions.", "walking or acting in a bold, showy way.", "tilted or swayed wildly.", "very dark; black."],
        answerIndex: 0
      },
      {
        prompt: "What does \"marquee\" mean?",
        choices: ["leading; top-billed.", "written records of money or goods received.", "a person who assists guests or residents.", "a light, springy rhythm or tone."],
        answerIndex: 0
      },
      {
        prompt: "What does \"proficient\" mean?",
        choices: ["skilled at something.", "a dark, dense bread.", "photographers who chase celebrities.", "an arranged meeting."],
        answerIndex: 0
      },
      {
        prompt: "What does \"compunction\" mean?",
        choices: ["a feeling of guilt.", "a serious lung disease.", "pretending to be better than one is.", "the French title equivalent to 'Mr.'; mister."],
        answerIndex: 0
      },
      {
        prompt: "What does \"emphatically\" mean?",
        choices: ["in a forceful way.", "a small sharp surgical knife.", "a sweet soft drink.", "a large sailing ship from the 1500s-1700s."],
        answerIndex: 0
      },
      {
        prompt: "What does \"hyperventilated\" mean?",
        choices: ["breathed too quickly and deeply.", "an outline, diagram, or plan.", "close companions.", "a beetle that damages cotton."],
        answerIndex: 0
      },
      {
        prompt: "What does \"ostracism\" mean?",
        choices: ["exclusion from a group.", "a full-body exercise with squat, plank, and jump.", "in a forceful way.", "relating to family members from long ago."],
        answerIndex: 0
      },
      {
        prompt: "What does \"onslaught\" mean?",
        choices: ["a fierce attack.", "small fish often packed in cans.", "small appetizers before a meal.", "formally; with authority."],
        answerIndex: 0
      },
      {
        prompt: "What does \"ruefully\" mean?",
        choices: ["with regret.", "smoothly and easily.", "to release from restraint.", "a person who dislikes people."],
        answerIndex: 0
      },
      {
        prompt: "What does \"misanthrope\" mean?",
        choices: ["a person who dislikes people.", "very offensive or disgusting.", "products applied to the body to improve appearance.", "great enthusiasm."],
        answerIndex: 0
      },
      {
        prompt: "What does \"prototype\" mean?",
        choices: ["the first model of something.", "a barrier blocking a passage.", "very thin and bony.", "a city in western New York."],
        answerIndex: 0
      },
      {
        prompt: "What does \"cravenly\" mean?",
        choices: ["in a very cowardly way.", "a state of uncertainty.", "the headwaiter in a restaurant.", "products applied to the body to improve appearance."],
        answerIndex: 0
      },
      {
        prompt: "What does \"mulberry\" mean?",
        choices: ["a dark purple berry.", "rattles used as instruments.", "providing extra help or support.", "neighing softly, like a horse."],
        answerIndex: 0
      },
      {
        prompt: "What does \"hypocritical\" mean?",
        choices: ["pretending to be better than one is.", "tropical plants that look like palms.", "wonderful; excellent.", "a sport played with sticks and a ball."],
        answerIndex: 0
      },
      {
        prompt: "What does \"chlorine\" mean?",
        choices: ["a greenish gas used as a disinfectant.", "smoothly and easily.", "argumentative; quarrelsome.", "to officially approve."],
        answerIndex: 0
      },
      {
        prompt: "What does \"traumatic\" mean?",
        choices: ["emotionally or physically shocking.", "the first model of something.", "with regret.", "a small sharp surgical knife."],
        answerIndex: 0
      },
      {
        prompt: "What does \"receipts\" mean?",
        choices: ["written records of money or goods received.", "math statements showing equality.", "skilled at something.", "fastened firmly; also, completely fascinated."],
        answerIndex: 0
      },
      {
        prompt: "What does \"solemnly\" mean?",
        choices: ["seriously and respectfully.", "small and not important; worthless.", "a fixed portion of food or supplies.", "the headwaiter in a restaurant."],
        answerIndex: 0
      },
      {
        prompt: "What does \"begrudge\" mean?",
        choices: ["to give or allow unwillingly.", "a Chinese stir-fried noodle dish.", "a small high-pitched flute.", "light brown color."],
        answerIndex: 0
      },
      {
        prompt: "What does \"contentious\" mean?",
        choices: ["argumentative; quarrelsome.", "rescued from loss or damage.", "very dark; black.", "an aircraft with freely rotating blades."],
        answerIndex: 0
      },
    ]
  },
  {
    id: "wordstudy-set9",
    name: "Word Study Set 9",
    questions: [
      {
        prompt: "What does \"precocious\" mean?",
        choices: ["showing mature abilities at a young age.", "a sweet or candy.", "a channel with a gate for controlling water.", "male heads of families."],
        answerIndex: 0
      },
      {
        prompt: "What does \"ensemble\" mean?",
        choices: ["a group that performs together.", "a sweet or candy.", "an attested copy of a document.", "related to trade."],
        answerIndex: 0
      },
      {
        prompt: "What does \"cadre\" mean?",
        choices: ["a small group trained for a special purpose.", "exclusion from a group.", "inflammation of air passages in the lungs.", "narrow openings or cracks."],
        answerIndex: 0
      },
      {
        prompt: "What does \"lye\" mean?",
        choices: ["a strong chemical used in cleaning and soap.", "very generous, especially to a rival.", "in a very cowardly way.", "mythical beasts with a human head and lion body."],
        answerIndex: 0
      },
      {
        prompt: "What does \"belfry\" mean?",
        choices: ["a tower for bells.", "the headwaiter in a restaurant.", "related to trade.", "an organized violent attack on a minority group."],
        answerIndex: 0
      },
      {
        prompt: "What does \"lacrosse\" mean?",
        choices: ["a sport played with sticks and a ball.", "a fierce attack.", "government by the people.", "goodbye in French."],
        answerIndex: 0
      },
      {
        prompt: "What does \"sluice\" mean?",
        choices: ["a channel with a gate for controlling water.", "impossible to defeat.", "irregular; occurring here and there.", "a tower for bells."],
        answerIndex: 0
      },
      {
        prompt: "What does \"cajolery\" mean?",
        choices: ["flattering talk used to persuade.", "a garden plant with rounded leaves and bright flowers.", "relating to the sea east of Italy.", "a restaurant that sells pizza."],
        answerIndex: 0
      },
      {
        prompt: "What does \"vigilance\" mean?",
        choices: ["careful watchfulness.", "small and not important; worthless.", "inflammation of a joint sac.", "government by the people."],
        answerIndex: 0
      },
      {
        prompt: "What does \"residuals\" mean?",
        choices: ["payments for repeated use of work.", "formally; with authority.", "seriously and respectfully.", "suggesting something bad is coming."],
        answerIndex: 0
      },
      {
        prompt: "What does \"boutique\" mean?",
        choices: ["a small, specialized shop.", "corn dough with filling, steamed in a husk.", "very generous, especially to a rival.", "likely to fall apart; unstable."],
        answerIndex: 0
      },
      {
        prompt: "What does \"peroxide\" mean?",
        choices: ["a chemical used for bleaching or disinfecting.", "written records of money or goods received.", "a plant used as animal feed.", "a type of French tapestry or rug."],
        answerIndex: 0
      },
      {
        prompt: "What does \"aristocracy\" mean?",
        choices: ["the highest social class.", "a pastry shop.", "photographers who chase celebrities.", "a messenger who transports packages or information."],
        answerIndex: 0
      },
      {
        prompt: "What does \"apocalypse\" mean?",
        choices: ["a great, disastrous event.", "moves suddenly and unsteadily.", "requiring hard work.", "the frame of a vehicle."],
        answerIndex: 0
      },
      {
        prompt: "What does \"tuberculosis\" mean?",
        choices: ["a serious lung disease.", "goodbye in French.", "a person who dislikes people.", "a knot of hair at the back of the head."],
        answerIndex: 0
      },
      {
        prompt: "What does \"barricade\" mean?",
        choices: ["a barrier blocking a passage.", "flattering talk used to persuade.", "with regret.", "an arranged meeting."],
        answerIndex: 0
      },
      {
        prompt: "What does \"confreres\" mean?",
        choices: ["colleagues or comrades.", "hard to control; disorderly.", "a device that reduces noise from an engine.", "a city in western New York."],
        answerIndex: 0
      },
      {
        prompt: "What does \"anonymously\" mean?",
        choices: ["without a name being given.", "a messenger who transports packages or information.", "wood paneling on the lower part of a wall.", "doubtful or unsure."],
        answerIndex: 0
      },
      {
        prompt: "What does \"unparalleled\" mean?",
        choices: ["having no equal.", "a final demand with consequences.", "easily scared; jumpy.", "objects made by humans, often of historical interest."],
        answerIndex: 0
      },
      {
        prompt: "What does \"barrette\" mean?",
        choices: ["a small hair clip.", "a device that reduces noise from an engine.", "mythical beasts with a human head and lion body.", "an animal that feeds on dead or discarded material."],
        answerIndex: 0
      },
    ]
  },
  {
    id: "wordstudy-set10",
    name: "Word Study Set 10",
    questions: [
      {
        prompt: "What does \"chassis\" mean?",
        choices: ["the frame of a vehicle.", "a set of signs and symptoms.", "a task given to someone.", "avoiding other people; solitary."],
        answerIndex: 0
      },
      {
        prompt: "What does \"junket\" mean?",
        choices: ["a trip, often for pleasure at another's expense.", "photographers who chase celebrities.", "stations or warehouses.", "colleagues or comrades."],
        answerIndex: 0
      },
      {
        prompt: "What does \"quandary\" mean?",
        choices: ["a state of uncertainty.", "an attested copy of a document.", "removal from a job or position.", "relating to medical care of children."],
        answerIndex: 0
      },
      {
        prompt: "What does \"Erie\" refer to?",
        choices: ["a city on Lake Erie in Pennsylvania.", "government by the people.", "math statements showing equality.", "without a name being given."],
        answerIndex: 0
      },
      {
        prompt: "What does \"gingham\" mean?",
        choices: ["a checked cotton fabric.", "a sweet or candy.", "pretending to be better than one is.", "emotionally or physically shocking."],
        answerIndex: 0
      },
      {
        prompt: "What does \"silhouette\" mean?",
        choices: ["a dark outline of a shape.", "light brown color.", "able to be predicted.", "careful watchfulness."],
        answerIndex: 0
      },
      {
        prompt: "What does \"auxiliary\" mean?",
        choices: ["providing extra help or support.", "power; strength.", "a serious throat infection.", "a Chinese stir-fried noodle dish."],
        answerIndex: 0
      },
      {
        prompt: "What does \"thesaurus\" mean?",
        choices: ["a reference of words and synonyms.", "a sport played with sticks and a ball.", "avoiding other people; solitary.", "a tower for bells."],
        answerIndex: 0
      },
      {
        prompt: "What does \"patriarchs\" mean?",
        choices: ["male heads of families.", "friendly; peaceful.", "people of high rank.", "supports sticking out from a wall."],
        answerIndex: 0
      },
      {
        prompt: "What does \"chandelier\" mean?",
        choices: ["a decorative hanging light.", "tall, thin, and awkward.", "tilted or swayed wildly.", "a serious lung disease."],
        answerIndex: 0
      },
      {
        prompt: "What does \"dulce\" mean?",
        choices: ["a sweet or candy.", "things that are found or learned for the first time.", "a person guided by a mentor.", "a twisted expression showing dislike or pain."],
        answerIndex: 0
      },
      {
        prompt: "What does \"concierge\" mean?",
        choices: ["a person who assists guests or residents.", "a chemical used for bleaching or disinfecting.", "a small group trained for a special purpose.", "an outline, diagram, or plan."],
        answerIndex: 0
      },
      {
        prompt: "What does \"latticework\" mean?",
        choices: ["crisscrossed strips forming an open pattern.", "a pleasant smell.", "a formal suit for men.", "a plant used as animal feed."],
        answerIndex: 0
      },
      {
        prompt: "What does \"hibiscus\" mean?",
        choices: ["a plant with large flowers.", "requiring hard work.", "a type of French tapestry or rug.", "having no equal."],
        answerIndex: 0
      },
      {
        prompt: "What does \"tamale\" mean?",
        choices: ["corn dough with filling, steamed in a husk.", "written accounts of a person's own life.", "supports sticking out from a wall.", "a pastry shop."],
        answerIndex: 0
      },
      {
        prompt: "What does \"maracas\" mean?",
        choices: ["rattles used as instruments.", "people of high rank.", "a type of French tapestry or rug.", "a large sailing ship from the 1500s-1700s."],
        answerIndex: 0
      },
      {
        prompt: "What does \"gyroplane\" mean?",
        choices: ["an aircraft with freely rotating blades.", "shaped like a cone.", "tall, thin, and awkward.", "medieval stone-throwing machines."],
        answerIndex: 0
      },
      {
        prompt: "What does \"burpees\" mean?",
        choices: ["a full-body exercise with squat, plank, and jump.", "suggesting something bad is coming.", "a city in southern Arizona.", "a brief news announcement."],
        answerIndex: 0
      },
      {
        prompt: "What does \"Adriatic\" mean?",
        choices: ["relating to the sea east of Italy.", "very generous, especially to a rival.", "information used to influence opinions.", "a French breed of beef cattle."],
        answerIndex: 0
      },
      {
        prompt: "What does \"piccolo\" mean?",
        choices: ["a small high-pitched flute.", "controlled behavior; a field of study.", "in a forceful way.", "and other similar things; and so on."],
        answerIndex: 0
      },
    ]
  },
  {
    id: "wordstudy-set11",
    name: "Word Study Set 11",
    questions: [
      {
        prompt: "What does \"au revoir\" mean?",
        choices: ["goodbye in French.", "easily scared; jumpy.", "a strong chemical used in cleaning and soap.", "removal from a job or position."],
        answerIndex: 0
      },
      {
        prompt: "What does \"tulle\" mean?",
        choices: ["fine net fabric used in veils.", "a device for slowing a fall.", "male heads of families.", "a pleasant smell."],
        answerIndex: 0
      },
      {
        prompt: "What does \"boll weevil\" mean?",
        choices: ["a beetle that damages cotton.", "a channel with a gate for controlling water.", "to release from restraint.", "a fragrant substance used in medicine and repellents."],
        answerIndex: 0
      },
      {
        prompt: "What does \"camphor\" mean?",
        choices: ["a fragrant substance used in medicine and repellents.", "very large.", "a device that reduces noise from an engine.", "wonderful; excellent."],
        answerIndex: 0
      },
      {
        prompt: "What does \"Tucson\" refer to?",
        choices: ["a city in southern Arizona.", "braided; interwoven.", "something that is very hot.", "a set of signs and symptoms."],
        answerIndex: 0
      },
      {
        prompt: "What does \"paparazzi\" mean?",
        choices: ["photographers who chase celebrities.", "an aircraft with freely rotating blades.", "irregular; occurring here and there.", "a full-body exercise with squat, plank, and jump."],
        answerIndex: 0
      },
      {
        prompt: "What does \"pumpernickel\" mean?",
        choices: ["a dark, dense bread.", "careful watchfulness.", "a light, springy rhythm or tone.", "a formal suit for men."],
        answerIndex: 0
      },
      {
        prompt: "What does \"pogrom\" mean?",
        choices: ["an organized violent attack on a minority group.", "a messenger who transports packages or information.", "a dark, dense bread.", "a dark purple berry."],
        answerIndex: 0
      },
      {
        prompt: "What does \"bursitis\" mean?",
        choices: ["inflammation of a joint sac.", "a plant used as animal feed.", "tropical plants that look like palms.", "an outline, diagram, or plan."],
        answerIndex: 0
      },
      {
        prompt: "What does \"patisserie\" mean?",
        choices: ["a pastry shop.", "careful watchfulness.", "a group that performs together.", "a trip, often for pleasure at another's expense."],
        answerIndex: 0
      },
      {
        prompt: "What does \"cycads\" mean?",
        choices: ["tropical plants that look like palms.", "doubtful or unsure.", "a prediction of how a disease will develop.", "providing extra help or support."],
        answerIndex: 0
      },
      {
        prompt: "What does \"sarsaparilla\" mean?",
        choices: ["a sweet soft drink.", "shaped like a cone.", "suggesting evil or harm.", "to search through in a disorderly way."],
        answerIndex: 0
      },
      {
        prompt: "What does \"maitre d'\" mean?",
        choices: ["the headwaiter in a restaurant.", "inflammation of a joint sac.", "a small hair clip.", "providing extra help or support."],
        answerIndex: 0
      },
      {
        prompt: "What does \"cannelloni\" mean?",
        choices: ["stuffed pasta tubes.", "very excited and interested.", "a trip, often for pleasure at another's expense.", "a blade attached to a rifle."],
        answerIndex: 0
      },
      {
        prompt: "What does \"boulangerie\" mean?",
        choices: ["a bakery, especially for bread.", "a colorful shawl or blanket worn as a cloak.", "a trip, often for pleasure at another's expense.", "the headwaiter in a restaurant."],
        answerIndex: 0
      },
      {
        prompt: "What does \"bronchitis\" mean?",
        choices: ["inflammation of air passages in the lungs.", "a brief news announcement.", "carved by cutting off small pieces.", "objects shaped like cans or tubes."],
        answerIndex: 0
      },
      {
        prompt: "What does \"Oswego\" refer to?",
        choices: ["a city on Lake Ontario in New York.", "a full-body exercise with squat, plank, and jump.", "and other similar things; and so on.", "relating to the sea east of Italy."],
        answerIndex: 0
      },
      {
        prompt: "What does \"diphtheria\" mean?",
        choices: ["a serious throat infection.", "irregular; occurring here and there.", "very generous, especially to a rival.", "an attested copy of a document."],
        answerIndex: 0
      },
      {
        prompt: "What does \"baklava\" mean?",
        choices: ["a sweet pastry with nuts and syrup.", "medieval stone-throwing machines.", "in a forceful way.", "hard to understand or explain."],
        answerIndex: 0
      },
      {
        prompt: "What does \"corbels\" mean?",
        choices: ["supports sticking out from a wall.", "objects shaped like cans or tubes.", "payments for repeated use of work.", "having a high reputation; honored."],
        answerIndex: 0
      },
    ]
  },
  {
    id: "wordstudy-set12",
    name: "Word Study Set 12",
    questions: [
      {
        prompt: "What does \"trebuchets\" mean?",
        choices: ["medieval stone-throwing machines.", "rattles used as instruments.", "goodbye in French.", "exclusion from a group."],
        answerIndex: 0
      },
      {
        prompt: "What does \"Kilimanjaro\" refer to?",
        choices: ["the highest mountain in Africa.", "waved something, especially a weapon, in a threatening way.", "an organized violent attack on a minority group.", "products applied to the body to improve appearance."],
        answerIndex: 0
      },
      {
        prompt: "What does \"fraulein\" mean?",
        choices: ["a young unmarried woman in Germany.", "irregular; occurring here and there.", "hard to control; disorderly.", "a group that performs together."],
        answerIndex: 0
      },
      {
        prompt: "What does \"protege\" mean?",
        choices: ["a person guided by a mentor.", "a city on Lake Ontario in New York.", "the highest mountain in Africa.", "a device for slowing a fall."],
        answerIndex: 0
      },
      {
        prompt: "What does \"hors d'oeuvres\" mean?",
        choices: ["small appetizers before a meal.", "with regret.", "able to be predicted.", "a messenger who transports packages or information."],
        answerIndex: 0
      },
      {
        prompt: "What does \"maquisards\" mean?",
        choices: ["French resistance fighters in WWII.", "a person who is easily scared.", "very dirty, unpleasant conditions.", "a blade attached to a rifle."],
        answerIndex: 0
      },
      {
        prompt: "What does \"Aubusson\" mean?",
        choices: ["a type of French tapestry or rug.", "a city in western New York.", "moving quickly with short steps.", "a layered pasta dish."],
        answerIndex: 0
      },
      {
        prompt: "What does \"Charolais\" mean?",
        choices: ["a French breed of beef cattle.", "inspiring fear or respect.", "something that harms its creator.", "the feeling of being upset or annoyed because you cannot do something."],
        answerIndex: 0
      },
    ]
  },
];
