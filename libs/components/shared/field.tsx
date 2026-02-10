import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'
import type { FieldLabelProps, FieldHintProps } from './field-types'
import { fieldLabelVariants, fieldHintVariants } from './field-variants'

/* ── Field Root ── */

function FieldRoot({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			data-slot="field"
			className={twMerge('flex w-full flex-col gap-1.5', className)}
			{...props}
		/>
	)
}

/* ── Field Label ── */

export function FieldLabel({ className, ...props }: FieldLabelProps) {
	return (
		<label
			data-slot="field-label"
			className={twMerge(fieldLabelVariants(), className)}
			{...props}
		/>
	)
}

/* ── Field Hint ── */

export function FieldHint({ className, category, ...props }: FieldHintProps) {
	return (
		<p
			data-slot="field-hint"
			className={twMerge(fieldHintVariants({ category }), className)}
			{...props}
		/>
	)
}

/* ── Field Footer ── */

function FieldFooter({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			data-slot="field-footer"
			className={twMerge('flex items-center justify-between', className)}
			{...props}
		/>
	)
}

/* ── Export ── */

export const Field = Object.assign(FieldRoot, {
	Label: FieldLabel,
	Hint: FieldHint,
	Footer: FieldFooter,
})
