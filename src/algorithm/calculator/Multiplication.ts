export namespace Multiplication {
    export interface Multiple {
        calculate(numberA: number, numberB: number): number;
    }

    export class MultiplicationNumbers implements Multiple {
        calculate(numberA: number, numberB: number): number {
            return numberA * numberB;
        }
    }
}