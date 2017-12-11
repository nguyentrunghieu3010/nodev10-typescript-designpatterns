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
    });

    let user = {
        userid: 'id-01',
        username: 'hugenguyen',
        useremail: 'hugenguyen@gmail.com',
        address: 'ho chi minh city'
    };

    redisClient.hset('users', user.userid, user);
    redisClient.hget('users', user.userid, (err, data) => {
        if (err)
            console.log("Run Hget Error: ", err);

        if (data)
            console.log("Run Hset Data ", data);
    });
}

function runIncrementingAndDecrementing(redisClient) {
    redisClient.set('key1', 10, () => {
        redisClient.incr('key1', (err, data) => {
            if (err)
                console.log("Run Incrementing And Decrementing Error: ", err);

            if (data)
                console.log("Run Incrementing And Decrementing Data ", data);
        });
    });


    redisClient.set('key2', 8, () => {
        redisClient.incrby('key2', 6, (err, data) => {
            if (err)
                console.log("Run Incrementing And Decrementing Error: ", err);

            if (data)
                console.log("Run Incrementing And Decrementing Data ", data);
        });
    });
}

function runAddNewUserJson(redisClient) {
    redisClient.sadd(['users', 'user:hieu']);
    redisClient.hmset('user:hieu', 'username', 'hieu', 'fpt', 'nodejs');

    redisClient.sadd('users', 'user:nguyen');
    redisClient.hmset('user:nguyen', 'username', 'nguyen', 'fpt', 'chatbot');

    redisClient.hgetall('user:hieu', (err, data) => {
        if (err)
            console.log("Run Add New User Error: ", err);

        if (data)
            console.log("Run Add New User Data ", data);
    });


    redisClient.hgetall('user:nguyen', (err, data) => {
        if (err)
            console.log("Run Add New User Error: ", err);

        if (data)
            console.log("Run Add New User Data ", data);
    });

    redisClient.exists('users', (err, data) => {
        console.log(data);
        if (data === 1) {
            console.log('Exists');
            redisClient.smembers('users', (err, data) => {
                console.log('Get all users: ', data);
            });
        } else {
            console.log('Dose not exists');
        }

    });
}


exports.runGetAndSet = redisClient => runGetAndSet(redisClient);
exports.runHmsetHgetall = redisClient => runHmsetHgetall(redisClient);
exports.runHsetHkeys = redisClient => runHsetHkeys(redisClient);
exports.runIncrementingAndDecrementing = redisClient => runIncrementingAndDecrementing(redisClient);
exports.runAddNewUserJson = redisClient => runAddNewUserJson(redisClient);