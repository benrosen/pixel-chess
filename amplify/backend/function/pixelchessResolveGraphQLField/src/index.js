/**
 * Resolve the value of a GraphQL field.
 *
 * @module pixelchessResolveGraphQLField
 * @function
 * @param {*} event The event payload.
 */
exports.handler = async (event) => {
  // map resolvers to fields
  const resolvers = {
    Match: {
      playerIds: (event) => {
        // TODO invoke pixelchessResolveMatchPlayerIds
      },
    },
  };

  // invoke the appropriate resolver and return the result
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      return resolver(event);
    }
  }

  throw new Error("Resolver not found.");
};
