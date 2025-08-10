import type { Grid, Level, Vec2 } from './types';
import { Direction, CellType } from './types';

const { Empty, Goal, Wall, HTunnel, VTunnel, Sticky } = CellType;

function mod(n: number, m: number): number {
	return ((n % m) + m) % m;
}

export class Game {
	grid: Grid = [];
	playerPosition: Vec2 = { x: 0, y: 0 };

	gridWidth: number = 0;
	gridHeight: number = 0;

	originalGrid: Grid = [];
	originalPlayerPosition: Vec2 = { x: 0, y: 0 };

	constructor(level: Level) {
		this.grid = level.grid;
		this.originalGrid = JSON.parse(JSON.stringify(level.grid)); // Deep copy to preserve original grid

		this.gridWidth = level.grid[0].length;
		this.gridHeight = level.grid.length;

		this.playerPosition = level.playerPosition;
		this.originalPlayerPosition = { ...level.playerPosition };
	}

	reset() {
		this.grid = JSON.parse(JSON.stringify(this.originalGrid));
		this.playerPosition = { ...this.originalPlayerPosition };
	}

	getGrid(): Grid {
		return this.grid;
	}

	getPlayerPosition(): Vec2 {
		return this.playerPosition;
	}

	movePlayer(direction: Direction): { start: Vec2; end: Vec2; d: Direction | null; win: boolean } {
		let startPos = this.playerPosition;

		let moved = false;

		switch (direction) {
			case Direction.Up:
				while (
					![Wall, HTunnel].includes(
						this.grid[mod(this.playerPosition.y - 1, this.gridHeight)][this.playerPosition.x]
					)
				) {
					moved = true;
					this.playerPosition.y = mod(this.playerPosition.y - 1, this.gridHeight);
					if ([Sticky, Goal].includes(this.grid[this.playerPosition.y][this.playerPosition.x])) {
						break;
					}
				}
				break;
			case Direction.Right:
				while (
					![Wall, VTunnel].includes(
						this.grid[this.playerPosition.y][mod(this.playerPosition.x + 1, this.gridWidth)]
					)
				) {
					moved = true;
					this.playerPosition.x = mod(this.playerPosition.x + 1, this.gridWidth);
					if ([Sticky, Goal].includes(this.grid[this.playerPosition.y][this.playerPosition.x])) {
						break;
					}
				}
				break;
			case Direction.Down:
				while (
					![Wall, HTunnel].includes(
						this.grid[mod(this.playerPosition.y + 1, this.gridHeight)][this.playerPosition.x]
					)
				) {
					moved = true;
					this.playerPosition.y = mod(this.playerPosition.y + 1, this.gridHeight);
					if ([Sticky, Goal].includes(this.grid[this.playerPosition.y][this.playerPosition.x])) {
						break;
					}
				}
				break;
			case Direction.Left:
				let count = 0;
				while (
					![Wall, VTunnel].includes(
						this.grid[this.playerPosition.y][mod(this.playerPosition.x - 1, this.gridWidth)]
					)
				) {
					moved = true;
					this.playerPosition.x = mod(this.playerPosition.x - 1, this.gridWidth);
					count++;
					if ([Sticky, Goal].includes(this.grid[this.playerPosition.y][this.playerPosition.x])) {
						break;
					}
				}
				break;
		}

		return {
			start: startPos,
			end: { ...this.playerPosition },
			d: moved ? direction : null,
			win: this.grid[this.playerPosition.y][this.playerPosition.x] === Goal
		};
	}
}
