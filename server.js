var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server.lastPlayderID = 0;

server.listen(process.env.PORT || 8080,function(){
    console.log('Listening on '+server.address().port);
});

io.on('connection',function(socket){
    console.log("Welcome Player")

    socket.on('newplayer',function(){
        socket.player = {
            id: server.lastPlayderID++,
            x: randomInt(100,400),
            y: randomInt(100,400)
        };
    
    console.log(socket.player.id)
    console.log(socket.player.x)
    console.log(socket.player.y)
    
    //Game.addNewPlayer(socket.player.id, socket.player.x, socket.player.y)
    socket.emit('me',socket.player);
    socket.broadcast.emit('newplayer',socket.player);
//
        socket.on('click',function(data){
            console.log('click to '+data.x+', '+data.y);
            socket.player.x = data.x;
            socket.player.y = data.y;
            io.emit('move',socket.player);
        });
//
        socket.on('disconnect',function(){
            io.emit('remove',socket.player.id);
        });
    });

    socket.on('test',function(){
        console.log('test received');
    });
});

function getAllPlayers(){
    var players = [];

    var clients = io.clients((error, clients) => {
        if (error) throw error;
        console.log(clients); // => [6em3d4TJP8Et9EMNAAAA, G5p55dHhGgUnLUctAAAB]
      });

    console.log("yo bitches" + clients)
    
    //Object.keys(clients).forEach(function(socketID){
    //    var player = io.sockets.clients[socketID].player;
    //    if(player) players.push(player);
    //});
    return players;
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
