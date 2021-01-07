/**
 * Redirect the browser to the game url.
 *
 * @param {import("../typedefs/PixelChessGame").PixelChessGame} game The game to be redirected to.
 */
export default function redirectToGameUrl(game) {
  console.log(`redirect to /${game.id}`);
}
