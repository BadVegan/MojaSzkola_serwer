const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://root:root@cluster0-shard-00-00-ylbrm.mongodb.net:27017,cluster0-shard-00-01-ylbrm.mongodb.net:27017,cluster0-shard-00-02-ylbrm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

const groupsRoutes = require('./api/routes/groups');
//Enable All CORS Requests
app.use(cors());

//Logging
app.use(morgan('dev'));

//Parsing req body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Handle http requests
app.use('/groups', groupsRoutes);

//Handle path errors
app.use((req, res, next) => {
    const error = new Error('Not foudn path');
    error.status = 404;
    next(error);
});

//Handle other errors
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    });
});




module.exports = app;