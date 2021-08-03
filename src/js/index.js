import loop from "./Utilities/loop";
import outputDetail from "./Utilities/outputDetail";

import {
    GameManager,
    DeckManager,
    PlayerManager,
    ViewManager,
} from "./Managers/managers";
import { Player } from "./Player/player";

// * create game managers
const Game = GameManager();
const Deck = DeckManager();
const Players = PlayerManager();
const View = ViewManager();

// * add window references for debugging
window.Game = Game;
window.Deck = Deck;
window.Players = Players;
window.View = View;

// * initialise the game world
Game.init({
});

// * initialise the players
Players.init({
    num_players: 4,
});

Players.createPlayers();

// * initialise the view
View.init({
    pickup_deck_el: document.getElementById("pickup_deck"),
    discard_deck_el: document.getElementById("discard_deck"),
});

// * name the players
loop(Players.getPlayerList(), (player) => {
    const player_name = player.getPlayerName();
    View.addPlayerHTML(player_name, document.getElementById(player_name));
});

// * initliase the deck
Deck.init({});

// * prepare the deck
Deck.prepareDeck();

// * deal cards to each player
Deck.dealCards(Players.getPlayerList());

// * Define discard drawing function
const drawDiscardDeck = () => {
    let card = Deck.getDiscardDeck()[0];
    let card_HTML = View.createCardHTML(card, true);
    View.getDiscardDeck().innerHTML = card_HTML;
}

// * Define drawing player deck functions
const drawPlayerDecks = () => {
    loop(Players.getPlayerList(), (player) => {
        const deck = player.getCurrentCards();

        // * get deck element
        const deck_el = document.getElementById(player.getPlayerName()).querySelector('.card_list');

        // * remove HTML
        deck_el.innerHTML = "";

        loop(deck, (card) => {
            deck_el.insertAdjacentHTML("beforeend", View.createListedCardHTML(card, true));
        });

    });
}

// * update view 
const updateView = () => {
    // * Draw player decks
    drawPlayerDecks();
    // * Draw discard decks
    drawDiscardDeck();
}

// * Do initial draw
updateView();

// * define turn actions

// * Pickup a card from the deck
const pickupCardFromDeck = () => {
    outputDetail(`[pickupCardFromDeck] Picking up card`);

    // * get current player attempting pickup
    let current_player = Players.getCurrentActivePlayer();

    // * get pickup deck
    let top_card = Deck.removeCardByIndexFromPickupDeck(0);

    // * add picked up card to player deck
    current_player.addCard(top_card);

    outputDetail(`[pickupCardFromDeck] Picked up card: ${top_card.name}`);

    // * if deck is now empty, then swap decks
    if (Deck.getPickupDeckSize() <= 0) {
        Deck.swapDecks();
    }

    // * redraw the view
    updateView();

    // * end the turn
    endTurn();
}

const checkLegalPlayableMove = ({ value, suit }) => {
    // * get current card attempting to play upon
    const current_top_card = Deck.getDiscardDeckTopCard();

    // * playable card must be of the same suit or of the same value
    return (value == current_top_card.value) || (suit == current_top_card.suit);
}

const playCard = ({ value, suit }) => {
    outputDetail(`[playCard] Attempting to play`);

    // * get card from player hand
    let current_player = Players.getCurrentActivePlayer();

    // * RULES HERE
    if (!checkLegalPlayableMove({ value, suit })) {
        outputDetail(`[playCard] Card not playable`);
        return;
    }

    const card = current_player.removeCard({
        value,
        suit
    });

    outputDetail(`[playCard] Playing card: ${card.name}`);

    Deck.insertToTopOfDiscardDeck(card);

    updateView();

    // * end the turn
    endTurn();
}

// * Define Human Player Interaction
const onHumanPlayerCardSelect = (event) => {
    outputDetail(`[onHumanPlayerCardSelect]`);

    if (!Players.getCurrentActivePlayer().getIsHuman()) {
        outputDetail(`[onHumanPlayerCardSelect] Human player not currently active`);
        return;
    }

    // * check valid click target
    const selection = event.target.parentNode || event.srcElement.parentNode;

    // * make sure a card was clicked
    if (selection.className == "card") {
        // * get card reference
        const value = selection.getAttribute('data-v');
        const suit = selection.getAttribute('data-s');

        playCard({ value, suit })
    }
}

const onHumanPlayerCardPickup = (event) => {
    pickupCardFromDeck();
}

// * Assign interactions to view
document.querySelector("#Player_0 .card_list").addEventListener("mousedown", onHumanPlayerCardSelect);
document.querySelector("#pickup_deck").addEventListener("mousedown", onHumanPlayerCardPickup);


// * Define AI Interactions
const onAIPlayerCardSelect = () => {
    // * AI Player select card from hand
    outputDetail(`[onAIPlayerCardSelect]`);
}
const onAIPlayerCardPickup = () => {
    // * AI Player pickup card from deck
    outputDetail(`[onAIPlayerCardPickup]`);
    pickupCardFromDeck();
}

const chooseAIPlayerActionChoice = () => {
    // * Define AI choice here
    onAIPlayerCardPickup();
}

// * Define turn functions

const onEndTurn = () => {
    // * update current players
    Players.setNextActivePlayer();

    // * if AI
    if (!Players.getCurrentActivePlayer().getIsHuman()) {
        chooseAIPlayerActionChoice();
    } else {
        // * is human
        // ... wait for player interaction
    }
}

const endTurn = () => {
    outputDetail(`Ending turn...`);

    // * resolve anything before confirm turn is ended
    onEndTurn();
}