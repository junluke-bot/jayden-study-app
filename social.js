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
      },
      {
        prompt: "Who can be involved in a President's Cabinet?",
        choices: ["Secretary of Defense", "House of Representatives", "Senators", "Chief Justice"],
        answerIndex: 0
      },
      {
        prompt: "Which option shows a reason why we have government?",
        choices: [
          "To provide safety from outside threats",
          "To make citizens unhappy",
          "To not set rules for citizens",
          "To not help others"
        ],
        answerIndex: 0
      },
      {
        prompt: "Of the options provided, which one is most likely to be an official community worker?",
        choices: ["Nurse", "Hiker", "High school basketball player", "Musician"],
        answerIndex: 0
      },
      {
        prompt: "What is true about the United States of America?",
        choices: [
          "We have three official branches of government",
          "We have two official branches of government",
          "Our capital is New York City",
          "Only the Supreme Court judges are allowed to make new laws for our country"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is something that you should always try to do as an American citizen?",
        choices: [
          "Be kind to everyone",
          "To never participate in your community",
          "To never listen to the law",
          "Argue with others"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Some people are unhappy since they are taking down a park in order to build new homes. To address their concerns, they might take it to the ___.",
        choices: ["City hall", "Park", "Library", "Bank"],
        answerIndex: 0
      },
      {
        prompt: "Which is NOT an example of protecting the environment?",
        choices: [
          "Letting the faucet run all day",
          "Choosing to walk to get somewhere over using a car",
          "Turning off the lights when you are not in the room",
          "Always recycling"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the minimum age to be president?",
        choices: ["35", "25", "30", "40"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "constitution",
    name: "Constitution & Amendments",
    questions: [
      {
        prompt: "Which of the following is a responsibility of a U.S. citizen?",
        choices: [
          "Serving on a jury when called",
          "Voting in another country's elections",
          "Refusing to pay taxes",
          "Ignoring local laws"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Marcus is 18 and just registered to vote for the first time. Which citizen responsibility is he fulfilling?",
        choices: [
          "Participating in the democratic process",
          "Serving in a government office",
          "Paying property taxes",
          "Running for president"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is \"due process of law\"?",
        choices: [
          "The government must follow fair procedures before taking away a person's life, liberty, or property",
          "A law that only applies to government officials",
          "The process of writing a new law",
          "A citizen's right to skip a court hearing"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Police officers arrest a man for a crime. Before he can be sent to prison, he is given a fair trial where he can defend himself. What constitutional protection does this show?",
        choices: [
          "Due process of law",
          "Freedom of speech",
          "The amendment process",
          "The right to bear arms"
        ],
        answerIndex: 0
      },
      {
        prompt: "How can an amendment be proposed to the U.S. Constitution?",
        choices: [
          "By a two-thirds vote in both houses of Congress",
          "By a majority vote of U.S. governors only",
          "By a unanimous vote of the Supreme Court",
          "By a public poll of all U.S. citizens"
        ],
        answerIndex: 0
      },
      {
        prompt: "After an amendment is proposed, what must happen for it to become part of the Constitution?",
        choices: [
          "Three-fourths of the states must ratify (approve) it",
          "The President must personally rewrite it",
          "It must be approved by a foreign government",
          "It automatically becomes law after one year"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the main purpose of the amendment process?",
        choices: [
          "To allow the Constitution to be changed as the country's needs change over time",
          "To make the Constitution impossible to change",
          "To let the President change laws without Congress",
          "To remove rights from citizens when needed"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why did the writers of the Constitution make the amendment process difficult, requiring broad agreement?",
        choices: [
          "So that changes reflect wide, lasting support rather than a temporary majority",
          "So that only the President could change the Constitution",
          "So that no amendment could ever be passed",
          "So that states would never have to agree with each other"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which amendment gave African American men the right to vote?",
        choices: ["15th Amendment", "19th Amendment", "23rd Amendment", "26th Amendment"],
        answerIndex: 0
      },
      {
        prompt: "Which amendment gave women the right to vote?",
        choices: ["19th Amendment", "15th Amendment", "24th Amendment", "26th Amendment"],
        answerIndex: 0
      },
      {
        prompt: "Which amendment gave residents of Washington, D.C. the right to vote in presidential elections?",
        choices: ["23rd Amendment", "15th Amendment", "19th Amendment", "26th Amendment"],
        answerIndex: 0
      },
      {
        prompt: "Which amendment made poll taxes illegal, so people couldn't be charged money to vote?",
        choices: ["24th Amendment", "15th Amendment", "19th Amendment", "26th Amendment"],
        answerIndex: 0
      },
      {
        prompt: "Which amendment lowered the voting age to 18?",
        choices: ["26th Amendment", "15th Amendment", "19th Amendment", "23rd Amendment"],
        answerIndex: 0
      },
      {
        prompt:
          "Before the 19th Amendment was passed, women in most states were not allowed to vote. What did the 19th Amendment change?",
        choices: [
          "It gave women the right to vote in all U.S. elections",
          "It gave women the right to run for governor only",
          "It gave women the right to serve on juries",
          "It gave women the right to own property"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "A group of amendments (the 15th, 19th, 23rd, 24th, and 26th) all deal with the same basic idea. What do they have in common?",
        choices: [
          "They each expanded who is allowed to vote",
          "They each created a new branch of government",
          "They each raised taxes",
          "They each changed the amendment process itself"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the definition of freedom of speech?",
        choices: [
          "The right to express your opinion without getting punished",
          "The right to keep a weapon to protect themselves",
          "The right to publish information",
          "The right to join together"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which federal document shows that Americans are allowed to make their own decisions?",
        choices: ["Constitution", "Declaration of Independence", "Articles of Confederation", "The Official US Code"],
        answerIndex: 0
      },
      {
        prompt:
          "The Eighth Amendment states that \"excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.\" Why would the colonists like this amendment added to the United States Constitution?",
        choices: [
          "They want equal and fair punishments for everyone",
          "They like having unfair punishments for everyone",
          "They want more money for themselves",
          "They want no jails to exist"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why do we have a Bill of Rights in our Constitution?",
        choices: [
          "It establishes our basic rights as American citizens",
          "It states all of our amendments",
          "It states how our government works entirely",
          "It is the introduction to the Constitution"
        ],
        answerIndex: 0
      },
      {
        prompt: "What would be an example of the \"right of assembly\"?",
        choices: ["Hosting a dinner with your friends", "Watching a movie by yourself", "Being home alone", "Sleeping"],
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
      },
      {
        prompt: "What resources did Native Americans use from their environment?",
        choices: ["Animal skins", "Bricks", "Toilet paper", "Swords"],
        answerIndex: 0
      },
      {
        prompt: "In the 1700s, who settled in the New England colonies?",
        choices: ["English", "French", "Spanish", "Portuguese"],
        answerIndex: 0
      },
      {
        prompt: "Who sponsored Christopher Columbus on his exploration trip?",
        choices: ["Ferdinand and Isabella", "Alexander the Great", "King George III", "Genghis Khan"],
        answerIndex: 0
      },
      {
        prompt: "What was the Industrial Revolution responsible for?",
        choices: [
          "Massive growth in the population",
          "Labor costs to be the same",
          "A national outbreak",
          "Massive emigration out of the country"
        ],
        answerIndex: 0
      },
      {
        prompt: "What was the name of the boat the Pilgrims sailed to America on?",
        choices: ["Mayflower", "Titanic", "Santa Maria", "USS Constitution"],
        answerIndex: 0
      },
      {
        prompt: "Which state is part of the Southern colonies?",
        choices: ["Georgia", "Connecticut", "Pennsylvania", "New Jersey"],
        answerIndex: 0
      },
      {
        prompt:
          "Who were the militiamen who were trained in weaponry and were known for being ready at a minute's notice during the Revolutionary War?",
        choices: ["Minutemen", "Native Americans", "British", "Hourmen"],
        answerIndex: 0
      },
      {
        prompt: "Who were the two sides in the American Revolution?",
        choices: [
          "England and the United States",
          "United States and Germany",
          "France and England",
          "France and the United States"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which state is NOT a part of the 13 original colonies?",
        choices: ["Tennessee", "Virginia", "North Carolina", "New Hampshire"],
        answerIndex: 0
      },
      {
        prompt: "Who wrote the Declaration of Independence?",
        choices: ["Thomas Jefferson", "Samuel Adams", "James Madison", "John Hancock"],
        answerIndex: 0
      },
      {
        prompt: "Who is most likely to be a Loyalist?",
        choices: [
          "A farmer who supported the British crown",
          "An American soldier",
          "A blacksmith who supported the idea of America",
          "George Washington"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is something that a Patriot would participate in?",
        choices: [
          "War, fighting on the American side",
          "Making goods for the British",
          "War, fighting on the British side",
          "Farming"
        ],
        answerIndex: 0
      },
      {
        prompt: "Who was the US president during the Civil War?",
        choices: ["Abraham Lincoln", "Andrew Johnson", "James Buchanan", "Ulysses S. Grant"],
        answerIndex: 0
      },
      {
        prompt: "Out of the answer choices provided, which was invented first?",
        choices: ["Wheel", "Telephone", "Paper", "Electricity"],
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
      },
      {
        prompt: "What is an import?",
        choices: [
          "A good brought into a country",
          "A good brought out of a country",
          "Goods traded between countries",
          "Goods being given away for free"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which is an example of an export in regards to where we live?",
        choices: ["American car", "South African wool", "Palestinian iron", "Greek olives"],
        answerIndex: 0
      },
      {
        prompt: "How do coupons help consumers?",
        choices: [
          "They help reduce the price",
          "Coupons only help producers",
          "They help raise the price",
          "They get rid of tax"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which option shows an example of a cash crop?",
        choices: [
          "Someone growing sugarcane in Hawaii so that it could be sold in Rhode Island",
          "Buying rice from an overseas country",
          "Raising your own chickens so you don't have to pay for eggs at the store",
          "A farmer growing his own corn for his family"
        ],
        answerIndex: 0
      },
      {
        prompt: "What does it mean to barter something?",
        choices: ["To trade without using money", "To steal", "To trade using money", "To get it for free"],
        answerIndex: 0
      },
      {
        prompt: "What does income mean?",
        choices: [
          "An amount of money earned over a period of time",
          "A loss in money that comes from providing labor",
          "The system of how banks handle their money",
          "The system of how you pay your taxes"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "When a new video game is just released, the price is ___, the supply is ___, and the demand ___.",
        choices: ["High, high, high", "High, low, high", "Low, low, low", "Low, high, low"],
        answerIndex: 0
      },
      {
        prompt: "When a product is in scarcity, that means that it is in ___.",
        choices: ["Shortage", "Convenience for the consumer", "Excess", "Efficiency for the producer"],
        answerIndex: 0
      },
      {
        prompt: "In Wisconsin, the price of cheese increases. This causes ___ amount of cheese to be purchased.",
        choices: ["Less", "A stagnant", "The same", "More"],
        answerIndex: 0
      },
      {
        prompt: "Where are you most likely to find an ATM?",
        choices: ["Bank", "Post office", "Library", "Movie theater"],
        answerIndex: 0
      },
      {
        prompt: "What could you NOT have a surplus of?",
        choices: ["Debt", "Money", "Crops", "Animals"],
        answerIndex: 0
      },
      {
        prompt: "How do you receive income?",
        choices: ["Salary", "By shaking hands with others", "Coupons", "High fives"],
        answerIndex: 0
      },
      {
        prompt: "What is someone that would earn profit?",
        choices: [
          "Getting money from selling vases",
          "Losing money because you didn't have any customers",
          "Losing money because you charged your products too high",
          "Getting money by not selling anything"
        ],
        answerIndex: 0
      }
    ]
  },
  {
    id: "geography",
    name: "Geography",
    questions: [
      {
        prompt: "If it is 4 p.m. in South Carolina, what time is it in Washington State?",
        choices: ["1 PM", "7 PM", "1 AM", "7 AM"],
        answerIndex: 0
      },
      {
        prompt: "What is the capital of Minnesota?",
        choices: ["Saint Paul", "Juneau", "Dover", "Hartford"],
        answerIndex: 0
      },
      {
        prompt: "What does a topographic map show?",
        choices: ["Elevation of an area", "Temperature of an area", "Rainfall of an area", "Details of an area"],
        answerIndex: 0
      },
      {
        prompt: "What is Lake Huron a part of?",
        choices: ["Great Lakes", "Lake District", "Arrow Lakes", "America Great Lakes"],
        answerIndex: 0
      },
      {
        prompt: "On a map of the Iberian Peninsula, which country is Spain next to?",
        choices: ["France", "Germany", "Italy", "England"],
        answerIndex: 0
      },
      {
        prompt: "Which is an example of a rural area?",
        choices: ["Farmland", "Downtown", "House in a community", "Mansion"],
        answerIndex: 0
      },
      {
        prompt: "Which state is a part of the Midwest region?",
        choices: ["Nebraska", "Nevada", "Montana", "Mississippi"],
        answerIndex: 0
      },
      {
        prompt: "Which is the southernmost state in the United States of America?",
        choices: ["Florida", "South Carolina", "Colorado", "Maine"],
        answerIndex: 0
      },
      {
        prompt: "On which continent can you find the Rocky Mountains?",
        choices: ["North America", "Asia", "Europe", "South America"],
        answerIndex: 0
      },
      {
        prompt: "What is the capital of Iowa?",
        choices: ["Des Moines", "Dover", "Denver", "Bismarck"],
        answerIndex: 0
      }
    ]
  }
];
