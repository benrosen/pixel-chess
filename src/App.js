import { GameComponent } from "phaser-react-tools";
import GameManager from "./components/GameManager";
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
          <GameManager>
            <GameComponent config={gameConfig}></GameComponent>
          </GameManager>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
