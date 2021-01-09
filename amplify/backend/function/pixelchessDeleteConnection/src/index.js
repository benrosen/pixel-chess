/**
 * Delete a connection to a game.
 *
 * @param {*} event The Lambda event to handle.
 * @returns The newly deleted connection.
 */
exports.handler = async (event) => {
  // TODO implement deleteConnection
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};

// TODO document with @throw tag
