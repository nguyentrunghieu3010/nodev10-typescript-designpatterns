const sort = require('./sort');

console.log(sort.sortASC);

console.log(sort.sortDESC);

console.log(sort.reverseWordOrder('hieu nguyen trung'));

console.log('Run test01: ', sort.test01);


let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8];
console.log('Meerge array1 array2:', sort.mergeTwoArrayInOrde(array1, array2));

let array = [1, 3, 5, 7, 9];
console.log('Meerge array:', sort.mergeSort(array));