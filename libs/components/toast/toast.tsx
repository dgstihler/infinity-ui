import { twMerge } from 'tailwind-merge'
import { X } from 'lucide-react'
import type { ToastProps, ToastIconProps, ToastLabelProps } from './types'
import { toastVariants, closeButtonVariants } from './variants'

/* ── Toast Root ── */

function ToastRoot({ className, category, children, onClose, ...props }: ToastProps) {
	return (
		<div
			data-slot="toast"
			role="alert"
			className={twMerge(toastVariants({ category }), className)}
			{...props}
		>
			{children}
			{onClose && (
				<button
					type="button"
					data-slot="toast-close"
					onClick={onClose}
					className={closeButtonVariants()}
					aria-label="Close"
				>
					<X className="size-5" />
				</button>
			)}
		</div>
	)
}

/* ── Toast Icon ── */

function ToastIcon({ className, children, ...props }: ToastIconProps) {
	return (
		<span
			data-slot="toast-icon"
			className={twMerge('shrink-0 [&_svg]:size-6', className)}
			{...props}
		>
			{children}
		</span>
	)
}

/* ── Toast Label ── */

function ToastLabel({ className, children, ...props }: ToastLabelProps) {
	return (
		<span
			data-slot="toast-label"
			className={twMerge('flex-1 text-base font-medium', className)}
			{...props}
		>
			{children}
		</span>
	)
}

/* ── Export ── */

export const Toast = Object.assign(ToastRoot, {
	Icon: ToastIcon,
	Label: ToastLabel,
})
