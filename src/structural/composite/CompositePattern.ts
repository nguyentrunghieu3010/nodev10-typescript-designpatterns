export namespace CompositePattern {
    export interface Employee {
        showEmployee(): void;
    }

    export class Developer implements Employee {

        private name: string;
        private position: string;

        constructor(name: string, position: string) {
            this.name = name;
            this.position = position;
        }

        showEmployee(): void {
            console.log('Leaf Developer ' + this.name + ' ' + this.position);
        }
    }

    export class Manager implements Employee {

        private name: string;
        private position: string;

        constructor(name: string, position: string) {
            this.name = name;
            this.position = position;
        }

        showEmployee(): void {
            console.log('Leaf Manager ' + this.name + ' ' + this.position);
        }
    }

    // Composite
    export class CompanyDirectory implements Employee {

        private employee: Employee[] = [];

        showEmployee(): void {
            this.employee.forEach((emp) => {
                emp.showEmployee();
            });
        }

        public addEmployee(employee: Employee): void {
            this.employee.push(employee);
        }

        public removeEmployee(idx: number): void {
            if (this.employee.length <= idx) {
                throw new Error('Index out of bound!');
            }
            this.employee.splice(idx, 1);
        }
    }
}