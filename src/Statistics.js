export default class Statistics {
  #scoreboard;
  #info;

  constructor() {
    this.#scoreboard = document.querySelector('.scoreboard');
    this.#info = document.querySelector('.info');
  }

  static counter = {
    wins: 0,
    loses: 0,
    points: 100,
  };

  updateStatistics(bet, win) {
    if (win) {
      Statistics.counter.wins += 1;
      Statistics.counter.points += bet * 9;
      this.updateScoreboard();
      this.displayInfo(`You won ${bet * 9} points!`);
    } else {
      Statistics.counter.loses += 1;
      this.updateScoreboard();
      this.displayInfo(`You lost ${bet} points!`);
    }
  }

  displayInfo(alert) {
    this.#info.textContent = alert;
  }

  updateScoreboard() {
    this.#scoreboard.textContent = Statistics.counter.points;
  }
}
