export namespace CommandPattern {
    export interface Command {
        execute(): void;
    }

    export class Light {
        on(): void {
            console.log('Light is on');
        }

        off(): void {
            console.log('Light is off');
        }
    }

    export class LightOnCommand implements Command {

        light: Light;

        constructor(light: Light) {
            this.light = light;
        }

        execute(): void {
            this.light.on();
        }
    }

    export class LightOffCommand implements Command {

        light: Light;

        constructor(light: Light) {
            this.light = light;
        }

        execute(): void {
            this.light.off();
        }
    }

    export class SimpleRemoteControll {
        private command!: Command;

        setCommand(command: Command): void {
            this.command = command;
        }

        buttonWasPressed(): void {
            this.command.execute();
        }

    }
}