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

exports.sortASC = sortASC();
exports.sortDESC = sortDESC();
exports.test01 = test01();
exports.reverseWordOrder = string => reverseWordOrder(string);