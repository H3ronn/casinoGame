const game = new Game();


const amount = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, }
for (let i = 0; i < 1000000; i++) {
    let randomValue2 = Math.floor(Math.random()*10%3+1); // random value from 1 to 3

    let randomValue = Math.floor(Math.random()*3 +1);
    amount[randomValue]++;
}
console.log(amount);



