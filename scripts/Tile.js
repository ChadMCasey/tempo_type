export default class Tile {
  constructor(tileElement) {
    this.tileElement = tileElement;
    this.tileElementHeading = tileElement.querySelector(".tile__heading");
    this.tileValueElement = tileElement.querySelector(".tile__value");
  }

  displayResult(result, timeout) {
    setTimeout(() => this.tileElement.classList.add("tile_visible"), timeout); // 20
    this.tileValueElement.textContent = result;
  }

  hideResult(timeout) {
    setTimeout(
      () => this.tileElement.classList.remove("tile_visible"),
      timeout
    );
    this.tileValueElement.textContent = "";
  }
}
