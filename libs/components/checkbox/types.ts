import type { Checkbox } from '@base-ui/react/checkbox'
import type { ComponentProps, ReactNode } from 'react'

export interface CheckboxProps extends ComponentProps<typeof Checkbox.Root> {
	rounded?: boolean
	strikethrough?: boolean
	children?: ReactNode
	value?: string
}

export interface CheckboxGroupProps {
	children?: ReactNode
	inLine?: boolean
	justOne?: boolean
	readOnly?: boolean
	disabled?: boolean
	rounded?: boolean
	strikethrough?: boolean
	value?: string[]
	defaultValue?: string[]
	onChange?: (value: string[]) => void
	className?: string
}
