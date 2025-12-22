import { type Level, Empty, Wall, Goal, Sticky } from '../types';

export const stage_1: Level[] = [
	{
		grid: [
			[new Empty(), new Sticky(), new Empty(), new Empty()],
			[new Wall(), new Empty(), new Wall(), new Empty()],
			[new Empty(), new Empty(), new Sticky(), new Empty()],
			[new Wall(), new Wall(), new Goal(), new Wall()]
		],
		playerPosition: { x: 0, y: 0 }
	},
	{
		grid: [
			[new Empty(), new Empty(), new Empty(), new Empty(), new Sticky()],
			[new Empty(), new Empty(), new Empty(), new Sticky(), new Empty()],
			[new Empty(), new Empty(), new Goal(), new Empty(), new Empty()],
			[new Sticky(), new Empty(), new Empty(), new Empty(), new Sticky()],
			[new Empty(), new Sticky(), new Sticky(), new Empty(), new Sticky()]
		],
		playerPosition: { x: 0, y: 0 }
	},
	{
		grid: [
			[
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty()
			],
			[
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky()
			],
			[
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty()
			],
			[
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky()
			],
			[
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty()
			],
			[
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky()
			],
			[
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Wall(),
				new Empty(),
				new Sticky(),
				new Empty()
			],
			[
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Sticky(),
				new Empty(),
				new Goal()
			]
		],
		playerPosition: { x: 0, y: 0 }
	},
	{
		grid: [
			[new Empty(), new Wall(), new Empty(), new Empty(), new Empty(), new Wall(), new Empty()],
			[new Empty(), new Empty(), new Wall(), new Empty(), new Wall(), new Empty(), new Empty()],
			[new Empty(), new Empty(), new Wall(), new Goal(), new Wall(), new Empty(), new Empty()],
			[new Empty(), new Empty(), new Empty(), new Wall(), new Empty(), new Empty(), new Empty()],
			[new Empty(), new Wall(), new Wall(), new Wall(), new Empty(), new Empty(), new Empty()],
			[new Empty(), new Empty(), new Empty(), new Wall(), new Wall(), new Empty(), new Wall()],
			[new Wall(), new Empty(), new Empty(), new Sticky(), new Empty(), new Wall(), new Empty()]
		],
		playerPosition: { x: 1, y: 1 }
	}
];
