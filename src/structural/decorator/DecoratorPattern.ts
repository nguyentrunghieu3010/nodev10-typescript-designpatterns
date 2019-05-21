export namespace DecoratorPattern {

    export interface Notification {
        notify(): void;
    }

    export class FacebookNotification implements Notification {
        notify(): void {
            console.log('This is the Facebook Notfication');
        }
    }

    export class SkypeNotification implements Notification {
        notify(): void {
            console.log('This is the Facebook Notfication');
        }
    }

    export abstract class BaseNotificationDecorator implements Notification {

        private notification: Notification;

        constructor(notification: Notification) {
            this.notification = notification;
        }

        notify(): void {
            this.notification.notify();
        }
    }

    export class ChannelNotificationDecorator extends BaseNotificationDecorator {

        constructor(notification: Notification) {
            super(notification);
        }

        notify(): void {
            console.log('There are some Channels Notfication');
            super.notify();
        }
    }
}