const express = require('express');
const multer  = require('multer');
const upload = multer();
const mainRoute = require('./routes/mainRoute');

const server = express();

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(__dirname + '/public'));


const mongoose = require('mongoose');
const connect  = mongoose.connect('mongodb://127.0.0.1:27017/articles');


server.use('/', upload.none(), mainRoute);


server.listen(5000);