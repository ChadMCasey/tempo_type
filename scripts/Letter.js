export default class Letter {
  constructor(letter) {
    this.letter = letter;
    this.letterElement = this.getLetterTemplate(letter);
    this.letterElement.textContent = letter;
  }

  getLetterTemplate() {
    return document
      .querySelector("#letter-template")
      .content.querySelector(".letter")
      .cloneNode(true);
  }

  getCursorTemplate() {
    return document
      .querySelector("#cursor-template")
      .content.querySelector(".letter__cursor")
      .cloneNode(true);
  }

  setCorrect() {
    this.letterElement.classList.add("letter_correct");
    this.letterElement.classList.remove("letter_incorrect");
  }

  setIncorrect() {
    this.letterElement.classList.add("letter_incorrect");
    this.letterElement.classList.remove("letter_correct");
  }

  isCorrect() {
    return this.letterElement.classList.contains("letter_correct");
  }

  addCursor() {
    const cursor = this.getCursorTemplate();
    this.letterElement.append(cursor);
  }

  removeCursor() {
    this.letterElement.children[0].remove();
  }

  setUntyped() {
    this.letterElement.classList.remove("letter_incorrect");
    this.letterElement.classList.remove("letter_correct");
  }
}
