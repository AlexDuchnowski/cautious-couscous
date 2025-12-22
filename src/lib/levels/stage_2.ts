import { type Level, Empty, Wall, Goal, Portal } from '../types';

export const stage_2: Level[] = [
	{
		grid: [
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Portal(0, { x: 2, y: 3 }), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall()],
			[new Wall(), new Portal(0, { x: 3, y: 1 }), new Empty(), new Goal(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall(), new Wall()]
		],
		playerPosition: { x: 1, y: 1 }
	},
	{
		grid: [
			[new Wall(), new Wall(), new Wall(), new Wall()],
			[new Empty(), new Portal(0, { x: 0, y: 3 }), new Goal(), new Wall()],
			[new Wall(), new Wall(), new Wall(), new Wall()],
			[new Portal(0, { x: 1, y: 1 }), new Wall(), new Empty(), new Empty()]
		],
		playerPosition: { x: 0, y: 1 }
	}
];
