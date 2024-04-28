import Input from "./Input.js";
import Keyboard from "./Keyboard.js";
import { validInputKeys, textAreaInput } from "./constants.js";

// create keyboard
const keyboard = new Keyboard();

// create input handling class
const input = new Input(keyboard);
