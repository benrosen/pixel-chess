const fs = require("fs");
const glob = require("glob");

function compileSchema() {
  glob("./src/schema/**/*.js", (error, files) => {
    if (error) {
      throw error;
    }

    const schema = files.reduce(
      (accumulator, item) => {
        return accumulator + require("." + item);
      },
      /* GraphQL */ `
        # This is an auto generated file.
        # Do not edit.
        # Changes to this file may be overwritten.
      `
    );

    fs.writeFile(
      "./amplify/backend/api/pixelchess/schema.graphql",
      schema,
      (error) => {
        if (error) {
          throw error;
        }
      }
    );
  });
}

compileSchema();

module.exports = compileSchema;
