var mongoose = require('mongoose');

//var url = 'mongodb://localhost:27017/dcs'
const url = MongoDB_URL;
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log('Connected to MongoDB Database.')
});

mongoose.connect(url,{useUnifiedTopology: true,useNewUrlParser: true});

db.on('connected', function(){console.log('Connected to MongoDB! URL => '+ url);});

db.on('disconnected', function() {console.log('MongoDB connection disconnected');});