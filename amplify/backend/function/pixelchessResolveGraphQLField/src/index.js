/**
 * Resolve the value of a GraphQL field.
 *
 * @function
 * @param {*} event The Lambda event.
 */
exports.handler = async (event) => {
  const resolvers = {
    Match: {
      playerIds: (event) => {
        //
      },
    },
  };

  const typeHandler = resolvers[event.typeName];

  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      return resolver(event);
    }
  }

  throw new Error("Resolver not found.");
};
