var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var professorSchema = new Schema({
    registration:{
        type: Number,
        required:[true, "Cannot be blank"],
        match: [/[0-9]/g,'Field invalid']
    },
    name: {
        type: String, 
        lowercase: true, 
        required: [true, "Cannot be blank"], 
        match: [/^[a-zA-Z0-9]+$/, 'Field invalid']

    },
    email: {
        type: String,
         lowercase: true, 
         required: [true, "Cannot be blank"], 
         match: [/\S+@\S+\.\S+/, 'Field invalid']
    },
    telephone: String,
    birth_date: Date,
    address: String
});

module.exports = mongoose.model("professor",professorSchema);