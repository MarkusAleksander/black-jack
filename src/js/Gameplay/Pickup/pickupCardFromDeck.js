import { Players, Deck } from "./../../Managers/managers";

import updateView from "../../View/updateView";

import debugDetail from "../../Utilities/debugDetail";
import outputToBoard from "../../View/outputToBoard";

import * as PLAYER_STATES from "./../../Player/player_states";

export default pickupCardFromDeck = () => {

    debugDetail(`[pickupCardFromDeck] Picking up card`);

    // * get current player attempting pickup
    let current_player = Players.getCurrentActivePlayer();

    // * get pickup deck
    let top_card = Deck.removeCardByIndexFromPickupDeck(0);

    // * add picked up card to player deck
    current_player.addCard(top_card);

    debugDetail(`[pickupCardFromDeck] Picked up card: ${top_card.name}`);

    // * if deck is now empty, then swap decks
    if (Deck.getPickupDeckSize() <= 0) {
        Deck.swapDecks();
    }

    // * Update the players action state
    current_player.updateActionState(PLAYER_STATES.ACTION_DID_PICKUP);

    outputToBoard(`${current_player.getPlayerName()} has picked up`);

    // * redraw the view
    updateView();
}