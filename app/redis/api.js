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
    var dataValue1 = "Java Language";
    redisClient.set(dataKey, dataValue1);
    redisClient.get(dataKey, function (err, data) {
        if (err)
            console.log("Error:", err);
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
function runHsetHkeys(redisClient) {
    var dataKey = "tools";
    var dataValue1 = {
        "webserver": "expressjs",
        "database": "mongoDB",
        "devops": "jenkins"
    };
    var dataValue2 = {
        "webserver2": "expressjs 2",
        "database2": "mongoDB 2",
        "devops2": "jenkins 2"
    };
    redisClient.hset(dataKey, dataValue1);
    redisClient.hset(dataKey, dataValue2);
    redisClient.hkeys(dataKey, function (err, data) {
        if (err)
            console.log("Error: ", err);
        if (data)
            data.forEach(function (resp, i) {
                console.log(" " + i + ": " + resp);
            });
        redisClient.quit();
    });
}
exports.runGetAndSet = function (redisClient) { return runGetAndSet(redisClient); };
exports.runHmsetHgetall = function (redisClient) { return runHmsetHgetall(redisClient); };
exports.runHsetHkeys = function (redisClient) { return runHsetHkeys(redisClient); };
