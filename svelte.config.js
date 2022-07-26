import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],

	kit: {
		// paths: {
		// 	base: '/ipfs/QmcGbVbNMiNQH5eRqBnQKjmegX9wrb1CvU2cdF8Rxcjs5t',
		// },
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		  }),
	  
		  prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		  }
	}
};

export default config;
