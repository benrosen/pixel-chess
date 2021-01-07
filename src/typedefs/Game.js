import Status from "./Status";

/**
 * The game data stored in in DynamoDB.
 *
 * @typedef PixelChess.Game
 * @property {string} id A unique identifier for this game instance.
 * @property {string} moveText A series of chess moves written in Standard Algebraic Notation.
 * @property {string[]} players An array of player ids.
 * @property {Status} status The current status of the game.
 */
