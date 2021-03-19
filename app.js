const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods, POST,GET,PATCH,DELETE,PUT");
  res.setHeader("Access-Control-Allow-Header", "Content-Type,Authorization");
});

const server = app.listen("5000", () => {
  console.log("====================================");
  console.log("http://localhost:5000/");
});
console.log("start socketio");
const iofunc = require("socket.io");
const io = iofunc(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connection successfull");
  socket.join("notification");
  // let t = null;
  // const notification = {
  //   title: `We have frist Events ${new Date()}`,
  //   content: `we are taking code camp.its schedule on ${new Date()}`,
  // };
  // socket.emit("notification", notification);
  // if (t == null) {
  //   t = setTimeout(() => {
  //     const notification = {
  //       title: `We have new Events ${new Date()}`,
  //       content: `we are taking code camp.its schedule on ${new Date()}`,
  //     };
  //     socket.emit("notification", notification);
  //   }, 5000);
  // }
});
setTimeout(() => {
  const notification = {
    title: `We have new Events ${new Date()}`,
    content: `we are taking code camp.its schedule on ${new Date()}`,
  };
  io.emit("notification", notification);
}, 1000);

setTimeout(() => {
  const notification = {
    title: `We have newest notification ${new Date()}`,
    content: `we are taking code camp.its schedule on ${new Date()}`,
  };
  io.emit("notification", notification);
}, 20000);

// setTimeout(() => {
//   const notification = {
//     title: `We have new Events ${new Date()}`,
//     content: `we are taking code camp.its schedule on ${new Date()}`,
//   };
//   notificationSocket.emit("notification", notification);
// }, 5000);
