export enum Direction {
	Up = 1,
	Right,
	Down,
	Left
}

class CellTypeClass {}

export class Empty extends CellTypeClass {}
export class Wall extends CellTypeClass {}
export class Goal extends CellTypeClass {}
export class Sticky extends CellTypeClass {}
export class Portal extends CellTypeClass {
	color: number;
	partnerCoords: { x: number; y: number };

	constructor(color: number, partnerCoords: { x: number; y: number }) {
		super();
		this.color = color;
		this.partnerCoords = partnerCoords;
	}
}

export type Grid = CellTypeClass[][];

export type Vec2 = { x: number; y: number };

export type Level = {
	grid: Grid;
	playerPosition: Vec2;
};

export type Movement = {
	start: Vec2;
	end: Vec2;
	d: Direction | null;
	win: boolean;
	teleportationStart?: Vec2;
	teleportationEnd?: Vec2;
	portalColor?: Number;
};
