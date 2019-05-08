import { AbstractFactoryPattern } from './AbstractFactoryPattern';
import { Cars } from './CarAbstractFactory';
import { Animal } from './AnimalAbstractFactory';

export class WrapperAbstractFactory {
    private abstractCar: Cars.CarAbstractFactory;
    private abstractAnimal: Animal.AnimalAbstractFactory;

    constructor(factory: AbstractFactoryPattern.AbstractFactory) {
        this.abstractCar = factory.showCars();
        this.abstractAnimal = factory.showAnimals();
    }

    public run(): void {
        console.log(this.abstractAnimal.showAnimals());
        console.log(this.abstractCar.showTypes());
    }
}