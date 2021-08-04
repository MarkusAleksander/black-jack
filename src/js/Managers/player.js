import { updateObject } from "./../Utilities/updateObject";
import { Player } from "../Player/player";
import outputDetail from "../Utilities/outputDetail";
import * as PLAYER_STATES from "../Player/player_states";

export const PlayerManager = () => {

    const state = {
        num_players: 4,
        player_list: [],
        current_player_idx: 0,
        previous_player_idx: -1,
        next_player_idx: 0
    }

    const init = (config) => {
        updateObject(state, config);

        state.next_player_idx = state.current_player_idx + 1;
    }

    const createPlayers = () => {
        // * create human player
        let human = Player();
        human.init({
            is_human: true,
            name: "Player_0",
        });
        state.player_list.push(human);

        for (let i = 1; i < state.num_players; i++) {
            let ai = Player();
            ai.init({
                name: "Player_".concat(i)
            });
            state.player_list.push(ai);
        }
    }

    const setNextActivePlayer = () => {
        // * current idx now becomes previous idx
        state.previous_player_idx = state.current_player_idx;
        // * next player idx now becomes current idx
        state.current_player_idx = state.next_player_idx;

        // * next player now becomes next + 1
        let next_player_idx = state.next_player_idx + 1;
        // * check if we have to loop back round
        if (next_player_idx >= state.num_players) next_player_idx = 0;
        state.next_player_idx = next_player_idx;

        // * Get and update new previous
        let previous_player = state.player_list[state.previous_player_idx];
        // * Reset to idle
        previous_player.resetStatus();

        // * Get and update new current player
        let current_player = state.player_list[state.current_player_idx];
        // * Ensure no effects are in place
        if (current_player.getEffectState() === PLAYER_STATES.EFFECT_NO_EFFECT) {
            // * unaffected, normal play
            current_player.updatePlayState(PLAYER_STATES.TO_PLAY);
        } else {
            // * has been affected
        }

        // * Get and update new next player if needed
        let next_player = state.player_list[state.next_player_idx];

        outputDetail(`Current active player is now: ${current_player.getPlayerName()}`);
    }

    const getCurrentActivePlayer = () => {
        return state.player_list[state.current_player_idx];
    }

    const getCurrentActivePlayerIdx = () => {
        return state.current_player_idx;
    }

    const getCurrentNextPlayer = () => {
        return state.player_list[state.next_player_idx];
    }

    const getCurrentNextPlayerIdx = () => {
        return state.next_player_idx;
    }

    const getCurrentPreviousPlayer = () => {
        return state.player_list[state.previous_player_idx];
    }

    const getCurrentPreviousPlayerIdx = () => {
        return state.previous_player_idx;
    }

    const getPlayerList = () => {
        return state.player_list;
    }

    return {
        init,
        createPlayers,
        setNextActivePlayer,
        getCurrentActivePlayer,
        getCurrentActivePlayerIdx,
        getCurrentNextPlayer,
        getCurrentNextPlayerIdx,
        getCurrentPreviousPlayer,
        getCurrentPreviousPlayerIdx,
        getPlayerList,
    }

}