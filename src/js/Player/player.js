import { updateObject } from "./../Utilities/updateObject";

export const Player = () => {
    const state = {
        is_active: false,
        name: null,
        deck: [],
        isHuman: false,
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

    const removeCard = (idx) => {
        state.deck.splice(idx, 1)[0];
    }

    const removeCards = (idx, num_cards) => {
        state.deck.splice(idx, num_cards);
    }

    const setActive = (active) => {
        state.active = active;
    }

    const getPlayerName = () => {
        return state.name;
    }

    const getCurrentCards = () => {
        return state.deck;
    }

    return {
        init,
        addCard,
        addCards,
        removeCard,
        removeCards,
        setActive,
        getPlayerName,
        getCurrentCards,
    }
}