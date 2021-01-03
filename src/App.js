import { GameComponent } from "phaser-react-tools";
import { Grid } from "semantic-ui-react";
import React from "react";
import config from "./config";

// TODO add PropTypes to App.jsx
// TODO document App.jsx

export default function App() {
  return (
    <Grid style={{ height: "100vh", margin: 0 }} verticalAlign="middle">
      <Grid.Row textAlign="center">
        <Grid.Column>
          <GameComponent config={config}></GameComponent>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
