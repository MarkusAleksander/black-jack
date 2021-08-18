import { Deck } from "./../../Managers/managers";

const checkLegalPlayableMove = ({ value, suit }) => {

    // * get current card attempting to play upon
    const current_top_card = Deck.getDiscardDeckTopCard();

    // * playable card must be of the same suit or of the same value
    return (value == current_top_card.value) || (suit == current_top_card.suit);
}

export default checkLegalPlayableMove;