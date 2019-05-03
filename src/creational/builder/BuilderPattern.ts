
//namespace is used for logical grouping of functions include interfaces, classes, functions, variables.
export namespace BuilderPattern {
    export class CarBuilder {
        private model: string; //will create enum object (BMW, AUDI, FORD, etc) later
        private years!: number;

        constructor(model: string) {
            this.model = model;
        }

        get Model() {
            return this.model;
        }

        setModel(model: string): CarBuilder {
            this.model = model;
            return this;
        }

        get Years() {
            return this.years;
        }

        setYears(years: number): CarBuilder {
            this.years = years;
            return this;
        }

        build(): Car {
            return new Car(this);
        }
    }

    export class Car {
        private model: string;
        private years: number;

        constructor(builder: CarBuilder) {
            this.model = builder.Model;
            this.years = builder.Years;
        }

        get Model() {
            return this.model;
        }

        get Years() {
            return this.years;
        }
    }
}