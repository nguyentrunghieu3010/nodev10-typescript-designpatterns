const mongoose = require('mongoose');

// global.rootPath = __dirname;
// const user = require(global.rootPath + '/model/user.model');

mongoose.connect('mongodb://localhost/mydbproject');

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