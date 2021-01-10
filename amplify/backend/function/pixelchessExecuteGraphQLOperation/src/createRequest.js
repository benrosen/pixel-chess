const AWS = require("aws-sdk");

/**
 * Create a signed request to post to the AppSync GraphQL API.
 *
 * @param {string} endpoint The AppSync API endpoint.
 * @param {*} item The request payload.
 * @param {string} operation The GraphQL operation.
 * @param {string} operationName The name of the GraphQL operation.
 * @param {string} region The AWS region of the AppSync API.
 * @param {*} url The AppSync API url.
 * @returns A signed request.
 */
module.exports = (endpoint, item, operation, operationName, region, url) => {
  const request = new AWS.HttpRequest(url, region);

  request.method = "POST";
  request.path = "/graphql";
  request.headers.host = endpoint;
  request.headers["Content-Type"] = "application/json";
  request.body = JSON.stringify({
    query: operation,
    operationName: operationName,
    variables: item,
  });

  const signer = new AWS.Signers.V4(request, "appsync", true);
  signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

  return request;
};
