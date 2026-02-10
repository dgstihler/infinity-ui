import type { Button } from '@base-ui/react/button'
import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import type { buttonSizeVariants, iconSizeVariants } from './variants'

export interface ButtonProps
	extends ComponentProps<typeof Button>,
		VariantProps<typeof buttonSizeVariants> {}

export interface IconButtonProps
	extends ComponentProps<typeof Button>,
		VariantProps<typeof iconSizeVariants> {
	'aria-label': string
	rounded?: boolean
}
