import plugins from "../../plugins";

/**
 * Load plugins from the plugins object.
 *
 * @function
 * @module loadScenePlugins
 * @param {Phaser.Types.Scenes.ScenePreloadCallback} preload The preload callback for the scene in which you want to load the plugins.
 */
export default function loadScenePlugins(preload) {
  plugins.forEach((plugin) => preload.load.scenePlugin(plugin));
}
