// tiles
const wpmTile = document.querySelector(".tile_wpm");
const accuracyTile = document.querySelector(".tile_accuracy");
const timeRemainingTile = document.querySelector(".tile_time-remaining");

// text area
const textAreaInput = document.querySelector(".text-area__input");
const textAreaText = document.querySelector(".text-area__text");
const textAreaOverlay = document.querySelector(".text-area__overlay");

// keyboard
const keys = document.querySelectorAll(".key");

// const word template
const word = document.querySelector("#word-template").content;

// valid keys
const validInputKeys =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[];',./ ";

const paragraphs = [
  `Poetry, a tapestry of emotion and imagery, captures the essence of human experience in fleeting moments. With each verse and stanza, it paints vivid portraits of love, loss, and longing, inviting readers to explore the depths of the human soul.`,
  `Dogs, our loyal companions, radiate boundless affection and joy. With wagging tails and soulful eyes, they teach us about unconditional love and the simple pleasures of life. In their presence, we find comfort, companionship, and endless happiness. `,
  `Bitcoin, a decentralized digital currency, revolutionized finance with its blockchain technology. Created in 2009 by an anonymous person or group using the pseudonym Satoshi Nakamoto, Bitcoin offers peer-to-peer transactions without intermediaries. Its finite supply of 21 million coins drives its value, attracting both investors and skeptics amidst volatile market fluctuations.`,
  `The NBA, National Basketball Association, stands as a global beacon of basketball excellence. Founded in 1946, it showcases top-tier athleticism, teamwork, and entertainment across its 30 teams. From legendary rivalries to awe-inspiring performances, the NBA captivates audiences worldwide through its regular season, playoffs, and iconic events like the NBA Finals and All-Star Weekend, shaping basketball culture for generations.`,
  `The title of the rainiest place on Earth belongs to Mawsynram, a village in the northeastern state of Meghalaya, India. Nestled amidst the lush hills of the Khasi Hills, Mawsynram receives an astonishing annual rainfall averaging around 467 inches (11,871 millimeters). Monsoon clouds envelop the region for much of the year, sustaining its verdant landscapes and fostering a unique ecosystem adapted to the constant deluge. The relentless rains shape the lives and culture of the local Khasi people, who have developed ingenious methods to cope with the abundant precipitation, making Mawsynram a captivating testament to nature's extremes.`,
  `The most popular tourist site in the world is often considered to be the Eiffel Tower in Paris, France. This iconic landmark, built in 1889 as the entrance arch for the 1889 World's Fair, attracts millions of visitors each year. Its distinctive silhouette and breathtaking views of Paris make it a must-visit destination for travelers from around the globe, symbolizing romance, culture, and architectural ingenuity.`,
  `The deepest ocean in the world is the Pacific Ocean. It contains the Mariana Trench, the deepest known point on Earth's seabed. The Challenger Deep, located within the Mariana Trench, reaches a depth of approximately 36,070 feet (10,994 meters) below sea level. This immense depth exemplifies the vast and largely unexplored nature of the oceanic depths.`,
  `The construction process involved using a variety of materials such as rammed earth, bricks, stones, and wood. Initially, walls were built independently by different states and dynasties, but Qin Shi Huang, the first emperor of China, connected and standardized these walls in the 3rd century BC. Laborers, including soldiers, convicts, and peasants, were conscripted to work on the wall.`,
  `Focus is the anchor amidst swirling distractions, essential for achieving goals with precision and dedication. It sharpens our concentration, empowering us to navigate challenges and pursue excellence with unwavering determination and clarity of purpose.`,
];

const getRandomParagraph = () =>
  paragraphs[Math.floor(Math.random() * paragraphs.length)];

export {
  wpmTile,
  accuracyTile,
  timeRemainingTile,
  textAreaInput,
  textAreaText,
  textAreaOverlay,
  keys,
  getRandomParagraph,
  validInputKeys,
};
