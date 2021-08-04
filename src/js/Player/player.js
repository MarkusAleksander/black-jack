import outputDetail from "../Utilities/outputDetail";
import { updateObject } from "./../Utilities/updateObject";

import * as PLAYER_STATES from "./player_states";

export const Player = () => {
    const state = {
        name: null,
        deck: [],
        is_human: false,

        status: {
            play_state: PLAYER_STATES.IDLE,
            action: PLAYER_STATES.ACTION_NO_ACTION,
            effect: PLAYER_STATES.EFFECT_NO_EFFECT,
        }
    }

    const init = (config) => {
        updateObject(state, config);
    }

    const addCard = (card) => {
        state.deck.push(card);
    }

    const addCards = (cards) => {
        state.deck = state.deck.concat(cards);
    }

    const removeCardAtIndex = (idx) => {
        state.deck.splice(idx, 1)[0];
    }

    const removeCards = (idx, num_cards) => {
        state.deck.splice(idx, num_cards);
    }

    const getPlayerName = () => {
        return state.name;
    }

    const getIsHuman = () => {
        return state.is_human;
    }

    const getCurrentCards = () => {
        return state.deck;
    }

    const getHandSize = () => {
        return state.deck.length;
    }

    const removeCard = ({ value, suit }) => {
        let cardIdx = state.deck.findIndex((card) => {
            return card.value == value && card.suit == suit;
        });

        if (cardIdx < 0) {
            console.error("Selected player card not found");
        }

        return state.deck.splice(cardIdx, 1)[0];
    }

    const resetStatus = () => {
        state.status = {
            play_state: PLAYER_STATES.IDLE,
            action: PLAYER_STATES.ACTION_NO_ACTION,
            effect: PLAYER_STATES.EFFECT_NO_EFFECT,
        };
    }

    const getStatus = () => {
        return state.status;
    }

    const updatePlayState = (play_state) => {
        outputDetail(`${state.name} [state.play_state] is now ${play_state}`);
        state.status.play_state = play_state;
    }

    const getPlayState = () => {
        return state.status.play_state;
    }

    const updateActionState = (action_state) => {
        outputDetail(`${state.name} [state.action] is now ${action_state}`);
        state.status.action = action_state;
    }

    const getActionState = () => {
        return state.status.action;
    }

    const updateEffectState = (effect_state) => {
        outputDetail(`${state.name} [state.effect] is now ${effect_state}`);
        state.status.effect = effect_state;
    }

    const getEffectState = () => {
        return state.status.effect;
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