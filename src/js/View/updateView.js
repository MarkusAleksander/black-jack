import drawPlayerDecks from "./drawPlayerDecks";
import drawDiscardDeck from "./drawDiscardDeck";

export default updateView = () => {

    // * Draw player decks
    drawPlayerDecks();
    // * Draw discard decks
    drawDiscardDeck();
}