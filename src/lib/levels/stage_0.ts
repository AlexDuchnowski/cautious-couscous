import { type Level, Empty, Wall, Goal } from '../types';

export const stage_0: Level[] = [
	{
		grid: [
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Goal(), new Empty(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall()]
		],
		playerPosition: { x: 1, y: 1 }
	},
	// {
	// 	grid: [
	// 		[new Empty(), new Wall(), new Empty(), new Wall()],
	// 		[new Empty(), new Empty(), new Empty(), new Wall()],
	// 		[new Wall(), new Empty(), new Empty(), new Empty()],
	// 		[new Wall(), new Wall(), new Wall(), new Goal()]
	// 	],
	// 	playerPosition: { x: 0, y: 0 }
	// },
	{
		grid: [
			[new Empty(), new Empty(), new Empty(), new Wall()],
			[new Empty(), new Wall(), new Empty(), new Empty()],
			[new Wall(), new Empty(), new Wall(), new Empty()],
			[new Empty(), new Empty(), new Empty(), new Goal()]
		],
		playerPosition: { x: 0, y: 0 }
	},
	{
		grid: [
			[new Empty(), new Empty(), new Empty(), new Wall()],
			[new Wall(), new Empty(), new Wall(), new Goal()],
			[new Wall(), new Wall(), new Wall(), new Empty()],
			[new Empty(), new Empty(), new Wall(), new Empty()]
		],
		playerPosition: { x: 1, y: 1 }
	},
	{
		grid: [
			[new Wall(), new Empty(), new Empty(), new Wall()],
			[new Empty(), new Empty(), new Wall(), new Empty()],
			[new Wall(), new Wall(), new Wall(), new Wall()],
			[new Empty(), new Empty(), new Wall(), new Goal()]
		],
		playerPosition: { x: 1, y: 1 }
	},
	{
		grid: [
			[new Empty(), new Wall(), new Empty(), new Wall(), new Empty()],
			[new Empty(), new Empty(), new Empty(), new Wall(), new Empty()],
			[new Wall(), new Wall(), new Goal(), new Wall(), new Empty()],
			[new Empty(), new Wall(), new Wall(), new Empty(), new Empty()],
			[new Empty(), new Empty(), new Wall(), new Empty(), new Wall()]
		],
		playerPosition: { x: 3, y: 3 }
	}
];
