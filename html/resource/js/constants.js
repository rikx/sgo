/**
 * Constant (unchanging) values
 */
const CONSTANTS = {
	/**
	 * Player-related rules
	 */
	PLAYER_RULES: {
		2: {
			cardsDealtPerHand: 10
		},
		3: {
			cardsDealtPerHand: 9
		},
		4: {
			cardsDealtPerHand: 8
		},
		5: {
			cardsDealtPerHand: 7
		}
	},
	/**
	 * Deck types
	 */
	DECKS: {
		TRADITIONAL: [
			{
				name: 'Chopsticks',
				type: Chopsticks,
				value: 0,
				amount: 4
			},
			{
				name: 'Dumpling',
				type: Dumpling,
				value: 1,
				amount: 14
			},
			{
				name: 'One Maki',
				type: Roll,
				value: 0,
				rolls: 1,
				amount: 6
			},
			{
				name: 'Two Maki',
				type: Roll,
				value: 0,
				rolls: 2,
				amount: 12
			},
			{
				name: 'Three Maki',
				type: Roll,
				value: 0,
				rolls: 3,
				amount: 8
			},
			{
				name: 'Egg Nigri',
				type: Card,
				value: 1,
				amount: 5
			},
			{
				name: 'Salmon Nigri',
				type: Card,
				value: 3,
				amount: 10
			},
			{
				name: 'Squid Nigri',
				type: Card,
				value: 2,
				amount: 5
			},
			{
				name: 'Pudding',
				type: Pudding,
				value: 0,
				amount: 10
			},
			{
				name: 'Sashimi',
				type: Multiplier,
				value: 0,
				multiplier: 3,
				amount: 14
			},
					{
				name: 'Tempura',
				type: Multiplier,
				value: 0,
				multiplier: 2,
				amount: 14
			},
			{
				name: 'Wasabi',
				type: Wasabi,
				value: 0,
				multiplier: 3,
				amount: 6
			}
		]
		// TODO TRADITIONAL /w Soy Sauce variant
		// TODO GO PARTY deck
	}
};

// Future ES6 additions
// export default CONSTANTS;