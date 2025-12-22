import type { Grid, Level, Vec2, Movement, PortalInfo } from './types';
import { Direction, Wall, Sticky, Goal, Portal } from './types';

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

	movementStops(): boolean {
		const cell = this.grid[this.playerPosition.y][this.playerPosition.x];
		return cell instanceof Sticky || cell instanceof Goal;
	}

	teleports(): PortalInfo | null {
		const cell = this.grid[this.playerPosition.y][this.playerPosition.x];
		if (cell instanceof Portal) {
			const partner = cell.partnerCoords;
			const entryPosition = { ...this.playerPosition };
			this.playerPosition = { x: partner.x, y: partner.y };
			const exitPosition = { ...this.playerPosition };
			return {
				color: cell.color,
				entryPosition,
				exitPosition
			};
		}
		return null;
	}

	movePlayer(direction: Direction): Movement {
		let startPos = this.playerPosition;
		let moved = false;
		const teleportations: PortalInfo[] = [];

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
					if (this.movementStops()) {
						break;
					} else {
						const teleportation = this.teleports();
						if (teleportation) {
							teleportations.push(teleportation);
						}
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
					if (this.movementStops()) {
						break;
					} else {
						const teleportation = this.teleports();
						if (teleportation) {
							teleportations.push(teleportation);
						}
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
					if (this.movementStops()) {
						break;
					} else {
						const teleportation = this.teleports();
						if (teleportation) {
							teleportations.push(teleportation);
						}
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
					if (this.movementStops()) {
						break;
					} else {
						const teleportation = this.teleports();
						if (teleportation) {
							teleportations.push(teleportation);
						}
					}
				}
				break;
		}

		return {
			start: startPos,
			end: { ...this.playerPosition },
			d: moved ? direction : null,
			win: this.grid[this.playerPosition.y][this.playerPosition.x] instanceof Goal,
			teleportations
		};
	}
}
