import { Deck, View } from "./../Managers/managers";

const drawDiscardDeck = () => {

    let card = Deck.getDiscardDeck()[0];
    View.getDiscardDeck().innerHTML = View.createCardHTML(card, true);
}

export default drawDiscardDeck;