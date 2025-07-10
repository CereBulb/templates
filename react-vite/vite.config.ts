/// <reference types="vitest" />
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [tailwindcss(), !process.env.VITEST && reactRouter(), tsconfigPaths()],
	test: {
		include: ['app/**/*.test.ts?(x)', 'app/__tests__/**/*.test.ts?(x)'],
		setupFiles: ['./tests/setup/vitest.setup.ts'],
		globals: true,
		environment: 'jsdom',
	},
	server: {
		host: '0.0.0.0',
		port: 3100,
	},
})
