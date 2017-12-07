function runGetAndSet(redisClient) {
    /*
        To store a simple String.
     */
    var dataKey = "language";
    var dataValue = "nodejs";
    redisClient.set(dataKey, dataValue);
    redisClient.get(dataKey, function (err, data) {
        if (err)
            console.log("Error: ", err);
        if (data)
            console.log("Run Get And Set Success response data: ", data);
    });
}
function runHmsetHgetall(redisClient) {
    /*
        To store Object Hash
    */
    var dataKey = "tools";
    var dataValue = {
        "webserver": "expressjs",
        "database": "mongoDB",
        "devops": "jenkins"
    };
    redisClient.hmset(dataKey, dataValue);
    redisClient.hgetall(dataKey, function (err, data) {
        if (err)
            console.log("Error: ", err);
        if (data)
            console.log("Run hmset And hgetall Success response data: ", data);
    });
}
exports.runGetAndSet = function (redisClient) { return runGetAndSet(redisClient); };
exports.runHmsetHgetall = function (redisClient) { return runHmsetHgetall(redisClient); };
