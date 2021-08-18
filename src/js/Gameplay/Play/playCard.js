import debugDetail from "../../Utilities/debugDetail";
import outputToBoard from "../../View/outputToBoard";
import checkLegalPlayableMove from "./checkLegalPlayableMove";
import handlePlayCard from "./handlePlayCard";

// * Attempt to play a card
const playCard = ({ value, suit }) => {

    debugDetail(`[handlePlayCard] Attempting to play`);

    // * Check whether card can be played
    if (!checkLegalPlayableMove({ value, suit })) {
        debugDetail(`[handlePlayCard] Card not playable`);
        outputToBoard(`That card isn't playable!`);

        // * card not playable
        return false;
    }

    // * card is playable, so play it
    handlePlayCard({ value, suit });

    // * card is playable
    return true;
}

export default playCard;