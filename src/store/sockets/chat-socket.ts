import { Manager } from "socket.io-client";
import api from "@/common/api";
import RouteVersion from "@/routes/routes-version-enum";
import RoutesNames from "@/routes/routes-names";

const manager = new Manager(`${api.baseURL}`, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 3000,
  reconnectionAttempts: Infinity,
  transports: ["websocket"],
  query: {},
});

export const socket = manager.socket(
  `/${RouteVersion.V1}/${RoutesNames.MESSAGES}`,
);

socket.on("connect", () => {
  console.log("Connected to the socket. Status:", socket.connected);
});

socket.on("disconnect", () => {
  console.log("disconnect");
});
