/**
 * Get the expected status of the given game.
 *
 * @param {*} game The game whose status to get.
 * @returns {string} The expected status.
 */
module.exports = ({ black, status, white }) => {
  switch (status) {
    case "PENDING":
      return black && white ? "UNDERWAY" : "PENDING";
    case "UNDERWAY":
      return black && white
        ? "UNDERWAY"
        : !(black || white)
        ? "DRAW"
        : black
        ? "BLACK_WON"
        : "WHITE_WON";
    case "DRAW":
    case "BLACK_WON":
    case "WHITE_WON":
    default:
      return status;
  }
};
