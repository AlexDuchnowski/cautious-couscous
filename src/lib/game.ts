import type { Grid, Vec2 } from './types';
import { Direction, CellType } from './types';

const { Empty, Goal, Wall, HTunnel, VTunnel, Sticky } = CellType;

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
				while (
					![Wall, HTunnel].includes(
						this.grid[(this.playerPosition.y - 1) % this.gridHeight][this.playerPosition.x]
					)
				) {
					this.playerPosition.y = (this.playerPosition.y - 1) % this.gridHeight;
					if (this.grid[this.playerPosition.y][this.playerPosition.x] === Sticky) {
						break;
					}
				}
				break;
			case Direction.Right:
				while (
					![Wall, VTunnel].includes(
						this.grid[this.playerPosition.y][(this.playerPosition.x + 1) % this.gridWidth]
					)
				) {
					this.playerPosition.x = (this.playerPosition.x + 1) % this.gridWidth;
					if (this.grid[this.playerPosition.y][this.playerPosition.x] === Sticky) {
						break;
					}
				}
				break;
			case Direction.Down:
				while (
					![Wall, HTunnel].includes(
						this.grid[(this.playerPosition.y + 1) % this.gridHeight][this.playerPosition.x]
					)
				) {
					this.playerPosition.y = (this.playerPosition.y + 1) % this.gridHeight;
					if (this.grid[this.playerPosition.y][this.playerPosition.x] === Sticky) {
						break;
					}
				}
				break;
			case Direction.Left:
				while (
					![Wall, VTunnel].includes(
						this.grid[this.playerPosition.y][(this.playerPosition.x - 1) % this.gridWidth]
					)
				) {
					this.playerPosition.x = (this.playerPosition.x - 1) % this.gridWidth;
					if (this.grid[this.playerPosition.y][this.playerPosition.x] === Sticky) {
						break;
					}
				}
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
