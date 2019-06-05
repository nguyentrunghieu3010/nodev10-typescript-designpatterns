
import { VisitorPattern } from './VisitorPattern';

export namespace VistorDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Visitor Desgin Pattern----------');

            let shoppingCartClient: VisitorPattern.ShoppingCartClient = new VisitorPattern.ShoppingCartClient();
            shoppingCartClient.attach(new VisitorPattern.Book(5, 'bookid01'));
            shoppingCartClient.attach(new VisitorPattern.Fruit(10, 'Banana'));

            shoppingCartClient.operate(new VisitorPattern.ShoppingCartVisitor());

            console.log('----------Start Visitor Desgin Pattern----------');
        }
    }
}
