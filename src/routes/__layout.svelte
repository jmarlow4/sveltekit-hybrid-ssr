<script>
	import Footer from '$lib/layout/Footer.svelte';

	import Header from '$lib/layout/header/Header.svelte';
	import Sidenav from '$lib/layout/sidenav/Sidenav.svelte';
	import '../app.css';

	import { fClient } from '$lib/fauna-client';

	fClient.ping();

	const links = [
		{ name: 'Home', url: '/' },
		{ name: 'App', url: '/app' },
		{ name: 'User test', url: '/324797447837581908' }
	];
</script>

<div class="flex flex-grow h-screen">
	<div class="flex-1 flex flex-col">
		<Header />

		<!-- ***** Main Container ***** -->
		<div class="flex h-full">
			<Sidenav {links} />

			<!-- ***** Content and footer ***** -->
			<main class="flex flex-col w-full">
				<div class="flex flex-grow">
					<div class="p-6">
						<slot />
					</div>
				</div>
				<Footer />
			</main>
		</div>
	</div>
</div>

<style>
</style>
