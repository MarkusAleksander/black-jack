import { updateObject } from "./../Utilities/updateObject";

export const Player = () => {
    const state = {
        is_active: false,
        name: null,
        deck: [],
        is_human: false,
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

    const setActive = (active) => {
        state.active = active;
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

    const removeCard = ({ value, suit }) => {
        let cardIdx = state.deck.findIndex((card) => {
            return card.value == value && card.suit == suit;
        });

        if (cardIdx < 0) {
            console.error("Selected player card not found");
        }

        return state.deck.splice(cardIdx, 1)[0];
    }

    return {
        init,
        addCard,
        addCards,
        removeCard,
        removeCardAtIndex,
        removeCards,
        setActive,
        getPlayerName,
        getCurrentCards,
        getIsHuman,
    }
}