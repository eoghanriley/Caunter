<script lang="ts">
	import { onMount } from 'svelte';

	let pokemon = 'darmanitan-galar-standard';
	let image;
	let count = 0;
	let pokemonList = [];
	let incrementSize = 1;

	onMount(async function () {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
		const data = await response.json();
		if (data.sprites.front_shiny !== null) {
			image = data.sprites.front_shiny;
		} else if (data.sprites.front_default !== null) {
			image = data.sprites.front_default;
		} else {
			image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
		}

		const response1 = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1154');
		const data1 = await response1.json();
		pokemonList = data1.results;
	});

	const increment = () => {
		count++;
	};

	const decrement = () => {
		count--;
	};

	const setImage = async () => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
		const data = await response.json();
		if (data.sprites.front_shiny !== null) {
			image = data.sprites.front_shiny;
		} else if (data.sprites.front_default !== null) {
			image = data.sprites.front_default;
		} else {
			image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
		}
	};
</script>

<svelte:head>
	<title>Caunter</title>
</svelte:head>

<main class="m-1/2 flex flex-col justify-center">
	<div class="mx-auto h-80 w-80">
		{#await image}
			<p>loading...</p>
		{:then}
			<img src={image} class="w-full" alt="shiny {pokemon}" style="image-rendering: pixelated;" />
		{:catch error}
			<p>An error came up</p>
		{/await}
	</div>

	<p class="text-center text-9xl text-slate-50">{count}</p>

	<div class="flex justify-center text-center text-6xl text-slate-50">
		<button
			on:click={increment}
			class="m-4 w-16 rounded-lg border-2 border-zinc-700 hover:border-green-500">+</button
		>
		<button
			on:click={decrement}
			class="m-4 w-16 rounded-lg border-2 border-zinc-700 hover:border-red-500">-</button
		>
	</div>

	<div class="mt-6 flex justify-center">
		{#await pokemonList}
			<p>Loading pokemon list...</p>
		{:then}
			<select
				name="pokemon"
				bind:value={pokemon}
				on:click={setImage}
				class="bg-zinc-800 text-slate-50 w-prose text-2xl"
			>
				{#each pokemonList as pokemon}
					<option value={pokemon.name} class="text-lg">{pokemon.name}</option>
				{/each}
			</select>
		{/await}
	</div>
</main>
