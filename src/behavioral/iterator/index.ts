
import { IteratorPattern } from './iterator';

export namespace IteratorDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Iterator Desgin Pattern----------');
            let nArray = [1, 7, 21, 657, 3, 2, 765, 13, 65],
                numbers: IteratorPattern.Numbers = new IteratorPattern.Numbers(nArray),
                it: IteratorPattern.ConcreteIterator = <IteratorPattern.ConcreteIterator>numbers.createIterator();

            while (it.hasNext()) {
                console.log(it.next);
            }
            console.log('----------Start Iterator Desgin Pattern----------');
        }
    }
}
