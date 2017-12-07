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


    let dataValue1 = "Java Language";
    redisClient.set(dataKey, dataValue1);
    redisClient.get(dataKey, (err, data) => {
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

function runHsetHkeys(redisClient) {

    let dataKey = "tools";
    let dataValue1 = {
        "webserver": "expressjs",
        "database": "mongoDB",
        "devops": "jenkins"
    };

    let dataValue2 = {
        "webserver2": "expressjs 2",
        "database2": "mongoDB 2",
        "devops2": "jenkins 2"
    }

    redisClient.hset(dataKey, dataValue1);
    redisClient.hset(dataKey, dataValue2);

    redisClient.hkeys(dataKey, (err, data) => {
        if (err)
            console.log("Error: ", err);

        if (data)
            data.forEach((resp, i) => {
                console.log(" " + i + ": " + resp);
            });

        redisClient.quit();
    });
}

exports.runGetAndSet = redisClient => runGetAndSet(redisClient);
exports.runHmsetHgetall = redisClient => runHmsetHgetall(redisClient);
exports.runHsetHkeys = redisClient => runHsetHkeys(redisClient);