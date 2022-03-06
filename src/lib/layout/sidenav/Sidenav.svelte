<script lang="ts">
	import { page } from '$app/stores';
	import { leftNavTween } from './tweens/left-nav.tween';

	export let links: any;
</script>

<aside
	class="smallest:absolute tablet:static bg-base-200 h-full overflow-x-hidden"
	style="width: {$leftNavTween}px; min-width: {$leftNavTween}px"
>
	<nav>
		<ul class="text-lg font-bold text-base-content">
			{#each links as link}
				<li class:active={$page.url.pathname === link.url}>
					<a sveltekit:prefetch href={link.url} class="block p-4 w-full"
						>{link.name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</aside>

<style type="text/postcss">
	.active {
		@apply bg-base-300;
	}
</style>
