import * as POWERS from "./../../Cards/powers";
import * as PLAYER_STATES from "./../../Player/player_states";
import outputToBoard from "../../View/outputToBoard";
import { Players } from "./../../Managers/managers";

// * Apply power effects from power card
export default applyPowerEffect = (power) => {

    const current_active_player = Players.getCurrentActivePlayer();
    const current_next_player = Players.getCurrentNextPlayer();

    switch (power) {
        case POWERS.CHANGE_DIRECTION:

            // * Change play direction
            outputToBoard(`Direction of play is reversed! [TODO]`);
            // TODO
            break;

        case POWERS.CHANGE_SUIT:

            // * Change playable suit
            outputToBoard(`New suit chosen! [TODO]`);
            // TODO
            break;

        case POWERS.ANOTHER_TURN:

            // * Player has another go
            outputToBoard(`${current_active_player.getPlayerName()} to take another turn!`);
            current_active_player.updateEffectState(PLAYER_STATES.EFFECT_ANOTHER_TURN);
            break;

        case POWERS.MISS_TURN:

            // * Next player misses turn
            outputToBoard(`${current_next_player.getPlayerName()} to miss a turn!`);
            current_next_player.updateEffectState(PLAYER_STATES.EFFECT_MUST_MISS_TURN);
            break;

        case POWERS.PICKUP_2:

            // * Next player must pickup 2
            outputToBoard(`${current_next_player.getPlayerName()} must pick up 2 cards!`);
            current_next_player.updateEffectState(PLAYER_STATES.EFFECT_MUST_PICK_2);
            break;

        case POWERS.PICKUP_7:

            // * Next player must pickup 7
            outputToBoard(`${current_next_player.getPlayerName()} must pick up 7 cards!`);
            current_next_player.updateEffectState(PLAYER_STATES.EFFECT_MUST_PICK_7);
            break;

        default:

            debugDetail(`[applyPowerEffect] Unknown power applied! ${power}`);
    }
}