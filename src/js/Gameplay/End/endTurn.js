import { Players } from "./../../Managers/managers";
import debugDetail from "../../Utilities/debugDetail";
import outputToBoard from "./../../View/outputToBoard";
import hasWinConditionBeenReached from "./hasWinConditionBeenReached";
import applyPowerEffect from "./../Powers/applyPowerEffect";
import resolvePowerEffectState from "./../Powers/resolvePowerEffectState";
import onEndTurn from "./onEndTurn";

import * as PLAYER_STATES from "./../../Player/player_states";

// * handle ending a turn
const endTurn = () => {

    // * resolve anything before confirm turn is ended

    const current_player = Players.getCurrentActivePlayer();

    current_player.updatePlayState(PLAYER_STATES.HAS_PLAYED);

    debugDetail(`[endTurn] Ending turn...`);

    debugDetail(`[endTurn] actionState of current player: ${current_player.getActionState()}`);

    // * If player put a card down, then apply power if required
    if (current_player.getActionState() === PLAYER_STATES.ACTION_DID_PUTDOWN) {

        // * Player putdown a card, check if power card
        const top_card = Deck.getDiscardDeckTopCard();

        if (top_card.power) {

            debugDetail(`[endTurn] Card putdown is a power card: ${top_card.power}`);
            outputToBoard(`It's a power card!`);

            // * Apply power effect
            applyPowerEffect(top_card.power);

            // * check if current player affected by the power card
            // TODO - too closely linked to the Have another go power - needs to be handled elsewhere
            if (current_player.getEffectState() !== PLAYER_STATES.EFFECT_NO_EFFECT) {

                // * resolve power effect
                resolvePowerEffectState(
                    current_player,
                    current_player.getEffectState()
                );

                return;
            }
        }
    }

    // * check if win condition has been reached
    if (!hasWinConditionBeenReached()) {

        debugDetail(`------------`);
        onEndTurn();
    } else {

        // * Game has been won, end
        outputToBoard(`${Players.getCurrentActivePlayer().getPlayerName()} is the winner!`);
        debugDetail(`[endTurn] ${Players.getCurrentActivePlayer().getPlayerName()} has won!`);
    }
}

export default endTurn;