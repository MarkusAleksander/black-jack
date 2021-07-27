import loop from "./Utilities/loop";

import {
    GameManager,
    DeckManager,
    PlayerManager,
    ViewManager,
} from "./Managers/managers";

const Game = GameManager();
const Deck = DeckManager();
const Players = PlayerManager();
const View = ViewManager();

window.Game = Game;
window.Deck = Deck;
window.Players = Players;
window.View = View;

Game.init({
});

Players.init({
    num_players: 4,
});

Players.createPlayers();

View.init({
    pickup_deck_el: document.getElementById("pickup_deck"),
    discard_deck_el: document.getElementById("discard_deck"),
});

loop(Players.getPlayerList(), (player) => {
    const player_name = player.getPlayerName();
    View.addPlayerHTML(player_name, document.getElementById(player_name));
});

Deck.init({});

Deck.prepareDeck();

Deck.dealCards(Players.getPlayerList());
// * Define some drawing functions

const drawDiscardDeck = () => {
    let card = Deck.getDiscardDeck()[0];
    let card_HTML = View.createCardHTML(card, true);
    View.getDiscardDeck().innerHTML = card_HTML;
}

drawDiscardDeck();

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

drawPlayerDecks();