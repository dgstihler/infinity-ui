import { tv } from 'tailwind-variants'

export const backdropVariants = tv({
	base: [
		'fixed inset-0 z-50 bg-black/40',
		'transition-opacity duration-200',
		'data-[open]:opacity-100',
		'data-[closed]:opacity-0',
	],
})

export const popupVariants = tv({
	base: [
		'fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2',
		'flex flex-col gap-4 rounded-2xl border-2 border-black bg-white p-6 shadow-xl',
		'transition-all duration-200',
		'data-[open]:scale-100 data-[open]:opacity-100',
		'data-[closed]:scale-95 data-[closed]:opacity-0',
	],
})

export const closeButtonVariants = tv({
	base: [
		'absolute right-4 top-4 cursor-pointer rounded-sm text-black/70 transition-opacity',
		'hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30',
	],
})
