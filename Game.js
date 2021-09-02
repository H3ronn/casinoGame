import Statistics from "./Statistics.js";
import Bet from "./Bet.js";
import Slot from "./Slot.js";

export default class Game {
  constructor() {
    this.statistics = new Statistics();
    this.bet = new Bet();

    this.cubes = document.querySelectorAll(".cube");
    this.playButton = document.querySelector(".playButton");

    this.slots = [];
    this.cubes.forEach((el, index) => {
      this.slots[index] = new Slot(el);
    });

    this.playButton.addEventListener("click", () => {
      this.play(this.bet.betInput.value);
    });
  }

  isWin() {
    // const [{currentResultValue: value1}, {currentResultValue: value2}, {currentResultValue: value3}] = this.slots;

    const slotsValue = this.slots.map((el) => el.resultValue);

    if (slotsValue[0] === slotsValue[1] && slotsValue[0] === slotsValue[2]) {
      return true;
    }
    return false;
  }

  play(bet) {
    // const { counter } = Statistics;
    const stats = this.statistics;
    if (Statistics.counter.points >= bet) {
      stats.displayInfo("");

      this.spinSlots();
      stats.updateStatistics(bet, this.isWin());
    } else {
      // alert("You don't have enough points to bet! :<")
      stats.displayInfo("You don't have enough points to bet! :<");
    }
  }

  spinSlots() {
    this.slots.forEach((slot) => {
      const randomValue = Math.floor(Math.random() * 3 + 1); // random value from 1 to 3
      slot.roll(randomValue);
    });
  }
}
