import { updateObject } from "./../Utilities/updateObject";
import { Player } from "../Player/player";
import outputDetail from "../Utilities/outputDetail";

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
            name: "Player_0"
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
        state.previous_player_idx = state.current_player_idx;
        state.current_player_idx = state.next_player_idx;

        let next_player = state.next_player_idx + 1;
        if (next_player >= state.num_players) next_player = 0;

        state.next_player_idx = next_player;

        state.player_list[state.previous_player_idx].setActive(false);
        state.player_list[state.current_player_idx].setActive(true);
        state.player_list[state.next_player_idx].setActive(false);

        outputDetail(`Current active player is now: ${state.player_list[state.current_player_idx].getPlayerName()}`);
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