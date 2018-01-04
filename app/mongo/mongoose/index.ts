import mongoose from 'mongoose';

exports.executeMongoose = () => {
    mongoose.connect('mongodb://localhost/mydbproject');

    mongoose.connection.on('error', (err) => {
        console.error(`MongoDB connection error: ${err}`);
        process.exit(-1);
    });
}

