import { Show } from './show'
import { Button } from './ui/button'
import { Spinner } from './ui/spinner'
import { cn } from '~/lib/utils'

export function SubmitButton({
	label = 'Submit',
	submitting = false,
	disabled = false,
	children,
	className,
	...props
}: React.ComponentProps<typeof Button> & {
	label?: string
	submitting?: boolean
}) {
	return (
		<Button
			type="submit"
			disabled={submitting || disabled}
			className={cn(
				'relative inline-grid grid-cols-1 grid-rows-1 place-items-center',
				className,
			)}
			{...props}
		>
			<span
				className={cn(
					'col-start-1 row-start-1 transition-opacity duration-200',
					submitting ? 'invisible' : 'visible',
				)}
			>
				{children || label}
			</span>
			<Show when={submitting}>
				<Spinner
					className="col-start-1 row-start-1"
					aria-hidden="true"
					role="status"
				/>
			</Show>
		</Button>
	)
}
