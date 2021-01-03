import create from "./scenes/create";
import preload from "./scenes/preload";

// TODO configure game for pixel art

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
  zoom: 2,
};

export default config;
