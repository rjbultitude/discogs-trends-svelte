import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		answer: 42
	}
});

export default app;
