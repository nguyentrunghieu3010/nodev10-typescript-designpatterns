export interface CarAbstractFactory {
    showTypes(): string;
}

export class BmwCar implements CarAbstractFactory {
    showTypes(): string {
        return 'This is the BMW Car type';
    }
}

export class AudiCar implements CarAbstractFactory {
    showTypes(): string {
        return 'This is the AUDI Car type';
    }
}