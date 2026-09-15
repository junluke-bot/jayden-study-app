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
          "The fish fossils formed first.",
          "The bird fossils formed first.",
          "Both fossils are roughly the same age.",
          "Both fossils belong to the same species."
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
          "Ocean water",
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
          "Filtering wastewater before it reaches rivers",
          "Dumping factory waste into a lake",
          "Clearing forests to build roads",
          "Constructing a golf course"
        ],
        answerIndex: 0
      },
      {
        prompt: "What are the two most important things that plants need to grow?",
        choices: [
          "Water and nutrients",
          "Air and bacteria",
          "Soil and animals",
          "Fungus and bugs"
        ],
        answerIndex: 0
      },
      {
        prompt: "A plant will grow best in an environment with:",
        choices: [
          "Plenty of water, sunlight, and nutrients",
          "Little sunlight, dry soil, and barely any water",
          "Plenty of nutrients, no sunlight, and dry air",
          "Deep shade, little water, and nutrient-rich soil"
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
          "They break down dead organisms and return nutrients to the soil.",
          "They carry pollen from plant to plant.",
          "They supply animals with oxygen.",
          "They wear down rocks to form new soil."
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
          "The mussel population will increase.",
          "More sea stars will move into the area.",
          "The mussels will no longer filter the water.",
          "Sea stars will start filtering the water."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following would take place during erosion?",
        choices: [
          "Wind blowing sand from one place to another",
          "Lava hardening into rock",
          "Plant roots soaking up water",
          "Ice melting into liquid water"
        ],
        answerIndex: 0
      },
      {
        prompt: "What would be the best way to prevent erosion on a riverbank?",
        choices: [
          "Planting grass and shrubs along the riverbank",
          "Clearing all the trees from the riverbank",
          "Speeding up the river's current",
          "Carving deeper channels into the river"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the influence of oceans on ecosystems?",
        choices: [
          "They give marine animals a place to live.",
          "They're the reason grasslands exist.",
          "They cause rainfall.",
          "They're home to cold-blooded animals only."
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the purpose of a decomposer?",
        choices: [
          "To break down dead plants and animals",
          "To make their own food",
          "To feed on living poisonous plants",
          "To get rid of dangerous rodents"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why is corn a producer?",
        choices: [
          "It produces its own food.",
          "It feeds on other organisms.",
          "It's a plant-eater.",
          "It's a meat-eater."
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
          "All the matter passes to the snake.",
          "All the matter passes to the rat.",
          "The matter is split evenly between the snake and the rat.",
          "No matter is exchanged at all."
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the best way to save our Earth from excess human activity?",
        choices: [
          "Teach others ways to conserve resources",
          "Flush the toilet only once each day",
          "Toss all your trash in the river since it'll end up there eventually",
          "Stop buying fruits and vegetables"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is an omnivore?",
        choices: [
          "An animal that eats both plants and animals",
          "An animal that eats only plants",
          "An animal that eats only other animals",
          "An animal that eats only sea creatures"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "A polar bear makes its way to a tropical rainforest ecosystem. How does this impact the ecosystem there?",
        choices: [
          "It throws off the ecosystem's balance",
          "The native animals go into hibernation",
          "Every plant gets eaten",
          "There is no effect at all"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is a human activity that negatively impacts our Earth in major ways?",
        choices: ["Industry", "Planting more trees", "Eating a plant-based diet", "Using artificial lighting"],
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
          "To seek out better living conditions",
          "To move together as a group",
          "To settle somewhere colder",
          "To discover new places"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is one way we can protect Earth from extreme pollution?",
        choices: [
          "Walk instead of driving to school",
          "Switch to disposable paper, wood, and plastic products",
          "Limit yourself to one glass of water a day",
          "Keep your showers short"
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
          "A solar panel turning sunlight into electricity",
          "Burning wood to produce heat",
          "A train powered by coal",
          "A car that runs on gasoline"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which answer choice is the best example of an energy source that is non-renewable?",
        choices: [
          "Natural gas",
          "Wind turbines",
          "Hydroelectric dams",
          "Geothermal energy"
        ],
        answerIndex: 0
      },
      {
        prompt: "What type of energy is produced when electrical energy flows into a light bulb?",
        choices: [
          "Heat and light energy",
          "Sound and solar energy",
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
        choices: ["A metal paperclip", "A plastic button", "A glass marble", "A wooden pencil"],
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
          "They can be melted down and reshaped.",
          "They break apart easily.",
          "They are always fragile.",
          "They don't conduct electricity."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which scenario shows particles that are too small to be seen?",
        choices: [
          "Sugar dissolving in water",
          "Water being stirred",
          "A seashell lying on the shore",
          "Raindrops falling from the sky"
        ],
        answerIndex: 0
      },
      {
        prompt: "Making a Caesar salad is an example of a...",
        choices: ["Physical change", "Chemical change", "Chemical reaction", "Branch of science"],
        answerIndex: 0
      },
      {
        prompt: "What does a diamond and a gold bar have in common?",
        choices: ["They are both minerals", "They are both easy to mine", "They both bend easily", "They both break easily"],
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
          "They're far too small to see",
          "Water is made of cells, not molecules",
          "No microscope is powerful enough to magnify them",
          "Scientists have never proven they exist"
        ],
        answerIndex: 0
      },
      {
        prompt: "A student decides to burn wood for scientific purposes. What fact is true regarding the wood?",
        choices: [
          "An entirely new substance forms with different properties.",
          "The change can be undone.",
          "Only a physical reaction took place.",
          "The wood heats up, but its properties stay the same."
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
          "The student with the faster wagon is applying more force.",
          "The slower wagon weighs less.",
          "Both students are applying the same amount of force.",
          "The heavier wagon is the one moving faster."
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
          "It pulls the rock down.",
          "It pushes the rock out toward the ocean.",
          "It wears the rock down gradually over time.",
          "It changes the rock's shape."
        ],
        answerIndex: 0
      },
      {
        prompt: "How does increasing the steepness of a ramp affect the speed of a rolling object?",
        choices: [
          "It makes the object roll faster.",
          "It slows the object's roll.",
          "It doesn't change the speed at all.",
          "It brings the object to a stop."
        ],
        answerIndex: 0
      },
      {
        prompt: "A baseball rests on a baseball field. What force is keeping the baseball from moving?",
        choices: [
          "Gravity pulling it toward the center of the Earth",
          "Energy from the Sun",
          "The Earth's magnetic pull",
          "Movement in the atmosphere"
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
          "The waves' energy has increased.",
          "The waves' energy has decreased.",
          "The waves have lost their momentum.",
          "The Moon's gravity no longer affects the water."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "A scientist tests the speed of sound through different materials. He finds that sound travels the slowest in air, faster in water, and the fastest in steel. What does this tell us?",
        choices: [
          "Sound moves fastest through solids.",
          "Sound moves fastest through gases.",
          "Sound can't travel through solids at all.",
          "Sound travels at the same speed no matter the material."
        ],
        answerIndex: 0
      },
      {
        prompt: "Where is the force of gravity pulling towards?",
        choices: [
          "Toward the center of the Earth",
          "Toward the ground",
          "Up toward the atmosphere",
          "Up toward the world's tallest building"
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
          "Earth's gravity",
          "The Sun's magnetic field",
          "The width of Earth's axis",
          "Earth's rotation"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why does the Sun appear brighter compared to other stars in the sky?",
        choices: [
          "It's far closer to Earth than any other star.",
          "It's hotter than every other star.",
          "It's bigger than every other star.",
          "It gives off more energy than every other star."
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
          "The water found on and around Earth.",
          "The layer of gases surrounding Earth.",
          "The area where living things interact.",
          "The area where rocks are found on Earth."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of these are parts of the water cycle?",
        choices: [
          "Evaporation, condensation, and precipitation",
          "Weathering, erosion, heat, and pressure",
          "Birth, mating, and death",
          "Seed, growth, and death"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is a biosphere?",
        choices: [
          "The layer of Earth where living things are found.",
          "The layer of Earth where dissolved gases exist.",
          "The layer of Earth made up of water.",
          "The layer of Earth covered in ice and glaciers."
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
          "The crust, mantle, outer core, and inner core",
          "The crust, mantle, outer core, and middle core",
          "The biosphere, lithosphere, atmosphere, and hydrosphere",
          "The biosphere, lithosphere, atmosphere, and watersphere"
        ],
        answerIndex: 0
      },
      {
        prompt: "Where are tropical climates found?",
        choices: [
          "Near the equator",
          "Near heavily polluted cities",
          "Close to the North or South Pole",
          "Between the equator and the poles"
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
          "The tilt of Earth's axis",
          "Where the Sun is positioned",
          "Where the Moon is positioned",
          "The positions of both the Sun and the Moon"
        ],
        answerIndex: 0
      },
      {
        prompt: "What happens during a solar eclipse?",
        choices: [
          "The Moon passes in front of the Sun, blocking it",
          "The Sun blocks the Moon from view",
          "The Moon covers half of the Sun",
          "The Sun covers half of the Moon"
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
        choices: ["Light energy", "Oxygen", "Electrical energy", "Nitrogen"],
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
        choices: ["Mitochondria", "Cytoplasm", "Ribosomes", "Golgi apparatus"],
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
          "The amount of sunlight given",
          "The type of plant used",
          "The soil that's used",
          "The number of flowers planted"
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
          "An electronic scale",
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
          "Independent variable",
          "Hypothesis",
          "Control",
          "Dependent variable"
        ],
        answerIndex: 0
      }
    ]
  },
  {
    id: "constructiveDestructive",
    name: "Constructive & Destructive Forces",
    questions: [
      {
        prompt: "What are very small pieces of rock, such as sand and silt, called?",
        choices: ["Sediment", "Magma", "Bedrock", "Humus"],
        answerIndex: 0
      },
      {
        prompt:
          "What is a huge river of ice that weathers the land around it and erodes rocks and sediment called?",
        choices: ["A glacier", "A delta", "A fault", "A tributary"],
        answerIndex: 0
      },
      {
        prompt:
          "In which order do the processes of weathering, erosion, and deposition usually occur?",
        choices: [
          "Weathering, then erosion, then deposition",
          "Erosion, then weathering, then deposition",
          "Deposition, then erosion, then weathering",
          "Erosion, then deposition, then weathering"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which land feature forms where two continental plates move toward each other?",
        choices: ["Mountains", "Valleys", "Deltas", "Canyons"],
        answerIndex: 0
      },
      {
        prompt: "What three things cause both erosion and weathering?",
        choices: [
          "Wind, water, and ice",
          "Fire, wind, and sunlight",
          "Plants, animals, and bacteria",
          "Heat, pressure, and time"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "What is the name for a structure built to stop or slow the flow of water in a stream or river?",
        choices: ["A dam", "A levee", "A jetty", "A dredge"],
        answerIndex: 0
      },
      {
        prompt: "A manmade wall along the coast that sticks out into the ocean is called what?",
        choices: ["A jetty", "A levee", "A dam", "A delta"],
        answerIndex: 0
      },
      {
        prompt:
          "What is the process by which ships remove sand from the bottom of the ocean to build a sand bar?",
        choices: ["Dredging", "Deposition", "Weathering", "Erosion"],
        answerIndex: 0
      },
      {
        prompt: "What is a wall of earth or concrete that holds back rising water called?",
        choices: ["A levee", "A jetty", "A dredge", "A delta"],
        answerIndex: 0
      },
      {
        prompt: "What is the name used for someone who studies earthquakes?",
        choices: ["A seismologist", "A volcanologist", "A geologist", "A meteorologist"],
        answerIndex: 0
      },
      {
        prompt:
          "What is a crack in the Earth's crust, usually found at the edge of plates, called?",
        choices: ["A fault", "A delta", "A ridge", "A trench"],
        answerIndex: 0
      },
      {
        prompt:
          "What is a sudden release of energy in Earth's crust that causes the ground to shake called?",
        choices: ["An earthquake", "A volcano", "A landslide", "A tsunami"],
        answerIndex: 0
      },
      {
        prompt: "What is a mountain made of lava, ash, and cinders called?",
        choices: ["A volcano", "A glacier", "A fault", "A delta"],
        answerIndex: 0
      },
      {
        prompt: "What is the moving of sediment by wind, water, or ice called?",
        choices: ["Erosion", "Deposition", "Weathering", "Dredging"],
        answerIndex: 0
      },
      {
        prompt: "What is the goal of beach restoration?",
        choices: [
          "To replace lost sand, reduce storm damage, and maintain healthy coastal habitats and beaches",
          "To remove all the sand from a beach to prevent erosion",
          "To build new volcanoes along the coastline",
          "To stop all human activity near the ocean"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is melted rock that has flowed onto the Earth's surface called?",
        choices: ["Lava", "Magma", "Sediment", "Ash"],
        answerIndex: 0
      },
      {
        prompt: "What is the depositing (dropping off) of sediment called?",
        choices: ["Deposition", "Erosion", "Weathering", "Dredging"],
        answerIndex: 0
      },
      {
        prompt: "When a river deposits sediment at its end, what land feature forms?",
        choices: ["A delta", "A levee", "A jetty", "A glacier"],
        answerIndex: 0
      },
      {
        prompt: "How does a glacier help create new soil?",
        choices: [
          "By scraping small particles off large rocks, creating new sediment and soil",
          "By melting and washing all the soil out to sea",
          "By freezing existing soil so it can no longer erode",
          "By depositing lava on top of the ground"
        ],
        answerIndex: 0
      },
      {
        prompt: "How does a volcano build up new land?",
        choices: [
          "It adds lava to the Earth's surface",
          "It removes sediment from the coastline",
          "It creates deep cracks that swallow land",
          "It freezes magma into new mountains"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the process of wearing away sediment from a landform called?",
        choices: ["Weathering", "Deposition", "Dredging", "Erosion"],
        answerIndex: 0
      },
      {
        prompt:
          "What is the surface of the Earth directly above the most powerful point of an earthquake called?",
        choices: ["Epicenter", "Fault line", "Fissure", "Crater"],
        answerIndex: 0
      },
      {
        prompt: "What is melted rock beneath the Earth's surface called?",
        choices: ["Magma", "Lava", "Sediment", "Basalt"],
        answerIndex: 0
      },
      {
        prompt: "What can be done to help prevent erosion?",
        choices: [
          "Build fences, rock walls, and plant trees",
          "Remove all plants and trees from the area",
          "Speed up the flow of nearby rivers",
          "Dredge the riverbank deeper"
        ],
        answerIndex: 0
      },
      {
        prompt: "The scale used to measure the strength of earthquakes is called the ___ scale.",
        choices: ["Richter", "Fahrenheit", "Beaufort", "Saffir-Simpson"],
        answerIndex: 0
      }
    ]
  }
];
