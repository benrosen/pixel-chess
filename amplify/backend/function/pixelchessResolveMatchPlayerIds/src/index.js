/**
 * Resolve the playerIds field on the Match type.
 *
 * @module pixelchessResolveMatchPlayerIds
 * @function
 * @param {*} event The event payload.
 */
exports.handler = async (event) => {
  // TODO implement
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
