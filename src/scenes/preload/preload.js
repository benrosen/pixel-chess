import loadScenePlugins from "./loadScenePlugins";

/**
 * The preload callback for the game scene.
 *
 * @function
 * @module create
 * @see {Phaser.Types.Scenes.ScenePreloadCallback}
 */
export default function preload() {
  loadScenePlugins(this);
}
