import debugDetail from "../../Utilities/debugDetail";
import playCard from "./playCard";
import endTurn from "../End/endTurn";

// * Define AI Player Interactions
export default onAIPlayerCardSelect = (playable_cards) => {

    // * AI Player select card from hand
    debugDetail(`[onAIPlayerCardSelect] Playing a card from hand`);

    // * Check if any of the cards are a power card
    let available_power_cards = playable_cards.filter(function (card) {

        return typeof card.power !== "undefined";
    });

    // * index of card choice
    let playing_card = null;

    // * if power cards available, we want to be more likely to selecting one of them
    if (available_power_cards.length && Math.random() > 0.4) {

        // * Select from the power card list
        playing_card = available_power_cards[Math.floor(Math.random() * available_power_cards.length)];

    } else {

        // * select any random card
        playing_card = playable_cards[Math.floor(Math.random() * playable_cards.length)];
    }

    playCard({
        value: playing_card.value,
        suit: playing_card.suit
    });

    endTurn();
}