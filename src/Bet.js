import Statistics from './Statistics.js';

export default class Bet {
  #betInput;
  #controls;
  #controlsContainer;
  #value;

  constructor(value) {
    this.#betInput = document.querySelector('.betInput');
    this.#controlsContainer = document.querySelector('.controls');
    this.#value = value;
    this.#betInput.value = this.#value;

    this.#betInput.addEventListener('change', (e) => {
      this.#value = e.target.value;
      if (e.target.value < 0) {
        e.target.value = Math.abs(e.target.value);
      }
    });

    this.#controlsContainer.addEventListener('click', (e) => {
      if (!e.target.type) return;
      this.#handleControls(e.target);
    });
  }

  #handleControls = (control) => {
    // change to more readable!
    const modifierType = control.dataset.change;
    const betValue = parseFloat(this.#betInput.value);
    if (modifierType === 'allin') {
      this.#changeBetValue(Statistics.counter.points);
    } else if (modifierType) {
      this.#changeBetValue(betValue * parseFloat(modifierType));
    } else if (this.#betInput.value >= 0) {
      this.#changeBetValue(betValue + parseFloat(control.dataset.changeBottom));
    }
  };

  #changeBetValue = (actualValue) => {
    this.#betInput.value = actualValue;
    this.#value = actualValue;
    if (this.#betInput.value < 0) {
      this.#changeBetValue(0);
    }
  };

  get value() {
    return this.#value;
  }
}
