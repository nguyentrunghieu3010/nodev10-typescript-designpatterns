
import * as Singleton from './Singleton';

export function execute(): void {
    const singleton1 = Singleton.Singleton.getInstance();
    const singleton2 = Singleton.Singleton.getInstance();

    if (singleton1 === singleton2) {
        console.log('Two singletons are the same');
    } else {
        console.log('Two singletons are NOT the same');
    }
}