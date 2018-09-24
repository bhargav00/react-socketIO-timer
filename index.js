var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
io.on('connection', (socket) => {
    socket.on('startTimer', (timerValue) => {
        let timer = setInterval(() => {
            socket.emit('timer', timerValue--);
            if (timerValue == -1){
                clearInterval(timer);
            }
          }, 1000);
    });
});
server.listen(5000, () => {
	console.log("Backend Server is running on http://localhost:5000");
});