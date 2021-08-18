import debugDetail from "../Utilities/debugDetail";
import { updateObject } from "./../Utilities/updateObject";

import * as PLAYER_STATES from "./player_states";

export const Player = () => {
    const state = {
        name: null,
        deck: [],
        el: null,
        is_human: false,

        status: {
            play_state: PLAYER_STATES.IDLE,
            action: PLAYER_STATES.ACTION_NO_ACTION,
            effect: PLAYER_STATES.EFFECT_NO_EFFECT,
        }
    }

    // * Initialise the player with a config object
    const init = (config) => {
        updateObject(state, config);
    }

    // * Add a card to the player deck
    const addCard = (card) => {
        state.deck.push(card);
    }

    // * Add cards to the player deck
    const addCards = (cards) => {
        state.deck = state.deck.concat(cards);
    }

    // * Remove a card at index
    const removeCardAtIndex = (idx) => {
        state.deck.splice(idx, 1)[0];
    }

    // * Remove a number of cards starting at index
    const removeCards = (idx, num_cards) => {
        state.deck.splice(idx, num_cards);
    }

    // * Remove a selected card by value/suit
    const removeCard = ({ value, suit }) => {
        let cardIdx = state.deck.findIndex((card) => {
            return card.value == value && card.suit == suit;
        });

        if (cardIdx < 0) {
            console.error("Selected player card not found");
        }

        return state.deck.splice(cardIdx, 1)[0];
    }

    // * Get the players name
    const getPlayerName = () => {
        return state.name;
    }

    // * Get is the player human
    const getIsHuman = () => {
        return state.is_human;
    }

    // * Get current cards
    const getCurrentCards = () => {
        return state.deck;
    }

    // * Get current hand size
    const getHandSize = () => {
        return state.deck.length;
    }

    // * Reset the player status
    const resetStatus = () => {
        state.status = {
            play_state: PLAYER_STATES.IDLE,
            action: PLAYER_STATES.ACTION_NO_ACTION,
            effect: PLAYER_STATES.EFFECT_NO_EFFECT,
        };
    }

    // * Get the full player status
    const getStatus = () => {
        return state.status;
    }

    // * update the play state
    const updatePlayState = (play_state) => {
        // * Check acceptable state provided
        if (![
            PLAYER_STATES.IDLE,
            PLAYER_STATES.TO_PLAY,
            PLAYER_STATES.HAS_PLAYED
        ].includes(play_state)) {
            debugDetail(`${state.name} [state.play_state] provided unacceptable state: ${play_state}`);
        }

        state.status.play_state = play_state;
        debugDetail(`${state.name} [state.play_state] is now ${play_state}`);
    }

    // * get the players current play state
    const getPlayState = () => {
        return state.status.play_state;
    }

    // * update the action state
    const updateActionState = (action_state) => {
        // * Check acceptable state provided
        if (![
            PLAYER_STATES.ACTION_DID_PICKUP,
            PLAYER_STATES.ACTION_DID_PUTDOWN,
            PLAYER_STATES.ACTION_NO_ACTION,
        ].includes(action_state)) {
            debugDetail(`${state.name} [state.action_state] provided unacceptable state: ${action_state}`);
        }
        state.status.action = action_state;
        debugDetail(`${state.name} [state.action] is now ${action_state}`);
    }

    // * get the players action state
    const getActionState = () => {
        return state.status.action;
    }

    // * update the effect state
    const updateEffectState = (effect_state) => {
        // * Check acceptable state provided
        if (![
            PLAYER_STATES.EFFECT_MUST_PICK_2,
            PLAYER_STATES.EFFECT_MUST_PICK_7,
            PLAYER_STATES.EFFECT_MUST_MISS_TURN,
            PLAYER_STATES.EFFECT_ANOTHER_TURN,
            PLAYER_STATES.EFFECT_NO_EFFECT,
        ].includes(effect_state)) {
            debugDetail(`${state.name} [state.effect_state] provided unacceptable state: ${effect_state}`);
        }
        state.status.effect = effect_state;
        debugDetail(`${state.name} [state.effect] is now ${effect_state}`);
    }

    // * get the players current effect state
    const getEffectState = () => {
        return state.status.effect;
    }

    const getPlayerEl = () => {
        return state.el;
    }

    return {
        init,

        addCard,
        addCards,

        removeCard,
        removeCardAtIndex,
        removeCards,

        getPlayerName,
        getCurrentCards,
        getIsHuman,
        getHandSize,
        getPlayerEl,

        resetStatus,
        getStatus,

        updatePlayState,
        getPlayState,
        updateActionState,
        getActionState,
        updateEffectState,
        getEffectState,
    }
}