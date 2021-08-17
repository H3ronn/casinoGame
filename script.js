const cubes = document.querySelectorAll('.cube');
const playButton = document.querySelector('.playButton')

let slots = []
cubes.forEach((el, index) => {
    slots[index] = new Slot(el);
});

let amount = 4;
playButton.addEventListener('click', () => {

    slots.forEach(element => {
        let randomValue = Math.floor(Math.random()*10%3+1); // random value from 1 to 3
        element.roll(randomValue)
    });
} );

