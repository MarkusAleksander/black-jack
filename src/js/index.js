import loop from "./Utilities/loop";
import outputDetail from "./Utilities/outputDetail";

import * as PLAYER_STATES from "./Player/player_states";
import * as POWERS from "./Cards/powers";

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

// * initialise the deck
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

    Players.getCurrentActivePlayer().updateActionState(PLAYER_STATES.ACTION_DID_PICKUP);

    // * redraw the view
    updateView();

    // * end the turn
    // endTurn();
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

    Players.getCurrentActivePlayer().updateActionState(PLAYER_STATES.ACTION_DID_PUTDOWN);

    updateView();

    // * end the turn
    // endTurn();
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

        playCard({ value, suit });
        endTurn();
    }
}

const onHumanPlayerCardPickup = (event) => {
    pickupCardFromDeck();
    endTurn();
}

// * Assign interactions to view
document.querySelector("#Player_0 .card_list").addEventListener("mousedown", onHumanPlayerCardSelect);
document.querySelector("#pickup_deck").addEventListener("mousedown", onHumanPlayerCardPickup);


// * Define AI Interactions
const onAIPlayerCardSelect = (playable_cards) => {
    // * AI Player select card from hand
    outputDetail(`[onAIPlayerCardSelect] Playing a card from hand`);

    const card_choice_idx = Math.floor(Math.random() * playable_cards.length);

    const playing_card = playable_cards[card_choice_idx];

    playCard({
        value: playing_card.value,
        suit: playing_card.suit
    });

    endTurn();

}
const onAIPlayerCardPickup = () => {
    // * AI Player pickup card from deck
    outputDetail(`[onAIPlayerCardPickup] Picking a card from the deck`);
    pickupCardFromDeck();
    endTurn();
}

const chooseAIPlayerActionChoice = () => {
    // * Define AI choice here

    // * Check has playable cards
    const current_AI_player = Players.getCurrentActivePlayer();

    // * get current hand
    const current_hand = current_AI_player.getCurrentCards();

    // * get playable cards from hand
    const playable_cards = current_hand.filter((card) => {
        return checkLegalPlayableMove(card);
    });

    outputDetail(`[chooseAIPlayerActionChoice] Number of playable cards: ${playable_cards.length}`);

    // * if playable cards
    if (playable_cards.length) {
        // * choose either to play a card or pickup
        // TODO: Give weighting to play cards when possible
        let choice = Math.random();

        // * more weighting to putting down cards than picking them up
        if (choice >= 0.3) {
            // * play a card
            outputDetail(`[chooseAIPlayerActionChoice] Player has chosen to play a card`);
            onAIPlayerCardSelect(playable_cards);
        } else {
            // * pickup a card
            outputDetail(`[chooseAIPlayerActionChoice] Player has chosen to pickup a card`);
            onAIPlayerCardPickup();
        }

    } else {
        // * no playable cards, so has to pickup
        outputDetail(`Player must pickup`);
        onAIPlayerCardPickup();
    }
}

// * Define end turn functions

const onEndTurn = () => {

    // * update current players
    Players.setNextActivePlayer();

    outputDetail(`[chooseAIPlayerActionChoice] It is now ${Players.getCurrentActivePlayer().getPlayerName()}s turn`);

    // * Resolve any effects
    if (Players.getCurrentActivePlayer().getEffectState() !== PLAYER_STATES.EFFECT_NO_EFFECT) {
        outputDetail(`Current player is affected by ${Players.getCurrentActivePlayer().getEffectState()}`);
        resolvePowerEffectState(
            Players.getCurrentActivePlayer(),
            Players.getCurrentActivePlayer().getEffectState()
        );

    } else {
        // * no effect in play, continue as normal
        // * if AI
        if (!Players.getCurrentActivePlayer().getIsHuman()) {
            outputDetail(`[chooseAIPlayerActionChoice] Player is thinking...`);
            // * simulate player thinking before choice (slow down game)
            window.setTimeout(chooseAIPlayerActionChoice, 2000);
        } else {
            // * is human
            // ... wait for player interaction
        }
    }

}

