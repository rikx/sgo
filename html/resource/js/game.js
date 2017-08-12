// Future ES6 additions
/*import * as cards from 'cards';
import CONSTANTS from 'constants';*/

/**
 * TODO design where PLAYER_POOL comes from
 * TEST 2 players
 */
var PLAYER_POOL = [
	{ 
		name: 'cmokx3'
	},
	{
		name: 'rikx'
	}
];

/**
 * 
 */
class Game {
	/**
	 * Creates a Game instance
	 *
	 * @this {Game}
	 */
	constructor () {
		this._players = [];
		this._deck = new Deck();
		this._cardsPerHand = 0;
		this._round = 1;
	}

	set players (players) { this._players = players; }
	get players () { return this._players; }

	set deck (deck) { this._deck = deck; }
	get deck () { return this._deck; }

	set cardsPerHand (cardsPerHand) { this._cardsPerHand = cardsPerHand; }
	get cardsPerHand () { return this._cardsPerHand; }

	set round (round) { this._round = round; }
	get round () { return this._round; }

	/**
	 * Executes the Game instance's initialization steps
	 *
	 * @this {Game}
	 * @param {String} deckType The type of deck to use
	 */
	start (deckType) {
		this.addPlayers();
		this.setCardsPerHand();
		//this.deck.populate(deckType); // TEST for now, defaulting to TRADITIONAL deck
		this.deck.populate('TRADITIONAL'); 
		this.deck.shuffle();
	}

	/**
	 *
	 */
	addPlayers () {
		let players = [];
		// add players from PLAYER_POOL
		for(let i=0; i<PLAYER_POOL.length; i++) {
			players.push(new Player(i, PLAYER_POOL[i].name)); // instance new player and push to array
		}
		this.players = players;
	}

	/**
	 * Set cards to deal to each player's hand, per round, based on the number of players
	 */
	setCardsPerHand () {
		this.cardsPerHand = CONSTANTS.PLAYER_RULES[this.players.length].cardsDealtPerHand;
	}

	/**
	 * Deal a card to each player until cardsPerHand limit has been reached
	 */
	dealCards () {
		// deal cards to each player until count exceeds cardsPerHand
		for (let i=0; i<this.cardsPerHand; i++) {
			for (let player of this.players) {
				player.hand.addCard(this.deck.dealCard());
			}
		}
	}

	/**
	 *
	 */
	roundStart () {
		this.dealCards();
	}

	/**
	 *
	 */
	roundEnd () {
		updateScores();
		// check if game is over (i.e. 3 rounds have occured)
		if (this.round === 3) { 
			determineWinner();
		} else {
			cleanPiles();
			this.round = this.round + 1; // increment round count; TODO can probably just use ++
		}
	}

	/**
	 * Updates each player's scores
	 */
	updateScores () {
		// TODO 
		for (let player of this.players) {
			player.updateScore();
		}
		// compile and compare total rolls from each pile for each Roll type and assign scores
	}

	/**
	 * Clear all player's piles
	 *
	 */
	cleanPiles () {
		for (let player of this.players) {
			player.pile.clean();
		}
	}

	/**
	 * Compile scores and indicates winner
	 */
	determineWinner () {
		//TODO
	}

	/**
	 * TEST Play 1 round of Sushi Go
	 */
	playRound () {
		// loop until round ends (i.e. when players have no more cards)
		for (let i=this.cardsPerHand; i > 0; i--) {
			// each player plays 1 card
			for (let player of this.players) {
				player.playCard();
			}	
		}
		this.updateScores(); // update all player's scores 
		// check if game is over (i.e. 3 rounds have occured)
		if (this.round === 3) { 
			determineWinner();
		} else {
			this.round = this.round + 1; // increment round count; TODO can probably just use ++
		}
	}
}

/**
 * Determines pudding points for each player
 */
function puddingMaster () {
	// TODO 
	//if < 2 players
	if(amount) {
		return 6;
	} else {
		return 0;
	}
	// TODO If more than 2 players
	if(amount){
		return 6
	} else if (amount === 3) {
		return 0;
	} else {
		return -6;
	}
};