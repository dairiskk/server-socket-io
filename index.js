const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {

    cors: {
        origin: "http://localhost:3000"
    }
});



io.on('connection', function (socket) {
    console.log(socket.id)
    io.emit('send-back-message', "welcome: "+socket.id)
    socket.on('send-message-all', (msg) => {
        console.log(msg)
        io.emit('send-back-message', msg)
    })
})

io.listen(4000);