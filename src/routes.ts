import Hunt from './components/hunt.svelte';
import Settings from './components/settings.svelte';
import Save from './components/settings.svelte';

export const routes = {
  '/': Hunt,
  '/settings': Settings,
  '/saves': Save
};
