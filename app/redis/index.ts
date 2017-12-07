const redis = require('redis');
const client = redis.createClient();
const api = require('./api');

client.on('connect', () => {
    console.log('Redis Client is Connect');
});

client.on('ready', () => {
    console.log('Redis Client is Ready');

    api.runGetAndSet(client);
    api.runHmsetHgetall(client);
});

client.on('reconnecting', () => {
    console.log('Redis Client is Reconnecting');
});

client.on('error', () => {
    console.log('Redis Client is Error');
});

client.on('end', () => {
    console.log('Redis Client is End');
});