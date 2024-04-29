import Tile from "./Tile.js";

export default class WPMTile extends Tile {
  constructor(tile) {
    super(tile);
  }

  update() {
    console.log("update");
  }
}
