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
    // let myArray = [8, 24, 3, 20, 1, 17];
    let myArray = [7, 21, 3, 42, 3, 7];
    let smallestArray = [];
    myArray.sort((a, b) => a - b);

    for (let i = 0; i < myArray.length; i++) {

        if (myArray[i] === myArray[i + 1]) {
            smallestArray.push(0);
        } else if (myArray[i] - myArray[i + 1] > 0) {
            let smallestNumber = myArray[i] - myArray[i + 1];
            smallestArray.push(smallestNumber);
        } else if (myArray[i] - myArray[i + 1] < 0) {
            let smallestNumber = myArray[i + 1] - myArray[i];
            smallestArray.push(smallestNumber);
        }
    }

    console.log(Math.min(...smallestArray));

}

console.log('findTheShortestSequence', findTheShortestSequence(17));
console.log(findTheSmallestDistance());