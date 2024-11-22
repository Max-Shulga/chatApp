import { Manager } from "socket.io-client";

const manager = new Manager(`https://trainee-api.chat.abcloudz.com`, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 3000,
  reconnectionAttempts: Infinity,
  transports: ["websocket"],
  query: {},
});

export const socket = manager.socket(`/api/v1/messages`);

socket.on("connect", () => {
  console.log("Connected to the socket. Status:", socket.connected);
});

socket.on("disconnect", () => {
  console.log("disconnect");
});
