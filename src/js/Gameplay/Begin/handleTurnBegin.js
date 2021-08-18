import debugDetail from "../../Utilities/debugDetail";
import { Players } from "./../../Managers/managers";
import outputToBoard from "../../View/outputToBoard";

import resolvePowerEffectState from "../Powers/resolvePowerEffectState";
import chooseAIPlayerActionChoice from "../Begin/chooseAIPlayerActionChoice";

import * as PLAYER_STATES from "./../../Player/player_states";

const handleTurnBegin = () => {

    // * Resolve any effects

    let current_active_player = Players.getCurrentActivePlayer();

    if (current_active_player.getEffectState() !== PLAYER_STATES.EFFECT_NO_EFFECT) {

        debugDetail(`Current player is affected by ${current_active_player.getEffectState()}`);

        resolvePowerEffectState(
            current_active_player,
            current_active_player.getEffectState()
        );

    } else {
        // * no effect in play, continue as normal

        outputToBoard(`${current_active_player.getPlayerName()} to play...`);

        // * if AI
        if (!current_active_player.getIsHuman()) {

            debugDetail(`[chooseAIPlayerActionChoice] Player is thinking...`);
            // * simulate player thinking before choice (effectively slow down game)
            window.setTimeout(chooseAIPlayerActionChoice, 2000);
        } else {
            // * is human
            // ... wait for player interaction
        }
    }
}

export default handleTurnBegin;