/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_PIXELCHESSRESOLVEMATCHPLAYERIDS_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const { getEnvData, invokeLambda } = require("aws-lambda-utility-layer");

const RESOLVE_MATCH_PLAYER_IDS_FUNCTION = getEnvData(
  process.env,
  "FUNCTION_PIXELCHESSRESOLVEMATCHPLAYERIDS_NAME"
);

const lambda = new AWS.Lambda();

/**
 * Resolve the value of a GraphQL field.
 *
 * @module pixelchessResolveGraphQLField
 * @function
 * @param {*} event The event payload.
 */
exports.handler = async (event) => {
  const resolvers = {
    Match: {
      playerIds: (event) => {
        return invokeLambda(lambda, RESOLVE_MATCH_PLAYER_IDS_FUNCTION, event);
      },
    },
  };

  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      return await resolver(event);
    }
  }

  throw new Error("Resolver not found.");
};
