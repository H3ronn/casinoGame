const game = new Game();


const betInput = document.querySelector('.betInput');
console.log(betInput.value);

betInput.addEventListener('change', (e) => {
    if (e.target.value < 0) {
        e.target.value = Math.abs(e.target.value);
    }
})

// setInterval(() => {
//     console.log(game.statistics);
// }, 1000);


