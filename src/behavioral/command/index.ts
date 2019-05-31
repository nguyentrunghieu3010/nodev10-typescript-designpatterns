import { CommandPattern } from './CommandPattern';

export namespace CommandDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Command Pattern----------');
            let remote: CommandPattern.SimpleRemoteControll = new CommandPattern.SimpleRemoteControll();

            let light: CommandPattern.Light = new CommandPattern.Light();

            remote.setCommand(new CommandPattern.LightOnCommand(light));
            remote.buttonWasPressed();

            remote.setCommand(new CommandPattern.LightOffCommand(light));
            remote.buttonWasPressed();

            console.log('----------End Command Pattern----------');
        }
    }
}