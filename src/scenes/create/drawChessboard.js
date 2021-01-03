import colors from "../../colors";

/**
 * Draw a chessboard.
 *
 * @function
 * @module drawChessboard
 * @param {Phaser.Scene} scene The scene in which you want to draw the board.
 * @param {RexBoard} board The board you want to draw.
 */
export default function drawChessboard(scene, board) {
  const graphics = scene.add.graphics({
    fillStyle: { color: colors.board.dark.replace("#", "0x") },
  });

  const fillTile = (x, y) => {
    const points = board.getGridPoints(x, y);
    graphics.fillPoints(points, true);
  };

  board.forEachTileXY(({ x, y }) => {
    if (x % 2 === 0) {
      if (y % 2 === 0) {
        fillTile(x, y);
      }
    } else {
      if (y % 2 !== 0) {
        fillTile(x, y);
      }
    }
  });
}
