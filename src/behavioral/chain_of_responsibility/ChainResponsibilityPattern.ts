export namespace ChainResponsibilityPattern {
    export interface Chain {
        setNext(chain: Chain): void;
        process(incomingRequest: IncomingRequest): void;
    }

    export class IncomingRequest {

        private numberReq: number;

        constructor(numberReq: number) {
            this.numberReq = numberReq;
        }

        public getNumber(): number {
            return this.numberReq;
        }
    }

    export class NegativeProcessor implements Chain {

        private nextInChain!: Chain;

        setNext(chain: Chain): void {
            this.nextInChain = chain;
        }

        process(incomingRequest: IncomingRequest): void {
            if (incomingRequest.getNumber() < 0) {
                console.log('NegativeProcessor : ' + incomingRequest.getNumber());
            } else {
                this.nextInChain.process(incomingRequest);
            }
        }
    }

    export class ZeroProcessor implements Chain {

        private nextInChain!: Chain;

        setNext(chain: Chain): void {
            this.nextInChain = chain;
        }

        process(incomingRequest: IncomingRequest): void {
            if (incomingRequest.getNumber() === 0) {
                console.log('ZeroProcessor : ' + incomingRequest.getNumber());
            } else {
                this.nextInChain.process(incomingRequest);
            }
        }
    }

    export class PositiveProcessor implements Chain {

        private nextInChain!: Chain;

        setNext(chain: Chain): void {
            this.nextInChain = chain;
        }

        process(incomingRequest: IncomingRequest): void {
            if (incomingRequest.getNumber() > 0) {
                console.log('PositiveProcessor : ' + incomingRequest.getNumber());
            } else {
                this.nextInChain.process(incomingRequest);
            }
        }
    }
}