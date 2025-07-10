import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SubmitButton } from '~/components/submit-button'

describe('<SubmitButton />', () => {
	it('renders default label when no children provided', () => {
		render(<SubmitButton />)
		expect(screen.getByText('Submit')).toBeInTheDocument()
	})

	it('renders custom children instead of label', () => {
		render(<SubmitButton>Save</SubmitButton>)
		expect(screen.getByText('Save')).toBeInTheDocument()
		expect(screen.queryByText('Submit')).not.toBeInTheDocument()
	})

	it('renders spinner and hides label when submitting is true', () => {
		render(<SubmitButton submitting>Saving...</SubmitButton>)
		const spinner = screen.getByRole('status', { hidden: true })
		expect(spinner).toBeInTheDocument()

		const label = screen.getByText('Saving...')
		expect(label).toHaveClass('invisible')
	})

	it('does not render spinner when submitting is false', () => {
		render(<SubmitButton submitting={false}>Submit</SubmitButton>)
		expect(
			screen.queryByRole('status', { hidden: true }),
		).not.toBeInTheDocument()
	})

	it('disables the button when submitting is true', () => {
		render(<SubmitButton submitting>Submit</SubmitButton>)
		expect(screen.getByRole('button')).toBeDisabled()
	})

	it('disables the button when disabled is true', () => {
		render(<SubmitButton disabled>Submit</SubmitButton>)
		expect(screen.getByRole('button')).toBeDisabled()
	})

	it('applies custom className', () => {
		render(<SubmitButton className="custom-class" />)
		expect(screen.getByRole('button')).toHaveClass('custom-class')
	})
})
