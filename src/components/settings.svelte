<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Settings } from '../stores';
	import { push } from 'svelte-spa-router';

	let settings = {
		// Display Settings
		showImage: true,
		showShiny: true,
		showCount: true,
		showCountButtons: true,
		showPokemonDropdown: true,
		showHint: true,
		showGithub: true,

		// Controls
		addKeybind: '+',
		subtractKeybind: '-',
		addBy: 1,
		subtractBy: 1
	};

	const unsubscribe = Settings.subscribe((value) => {
		console.log('The current value is: ', value);
		settings = value;
	});

	onDestroy(unsubscribe);

	function save() {
		Settings.set(settings);
		push('/');
		console.log(settings);
	}
</script>

<div class="mt-3 flex justify-center text-slate-50">
	<form on:submit|preventDefault={save}>
		<div>
			<h2 class="text-3xl">Display Settings:</h2>
			<div class="mt-3 ml-5 text-xl">
				<input type="checkbox" name="showImage" bind:checked={settings.showImage} />
				<label for="showImage">Show image</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showShiny" bind:checked={settings.showShiny} />
				<label for="showShiny">Show shiny form</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showCount" bind:checked={settings.showCount} />
				<label for="showChount">Show the count</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showCountButtons" bind:checked={settings.showCountButtons} />
				<label for="showCountButtons">Show count buttons</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input
					type="checkbox"
					name="showPokemonDropdown"
					bind:checked={settings.showPokemonDropdown}
				/>
				<label for="showPokemonDropdown">Show the target dropdown</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showHint" bind:checked={settings.showHint} />
				<label for="showHint">Show hints</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showGithub" bind:checked={settings.showGithub} />
				<label for="showGithub">Show Github logo</label>
			</div>

			<div class="mt-3">
				<h2 class="text-3xl">Controls:</h2>

				<div class="mt-3 ml-5 text-xl">
					<label for="addKeybind">Add keybind</label>
					<input
						class="ml-1 w-8 rounded-md bg-zinc-700 text-center"
						type="text"
						bind:value={settings.addKeybind}
						name="addKeybind"
					/>
				</div>

				<div class="mt-1 ml-5 text-xl">
					<label for="subtractKeybind">Subtract keybind</label>
					<input
						class="ml-1 w-8 rounded-md bg-zinc-700 text-center"
						type="text"
						bind:value={settings.subtractKeybind}
						name="subtractKeybind"
					/>
				</div>

				<div class="mt-1 ml-5 text-xl">
					<label for="addBy">Add by</label>
					<input
						class="ml-1 w-8 rounded-md bg-zinc-700 text-center"
						type="text"
						bind:value={settings.addBy}
						name="addBy"
					/>
				</div>

				<div class="mt-1 ml-5 text-xl">
					<label for="subtractBy">Subtract by</label>
					<input
						class="ml-1 w-8 rounded-md bg-zinc-700 text-center"
						type="text"
						bind:value={settings.subtractBy}
						name="subtractBy"
					/>
				</div>
			</div>
		</div>
		<input
			class="mt-3 cursor-pointer rounded-md bg-zinc-700 p-1 px-2 text-xl"
			type="submit"
			value="Save"
		/>
	</form>
</div>
