import type { Switch } from '@base-ui/react/switch'
import type { ComponentProps, ReactNode } from 'react'
import type { VariantProps } from 'tailwind-variants'
import type { switchVariants } from './variants'

export interface SwitchProps
	extends ComponentProps<typeof Switch.Root>,
		VariantProps<typeof switchVariants> {
	children?: ReactNode
	value?: string
}

export interface SwitchGroupProps {
	children?: ReactNode
	inLine?: boolean
	justOne?: boolean
	readOnly?: boolean
	disabled?: boolean
	size?: 'small' | 'medium'
	value?: string[]
	defaultValue?: string[]
	onChange?: (value: string[]) => void
	className?: string
}
