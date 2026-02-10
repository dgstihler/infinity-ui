import { twMerge } from 'tailwind-merge'
import type { InputTextProps, InputCounterProps } from './types'
import { inputVariants, counterVariants } from './variants'

/* ── Input Text ── */

function InputText({ className, size, type = 'text', ...props }: InputTextProps) {
	return (
		<input
			type={type}
			data-slot="input-text"
			className={twMerge(inputVariants({ size }), className)}
			{...props}
		/>
	)
}

/* ── Input Counter ── */

function InputCounter({ current, max, className, ...props }: InputCounterProps) {
	return (
		<span
			data-slot="input-counter"
			className={twMerge(counterVariants(), className)}
			{...props}
		>
			{current}/{max}
		</span>
	)
}

/* ── Export ── */

export const Input = Object.assign(InputText, {
	Counter: InputCounter,
})
