import mongoose from 'mongoose';
// const mongoose = require('mongoose'); Node > v8

mongoose.connect('mongodb://localhost/mydbproject');

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

mongoose.connection.on('open', (success) => {
    console.log('Connected to mongo server');
})
