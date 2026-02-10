import { twMerge } from 'tailwind-merge'
import { X } from 'lucide-react'
import type { BadgeProps, BadgeIconProps, BadgeLabelProps, BadgeCloseProps } from './types'
import { badgeVariants, closeButtonVariants } from './variants'

/* ── Badge Root ── */

function BadgeRoot({ className, category, children, ...props }: BadgeProps) {
	return (
		<span
			data-slot="badge"
			className={twMerge(badgeVariants({ category }), className)}
			{...props}
		>
			{children}
		</span>
	)
}

/* ── Badge Icon ── */

function BadgeIcon({ className, children, ...props }: BadgeIconProps) {
	return (
		<span
			data-slot="badge-icon"
			className={twMerge('shrink-0 [&_svg]:size-4', className)}
			{...props}
		>
			{children}
		</span>
	)
}

/* ── Badge Label ── */

function BadgeLabel({ className, children, ...props }: BadgeLabelProps) {
	return (
		<span
			data-slot="badge-label"
			className={twMerge('truncate', className)}
			{...props}
		>
			{children}
		</span>
	)
}

/* ── Badge Close ── */

function BadgeClose({ className, onClose, ...props }: BadgeCloseProps) {
	return (
		<button
			type="button"
			data-slot="badge-close"
			onClick={onClose}
			className={twMerge(closeButtonVariants(), className)}
			aria-label="Remove"
			{...props}
		>
			<X className="size-4" />
		</button>
	)
}

/* ── Export ── */

export const Badge = Object.assign(BadgeRoot, {
	Icon: BadgeIcon,
	Label: BadgeLabel,
	Close: BadgeClose,
})
