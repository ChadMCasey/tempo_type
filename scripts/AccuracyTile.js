import { accuracyTile } from "./constants.js";
import Tile from "./Tile.js";

export default class AccuracyTile extends Tile {
  constructor(tile, inputObj) {
    super(tile, inputObj);
  }

  update() {
    console.log("update accuracy");
  }
}
