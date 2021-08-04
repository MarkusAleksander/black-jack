import * as POWERS from "./powers";

export const cards = [
    { value: "A", suit: "hearts", name: "Ace of Hearts", t: 2, l: 0, power: POWERS.CHANGE_SUIT }, //4
    { value: 13, suit: "hearts", name: "King of Hearts", t: 2, l: 12, power: POWERS.ANOTHER_TURN },
    { value: 12, suit: "hearts", name: "Queen of Hearts", t: 2, l: 11 },
    { value: 11, suit: "hearts", name: "Jack of Hearts", t: 2, l: 10 },
    { value: 10, suit: "hearts", name: "10 of Hearts", t: 2, l: 9, power: POWERS.CHANGE_DIRECTION }, //2
    { value: 9, suit: "hearts", name: "9 of Hearts", t: 2, l: 8 },
    { value: 8, suit: "hearts", name: "8 of Hearts", t: 2, l: 7, power: POWERS.MISS_TURN },
    { value: 7, suit: "hearts", name: "7 of Hearts", t: 2, l: 6 },
    { value: 6, suit: "hearts", name: "6 of Hearts", t: 2, l: 5 },
    { value: 5, suit: "hearts", name: "5 of Hearts", t: 2, l: 4 },
    { value: 4, suit: "hearts", name: "4 of Hearts", t: 2, l: 3 },
    { value: 3, suit: "hearts", name: "3 of Hearts", t: 2, l: 2 },
    { value: 2, suit: "hearts", name: "2 of Hearts", t: 2, l: 1, power: POWERS.PICKUP_2 },
    { value: "A", suit: "clubs", name: "Ace of Clubs", t: 0, l: 0, power: POWERS.CHANGE_SUIT }, //4
    { value: 13, suit: "clubs", name: "King of Clubs", t: 0, l: 12, power: POWERS.ANOTHER_TURN },
    { value: 12, suit: "clubs", name: "Queen of Clubs", t: 0, l: 11 },
    { value: 11, suit: "clubs", name: "Jack of Clubs", t: 0, l: 10, power: POWERS.PICKUP_7 },
    { value: 10, suit: "clubs", name: "10 of Clubs", t: 0, l: 9, power: POWERS.CHANGE_DIRECTION }, //2
    { value: 9, suit: "clubs", name: "9 of Clubs", t: 0, l: 8 },
    { value: 8, suit: "clubs", name: "8 of Clubs", t: 0, l: 7, power: POWERS.MISS_TURN },
    { value: 7, suit: "clubs", name: "7 of Clubs", t: 0, l: 6 },
    { value: 6, suit: "clubs", name: "6 of Clubs", t: 0, l: 5 },
    { value: 5, suit: "clubs", name: "5 of Clubs", t: 0, l: 4 },
    { value: 4, suit: "clubs", name: "4 of Clubs", t: 0, l: 3 },
    { value: 3, suit: "clubs", name: "3 of Clubs", t: 0, l: 2 },
    { value: 2, suit: "clubs", name: "2 of Clubs", t: 0, l: 1, power: POWERS.PICKUP_2 },
    { value: "A", suit: "diamonds", name: "Ace of Diamonds", t: 1, l: 0, power: POWERS.CHANGE_SUIT }, //4
    { value: 13, suit: "diamonds", name: "King of Diamonds", t: 1, l: 12, power: POWERS.ANOTHER_TURN },
    { value: 12, suit: "diamonds", name: "Queen of Diamonds", t: 1, l: 11 },
    { value: 11, suit: "diamonds", name: "Jack of Diamonds", t: 1, l: 10 },
    { value: 10, suit: "diamonds", name: "10 of Diamonds", t: 1, l: 9, power: POWERS.CHANGE_DIRECTION }, //2
    { value: 9, suit: "diamonds", name: "9 of Diamonds", t: 1, l: 8 },
    { value: 8, suit: "diamonds", name: "8 of Diamonds", t: 1, l: 7, power: POWERS.MISS_TURN },
    { value: 7, suit: "diamonds", name: "7 of Diamonds", t: 1, l: 6 },
    { value: 6, suit: "diamonds", name: "6 of Diamonds", t: 1, l: 5 },
    { value: 5, suit: "diamonds", name: "5 of Diamonds", t: 1, l: 4 },
    { value: 4, suit: "diamonds", name: "4 of Diamonds", t: 1, l: 3 },
    { value: 3, suit: "diamonds", name: "3 of Diamonds", t: 1, l: 2 },
    { value: 2, suit: "diamonds", name: "2 of Diamonds", t: 1, l: 1, power: POWERS.PICKUP_2 },
    { value: "A", suit: "spades", name: "Ace of Spades", t: 3, l: 0, power: POWERS.CHANGE_SUIT }, //4
    { value: 13, suit: "spades", name: "King of Spades", t: 3, l: 12, power: POWERS.ANOTHER_TURN },
    { value: 12, suit: "spades", name: "Queen of Spades", t: 3, l: 11 },
    { value: 11, suit: "spades", name: "Jack of Spades", t: 3, l: 10, power: POWERS.PICKUP_7 },
    { value: 10, suit: "spades", name: "10 of Spades", t: 3, l: 9, power: POWERS.CHANGE_DIRECTION }, //2
    { value: 9, suit: "spades", name: "9 of Spades", t: 3, l: 8 },
    { value: 8, suit: "spades", name: "8 of Spades", t: 3, l: 7, power: POWERS.MISS_TURN },
    { value: 7, suit: "spades", name: "7 of Spades", t: 3, l: 6 },
    { value: 6, suit: "spades", name: "6 of Spades", t: 3, l: 5 },
    { value: 5, suit: "spades", name: "5 of Spades", t: 3, l: 4 },
    { value: 4, suit: "spades", name: "4 of Spades", t: 3, l: 3 },
    { value: 3, suit: "spades", name: "3 of Spades", t: 3, l: 2 },
    { value: 2, suit: "spades", name: "2 of Spades", t: 3, l: 1, power: POWERS.PICKUP_2 },
];