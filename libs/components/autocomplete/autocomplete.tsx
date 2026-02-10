import { Combobox } from '@base-ui/react/combobox'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Search, X } from 'lucide-react'
import type { AutocompleteProps } from './types'
import { inputWrapperVariants, inputVariants, clearVariants, popupVariants, itemVariants } from './variants'

/* ── Autocomplete Root ── */

function AutocompleteRoot({ items, placeholder = 'Search', size = 'medium', className, ...props }: AutocompleteProps) {
	const wrapperRef = useRef<HTMLDivElement>(null)
	const { contains } = Combobox.useFilter()

	return (
		<Combobox.Root
			openOnInputClick={false}
			items={items}
			filter={(item, inputValue) => contains(item, inputValue)}
			{...props}
		>
			<div
				ref={wrapperRef}
				data-slot="autocomplete-wrapper"
				className={twMerge(inputWrapperVariants({ size }), className)}
			>
				<Search className="size-5 shrink-0 text-black" />
				<Combobox.Input
					data-slot="autocomplete-input"
					placeholder={placeholder}
					className={inputVariants()}
				/>
				<Combobox.Clear
					data-slot="autocomplete-clear"
					className={clearVariants()}
					aria-label="Clear"
				>
					<X className="size-3.5" />
				</Combobox.Clear>
			</div>
			<Combobox.Portal>
				<Combobox.Positioner
					data-slot="autocomplete-positioner"
					sideOffset={4}
					anchor={wrapperRef}
				>
					<Combobox.Popup
						data-slot="autocomplete-popup"
						className={popupVariants()}
					>
						<Combobox.List>
							{(item: string) => (
								<Combobox.Item
									data-slot="autocomplete-item"
									className={itemVariants()}
									value={item}
									key={item}
								>
									{item}
								</Combobox.Item>
							)}
						</Combobox.List>
					</Combobox.Popup>
				</Combobox.Positioner>
			</Combobox.Portal>
		</Combobox.Root>
	)
}

/* ── Export ── */

export const Autocomplete = AutocompleteRoot
