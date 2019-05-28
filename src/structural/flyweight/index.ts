import { FlyWeightPattern } from './FlyweightPattern';

export namespace FlyWeightDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Facade Pattern----------');
            let flyWeight: FlyWeightPattern.PenFlyWeightFactory = new FlyWeightPattern.PenFlyWeightFactory(),

                thickPen: FlyWeightPattern.ThickPen = <FlyWeightPattern.ThickPen>flyWeight.getFlyweight('THICK', 'YELLOW'),

                thickPen1: FlyWeightPattern.ThickPen = <FlyWeightPattern.ThickPen>flyWeight.getFlyweight('THICK', 'YELLOW'),

                thinPen: FlyWeightPattern.ThinPen = <FlyWeightPattern.ThinPen>flyWeight.getFlyweight('THIN', 'BLUE'),

                thinPen1: FlyWeightPattern.ThinPen = <FlyWeightPattern.ThinPen>flyWeight.getFlyweight('THIN', 'BLUE-YELLOW');

            thickPen.draw('Hello World !!');
            thickPen1.draw('Hello World !!');
            thinPen.draw('Hello World !!');
            thinPen1.draw('Hello World BLUE-YELLOW !!');

            if (thinPen1 === thinPen) {
                console.log('Two Thick Pen are the SAME and shared');
            } else {
                console.log('Two Thick Pen are NOT shared');
            }
            console.log('----------End Facade Pattern----------');
        }
    }
}