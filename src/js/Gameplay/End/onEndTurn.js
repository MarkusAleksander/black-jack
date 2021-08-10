import { Players } from "./../../Managers/managers";
import debugDetail from "../../Utilities/debugDetail";

import handleTurnBegin from "../Begin/handleTurnBegin";

export default onEndTurn = () => {

    // * update current players
    Players.setNextActivePlayer();

    debugDetail(`[chooseAIPlayerActionChoice] It is now ${Players.getCurrentActivePlayer().getPlayerName()}s turn`);

    // * begin next turn
    handleTurnBegin();
}