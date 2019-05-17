## Write Simple Program Apply Desgin Principles and Desigin Patterns

+, plus (addition)
−, minus (subtraction)
÷, obelus (division)
×, times (multiplication)

Input 2 numbers

CASE 01:
    Calculator calculatorApp = Demo.Calculator(number_1, number_2);
    calculatorApp.add();
    calculatorApp.sub();
    calculatorApp.div();
    calculatorApp.mul();

 CASE 02:
    Calculator calculatorApp = Demo.Calculator(number_1, number_2).add();
    Calculator calculatorApp = Demo.Calculator(number_1, number_2).sub();
    Calculator calculatorApp = Demo.Calculator(number_1, number_2).div();
    Calculator calculatorApp = Demo.Calculator(number_1, number_2).mul();
       
CASE 03:
    Calculator calculatorApp = Demo.Calculator(number_1, number_2);

    calculatorApp.operationType(MathType.ADD);
    calculatorApp.operationType(MathType.SUB);
    calculatorApp.operationType(MathType.DIV);
    calculatorApp.operationType(MathType.MUL);