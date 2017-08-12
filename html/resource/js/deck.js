// Future ES6 additions
/*import * as cards from 'cards';
import CONSTANTS from 'constants';*/

/**
 *
 */
class Deck {
	/**
	 * Creates a deck
	 *
	 * @this {Deck}
	 */
	constructor () {
		this._cards = []; // initialize cards array
	}

	set cards (cards) { this._cards = cards; }
	get cards () { return this._cards; }

	/**
	 * Populate deck with cards
	 *
	 * @param {string} deckType The type of deck to populate
	 */
	populate(deckType) {
		// loop through each card type in deck and add the corresponding amount
		for (let card of CONSTANTS.DECKS[deckType]) {
			let count = 0; // count amount of cards of this type that are added to deck
			while (count < card.amount) {
				this.cards.push(new card.type(card));
				count++;
			}
		}
	}

	/**
	 * Randomize array element order in-place.
	 * Using Durstenfeld shuffle algorithm.
	 *
	 */
	shuffle () {
		let cards = this.cards,
			randomIndex, temp;
		for (let i = cards.length - 1; i > 0; i--) {
			randomIndex = Math.floor(Math.random() * (i + 1));
			temp = cards[i];
			cards[i] = cards[randomIndex];
			cards[randomIndex] = temp;
		}
	}

	/**
	 * Deal one card from deck
	 *
	 * @return {Card} The last (top) card
	 */
	dealCard () {
		return this.cards.pop(); 
	}
}