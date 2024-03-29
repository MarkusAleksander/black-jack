import { updateObject } from "./../Utilities/updateObject";

const ViewManager = () => {

    const state = {
        pickup_deck_el: null,
        discard_deck_el: null,
        updates_board_el: null,

        card_w: 59,
        card_h: 90,
    }

    const init = (config = {}) => {
        updateObject(state, config);
    }

    const createCardHTML = (card, is_facing) => {
        return (
            `<img class="${is_facing ? "face_up" : "face_down"}" style="background-position: -${card.l * state.card_w}px -${card.t * state.card_h}px;"/>`
        )
    }

    const createListedCardHTML = (card, is_facing) => {
        return (
            `<li class="card" data-v="${card.value}" data-s="${card.suit}">
                ${createCardHTML(card, is_facing)}
            </li>`
        );
    }

    const getPickupDeck = () => {
        return state.pickup_deck_el;
    }

    const getDiscardDeck = () => {
        return state.discard_deck_el;
    }

    const getGameUpdateBoard = () => {
        return state.updates_board_el;
    }

    return {
        init,

        createListedCardHTML,
        createCardHTML,

        getPickupDeck,
        getDiscardDeck,

        getGameUpdateBoard,
    }
}

export const View = ViewManager();