export namespace FactoryPattern {

    export interface FactoryCar {
        showCar(): void;
    }

    export class BmwFactory implements FactoryCar {
        showCar(): void {
            console.log('BMW Factory will show your car type');
        }
    }

    export class AudiFactory implements FactoryCar {
        showCar(): void {
            console.log('AUDI Factory will show your car type');
        }
    }

    export class UnknownFactory implements FactoryCar {
        showCar(): void {
            console.log('Unknown Factory will show your car type');
        }
    }

    export namespace CarCenter {
        export function selectCarType(type: string): FactoryCar {
            if (type === 'BMW') {
                return new BmwFactory();
            } else if (type === 'AUDI') {
                return new AudiFactory();
            }
            return new UnknownFactory();
        }
    }
}
