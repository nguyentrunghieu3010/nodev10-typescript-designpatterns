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
function findTheSmallestDistance() {
    var myArray = [8, 24, 3, 20, 1, 17];
    var myArrayTemp = [];
    for (var i = 0; i < myArray.length - 1; i++) {
        for (var j = myArray.length - 1; j >= 0; j--) {
            if (myArray[i] !== myArray[j]) {
                if (myArray[i] - myArray[j] >= 0) {
                    var number = myArray[i] - myArray[j];
                    myArrayTemp.push(number);
                }
            }
        }
    }
    return Math.min.apply(Math, myArrayTemp);
}
console.log('findTheShortestSequence', findTheShortestSequence(17));
console.log(findTheSmallestDistance());
