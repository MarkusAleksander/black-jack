import pickupCardFromDeck from "./pickupCardFromDeck";
import endTurn from "../End/endTurn";

export default handleCardPickup = (e) => {
    pickupCardFromDeck();
    endTurn();
}