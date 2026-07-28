// Social studies question sets for the Iowa Assessments practice app,
// transcribed from an Iowa Assessments practice test booklet.
// Each set has an id, a display name (used as the on-screen topic label),
// and a list of questions.
// Each question has:
//   prompt      - the question text
//   choices     - four answer options (choices[0] is always correct;
//                 app.js shuffles choice order at render time)
//   answerIndex - always 0 here, matching the words.js/math.js convention

window.SOCIAL_STUDIES_SETS = [
  {
    id: "civics",
    name: "Civics",
    questions: [
      {
        prompt:
          "What system in the U.S. government is supposed to ensure that one branch does not become too powerful?",
        choices: [
          "Separation of powers",
          "Direct democracy",
          "Electoral college",
          "Popular vote"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which branch of the U.S. government is responsible for making laws?",
        choices: ["Legislative", "Executive", "Judicial", "Bureaucratic"],
        answerIndex: 0
      },
      {
        prompt: "The Senate and House of Representatives are part of which branch of government?",
        choices: [
          "Legislative Branch",
          "Executive Branch",
          "Judicial Branch",
          "Constitutional Branch"
        ],
        answerIndex: 0
      },
      {
        prompt: "In states, who is the head of the state's executive branch?",
        choices: ["The governor", "A senator", "The mayor", "A representative"],
        answerIndex: 0
      },
      {
        prompt: "Which power is shared by both state and national governments?",
        choices: [
          "Collecting taxes",
          "Declaring war",
          "Printing money",
          "Negotiating foreign treaties"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "A group of citizens is gathered outside City Hall, peacefully protesting a new law. What First Amendment right protects their ability to do this?",
        choices: [
          "Freedom of assembly",
          "Freedom of religion",
          "Freedom of the press",
          "Freedom from search and seizure"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "A journalist publishes an article criticizing a government policy. Which First Amendment right protects this action?",
        choices: [
          "Freedom of the press",
          "Freedom of speech",
          "Right to petition",
          "Right to a fair trial"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which constitutional amendment granted African American men the right to vote?",
        choices: [
          "15th Amendment",
          "1st Amendment",
          "The Declaration of Independence",
          "30th Amendment"
        ],
        answerIndex: 0
      }
    ]
  },
  {
    id: "history",
    name: "U.S. History",
    questions: [
      {
        prompt: "What was Christopher Columbus originally trying to find when he sailed from Europe?",
        choices: [
          "A faster route to Asia",
          "A new continent",
          "An island with buried treasure",
          "A new place to start a colony"
        ],
        answerIndex: 0
      },
      {
        prompt: "What was the Columbian Exchange?",
        choices: [
          "The exchange of plants, animals, and diseases between the Old World and New World",
          "The movement of Native Americans to Europe",
          "A trade route established by the Dutch",
          "A system of government used in colonial territories"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why did the Pilgrims come to North America in 1620?",
        choices: [
          "To escape religious persecution",
          "To trade furs with Native Americans",
          "To search for gold and riches",
          "To find a shorter route to Asia"
        ],
        answerIndex: 0
      },
      {
        prompt: "What was the main reason the American colonies declared independence from Britain?",
        choices: [
          "They were unhappy with British taxes and lack of representation.",
          "They wanted to form a new government with France.",
          "They wanted to trade more with Native American groups.",
          "They wanted to expand westward before Britain did."
        ],
        answerIndex: 0
      },
      {
        prompt: "What document was signed in 1787 that created the framework for the U.S. government?",
        choices: [
          "The U.S. Constitution",
          "The Declaration of Independence",
          "The Bill of Rights",
          "The Articles of Confederation"
        ],
        answerIndex: 0
      },
      {
        prompt: "What did the Louisiana Purchase of 1803 do?",
        choices: [
          "Doubled the size of the United States",
          "Created a new tax on imported goods",
          "Ended the Revolutionary War",
          "Allowed slavery in new states"
        ],
        answerIndex: 0
      },
      {
        prompt: "What was the purpose of the Underground Railroad?",
        choices: [
          "To help enslaved people escape to freedom",
          "To transport goods secretly across the country",
          "To build railroads in the South",
          "To move soldiers during the Civil War"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why did the Southern states secede from the Union in 1860-1861?",
        choices: [
          "They wanted to continue the practice of slavery.",
          "They wanted to form a new country based on democracy.",
          "They disagreed with Northern policies about trade.",
          "They were against westward expansion."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Why did the U.S. government create reservations for Native American tribes in the late 1800s?",
        choices: [
          "To force them off their ancestral lands",
          "To give them land for farming",
          "To protect their traditional way of life",
          "To train them to become U.S. citizens"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following was an effect of the Industrial Revolution?",
        choices: [
          "More people moved to cities to work in factories.",
          "Farming became the main job for most Americans.",
          "Fewer inventions were created.",
          "Railroads became less important."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Why did millions of immigrants come through Ellis Island in the late 1800s and early 1900s?",
        choices: [
          "To escape war and poverty in their home countries",
          "To spread their religious beliefs",
          "To visit family in New York for a short time",
          "To vacation in the U.S."
        ],
        answerIndex: 0
      },
      {
        prompt: "What was the Great Depression?",
        choices: [
          "A time in the U.S. when many people were out of work and had very little money",
          "A time when the number of jobs in the U.S. rapidly went up",
          "A war between the U.S. and Europe",
          "A war between the U.S. and Mexico"
        ],
        answerIndex: 0
      },
      {
        prompt: "What event led to the U.S. entering World War II?",
        choices: [
          "Japan's attack on Pearl Harbor, Hawaii",
          "Germany's invasion of France",
          "Germany's invasion of Poland",
          "The construction of the Berlin Wall"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following was a key event of the Civil Rights Movement?",
        choices: [
          "The March on Washington",
          "The Boston Tea Party",
          "The Louisiana Purchase",
          "The Reconstruction Acts"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "During the Cold War (1947 to 1991), the United States and the Soviet Union were in competition, but they never fought each other directly. Instead, they tried to prove which country was stronger in different ways. What is one way they competed?",
        choices: [
          "By competing in space exploration and military strength",
          "By fighting in a war against each other",
          "By setting up colonies together",
          "By working together to create one big government"
        ],
        answerIndex: 0
      }
    ]
  },
  {
    id: "economics",
    name: "Economics",
    questions: [
      {
        prompt:
          "Look at the following chart of average salaries of people from different states in 2015: Texas: $38,500 · Florida: $36,200 · Ohio: $37,800 · Arizona: $35,900. Which state had the highest average salary?",
        choices: ["Texas", "Florida", "Ohio", "Arizona"],
        answerIndex: 0
      },
      {
        prompt:
          'During what\'s called a "recession," businesses make less money, and people lose their jobs. As a result, people often spend less. Which of the following is least likely to happen during this time?',
        choices: [
          "More people buy expensive cars.",
          "The number of people without a job goes up.",
          "The amount of money people save goes down.",
          "Fewer people go out to eat at restaurants."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which is an example of a service?",
        choices: [
          "A hairstylist giving a haircut",
          "A carpenter selling handmade furniture",
          "A customer purchasing a new laptop",
          "A farmer growing wheat"
        ],
        answerIndex: 0
      },
      {
        prompt: "What do consumers do in an economy?",
        choices: [
          "Buy goods and services",
          "Produce goods",
          "Enforce laws",
          "Set prices of goods and services"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "When people borrow money from a bank, they have to pay back more than they borrowed. For example, if someone takes out a loan for $100 and has to pay back $110, the extra $10 is the bank's fee for lending the money. What is this fee called?",
        choices: ["Interest", "An account", "Checks", "Savings"],
        answerIndex: 0
      },
      {
        prompt:
          "John wants to buy a car, but he doesn't have enough money to pay for it all at once. The bank agrees to lend him the money, and he promises to pay the bank back a little each month for five years. What is this type of borrowing called?",
        choices: ["Credit", "Bartering", "Savings", "Checking"],
        answerIndex: 0
      },
      {
        prompt: "Which of the following is not an example of using local natural resources?",
        choices: [
          "A bakery buying flour from another country",
          "A farmer growing crops using soil on his/her farm",
          "A lumber mill cutting down nearby trees",
          "A fisherman catching fish in a nearby lake"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Anna needs more volunteers to help at a school fundraiser but can't find enough people. Anna not being able to find enough people is an example of what economic issue?",
        choices: ["A shortage", "Creating a budget", "Going bankrupt", "Trading"],
        answerIndex: 0
      },
      {
        prompt:
          "Lena owns a small bakery that sells cupcakes. One day, many more people start coming to her shop, and she quickly sells out of cupcakes. What should she do to meet the demand?",
        choices: [
          "Bake more cupcakes and raise the price",
          "Close the bakery",
          "Bake only cookies",
          "Only sell cupcakes to her friends"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Alex owns a toy store that ordered too many teddy bears. Also, there are fewer customers who want to buy them. What should Alex do to sell more teddy bears?",
        choices: [
          "Lower the price to encourage more people to buy them",
          "Raise the price of the teddy bears",
          "Order more teddy bears",
          "Close the toy store"
        ],
        answerIndex: 0
      }
    ]
  }
];
