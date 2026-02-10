import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { twMerge } from 'tailwind-merge'
import type { ButtonProps, IconButtonProps } from './types'
import { buttonSizeVariants, iconSizeVariants, solidStyles, outlineStyles, ghostStyles } from './variants'

type SizeVariantsFn = (props: { size?: string }) => string

function Base({ className, size, disabled, children, variantStyles, sizeVariants, ...props }: (ButtonProps | IconButtonProps) & { variantStyles: string; sizeVariants: SizeVariantsFn }) {
	return (
		<ButtonPrimitive
			className={(state) =>
				twMerge(
					sizeVariants({ size: size ?? undefined }),
					variantStyles,
					typeof className === 'function' ? className(state) : className,
				)
			}
			disabled={disabled}
			{...props}
		>
			{children}
		</ButtonPrimitive>
	)
}

/* ── Text Button ── */

function ButtonSolid(props: ButtonProps) {
	return <Base data-slot="button-solid" sizeVariants={buttonSizeVariants} variantStyles={solidStyles} {...props} />
}

function ButtonOutline(props: ButtonProps) {
	return <Base data-slot="button-outline" sizeVariants={buttonSizeVariants} variantStyles={outlineStyles} {...props} />
}

function ButtonGhost(props: ButtonProps) {
	return <Base data-slot="button-ghost" sizeVariants={buttonSizeVariants} variantStyles={ghostStyles} {...props} />
}

/* ── Icon Button ── */

function IconSolid({ rounded, ...props }: IconButtonProps) {
	return <Base data-slot="icon-button-solid" sizeVariants={(p) => iconSizeVariants({ ...p, rounded })} variantStyles={solidStyles} {...props} />
}

function IconOutline({ rounded, ...props }: IconButtonProps) {
	return <Base data-slot="icon-button-outline" sizeVariants={(p) => iconSizeVariants({ ...p, rounded })} variantStyles={outlineStyles} {...props} />
}

function IconGhost({ rounded, ...props }: IconButtonProps) {
	return <Base data-slot="icon-button-ghost" sizeVariants={(p) => iconSizeVariants({ ...p, rounded })} variantStyles={ghostStyles} {...props} />
}

/* ── Export ── */

export const Button = {
	Solid: ButtonSolid,
	Outline: ButtonOutline,
	Ghost: ButtonGhost,
	Icon: {
		Solid: IconSolid,
		Outline: IconOutline,
		Ghost: IconGhost,
	},
}
