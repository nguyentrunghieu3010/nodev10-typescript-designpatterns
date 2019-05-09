

import { AdapterPattern } from './AdapterPattern';

export namespace AdapterDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Adapter Factory----------');
            let adapter: AdapterPattern.VNAdapter = new AdapterPattern.VNAdapter();
            adapter.plugIn();
            console.log('----------End Adapter Factory----------');
        }
    }
}