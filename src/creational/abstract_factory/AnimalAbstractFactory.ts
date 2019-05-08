export namespace Animal {
    export interface AnimalAbstractFactory {
        showAnimals(): string;
    }

    export class DuckAnimal implements AnimalAbstractFactory {
        showAnimals(): string {
            return 'This is a Duck animal is built based on Abstract Factory';
        }
    }
}
