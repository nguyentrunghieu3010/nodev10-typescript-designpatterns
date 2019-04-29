import { CarAbstractFactory, BmwCar } from './CarAbstractFactory';
import { AnimalAbstractFactory, DuckAnimal } from './AnimalAbstractFactory';

export interface AbstractFactory {
    showCars(): CarAbstractFactory;
    showAnimals(): AnimalAbstractFactory;
}

export class ConcreteAbstractFactory implements AbstractFactory {

    showCars(): CarAbstractFactory {
        return new BmwCar();
    }

    showAnimals(): AnimalAbstractFactory {
        return new DuckAnimal();
    }

}