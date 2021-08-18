import drawPlayerDecks from "./drawPlayerDecks";
import drawDiscardDeck from "./drawDiscardDeck";

const updateView = () => {

    // * Draw player decks
    drawPlayerDecks();
    // * Draw discard decks
    drawDiscardDeck();
}

export default updateView;