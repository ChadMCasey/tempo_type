export default class Tile {
  constructor(tileElement, inputObj) {
    this.tileValue = null;
    this.tileElement = tileElement;
    this.tileValueElement = tileElement.querySelector(".tile__value");

    this.inputObj = inputObj;
  }
}
