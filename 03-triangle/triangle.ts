let arrNumbers = [
    [10, 2, 5, 1, 8, 20],
    [10, 50, 5, 1],
    [-3, 1, 2, -2, 5, 6],
    [1, 2, 3, 4, 5],
    [3, 1, 2, 4, 3],
    [5, 3, 2, 1],
    [3, 1, 4, 2],
    [5, 4, 3, 2],
    [-3, -1],
    [-1000, 1000]
];

function solution(obj) {
    obj.sort((a, b) => a - b);

    for (let i = 0; i < obj.length - 2; i++) {
        if (obj[i] + obj[i + 1] > obj[i + 2]) {
            return 1;
        }
    }
    return 0;
}

for (number of arrNumbers) {
    console.log(`input: ${number}, output: ${solution(number)}`)
}