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
