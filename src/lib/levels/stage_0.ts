import { CellType, type Level } from '../types';

const { Empty, Goal, Wall, HTunnel, VTunnel, Sticky } = CellType;

export const stage_0: Level[] = [
	{
		grid: [
			[Empty, Wall, Empty, Wall],
			[Empty, Empty, Empty, Wall],
			[Wall, Empty, Empty, Empty],
			[Wall, Wall, Wall, Goal]
		],
		playerPosition: { x: 0, y: 0 }
	},
	{
		grid: [
			[Empty, Empty, Empty, Wall],
			[Empty, Wall, Empty, Empty],
			[Wall, Empty, Wall, Empty],
			[Empty, Empty, Empty, Goal]
		],
		playerPosition: { x: 0, y: 0 }
	},
	{
		grid: [
			[Empty, Empty, Empty, Wall],
			[Wall, Empty, Wall, Goal],
			[Wall, Wall, Wall, Empty],
			[Empty, Empty, Wall, Empty]
		],
		playerPosition: { x: 1, y: 1 }
	},
	{
		grid: [
			[Wall, Empty, Empty, Wall],
			[Empty, Empty, Wall, Empty],
			[Wall, Wall, Wall, Wall],
			[Empty, Empty, Wall, Goal]
		],
		playerPosition: { x: 1, y: 1 }
	},
	{
		grid: [
			[Empty, Wall, Empty, Wall, Empty],
			[Empty, Empty, Empty, Wall, Empty],
			[Wall, Wall, Goal, Wall, Empty],
			[Empty, Wall, Wall, Empty, Empty],
			[Empty, Empty, Wall, Empty, Wall]
		],
		playerPosition: { x: 3, y: 3 }
	}
];
