var canadianDollar = 0.91;
function roundTwo(amount) {
    return Math.round(amount * 100) / 100;
}
exports.canadianToUS = function (canadian) { return roundTwo(canadian * canadianDollar); };
exports.USToCanadian = function (us) { return roundTwo(us / canadianDollar); };
