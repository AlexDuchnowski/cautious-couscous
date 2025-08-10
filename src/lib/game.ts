import type { Grid, Vec2 } from './types';
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

	constructor(grid: Grid, playerPosition: Vec2) {
		this.grid = grid;
		this.originalGrid = JSON.parse(JSON.stringify(grid)); // Deep copy to preserve original grid

		this.gridWidth = grid[0].length;
		this.gridHeight = grid.length;

		this.playerPosition = playerPosition;
		this.originalPlayerPosition = { ...playerPosition };
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

	movePlayer(direction: Direction): { start: Vec2; end: Vec2; d: Direction; win: boolean } {
		let startPos = this.playerPosition;

		switch (direction) {
			case Direction.Up:
				console.log('Moving Up...');
				while (
					![Wall, HTunnel].includes(
						this.grid[mod(this.playerPosition.y - 1, this.gridHeight)][this.playerPosition.x]
					)
				) {
					this.playerPosition.y = mod(this.playerPosition.y - 1, this.gridHeight);
					if (this.grid[this.playerPosition.y][this.playerPosition.x] === Sticky) {
						break;
					}
				}
				console.log('Finished Moving Up');
				break;
			case Direction.Right:
				console.log('Moving Right...');
				while (
					![Wall, VTunnel].includes(
						this.grid[this.playerPosition.y][mod(this.playerPosition.x + 1, this.gridWidth)]
					)
				) {
					this.playerPosition.x = mod(this.playerPosition.x + 1, this.gridWidth);
					if (this.grid[this.playerPosition.y][this.playerPosition.x] === Sticky) {
						break;
					}
				}
				console.log('Finished Moving Right');
				break;
			case Direction.Down:
				console.log('Moving Down...');
				while (
					![Wall, HTunnel].includes(
						this.grid[mod(this.playerPosition.y + 1, this.gridHeight)][this.playerPosition.x]
					)
				) {
					this.playerPosition.y = mod(this.playerPosition.y + 1, this.gridHeight);
					if (this.grid[this.playerPosition.y][this.playerPosition.x] === Sticky) {
						break;
					}
				}
				console.log('Finished Moving Down');
				break;
			case Direction.Left:
				console.log('Moving Left...');
				let count = 0;
				while (
					![Wall, VTunnel].includes(
						this.grid[this.playerPosition.y][mod(this.playerPosition.x - 1, this.gridWidth)]
					)
				) {
					this.playerPosition.x = mod(this.playerPosition.x - 1, this.gridWidth);
					count++;
					if (this.grid[this.playerPosition.y][this.playerPosition.x] === Sticky) {
						break;
					}
				}
				console.log('Finished Moving Left');
				break;
		}

		return {
			start: startPos,
			end: { ...this.playerPosition },
			d: direction,
			win: this.grid[this.playerPosition.y][this.playerPosition.x] === Goal
		};
	}
}
