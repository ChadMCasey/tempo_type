export default class Tile {
  constructor(tileElement) {
    this.tileElement = tileElement;
    this.tileElementHeading = tileElement.querySelector(".tile__heading");
    this.tileValueElement = tileElement.querySelector(".tile__value");
  }

  displayResult(result) {
    this.tileElement.classList.add("tile_visible");
    this.tileValueElement.textContent = result;
  }

  hideResults() {
    this.tileElement.classList.remove("tile_visible");
    this.tileValueElement.textContent = "";
  }
}
