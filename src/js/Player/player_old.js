export class playerObject {

    constructor(name, element, cardFacing, isHuman = false) {
        this.name = name;				// Name
        this.element = element;			// Associated HTML Element
        this.cardFacing = cardFacing;	// Card Facing face_up or face_down
        this.isHuman = isHuman;			// If active player
        this.currentHand = [];			// Array to hold currently held cards
        this.cardListHTML = this.element.firstElementChild.firstElementChild;	// HTML List of held Card
        this.gameMgr = null;         // Reference to the Game Manager
    }

    getCardListHTML() {
        return this.cardListHTML;
    }

    // Place card into current Hand
    addCard(a) {
        this.currentHand.push(a);
    }

    // Play a card
    playCard(c) {
        return this.currentHand.splice(c, 1)[0];
    }

    findCardByValue(c) {
        return c.value == this.value;
    }

    findCardBySuit(c) {
        return c.suit == this.suit;
    }

    findCardIndex(c) {
        return (c.value == this.value) && (c.suit == this.suit);
    }

    findMatchingCards(c) {
        return (c.value == this.gameMgr.getCurrentTopCard().value) || (c.suit == this.gameMgr.getCurrentTopCard().suit);
    }

    findMatchingCardByElement(c) {
        return (c.value == this.value) && (c.suit == this.suit);
    }

    // Make an action
    makeAction(selection) {
        if (this.isHuman) {
            if (selection.getAttribute('data-v') == this.gameMgr.getCurrentTopCard().value || selection.getAttribute('data-s') == this.gameMgr.getCurrentTopCard().suit) {
                // Put data in an object and pass to function
                return this.currentHand.findIndex(
                    this.findMatchingCardByElement,
                    {
                        value: selection.getAttribute('data-v'),
                        suit: selection.getAttribute('data-s')
                    }
                );
            } else {
                return -1;
            }
        } else {
            let playableCards = [];
            let playableCardsIndex = [];
            // Filter current hand to playable card index values
            playableCards = this.currentHand.filter(this.findMatchingCards.bind(this));
            // If no matching cards, return -1
            if (playableCards.length == 0) {
                return -1;
            }
            // Else create array of indexes
            for (var i = 0; i <= (playableCards.length - 1); i++) {
                playableCardsIndex.push(this.currentHand.findIndex(this.findCardIndex, playableCards[i]));
            }
            // Add option to pickUp
            playableCardsIndex.push(-1);
            return playableCardsIndex[Math.floor(Math.random() * playableCardsIndex.length)];
        }
    }

    // Register Game Manager
    registerGameManager(gameMgr) {
        this.gameMgr = gameMgr;
        this.gameMgr.outputDetail("Manager Registered");
    }

    // Check if human
    checkIsHuman() {
        return this.isHuman;
    }

    // Get Name
    getName() {
        return this.name;
    }

    // Update View
    updateView() {
        this.cardListHTML.innerHTML = '';
        for (var x = 0; x <= (this.currentHand.length - 1); x++) {
            this.cardListHTML.innerHTML += '<li class="card" data-v="' + this.currentHand[x].value + '" data-s="' + this.currentHand[x].suit + '"><img class="' + this.cardFacing + '" style="background-position: -' + this.currentHand[x].l * this.gameMgr.getCardDimensions().w + 'px -' + this.currentHand[x].t * this.gameMgr.getCardDimensions().h + 'px "/></li>';
        }
    }

    // Get current hand
    getCurrentHand() {
        return this.currentHand;
    }
}