import { type Level, Empty, Wall, Goal, Portal } from '../types';

export const stage_2: Level[] = [
	{
		grid: [
			[new Empty(), new Empty(), new Wall(), new Wall(), new Empty()],
			[new Empty(), new Wall(), new Wall(), new Goal(), new Wall()],
			[new Empty(), new Empty(), new Wall(), new Empty(), new Wall()],
			[new Empty(), new Empty(), new Wall(), new Portal(0, { x: 1, y: 4 }), new Wall()],
			[new Wall(), new Portal(0, { x: 3, y: 3 }), new Empty(), new Wall(), new Wall()]
		],
		playerPosition: { x: 0, y: 0 }
	}
];
