export namespace InterpreterDesignPattern {
    export interface Expression {
        interpret(context: string): boolean;
    }

    export class TermimalExpression implements Expression {

        private data: string;

        constructor(data: string) {
            this.data = data;
        }

        interpret(context: string): boolean {
            if (context === this.data) {
                return true;
            } else {
                return false;
            }
        }
    }

    export class OrExpression implements Expression {

        exp1: Expression;
        exp2: Expression;

        constructor(exp1: Expression, exp2: Expression) {
            this.exp1 = exp1;
            this.exp2 = exp2;
        }

        interpret(context: string): boolean {
            return this.exp1.interpret(context) || this.exp2.interpret(context);
        }
    }

    export class AndExpression implements Expression {

        exp1: Expression;
        exp2: Expression;

        constructor(exp1: Expression, exp2: Expression) {
            this.exp1 = exp1;
            this.exp2 = exp2;
        }

        interpret(context: string): boolean {
            return this.exp1.interpret(context) && this.exp2.interpret(context);
        }

    }

}