const applyPowerEffect = (power) => {
    switch (power) {
        case POWERS.CHANGE_DIRECTION:
            // * Change play direction
            break;
        case POWERS.CHANGE_SUIT:
            // * Change playable suit
            break;
        case POWERS.ANOTHER_TURN:
            // * Player has another go
            Players.getCurrentNextPlayer().updateEffectState(PLAYER_STATES.EFFECT_ANOTHER_TURN);
            break;
        case POWERS.MISS_TURN:
            // * Next player misses turn
            Players.getCurrentNextPlayer().updateEffectState(PLAYER_STATES.EFFECT_MUST_MISS_TURN);
            break;
        case POWERS.PICKUP_2:
            // * Next player must pickup 2
            Players.getCurrentNextPlayer().updateEffectState(PLAYER_STATES.EFFECT_MUST_PICK_2);
            break;
        case POWERS.PICKUP_7:
            // * Next player must pickup 7
            Players.getCurrentNextPlayer().updateEffectState(PLAYER_STATES.EFFECT_MUST_PICK_7);
            break;
        default:
            outputDetail(`[applyPowerEffect] Unknown power applied! ${power}`);
    }
}

const resolvePowerEffectState = (currentPlayer, effect_state) => {
    debugger;
    switch (effect_state) {
        case PLAYER_STATES.EFFECT_ANOTHER_TURN:
            // * Player has another go
            outputDetail(`[resolvePowerEffectState] Player taking another turn [TODO]`);
            break;
        case PLAYER_STATES.EFFECT_MUST_MISS_TURN:
            // * go straight to end turn
            outputDetail(`[resolvePowerEffectState] Missing Turn`);
            endTurn();
            break;
        case PLAYER_STATES.EFFECT_MUST_PICK_2:
            // * Next player must pickup 2 then end turn
            outputDetail(`[resolvePowerEffectState] Picking up 2 cards`);
            for (let c = 0; c < 2; c++) {
                pickupCardFromDeck();
            }
            endTurn();
            break;
        case PLAYER_STATES.EFFECT_MUST_PICK_7:
            // * Next player must pickup 7 then end turn
            for (let c = 0; c < 7; c++) {
                pickupCardFromDeck();
            }
            endTurn();
            break;
        default:
            outputDetail(`[resolvePowerEffectState] Unknown effect state applied! ${effect_state}`);
    }
}

const hasWinConditionBeenReached = () => {
    outputDetail(`[hasWinConditionBeenReached] Checking win condition`);

    // * Current player has won if they have no cards left
    let num_cards_remaining = Players.getCurrentActivePlayer().getHandSize();

    outputDetail(`[hasWinConditionBeenReached] Player has ${num_cards_remaining} cards remaining`);

    return num_cards_remaining === 0;
}

const endTurn = () => {
    Players.getCurrentActivePlayer().updatePlayState(PLAYER_STATES.HAS_PLAYED);

    outputDetail(`[endTurn] Ending turn...`);

    // * If player put card down, then apply power
    outputDetail(`[endTurn] actionState of current player: ${Players.getCurrentActivePlayer().getActionState()}`);
    if (Players.getCurrentActivePlayer().getActionState() === PLAYER_STATES.ACTION_DID_PUTDOWN) {
        // * Player putdown a card, check if power card
        const top_card = Deck.getDiscardDeckTopCard();
        if (top_card.power) {
            outputDetail(`[endTurn] Card putdown is a power card: ${top_card.power}`);
            applyPowerEffect(top_card.power);
        }
    }

    if (!hasWinConditionBeenReached()) {
        // * resolve anything before confirm turn is ended
        outputDetail(`------------`);
        onEndTurn();
    } else {
        outputDetail(`[endTurn] ${Players.getCurrentActivePlayer().getPlayerName()} has won!`);
    }
}