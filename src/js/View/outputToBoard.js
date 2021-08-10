import { View } from "./../Managers/managers";

// * Output message to the game board
export default outputToBoard = (message) => {

    const update_board = View.getGameUpdateBoard();

    update_board.insertAdjacentHTML("beforeend", `<p>${message}</p>`);
    update_board.scrollTop = update_board.scrollHeight;
}