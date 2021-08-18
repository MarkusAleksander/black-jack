import { updateObject } from "./../Utilities/updateObject";
import { Player } from "../Player/player";
import debugDetail from "../Utilities/debugDetail";
import * as PLAYER_STATES from "../Player/player_states";

import loop from "../Utilities/loop";

const PlayerManager = () => {

    const state = {
        num_players: 4,
        player_list: [],
        current_player_idx: 0,
        previous_player_idx: null,
        next_player_idx: null,
        play_direction: 1,
    }

    const init = (config) => {
        updateObject(state, config);

        state.previous_player_idx = determinePreviousPlayerIdx();
        state.next_player_idx = determineNextPlayerIdx();
    }

    const determineNextPlayerIdx = () => {
        let next_idx = state.current_player_idx + state.play_direction;

        return next_idx < 0 ? state.num_players - 1 : next_idx >= state.num_players ? 0 : next_idx;
    }

    const determinePreviousPlayerIdx = () => {
        let prev_idx = state.current_player_idx - state.play_direction;

        return prev_idx < 0 ? state.num_players - 1 : prev_idx >= state.num_players ? 0 : prev_idx;
    }

    const createPlayers = (player_configs) => {

        loop(player_configs, (config) => {
            let player = Player();

            player.init({
                is_human: config.is_human,
                name: config.name,
                el: config.el
            });

            state.player_list.push(player);
        });
    }

    const setNextActivePlayer = () => {
        // * set the next player to current
        state.current_player_idx = state.next_player_idx;


        // * current idx now becomes previous idx
        state.previous_player_idx = determinePreviousPlayerIdx();

        // * Get and update new previous
        let previous_player = state.player_list[state.previous_player_idx];
        // * Reset to idle
        previous_player.resetStatus();


        // * next player now becomes next + (1 || -1)
        state.next_player_idx = determineNextPlayerIdx();


        // * Get and update new current player
        let current_player = state.player_list[state.current_player_idx];
        // * Ensure no effects are in place
        if (current_player.getEffectState() === PLAYER_STATES.EFFECT_NO_EFFECT) {
            // * unaffected, normal play
            current_player.updatePlayState(PLAYER_STATES.TO_PLAY);
        } else {
            // * has been affected
        }

        debugDetail(`Current active player is now: ${current_player.getPlayerName()}`);
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

    const changePlayDirection = () => {
        state.play_direction = state.play_direction * -1;

        // * set next to previous player
        state.next_player_idx = state.previous_player_idx;
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
        changePlayDirection,
    }

}

export const Players = PlayerManager();