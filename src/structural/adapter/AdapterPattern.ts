export namespace AdapterPattern {

    export class USAdapter {
        public plugInUS(): void {
            console.log('USAdapter changed using THREE pin plug');
        }
    }

    export interface VNPlug {
        plugIn(): void;
    }

    export class VNAdapter implements VNPlug {
        plugIn(): void {
            console.log('VNAdapter is using two pin plug');
            let adapter: USAdapter = new USAdapter();
            adapter.plugInUS();
        }
    }
}