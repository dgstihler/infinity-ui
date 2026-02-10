import type { ComponentProps, ReactNode } from 'react'
import type { Combobox } from '@base-ui/react/combobox'

export interface AutocompleteProps extends ComponentProps<typeof Combobox.Root> {
	placeholder?: string
	size?: 'small' | 'medium'
	className?: string
	items: string[]
}

export interface AutocompleteItemProps extends ComponentProps<typeof Combobox.Item> {}
