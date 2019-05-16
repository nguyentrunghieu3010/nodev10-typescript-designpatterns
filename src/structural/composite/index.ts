import { CompositePattern } from './CompositePattern';

export namespace CompositeDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Composite Pattern----------');

            // let rectangleRed: BridgePattern.Shape = new BridgePattern.Rectangle(new BridgePattern.RedColor());
            // rectangleRed.selectedColor();


            let leafDeveloper_1 = new CompositePattern.Developer('Hieu', 'I am a leaf Developer');
            let leafManager_2 = new CompositePattern.Manager('Loan', 'I am a leaf Manager');

            let compositeCompany = new CompositePattern.CompanyDirectory();
            compositeCompany.addEmployee(leafDeveloper_1);
            compositeCompany.addEmployee(leafManager_2);

            compositeCompany.showEmployee();

            console.log('----------End Composite Pattern----------');
        }
    }
}