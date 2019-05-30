import { ChainResponsibilityPattern } from './ChainResponsibilityPattern';

export namespace ChainResponsibilityDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Chain Responsibility Pattern----------');
            let negativeProcessor: ChainResponsibilityPattern.Chain = new ChainResponsibilityPattern.NegativeProcessor();

            let positiveProcessor: ChainResponsibilityPattern.Chain = new ChainResponsibilityPattern.PositiveProcessor();

            let zeroProcessor: ChainResponsibilityPattern.Chain = new ChainResponsibilityPattern.ZeroProcessor();

            negativeProcessor.setNext(positiveProcessor);
            positiveProcessor.setNext(zeroProcessor);

            let imcomingRequest: ChainResponsibilityPattern.IncomingRequest[] =
                [
                    new ChainResponsibilityPattern.IncomingRequest(10),
                    new ChainResponsibilityPattern.IncomingRequest(0),
                    new ChainResponsibilityPattern.IncomingRequest(-7)
                ];

            imcomingRequest.forEach((item) => {
                negativeProcessor.process(item);
            });

            console.log('----------End Chain Responsibility Pattern----------');
        }
    }
}