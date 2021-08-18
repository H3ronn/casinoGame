class Slot {
    constructor(element, initialValue) {
        this.element = element
        this.currentDraw = initialValue;
    }

    currentRotateValue = 360;
    currentResultValue = 1;



    roll(resultValue) {
        const animationRollAmount = 2;

        if (this.currentResultValue === 2) {
            this.currentRotateValue -= 120;
        } else if (this.currentResultValue === 3) {
            this.currentRotateValue -= 240;
        }

        switch (resultValue) {
            case 1:
                this.currentResultValue = 1;
                // this.element.style.transitionDuration = '3s';
                this.element.style.transform = `rotate3d(1, 0, 0, calc(${this.currentRotateValue}deg * ${animationRollAmount}))`;
                this.currentRotateValue += 360*animationRollAmount;
                break;

            case 2:
                this.currentResultValue = 2;
                // this.element.style.transitionDuration = '3.3s';
                this.element.style.transform = `rotate3d(1, 0, 0, calc(${this.currentRotateValue}deg * ${animationRollAmount} + 120deg ))`;
                this.currentRotateValue += 360*animationRollAmount+120;
                break;

            case 3:
                this.currentResultValue = 3;
                // this.element.style.transitionDuration = '3.6s';
                this.element.style.transform = `rotate3d(1, 0, 0, calc(${this.currentRotateValue}deg * ${animationRollAmount} + 240deg ))`;
                this.currentRotateValue += 360*animationRollAmount+240;
                break;
        
            default:
                break;
        }
    }

    get resultValue() {
        return this.currentResultValue;
    }

    // getResultValue = () => this.currentResultValue;

    showElement() {
        console.log(this.element)
    }
}