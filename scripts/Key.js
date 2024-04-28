export default class Key {
  constructor(keyElement) {
    this.keyElement = keyElement;
    this.keyLetter = keyElement.querySelector(".key__text").textContent;
  }

  triggerKey(correctKey, key) {
    if (correctKey) {
      this.keyElement.classList.add("key_correct");
      setTimeout(() => this.keyElement.classList.remove("key_correct"), 100);
    } else {
      this.keyElement.classList.add("key_incorrect");
      setTimeout(() => this.keyElement.classList.remove("key_incorrect"), 100);
    }
  }
}
