import debugDetail from "../../Utilities/debugDetail";
import checkLegalPlayableMove from "../Play/checkLegalPlayableMove";
import onAIPlayerCardSelect from "../Play/onAIPlayerCardSelect";
import handleCardPickup from "../Pickup/handleCardPickup";

// * Handle AI making play choice
export default chooseAIPlayerActionChoice = () => {

    // * Get current AI player
    const current_AI_player = Players.getCurrentActivePlayer();

    // * get players current hand
    const current_hand = current_AI_player.getCurrentCards();

    // * get legal playable cards from hand
    const playable_cards = current_hand.filter((card) => {

        return checkLegalPlayableMove(card);
    });

    debugDetail(`[chooseAIPlayerActionChoice] Number of playable cards: ${playable_cards.length}`);

    // * if playable cards
    if (playable_cards.length && Math.random() >= 0.3) {
        // * more weighting to putting down cards than picking them up
        // * choice based on random value

        // * play a card
        debugDetail(`[chooseAIPlayerActionChoice] Player has chosen to play a card`);
        onAIPlayerCardSelect(playable_cards);
    } else {

        // * no playable cards, so has to pickup
        debugDetail(`Player must pickup`);
        handleCardPickup();
    }
}