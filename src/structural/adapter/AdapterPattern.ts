export namespace AdapterPattern {

    export class USAdaptee {
        public plugInUS(): void {
            console.log('USAdapter changed using THREE pin plug');
        }
    }

    export interface VNPlug {
        convert(): void;
    }

    export class VNAdapter implements VNPlug {
        convert(): void {
            console.log('VNAdapter is using two pin plug');
            let adaptee: USAdaptee = new USAdaptee();
            adaptee.plugInUS();
        }
    }
}