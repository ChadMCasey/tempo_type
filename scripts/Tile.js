export default class Tile {
  constructor(tileElement) {
    this.tileElement = tileElement;
    this.tileElementHeading = tileElement.querySelector(".tile__heading");
    this.tileValueElement = tileElement.querySelector(".tile__value");
  }
}
