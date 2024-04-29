import Tile from "./Tile.js";

export default class TimeTile extends Tile {
  constructor(tile) {
    super(tile);
  }

  update() {
    console.log("update time remaining");
  }
}
