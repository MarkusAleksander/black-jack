import { updateObject } from "./../Utilities/updateObject";

// * Manage the running of the game, linking components
export const GameManager = () => {

    const state = {
        mode: "DEBUG",

        active_player: null,
        AI_interval_speed: null,
        AI_interval: null,

        // current_game_state: "INIT"

    }

    // * Initialise the game world with a new config
    const init = (config = {}) => {
        updateObject(state, config);
    }

    // * Get current game state
    const getCurrentGameState = () => {
        return state.current_game_state;
    }

    // * Set current game state
    const setCurrentGameState = (game_state) => {
        updateObject(state, {
            current_game_state: game_state
        })
    }

    return {
        init,
        getCurrentGameState,
        setCurrentGameState,
    }

}