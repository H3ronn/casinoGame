(() => {
  class t {
    constructor() {
      (this.scoreboard = document.querySelector('.scoreboard')),
        (this.info = document.querySelector('.info'));
    }
    static counter = { wins: 0, loses: 0, points: 100 };
    updateStatistics(e, s) {
      s
        ? ((t.counter.wins += 1),
          (t.counter.points += 9 * e),
          this.updateScoreboard(),
          this.displayInfo(`You win ${9 * e} points!`))
        : ((t.counter.loses += 1),
          this.updateScoreboard(),
          this.displayInfo(`You lose ${e} points!`));
    }
    displayInfo(t) {
      this.info.textContent = t;
    }
    updateScoreboard() {
      this.scoreboard.textContent = t.counter.points;
    }
  }
  class e {
    constructor(e) {
      (this.betInput = document.querySelector('.betInput')),
        (this.controls = document.querySelectorAll('.control')),
        (this.counter = e),
        this.betInput.addEventListener('change', (t) => {
          t.target.value < 0 && (t.target.value = Math.abs(t.target.value));
        }),
        this.controls.forEach((e) => {
          e.addEventListener('click', (e) => {
            e.currentTarget.dataset.change === 'allin'
              ? (this.betInput.value = t.counter.points)
              : e.currentTarget.dataset.change
              ? (this.betInput.value *= parseFloat(
                  e.currentTarget.dataset.change
                ))
              : (this.betInput.value =
                  parseFloat(e.currentTarget.dataset.changeBottom) +
                  parseFloat(this.betInput.value));
          });
        });
    }
  }
  class s {
    constructor(t) {
      this.element = t;
    }
    currentRotateValue = 360;
    currentResultValue = 1;
    roll(t) {
      switch (
        (this.currentResultValue === 2
          ? (this.currentRotateValue -= 120)
          : this.currentResultValue === 3 && (this.currentRotateValue -= 240),
        t)
      ) {
        case 1:
          (this.currentResultValue = 1),
            (this.element.style.transform = `rotate3d(1, 0, 0, calc(${this.currentRotateValue}deg * 2))`),
            (this.currentRotateValue += 720);
          break;
        case 2:
          (this.currentResultValue = 2),
            (this.element.style.transform = `rotate3d(1, 0, 0, calc(${this.currentRotateValue}deg * 2 + 120deg ))`),
            (this.currentRotateValue += 840);
          break;
        case 3:
          (this.currentResultValue = 3),
            (this.element.style.transform = `rotate3d(1, 0, 0, calc(${this.currentRotateValue}deg * 2 + 240deg ))`),
            (this.currentRotateValue += 960);
      }
    }
    get resultValue() {
      return this.currentResultValue;
    }
    showElement() {
      console.log(this.element);
    }
  }
  new (class {
    constructor() {
      (this.statistics = new t()),
        (this.bet = new e()),
        (this.cubes = document.querySelectorAll('.cube')),
        (this.playButton = document.querySelector('.playButton')),
        (this.slots = []),
        this.cubes.forEach((t, e) => {
          this.slots[e] = new s(t);
        }),
        this.playButton.addEventListener('click', this.play.bind(this));
    }
    isRolling = !1;
    isWin() {
      const t = this.slots.map((t) => t.resultValue);
      return t[0] === t[1] && t[0] === t[2];
    }
    play() {
      if (!this.isRolling) {
        const e = this.bet.betInput.value;
        this.isRolling = !0;
        const s = this.statistics;
        t.counter.points >= e
          ? ((t.counter.points -= e),
            s.updateScoreboard(),
            s.displayInfo('Rolling!'),
            setTimeout(() => {
              (this.isRolling = !1), s.updateStatistics(e, this.isWin());
            }, 3e3),
            this.spinSlots())
          : s.displayInfo("You don't have enough points to bet! :<");
      }
    }
    spinSlots() {
      this.slots.forEach((t) => {
        const e = Math.floor(3 * Math.random() + 1);
        t.roll(e);
      });
    }
  })();
})();
