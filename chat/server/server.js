const express = require('express')
const app = express();
const cors = require('http').Server(app);
//const io = require('socket.io')(http);
//const sockets = require('.sockets/js');
const server = require('./listen.js');
var bodyParser = require('body-parser');

const PORT = 3000

app.use(cors());

//sockets.connect(io, PORT)

server.listen(http, PORT);

require('route.js')(app, path);