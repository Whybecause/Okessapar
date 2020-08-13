// let interval; 

// const socket = io => {
//   io.on('connection', socket => {
//     console.log('new client connected');
//     if (interval) {
//       clearInterval(interval);
//     }
//     interval = setInterval( () => getApiAndEmit(socket), 1000);
//     socket.on('disconnect', () => {
//       console.log('client disconnected');
//       clearInterval(interval);
//     });
//   });

//   const getApiAndEmit = socket => {
//     const response = new Date();
//     socket.emit('FromAPI', response);
//   };
// }

// module.exports = socket;
