class Statistics {
    constructor() {
        this.scoreboard = document.querySelector('.scoreboard');
        this.info = document.querySelector('.info');
    }

    static counter = {
        wins: 0,
        loses: 0,
        points: 100,
    }
    

    updateStatistics(bet, win) {
        Statistics.counter.points -= bet;
        this.updateScoreboard();
        if (win) {
            Statistics.counter.wins++;
            Statistics.counter.points += bet*9;
            this.updateScoreboard();
        } else {
            Statistics.counter.loses++;
            this.updateScoreboard();
        } 
    }

    updateInfo(alert) {
        this.info.innerHTML = alert;
    }

    updateScoreboard() {
        this.scoreboard.innerHTML = Statistics.counter.points;
    }

    
}