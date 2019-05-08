import { Cars } from './CarAbstractFactory';
import { Animal } from './AnimalAbstractFactory';

export namespace AbstractFactoryPattern {

    export interface AbstractFactory {
        showCars(): Cars.CarAbstractFactory;
        showAnimals(): Animal.AnimalAbstractFactory;
    }

    export class GroupingAbstractFactory implements AbstractFactory {

        showCars(): Cars.CarAbstractFactory {
            return new Cars.BmwCar();
        }

        showAnimals(): Animal.AnimalAbstractFactory {
            return new Animal.DuckAnimal();
        }
    }
}
