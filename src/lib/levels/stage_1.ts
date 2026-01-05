import { type Level, Empty as E, Wall as W, Goal as G, Sticky as S } from '../types';

export const stage_1: Level[] = [
	{
		grid: [
			[new E(), new S(), new E(), new E()],
			[new W(), new E(), new W(), new E()],
			[new E(), new E(), new S(), new E()],
			[new W(), new W(), new G(), new W()]
		],
		playerPosition: { x: 0, y: 0 }
	},
	{
		grid: [
			[new E(), new E(), new E(), new E(), new S()],
			[new E(), new E(), new E(), new S(), new E()],
			[new E(), new E(), new G(), new E(), new E()],
			[new S(), new E(), new E(), new E(), new S()],
			[new E(), new S(), new S(), new E(), new S()]
		],
		playerPosition: { x: 0, y: 0 }
	},
	{
		grid: [
			[new S(), new E(), new S(), new E(), new S(), new E(), new S(), new E()],
			[new E(), new S(), new E(), new S(), new E(), new S(), new E(), new S()],
			[new S(), new E(), new S(), new E(), new S(), new E(), new S(), new E()],
			[new E(), new S(), new E(), new S(), new E(), new S(), new E(), new S()],
			[new S(), new E(), new S(), new E(), new S(), new E(), new S(), new E()],
			[new E(), new S(), new E(), new S(), new E(), new S(), new E(), new S()],
			[new S(), new E(), new S(), new E(), new W(), new E(), new S(), new E()],
			[new E(), new S(), new E(), new S(), new E(), new S(), new E(), new G()]
		],
		playerPosition: { x: 0, y: 0 }
	},
	{
		grid: [
			[new E(), new W(), new E(), new E(), new E(), new W(), new E()],
			[new E(), new E(), new W(), new E(), new W(), new E(), new E()],
			[new E(), new E(), new W(), new G(), new W(), new E(), new E()],
			[new E(), new E(), new E(), new W(), new E(), new E(), new E()],
			[new E(), new W(), new W(), new W(), new E(), new E(), new E()],
			[new E(), new E(), new E(), new W(), new W(), new E(), new W()],
			[new W(), new E(), new E(), new S(), new E(), new W(), new E()]
		],
		playerPosition: { x: 1, y: 1 }
	}
];
