import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import type { inputVariants } from './variants'

export interface InputTextProps
	extends Omit<ComponentProps<'input'>, 'size'>,
		VariantProps<typeof inputVariants> {
	maxLength?: number
}

export interface InputCounterProps extends ComponentProps<'span'> {
	current: number
	max: number
}
