import { FlyWeightPattern } from './FlyweightPattern';

export namespace FlyWeightDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Facade Pattern----------');
            let flyWeight: FlyWeightPattern.PenFlyWeightFactory = new FlyWeightPattern.PenFlyWeightFactory(),

                thickPen: FlyWeightPattern.ThickPen = <FlyWeightPattern.ThickPen>flyWeight.getFlyweight('YELLOW'),

                thickPen1: FlyWeightPattern.ThickPen = <FlyWeightPattern.ThickPen>flyWeight.getFlyweight('YELLOW');

            thickPen.draw('Hello World !!');
            thickPen1.draw('Hello World !!');


            if (thickPen === thickPen1) {
                console.log('Two Thick Pen are the SAME and shared');
            } else {
                console.log('Two Thick Pen are NOT shared');
            }


            console.log('----------End Facade Pattern----------');
        }
    }
}