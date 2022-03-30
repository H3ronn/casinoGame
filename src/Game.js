import Statistics from './Statistics.js';
import Bet from './Bet.js';
import Slot from './Slot.js';

export default class Game {
  #slots = [];
  #statistics;
  #bet;
  #cubes;
  #playButton;
  #isRolling = false;

  constructor() {
    this.#statistics = new Statistics();
    this.#bet = new Bet(10);

    this.#cubes = document.querySelectorAll('.cube');
    this.#playButton = document.querySelector('.playButton');

    this.#playButton.addEventListener('click', this.#play.bind(this));
    this.#cubes.forEach((el, index) => {
      this.#slots[index] = new Slot(el);
    });
  }

  #isWin() {
    const slotsValue = this.#slots.map((el) => el.resultValue);

    if (slotsValue[0] === slotsValue[1] && slotsValue[0] === slotsValue[2]) {
      return true;
    }
    return false;
  }

  #play() {
    if (this.#isRolling) return;

    const betValue = this.#bet.value;
    this.#isRolling = true;

    const stats = this.#statistics;
    if (Statistics.counter.points >= betValue) {
      Statistics.counter.points -= betValue;
      stats.updateScoreboard();
      stats.displayInfo('Rolling!');
      this.#spinSlots();

      setTimeout(() => {
        this.#isRolling = false;
        stats.updateStatistics(betValue, this.#isWin());
      }, 3000);
    } else {
      stats.displayInfo("You don't have enough points to bet! :<");
    }
  }

  #spinSlots() {
    this.#slots.forEach((slot) => {
      const randomValue = Math.floor(Math.random() * 3 + 1);
      slot.roll(randomValue);
    });
  }
}
