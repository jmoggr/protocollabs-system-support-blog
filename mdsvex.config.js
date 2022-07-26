import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	layout: "./src/Layout.svelte",
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;