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


    checkWin() {
        // const [{currentResultValue: value1}, {currentResultValue: value2}, {currentResultValue: value3}] = this.slots;
        
        const slotsValue = this.slots.map( el => el.currentResultValue)
        console.log(slotsValue);
        console.log(this.slots);

        if (slotsValue[0] !== slotsValue[1] || slotsValue[0] !== slotsValue[2]) {
            return false
        } else {
            return true
        }
    }

    addRollActionToButton() {
        this.playButton.addEventListener('click', () => {
        
            this.slots.forEach(slot => {
                let randomValue = Math.floor(Math.random()*3 +1); // random value from 1 to 3
                slot.roll(randomValue)


                // console.log(slot.element.id);
                // console.log(slot.currentResultValue);
                // console.log('');
            });
        } );
    }



}