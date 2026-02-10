import type { ComponentProps, ReactNode } from 'react'
import type { Dialog } from '@base-ui/react/dialog'

export interface ModalProps extends ComponentProps<typeof Dialog.Root> {
	showClose?: boolean
}

export interface ModalTitleProps extends ComponentProps<typeof Dialog.Title> {}

export interface ModalDescriptionProps extends ComponentProps<typeof Dialog.Description> {}

export interface ModalFooterProps extends ComponentProps<'div'> {}
