import type { Grid, Vec2, Direction } from './types';

class Game {
	grid: Grid = [];
	playerPosition: Vec2 = { x: 0, y: 0 };

	constructor(grid: Grid, playerPosition: Vec2) {
		this.grid = grid;
		this.playerPosition = playerPosition;
	}

	getGrid(): Grid {
		return this.grid;
	}

	getPlayerPosition(): Vec2 {
		return this.playerPosition;
	}

	movePlayer(direction: Direction): { start: Vec2; end: Vec2; d: Direction } {
		return {
			start: { ...this.playerPosition },
			end: { x: 1, y: 2 },
			d: direction
		};
	}
}
