import { writable } from 'svelte/store';

export const Settings = writable({
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
});
