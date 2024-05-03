// tiles
const wpmTile = document.querySelector(".tile_wpm");
const accuracyTile = document.querySelector(".tile_accuracy");
const timeTile = document.querySelector(".tile_time-remaining");

// text area
const textAreaInput = document.querySelector(".text-area__input");
const textAreaText = document.querySelector(".text-area__text");

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

const paragraphs = [
  `Polar bears are big, white bears that live in the cold parts of the world, like the North Pole.`,
  `Internal peace is the feeling of being calm and content inside yourself, even when things around you are chaotic. It's like having a quiet place within your mind where you can go to find tranquility and solace.`,
  `Limitlessness is the idea of having no boundaries or restrictions. It's like having endless possibilities and opportunities ahead of you. When you feel limitless, you're free to dream big and chase after your goals without fear of hitting a wall.`,
  `Synchronicity is when things happen in a way that seems connected but maybe aren't supposed to be. It's like when you're thinking about someone, and then they call you out of the blue.`,
  `When you are in the flow state, everything feels just right. It's like being in a groove where everything clicks smoothly. Your mind is clear, and you're focused completely on what you're doing.`,
  `The top eateries aren't just places where you eat food. They're special spots that make you feel good and remember the food for a long time.`,
  `The big water that covers most of our world is called the ocean. It is very big and very deep, with many different kinds of animals and plants living inside it.`,
  `ChatGPT is a clever computer program that talks with people like me. It knows a lot of things and can help with questions or just have a chat.`,
  `Dogs are furry friends that many people love. They come in different shapes and sizes, from tiny ones that fit in your hand to big ones that can pull sleds.`,
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
  getRandomParagraph,
  validInputKeys,
  resetButton,
  paragraphs,
  ingoredkeys,
  keys,
  punctuationOrSpace,
};
