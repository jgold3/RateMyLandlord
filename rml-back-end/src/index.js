// ./src/index.js

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require("mongoose");
require('dotenv').config();

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// connect mongodb to local machine 
mongoose.connect(`mongodb+srv://rmlDbAdmin:${process.env.MONGODB_PASSWORD}@rml-cluster.cly106p.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log("connection successful");
  })
  .catch((er) => console.log(er));


// starting the server
app.listen(3000, () => {
  console.log('listening on port 3000');
});