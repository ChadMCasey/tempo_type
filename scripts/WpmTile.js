import Tile from "./Tile.js";

export default class WPMTile extends Tile {
  constructor(tile, inputObj) {
    super(tile, inputObj);
  }

  update() {
    console.log("update");
  }
}
