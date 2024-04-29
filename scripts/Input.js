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
  constructor(keyboardObj, wpmObj, accuracyObj, timeRemainingObj) {
    this.textAreaInput = textAreaInput;
    this.textAreaText = textAreaText;

    this.wordObjs = [];
    this.letterObjs = [];

    this.isRunning = false;
    this.isReset = true;
    this.time = null;

    this.currentLetterIndex = 0;

    this.correctKeys = 0;
    this.incorrectKeys = 0;
    this.correctWords = 0;

    //keybooard
    this.Keyboard = keyboardObj;

    // tiles
    this.Accuracy = accuracyObj;
    this.WPM = wpmObj;
    this.timeRemaining = timeRemainingObj;

    this.setEventListeners(); // set listeners
    this.populateText(); // set default paragraph
  }

  setEventListeners() {
    this.textAreaText.addEventListener("click", () => this.focusInput());
    this.textAreaInput.addEventListener("keydown", (e) => {
      this.handleKeydown(e.key);
    });
  }

  reset() {
    this.currentLetterIndex = 0;

    this.isRunning = false;
    this.isReset = true;

    this.startTime = null;
    this.endTime = null;

    this.correctKeys = 0;
    this.incorrectKeys = 0;
    this.correctWords = 0;

    this.wordObjs = [];
    this.letterObjs = [];

    this.textAreaText.innerHTML = "";
    this.populateText();
  }

  start() {
    this.isRunning = true;
    this.isReset = false;
    this.startTime = new Date();
  }

  stop() {
    this.isRunning = false;
    this.endTime = new Date();
  }

  focusInput() {
    this.textAreaInput.focus();
  }

  populateText() {
    let paragraph = getRandomParagraph();
    let time = 0;

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
      }, time);
      time += 10;
    });

    this.currentLetterObj = this.letterObjs[0];
    this.currentLetterObj.addCursor();
  }

  handleKeydown(key) {
    if (!this.isRunning && this.isReset) {
      this.start();
    }

    if (
      this.isRunning &&
      this.currentLetterIndex < this.letterObjs.length - 1
    ) {
      this.checkInput(key);
    }

    if (
      this.isRunning &&
      this.currentLetterIndex === this.letterObjs.length - 1
    ) {
      this.stop();
      this.isRunning = false;
    }
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
      this.correctKeys++;
    } else {
      this.currentLetterObj.setIncorrect();
      this.Keyboard.triggerKey(false, key.toLowerCase());
      this.incorrectKeys++;
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
