// AbortController for request timeout abort signalling
const AbortController = require("abort-controller");
// Fetch API for Node
const fetch = require("node-fetch");
// URL of the backend API to make requests to
const { API_URL } = require("../server");
/*
 Make a POST request to the backend API at a given route.
 Returns the parsed response body on success, or null otherwise
 */
const apiRequest = async (body, apiRoute) => {
  // Wait 10 seconds for request
  const API_TIMEOUT = 10 * 1000;
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, API_TIMEOUT);
  // Create request using body and route provided
  const request = new fetch.Request(API_URL + apiRoute, {
    signal: controller.signal,
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  // Send request
  try {
    // Make request to API backend server
    const apiRes = await fetch(request);
    // Parse response as json
    const body = await apiRes.json();
    // Empty response
    if (!body) {
      return null;
    }
    return body;
  } catch (e) {
    // Request failed
    if (e.name === "AbortError") {
      console.error(
        `[API] Backend API request at ${API_URL + apiRoute} timed out.`
      );
    }
    return null;
  } finally {
    // Clear the request timeout
    clearTimeout(timeout);
  }
};

module.exports = apiRequest;
