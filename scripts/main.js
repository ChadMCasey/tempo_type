import Input from "./Input.js";
import Keyboard from "./Keyboard.js";
import Reset from "./Reset.js";
import Word from "./Word.js";
import Letter from "./Letter.js";
import AccuracyTile from "./AccuracyTile.js";
import WPMTile from "./WpmTile.js ";
import TimeRemainingTile from "./TimeRemainingTile.js";

import {
  validInputKeys,
  textAreaInput,
  resetButton,
  paragraphs,
  wpmTile,
  accuracyTile,
  timeRemainingTile,
} from "./constants.js";

// create our tile classes
const wpmTileObj = new WPMTile(wpmTile);
const accuracyTileObj = new AccuracyTile(accuracyTile);
const timeRemainingTileObj = new TimeRemainingTile(timeRemainingTile);

// create keyboard
const keyboardObj = new Keyboard();

// create input handling class
const inputObj = new Input(
  keyboardObj,
  wpmTileObj,
  accuracyTileObj,
  timeRemainingTileObj
);

// create reset button
const resetObj = new Reset(resetButton, inputObj);
