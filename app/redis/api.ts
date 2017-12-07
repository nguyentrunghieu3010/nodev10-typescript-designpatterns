function runGetAndSet(redisClient) {
    /*
        To store a simple String.
     */
    let dataKey = "language";
    let dataValue = "nodejs";

    redisClient.set(dataKey, dataValue);

    redisClient.get(dataKey, (err, data) => {
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

    let dataKey = "tools";
    let dataValue = {
        "webserver": "expressjs",
        "database": "mongoDB",
        "devops": "jenkins"
    }

    redisClient.hmset(dataKey, dataValue);

    redisClient.hgetall(dataKey, (err, data) => {
        if (err)
            console.log("Error: ", err);

        if (data)
            console.log("Run hmset And hgetall Success response data: ", data);
    });


}

exports.runGetAndSet = redisClient => runGetAndSet(redisClient);
exports.runHmsetHgetall = redisClient => runHmsetHgetall(redisClient);