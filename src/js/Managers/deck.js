import { cards } from "./../Cards/cards";
import loop from "./../Utilities/loop";

import { updateObject } from "./../Utilities/updateObject";

export const DeckManager = () => {

    const PICKUP_DECK = cards;

    const DISCARD_DECK = [];

    const state = {
        starting_hand_size: 7,
    }

    const init = (config) => {
        updateObject(state, config);
    }

    const prepareDeck = () => {
        // * Shuffle Pickup deck
        shufflePickUpDeck();

        // * Move top card from Pickup to Discard Deck
        insertCardAtIndexToDiscardDeck(0, getCardByIndexFromPickupDeck(0));
    }

    // * Shuffle the deck
    const shufflePickUpDeck = () => {
        shuffle(
            PICKUP_DECK,
            getCardByIndexFromPickupDeck,
            insertCardAtIndexToPickupDeck
        );
    }

    const shuffleDiscardDeck = () => {
        shuffle(
            DISCARD_DECK,
            getCardByIndexFromDiscardDeck,
            insertCardAtIndexToDiscardDeck
        );
    }

    const shuffle = (deck, get, insert) => {
        let r, card;

        // Create a copy of the cardArray to shuffle (Works by swapping the last card with a randomly selected card)
        loop(deck, (c, idx) => {
            // Get a random Integer
            r = Math.floor(Math.random() * idx);
            // Get the next last card in the Store.deck
            card = get(idx - 1);
            // Whatever card was initially chosen, place a randomly selected one there now
            insert((idx - 1), get(r));
            // Place the card that was initially chosen in the position of the randomly selected card
            insert([r], card);
        }, -1)
    }

    // * Deal the cards to the players
    const dealCards = (players) => {
        loop(players, (player, p) => {
            let cards = getFirstNCardsFromPickupDeck(state.starting_hand_size);

            player.addCards(cards);
        });
    }

    const getPickupDeck = () => {
        return PICKUP_DECK;
    }

    const getDiscardDeck = () => {
        return DISCARD_DECK;
    }

    const getCardByIndexFromPickupDeck = (idx) => {
        return PICKUP_DECK.splice(idx, 1)[0];
    }

    const getCardByIndexFromDiscardDeck = (idx) => {
        return DISCARD_DECK.splice(idx, 1)[0];
    }

    const getFirstNCardsFromPickupDeck = (num_cards) => {
        return PICKUP_DECK.splice(0, num_cards);
    }

    const getFirstNCardsFromDiscardDeck = (num_cards) => {
        return DISCARD_DECK.splice(0, num_cards);
    }

    const removeCardAtIndexFromPickupDeck = (idx) => {
        return PICKUP_DECK.splice(idx, 1)[0];
    }

    const removeCardAtIndexFromDiscardDeck = (idx) => {
        return DISCARD_DECK.splice(idx, 1)[0];
    }

    const insertCardAtIndexToPickupDeck = (idx, card) => {
        return PICKUP_DECK.splice(idx, 0, card);
    }

    const insertCardAtIndexToDiscardDeck = (idx, card) => {
        return DISCARD_DECK.splice(idx, 0, card);
    }

    return {
        init,
        prepareDeck,

        getPickupDeck,
        getCardByIndexFromPickupDeck,
        getFirstNCardsFromPickupDeck,
        removeCardAtIndexFromPickupDeck,
        insertCardAtIndexToPickupDeck,

        getDiscardDeck,
        getCardByIndexFromDiscardDeck,
        getFirstNCardsFromDiscardDeck,
        removeCardAtIndexFromDiscardDeck,
        insertCardAtIndexToDiscardDeck,

        shufflePickUpDeck,
        shuffleDiscardDeck,

        dealCards,
    }

}