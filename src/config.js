import create from "./scenes/create";
import preload from "./scenes/preload";

/**
 * The Phaser game config.
 */
const config = {
  backgroundColor: "000000",
  height: 300,
  width: 400,
  scene: {
    preload: preload,
    create: create,
  },
};

export default config;
