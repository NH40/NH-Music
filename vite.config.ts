import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import observerPlugin from 'mobx-react-observer/swc-plugin'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		react({
			plugins: [
				// @ts-expect-error - Type mismatch between @vitejs/plugin-react-swc and mobx-react-observer plugin versions
				observerPlugin({ exclude: ['src/ui-components/**'] })
			]
		}),
		tailwindcss()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
})
