export default class Reset {
  constructor(resetBtn, input) {
    this.resetBtn = resetBtn;
    this.Input = input;

    this.setEventListeners();
  }

  setEventListeners() {
    this.resetBtn.addEventListener("click", () => {
      this.reset();
      this.Input.reset();
    });
  }

  reset() {
    this.resetBtn.classList.add("reset_animation");
    this.resetBtn.addEventListener("animationend", this.animationEnd);
  }

  animationEnd = () => {
    this.resetBtn.classList.remove("reset_animation");
    this.resetBtn.removeEventListener("animationend", this.animationEnd);
  };
}
