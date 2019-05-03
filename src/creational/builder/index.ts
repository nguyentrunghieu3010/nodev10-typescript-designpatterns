
import { BuilderPattern } from './BuilderPattern';
export namespace BuilderDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Builder Desgin Pattern----------');
            let carShow: BuilderPattern.Car = new BuilderPattern.CarBuilder('BMW').setYears(1990).build();
            console.log(carShow.Model + ' ' + carShow.Years);
            console.log('----------End Builder Desgin Pattern----------');
        }
    }
}
