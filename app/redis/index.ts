const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
    console.log('Redis Client is Connect');
});

client.on('ready', () => {
    console.log('Redis Client is Ready');
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