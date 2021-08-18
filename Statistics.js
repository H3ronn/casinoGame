class Statistics {
    constructor() {
        this.scoreboard = document.querySelector('.scoreboard')
        this.info = document.querySelector('.info')
    }

    counter = {
        wins: 0,
        loses: 0,
        points: 100,
    }

    updateStatistics(bet, win) {
        this.counter.points -= bet;
        this.scoreboard.innerHTML = this.counter.points;
        if (win) {
            this.counter.wins++;
            this.counter.points += bet*9;
            this.scoreboard.innerHTML = this.counter.points;
        } else {
            this.counter.loses++;
            this.scoreboard.innerHTML = this.counter.points;
        } 
    }

    updateInfo(alert) {
        this.info.innerHTML = alert;
    }

    
}