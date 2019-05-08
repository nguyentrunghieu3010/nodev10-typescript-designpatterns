import { PrototypePattern } from './PrototypePattern';

export namespace PrototypeDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Prototype Desgin Pattern----------');
            let agencies: PrototypePattern.VietNamCarAgency = new PrototypePattern.VietNamCarAgency();

            const carBrands = ['AUDI', 'WINFAST'].map((brand) => {
                return agencies.sellCars(brand);
            });

            console.log(carBrands.toString());
            console.log('----------End Prototype Desgin Pattern----------');
        }
    }
}