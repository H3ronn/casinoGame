import Statistics from "./Statistics.js";

export default class Bet {
  constructor(counter) {
    this.betInput = document.querySelector(".betInput");
    this.controls = document.querySelectorAll(".control");
    this.counter = counter;

    this.betInput.addEventListener("change", (e) => {
      if (e.target.value < 0) {
        e.target.value = Math.abs(e.target.value);
      }
    });

    this.controls.forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.currentTarget.dataset.change === "allin") {
          this.betInput.value = Statistics.counter.points;
        } else if (e.currentTarget.dataset.change) {
          this.betInput.value *= parseFloat(e.currentTarget.dataset.change);
        } else {
          // console.log(e.currentTarget.dataset.changeBottom); // w html change-bottom w js = changeBottom ????
          this.betInput.value =
            parseFloat(e.currentTarget.dataset.changeBottom) +
            parseFloat(this.betInput.value);
        }
      });
    });
  }
}
