/**
 *
 */
class Player {
	/**
	 * Creates a player instance
	 *
	 * @this {Player}
	 * @param {number} id The player's id
	 * @param {string} name The player's name
	 */
	constructor (id, name) {
		this._id = id;
		this._name = name;
		this._score = 0; // initial score is 0
		this._hand = new Hand();
		this._pile = new Pile();
	}

	set id (id) { this._id = id; }
	get id () { return this._id; }

	set name (name) { this._name = name; }
	get name () { return this._name; }

	set score (score) { this._score = score; }
	get score () { return this._score; }

	set hand (hand) { this._hand = hand; }
	get hand () { return this._hand; }

	set pile (pile) { this._pile = pile; }
	get pile () { return this._pile; }

	/**
	 * Play card from hand
	 *
	 * @param {number} id The id of the played card
	 */
	playCard (id) {
		let chosenCard = this.hand.removeCard(id); // remove card from hand
		this.pile.addCard(chosenCard); // add card to pile
	}

	/** 
	 * TEST version of playCard; no param
	 */
	playCard () {
		let chosenCard = this.hand.cards.pop();
		this.pile.addCard(chosenCard);
	}

	/**
	 *
	 */
	updateScore () {
		// TODO
		this.pile.setTotals()
	}
};

/**
 *
 */
class Hand {
	/*
	 * Creates an instance of a player's hand [of cards]
	 *
	 * @this {Hand}
	 */
	constructor() {
		this._cards = []; // initialize empty hand
	}

	//set player (player) { this._player = player; }
	//get player () { return this._player; }

	set cards (cards) { this._cards = cards; }
	get cards () { return this._cards; }

	/**
	 * Adds card to hand
	 *
	 * @param {Card} card The card to add
	 */
	addCard (card) {
		this.cards.push(card);
	}

	/**
	 * Remove card by id from hand
	 *
	 * @param {number} id The id of the card to remove
	 * @return {Card} removedCard
	 */
	removeCard (id) {
		// check array length before removing in case hand is already empty
		if(this.cards.length > 0) {
			let index = this.cards.findIndex(card => card.id === id); // find index of card to remove
			return this.cards.pop(index); // remove card from hand and return it
		}
	}
}

/*
 *
 */
class Pile extends Hand {
	/**
	 * Creates a card pile
	 *
	 * @this {Pile}
	 */
	constructor () {
		super();
		this._totalPudding = 0;
		this._totalRoll = 0;
	}

	set totalPudding (puddings) { this._totalPudding = puddings; }
	get totalPudding () { return this._totalPudding; }

	set totalRoll (rolls) { this._totalRoll = rolls; }
	get totalRoll () { return this._totalRoll; }

	/**
	 * Returns total rolls in the pile
	 *
	 * @param {string} cardType The type of card to total up
	 */
	setTotal (cardType) {
		let total = 0,
			totalFunc; 
		// select totaling logic
		switch (cardType) {
			case 'Roll':
				totalFunc = function (card) { return card.rolls; }; // add rolls for each card
				break;
			case 'Pudding':
				totalFunc = function (card) { return 1; }; // add 1 for each pudding
				break;
		}
		// for each card get value
		for (let card of this.cards) {
			// checks if matches type (class)
			if (cardType === card.constructor.name) {
				total += totalFunc(card); // execute totaling logic
			}
		}
		this[`total${cardType}`] = total; // set cardType total via setter
	}

	/**
	 *
	 *
	 */
	setTotals () {
		// for each card get value
		for (let card of this.cards) {
			// checks if matches type (class)
			switch (card.constructor.name) {
				case 'Roll':
					this.totalRoll = this.totalRoll + card.rolls; // TODO is using += valid?
					break;
				case 'Pudding':
					this.totalPudding = this.totalPudding + 1; // TODO is using this.totalPudding++ valid?
					break;
				case 'Wasabi':
					
					break;
				default:
					this.score = this.score + this.card.value; 
			}
		}
	}

	/**
	 * Empties the pile and resets rolls value (but not pudding)
	 *
	 */
	clean () {
		this.cards = [];
		this.totalRoll = 0;
	}

	/**
	 * Returns total rolls in the pile 
	 *
	 * @return {number} total
	 */
/*	getTotalRolls () {
		let total = 0;
		// for each card get value
		for (let card of this.cards) {
			// checks if matches type (class)
			if (cardType === card.constructor.name) {
				total += card.rolls;
			}
		}
		return total;
	}
*/
	/**
	 * Returns total puddings in the pile 
	 *
	 * @return {number} total
	 */
/*	getTotalPuddings () {
		let total = 0;
		// for each card get value
		for (let card of this.cards) {
			// checks if matches type (class)
			if (cardType === card.constructor.name) {
				total++;
			}
		}
		return total;
	}*/
}