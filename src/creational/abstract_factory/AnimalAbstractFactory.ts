export interface AnimalAbstractFactory {
    showAnimals(): string;
}

export class DuckAnimal implements AnimalAbstractFactory {
    showAnimals(): string {
        return 'This is a Duck animal';
    }
}