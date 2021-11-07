import { io } from "socket.io-client";
const socket = io("http://localhost:4000/");

socket.on("heartbeat", () => {
  console.log("Heart Beat");
});

export default socket;
