class Game {
    constructor() {
        this.cubes = document.querySelectorAll('.cube');
        this.playButton = document.querySelector('.playButton')
        
        this.slots = []
        this.cubes.forEach((el, index) => {
            this.slots[index] = new Slot(el);
        });

        this.addRollActionToButton();
    }


    isWin(slots) {

    }

    addRollActionToButton() {
        this.playButton.addEventListener('click', () => {
        
            this.slots.forEach(slot => {
                let randomValue = Math.floor(Math.random()*3 +1); // random value from 1 to 3
                slot.roll(randomValue)
                console.log(slot.element.id);
                console.log(slot.currentResultValue);
                console.log('');
            });
        } );
    }



}