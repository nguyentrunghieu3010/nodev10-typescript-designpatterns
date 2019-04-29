import { AbstractFactory, ConcreteAbstractFactory } from './AbstractFactory';
import { WrapperAbstractFactory } from './WrapperAbstractFactory';

export function execute(flag: boolean): void {
    if (flag) {
        console.log('----------Start Abstract Factory----------');
        let factory: AbstractFactory = new ConcreteAbstractFactory();
        let wrapper: WrapperAbstractFactory = new WrapperAbstractFactory(factory);
        wrapper.run();
        console.log('----------End Abstract Factory----------');
    }
}