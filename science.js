// Science question sets for the Iowa Assessments practice app,
// transcribed from an Iowa Assessments practice test booklet.
// Each set has an id, a display name (used as the on-screen topic label),
// and a list of questions.
// Each question has:
//   prompt      - the question text
//   choices     - four answer options (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/math.js convention

window.SCIENCE_SETS = [
  {
    id: "ecology",
    name: "Ecology",
    questions: [
      {
        prompt:
          "While digging at an excavation site, Amelia discovered bird fossils at a depth of 35 feet. Then, Amelia discovered fish fossils at a depth of 75 feet. What does this suggest about the age of the fossils?",
        choices: [
          "The fish fossils are older.",
          "The bird fossils are older.",
          "Both fossils are approximately the same age.",
          "Both fossils are from the same species."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "A caterpillar eats leaves, and later a bird eats the caterpillar. What is the original source of energy in this food chain?",
        choices: ["The Sun", "The bird", "The caterpillar", "The leaves"],
        answerIndex: 0
      },
      {
        prompt: "Where is the majority of the Earth's freshwater stored?",
        choices: [
          "Glaciers and ice caps",
          "Underground rivers",
          "The ocean",
          "Lakes and ponds"
        ],
        answerIndex: 0
      },
      {
        prompt: "In which location would you find the highest amount of saltwater?",
        choices: ["Oceans", "Rivers", "Marshes", "Lakes"],
        answerIndex: 0
      },
      {
        prompt: "Which action would help reduce pollution in an ecosystem?",
        choices: [
          "Creating systems to filter wastewater before it enters rivers",
          "Redirecting factory waste into a lake",
          "Removing forests to build roads",
          "Building a golf course"
        ],
        answerIndex: 0
      },
      {
        prompt: "What are the two most important things that plants need to grow?",
        choices: [
          "Water and nutrients",
          "Air and bacteria",
          "Soil and animals",
          "Fungus and insects"
        ],
        answerIndex: 0
      },
      {
        prompt: "A plant will grow best in an environment with:",
        choices: [
          "Lots of water, sunlight, and nutrients",
          "Low amount of sunlight, dry soil, and little water",
          "Lots of nutrients, no sunlight, and dry air",
          "Full shade, little water, and nutrient-rich soil"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which type of habitat would have the highest number of thriving plants?",
        choices: ["Rainforest", "Tundra", "Desert", "Grassland"],
        answerIndex: 0
      },
      {
        prompt: "How do decomposers like fungi and bacteria help an ecosystem?",
        choices: [
          "They return nutrients to the soil by breaking down dead organisms.",
          "They move pollen between plants.",
          "They provide oxygen for animals.",
          "They create new soil by eroding rocks."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Fill in the blanks below. Leaves absorb ___, while roots take in ___, to help a plant grow.",
        choices: [
          "Sunlight, water",
          "Air, light",
          "Water, air",
          "Light, oxygen"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "A deer eats grass, and then a wolf eats the deer. What is the original source of energy in this food chain?",
        choices: ["The Sun", "The deer", "The wolf", "The grass"],
        answerIndex: 0
      },
      {
        prompt:
          "In a coastal ecosystem, sea stars eat mussels, and mussels filter water. If pollution kills off most of the sea stars, what is the most likely result?",
        choices: [
          "Mussel populations will go up.",
          "More sea stars will migrate to the area.",
          "The mussels will stop filtering water.",
          "Sea stars will begin to filter water."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following would take place during erosion?",
        choices: [
          "Wind carrying sand from one place to another",
          "Lava cooling into rock",
          "Plants absorbing water through their roots",
          "Ice melting into water"
        ],
        answerIndex: 0
      },
      {
        prompt: "What would be the best way to prevent erosion on a riverbank?",
        choices: [
          "Planting grasses and shrubs along the river's edge",
          "Taking away all trees from the riverbank",
          "Increasing the speed of the river's current",
          "Digging deeper channels in the river"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the influence of oceans on ecosystems?",
        choices: [
          "They provide homes for marine life.",
          "They are the reason why grasslands are present.",
          "They are the reason for rain.",
          "They are where cold-blooded animals live."
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the purpose of a decomposer?",
        choices: [
          "To break down dead animals and plants",
          "To produce their own food",
          "To eat living poisonous plants",
          "To eat away dangerous rodents"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why is corn a producer?",
        choices: [
          "It makes its own food.",
          "It eats other organisms.",
          "It is an herbivore.",
          "It is a carnivore."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "In a food chain, corn is eaten by a rat, the rat is eaten by a snake, and the snake is eaten by an owl. Which organism is an herbivore?",
        choices: ["Rat", "Corn", "Snake", "Owl"],
        answerIndex: 0
      },
      {
        prompt: "What happens to matter when a snake eats a rat?",
        choices: [
          "All of the matter gets transferred to the snake.",
          "All of the matter gets transferred to the rat.",
          "Matter is equally distributed between the snake and the rat.",
          "No matter is transferred."
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the best way to save our Earth from excess human activity?",
        choices: [
          "Teach others how to conserve",
          "Only flush the toilet once a day",
          "Throw all of your trash away in the river because it is going to end up there anyway",
          "Don't buy produce"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is an omnivore?",
        choices: [
          "An animal that eats plants and animals",
          "An animal that eats only plants",
          "An animal that eats only animals",
          "An animal that eats only marine animals"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "A polar bear makes its way to a tropical rainforest ecosystem. How does this impact the ecosystem there?",
        choices: [
          "It disrupts the balance there",
          "The native animals hibernate",
          "All the plants get eaten",
          "Nothing is affected"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is a human activity that negatively impacts our Earth in major ways?",
        choices: ["Industry", "Planting trees", "Eating plant-based foods", "Using artificial lights"],
        answerIndex: 0
      },
      {
        prompt: "What animal is most likely an herbivore?",
        choices: ["Deer", "Bear", "Lynx", "Fox"],
        answerIndex: 0
      },
      {
        prompt: "Why do animals migrate?",
        choices: [
          "To find favorable living conditions",
          "To travel in groups",
          "To live in colder places",
          "To explore new places"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is one way we can protect Earth from extreme pollution?",
        choices: [
          "Walk to school",
          "Switch to disposable paper, wood and plastics",
          "Only drink one glass of water a day",
          "Take short showers"
        ],
        answerIndex: 0
      }
    ]
  },
  {
    id: "energy",
    name: "Energy",
    questions: [
      {
        prompt: "Which answer choice is an example of an energy source that is renewable?",
        choices: [
          "A solar panel converting sunlight into electricity",
          "Burning wood for heat",
          "A train using coal for power",
          "A car running on gasoline"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which answer choice is the best example of an energy source that is non-renewable?",
        choices: [
          "Natural gas",
          "Wind turbines",
          "Hydroelectric dams",
          "Geothermal power"
        ],
        answerIndex: 0
      },
      {
        prompt: "What type of energy is produced when electrical energy flows into a light bulb?",
        choices: [
          "Heat energy and light energy",
          "Sound energy and solar energy",
          "Magnetic energy",
          "Nuclear energy"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the primary energy source that plants use to create sugars?",
        choices: ["Sunlight", "Water", "Soil", "Air"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "statesOfMatter",
    name: "States of Matter",
    questions: [
      {
        prompt: "Which of the following objects is most likely to be attracted to a magnet?",
        choices: ["A steel paperclip", "A plastic button", "A glass marble", "A wooden pencil"],
        answerIndex: 0
      },
      {
        prompt: "Which material will dissolve the best in water?",
        choices: ["Sugar", "Candle wax", "Pebbles", "Oil"],
        answerIndex: 0
      },
      {
        prompt: "Which of the following is a property of most metals?",
        choices: [
          "They can be melted and reshaped.",
          "They shatter easily.",
          "They are always brittle.",
          "They do not conduct electricity."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which scenario shows particles that are too small to be seen?",
        choices: [
          "Dissolving sugar in water",
          "Stirring water",
          "A seashell on shore",
          "Raindrops falling down from the sky"
        ],
        answerIndex: 0
      },
      {
        prompt: "Making a Caesar salad is an example of a...",
        choices: ["Physical change", "Chemical change", "Chemical reaction", "Science"],
        answerIndex: 0
      },
      {
        prompt: "What does a diamond and a gold bar have in common?",
        choices: ["Both are minerals", "Both are easy to mine", "Both are easy to bend", "Both are easy to break"],
        answerIndex: 0
      },
      {
        prompt: "A ball-and-stick model of CO2 shows one carbon atom bonded to two oxygen atoms. How many carbon atoms are in this molecule?",
        choices: ["1", "2", "3", "4"],
        answerIndex: 0
      },
      {
        prompt: "A ball-and-stick model shows one carbon atom bonded to four hydrogen atoms. What is the correct chemical formula for this molecule?",
        choices: ["CH4", "CH3", "H2O", "C4H"],
        answerIndex: 0
      },
      {
        prompt: "How many carbons are in the chemical formula C4H10?",
        choices: ["4", "10", "14", "2"],
        answerIndex: 0
      },
      {
        prompt: "Why can't we see water molecules?",
        choices: [
          "They are too small to be seen",
          "There are water cells, but not molecules",
          "There are no microscopes that can magnify them enough to be seen",
          "Their existence has never been proven"
        ],
        answerIndex: 0
      },
      {
        prompt: "A student decides to burn wood for scientific purposes. What fact is true regarding the wood?",
        choices: [
          "A whole new product is made with different properties.",
          "The change in the wood can be reversed.",
          "A physical reaction has occurred.",
          "The wood gets heated up, but nothing about its properties change."
        ],
        answerIndex: 0
      },
      {
        prompt: "How many hydrogens are in the compound NH3?",
        choices: ["3", "1", "4", "2"],
        answerIndex: 0
      },
      {
        prompt: "A ball-and-stick model shows one oxygen atom bonded to two hydrogen atoms. What is the correct formula for this molecule?",
        choices: ["H2O", "HO", "H2O2", "HO2"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "forcesAndMotion",
    name: "Forces & Motion",
    questions: [
      {
        prompt:
          "Two students pull identical wagons. One wagon moves faster than the other. What is the most likely reason?",
        choices: [
          "The student pulling the faster wagon is using more force.",
          "The slower wagon is lighter.",
          "The students are using equal force.",
          "The heavier wagon moves faster."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Every time Emma drops a tennis ball, it goes straight down. What force is acting on the tennis ball?",
        choices: ["Gravity", "Friction", "Magnetism", "Inertia"],
        answerIndex: 0
      },
      {
        prompt: "What effect does gravity have on a rock sitting on the edge of a cliff?",
        choices: [
          "It pulls the rock downward.",
          "It pushes the rock toward the ocean.",
          "It breaks the rock down slowly over time.",
          "It causes the rock to change shape."
        ],
        answerIndex: 0
      },
      {
        prompt: "How does increasing the steepness of a ramp affect the speed of a rolling object?",
        choices: [
          "It increases the object's speed.",
          "It makes the object roll slower.",
          "It has no effect on speed.",
          "It makes the object stop moving."
        ],
        answerIndex: 0
      },
      {
        prompt: "A baseball rests on a baseball field. What force is keeping the baseball from moving?",
        choices: [
          "Gravity pulling it toward the Earth's core",
          "The Sun's energy",
          "The Earth's magnetic field",
          "The movement of the atmosphere"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Imagine you are at the beach, looking out over the ocean. When warm air rises off the surface of the ocean, cooler air moves in to take its place. What does this create?",
        choices: ["Wind", "A cloud", "Snowfall", "An earthquake"],
        answerIndex: 0
      },
      {
        prompt: "Which type of wave can travel through empty space, without needing matter?",
        choices: ["Light waves", "Sound waves", "Water waves", "Earthquake waves"],
        answerIndex: 0
      },
      {
        prompt: "Over an hour, waves on a lake became taller. What does this tell us?",
        choices: [
          "The energy of the waves has gone up.",
          "The energy of the waves has gone down.",
          "The waves lost momentum.",
          "The gravity of the Moon stopped affecting the water."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "A scientist tests the speed of sound through different materials. He finds that sound travels the slowest in air, faster in water, and the fastest in steel. What does this tell us?",
        choices: [
          "Sound travels the fastest in solids.",
          "Sound travels the fastest in gases.",
          "Sound cannot move through solids.",
          "Sound moves at the same speed in all materials."
        ],
        answerIndex: 0
      },
      {
        prompt: "Where is the force of gravity pulling towards?",
        choices: [
          "Down towards the center of Earth",
          "Down towards the ground",
          "Up towards the atmosphere",
          "Up towards the tallest building in the world"
        ],
        answerIndex: 0
      }
    ]
  },
  {
    id: "earthAndUniverse",
    name: "Earth & the Universe",
    questions: [
      {
        prompt: "Which answer choice is the primary source of energy for all life on Earth?",
        choices: ["The Sun", "Wind", "The Moon", "The ocean"],
        answerIndex: 0
      },
      {
        prompt: "What keeps objects on the Earth from floating off into space?",
        choices: [
          "The Earth's gravity",
          "The Sun's magnetic field",
          "The diameter of Earth's axis",
          "The Earth's rotation"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why does the Sun appear brighter compared to other stars in the sky?",
        choices: [
          "It is much closer to Earth than other stars.",
          "It is hotter than all the other stars.",
          "It is larger than all the other stars.",
          "It has more energy than all the other stars."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which planet is the furthest away from Earth?",
        choices: ["Neptune", "Venus", "Jupiter", "Mercury"],
        answerIndex: 0
      },
      {
        prompt:
          "A star was found close to Neptune. From which planet would you be able to see the star at its brightest?",
        choices: ["Uranus", "Mercury", "Earth", "Mars"],
        answerIndex: 0
      },
      {
        prompt: "What is the hydrosphere?",
        choices: [
          "The part of Earth that is made of water.",
          "The envelope of gases that surround Earth.",
          "The region where living organisms interact.",
          "The region where rocks can be found on Earth."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of these are parts of the water cycle?",
        choices: [
          "Evaporation, condensation, precipitation",
          "Weathering and erosion, heat and pressure",
          "Birth, mating, death",
          "Seed, plant, death"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is a biosphere?",
        choices: [
          "The part of Earth where living organisms are found.",
          "The part of Earth where dissolved gases are found.",
          "The part of Earth where water is found.",
          "The part of Earth where ice and glaciers are found."
        ],
        answerIndex: 0
      },
      {
        prompt: "On which planet would the Sun appear the brightest?",
        choices: ["Mercury", "Earth", "Venus", "Neptune"],
        answerIndex: 0
      },
      {
        prompt: "What are the layers that make up the inner Earth?",
        choices: [
          "Crust, mantle, outer core, inner core",
          "Crust, mantle, outer core, middle core",
          "Biosphere, lithosphere, atmosphere, hydrosphere",
          "Biosphere, lithosphere, atmosphere, watersphere"
        ],
        answerIndex: 0
      },
      {
        prompt: "Where are tropical climates found?",
        choices: [
          "By the equator",
          "Near cities with a lot of pollution",
          "Towards the North or South poles",
          "In between the equator and the poles"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the Big Dipper?",
        choices: ["Constellation", "Planet", "Galaxy", "Moon"],
        answerIndex: 0
      },
      {
        prompt: "What is the reason for Earth's seasons?",
        choices: [
          "Earth's tilted axis",
          "The position of the Sun",
          "The position of the Moon",
          "Both the position of the Sun and the Moon"
        ],
        answerIndex: 0
      },
      {
        prompt: "What happens during a solar eclipse?",
        choices: [
          "The Moon blocks out the Sun",
          "The Sun blocks out the Moon",
          "The Moon blocks out half of the Sun",
          "The Sun blocks out half of the Moon"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which Earth layer is the hottest?",
        choices: ["Inner core", "Crust", "Mantle", "Outer core"],
        answerIndex: 0
      },
      {
        prompt: "Where is the majority of water found on Earth?",
        choices: ["Oceans", "Rivers", "Lakes", "Underwater aquifers"],
        answerIndex: 0
      },
      {
        prompt: "What is the majority of the quality of water that you can find in nature?",
        choices: ["Saltwater", "Soap water", "Freshwater", "Sandy water"],
        answerIndex: 0
      },
      {
        prompt: "What galaxy do we live in?",
        choices: ["Milky Way", "Earth", "Solar system", "The Sun"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "lifeScience",
    name: "Life Science",
    questions: [
      {
        prompt: "What do plants use for photosynthesis?",
        choices: ["Air, water", "Air, soil", "Soil", "Compost"],
        answerIndex: 0
      },
      {
        prompt: "What part of a lemon tree is edible?",
        choices: ["Fruit", "Root", "Stem", "Leaves"],
        answerIndex: 0
      },
      {
        prompt: "What is needed for photosynthesis?",
        choices: ["Light Energy", "Oxygen", "Electrical Energy", "Nitrogen"],
        answerIndex: 0
      },
      {
        prompt: "Select the organism/plant that is most likely to perform photosynthesis.",
        choices: ["Aloe vera", "Moose", "Peacock", "Camel"],
        answerIndex: 0
      },
      {
        prompt: "What is a byproduct of photosynthesis?",
        choices: ["Oxygen", "Water", "Carbon dioxide", "Nitrogen"],
        answerIndex: 0
      },
      {
        prompt: "Which part of the cell is found in a plant cell but not in an animal cell?",
        choices: ["Chloroplast", "Cytoplasm", "Mitochondria", "Nucleus"],
        answerIndex: 0
      },
      {
        prompt: "What are organisms made out of?",
        choices: ["Cells", "One cell", "Lungs", "Chloroplasts"],
        answerIndex: 0
      },
      {
        prompt: "What is another word for evaporation in plant leaves?",
        choices: ["Transpiration", "Diffusion", "Cohesion", "Adhesion"],
        answerIndex: 0
      },
      {
        prompt: "Which part of the cell is also known as the \"powerhouse of the cell\"?",
        choices: ["Mitochondria", "Cytoplasm", "Ribosomes", "Golgi Apparatus"],
        answerIndex: 0
      },
      {
        prompt: "Where does the source of a plant's energy come from?",
        choices: ["Sun", "Soil", "Other plants", "Moon"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "humanBody",
    name: "Human Body",
    questions: [
      {
        prompt: "What organ is part of the digestive system?",
        choices: ["Esophagus", "Spine", "Heart", "Lungs"],
        answerIndex: 0
      },
      {
        prompt:
          "In this organ, vital minerals and nutrients are absorbed from food and put back into the body. Which organ matches this description?",
        choices: ["Small intestine", "Liver", "Lungs", "Pancreas"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "scientificMethod",
    name: "Scientific Method & Tools",
    questions: [
      {
        prompt:
          "A scientist plants five identical flowers in different amounts of sunlight to test how it affects growth. What is the independent variable in this experiment?",
        choices: [
          "The amount of sunlight",
          "The type of plant",
          "The soil used",
          "The number of flowers"
        ],
        answerIndex: 0
      },
      {
        prompt: "While handling chemicals in a lab, what safety equipment should always be used?",
        choices: ["Gloves and goggles", "A thermometer", "A balance scale", "A microscope"],
        answerIndex: 0
      },
      {
        prompt: "Which tool would best help compare the mass of two objects?",
        choices: [
          "A digital scale",
          "A graduated cylinder",
          "A ruler",
          "A thermometer"
        ],
        answerIndex: 0
      },
      {
        prompt: "Clara is measuring the boiling point of different liquids. What tool should she use?",
        choices: ["A thermometer", "A barometer", "A stopwatch", "A beaker"],
        answerIndex: 0
      },
      {
        prompt:
          "A scientist is testing how the amount of water affects plant growth. She gives different amounts of water to three identical plants and measures their height over time. Which term is used to describe the amount of water the scientist gives to the plants?",
        choices: [
          "Independent Variable",
          "Hypothesis",
          "Control",
          "Dependent Variable"
        ],
        answerIndex: 0
      }
    ]
  }
];
