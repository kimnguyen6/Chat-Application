const express = require('express')
const app = express();
const fs = require('fs');
const cors = require('cors');
//const io = require('socket.io')(http);
//const sockets = require('.sockets/js');
//const server = require('./listen.js');
var http = require('http').Server(app);
const path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../dist/chat')));
app.use(bodyParser.json());

const PORT = 3000

app.use(cors());

// Testing connection
let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on: " + host + " port: " + port);
});

//sockets.connect(io, PORT)

//server.listen(http, PORT);

//require('route.js')(app, path);

app.get('/api/user', (req, res) => {
    const username = req.query.username;
    console.log('GET request at /api/user');
});

// Read users in database
let users;
fs.readFile('data.json', (error, data) =>{
    if(error) throw error;
    users = JSON.parse(data);
    console.log(users)
})