import { keys, validInputKeys } from "./constants.js";
import Key from "./Key.js";

export default class Keyboard {
  constructor() {
    this.keyObjs = {};
    this.createKeys();
  }

  createKeys() {
    Array.from(keys).forEach((key) => {
      const keyText = key.querySelector(".key__text").textContent.trim();
      this.keyObjs[keyText] = new Key(key);
    });
  }

  triggerKey(correctKey, key) {
    if (key === " ") key = "space";
    if (!this.keyObjs[key]) return;

    this.keyObjs[key].triggerKey(correctKey, key);
  }
}
