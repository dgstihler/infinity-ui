import { tv } from 'tailwind-variants'

export const toastVariants = tv({
	base: [
		'pointer-events-auto flex w-full min-w-80 items-center gap-3 rounded-2xl px-5 py-4 shadow-lg transition-all',
	],
	variants: {
		category: {
			default: 'bg-black text-white',
			danger: 'bg-red-500 text-white',
			warning: 'bg-orange-400 text-white',
			info: 'bg-blue-500 text-white',
			success: 'bg-green-500 text-white',
		},
	},
	defaultVariants: {
		category: 'default',
	},
})

export const closeButtonVariants = tv({
	base: [
		'ml-auto shrink-0 cursor-pointer rounded-sm opacity-70 transition-opacity',
		'hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
	],
})
