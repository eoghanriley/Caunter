<script lang="ts">
	// Display Settings
	let showImage = true;
	let showShiny = true;
	let showCount = true;
	let showCountButtons = true;
	let showPokemonDropdown = true;
	let showHint = true;
	let showGithub = true;

	// Controls
	let addKeybind = '+';
	let subtractKeybind = '-';
	let addBy = 1;
	let subtractBy = 1;
</script>

<div class="mt-3 flex justify-center text-slate-50">
	<form on:submit|preventDefault>
		<div>
			<h2 class="text-3xl">Display Settings:</h2>
			<div class="mt-3 ml-5 text-xl">
				<input type="checkbox" name="showImage" bind:checked={showImage} />
				<label for="showImage">Show image</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showShiny" bind:checked={showShiny} />
				<label for="showShiny">Show shiny form</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showCount" bind:checked={showCount} />
				<label for="showChount">Show the count</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showShiny" bind:checked={showShiny} />
				<label for="showShiny">Show shiny form</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showCountButtons" bind:checked={showCountButtons} />
				<label for="showCountButtons">Show count buttons</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showPokemonDropdown" bind:checked={showPokemonDropdown} />
				<label for="showPokemonDropdown">Show the target dropdown</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showShiny" bind:checked={showShiny} />
				<label for="showShiny">Show shiny form</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showHint" bind:checked={showHint} />
				<label for="showHint">Show hints</label>
			</div>

			<div class="mt-1 ml-5 text-xl">
				<input type="checkbox" name="showGithub" bind:checked={showGithub} />
				<label for="showGithub">Show Github logo</label>
			</div>

			<div class="mt-3">
				<h2 class="text-3xl">Controls:</h2>

				<div class="mt-3 ml-5 text-xl">
					<label for="addKeybind">Add keybind</label>
					<input
						class="ml-1 w-8 rounded-md bg-zinc-700 text-center"
						type="text"
						bind:value={addKeybind}
						name="addKeybind"
					/>
				</div>

				<div class="mt-1 ml-5 text-xl">
					<label for="subtractKeybind">Subtract keybind</label>
					<input
						class="ml-1 w-8 rounded-md bg-zinc-700 text-center"
						type="text"
						bind:value={subtractKeybind}
						name="subtractKeybind"
					/>
				</div>

				<div class="mt-1 ml-5 text-xl">
					<label for="addBy">Add by</label>
					<input
						class="ml-1 w-8 rounded-md bg-zinc-700 text-center"
						type="text"
						bind:value={addBy}
						name="addBy"
					/>
				</div>

				<div class="mt-1 ml-5 text-xl">
					<label for="subtractBy">Subtract by</label>
					<input
						class="ml-1 w-8 rounded-md bg-zinc-700 text-center"
						type="text"
						bind:value={subtractBy}
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
