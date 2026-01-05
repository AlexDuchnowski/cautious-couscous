import { type Level, Empty as E, Wall as W, Goal as G, Portal as P } from '../types';

export const stage_2: Level[] = [
	{
		grid: [
			[new W(), new W(), new W(), new W(), new W()],
			[new W(), new E(), new E(), new P(0, { x: 2, y: 3 }), new W()],
			[new W(), new W(), new W(), new W(), new W()],
			[new W(), new P(0, { x: 3, y: 1 }), new E(), new G(), new W()],
			[new W(), new W(), new W(), new W(), new W()]
		],
		playerPosition: { x: 1, y: 1 }
	},
	{
		grid: [
			[new W(), new W(), new W(), new W()],
			[new E(), new P(0, { x: 1, y: 3 }), new G(), new W()],
			[new W(), new W(), new W(), new W()],
			[new E(), new P(0, { x: 1, y: 1 }), new W(), new E()]
		],
		playerPosition: { x: 0, y: 1 }
	}
];
