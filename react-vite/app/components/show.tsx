import type { ReactNode } from 'react'

type ShowProps<T> = {
	when: T | null | undefined
	children: ReactNode | ((value: NonNullable<T>) => ReactNode)
	fallback?: ReactNode
}

export function Show<T>({ when, children, fallback = null }: ShowProps<T>) {
	return when ? (
		<>
			{typeof children === 'function'
				? (children as (value: NonNullable<T>) => ReactNode)(when)
				: children}
		</>
	) : (
		<>{fallback}</>
	)
}
