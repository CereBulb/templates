/* eslint-disable import/no-duplicates */
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '~/lib/utils'

const anchorVariants = cva(
	'text-sm font-medium underline-offset-4 transition-all hover:underline',
	{
		variants: {
			variant: {
				default: 'text-primary',
				gray: 'text-foreground/70',
				destructive: 'text-destructive',
				secondary: 'text-secondary',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export function A({
	className,
	variant,
	asChild = false,
	...props
}: React.ComponentProps<'a'> &
	VariantProps<typeof anchorVariants> & {
		asChild?: boolean
	}) {
	const Comp = asChild ? Slot : 'a'

	return (
		<Comp
			data-slot="anchor"
			className={cn(anchorVariants({ variant, className }))}
			{...props}
		/>
	)
}
