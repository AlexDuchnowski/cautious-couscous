import { CellType, type Level } from '../types';

const { Empty, Goal, Wall, HTunnel, VTunnel, Sticky } = CellType;

export const stage_4: Level[] = [
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
			[Empty, Sticky, Empty, Empty],
			[Wall, Empty, Empty, Empty],
			[Empty, Wall, Goal, Empty],
			[Wall, Empty, Wall, Wall]
		],
		playerPosition: { x: 0, y: 0 }
	},
	{
		grid: [
			[Empty, Empty, Empty, Sticky, Empty],
			[Empty, Empty, Empty, Sticky, Empty],
			[Empty, Empty, Goal, Empty, Empty],
			[Sticky, Empty, Empty, Empty, Sticky],
			[Empty, Sticky, Sticky, Empty, Sticky]
		],
		playerPosition: { x: 0, y: 0 }
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
	},
	{
		grid: [
			[Empty, Wall, Empty, Empty, Empty, Wall, Empty],
			[Empty, Empty, Wall, Empty, Wall, Empty, Empty],
			[Empty, Empty, Wall, Goal, Wall, Empty, Empty],
			[Empty, Empty, Empty, Wall, Empty, Empty, Empty],
			[Empty, Wall, Wall, Wall, Empty, Empty, Empty],
			[Empty, Empty, Empty, Wall, Wall, Empty, Wall],
			[Wall, Empty, Empty, Sticky, Empty, Wall, Empty]
		],
		playerPosition: { x: 1, y: 1 }
	}
];
