import {
  textAreaInput,
  textAreaText,
  getRandomParagraph,
  keys,
  ingoredkeys,
} from "./constants.js";
import Word from "./Word.js";
import Letter from "./Letter.js";

export default class Input {
  constructor(keyboard) {
    this.textAreaInput = textAreaInput;
    this.textAreaText = textAreaText;

    this.wordObjs = [];
    this.letterObjs = [];

    this.currentLetterIndex = 0;
    this.currentWordIndex = 0;

    this.time = 0;

    this.Keyboard = keyboard;

    this.setEventListeners(); // set listeners
    this.populateText(); // set default paragraph
  }

  setEventListeners() {
    this.textAreaText.addEventListener("click", () => this.focusInput());
    this.textAreaInput.addEventListener("keydown", (e) =>
      this.checkInput(e.key)
    );
  }

  reset() {
    this.currentLetterIndex = 0;
    this.wordObjs = [];
    this.letterObjs = [];
    this.textAreaText.innerHTML = "";
    this.populateText();
  }

  focusInput() {
    this.textAreaInput.focus();
  }

  populateText() {
    let paragraph = getRandomParagraph();

    paragraph.forEach((word) => {
      const wordObj = new Word(word);
      const letters = [...word, " "];

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

  checkInput(key) {
    // invalid key input
    if (ingoredkeys.includes(key)) return;

    // backspace input
    if (key === "Backspace") {
      this.setLastKey();
      return;
    }

    // valid key input
    if (key === this.currentLetterObj.letter) {
      this.currentLetterObj.setCorrect();
      this.Keyboard.triggerKey(true, key.toLowerCase());
    } else {
      this.currentLetterObj.setIncorrect();
      this.Keyboard.triggerKey(false, key.toLowerCase());
    }

    // move to next key
    this.setNextKey();
  }

  setNextKey() {
    this.currentLetterObj.removeCursor();
    this.currentLetterIndex++;
    this.currentLetterObj = this.letterObjs[this.currentLetterIndex]; // update letter
    this.currentLetterObj.addCursor();
  }

  setLastKey() {
    if (this.currentLetterIndex > 0) {
      this.currentLetterObj.removeCursor();
      this.currentLetterIndex--;
      this.currentLetterObj = this.letterObjs[this.currentLetterIndex];
      this.currentLetterObj.addCursor();
      this.currentLetterObj.setUntyped();
    }
  }
}
