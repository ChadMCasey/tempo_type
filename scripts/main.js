import Input from "./Input.js";
import Keyboard from "./Keyboard.js";
import Reset from "./Reset.js";
import Word from "./Word.js";
import Letter from "./Letter.js";
import AccuracyTile from "./AccuracyTile.js";
import WPMTile from "./WpmTile.js ";
import TimeTile from "./TimeTile.js";

import {
  validInputKeys,
  textAreaInput,
  resetButton,
  paragraphs,
  wpmTile,
  accuracyTile,
  timeTile,
} from "./constants.js";

// create our tile classes
const wpmTileObj = new WPMTile(wpmTile);
const accuracyTileObj = new AccuracyTile(accuracyTile);
const timeTileObj = new TimeTile(timeTile);

// create keyboard
const keyboardObj = new Keyboard();

// create input handling class
const inputObj = new Input(
  keyboardObj,
  wpmTileObj,
  accuracyTileObj,
  timeTileObj
);

// create reset button
const resetObj = new Reset(resetButton, inputObj);
