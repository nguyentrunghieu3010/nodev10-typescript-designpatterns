import * as  AbstractFactory from './AbstractFactory';
import { CarAbstractFactory } from './CarAbstractFactory';
import { AnimalAbstractFactory } from './AnimalAbstractFactory';

export class WrapperAbstractFactory {
    private abstractCar: CarAbstractFactory;
    private abstractAnimal: AnimalAbstractFactory;


    constructor(factory: AbstractFactory.AbstractFactory) {
        this.abstractCar = factory.showCars();
        this.abstractAnimal = factory.showAnimals();
    }

    public run(): void {
        console.log(this.abstractAnimal.showAnimals());
        console.log(this.abstractCar.showTypes());
    }
}