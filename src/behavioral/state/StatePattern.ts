export namespace StatePattern {
    export interface State {
        handle(stateContext: StateContext): void;
    }

    export class StartState implements State {

        handle(stateContext: StateContext): void {
            console.log('`handle` method of StartState is being called!');
            stateContext.State = new StatStop();
        }
    }

    export class StatStop implements State {

        handle(stateContext: StateContext): void {
            console.log('`handle` method of StatStop is being called!');
            stateContext.State = new StartState();
        }
    }

    export class StateContext {
        private state: State;

        constructor(state: State) {
            this.state = state;
        }

        get State(): State {
            return this.state;
        }

        set State(state: State) {
            this.state = state;
        }

        public doAction(): void {
            this.state.handle(this);
        }

    }
}