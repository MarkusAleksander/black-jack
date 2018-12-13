import { cards } from "./card-array.js";
import { GameManager } from "./game-manager.js";
import { playerObject } from "./player-object.js";

const gameMgr = new GameManager("DEBUG");

(function gameInitialisation() {

    gameMgr.outputDetail('Game initialising...');

    // Initialise the Game State
    gameMgr.init(50);

    // Create the players
    createPlayers();

    // Prepare Game
    prepareGame();

    // Begin the Game
    playRound();

})();

// Create the Players
function createPlayers() {
    gameMgr.registerPlayers([
        new playerObject("You", document.getElementById("player_one"), "face_up", true),
        new playerObject("Computer Left", document.getElementById("player_two"), "face_down", false),
        new playerObject("Computer Top", document.getElementById("player_three"), "face_down", false),
        new playerObject("Computer Right", document.getElementById("player_four"), "face_down", false)
    ]);
}

// Prepare the Game
function prepareGame() {

    gameMgr.outputDetail('Preparing Game...');

    // Shuffle and Deal cards
    shuffle();
    deal();

    // Take the top card of the deck and place it in the discarddeck.
    gameMgr.setDiscardDeck();

    // Update  view
    deckViewUpdate();

    // Register Event Listeners
    gameMgr.getCurrentPlayer().cardList.addEventListener("mousedown", EVSelectCard);
    gameMgr.getDeckHTML().addEventListener("mousedown", EVPickupCard);

    gameMgr.outputDetail('Game Prepared');
}

// Play a Round
function playRound() { };

function shuffle() { };
function deal() { };
function deckViewUpdate() { };
function EVPickupCard() { };
function EVSelectCard() { };
