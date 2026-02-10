import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import type { badgeVariants } from './variants'

export interface BadgeProps
	extends ComponentProps<'span'>,
		VariantProps<typeof badgeVariants> {}

export interface BadgeIconProps extends ComponentProps<'span'> {}

export interface BadgeLabelProps extends ComponentProps<'span'> {}

export interface BadgeCloseProps extends ComponentProps<'button'> {
	onClose?: () => void
}
