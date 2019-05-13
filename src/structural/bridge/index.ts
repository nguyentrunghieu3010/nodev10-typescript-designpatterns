import { BridgePattern } from './BridgePattern';

export namespace BridgeDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Bridge----------');
            let rectangleRed: BridgePattern.Shape = new BridgePattern.Rectangle(new BridgePattern.RedColor());
            rectangleRed.selectedColor();

            let circleRed: BridgePattern.Shape = new BridgePattern.Circle(new BridgePattern.RedColor());
            circleRed.selectedColor();
            console.log('----------End Bridge----------');
        }
    }
}