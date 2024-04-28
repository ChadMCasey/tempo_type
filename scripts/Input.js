import {
  textAreaInput,
  textAreaText,
  getRandomParagraph,
  validInputKeys,
  keys,
} from "./constants.js";
import Word from "./Word.js";
import Letter from "./Letter.js";

export default class Input {
  constructor(keyboard) {
    this.textAreaInput = textAreaInput;
    this.textAreaText = textAreaText;

    this.wordObjs = [];
    this.letterObjs = [];

    this.currentLetter = null;
    this.currentLetterIndex = 0;

    this.time = 0;

    this.Keyboard = keyboard;

    this.setEventListeners(); // set listeners
    this.populateText(); // set default paragraph
  }

  setEventListeners() {
    this.textAreaText.addEventListener("click", () => this.focusInput());
    this.textAreaInput.addEventListener("keydown", (e) => this.checkInput(e));
  }

  focusInput() {
    this.textAreaInput.focus();
  }

  populateText() {
    let paragraph = getRandomParagraph().split(" ");
    paragraph = paragraph.map((word) => word + " ");

    paragraph.forEach((word) => {
      const wordObj = new Word(word);
      const letters = [...word];

      letters.forEach((letter) => {
        const letterObj = new Letter(letter);
        wordObj.insertLetter(letterObj);
        this.letterObjs.push(letterObj);
      });

      this.wordObjs.push(wordObj);
      setTimeout(() => {
        this.textAreaText.append(wordObj.wordElement);
      }, this.time);
      this.time += 30;
    });

    this.currentLetterObj = this.letterObjs[0];
    this.currentLetterObj.addCursor();
    this.time = 0;
  }

  checkInput(e) {
    let key = e.key;
    if (e.key === " ") {
      key = " ";
    }

    if (validInputKeys.includes(key)) {
      if (key === this.currentLetterObj.letter) {
        this.currentLetterObj.setCorrect();
        this.Keyboard.triggerKey(true, key.toLowerCase());
      } else {
        this.currentLetterObj.setIncorrect();
        this.Keyboard.triggerKey(false, key.toLowerCase());
      }
      this.setNextKey();
    }
  }

  setNextKey() {
    this.currentLetterObj.removeCursor();
    this.currentLetterIndex += 1;
    this.currentLetterObj = this.letterObjs[this.currentLetterIndex]; // update letter
    this.currentLetterObj.addCursor();
  }
}
