import { writable } from 'svelte/store';
import mediaQueries from '../../../theme/media-queries.json';

export enum BREAKPOINTS {
	SMALLEST = 0,
	PHONE = 600,
	TABLET = 768,
	LAPTOP = 1024,
	DESKTOP = 1280,
	FULL = 1536
}

export const breakpoints = writable<BREAKPOINTS>(BREAKPOINTS.DESKTOP);

if (typeof window !== 'undefined') {
	window
		.matchMedia(`(min-width: ${mediaQueries.phone})`)
		.addEventListener('change', () => {
			breakpoints.set(BREAKPOINTS.PHONE);
		});
	window
		.matchMedia(`(min-width: ${mediaQueries.tablet})`)
		.addEventListener('change', () => {
			breakpoints.set(BREAKPOINTS.TABLET);
		});
	window
		.matchMedia(`(min-width: ${mediaQueries.laptop})`)
		.addEventListener('change', () => {
			breakpoints.set(BREAKPOINTS.LAPTOP);
		});
	window
		.matchMedia(`(min-width: ${mediaQueries.desktop})`)
		.addEventListener('change', () => {
			breakpoints.set(BREAKPOINTS.DESKTOP);
		});
	window
		.matchMedia(`(min-width: ${mediaQueries.full})`)
		.addEventListener('change', () => {
			breakpoints.set(BREAKPOINTS.FULL);
		});
}
