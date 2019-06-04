export namespace StrategyPattern {

    export interface Strategy {
        doCalculations(numA: number, numB: number): void;
    }

    export class CalculationAdd implements Strategy {
        doCalculations(numA: number, numB: number): void {
            console.log('Calculation Add =', numA + numB);
        }
    }

    export class CalculationSubstract implements Strategy {

        doCalculations(numA: number, numB: number): void {
            console.log('Calculation Substract =', numA - numB);
        }

    }

    export class CalculationMultiply implements Strategy {
        doCalculations(numA: number, numB: number): void {
            console.log('Calculation Multiply =', numA * numB);
        }
    }

    export class CalculationContext {
        private strategy: Strategy;

        constructor(strategy: Strategy) {
            this.strategy = strategy;
        }

        public doStrategy(numA: number, numB: number): void {
            this.strategy.doCalculations(numA, numB);
        }
    }
}