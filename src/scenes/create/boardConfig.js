const TILE_COUNT = 8;
const TILE_SIZE = 16;
const HALF_TILE_SIZE = TILE_SIZE / 2;
const PADDING_ROWS = 3;
const GRID_OFFSET = {
  x: HALF_TILE_SIZE,
  y: HALF_TILE_SIZE + PADDING_ROWS * TILE_SIZE,
};

/**
 * The config object for the chess board.
 *
 * @module boardConfig
 * @type {RexBoardConfig}
 * @see {module.createBoard}
 */
const boardConfig = {
  grid: {
    x: GRID_OFFSET.x,
    y: GRID_OFFSET.y,
    cellWidth: TILE_SIZE,
    cellHeight: TILE_SIZE,
  },
  width: TILE_COUNT,
  height: TILE_COUNT,
};

export default boardConfig;
