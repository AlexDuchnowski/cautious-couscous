export enum Direction {
	Up = 1,
	Right,
	Down,
	Left
}

export enum CellType {
	Empty = 0,
	Goal,
	Wall,
	HTunnel,
	VTunnel,
	Sticky
}

export type Grid = CellType[][];

export type Vec2 = { x: number; y: number };

export type Level = {
	grid: Grid;
	playerPosition: Vec2;
};

export type Movement = {
	start: Vec2;
	end: Vec2;
	d: Direction | null;
	win: boolean
};
