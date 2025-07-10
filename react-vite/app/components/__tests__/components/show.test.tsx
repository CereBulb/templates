import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Show } from '~/components/show'

describe('<Show />', () => {
	it('renders children as ReactNode when "when" is truthy', () => {
		render(
			<Show when={true}>
				<span>Visible content</span>
			</Show>,
		)
		expect(screen.getByText('Visible content')).toBeInTheDocument()
	})

	it('renders children as function when "when" is truthy', () => {
		render(
			<Show when="Hello">{(value) => <span>{value + ' world'}</span>}</Show>,
		)
		expect(screen.getByText('Hello world')).toBeInTheDocument()
	})

	it('renders fallback when "when" is falsy', () => {
		render(
			<Show when={null} fallback={<span>Fallback content</span>}>
				<span>Should not render</span>
			</Show>,
		)
		expect(screen.getByText('Fallback content')).toBeInTheDocument()
		expect(screen.queryByText('Should not render')).not.toBeInTheDocument()
	})

	it('renders nothing when "when" is falsy and no fallback provided', () => {
		const { container } = render(
			<Show when={undefined}>
				<span>Should not render</span>
			</Show>,
		)
		expect(container).toBeEmptyDOMElement()
	})
})
