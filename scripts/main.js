import Input from "./Input.js";
import Keyboard from "./Keyboard.js";
import Reset from "./Reset.js";
import {
  validInputKeys,
  textAreaInput,
  resetButton,
  paragraphs,
} from "./constants.js";

// create keyboard
const keyboard = new Keyboard();

// create input handling class
const input = new Input(keyboard);

// reset button can reset our text
const reset = new Reset(resetButton, input);
