import { timeRemainingTile } from "./constants.js";
import Tile from "./Tile.js";

export default class TimeRemainingTile extends Tile {
  constructor(tile) {
    super(tile);
  }

  update() {
    console.log("update time remaining");
  }
}
