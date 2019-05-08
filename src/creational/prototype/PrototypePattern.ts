export namespace PrototypePattern {
    export interface CarPrototype {
        clone(): CarPrototype;
        toString(): string;
    }

    export class Audi implements CarPrototype {

        clone(): CarPrototype {
            return new Audi();
        }

        toString(): string {
            return 'This is Audi Car';
        }
    }

    export class VinFast implements CarPrototype {
        clone(): CarPrototype {
            return new VinFast();
        }

        toString(): string {
            return 'This is VinFast Car';
        }
    }

    abstract class CarAgency {
        abstract sellCars(brand: string): CarPrototype;
    }

    export class VietNamCarAgency extends CarAgency {
        private brandMap: { [brand: string]: CarPrototype; } = {};

        constructor() {
            super();
            this.brandMap['AUDI'] = new Audi();
            this.brandMap['WINFAST'] = new VinFast();
        }

        sellCars(brand: string): CarPrototype {
            console.log(brand);
            return this.brandMap[brand].clone();
        }
    }
}