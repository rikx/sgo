/**
 *
 */
class Card {
	/**
	 * Creates a card
	 *
	 * @this {Card} 
	 * @param {object} card The card information object
	 */
	constructor (card) {
		this._name = card.name;
		this._value = card.value;
	}

	set name (name) { this._name = name; }
	get name () { return this._name; }

	set value (value) { this._value = value; }
	get value () { return this._value; }
};

/**
 *
 */
class Chopsticks extends Card {
	/**
	 * Card's special ability
	 */
	special () {
		// TODO switch out from Pile with 1 card from next Hand
	}
};

/**
 *
 */
class Dumpling extends Card {
	/**
	 * Set dumplings value based on the total amount in a player's pile
	 *
	 * @param {number} amount The amount of dumplings
	 */
	setValue (amount) {
	 	// select value based on amount
	 	// TODO handle if amount is below 1
	 	switch(amount) {
	 		case 1:
	 			this.value = 1;
	 			break;
	 		case 2:
	 			this.value =  3;
	 			break;
	 		case 3:
	 			this.value =  6;
	 			break;
	 		case 4:
	 			this.value =  10;
	 			break;
	 		default:
	 			this.value =  15;
	 	}
	}
};

/**
 * 
 */
class Multiplier extends Card {
	/**
	 * Creates a multiplier type of card
	 *
	 * @this {Multiplier}
	 * @param {object} card The card information object
	 */
	constructor (card) {
		super(card);
		this._multiplier = card.multiplier;
	}

	set multiplier (multiplier) { this._multiplier = multiplier; }
	get multiplier () { return this._multiplier; }

	/**
	 * Returns sashimis value based on the total amount in a player's pile
	 *
	 * @param {number} amount The amount of sashimi cards
	 * @return {number} value
	 */
	getValue (amount) {
		let value = 0; // initial value of sashimi
		//
		if (amount >= this._multiplier) {
			// 
			switch(this.multiplier) {
				case 3:
					value = 10;
					break;
				case 2:
					value = 5;
					break;
			}
			return value * Math.floor(amount / this.multiplier); // multiply by factor of cards
		} else {
			return 0;
		}
	}
};

/**
 *
 */
/*class Nigri extends Card {
	constructor(type) {
		super(`{type} Nigri`, getValue(type));
		this._type = type;
	}

	*
	 * Returns nigri value based on its type
	 * @param {string} type The type (name) of nigri
	 * @return {number} value
	 
	getValue (type) {
		// select value based on type
		switch(type) {
			case 'Squid':
				return 3;
			case 'Salmon':
				return 2;
			case 'Egg':
				return 1;
		}
	}
};*/

/**
 *
 */
class Pudding extends Card {

	/**
	 *
	 */
	special () {
		// TODO highest pudding count gets 6 points
		// lowest pudding gets -6 points; if 2 players, lowest pudding instead gets 0 points 
	}
}

/**
 * 
 */
class Roll extends Card {
	/**
	 * Creates a roll type of card representing an amount of rolls
	 *
	 * @this {Roll}
	 * @param {object} card The card information object
	 */
	constructor (card) {
		super(card);
		this._rolls = card.rolls;
	}

	set rolls (rolls) { this._rolls = rolls; }
	get rolls () { return this._rolls; }

	/**
	 *
	 */
	special () {
		// TODO highest rolls count gets 6 points, second highest gets 3 points. 
		// if there are ties, split points
	}
};

/**
 *
 */
class SoySauce extends Card {
	/**
	 *
	 */
	special () {
		// TODO
	}
}

/**
 *
 */
class Wasabi extends Multiplier {
	/**
	 * Creates a roll type of card representing an amount of rolls
	 *
	 * @this {Roll}
	 * @param {object} card The card information object
	 */
	constructor (card) {
		super(card);
		this._pairedNigri = null;
	}

	set pairedNigri (pairedNigri) { this._pairedNigri = pairedNigri; }
	get pairedNigri () { return this._pairedNigri; }

	/**
	 * Returns wasabi multiplier value based on nigri parameter (if any )
	 *
	 * @override
	 * @return {number} value
	 */
	getValue () {
		// check if pairedNigri exists
		if(this.pairedNigri || {}){
			return nigri.value * this.multiplier; // wasabi special effect
		} else {
			return 0;
		}
	}
};

// card map (cardName, cardClass)
var cardTypes = new Map();
	cardTypes.set("Card", Card);
	cardTypes.set("Chopsticks", Chopsticks);
	cardTypes.set("Dumpling", Dumpling);
	cardTypes.set("Multiplier", Multiplier);
	cardTypes.set("Pudding", Pudding);
	cardTypes.set("Roll", Roll);
	cardTypes.set("Wasabi", Wasabi);

// Future ES6 additions
/*export {
	Card,
	Chopsticks,
	Dumpling,
	Multiplier,
	Pudding,
	Roll,
	Wasabi
}*/
