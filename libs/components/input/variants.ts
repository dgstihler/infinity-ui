import { tv } from 'tailwind-variants'

export const inputVariants = tv({
	base: [
		'flex w-full border-2 border-black bg-white px-4 text-base text-black transition-colors',
		'placeholder:text-neutral-400',
		'disabled:pointer-events-none disabled:opacity-50',
		'outline-none',
	],
	variants: {
		size: {
			small: 'h-9 rounded-xl text-sm',
			medium: 'h-12 rounded-2xl text-base',
		},
	},
	defaultVariants: { size: 'medium' },
})

export const counterVariants = tv({
	base: 'text-sm text-neutral-500',
})
