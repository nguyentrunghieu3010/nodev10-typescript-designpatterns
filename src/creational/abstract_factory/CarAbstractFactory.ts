export namespace Cars {
    export interface CarAbstractFactory {
        showTypes(): string;
    }

    export class BmwCar implements CarAbstractFactory {
        showTypes(): string {
            return 'This is the BMW Car type is built based on Abstract Factory';
        }
    }

    export class AudiCar implements CarAbstractFactory {
        showTypes(): string {
            return 'This is the AUDI Car type is built based on Abstract Factory';
        }
    }
}