import { CompositePattern } from './CompositePattern';

export namespace CompositeDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Composite Pattern----------');

            let leafDeveloper_1 = new CompositePattern.Developer('Hieu', 'I am a leaf Developer');
            let leafDeveloper_2 = new CompositePattern.Developer('Nam', 'I am a leaf Developer');
            let leafDeveloper_3 = new CompositePattern.Developer('Le', 'I am a leaf Developer');
            let leafDeveloper_4 = new CompositePattern.Developer('Nguyen', 'I am a leaf Developer');
            let leafManager_2 = new CompositePattern.Manager('Loan', 'I am a leaf Manager');

            let compositeCompany = new CompositePattern.CompanyDirectory();
            compositeCompany.addEmployee(leafDeveloper_1);
            compositeCompany.addEmployee(leafDeveloper_2);
            compositeCompany.addEmployee(leafDeveloper_3);
            compositeCompany.addEmployee(leafDeveloper_4);

            compositeCompany.addEmployee(leafManager_2);

            compositeCompany.showEmployee();

            console.log('----------End Composite Pattern----------');
        }
    }
}