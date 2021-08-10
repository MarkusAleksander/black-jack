import debugDetail from "../Utilities/debugDetail";
import { cards } from "./../Cards/cards";
import loop from "./../Utilities/loop";

import { updateObject } from "./../Utilities/updateObject";

const DeckManager = () => {

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
        insertCardAtIndexToDiscardDeck(0, removeCardByIndexFromPickupDeck(0));
    }

    // * Shuffle the deck
    const shufflePickUpDeck = () => {
        shuffle(
            PICKUP_DECK,
            removeCardByIndexFromPickupDeck,
            insertCardAtIndexToPickupDeck
        );
    }

    const shuffleDiscardDeck = () => {
        shuffle(
            DISCARD_DECK,
            removeCardByIndexFromDiscardDeck,
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
            let cards = removeFirstNCardsFromPickupDeck(state.starting_hand_size);

            player.addCards(cards);
        });
    }

    const getPickupDeck = () => {
        return PICKUP_DECK;
    }

    const getPickupDeckTopCard = () => {
        return PICKUP_DECK[0];
    }

    const getPickupDeckSize = () => {
        return PICKUP_DECK.length;
    }

    const getDiscardDeck = () => {
        return DISCARD_DECK;
    }

    const getDiscardDeckTopCard = () => {
        return DISCARD_DECK[0];
    }

    const getDiscardDeckSize = () => {
        return DISCARD_DECK.length;
    }

    const removeCardByIndexFromPickupDeck = (idx) => {
        return PICKUP_DECK.splice(idx, 1)[0];
    }

    const removeCardByIndexFromDiscardDeck = (idx) => {
        return DISCARD_DECK.splice(idx, 1)[0];
    }

    const removeFirstNCardsFromPickupDeck = (num_cards) => {
        return PICKUP_DECK.splice(0, num_cards);
    }

    const removeFirstNCardsFromDiscardDeck = (num_cards) => {
        return DISCARD_DECK.splice(0, num_cards);
    }

    const removeCardAtIndexFromPickupDeck = (idx) => {
        return PICKUP_DECK.splice(idx, 1)[0];
    }

    const removeCardAtIndexFromDiscardDeck = (idx) => {
        return DISCARD_DECK.splice(idx, 1)[0];
    }

    const insertCardAtIndexToPickupDeck = (idx, card) => {
        PICKUP_DECK.splice(idx, 0, card);
    }

    const insertCardAtIndexToDiscardDeck = (idx, card) => {
        DISCARD_DECK.splice(idx, 0, card);
    }

    const insertToTopOfPickupDeck = (card) => {
        PICKUP_DECK.unshift(card);
    }

    const insertToTopOfDiscardDeck = (card) => {
        DISCARD_DECK.unshift(card);
    }

    const swapDecks = () => {
        debugDetail(`Refilling Pickup Deck from Discard Deck`);

        // TODO - What if no cards are left?

        // * Move all discarded cards to pickup deck, leaving last discarded card in discard pile
        const top_discard_card = removeCardAtIndexFromDiscardDeck(0);

        // * loop through remaining discard deck and add to pickup deck
        for (let idx = 0; idx < getDiscardDeckSize(); idx++) {
            insertToTopOfPickupDeck(removeCardByIndexFromDiscardDeck(idx));
        }

        // * add initial discarded card back to discard pile
        insertToTopOfDiscardDeck(top_discard_card);
    }

    return {
        init,
        prepareDeck,

        getPickupDeck,
        getPickupDeckSize,
        getPickupDeckTopCard,
        removeCardByIndexFromPickupDeck,
        removeFirstNCardsFromPickupDeck,
        removeCardAtIndexFromPickupDeck,
        insertCardAtIndexToPickupDeck,
        insertToTopOfPickupDeck,

        getDiscardDeck,
        getDiscardDeckSize,
        getDiscardDeckTopCard,
        removeCardByIndexFromDiscardDeck,
        removeFirstNCardsFromDiscardDeck,
        removeCardAtIndexFromDiscardDeck,
        insertCardAtIndexToDiscardDeck,
        insertToTopOfDiscardDeck,

        shufflePickUpDeck,
        shuffleDiscardDeck,

        swapDecks,

        dealCards,
    }

}

export const Deck = DeckManager();
