/* eslint-disable import/no-duplicates */
'use client'

import type * as LabelPrimitive from '@radix-ui/react-label'
import * as React from 'react'
import { useController } from 'react-hook-form'
import type {
	ControllerFieldState,
	Path,
	UseControllerProps,
	UseControllerReturn,
} from 'react-hook-form'

import { Show } from '../show'
import { Spacer } from './spacer'
import { Label } from '~/components/ui/label'
import { cn } from '~/lib/utils'

function FormField<T extends {}>({
	className,
	label,
	children,
	description,
	messageLocation = 'inline',
	required = true,
	...props
}: {
	label: string
	description?: string
	messageLocation?: 'inline' | 'bottom'
	required?: boolean
	children:
		| React.ReactNode
		| ((formFields: UseControllerReturn<T, Path<T>>) => React.ReactNode)
} & Omit<React.ComponentProps<typeof FormItem>, 'children'> &
	UseControllerProps<T>) {
	const formFields = useController(props)
	const content =
		typeof children === 'function' ? children(formFields) : children

	return (
		<FormItem className={className}>
			<div className="flex">
				<FormLabel
					htmlFor={props.name}
					fieldState={formFields.fieldState}
					className="gap-1"
				>
					{label}
					<Show when={required}>
						<span className="text-destructive">*</span>
					</Show>
				</FormLabel>

				<Show when={messageLocation === 'inline'}>
					<Spacer />
					<FormMessage fieldState={formFields.fieldState} />
				</Show>
			</div>
			<span>
				{React.Children.map(content, (child) =>
					React.isValidElement(child)
						? React.cloneElement(child as any, {
								'aria-invalid': formFields.fieldState.invalid,
								id: props.name,
							})
						: child,
				)}
			</span>

			<Show when={description}>
				<FormDescription>{description}</FormDescription>
			</Show>

			<Show when={messageLocation === 'bottom'}>
				<FormMessage fieldState={formFields.fieldState} />
			</Show>
		</FormItem>
	)
}

function FormFieldSet({
	className,
	...props
}: React.ComponentProps<'fieldset'>) {
	return <fieldset className={cn('grid gap-4', className)} {...props} />
}

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="form-item"
			className={cn('grid gap-2', className)}
			{...props}
		/>
	)
}

function FormLabel({
	className,
	fieldState,
	...props
}: React.ComponentProps<typeof LabelPrimitive.Root> & {
	fieldState: ControllerFieldState
}) {
	return (
		<Label
			data-slot="form-label"
			data-error={fieldState.invalid}
			className={cn('data-[error=true]:text-destructive', className)}
			{...props}
		/>
	)
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
	return (
		<p
			data-slot="form-description"
			className={cn('text-muted-foreground text-xs', className)}
			{...props}
		/>
	)
}

function FormMessage({
	className,
	fieldState,
	...props
}: React.ComponentProps<'p'> & { fieldState: ControllerFieldState }) {
	return (
		<Show when={fieldState.invalid}>
			<p
				data-slot="form-message"
				className={cn('text-destructive text-xs', className)}
				{...props}
			>
				{fieldState.error?.message}
			</p>
		</Show>
	)
}

export {
	FormDescription,
	FormField,
	FormFieldSet,
	FormItem,
	FormLabel,
	FormMessage,
}
