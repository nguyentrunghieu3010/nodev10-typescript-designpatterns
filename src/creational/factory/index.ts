import { FactoryPattern } from './factory';

export function execute(flag: boolean): void {
    if (flag) {
        console.log('----------Start Factory----------');
        let bmwFactory: FactoryPattern.FactoryCar = FactoryPattern.CarCenter.selectCarType('BMW');
        bmwFactory.showCar();

        let audiFactory: FactoryPattern.FactoryCar = FactoryPattern.CarCenter.selectCarType('AUDI');
        audiFactory.showCar();
        console.log('----------End Factory----------');
    }
}
