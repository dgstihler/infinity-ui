import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'
import { Children, isValidElement } from 'react'
import { twMerge } from 'tailwind-merge'
import { X } from 'lucide-react'
import type { ModalProps, ModalTitleProps, ModalDescriptionProps, ModalFooterProps } from './types'
import { backdropVariants, popupVariants, closeButtonVariants } from './variants'

/* ── Modal Root ── */

function ModalRoot({ children, showClose = false, ...props }: ModalProps) {
	const triggers: React.ReactNode[] = []
	const content: React.ReactNode[] = []

	Children.forEach(children as React.ReactNode, (child) => {
		if (isValidElement(child) && child.type === DialogPrimitive.Trigger) {
			triggers.push(child)
		} else {
			content.push(child)
		}
	})

	return (
		<DialogPrimitive.Root {...props}>
			{triggers}
			<DialogPrimitive.Portal>
				<DialogPrimitive.Backdrop
					data-slot="modal-backdrop"
					className={backdropVariants()}
				/>
				<DialogPrimitive.Popup
					data-slot="modal-popup"
					className={popupVariants()}
				>
					{showClose && (
						<DialogPrimitive.Close
							data-slot="modal-close"
							className={closeButtonVariants()}
							aria-label="Close"
						>
							<X className="size-5" />
						</DialogPrimitive.Close>
					)}
					{content}
				</DialogPrimitive.Popup>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	)
}

/* ── Modal Title ── */

function ModalTitle({ className, ...props }: ModalTitleProps) {
	return (
		<DialogPrimitive.Title
			data-slot="modal-title"
			className={twMerge('text-xl font-semibold text-black', className as string)}
			{...props}
		/>
	)
}

/* ── Modal Description ── */

function ModalDescription({ className, ...props }: ModalDescriptionProps) {
	return (
		<DialogPrimitive.Description
			data-slot="modal-description"
			className={twMerge('text-sm text-neutral-500', className as string)}
			{...props}
		/>
	)
}

/* ── Modal Footer ── */

function ModalFooter({ className, ...props }: ModalFooterProps) {
	return (
		<div
			data-slot="modal-footer"
			className={twMerge('mt-4 flex justify-end gap-3', className)}
			{...props}
		/>
	)
}

/* ── Modal Trigger (re-export) ── */

const ModalTrigger = DialogPrimitive.Trigger

/* ── Export ── */

export const Modal = Object.assign(ModalRoot, {
	Trigger: ModalTrigger,
	Title: ModalTitle,
	Description: ModalDescription,
	Footer: ModalFooter,
})
