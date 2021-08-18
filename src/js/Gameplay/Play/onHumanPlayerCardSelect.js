import debugDetail from "../../Utilities/debugDetail";
import { Players } from "./../../Managers/managers";
import endTurn from "../End/endTurn";
import playCard from "./playCard";

// * Define Human Player Interaction
const onHumanPlayerCardSelect = (event) => {

    debugDetail(`[onHumanPlayerCardSelect]`);

    // * check that the current player is the human player, or the user is selecting out of turn
    if (!Players.getCurrentActivePlayer().getIsHuman()) {
        debugDetail(`[onHumanPlayerCardSelect] Human player not currently active`);
        return;
    }

    // * get selection target
    const selection = event.target.parentNode || event.srcElement.parentNode;

    // * make sure a card was clicked
    if (selection.className == "card") {
        // * get card reference
        const value = selection.getAttribute('data-v');
        const suit = selection.getAttribute('data-s');

        const valid_play = playCard({ value, suit });

        if (valid_play) {
            endTurn();
        }
    }

    // * otherwise do nothing
}

export default onHumanPlayerCardSelect;