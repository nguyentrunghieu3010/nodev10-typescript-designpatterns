const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// const path = require('path');
// const rootPath = path.dirname(require.main.filename);
// console.log(rootPath);

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydbproject';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
});