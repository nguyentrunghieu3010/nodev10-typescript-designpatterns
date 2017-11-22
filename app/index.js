function findTheShortestSequence(number) {
    var myArray = [number];
    var status = true;
    while (status) {
        var evenNum = number % 2;
        if (number == 1) {
            break;
        }
        if (evenNum == 0) {
            number = number / 2;
            myArray.push(number);
        }
        else if (evenNum == 1) {
            number = number - 1;
            myArray.push(number);
        }
    }
    return myArray;
}
console.log(findTheShortestSequence(17));
