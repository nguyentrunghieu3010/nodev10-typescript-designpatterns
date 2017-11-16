function sortASC() {
    let myArray = [10, 4, 2, 5, 6];
    let isMyArray = Array.isArray(myArray);
    return isMyArray ? myArray.sort((a, b) => a - b) : 0;
}

function sortDESC() {
    let myArray = [10, 4, 2, 5, 6];
    let isMyArray = Array.isArray(myArray);
    return isMyArray ? myArray.sort((a, b) => b - a) : 0;
}

function reverseWordOrder(string) {
    return string.split(' ').reverse().join(' ');

}

function test01() {
    let sum = 0;
    let nbArgs = process.argv.length;
    for (let i = 0; i < nbArgs; i++) {
        sum += Number(process.argv[i]);
    }
    return sum;
}


function mergeTwoArrayInOrde(array1, array2) {
    let myArray = [];
    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] < array2[0]) {
            myArray.push(array1.shift());
        } else {
            myArray.push(array2.shift());
        }
    }
    return myArray.concat(array1).concat(array2);
}


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    return mergeTwoArrayInOrde(mergeSort(array.slice(0, middle)), mergeSort(array.slice(0, middle)));
}

exports.sortASC = sortASC();
exports.sortDESC = sortDESC();
exports.test01 = test01();
exports.mergeSort = array => mergeSort(array);
exports.reverseWordOrder = string => reverseWordOrder(string);
exports.mergeTwoArrayInOrde = (array1, array2) => mergeTwoArrayInOrde(array1, array2);