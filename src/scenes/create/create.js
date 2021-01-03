import createBoard from "./createBoard";
import drawChessboard from "./drawChessboard";

/**
 * The create callback for the game scene.
 *
 * @function
 * @module create
 * @see {Phaser.Scene}
 * @param {*} data Any data passed via ScenePlugin.add() or ScenePlugin.start().
 */
export default function create(data) {
  const board = createBoard(this);
  drawChessboard(this, board);
}
