
import { MementoPattern } from './MementoPattern';

export namespace MementoDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Memento Desgin Pattern----------');
            let state: MementoPattern.State = new MementoPattern.State('...State'),
                originator: MementoPattern.Originator = new MementoPattern.Originator(state),
                careTaker: MementoPattern.CareTaker = new MementoPattern.CareTaker();

            careTaker.Memento = originator.createMemento();
            originator.State = new MementoPattern.State('something else...');

            originator.setMemento(careTaker.Memento);

            console.log('----------Start Memento Desgin Pattern----------');
        }
    }
}
