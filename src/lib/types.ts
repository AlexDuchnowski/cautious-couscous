export enum Direction {
	Up = 1,
	Right,
	Down,
	Left
}

export class CellClass {
	name() {
		return "Cell";
	}
}

export class Empty extends CellClass {
	name() {
		return "Empty";
	}
}
export class Wall extends CellClass {
	name() {
		return "Wall";
	}
}
export class Goal extends CellClass {
	name() {
		return "Goal";
	}
}
export class Sticky extends CellClass {
	name() {
		return "Sticky";
	}
}
export class Portal extends CellClass {
	color: number;
	partnerCoords: { x: number; y: number };

	constructor(color: number, partnerCoords: { x: number; y: number }) {
		super();
		this.color = color;
		this.partnerCoords = partnerCoords;
	}

	name() {
		return "Portal";
	}
}

export type Grid = CellClass[][];

export type Vec2 = { x: number; y: number };

export type Level = {
	grid: Grid;
	playerPosition: Vec2;
};

export type PortalInfo = {
	color: number;
	entryPosition: Vec2;
	exitPosition: Vec2;
};

export type Movement = {
	start: Vec2;
	end: Vec2;
	d: Direction | null;
	win: boolean;
	teleportations: PortalInfo[];
};
