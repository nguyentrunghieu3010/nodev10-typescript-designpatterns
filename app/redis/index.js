var redis = require('redis');
var client = redis.createClient();
client.on('connect', function () {
    console.log('Redis Client is Connect');
});
client.on('ready', function () {
    console.log('Redis Client is Ready');
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
