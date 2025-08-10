import { Game } from '$lib/game';
import { CellType } from './types';

const { Empty, Goal, Wall, HTunnel, VTunnel, Sticky } = CellType;

export const starterGame: Game = new Game(
	[
		[Empty, Wall, Empty, Wall],
		[Empty, Empty, Empty, Wall],
		[Wall, Empty, Empty, Empty],
		[Wall, Wall, Wall, Goal]
	],
	{ x: 0, y: 0 }
);

export const smallGame: Game = new Game(
	[
		[Empty, Wall, Empty, Wall, Empty],
		[Empty, Empty, Empty, Wall, Empty],
		[Wall, Wall, Goal, Wall, Empty],
		[Empty, Wall, Wall, Empty, Empty],
		[Empty, Empty, Wall, Empty, Empty]
	],
	{ x: 3, y: 3 }
);

export const largeGame: Game = new Game(
	[
		[Empty, Wall, Empty, Empty, Empty, Wall, Empty],
		[Empty, Empty, Wall, Empty, Wall, Empty, Empty],
		[Empty, Empty, Wall, Goal, Wall, Empty, Empty],
		[Empty, Empty, Empty, Wall, Empty, Empty, Empty],
		[Empty, Wall, Wall, Wall, Empty, Empty, Empty],
		[Empty, Empty, Empty, Empty, Wall, Empty, Wall],
		[Wall, Empty, Empty, Empty, Empty, Wall, Empty]
	],
	{ x: 1, y: 1 }
);
