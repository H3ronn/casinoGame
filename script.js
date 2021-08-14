// class Game {
//     amount = 3;

//     constructor() {

//     }
// }

const cube = document.querySelector('.cubeContainer');
const playButton = document.querySelector('.playButton')

playButton.addEventListener('click', () => {cube.style.animation = 'roll 5s ease-in-out';} );