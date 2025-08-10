import type { Grid, Vec2 } from './types';
import { Direction } from './types';

export class Game {
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
		let startPos = this.playerPosition;

		switch (direction) {
			case Direction.Up:
				this.playerPosition.y = Math.max(0, this.playerPosition.y - 1);
				break;
			case Direction.Right:
				this.playerPosition.x = Math.min(this.grid[0].length - 1, this.playerPosition.x + 1);
				break;
			case Direction.Down:
				this.playerPosition.y = Math.min(this.grid.length - 1, this.playerPosition.y + 1);
				break;
			case Direction.Left:
				this.playerPosition.x = Math.max(0, this.playerPosition.x - 1);
				break;
		}

		return {
			start: startPos,
			end: { x: 1, y: 2 },
			d: direction
		};
	}
}
