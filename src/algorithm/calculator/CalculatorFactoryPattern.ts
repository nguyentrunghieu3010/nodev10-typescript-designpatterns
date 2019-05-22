
export namespace CalculatorFactoryPattern {
    export interface Add {
        calculate(): number;
    }

    export interface Sub {
        calculate(): number;
    }

    export interface Mul {
        calculate(): number;
    }

    export class PlusNumbers implements Add {

        numberA: number;
        numberB: number;

        constructor(numberA: number, numberB: number) {
            this.numberA = numberA;
            this.numberB = numberB;
        }

        calculate(): number {
            return this.numberA + this.numberB;
        }
    }

    export class SubtractionNumbers implements Sub {

        numberA: number;
        numberB: number;

        constructor(numberA: number, numberB: number) {
            this.numberA = numberA;
            this.numberB = numberB;
        }

        calculate(): number {
            return this.numberA - this.numberB;
        }
    }

    export class MultipleNumbers implements Mul {

        numberA: number;
        numberB: number;

        constructor(numberA: number, numberB: number) {
            this.numberA = numberA;
            this.numberB = numberB;
        }

        calculate(): number {
            return this.numberA * this.numberB;
        }
    }

    export namespace CalculationCenter {
        export function AddNumbers(numberA: number, numberB: number) {
            return new PlusNumbers(numberA, numberB);
        }

        export function MinusNumbers(numberA: number, numberB: number) {
            return new SubtractionNumbers(numberA, numberB);
        }

        export function TimesNumbers(numberA: number, numberB: number) {
            return new MultipleNumbers(numberA, numberB);
        }
    }
}
