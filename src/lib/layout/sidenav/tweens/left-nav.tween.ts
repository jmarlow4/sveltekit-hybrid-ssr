import { tweened } from 'svelte/motion';
import { cubicInOut } from 'svelte/easing';

export const LEFT_NAV_WIDTH = 200;
export const leftNavTween = tweened<number>(0, {
	duration: 400,
	easing: cubicInOut
});
