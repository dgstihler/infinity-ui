import { tv } from 'tailwind-variants'

export const badgeVariants = tv({
	base: [
		'inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-sm font-semibold',
	],
	variants: {
		category: {
			default: 'bg-black text-white',
			outline: 'bg-white text-black border-2 border-black',
			success: 'bg-green-500 text-white',
			info: 'bg-blue-500 text-white',
			danger: 'bg-red-500 text-white',
			warning: 'bg-orange-400 text-white',
			neutral: 'bg-neutral-400 text-white',
		},
	},
	defaultVariants: {
		category: 'default',
	},
})

export const closeButtonVariants = tv({
	base: [
		'shrink-0 cursor-pointer rounded-full transition-opacity',
		'opacity-70 hover:opacity-100',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
	],
})
