import { tv } from 'tailwind-variants'

export const switchVariants = tv({
	base: [
		'inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2',
		'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		'data-[checked]:bg-black',
		'data-[unchecked]:bg-neutral-300',
	],
	variants: {
		size: {
			small: 'h-6 w-11 p-0.5',
			medium: 'h-8 w-14 p-1',
		},
	},
	defaultVariants: { size: 'medium' },
})

export const thumbVariants = tv({
	base: [
		'pointer-events-none block rounded-full shadow-sm transition-all duration-200',
		'data-[unchecked]:bg-white data-[unchecked]:border-2 data-[unchecked]:border-black',
		'data-[checked]:bg-white',
	],
	variants: {
		size: {
			small: 'size-5 data-[checked]:translate-x-5',
			medium: 'size-6 data-[checked]:translate-x-6',
		},
	},
	defaultVariants: { size: 'medium' },
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
