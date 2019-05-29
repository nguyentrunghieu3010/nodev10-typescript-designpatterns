export namespace ProxyPattern {
    export interface Banks {
        cards(type: string): void;
    }

    export class BankConnections implements Banks {
        cards(type: string): void {
            console.log('You are using card type is ', type, ' to withdraw money');
        }
    }

    export class ProxyATMCards implements Banks {

        private atmCards: string[] = ['TPB', 'ACB'];
        private bankConnections!: BankConnections;

        cards(type: string): void {
            if (this.bankConnections === null || this.bankConnections === undefined) {
                console.log('BankConnections created');
                this.bankConnections = new BankConnections();
            }

            if (this.atmCards.includes(type)) {
                this.bankConnections.cards(type);
            } else {
                console.error('You are in blacklist with bank type is ', type);
            }
        }
    }
}