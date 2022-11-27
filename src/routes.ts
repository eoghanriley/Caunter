import Hunt from './components/hunt.svelte';
import Load from './components/load.svelte';
import Settings from './components/settings.svelte';

export const routes = {
  '/': Hunt,
  '/load': Load,
  '/settings': Settings,
  '*': Hunt
};
