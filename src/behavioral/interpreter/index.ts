import { InterpreterDesignPattern } from './InterpreterDesignPattern';

export namespace InterpreterDemo {
    export function execute(flag: boolean): void {
        if (flag) {
            console.log('----------Start Interpreter Pattern----------');
            let person1: InterpreterDesignPattern.Expression = new InterpreterDesignPattern.TermimalExpression('Hieu');
            let person2: InterpreterDesignPattern.Expression = new InterpreterDesignPattern.TermimalExpression('Tam');
            let isSingle: InterpreterDesignPattern.Expression = new InterpreterDesignPattern.OrExpression(person1, person2);


            let person3: InterpreterDesignPattern.Expression = new InterpreterDesignPattern.TermimalExpression('Loan');
            let person4: InterpreterDesignPattern.Expression = new InterpreterDesignPattern.TermimalExpression('Kien');
            let isCommitted: InterpreterDesignPattern.Expression = new InterpreterDesignPattern.OrExpression(person3, person4);


            console.log('Hieu isSingle ::', isSingle.interpret('Hieu'));
            console.log('Tam isSingle ::', isSingle.interpret('Tam'));

            console.log('Loan isCommitted ::', isCommitted.interpret('Loan'));
            console.log('Kien isCommitted ::', isCommitted.interpret('Tam'));

            console.log('----------End Interpreter Pattern----------');
        }
    }
}