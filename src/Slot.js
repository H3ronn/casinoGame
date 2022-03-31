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
    const addDegrees = (resultValue - 1) * 120;
    // eslint-disable-next-line prettier/prettier
    this.#element.style.transform = `rotate3d(1, 0, 0, calc(${this.#rotateValue}deg * ${spinsAmount} + ${addDegrees}deg ))`;
    this.#rotateValue += 360 * spinsAmount + addDegrees;
  }

  get resultValue() {
    return this.#resultValue;
  }
}
