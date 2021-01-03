import { Board } from "phaser3-rex-plugins/plugins/board-components.js";
import boardConfig from "./boardConfig";

/**
 * Create a board system.
 *
 * @function
 * @module createBoard
 * @param {Phaser.Scene} scene The scene in which you want to create the board.
 * @returns {RexBoard} A reference to a newly configured board.
 */
export default function createBoard(scene) {
  return new Board(scene, boardConfig);
}
