import { tv } from 'tailwind-variants'

export const buttonSizeVariants = tv({
	base: [
		'inline-flex cursor-pointer items-center justify-center font-medium rounded-2xl transition-all duration-200',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2',
		'disabled:pointer-events-none disabled:opacity-50',
	],
	variants: {
		size: {
			small: 'h-9 px-4 text-sm',
			medium: 'h-11 px-6 text-base',
			large: 'h-14 px-8 text-lg',
		},
	},
	defaultVariants: { size: 'medium' },
})

export const iconSizeVariants = tv({
	base: [
		'inline-flex cursor-pointer items-center justify-center transition-all duration-200',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2',
		'disabled:pointer-events-none disabled:opacity-50',
	],
	variants: {
		size: {
			small: 'size-9 [&_svg]:size-4',
			medium: 'size-11 [&_svg]:size-5',
			large: 'size-14 [&_svg]:size-6',
		},
		rounded: {
			true: 'rounded-full',
			false: 'rounded-xl',
		},
	},
	defaultVariants: { size: 'medium', rounded: false },
})

export const solidStyles = 'bg-black text-white hover:bg-neutral-800'
export const outlineStyles = 'bg-white border-2 border-black text-black hover:bg-neutral-50'
export const ghostStyles = 'bg-transparent text-black hover:bg-black/5'
