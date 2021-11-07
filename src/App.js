import "./App.css";
import socket from "./socket";
import { v4 as uuid } from "uuid";

function App() {
  // This is a system that guarentees you'll reconnect to the state
  // the game was in when you disconnected (Important for hot reloading)
  let localUUID = localStorage.getItem("uuid");
  if (!localUUID) {
    localUUID = uuid();
    localStorage.setItem("uuid", localUUID);
  }
  socket.emit("setUUID", localUUID);

  return (
    <div className="App">
      <div>{localUUID}</div>
    </div>
  );
}

export default App;
