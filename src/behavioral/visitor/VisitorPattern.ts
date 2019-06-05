export namespace VisitorPattern {
    export interface ItemElement {
        accept(visitor: ShoppingCartVisitor): void;
    }

    export class Book implements ItemElement {

        private price: number;
        private isbnNumber: string;

        constructor(price: number, isbnNumber: string) {
            this.price = price;
            this.isbnNumber = isbnNumber;
        }

        public getPrice(): number {
            return this.price;
        }

        public getIsbnNumber(): string {
            return this.isbnNumber;
        }

        accept(visitor: ShoppingCart): number {
            return visitor.visitBook(this);
        }
    }

    export class Fruit implements ItemElement {

        private price: number;
        private name: string;

        constructor(price: number, name: string) {
            this.price = price;
            this.name = name;
        }

        public getPrice(): number {
            return this.price;
        }

        public getName(): string {
            return this.name;
        }

        accept(visitor: ShoppingCart): number {
            return visitor.visitFruit(this);
        }
    }

    export interface ShoppingCart {
        visitBook(book: Book): number;
        visitFruit(fruit: Fruit): number;
    }

    export class ShoppingCartVisitor implements ShoppingCart {

        visitBook(book: Book): number {
            let cost: number;
            if (book.getPrice() > 50) {
                cost = book.getPrice() - 5;
            } else {
                cost = book.getPrice();
            }
            console.log('Book ISBN is ', book.getIsbnNumber(), ' cost =', cost);
            return cost;
        }

        visitFruit(fruit: Fruit): number {
            let cost = fruit.getPrice();
            console.log('Fruit name is ', fruit.getName(), ' cost =', cost);
            return cost;
        }
    }

    export class ShoppingCartClient {
        private itemElements: ItemElement[] = [];

        public attach(itemElement: ItemElement): void {
            this.itemElements.push(itemElement);
        }

        public detach(itemElement: ItemElement): void {
            let index = this.itemElements.indexOf(itemElement);
            this.itemElements.splice(index, 1);
        }

        public operate(visitor: ShoppingCartVisitor): void {
            let i = 0, max = this.itemElements.length;
            for (; i < max; i++) {
                this.itemElements[i].accept(visitor);
            }
        }
    }
}