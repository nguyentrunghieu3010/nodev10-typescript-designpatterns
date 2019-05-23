export namespace FacedePattern {

    export class Plus {
        public execute(numberA: number, numberB: number): void {
            let result = numberA + numberB;
            console.log('Plus:' + result);
        }
    }

    export class Minus {
        public execute(numberA: number, numberB: number): void {
            let result = numberA - numberB;
            console.log('Minus:' + result);
        }
    }

    export class Times {
        public execute(numberA: number, numberB: number): void {
            let result = numberA * numberB;
            console.log('Times:' + result);
        }
    }

    export class Div {
        public execute(numberA: number, numberB: number): void {
            let result = numberA / numberB;
            console.log('Div:' + result);
        }
    }

    export class MathFacade {
        private plus: Plus = new Plus();
        private minus: Minus = new Minus();
        private times: Times = new Times();
        private div: Div = new Div();

        public doFacade(numberA: number, numberB: number): void {
            this.plus.execute(numberA, numberB);
            this.minus.execute(numberA, numberB);
            this.times.execute(numberA, numberB);
            this.div.execute(numberA, numberB);
        }
    }
}