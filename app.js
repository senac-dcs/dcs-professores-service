const express = require('express');
const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");

var cors = require('cors');
const professorRouter = require('./routes/professorRoute');
const dbs = require('./configs/dbs');

const options = {
  definition: {
    info: {
      title: 'Professor Serviço',
      description: 'Serviço professor para a cadeira da aula no senac',
      contact:{
        name:"André Luis da Silveira"
      }
    },
    servers:["http://localhost:3000"]
  },
  // Path to the API docs
  apis: ['./routes/professorRoute.js']
};

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Requested-With, Accept');
  next();
});

const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', professorRouter);

dbs.connect;
app.set('port', 3000);

module.exports = app;