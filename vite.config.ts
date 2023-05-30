import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		{
			name: 'eslint-plugin',
			enforce: 'pre',
			apply: 'serve',
			//ts=ignore
			...require('eslint-webpack-plugin')({
				context: __dirname,
				extensions: ['js', 'jsx', 'ts', 'tsx'],
				files: './src',
			}),
		},
	],
});
