import { GameComponent } from "phaser-react-tools";
import { Grid } from "semantic-ui-react";
import React from "react";
import colors from "./colors";
import gameConfig from "./gameConfig";

/**
 * The container component for the app.
 *
 * @function
 * @param {Object} [props] The component props.
 */
export default function App() {
  return (
    <Grid
      style={{
        backgroundColor: colors.board.light,
        height: "100vh",
        margin: 0,
      }}
      verticalAlign="middle"
    >
      <Grid.Row textAlign="center">
        <Grid.Column>
          <GameComponent config={gameConfig}></GameComponent>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
