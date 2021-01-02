import create from "./scenes/create";
import preload from "./scenes/preload";

/**
 * The Phaser game config.
 */
const config = {
  backgroundColor: "000000",
  height: 224,
  width: 128,
  scene: {
    preload: preload,
    create: create,
  },
};

export default config;
