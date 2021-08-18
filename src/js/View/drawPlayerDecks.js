import loop from "./../Utilities/loop";
import { Players, View } from "./../Managers/managers";

// * Define player decks
const drawPlayerDecks = () => {

    loop(Players.getPlayerList(), (player) => {
        const deck = player.getCurrentCards();

        // * get deck element
        const deck_el = player.getPlayerEl().querySelector('.card_list');

        // * remove HTML
        deck_el.innerHTML = "";

        loop(deck, (card) => {
            deck_el.insertAdjacentHTML(
                "beforeend",
                View.createListedCardHTML(card, player.getIsHuman())
            );
        });
    });
}

export default drawPlayerDecks;