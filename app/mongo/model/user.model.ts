const mongoose = require('mongoose');
const passportlocalmongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
    firstName: String,
});
UserSchema.plugin(passportlocalmongoose);
exports = mongoose.model('User', UserSchema);