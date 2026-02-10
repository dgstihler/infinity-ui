import { Switch as SwitchPrimitive } from '@base-ui/react/switch'
import { createContext, useContext, useState, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'
import type { SwitchProps, SwitchGroupProps } from './types'
import { switchVariants, thumbVariants, labelVariants, groupVariants } from './variants'

/* ── Group Context ── */

interface GroupContextValue {
	justOne: boolean
	readOnly: boolean
	disabled: boolean
	size: 'small' | 'medium'
	selected: string[]
	toggle: (value: string) => void
}

const GroupContext = createContext<GroupContextValue | null>(null)

/* ── Switch Item ── */

function SwitchItem({ className, size, children, disabled, value, ...props }: SwitchProps) {
	const group = useContext(GroupContext)

	const resolvedSize = group?.size ?? size ?? 'medium'
	const isDisabled = group?.disabled || group?.readOnly || disabled
	const isReadOnly = group?.readOnly ?? false

	const isChecked = group && value ? group.selected.includes(value) : undefined

	const handleChange = useCallback(
		() => {
			if (isReadOnly) return
			if (group && value) {
				group.toggle(value)
			}
		},
		[group, value, isReadOnly],
	)

	return (
		<label
			data-slot="switch"
			className={twMerge('group inline-flex items-center gap-3', isDisabled && 'pointer-events-none')}
		>
			<SwitchPrimitive.Root
				data-slot="switch-root"
				className={twMerge(switchVariants({ size: resolvedSize }), isReadOnly && 'cursor-default', className as string)}
				disabled={isDisabled}
				{...(group && value ? { checked: isChecked, onCheckedChange: handleChange } : {})}
				readOnly={isReadOnly}
				{...props}
			>
				<SwitchPrimitive.Thumb
					data-slot="switch-thumb"
					className={thumbVariants({ size: resolvedSize })}
				/>
			</SwitchPrimitive.Root>
			{children && (
				<span
					data-slot="switch-label"
					className={labelVariants({ disabled: !!isDisabled })}
				>
					{children}
				</span>
			)}
		</label>
	)
}

/* ── Switch Group ── */

function SwitchGroup({
	children,
	inLine,
	justOne = false,
	readOnly = false,
	disabled = false,
	size = 'medium',
	value,
	defaultValue = [],
	onChange,
	className,
}: SwitchGroupProps) {
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
			data-slot="switch-group"
			role="group"
			className={twMerge(groupVariants({ inLine }), className)}
		>
			<GroupContext.Provider value={{ justOne, readOnly, disabled, size, selected, toggle }}>
				{children}
			</GroupContext.Provider>
		</div>
	)
}

/* ── Export ── */

export const Switch = Object.assign(SwitchItem, {
	Group: SwitchGroup,
})
