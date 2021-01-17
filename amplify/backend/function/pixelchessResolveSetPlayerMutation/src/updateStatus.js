const { invokeLambda } = require("aws-lambda-utility-layer");

/**
 * Update the status for a given game id.
 *
 * @param {string} id The id of the game whose players you want to get.
 * @param {string} status The new status.
 * @param {*} lambda The Lambda client.
 * @param {string} graphQLFunctionName The name of the Lambda GraphQL function to invoke.
 * @returns An object containing the black player's id and the white player's id.
 */
module.exports = (id, status, lambda, graphQLFunctionName) => {
  console.log("updating status...");
  return invokeLambda(lambda, graphQLFunctionName, {
    operation: /* GraphQL */ `
      mutation UpdateStatus($input: UpdateStatusInput!) {
        updateStatus(input: $input) {
          id
          black
          moveText
          status
          white
          createdAt
          updatedAt
          version
        }
      }
    `,
    operationName: "UpdateStatus",
    item: { input: { gameId: id, status: status } },
  })
    .then((response) => {
      console.log("updateStatus response:", response);
      return response.data.updateStatus;
    })
    .catch((error) => {
      console.log(error);
    });
};
