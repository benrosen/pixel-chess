/**
 * Append a new move to a game's moveText field.
 *
 * @param {*} event The Lambda event to handle.
 * @returns The newly updated game.
 */
exports.handler = async (event) => {
  // TODO implement appendMoveText
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
