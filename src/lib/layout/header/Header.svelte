<script lang="ts">
	import { leftNavUserPref } from '../stores/left-nav.store';
	import { MenuIcon } from '@krowten/svelte-heroicons';
	import GlobalSearch from './global-search/GlobalSearch.svelte';

	let leftNavIsOpen: boolean = true;
	leftNavUserPref.subscribe((leftNavUserPrefState) => {
		leftNavIsOpen = leftNavUserPrefState;
	});

	function toggleLeftNav() {
		if (leftNavIsOpen) {
			leftNavUserPref.set(false);
		} else {
			leftNavUserPref.set(true);
		}
	}
</script>

<header class="navbar bg-secondary shadow-md shadow-zinc-400 z-10">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost" on:click={toggleLeftNav}>
			<MenuIcon class="w-6 h-6 stroke-primary-content" />
		</button>
	</div>
	<div class="flex-1" />
	<GlobalSearch />
</header>
