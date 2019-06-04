
import { StrategyPattern } from './StrategyPattern';

export namespace StrategyDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Strategy Desgin Pattern----------');
            let context: StrategyPattern.CalculationContext = new StrategyPattern.CalculationContext(new StrategyPattern.CalculationAdd());

            context.doStrategy(5, 3);

            context = new StrategyPattern.CalculationContext(new StrategyPattern.CalculationMultiply());
            context.doStrategy(5, 3);

            context = new StrategyPattern.CalculationContext(new StrategyPattern.CalculationSubstract());
            context.doStrategy(5, 3);

            console.log('----------Start Strategy Desgin Pattern----------');
        }
    }
}
