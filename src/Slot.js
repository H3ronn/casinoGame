export default class Slot {
  #rotateValue = 360;
  #resultValue = 1;
  #element;

  constructor(element) {
    this.#element = element;
  }

  roll(resultValue) {
    const spinsAmount = 2;

    if (this.#resultValue === 2) {
      this.#rotateValue -= 120;
    } else if (this.#resultValue === 3) {
      this.#rotateValue -= 240;
    }

    this.#resultValue = resultValue;
    this.#element.style.transform = `rotate3d(1, 0, 0, calc(${
      this.#rotateValue
    }deg * ${spinsAmount} + ${(resultValue - 1) * 120}deg ))`;
    this.#rotateValue += 360 * spinsAmount + (resultValue - 1) * 120;
  }

  get resultValue() {
    return this.#resultValue;
  }
}
