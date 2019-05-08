import { AbstractFactoryPattern } from './AbstractFactoryPattern';
import { WrapperAbstractFactory } from './WrapperAbstractFactory';

export namespace AbstractFactoryDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Abstract Factory----------');
            let factory: AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.GroupingAbstractFactory();
            let wrapper: WrapperAbstractFactory = new WrapperAbstractFactory(factory);
            wrapper.run();
            console.log('----------End Abstract Factory----------');
        }
    }
}
