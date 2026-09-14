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
          "To keep citizens safe from outside threats",
          "To make citizens miserable",
          "To avoid setting any rules for citizens",
          "To refuse to help others"
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
          "The government has three official branches",
          "The government has two official branches",
          "New York City is our nation's capital",
          "Only Supreme Court judges can create new laws for the country"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is something that you should always try to do as an American citizen?",
        choices: [
          "Treat everyone with kindness",
          "Avoid participating in your community",
          "Ignore the law",
          "Pick arguments with others"
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
          "Leaving the faucet running all day",
          "Walking somewhere instead of driving",
          "Switching off lights when you leave a room",
          "Recycling consistently"
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
          "Reporting for jury duty when summoned",
          "Voting in a foreign country's elections",
          "Refusing to pay your taxes",
          "Disregarding local laws"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Marcus is 18 and just registered to vote for the first time. Which citizen responsibility is he fulfilling?",
        choices: [
          "Taking part in the democratic process",
          "Holding a government office",
          "Paying property tax",
          "Running for the presidency"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is \"due process of law\"?",
        choices: [
          "The government must use fair procedures before taking a person's life, liberty, or property",
          "A law that applies only to government officials",
          "The steps involved in writing a new law",
          "A citizen's right to miss a scheduled court hearing"
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
          "With a two-thirds vote from both houses of Congress",
          "With a majority vote from the nation's governors alone",
          "With a unanimous Supreme Court vote",
          "With a nationwide public poll of citizens"
        ],
        answerIndex: 0
      },
      {
        prompt: "After an amendment is proposed, what must happen for it to become part of the Constitution?",
        choices: [
          "Three-fourths of the states must approve (ratify) it",
          "The President has to personally rewrite it",
          "A foreign government must approve it",
          "It becomes law automatically after a year"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the main purpose of the amendment process?",
        choices: [
          "To let the Constitution evolve as the country's needs change",
          "To keep the Constitution from ever being changed",
          "To allow the President to change laws without Congress",
          "To strip citizens of rights whenever necessary"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why did the writers of the Constitution make the amendment process difficult, requiring broad agreement?",
        choices: [
          "So changes reflect broad, lasting agreement rather than a passing majority",
          "So only the President has the power to change the Constitution",
          "So that amendments could never actually pass",
          "So states would never need to agree with one another"
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
          "It granted women voting rights in every U.S. election",
          "It only allowed women to run for governor",
          "It allowed women to serve on juries",
          "It gave women the right to own property"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "A group of amendments (the 15th, 19th, 23rd, 24th, and 26th) all deal with the same basic idea. What do they have in common?",
        choices: [
          "Each one expanded who was allowed to vote",
          "Each one created a new branch of government",
          "Each one raised taxes",
          "Each one changed the amendment process itself"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is the definition of freedom of speech?",
        choices: [
          "The right to voice your opinion without facing punishment",
          "The right to own a weapon for self-protection",
          "The right to publish information publicly",
          "The right to gather together with others"
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
          "They wanted punishments to be equal and fair for everyone",
          "They preferred unfair punishments for everyone",
          "They wanted more money for themselves",
          "They wanted jails to be abolished entirely"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why do we have a Bill of Rights in our Constitution?",
        choices: [
          "It sets out our basic rights as American citizens",
          "It lists every one of our amendments",
          "It explains exactly how our government functions",
          "It serves as the Constitution's introduction"
        ],
        answerIndex: 0
      },
      {
        prompt: "What would be an example of the \"right of assembly\"?",
        choices: ["Getting together with friends for dinner", "Watching a movie alone", "Staying home by yourself", "Taking a nap"],
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
          "A quicker route to Asia",
          "An undiscovered continent",
          "A treasure-filled island",
          "A new site to establish a colony"
        ],
        answerIndex: 0
      },
      {
        prompt: "What was the Columbian Exchange?",
        choices: [
          "The trading of plants, animals, and diseases between the Old and New Worlds",
          "Native Americans relocating to Europe",
          "A trade route the Dutch created",
          "A style of government used in colonial territories"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why did the Pilgrims come to North America in 1620?",
        choices: [
          "To flee religious persecution",
          "To trade furs with Native Americans",
          "To hunt for gold and riches",
          "To discover a shorter route to Asia"
        ],
        answerIndex: 0
      },
      {
        prompt: "What was the main reason the American colonies declared independence from Britain?",
        choices: [
          "They resented British taxes and having no representation.",
          "They wanted to build a new government alongside France.",
          "They wanted to increase trade with Native American groups.",
          "They wanted to expand west before Britain could."
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
          "Doubled the United States' land area",
          "Placed a new tax on imported goods",
          "Brought the Revolutionary War to an end",
          "Permitted slavery in new states"
        ],
        answerIndex: 0
      },
      {
        prompt: "What was the purpose of the Underground Railroad?",
        choices: [
          "To help enslaved people reach freedom",
          "To secretly move goods across the country",
          "To construct railroads throughout the South",
          "To transport soldiers during the Civil War"
        ],
        answerIndex: 0
      },
      {
        prompt: "Why did the Southern states secede from the Union in 1860-1861?",
        choices: [
          "They wanted to keep the practice of slavery going.",
          "They wanted to found a new democratic nation.",
          "They opposed the North's trade policies.",
          "They opposed expansion into the West."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Why did the U.S. government create reservations for Native American tribes in the late 1800s?",
        choices: [
          "To push them off their ancestral lands",
          "To provide them farmland",
          "To preserve their traditional way of life",
          "To prepare them for U.S. citizenship"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following was an effect of the Industrial Revolution?",
        choices: [
          "More people relocated to cities for factory jobs.",
          "Farming became most Americans' main occupation.",
          "New inventions became less common.",
          "Railroads lost their importance."
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Why did millions of immigrants come through Ellis Island in the late 1800s and early 1900s?",
        choices: [
          "To flee war and poverty back home",
          "To spread their religious beliefs",
          "To make a brief visit to family in New York",
          "To take a vacation in the U.S."
        ],
        answerIndex: 0
      },
      {
        prompt: "What was the Great Depression?",
        choices: [
          "A period when many Americans were jobless and had very little money",
          "A period when U.S. job numbers rose rapidly",
          "A war fought between the U.S. and Europe",
          "A war fought between the U.S. and Mexico"
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
          "Through competition in space exploration and military power",
          "By going to war directly against one another",
          "By jointly establishing colonies",
          "By joining forces to form one government"
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
          "A huge jump in population",
          "Labor costs staying the same",
          "A nationwide disease outbreak",
          "Massive emigration away from the country"
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
          "A farmer loyal to the British crown",
          "An American soldier",
          "A blacksmith who believed in American independence",
          "George Washington"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is something that a Patriot would participate in?",
        choices: [
          "Fighting for the American side in the war",
          "Producing goods for the British",
          "Fighting for the British side in the war",
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
          "More people start buying expensive cars.",
          "Unemployment numbers rise.",
          "People's savings decrease.",
          "Fewer people dine out at restaurants."
        ],
        answerIndex: 0
      },
      {
        prompt: "Which is an example of a service?",
        choices: [
          "A hairstylist cutting someone's hair",
          "A carpenter selling handcrafted furniture",
          "A customer buying a new laptop",
          "A farmer growing wheat"
        ],
        answerIndex: 0
      },
      {
        prompt: "What do consumers do in an economy?",
        choices: [
          "Purchase goods and services",
          "Manufacture goods",
          "Enforce the law",
          "Decide the prices of goods and services"
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
          "A bakery importing flour from another country",
          "A farmer growing crops in their own soil",
          "A lumber mill logging nearby trees",
          "A fisherman catching fish from a nearby lake"
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
          "Make more cupcakes and increase the price",
          "Shut down the bakery",
          "Switch to baking only cookies",
          "Sell cupcakes only to her friends"
        ],
        answerIndex: 0
      },
      {
        prompt:
          "Alex owns a toy store that ordered too many teddy bears. Also, there are fewer customers who want to buy them. What should Alex do to sell more teddy bears?",
        choices: [
          "Drop the price to attract more buyers",
          "Increase the price of the teddy bears",
          "Order even more teddy bears",
          "Shut down the toy store"
        ],
        answerIndex: 0
      },
      {
        prompt: "What is an import?",
        choices: [
          "A good brought in from another country",
          "A good sent out to another country",
          "Goods exchanged between countries",
          "Goods given away at no cost"
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
          "They lower the price you pay",
          "Coupons benefit producers only",
          "They increase the price",
          "They eliminate sales tax"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which option shows an example of a cash crop?",
        choices: [
          "Growing sugarcane in Hawaii to sell in Rhode Island",
          "Importing rice from an overseas country",
          "Keeping chickens so you don't have to buy eggs at the store",
          "A farmer growing corn just for his own family"
        ],
        answerIndex: 0
      },
      {
        prompt: "What does it mean to barter something?",
        choices: ["To exchange goods without using money", "To take something without paying", "To exchange goods using money", "To receive something at no cost"],
        answerIndex: 0
      },
      {
        prompt: "What does income mean?",
        choices: [
          "Money earned over a period of time",
          "Money lost as a result of doing labor",
          "How banks manage their money",
          "How you pay your taxes"
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
        choices: ["A shortage", "A convenience for consumers", "A surplus", "An efficiency gain for producers"],
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
          "Making money by selling vases",
          "Losing money from a lack of customers",
          "Losing money by overpricing your products",
          "Somehow making money without selling anything"
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
        choices: ["The elevation of an area", "The temperature of an area", "The rainfall of an area", "The general details of an area"],
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
  },
  {
    id: "sept11",
    name: "September 11th (9/11)",
    questions: [
      {
        prompt: "Which of the following was 9/11?",
        choices: [
          "A terrorist attack on the United States",
          "An Al-Qaeda code",
          "The date of a CIA training exercise",
          "The date of an FBI training exercise"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following buildings were targeted in the attacks?",
        choices: ["All the above", "The Twin Towers", "The Pentagon", "The Capitol Building"],
        answerIndex: 0
      },
      {
        prompt: "Who is the founder of the Al-Qaeda terrorist group?",
        choices: ["Osama bin Laden", "Visas", "Pentagon", "George W. Bush"],
        answerIndex: 0
      },
      {
        prompt:
          "Which of the following was the primary weapon used by the terrorists to destroy the buildings?",
        choices: ["Commercial airplanes", "Bombs", "Firearms", "Weapons of mass destruction"],
        answerIndex: 0
      },
      {
        prompt: "Why was the Capitol Building spared from destruction?",
        choices: [
          "The passengers of the plane meant to crash into it overpowered the terrorists",
          "The terrorists failed to board the plane they meant to crash into it",
          "The bombs planted below it didn't go off",
          "The CIA and FBI prevented the plot"
        ],
        answerIndex: 0
      },
      {
        prompt: "Which of the following best defines Al-Qaeda?",
        choices: [
          "A terrorist organization based in the Middle East",
          "A country in the Middle East",
          "Osama Bin Laden's codename",
          "The codename of the CIA mission to find Osama Bin Laden"
        ],
        answerIndex: 0
      },
      {
        prompt: "Who was the president of the United States when the 9/11 attacks happened?",
        choices: ["George W. Bush", "Bill Clinton", "Barack Obama", "Donald Trump"],
        answerIndex: 0
      },
      {
        prompt: "What was built on the site of the Twin Towers to memorialize the victims of the 9/11 attacks?",
        choices: ["One World Trade Center", "A memorial statue", "The Patriot Act", "The Pentagon"],
        answerIndex: 0
      },
      {
        prompt:
          "True or False? People trying to save victims of the terrorist attack passed away as well.",
        choices: ["True", "False"],
        answerIndex: 0
      },
      {
        prompt: "Which of the following resulted from the 9/11 attacks?",
        choices: [
          "All the above",
          "2,996 dead",
          "The start of the War in Afghanistan and the War in Iraq",
          "The passing of the Patriot Act"
        ],
        answerIndex: 0
      }
    ]
  }
];
