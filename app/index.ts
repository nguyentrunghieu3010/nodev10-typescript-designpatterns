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

console.log(findTheShortestSequence(17));