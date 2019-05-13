export namespace AdapterPattern {

    export class USAdaptee {
        public plugIn(): void {
            console.log('USAdaptee changed using THREE pin plug');
        }
    }

    export class EuropeAdaptee {
        public plugIn(): void {
            console.log('EuropeAdaptee changed using THREE pin plug');
        }
    }

    export interface VNPlug {
        convert(adapter: string): void;
    }

    export class VNAdapter implements VNPlug {
        convert(adapter: string): void {
            console.log('VNAdapter is using two pin plug');

            switch (adapter) {
                case 'US-AD': {
                    let adapteeUS: USAdaptee = new USAdaptee();
                    adapteeUS.plugIn();
                    break;
                }
                case 'EUROPE-AD': {
                    let adapteeEurope: EuropeAdaptee = new EuropeAdaptee();
                    adapteeEurope.plugIn();
                    break;
                }
                default: {
                    console.error('There is no Adapter');
                    break;
                }
            }
        }
    }
}