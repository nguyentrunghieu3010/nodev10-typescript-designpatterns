import { DecoratorPattern } from './DecoratorPattern';

export namespace DecoratorDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Decorator Pattern----------');
            let decorator: DecoratorPattern.FacebookNotification =
                new DecoratorPattern.ChannelNotificationDecorator(new DecoratorPattern.FacebookNotification);
            decorator.notify();
            console.log('----------End Decorator Pattern----------');
        }
    }
}