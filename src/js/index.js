import { cards } from "./card-array.js";
import { GameManager } from "./game-manager.js";
import { ViewManager } from "./view-manager.js";
import { playerObject } from "./player-object.js";

const gameMgr = new GameManager("DEBUG", cards);
const viewMgr = new ViewManager();

(function gameInitialisation() {

    gameMgr.outputDetail('Game initialising...');

    // Initialise the Game
    gameMgr.init();

    // Register GameManager View Updater to View Manager
    viewMgr.registerView(gameMgr.updateView.bind(gameMgr));

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
    gameMgr.getPlayers().forEach(function (p) {
        p.registerGameManager(gameMgr);
        viewMgr.registerView(p.updateView.bind(p));
    });
}

// Prepare the Game
function prepareGame() {

    gameMgr.outputDetail('Preparing Game...');

    // Shuffle and Deal cards
    shuffle();
    deal();

    // Prepare the discard deck
    gameMgr.prepareDiscardDeck();

    // Update  view
    viewUpdate();

    // Register Event Listeners
    gameMgr.getHumanPlayer().getCardListHTML().addEventListener("mousedown", EVSelectCard);
    gameMgr.getDeckHTML().addEventListener("mousedown", EVPickupCard);

    gameMgr.outputDetail('Game Prepared');
}

// Shuffle the Card Deck
function shuffle() {

    gameMgr.outputDetail('Shuffling...');

    let r, z;
    // Create a copy of the cardArray to shuffle (Works by swapping the last card with a randomly selected card)
    for (let i = gameMgr.getDeck().length; i; i--) {
        // Get a random Integer
        r = Math.floor(Math.random() * i);
        // Get the next last card in the Store.deck
        z = gameMgr.getCardByIndex(i - 1);
        // Whatever card was initially chosen, place a randomly selected one there now
        gameMgr.setCardByIndex((i - 1), gameMgr.getCardByIndex(r));
        // Place the card that was initially chosen in the position of the randomly selected card
        gameMgr.setCardByIndex([r], z);
    }

    gameMgr.outputDetail('Deck Shuffled');
};

// Deal the Cards to the players
function deal() {

    gameMgr.outputDetail('Dealing...');
    // The Deal - For each player, give the first x number of card
    for (var i = 0; i <= (gameMgr.getPlayers().length - 1); i++) {
        for (var j = 0; j <= (gameMgr.getStartingHandSize() - 1); j++) {
            let card = gameMgr.getDeck().shift();  // Get top card
            gameMgr.getPlayerByIndex(i).addCard(card); // Give to player
        }
        // Update each Store.players view upon dealing the cards
        // gameMgr.getPlayerByIndex(i).viewUpdate();
    }
    gameMgr.outputDetail('Deck Dealed...');
};

// Play a Round
function playRound() {
    gameMgr.outputDetail("Start of Round.");

    // Check if current player is not a Human Player
    if (!gameMgr.getCurrentPlayer().checkIsHuman()) {

        // Current player is an AI - Get index of playable card, -1 if picking up
        let index = gameMgr.getCurrentPlayer().makeAction();

        if (index != -1) {
            playCardFromHand(index);
        } else {
            pickupCardFromDeck();
        }
    } else {
        // Don't automate - wait for player input
    }
};
// End the Round
function endRound() {

    gameMgr.outputDetail("End of Round.");

    // View Update
    viewUpdate();

    // Check Win
    checkWin();

    if (gameMgr.checkGameEnded()) {

        // If deck is empty, flip the deck
        if (gameMgr.checkDeckIsEmpty()) {
            flipdeck();
        }

        // Update to next player
        gameMgr.updateToNextPlayer();

        if (gameMgr.getCurrentPlayer().checkIsHuman()) {
            clearInterval(gameMgr.getAIInterval());
            playRound();
        } else {
            gameMgr.setAIInterval(window.setTimeout(playRound, 1500));
        }
    }
};

function checkWin() {
    if (gameMgr.getCurrentPlayer().getCurrentHand().length == 0) {
        gameMgr.outputDetail("Game has been won");
        gameMgr.updateState("ENDED");
        clearInterval(gameMgr.getAIInterval());
        return;
    }
    return;
}
function flipdeck() {
    gameMgr.outputDetail("Flipping deck.");
    gameMgr.setDeck(gameMgr.getDiscardDeck().reverse());
    gameMgr.prepareDiscardDeck();
}

// Update the view
function viewUpdate() {
    viewMgr.update();
};


// Game Action Functions

// Play selected card from hand
function playCardFromHand(index) {
    gameMgr.outputDetail(`Playing Card From Hand: ${index}`);
    // gameMgr.setCurrentPlayedAction(Store.getFlag(1));
    // Player is playing a card - place chosen card onto the Store.discardDeck
    gameMgr.getDiscardDeck().unshift(gameMgr.getCurrentPlayer().playCard(index));
    gameMgr.updateDiscardDeck();
    // Update player view
    //gameMgr.getCurrentPlayer().viewUpdate();
    //gameMgr.updateStore();
    // Update card Store.deck view
    //deckViewUpdate();
    gameMgr.outputDetail(`Player ${gameMgr.getCurrentPlayer().getName()} played a card.`);
    //current_action_p.innerHTML = currentAction;
    gameMgr.outputDetail(`Action: ${gameMgr.getCurrentPlayer().getName()} played a ${gameMgr.getCurrentTopCard().value} of ${gameMgr.getCurrentTopCard().suit}.`);
    // End the round
    endRound();
}
// Pickup a card from the deck
function pickupCardFromDeck() {
    gameMgr.outputDetail(`Picking up a card from the Deck`);
    // Get the card from the Store.deck and pass it the player
    gameMgr.getCurrentPlayer().addCard(gameMgr.getDeck().shift());
    // Update the view
    // gameMgr.getCurrentPlayer().viewUpdate();
    // End the Round
    // gameMgr.setCurrentPlayedAction(gameMgr.getFlag(0));
    endRound();
}


// Event Listeners

// Event for Picking Up a Card from the Deck
function EVPickupCard(event) {

    if (checkValidEvent(event)) {
        pickupCardFromDeck();
    } else {
        return false;
    }
};
// Event for Selecting a Card to Play
function EVSelectCard(event) {

    if (checkValidEvent(event)) {

        // Get target
        let selection = event.target.parentNode || event.srcElement.parentNode;

        if (selection.className == "card") {
            // Test legal move
            let index = gameMgr.getCurrentPlayer().makeAction(selection);
            gameMgr.outputDetail(`Card index: ${index}`);
            // If legal
            if (index != -1) {
                playCardFromHand(index);
            } else {
                // Don't do anything - no legal move has been made yet
                gameMgr.outputDetail("Illegal card.");
                return;
            }
        }
    } else {
        return false;
    }
};


// Utilities

// Check Event is Valid - Must be human player
function checkValidEvent(event) {

    if (!gameMgr.getCurrentPlayer().checkIsHuman()) {
        return false;
    }

    // Get Event selection and stopPropagation
    event = event || window.event;
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }

    return true;
}