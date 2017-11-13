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

exports.sortASC = sortASC();
exports.sortDESC = sortDESC();
exports.reverseWordOrder = string => reverseWordOrder(string);