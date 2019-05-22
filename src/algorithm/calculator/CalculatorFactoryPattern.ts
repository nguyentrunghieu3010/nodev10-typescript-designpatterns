import { Multiplication } from './Multiplication';

export namespace CalculatorFactoryPattern {
    export interface Add {
        calculate(numberA: number, numberB: number): number;
    }

    export interface Sub {
        calculate(numberA: number, numberB: number): number;
    }

    export class PlusNumbers implements Add {
        calculate(numberA: number, numberB: number): number {
            return numberA + numberB;
        }
    }

    export class SubtractionNumbers implements Sub {
        calculate(numberA: number, numberB: number): number {
            return numberA - numberB;
        }
    }

    export namespace CalculationCenter {
        export function selectMethodCalculation(type: string) {
            if (type === 'a') {
                return new PlusNumbers();
            } else if (type === 's') {
                return new SubtractionNumbers();
            }
            return new Multiplication.MultiplicationNumbers();
        }
    }
}
