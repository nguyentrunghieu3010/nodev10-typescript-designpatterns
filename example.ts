const canadianDollar = 0.91;

function roundTwo(amount) {
    return Math.round(amount * 100) / 100;
}

let temp = canadian => roundTwo(canadian * canadianDollar);

console.log(temp(10));