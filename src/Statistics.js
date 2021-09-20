export default class Statistics {
  constructor() {
    this.scoreboard = document.querySelector('.scoreboard');
    this.info = document.querySelector('.info');

    // this.counter = {
    //   wins: 0,
    //   loses: 0,
    //   points: 100,
    // };
  }

  // static test = 123;
  static counter = {
    wins: 0,
    loses: 0,
    points: 100,
  };

  updateStatistics(bet, win) {
    // Statistics.counter.points -= bet;
    // this.updateScoreboard();

    if (win) {
      Statistics.counter.wins += 1;
      Statistics.counter.points += bet * 9;
      this.updateScoreboard();
      this.displayInfo(`You win ${bet * 9} points!`);
    } else {
      Statistics.counter.loses += 1;
      this.updateScoreboard();
      this.displayInfo(`You lose ${bet} points!`);
    }
  }

  displayInfo(alert) {
    this.info.textContent = alert;
  }

  updateScoreboard() {
    this.scoreboard.textContent = Statistics.counter.points;
  }
}
