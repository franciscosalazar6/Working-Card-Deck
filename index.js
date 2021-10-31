
let suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J: 11', 'Q: 12', 'K: 13', 'A: 14'];
let player1 = [];
let player2 = [];

class Card {
    constructor (suits, values) {
        this.suits = suits;
        this.values = values;
    }
}

class Deck {
    constructor () { 
        this.deck = [];
    }

    createDeck(suits, values) {
        for (let suit of suits) {
            for(let value of values) {
                this.deck.push(new Card(suit, value));
            }
        }
        return this.deck; 
    }


    shuffle() {
        let counter = this.deck.length, temp, i;

        while(counter) {
            i = Math.floor(Math.random() * counter --);
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp;
        }

        player1.push(this.deck.slice(0, 26));
        player2.push(this.deck.slice(26, 52));
        return this.deck;
    }

    deal() {
        let hand = [];
        while(hand.length < 1) {
            hand.push(this.deck.pop());
        }
        return hand;
    }
}

let deck = new Deck(suits, values);
deck.createDeck(suits, values);
console.log(deck.shuffle());
console.log(player1);
console.log(player2);