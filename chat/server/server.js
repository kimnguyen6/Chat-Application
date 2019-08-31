const express = require('express')
const app = express();
const fs = require('fs');
//const cors = require('http').Server(app);
//const io = require('socket.io')(http);
//const sockets = require('.sockets/js');
const server = require('./listen.js');
var bodyParser = require('body-parser');

const PORT = 3000

//app.use(cors());

//sockets.connect(io, PORT)

//server.listen(http, PORT);

//require('route.js')(app, path);

let users;
fs.readFile('data.json', (error, data) =>{
    if(error) throw error;
    users = JSON.parse(data);
    console.log(users)
})