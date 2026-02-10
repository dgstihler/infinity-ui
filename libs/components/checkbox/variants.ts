import { tv } from 'tailwind-variants'

export const checkboxVariants = tv({
	base: [
		'inline-flex size-6 shrink-0 items-center justify-center border-2 border-black transition-all duration-200 cursor-pointer',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2',
		'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		'data-[checked]:bg-black data-[checked]:border-black data-[checked]:text-white',
		'data-[indeterminate]:bg-black data-[indeterminate]:border-black data-[indeterminate]:text-white',
		'data-[unchecked]:bg-white',
	],
	variants: {
		rounded: {
			true: 'rounded-full',
			false: 'rounded-md',
		},
	},
	defaultVariants: { rounded: false },
})

export const labelVariants = tv({
	base: 'text-base font-medium cursor-pointer select-none',
	variants: {
		disabled: {
			true: 'opacity-50 pointer-events-none',
		},
	},
})

export const groupVariants = tv({
	base: 'flex gap-4',
	variants: {
		inLine: {
			true: 'flex-row items-center',
			false: 'flex-col',
		},
	},
	defaultVariants: { inLine: false },
})
