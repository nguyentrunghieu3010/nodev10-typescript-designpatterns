// var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
var cloud = true;

var mongodbHost = '127.0.0.1';
var mongodbPort = '27017';

var authenticate = '';
//cloud
if (cloud) {
    mongodbHost = '@ds231749.mlab.com';
    mongodbPort = '31749';
    authenticate = 'user-tctav:password-tctav'
}

var mongodbDatabase = 'tctav';

// connect string for mongodb server running locally, connecting to a database called test
var url = 'mongodb://' + authenticate + mongodbHost + ':' + mongodbPort + '/' + mongodbDatabase;

mongoose.connect(url);

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

mongoose.connection.on('open', (success) => {
    console.log('Connected to mongo server');

    const teamSchema = new mongoose.Schema({
        country: String,
        GroupName: String
    });

    const Team = mongoose.model('Team', teamSchema);

    Team.find((err, data) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            mongoose.connection.close();
            console.log('Data: ', data);
        }
    });

});