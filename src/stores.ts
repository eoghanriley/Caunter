import { writable } from 'svelte/store';

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
