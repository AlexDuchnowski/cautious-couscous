import { type Level, Empty, Wall, Goal, Sticky } from '../types';

export const menu: Level[] = [
	{
		grid: [
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Goal(), new Wall(), new Goal(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Goal(), new Wall(), new Goal(), new Wall(), new Goal(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Goal(), new Wall(), new Goal(), new Wall(), new Goal(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()]
		],
		playerPosition: { x: 1, y: 1 }
	},
	{
		grid: [
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Empty(), new Empty(), new Goal(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Goal(), new Wall(), new Goal(), new Wall(), new Goal(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Goal(), new Wall(), new Goal(), new Wall(), new Goal(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()]
		],
		playerPosition: { x: 3, y: 1 }
	},
	{
		grid: [
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Goal(), new Wall(), new Goal(), new Wall(), new Goal(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Goal(), new Wall(), new Goal(), new Wall(), new Goal(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()]
		],
		playerPosition: { x: 5, y: 1 }
	},
	{
		grid: [
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Goal(), new Wall(), new Goal(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Goal(), new Wall(), new Goal(), new Wall(), new Goal(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()]
		],
		playerPosition: { x: 5, y: 3 }
	},
	{
		grid: [
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Goal(), new Wall(), new Goal(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Goal(), new Wall(), new Goal(), new Empty(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()]
		],
		playerPosition: { x: 5, y: 5 }
	},
	{
		grid: [
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Goal(), new Wall(), new Goal(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Goal(), new Empty(), new Empty(), new Empty(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()]
		],
		playerPosition: { x: 3, y: 5 }
	},
	{
		grid: [
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Goal(), new Wall(), new Goal(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Empty(), new Wall(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()]
		],
		playerPosition: { x: 1, y: 5 }
	},
	{
		grid: [
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Goal(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Empty(), new Wall(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall(), new Wall()]
		],
		playerPosition: { x: 1, y: 3 }
	}
];
