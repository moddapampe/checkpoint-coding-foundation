class SumApp {
    constructor(){
        this.numbers =[];
    }
    addNumber(n) {
        this.numbers.push(n);
    }
    getSum() {
        let sum = 0;

        for (let summary of this.numbers) {
            sum = sum + summary;
        }
        return sum;
    }
    reset () {
        this.numbers = [];
    }
}


