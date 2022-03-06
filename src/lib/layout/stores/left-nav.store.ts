import { browser } from '$app/env';
import { writable } from 'svelte/store';

const initialUserVal: boolean =
	browser && !!localStorage.leftNavUserPref
		? JSON.parse(localStorage.leftNavUserPref)
		: true;

export const leftNavUserPref = writable<boolean>(initialUserVal);
export const leftNavCollapsed = writable<boolean>(false);

leftNavUserPref.subscribe((val) => {
	if (browser) localStorage.leftNavUserPref = String(val);
});

// EFFECTS

import { BREAKPOINTS, breakpoints } from './breakpoints.store';
import { leftNavTween, LEFT_NAV_WIDTH } from '../sidenav/tweens/left-nav.tween';

let leftNavCollapsedSate: boolean;
let leftNavUserPrefState: boolean;

leftNavCollapsed.subscribe((leftNavIsCollapsed) => {
	leftNavCollapsedSate = leftNavIsCollapsed;
});

leftNavUserPref.subscribe((leftNavIsOpen) => {
	leftNavUserPrefState = leftNavIsOpen;
	if (leftNavIsOpen) {
		leftNavTween.set(LEFT_NAV_WIDTH);
	} else {
		if (leftNavCollapsedSate) {
			leftNavTween.set(LEFT_NAV_WIDTH);
			leftNavUserPref.set(true);
			leftNavCollapsed.set(false);
		}
		leftNavTween.set(0);
	}
});

breakpoints.subscribe((bp) => {
	if (bp <= BREAKPOINTS.TABLET) {
		leftNavTween.set(0);
		if (leftNavUserPrefState) leftNavCollapsed.set(true);
	} else {
		leftNavCollapsed.set(false);
		if (leftNavUserPrefState) {
			leftNavTween.set(LEFT_NAV_WIDTH);
		} else {
			leftNavTween.set(0);
		}
	}
});
