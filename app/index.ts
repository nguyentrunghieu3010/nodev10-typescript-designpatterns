function findTheShortestSequence(number) {
    let myArray = [number];
    let status = true;
    while (status) {
        let evenNum = number % 2;

        if (number == 1) {
            break;
        }

        if (evenNum == 0) {
            number = number / 2;
            myArray.push(number)
        } else if (evenNum == 1) { //Odd number
            number = number - 1;
            myArray.push(number);
        }
    }
    return myArray;
}


function findTheSmallestDistance() {
    let myArray = [8, 24, 3, 20, 1, 17];
    let myArrayTemp = [];
    for (let i = 0; i < myArray.length - 1; i++) {
        for (let j = myArray.length - 1; j >= 0; j--) {
            if (myArray[i] !== myArray[j]) {
                if (myArray[i] - myArray[j] >= 0) {
                    let number = myArray[i] - myArray[j];
                    myArrayTemp.push(number)
                }
            }
        }
    }
    return Math.min(...myArrayTemp);
}

console.log('findTheShortestSequence',findTheShortestSequence(17));
console.log(findTheSmallestDistance());