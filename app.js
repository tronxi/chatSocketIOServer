var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname));

server.listen(5000, function() {
	console.log('Servidor corriendo en http://localhost:5000');
});
app.get('/', (req, res) => 
{
    res.send('Servidor webChat funcionando');
});
io.on('connect', function(socket) {
    console.log('Un cliente se ha conectado');
    socket.on('new-message', function(socket) {
        console.log(socket);
        io.sockets.emit('message', socket);
    });
});
