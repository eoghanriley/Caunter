<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Hunts, ActiveHunt } from '../stores';
	import { push } from 'svelte-spa-router';

	let hunts = [];

	const unsubscribe = Hunts.subscribe((value) => {
		hunts = value;
	});

	onDestroy(unsubscribe);

	function save(hunts) {
		Hunts.set(hunts);
	}

	function activate(hunt) {
		ActiveHunt.set(hunts.indexOf(hunt));
		push('/');
	}

	function remove(hunt) {
		if (hunts.length !== 1) {
			hunts.splice(hunts.indexOf(hunt), 1);
			console.log(hunts);
			save(hunts);
		} else {
			alert('You need to have atleast one ongoing hunt.');
		}
	}

	function add() {
		hunts.push({
			pokemon: 'bulbasaur',
			count: 0
		});
		console.log(hunts);
		save(hunts);
	}

	$: save(hunts);
</script>

<main class="mt-3 flex justify-center text-slate-50">
	<div>
		<div class="flow-root">
			<h2 class="float-left text-center text-5xl">Hunts</h2>
			<button
				class="float-right mr-16 rounded-md border-2 border-sky-500 px-2 text-center text-2xl hover:bg-sky-500"
				on:click={add}>New</button
			>
		</div>

		<div class="mt-3 flex flex-col justify-center">
			{#each hunts as hunt}
				<div class="my-2 mr-14 flex rounded-md bg-zinc-700 p-1 px-2 text-xl">
					<div>
						<p>Pokemon: <b class="capitalize">{hunt.pokemon}</b></p>
					</div>

					<div class="ml-3">
						<p>Count: <b>{hunt.count}</b></p>
					</div>

					<button
						class="ml-3 rounded-md border-2 border-green-500 px-1 text-center hover:bg-green-500"
						on:click={() => activate(hunt)}>Load</button
					>
					<button
						class="ml-3 rounded-md border-2 border-red-500 px-1 text-center hover:bg-red-500"
						on:click={() => remove(hunt)}>Delete</button
					>
				</div>
			{/each}
		</div>
	</div>
</main>
