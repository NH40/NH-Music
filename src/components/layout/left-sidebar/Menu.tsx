import type { ReactNode } from 'react'

import type { IMenuItem } from '@/types/menu.types'

interface Props {
	items: IMenuItem[]
	title?: string
	children?: ReactNode
}

export function Menu({ items, title, children }: Props) {
	return (
		<div>
			{title && (
				<div className='text-xxs mb-5 font-medium uppercase opacity-60'>
					{title}
				</div>
			)}
			{items.length === 0 && <div>No items found</div>}
			<ul>
				{items.map(item => (
					<li key={item.name}>
						<a
							className='group mb-5 flex items-center gap-3'
							href={item.link ? item.link : '#'}
						>
							{item.icon && (
								<item.icon className='group-hover:text-primary duration-300' />
							)}
							<span className='group-hover:text-primary font-medium duration-300'>
								{item.name}
							</span>
						</a>
					</li>
				))}
			</ul>
			{children}
		</div>
	)
}
