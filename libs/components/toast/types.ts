import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import type { toastVariants } from './variants'

export interface ToastProps
	extends ComponentProps<'div'>,
		VariantProps<typeof toastVariants> {
	onClose?: () => void
}

export interface ToastIconProps extends ComponentProps<'span'> {}

export interface ToastLabelProps extends ComponentProps<'span'> {}
