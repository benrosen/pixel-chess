const https = require("https");

/**
 * Post a request to the AppSync API.
 *
 * @param {string} endpoint The AppSync API endpoint.
 * @param {*} request The request to post to the AppSync API.
 * @returns The response from the AppSync API.
 */
module.exports = (endpoint, request) => {
  return new Promise((resolve, reject) => {
    const httpRequest = https.request(
      { ...request, host: endpoint },
      (result) => {
        result.on("data", (data) => {
          resolve(JSON.parse(data.toString()));
        });
      }
    );
    httpRequest.write(request.body);
    httpRequest.end();
  });
};
