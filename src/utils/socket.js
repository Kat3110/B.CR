import { io } from "socket.io-client";

export function getSocket(projectId) {
  const socket = io("http://15.164.251.83:8000", {
    transports: ["websocket"],
    query: {
      roomId: projectId,
    },
  });

  return socket;
}
