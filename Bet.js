class Bet {
    constructor(counter) {
        this.betInput = document.querySelector('.betInput');
        this.controls = document.querySelectorAll('.control');
        this.counter = counter;

        this.betInput.addEventListener('change', (e) => {
            if (e.target.value < 0) {
                e.target.value = Math.abs(e.target.value);
            }           
        });

        this.controls.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.currentTarget.dataset.change === "allin") {
                    this.betInput.value = Statistics.counter.points;
                } else {
                    this.betInput.value = this.betInput.value * parseFloat(e.currentTarget.dataset.change);
                }
            })
        });
    }
}