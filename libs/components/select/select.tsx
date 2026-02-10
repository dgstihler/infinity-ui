import { Select as SelectPrimitive } from '@base-ui/react/select'
import { twMerge } from 'tailwind-merge'
import { ChevronDown } from 'lucide-react'
import type { SelectProps, SelectItemProps } from './types'
import { triggerVariants, popupVariants, itemVariants } from './variants'

/* ── Select Root ── */

function SelectRoot({ children, placeholder = 'Select', size = 'medium', className, ...props }: SelectProps) {
	return (
		<SelectPrimitive.Root {...props}>
			<SelectPrimitive.Trigger
				data-slot="select-trigger"
				className={twMerge(triggerVariants({ size }), className)}
			>
				<SelectPrimitive.Value placeholder={placeholder} />
				<SelectPrimitive.Icon>
					<ChevronDown className="size-4 shrink-0" />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>
			<SelectPrimitive.Portal>
				<SelectPrimitive.Positioner
					data-slot="select-positioner"
					sideOffset={4}
					alignItemWithTrigger={false}
				>
					<SelectPrimitive.Popup
						data-slot="select-popup"
						className={popupVariants()}
					>
						{children}
					</SelectPrimitive.Popup>
				</SelectPrimitive.Positioner>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	)
}

/* ── Select Item ── */

function SelectItem({ className, children, ...props }: SelectItemProps) {
	return (
		<SelectPrimitive.Item
			data-slot="select-item"
			className={twMerge(itemVariants(), className)}
			{...props}
		>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	)
}

/* ── Export ── */

export const Select = Object.assign(SelectRoot, {
	Item: SelectItem,
})

