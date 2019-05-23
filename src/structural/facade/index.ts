import { FacedePattern } from './FacadePattern';

export namespace FacedeDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Facade Pattern----------');
            let facade: FacedePattern.MathFacade = new FacedePattern.MathFacade();
            facade.doFacade(3, 2);
            console.log('----------End Facade Pattern----------');
        }
    }
}