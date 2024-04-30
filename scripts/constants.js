// tiles
const wpmTile = document.querySelector(".tile_wpm");
const accuracyTile = document.querySelector(".tile_accuracy");
const timeTile = document.querySelector(".tile_time-remaining");

// text area
const textAreaInput = document.querySelector(".text-area__input");
const textAreaText = document.querySelector(".text-area__text");
const textAreaOverlay = document.querySelector(".text-area__overlay");

// restart
const resetButton = document.querySelector(".reset");

// keyboard
const keys = document.querySelectorAll(".key");

// const word template
const word = document.querySelector("#word-template").content;

// valid keys

const validInputKeys =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[];',./";

const ingoredkeys = ["Shift", "CapsLock"];

const punctuationOrSpace = ",.; ";

// They have thick fur and a layer of fat to keep them warm in freezing temperatures. Polar bears are great swimmers and can travel long distances in search of food, like seals. They have strong claws and sharp teeth to catch their prey. Sadly, polar bears are facing challenges because of climate change, which is melting the ice they need to hunt and live on.
const paragraphs = [
  `Polar bears are big, white bears that live in the cold parts of the world, like the North Pole.`,
  // `The big water that covers most of our world is called the ocean. It is very big and very deep, with many different kinds of animals and plants living inside it. Some of these animals are very big, like the big fish with sharp teeth, while others are very small, like tiny bugs that can glow in the dark. People like to visit the ocean to swim, play, and relax on the sandy parts called beaches.`,
  // `ChatGPT is a clever computer program that talks with people like me. It knows a lot of things and can help with questions or just have a chat. It's made to understand and respond to what people say, trying its best to be helpful and friendly. ChatGPT uses fancy math to learn from lots of words people write and talk about, so it can say things that make sense.`,
  // `Dogs are furry friends that many people love. They come in different shapes and sizes, from tiny ones that fit in your hand to big ones that can pull sleds. Dogs are known for their loyalty and their ability to understand humans. They like to play fetch and go for walks. Some dogs help people by guiding them or finding things that they can't see. They also have a good sense of smell, which helps them find food and track down things.`,
];

const getRandomParagraph = () => {
  return paragraphs[Math.floor(Math.random() * paragraphs.length)].split(" ");
};

export {
  wpmTile,
  accuracyTile,
  timeTile,
  textAreaInput,
  textAreaText,
  textAreaOverlay,
  getRandomParagraph,
  validInputKeys,
  resetButton,
  paragraphs,
  ingoredkeys,
  keys,
  punctuationOrSpace,
};
