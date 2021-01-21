const fs = require("fs");
const glob = require("glob");

function main() {
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

    // TODO use reduce on files to create a string containing the entire schema
    // TODO write the schema string to ./amplify/backend/api/pixelchess/schema.graphql
  });
}

main();

module.exports = main;
