var redis = require('redis');
var client = redis.createClient();
var api = require('./api');
client.on('connect', function () {
    console.log('Redis Client is Connect');
});
client.on('ready', function () {
    console.log('Redis Client is Ready');
    api.runGetAndSet(client);
    api.runHmsetHgetall(client);
    api.runHsetHkeys(client);
    api.runIncrementingAndDecrementing(client);
    api.runAddNewUserJson(client);
});
client.on('reconnecting', function () {
    console.log('Redis Client is Reconnecting');
});
client.on('error', function () {
    console.log('Redis Client is Error');
});
client.on('end', function () {
    console.log('Redis Client is End');
});
