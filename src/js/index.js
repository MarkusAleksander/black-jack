import updateView from "./View/updateView";
import outputToBoard from "./View/outputToBoard";
import onHumanPlayerCardSelect from "./Gameplay/Play/onHumanPlayerCardSelect";
import handleCardPickup from "./Gameplay/Pickup/handleCardPickup";

import {
    Game,
    Deck,
    Players,
    View,
} from "./Managers/managers";

// * add window references for debugging
window.Game = Game;
window.Deck = Deck;
window.Players = Players;
window.View = View;

import outputToBoard from "./View/outputToBoard";
import updateView from "./View/updateView";

// * ------ Initialisation ------- * //

// * Initialise Game World
Game.init({});

// * Initialise Players
Players.init({
    num_players: 4,
});

// * Initialise View
View.init({
    pickup_deck_el: document.getElementById("pickup_deck"),
    discard_deck_el: document.getElementById("discard_deck"),
    updates_board_el: document.getElementById("game_updates"),
});

// * initialise the deck
Deck.init({});


// * ------ Preparation ------- * //

// * Create the players
Players.createPlayers();

// * prepare the deck
Deck.prepareDeck();

// * deal cards to each player
Deck.dealCards(Players.getPlayerList());


// * ------ Start Play ------- * //

// * Do initial draw
updateView();

// * Assign interactions to view
document.querySelector("#Player_0 .card_list").addEventListener("mousedown", onHumanPlayerCardSelect);
document.querySelector("#pickup_deck").addEventListener("mousedown", handleCardPickup);

// *
outputToBoard(`The starting card is a ${Deck.getDiscardDeckTopCard().name}`);

