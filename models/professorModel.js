var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var professorSchema = new Schema({
    registration: Number,
    name: String,
    email: String,
    telephone: String,
    birth_date: Date,
    address: String
});

module.exports = mongoose.model("professor",professorSchema);