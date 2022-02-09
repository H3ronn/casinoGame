import Statistics from './Statistics.js';

export default class Bet {
  constructor(counter) {
    this.betInput = document.querySelector('.betInput');
    this.controls = document.querySelectorAll('.control');
    this.counter = counter;

    this.betInput.addEventListener('change', (e) => {
      if (e.target.value < 0) {
        e.target.value = Math.abs(e.target.value);
      }
    });

    this.controls.forEach((el) => {
      el.addEventListener('click', this.handleControls);
    });
  }

  handleControls = (e) => {
    const modifierType = e.currentTarget.dataset.change;
    const betValue = parseFloat(this.betInput.value);
    if (modifierType === 'allin') {
      this.changeBetValue(Statistics.counter.points);
    } else if (modifierType) {
      // this.betInput.value *= parseFloat(modifierType);
      this.changeBetValue(betValue * parseFloat(modifierType));
    } else if (this.betInput.value >= 0) {
      // console.log(e.currentTarget.dataset.changeBottom); // w html change-bottom w js = changeBottom ????

      this.changeBetValue(
        betValue + parseFloat(e.currentTarget.dataset.changeBottom)
      );
    }
  };

  changeBetValue = (actualValue) => {
    this.betInput.value = actualValue;
    console.log(this.betInput.value);
    if (this.betInput.value < 0) {
      this.changeBetValue(0);
    }
  };
}
