import io from "socket.io-client";

// Send request to server to login a user
export const login = async (user) => {
  const url = "/auth/login";
  // Create request
  const request = new Request(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  // Send request
  try {
    const res = await fetch(request);
    if (res.ok) {
      const userData = await res.json();
      if (userData !== undefined) {
        return userData;
      } else {
        return Promise.reject(new Error("Login Response Empty"));
      }
    } else {
      if (res.status === 401) {
        return Promise.reject(new Error("credentials"));
      }
      return Promise.reject(new Error("Internal Server Error"));
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

// Connect to general websocket
export const connectSocket = (uid) => {
  const socket = io({
    reconnection: false,
    transportOptions: { withCredentials: true },
  });
  socket.on("connect", () => {
    console.log("[SOCKET] Connected");
    socket.emit("goOnline", uid);
    console.log("[SOCKET] User Online");
  });
  socket.on("connect_error", () => {
    console.error("[SOCKET] Connection refused");
  });
};
