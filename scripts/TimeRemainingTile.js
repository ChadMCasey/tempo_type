import { timeRemainingTile } from "./constants.js";
import Tile from "./Tile.js";

export default class TimeRemainingTile extends Tile {
  constructor(tile, inputObj) {
    super(tile, inputObj);
  }

  update() {
    console.log("update time remaining");
  }
}
