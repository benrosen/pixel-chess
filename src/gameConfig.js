import create from "./scenes/create/create";
import preload from "./scenes/preload/preload";

// TODO configure game for pixel art

/**
 * The Phaser game config.
 *
 * @module config
 * @type {Phaser.Types.Core.GameConfig}
 */
const gameConfig = {
  height: 224,
  width: 128,
  render: {
    transparent: true,
  },
  scene: {
    preload: preload,
    create: create,
  },
  zoom: 2,
};

export default gameConfig;
