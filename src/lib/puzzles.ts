import type { Grid, Vec2 } from './types';
import { CellType } from './types';

const { Empty, Goal, Wall, HTunnel, VTunnel, Sticky } = CellType;

export let smallPuzzleGrid: Grid = [
	[Empty, Wall, Empty, Wall, Empty],
	[Empty, Empty, Empty, Wall, Empty],
	[Wall, Wall, Goal, Wall, Empty],
	[Empty, Wall, Wall, Empty, Empty],
	[Empty, Empty, Wall, Empty, Empty]
];
export let smallPuzzlePlayerPosition: Vec2 = { x: 3, y: 3 };

export let largePuzzleGrid: Grid = [
	[Empty, Wall, Empty, Empty, Empty, Wall, Empty],
	[Empty, Empty, Wall, Empty, Wall, Empty, Empty],
	[Empty, Empty, Wall, Goal, Wall, Empty, Empty],
	[Empty, Empty, Empty, Wall, Empty, Empty, Empty],
	[Empty, Wall, Wall, Wall, Empty, Empty, Empty],
	[Empty, Empty, Empty, Empty, Wall, Empty, Wall],
	[Wall, Empty, Empty, Empty, Empty, Wall, Empty]
];
export let largePuzzlePlayerPosition: Vec2 = { x: 1, y: 1 };
