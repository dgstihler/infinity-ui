import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox'
import { createContext, useContext, useState, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'
import { Check, Minus } from 'lucide-react'
import type { CheckboxProps, CheckboxGroupProps } from './types'
import { checkboxVariants, labelVariants, groupVariants } from './variants'

/* ── Group Context ── */

interface GroupContextValue {
	justOne: boolean
	readOnly: boolean
	disabled: boolean
	rounded: boolean
	strikethrough: boolean
	selected: string[]
	toggle: (value: string) => void
}

const GroupContext = createContext<GroupContextValue | null>(null)

/* ── Checkbox Item ── */

function CheckboxItem({ className, rounded, strikethrough, children, disabled, value, ...props }: CheckboxProps) {
	const group = useContext(GroupContext)

	const isRounded = group?.rounded ?? rounded
	const isStrikethrough = group?.strikethrough ?? strikethrough
	const isDisabled = group?.disabled || group?.readOnly || disabled
	const isReadOnly = group?.readOnly ?? false

	const isChecked = group && value ? group.selected.includes(value) : undefined

	const handleChange = useCallback(
		(checked: boolean) => {
			if (isReadOnly) return
			if (group && value) {
				group.toggle(value)
			}
		},
		[group, value, isReadOnly],
	)

	return (
		<label
			data-slot="checkbox"
			className={twMerge('group inline-flex items-center gap-3', isDisabled && 'pointer-events-none')}
		>
			<CheckboxPrimitive.Root
				data-slot="checkbox-root"
				className={twMerge(checkboxVariants({ rounded: isRounded }), isReadOnly && 'cursor-default', className as string)}
				disabled={isDisabled}
				{...(group && value ? { checked: isChecked, onCheckedChange: handleChange } : {})}
				readOnly={isReadOnly}
				{...props}
			>
				<CheckboxPrimitive.Indicator
					data-slot="checkbox-indicator"
					className="group/indicator flex items-center justify-center data-[unchecked]:opacity-0"
					keepMounted
				>
					<Check className="size-4 group-data-[indeterminate]/indicator:hidden" />
					<Minus className="size-4 hidden group-data-[indeterminate]/indicator:block" />
				</CheckboxPrimitive.Indicator>
			</CheckboxPrimitive.Root>
			{children && (
				<span
					data-slot="checkbox-label"
					className={twMerge(
						labelVariants({ disabled: !!isDisabled }),
						isStrikethrough && 'group-has-[*[data-checked]]:line-through group-has-[*[data-checked]]:text-neutral-400',
					)}
				>
					{children}
				</span>
			)}
		</label>
	)
}

/* ── Checkbox Group ── */

function CheckboxGroup({
	children,
	inLine,
	justOne = false,
	readOnly = false,
	disabled = false,
	rounded = false,
	strikethrough = false,
	value,
	defaultValue = [],
	onChange,
	className,
}: CheckboxGroupProps) {
	const [internal, setInternal] = useState<string[]>(defaultValue)
	const selected = value ?? internal

	const toggle = useCallback(
		(val: string) => {
			if (readOnly) return
			const next = justOne
				? selected.includes(val) ? [] : [val]
				: selected.includes(val)
					? selected.filter((v) => v !== val)
					: [...selected, val]
			setInternal(next)
			onChange?.(next)
		},
		[selected, justOne, readOnly, onChange],
	)

	return (
		<div
			data-slot="checkbox-group"
			role="group"
			className={twMerge(groupVariants({ inLine }), className)}
		>
			<GroupContext.Provider value={{ justOne, readOnly, disabled, rounded, strikethrough, selected, toggle }}>
				{children}
			</GroupContext.Provider>
		</div>
	)
}

/* ── Export ── */

export const Checkbox = Object.assign(CheckboxItem, {
	Group: CheckboxGroup,
})
