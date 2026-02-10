import { tv } from 'tailwind-variants'

export const inputWrapperVariants = tv({
	base: [
		'inline-flex w-full items-center gap-2 border-2 border-black bg-white text-black transition-colors',
		'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
	],
	variants: {
		size: {
			small: 'h-9 rounded-xl px-3 text-sm',
			medium: 'h-12 rounded-2xl px-4 text-base',
		},
	},
	defaultVariants: { size: 'medium' },
})

export const inputVariants = tv({
	base: [
		'flex-1 bg-transparent outline-none placeholder:text-neutral-400',
	],
})

export const clearVariants = tv({
	base: [
		'shrink-0 cursor-pointer rounded-full border-2 border-black p-0.5 text-black transition-opacity',
		'hover:bg-neutral-100',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30',
	],
})

export const popupVariants = tv({
	base: [
		'z-50 w-[var(--anchor-width)] overflow-hidden rounded-2xl border-2 border-black bg-white py-1 shadow-xl',
		'data-[open]:animate-in data-[closed]:animate-out',
		'data-[open]:fade-in-0 data-[closed]:fade-out-0',
		'data-[open]:zoom-in-95 data-[closed]:zoom-out-95',
	],
})

export const itemVariants = tv({
	base: [
		'flex w-full cursor-pointer select-none items-center px-4 py-2 text-base text-black outline-none transition-colors',
		'data-[highlighted]:bg-neutral-100',
		'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		'data-[selected]:font-semibold',
	],
})
