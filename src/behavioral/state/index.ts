
import { StatePattern } from './StatePattern';

export namespace StateDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start State Desgin Pattern----------');
            let context: StatePattern.StateContext = new StatePattern.StateContext(new StatePattern.StartState());

            context.doAction();

            console.log('----------Start State Desgin Pattern----------');
        }
    }
}
