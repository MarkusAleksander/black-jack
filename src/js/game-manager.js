export class GameManager {

    constructor(mode = "DEFAULT", cards) {
        this.mode = mode;
        this.players = [];
        // HTML elements
        this.deckElement_HTML = null;
        this.discard_deckElement_HTML = null;
        this.current_player_data_HTML = null;
        this.current_action_data_HTML = null;
        // Ai interval
        this.AI_Interval = null;
        // Card data
        this.deck = cards;
        this.discard_deck = [];
        this.card_w = 59;
        this.card_h = 90;
        // Game Data
        this.startingHandSize = 7;
        // State Data
        this.state = {
            current_player: null,
            current_player_index: 0,
            current_top_card: null,
            game_state: 'INIT',
        }
    };

    // Initialise the game
    init() {
        // Set HTML
        this.deckElement_HTML = document.getElementById("deck");
        this.discard_deckElement_HTML = document.getElementById("second_deck");
        this.current_player_data_HTML = document.getElementById("current_player_data");
        this.current_action_data_HTML = document.getElementById("current_action_data");
    };


    // Utility


    // Output detail if in DEBUG mode
    outputDetail(str) {
        if (this.mode == "DEBUG") { console.log(JSON.stringify(str)); }
    };


    // Initialisation methods


    // Register Players
    registerPlayers(ary) {
        this.players = ary;
        this.state.current_player = this.getPlayerByIndex(this.state.current_player_index);
    };
    // Prepare the discard deck for play
    prepareDiscardDeck() {
        // Take the top card of the deck and place it on the discard deck
        this.discard_deck.unshift(this.deck.shift());
        this.updateDiscardDeck();
    };
    checkGameEnded() {
        return (this.state.game_state = "ENDED") ? true : false;
    };
    checkDeckIsEmpty() {
        return (this.deck.length == 0) ? true : false;
    };

    // Getters


    // Get Deck Array
    getDeck() {
        return this.deck;
    };
    // Get Discard Deck Array
    getDiscardDeck() {
        return this.discard_deck;
    };
    // Get HTML Deck
    getDeckHTML() {
        return this.deckElement_HTML;
    };
    // Get Card By Index from Array
    getCardByIndex(i) {
        return this.deck[i];
    };
    getCurrentTopCard() {
        return this.state.current_top_card;
    };
    getCardDimensions() {
        return {
            w: this.card_w,
            h: this.card_h
        }
    };
    // Get Player Array
    getPlayers() {
        return this.players;
    };
    // Get Player By Index
    getPlayerByIndex(i) {
        return this.players[i];
    };
    // Get Current active player
    getCurrentPlayer() {
        return this.state.current_player;
    };
    getCurrentPlayerById() {
        return this.state.current_player_index;
    };
    // Get Human Player
    getHumanPlayer() {
        return this.players.filter(function (p) {
            return p.checkIsHuman() ? true : false;
        })[0];
    };
    // Get Starting Hand Size
    getStartingHandSize() {
        return this.startingHandSize;
    };
    // Get AI Interval
    getAIInterval() {
        return this.AI_Interval;
    };


    // Setters


    // Set Card By Index in the Deck Array
    setCardByIndex(i, c) {
        this.deck[i] = c;
    }
    // Set AI Interval
    setAIInterval(i) {
        this.AI_Interval = i;
    }
    // Set Deck
    setDeck(d) {
        this.deck = d;
    }


    // Update


    updateView() {
        this.discard_deckElement_HTML.innerHTML = `<img class="face_up" data-info="${this.getCurrentTopCard().value}, ${this.getCurrentTopCard().suit}" style="background-position: -${this.getCurrentTopCard().l * this.getCardDimensions().w}px -${this.getCurrentTopCard().t * this.getCardDimensions().h}px "/>`;
    }
    updateDiscardDeck() {
        this.state.current_top_card = this.discard_deck[0];
    }
    updateToNextPlayer() {
        this.state.current_player_index += 1;
        if (this.state.current_player_index >= this.players.length) {
            this.state.current_player_index = 0;
        }
        this.state.current_player = this.getPlayerByIndex(this.state.current_player_index);
    }
    updateState(s) {
        this.state.game_state = s;
    }
}