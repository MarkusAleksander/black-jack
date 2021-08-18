import { Players } from "../../Managers/managers";
import debugDetail from "../../Utilities/debugDetail";

// * Test if a win condition has been reached
const hasWinConditionBeenReached = () => {

    debugDetail(`[hasWinConditionBeenReached] Checking win condition`);

    // * Current player has won if they have no cards left
    let num_cards_remaining = Players.getCurrentActivePlayer().getHandSize();

    debugDetail(`[hasWinConditionBeenReached] Player has ${num_cards_remaining} cards remaining`);

    // * To win there has to be no cards remaining
    // TODO - last placed card should not be a power card and player needs to pick up
    return num_cards_remaining === 0;
}

export default hasWinConditionBeenReached;