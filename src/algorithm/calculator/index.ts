import { CalculatorFactoryPattern } from './CalculatorFactoryPattern';

export namespace CalculatorDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Algorithm Calculator  Pattern----------');
            let calculatorAdd: CalculatorFactoryPattern.SubtractionNumbers = CalculatorFactoryPattern.CalculationCenter.MinusNumbers(2, 3);
            console.log(calculatorAdd.calculate());

            console.log('----------End Algorithm Calculator Pattern----------');
        }
    }
}