import * as PLAYER_STATES from "./../../Player/player_states";
import { Players } from "./../../Managers/managers";
import debugDetail from "../../Utilities/debugDetail";
import handleTurnBegin from "../Begin/handleTurnBegin";
import endTurn from "../End/endTurn";
import pickupCardFromDeck from "../Pickup/pickupCardFromDeck";

// * Resolve the power effect in place
export default resolvePowerEffectState = (currentPlayer, effect_state) => {

    const current_active_player = Players.getCurrentActivePlayer();

    switch (effect_state) {
        case PLAYER_STATES.EFFECT_ANOTHER_TURN:

            // * Player has another go
            debugDetail(`[resolvePowerEffectState] Player taking another turn [TODO]`);
            // * reset status
            current_active_player.resetStatus();
            current_active_player.updatePlayState(PLAYER_STATES.TO_PLAY);
            handleTurnBegin();
            break;

        case PLAYER_STATES.EFFECT_MUST_MISS_TURN:

            // * go straight to end turn
            debugDetail(`[resolvePowerEffectState] Missing Turn`);
            endTurn();
            break;

        case PLAYER_STATES.EFFECT_MUST_PICK_2:

            // * Next player must pickup 2 then end turn
            debugDetail(`[resolvePowerEffectState] Picking up 2 cards`);
            for (let c = 0; c < 2; c++) {
                pickupCardFromDeck();
            }
            endTurn();
            break;

        case PLAYER_STATES.EFFECT_MUST_PICK_7:

            // * Next player must pickup 7 then end turn
            for (let c = 0; c < 7; c++) {
                pickupCardFromDeck();
            }
            endTurn();
            break;

        default:

            debugDetail(`[resolvePowerEffectState] Unknown effect state applied! ${effect_state}`);
    }
}