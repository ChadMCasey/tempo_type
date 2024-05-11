import {
  textAreaInput,
  textAreaText,
  getRandomParagraph,
  keys,
  ingoredkeys,
  punctuationOrSpace,
} from "./constants.js";
import Word from "./Word.js";
import Letter from "./Letter.js";

export default class Input {
  constructor(keyboardObj, wpmObj, accuracyObj, timeObj) {
    this.textAreaInput = textAreaInput;
    this.textAreaText = textAreaText;

    this.wordObjs = [];
    this.letterObjs = [];

    this.isRunning = false;
    this.isReset = true;
    this.time = null;

    this.currentLetterIndex = 0;

    this.correctKeysTyped = 0;
    this.keysTyped = 0;

    //keybooard
    this.Keyboard = keyboardObj;

    // tiles
    this.Accuracy = accuracyObj;
    this.WPM = wpmObj;
    this.Time = timeObj;

    this.setEventListeners(); // set listeners
    this.populateText(); // set default paragraph
  }

  setEventListeners() {
    document.addEventListener("keydown", () => this.textAreaInput.focus());

    this.textAreaInput.addEventListener("keydown", (e) => {
      this.handleKeydown(e.key);
    });
  }

  reset() {
    this.hideResults();

    this.currentLetterIndex = 0;

    this.isRunning = false;
    this.isDisplayingResults = false;

    this.startTime = null;
    this.endTime = null;

    this.correctKeysTyped = 0;
    this.keysTyped = 0;

    this.wordObjs = [];
    this.letterObjs = [];

    this.textAreaText.innerHTML = "";
    this.populateText();
  }

  start() {
    this.isRunning = true;
    this.isDisplayingResults = false;
    this.startTime = new Date();
  }

  stop() {
    this.isRunning = false;
    this.isDisplayingResults = true;
    this.endTime = new Date();
    this.showResults();
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
      time += 25;
    });

    this.currentLetterObj = this.letterObjs[0];
    this.currentLetterObj.addCursor();
  }

  handleKeydown(key) {
    if (!this.isRunning && !this.isDisplayingResults) {
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

    this.keysTyped++;

    // valid key input
    if (key === this.currentLetterObj.letter) {
      this.currentLetterObj.setCorrect();
      this.Keyboard.triggerKey(true, key.toLowerCase());
      this.correctKeysTyped++;
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

  calculateWPM() {
    let correctWords = 0;

    for (let i = 0; i < this.wordObjs.length; i++) {
      let typedCorrect = true;
      let wordObj = this.wordObjs[i];
      let letterObjs = wordObj.letterObjs;

      for (let j = 0; j < letterObjs.length; j++) {
        let letterObj = letterObjs[j];
        let letter = letterObj.letter; // a b c

        if (!punctuationOrSpace.includes(letter) && !letterObj.isCorrect()) {
          typedCorrect = false;
          break;
        }
      }

      correctWords += typedCorrect;
    }

    let timeTakenSeconds = this.calculateTimeTaken();
    let WPM = correctWords / (timeTakenSeconds / 60);
    let WPMrounded = Math.round(WPM, 1);
    return WPMrounded;
  }

  calculateAccuracy() {
    let accuracyPercent = (this.correctKeysTyped / this.keysTyped) * 100;
    let accuracyRounded = Math.round(accuracyPercent);
    let accuracyFormatted = accuracyRounded + "%";
    return accuracyFormatted;
  }

  calculateTimeTaken() {
    return (this.endTime - this.startTime) / 1000;
  }

  showResults() {
    let WPM = this.calculateWPM();
    let accuracy = this.calculateAccuracy();
    let time = Math.round(this.calculateTimeTaken(), 1) + "s";

    this.WPM.displayResult(WPM, 0);
    this.Accuracy.displayResult(accuracy, 50);
    this.Time.displayResult(time, 100);
  }

  hideResults() {
    this.WPM.hideResult(100);
    this.Accuracy.hideResult(50);
    this.Time.hideResult(0);
  }
}
