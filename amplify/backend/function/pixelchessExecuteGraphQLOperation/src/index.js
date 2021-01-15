/* Amplify Params - DO NOT EDIT
	API_PIXELCHESS_GRAPHQLAPIENDPOINTOUTPUT
	API_PIXELCHESS_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const createRequest = require("./createRequest");
const getResponse = require("./getResponse");
const { getEnvData } = require("aws-lambda-utility-layer");
const urlParse = require("url").URL;

const APPSYNC_URL = getEnvData(
  process.env,
  "API_PIXELCHESS_GRAPHQLAPIENDPOINTOUTPUT"
);

const REGION = getEnvData(process.env, "REGION");

const ENDPOINT = new urlParse(APPSYNC_URL).hostname.toString();

/**
 * Execute a GraphQL operation on the project's API.
 *
 * @param {*} event The Lambda event to handle.
 * @returns The response from the GraphQL API.
 */
exports.handler = async ({ item, operation, operationName }) => {
  const request = createRequest(
    ENDPOINT,
    item,
    operation,
    operationName,
    REGION,
    APPSYNC_URL
  );

  return getResponse(ENDPOINT, request);
};
