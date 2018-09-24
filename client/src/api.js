import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

function startTimer(timerValue,cb ){
    socket.on('timer', timestamp => cb(timestamp));
    socket.emit('startTimer', timerValue);
}
export { startTimer };
