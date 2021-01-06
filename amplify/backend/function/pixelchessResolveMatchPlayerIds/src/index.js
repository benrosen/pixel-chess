/**
 * Resolve the playerIds field on the Match type.
 *
 * @module pixelchessResolveMatchPlayerIds
 * @function
 * @param {*} event The event payload.
 */
exports.handler = async (event) => {
  // TODO return list of ids (owners of match.connections)
  console.log(event);
  return ["hello", "world"];
};
