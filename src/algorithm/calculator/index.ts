import { CalculatorFactoryPattern } from './CalculatorFactoryPattern';
import { Multiplication } from './Multiplication';

export namespace CalculatorDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Algorithm Calculator  Pattern----------');
            let calculator: Multiplication.Multiple = CalculatorFactoryPattern.CalculationCenter.selectMethodCalculation('xxx');
            console.log(calculator.calculate(2, 3));

            console.log('----------End Algorithm Calculator Pattern----------');
        }
    }
}