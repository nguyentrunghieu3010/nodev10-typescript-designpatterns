
export namespace MementoPattern {

    export class State {
        private content: string;

        constructor(content: string) {
            this.content = content;
        }

        get Content(): string {
            return this.content;
        }

        set Content(content: string) {
            this.content = content;
        }
    }

    export class Originator {
        private state: State;

        constructor(state: State) {
            this.state = state;
        }

        get State(): State {
            return this.state;
        }

        set State(state: State) {
            console.log('State ::', state);
            this.state = state;
        }

        public createMemento(): Memento {
            console.log('creates a memento with a given state!');
            return new Memento(this.state);
        }

        public setMemento(memento: Memento) {
            console.log('sets the state back');
            this.state = memento.State;
        }
    }

    export class Memento {
        private state: State;

        constructor(state: State) {
            this.state = state;
        }

        get State(): State {
            console.log('get mementos state');
            return this.state;
        }
    }

    export class CareTaker {
        private memento!: Memento;

        get Memento(): Memento {
            return this.memento;
        }

        set Memento(memento: Memento) {
            this.memento = memento;
        }
    }

}