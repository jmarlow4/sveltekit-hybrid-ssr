<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { SearchIcon } from '@krowten/svelte-heroicons';
	import Outclick from 'svelte-outclick/src/OutClick.svelte';

	export const SEARCH_WIDTH = 200;
	export const searchInputTween = tweened<number>(0, {
		duration: 300,
		easing: cubicInOut
	});

	let searchInput: HTMLInputElement;
	let searchIsOpen = false;
	function searchClicked() {
		console.log('opem/close?');
		if (searchInput.value.trim() !== '') {
			if (searchIsOpen) {
				// do search
			}
		} else {
			if (searchIsOpen) {
				closeSearch();
			} else {
				searchIsOpen = true;
				searchInput.focus();
				searchInputTween.set(SEARCH_WIDTH);
			}
		}
	}
	function closeSearch() {
		searchIsOpen = false;
		searchInput.blur();
		searchInput.value = '';
		searchInputTween.set(0);
	}
</script>

<div class:search-border={searchIsOpen} class="flex">
	<Outclick on:outclick={closeSearch}>
		<input
			bind:this={searchInput}
			class:search-input={searchIsOpen}
			class="search-input-active bg-transparent pl-0 pr-0 input input-sm text-white placeholder-white border-0"
			placeholder="Search..."
			style="width: {$searchInputTween}px; min-width: {$searchInputTween}px"
		/>
		<button on:click={searchClicked} class="search-button btn btn-square btn-ghost">
			<SearchIcon class="w-6 h-6 stroke-primary-content" />
		</button>
	</Outclick>
</div>

<!-- svelte-ignore css-unused-selector -->
<style type="text/postcss">
	.search-border {
		@apply box-content;
		@apply border;
		@apply border-white;
		@apply rounded-lg;
		@apply pl-2;
		@apply space-x-2;
	}
	.search-input {
		@apply pl-1;
		@apply pr-1;
	}

	.search-input::placeholder {
		padding-left: 4px;
	}

	.search-input-active:focus {
		@apply bg-transparent;
		@apply text-white;
		@apply outline-none;
	}

	.search-button:focus {
		@apply outline-none;
		@apply btn-active;
	}
</style>
