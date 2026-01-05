import { type Level, Empty as E, Wall as W, Goal as G } from '../types';

export const stage_0: Level[] = [
	{
		grid: [
			[new W(), new W(), new W(), new W(), new W()],
			[new W(), new E(), new E(), new E(), new W()],
			[new W(), new W(), new W(), new E(), new W()],
			[new W(), new W(), new G(), new E(), new W()],
			[new W(), new W(), new W(), new W(), new W()]
		],
		playerPosition: { x: 1, y: 1 }
	},
	{
		grid: [
			[new W(), new W(), new W(), new E(), new W()],
			[new W(), new E(), new W(), new E(), new G()],
			[new W(), new E(), new W(), new W(), new W()],
			[new E(), new E(), new W(), new E(), new E()],
			[new W(), new W(), new W(), new E(), new W()]
		],
		playerPosition: { x: 1, y: 1 }
	},
	// {
	// 	grid: [
	// 		[new E(), new W(), new E(), new W()],
	// 		[new E(), new E(), new E(), new W()],
	// 		[new W(), new E(), new E(), new E()],
	// 		[new W(), new W(), new W(), new G()]
	// 	],
	// 	playerPosition: { x: 0, y: 0 }
	// },
	{
		grid: [
			[new E(), new E(), new E(), new W()],
			[new E(), new W(), new E(), new E()],
			[new W(), new E(), new W(), new E()],
			[new E(), new E(), new E(), new G()]
		],
		playerPosition: { x: 0, y: 0 }
	},
	{
		grid: [
			[new E(), new E(), new E(), new W()],
			[new W(), new E(), new W(), new G()],
			[new W(), new W(), new W(), new E()],
			[new E(), new E(), new W(), new E()]
		],
		playerPosition: { x: 1, y: 1 }
	},
	{
		grid: [
			[new W(), new E(), new E(), new W()],
			[new E(), new E(), new W(), new E()],
			[new W(), new W(), new W(), new W()],
			[new E(), new E(), new W(), new G()]
		],
		playerPosition: { x: 1, y: 1 }
	},
	{
		grid: [
			[new E(), new W(), new E(), new W(), new E()],
			[new E(), new E(), new E(), new W(), new E()],
			[new W(), new W(), new G(), new W(), new E()],
			[new E(), new W(), new W(), new E(), new E()],
			[new E(), new E(), new W(), new E(), new W()]
		],
		playerPosition: { x: 3, y: 3 }
	}
];
