import { Deck, View } from "./../Managers/managers";

export default drawDiscardDeck = () => {

    let card = Deck.getDiscardDeck()[0];
    View.getDiscardDeck().innerHTML = View.createCardHTML(card, true);
}