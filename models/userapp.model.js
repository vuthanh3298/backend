var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    phone: String,
    address: String
});

var User = mongoose.model('User', userSchema, 'userapp');

module.exports = User;