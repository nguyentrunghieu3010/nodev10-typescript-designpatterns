
import { SingletonPattern } from './SingletonPattern';

export namespace SingletonDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Singletons Desgin Pattern----------');
            const singleton1 = SingletonPattern.Singleton.getInstance();
            const singleton2 = SingletonPattern.Singleton.getInstance();

            if (singleton1 === singleton2) {
                console.log('Two singletons are the same');
            } else {
                console.log('Two singletons are NOT the same');
            }
            console.log('----------Start Singletons Desgin Pattern----------');
        }
    }
}
