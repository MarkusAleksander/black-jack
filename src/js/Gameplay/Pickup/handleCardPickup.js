import pickupCardFromDeck from "./pickupCardFromDeck";
import endTurn from "../End/endTurn";

const handleCardPickup = (e) => {
    pickupCardFromDeck();
    endTurn();
}

export default handleCardPickup;