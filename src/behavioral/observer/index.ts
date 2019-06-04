
import { ObserverPattern } from './ObserverPattern';

export namespace ObserverDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Observer Desgin Pattern----------');
            let sub: ObserverPattern.ConcreteSubject = new ObserverPattern.ConcreteSubject();
            sub.register(new ObserverPattern.ConcreteObserver(sub, 'Hieu'));
            sub.register(new ObserverPattern.ConcreteObserver(sub, 'John'));
            sub.register(new ObserverPattern.ConcreteObserver(sub, 'Peter'));

            sub.SubjectState = 123;
            sub.notify();

            console.log('----------Start Observer Desgin Pattern----------');
        }
    }
}
