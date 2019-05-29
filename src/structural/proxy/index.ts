import { ProxyPattern } from './ProxyPattern';

export namespace ProxyDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Proxy Pattern----------');
            let proxy: ProxyPattern.ProxyATMCards = new ProxyPattern.ProxyATMCards(),
                proxy1: ProxyPattern.ProxyATMCards = new ProxyPattern.ProxyATMCards(),
                proxy2: ProxyPattern.ProxyATMCards = new ProxyPattern.ProxyATMCards();

            proxy.cards('TPB');
            proxy1.cards('ACB');
            proxy2.cards('INVALID-CARDS_2');
            console.log('----------End Proxy Pattern----------');
        }
    }
}