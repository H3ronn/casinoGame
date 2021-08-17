class Slot {
    constructor(element, initialValue) {
        this.element = element
        this.currentDraw = initialValue;
    }

    rotateValue = 0;



    roll(resultValue) {
        const amount = 2;
        switch (resultValue) {
            case 1:
                this.element.style.transform = `rotate3d(1, 0, 0, calc((${this.rotateValue}deg + 360deg) * ${amount}))`;
                this.rotateValue += 360*amount;
                break;

            case 2:
                this.element.style.transform = `rotate3d(1, 0, 0, calc((${this.rotateValue}deg + 360deg) * ${amount} + 120deg ))`;
                this.rotateValue += 360*amount+120;
                break;

            case 3:
                this.element.style.transform = `rotate3d(1, 0, 0, calc((${this.rotateValue}deg + 360deg) * ${amount} + 240deg ))`;
                this.rotateValue += 360*amount+240;
                break;
        
            default:
                break;
        }
    }

    showElement() {
        console.log(this.element)
    }
}