import { CellType, type Level } from '../types';

const { Empty, Goal, Wall, HTunnel, VTunnel, Sticky } = CellType;

export const menu: Level[] = [
	{
		grid: [
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Empty, Goal, Wall, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Wall, Empty, Wall, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Wall, Empty, Wall, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall]
		],
		playerPosition: { x: 1, y: 1 }
	},
	{
		grid: [
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Empty, Empty, Empty, Goal, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Wall, Empty, Wall, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Wall, Empty, Wall, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall]
		],
		playerPosition: { x: 3, y: 1 }
	},
	{
		grid: [
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Empty, Empty, Empty, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Empty, Wall],
			[Wall, Empty, Wall, Empty, Wall, Goal, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Wall, Empty, Wall, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall]
		],
		playerPosition: { x: 5, y: 1 }
	},
	{
		grid: [
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Empty, Empty, Empty, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Empty, Wall],
			[Wall, Empty, Wall, Empty, Wall, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Empty, Wall],
			[Wall, Empty, Wall, Empty, Wall, Goal, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall]
		],
		playerPosition: { x: 5, y: 3 }
	},
	{
		grid: [
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Empty, Empty, Empty, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Empty, Wall],
			[Wall, Empty, Wall, Empty, Wall, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Empty, Wall],
			[Wall, Empty, Wall, Goal, Empty, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall]
		],
		playerPosition: { x: 5, y: 5 }
	},
	{
		grid: [
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Empty, Empty, Empty, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Empty, Wall],
			[Wall, Empty, Wall, Empty, Wall, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Empty, Wall],
			[Wall, Goal, Empty, Empty, Empty, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall]
		],
		playerPosition: { x: 3, y: 5 }
	},
	{
		grid: [
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Empty, Empty, Empty, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Empty, Wall],
			[Wall, Goal, Wall, Empty, Wall, Empty, Wall],
			[Wall, Empty, Wall, Wall, Wall, Empty, Wall],
			[Wall, Empty, Empty, Empty, Empty, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall]
		],
		playerPosition: { x: 1, y: 5 }
	},
	{
		grid: [
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall],
			[Wall, Empty, Empty, Empty, Empty, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Empty, Wall],
			[Wall, Empty, Empty, Goal, Wall, Empty, Wall],
			[Wall, Empty, Wall, Wall, Wall, Empty, Wall],
			[Wall, Empty, Empty, Empty, Empty, Empty, Wall],
			[Wall, Wall, Wall, Wall, Wall, Wall, Wall]
		],
		playerPosition: { x: 1, y: 3 }
	}
];
