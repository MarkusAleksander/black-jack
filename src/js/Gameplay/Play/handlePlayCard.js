import { Deck, Players } from "./../../Managers/managers";
import debugDetail from "../../Utilities/debugDetail";

import * as PLAYER_STATES from "./../../Player/player_states";

// * Play the given card
const handlePlayCard = ({ value, suit }) => {

    // * get card from player hand
    let current_player = Players.getCurrentActivePlayer();

    const card = current_player.removeCard({
        value,
        suit
    });

    debugDetail(`[playCard] Playing card: ${card.name}`);

    // * place card to discard deck
    Deck.insertToTopOfDiscardDeck(card);

    current_player.updateActionState(PLAYER_STATES.ACTION_DID_PUTDOWN);

    outputToBoard(`${current_player.getPlayerName()} has played the ${card.name}`);

    updateView();
}

export default handlePlayCard;