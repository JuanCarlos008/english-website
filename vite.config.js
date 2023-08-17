import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [
		react({
			fastRefresh: true,
			include: '**/*.jsx',
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@common': path.resolve(__dirname, './src/common'),
		},
	},
})
/* english-website/ */
