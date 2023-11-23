// external imports
const express = require('express');
const app = express();
const http = require('http');

// express server creation
const expressServer = http.createServer(app);

// socket configuration
const {Server} = require('socket.io');

let io = new Server(expressServer);


// home route setup
app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
});

// socket connection check
io.on('connection', function (socket){
    socket.on('chat', function (msg){
        io.emit('chat_transfer', msg);
    });
});


// express server listening
expressServer.listen(3000, function (){
    console.log(`server running on 3000 port`);
});