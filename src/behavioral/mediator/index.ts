
import { MediatorPattern } from './MediatorPattern';

export namespace MediatorDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Mediator Desgin Pattern----------');
            let cm: MediatorPattern.ConcreteMediator = new MediatorPattern.ConcreteMediator(),
                c1: MediatorPattern.ConcreteColleagueA = new MediatorPattern.ConcreteColleagueA(cm),
                c2: MediatorPattern.ConcreteColleagueB = new MediatorPattern.ConcreteColleagueB(cm);

            cm.concreteColleagueA = c1;
            cm.concreteColleagueB = c2;

            c1.send('`send` of ConcreteColleagueA is being called!');
            c2.send('`send` of ConcreteColleagueB is being called!');

            console.log('----------Start Mediator Desgin Pattern----------');
        }
    }
}
