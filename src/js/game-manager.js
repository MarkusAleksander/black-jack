export class GameManager {

    constructor(mode = "DEFAULT") {
        this.mode = mode;
        this.players = [];
        // HTML elements
        this.deckElement_HTML = null;
        this.discard_deckElement_HTML = null;
        this.current_player_data_HTML = null;
        this.current_action_data_HTML = null;
        // Ai interval
        this.AI_Interval = 0;
    };

    // Initialise the game
    init(AI_Interval) {
        // Set HTML
        this.deckElement_HTML = document.getElementById("deck");
        this.discard_deckElement_HTML = document.getElementById("second_deck");
        this.current_player_data_HTML = document.getElementById("current_player_data");
        this.current_action_data_HTML = document.getElementById("current_action_data");

        // set AI interval
        this.AI_Interval = AI_Interval;

    };

    // Utility
    outputDetail(str) {
        if (this.mode == "DEBUG") { console.log(JSON.stringify(str)); }
    };

    // Register Players
    registerPlayers(ary) {
        this.players = ary;
        this.players.forEach(function (p) {
            p.registerGameManager(this);
        }.bind(this));
    };

    setDiscardDeck() { };

    getCurrentPlayer() { };

    getDeckHTML() { };


}