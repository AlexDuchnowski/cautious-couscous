import type { Grid, Level, Vec2, Movement } from './types';
import { Direction, Empty, Wall, Sticky, Goal, Portal } from './types';

export function mod(n: number, m: number): number {
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

	movePlayer(direction: Direction): Movement {
		let startPos = this.playerPosition;

		let moved = false;

		switch (direction) {
			case Direction.Up:
				while (
					!(
						this.grid[mod(this.playerPosition.y - 1, this.gridHeight)][
							this.playerPosition.x
						] instanceof Wall
					)
				) {
					moved = true;
					this.playerPosition.y = mod(this.playerPosition.y - 1, this.gridHeight);
					if (
						[Sticky, Goal]
							.map(
								(clazz) => this.grid[this.playerPosition.y][this.playerPosition.x] instanceof clazz
							)
							.includes(true)
					) {
						break;
					}
				}
				break;
			case Direction.Right:
				while (
					!(
						this.grid[this.playerPosition.y][
							mod(this.playerPosition.x + 1, this.gridWidth)
						] instanceof Wall
					)
				) {
					moved = true;
					this.playerPosition.x = mod(this.playerPosition.x + 1, this.gridWidth);
					if (
						[Sticky, Goal]
							.map(
								(clazz) => this.grid[this.playerPosition.y][this.playerPosition.x] instanceof clazz
							)
							.includes(true)
					) {
						break;
					}
				}
				break;
			case Direction.Down:
				while (
					!(
						this.grid[mod(this.playerPosition.y + 1, this.gridHeight)][
							this.playerPosition.x
						] instanceof Wall
					)
				) {
					moved = true;
					this.playerPosition.y = mod(this.playerPosition.y + 1, this.gridHeight);
					if (
						[Sticky, Goal]
							.map(
								(clazz) => this.grid[this.playerPosition.y][this.playerPosition.x] instanceof clazz
							)
							.includes(true)
					) {
						break;
					}
				}
				break;
			case Direction.Left:
				while (
					!(
						this.grid[this.playerPosition.y][
							mod(this.playerPosition.x - 1, this.gridWidth)
						] instanceof Wall
					)
				) {
					moved = true;
					this.playerPosition.x = mod(this.playerPosition.x - 1, this.gridWidth);
					if (
						[Sticky, Goal]
							.map(
								(clazz) => this.grid[this.playerPosition.y][this.playerPosition.x] instanceof clazz
							)
							.includes(true)
					) {
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
