import { Welcome } from '../welcome/welcome'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Energy Sage - Genesis' },
		{ name: 'description', content: 'Welcome to Energy Sage!' },
	]
}

export default function Home() {
	return <Welcome />
}
