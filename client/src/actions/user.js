import io from "socket.io-client";

// Helper to request user data / login current user
const requestUser = async (request) => {
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

// Send request to server to login a user
export const login = async (user) => {
  const url = "/api/auth/login";
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
  return await requestUser(request);
};

// Send request to server to logout user
export const logout = async () => {
  const url = "/api/auth/logout";
  // Create request
  const request = new Request(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  // Send request
  return await fetch(request);
};

// Check if user session is still valid, return id if valid
export const checkSession = async () => {
  const url = "/api/auth/check-session";
  // Create request
  const request = new Request(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  // Send request
  try {
    const res = await fetch(request);
    if (res.ok) {
      return (await res.json()).id;
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

// Get data for current user
export const getUser = async (userID) => {
  const url = `/api/users/${userID}`;
  // Create request
  const request = new Request(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  // Send request
  return await requestUser(request);
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
