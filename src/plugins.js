/**
 * A list of Phaser plugins to be loaded.
 *
 * @module plugins
 * @type {Phaser.Types.Loader.FileTypes.ScenePluginFileConfig[]}
 * @see {module.loadPlugins}
 */
const plugins = [
  {
    key: "rexboardplugin",
    url:
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexboardplugin.min.js",
    systemKey: "rexBoard",
    sceneKey: "rexBoard",
  },
];

export default plugins;
