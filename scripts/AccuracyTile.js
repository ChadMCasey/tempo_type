import Tile from "./Tile.js";

export default class AccuracyTile extends Tile {
  constructor(tile) {
    super(tile);
  }

  update() {
    console.log("update accuracy");
  }
}
