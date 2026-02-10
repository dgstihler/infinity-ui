import { tv } from 'tailwind-variants'

export const fieldLabelVariants = tv({
	base: 'text-base font-medium text-black',
})

export const fieldHintVariants = tv({
	base: 'text-sm',
	variants: {
		category: {
			default: 'text-neutral-500',
			danger: 'text-red-500',
			warning: 'text-orange-400',
			info: 'text-blue-500',
			success: 'text-green-500',
		},
	},
	defaultVariants: { category: 'default' },
})
