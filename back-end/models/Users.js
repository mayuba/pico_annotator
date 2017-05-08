var mongoose = require('mongoose');


module.exports = mongoose.model('User', {
    name: String,
    firstName: String,
    email: String,
    pwd: String

});