var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 1337);

app.use(express.static('public'));

io.on('connection', function (socket) {

    socket.on('change-navigation', function (data) {

        socket.broadcast.emit('navigate-to', data);
    });
});
