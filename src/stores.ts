import { writable } from 'svelte/store';
import { get } from 'svelte/store';

// Settings
let storedSettings = localStorage.settings;
if (storedSettings !== undefined) {
  storedSettings = JSON.parse(storedSettings);
}

export const Settings = writable(
  storedSettings || {
    // Display Settings
    showImage: true,
    showShiny: false,
    showCount: true,
    showCountButtons: true,
    showPokemonDropdown: true,
    showHint: true,
    showGithub: true,

    // Controls
    addKeybind: '=',
    subtractKeybind: '-',
    addBy: 1,
    subtractBy: 1
  }
);

Settings.subscribe((value) => (localStorage.settings = JSON.stringify(value)));

// Used in hunt to store active hunt data
export const ActiveHunt = writable({
  pokemon: 'bulbasaur',
  count: 0
});

// Used to store all hunts
let storedHunts = localStorage.hunts;
if (storedHunts !== undefined) {
  storedHunts = JSON.parse(storedHunts);
}

export const Hunts = writable(
  storedHunts ||
  ActiveHunt.subscribe((value) => {
    return value;
  })
);

Hunts.subscribe((value) => (localStorage.hunts = JSON.stringify(value)));
