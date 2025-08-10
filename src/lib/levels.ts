import { CellType, type Level } from './types';

const { Empty, Goal, Wall, HTunnel, VTunnel, Sticky } = CellType;

export const levels: Level[] = [
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
			[Empty, Sticky, Empty, Wall],
			[Wall, Empty, Empty, Empty],
			[Empty, Wall, Goal, Empty],
			[Wall, Empty, Wall, Wall]
		],
		playerPosition: { x: 0, y: 0 }
	},
	{
		grid: [
			[Empty, Wall, Empty, Wall, Empty],
			[Empty, Empty, Empty, Wall, Empty],
			[Wall, Wall, Goal, Wall, Empty],
			[Empty, Wall, Wall, Empty, Empty],
			[Empty, Empty, Wall, Empty, Empty]
		],
		playerPosition: { x: 3, y: 3 }
	},
	{
		grid: [
			[Empty, Wall, Empty, Empty, Empty, Wall, Empty],
			[Empty, Empty, Wall, Empty, Wall, Empty, Empty],
			[Empty, Empty, Wall, Goal, Wall, Empty, Empty],
			[Empty, Empty, Empty, Wall, Empty, Empty, Empty],
			[Empty, Wall, Wall, Wall, Empty, Empty, Empty],
			[Empty, Empty, Empty, Empty, Wall, Empty, Wall],
			[Wall, Empty, Empty, Empty, Empty, Wall, Empty]
		],
		playerPosition: { x: 1, y: 1 }
	}
];
