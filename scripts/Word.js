export default class Word {
  constructor(word) {
    this.word = word;
    this.wordElement = this.getWordTemplate();

    this.letterObjs = [];
  }

  getWordTemplate() {
    return document
      .querySelector("#word-template")
      .content.querySelector(".word")
      .cloneNode(true);
  }

  insertLetter(letter) {
    this.letterObjs.push(letter);
    this.wordElement.append(letter.letterElement);
  }
}
