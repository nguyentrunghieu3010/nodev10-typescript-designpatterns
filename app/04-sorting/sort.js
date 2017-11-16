function sortASC() {
    var myArray = [10, 4, 2, 5, 6];
    var isMyArray = Array.isArray(myArray);
    return isMyArray ? myArray.sort(function (a, b) { return a - b; }) : 0;
}
function sortDESC() {
    var myArray = [10, 4, 2, 5, 6];
    var isMyArray = Array.isArray(myArray);
    return isMyArray ? myArray.sort(function (a, b) { return b - a; }) : 0;
}
function reverseWordOrder(string) {
    return string.split(' ').reverse().join(' ');
}
function test01() {
    var sum = 0;
    var nbArgs = process.argv.length;
    for (var i = 0; i < nbArgs; i++) {
        sum += Number(process.argv[i]);
    }
    return sum;
}
function mergeTwoArrayInOrde(array1, array2) {
    var myArray = [];
    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] < array2[0]) {
            myArray.push(array1.shift());
        }
        else {
            myArray.push(array2.shift());
        }
    }
    return myArray.concat(array1).concat(array2);
}
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var middle = Math.floor(array.length / 2);
    return mergeTwoArrayInOrde(mergeSort(array.slice(0, middle)), mergeSort(array.slice(0, middle)));
}
exports.sortASC = sortASC();
exports.sortDESC = sortDESC();
exports.test01 = test01();
exports.mergeSort = function (array) { return mergeSort(array); };
exports.reverseWordOrder = function (string) { return reverseWordOrder(string); };
exports.mergeTwoArrayInOrde = function (array1, array2) { return mergeTwoArrayInOrde(array1, array2); };
