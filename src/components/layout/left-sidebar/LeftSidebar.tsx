import { LIBRARY_MENU_ITEMS, MENU_ITEMS } from '@/data/menu.data'

import { Menu } from './Menu'

export function LeftSidebar() {
	return (
		<aside className='px-layout border-player-bg h-full border-r py-9'>
			<Menu items={MENU_ITEMS} />

			<hr className='border-player-bg my-8' />

			<Menu items={LIBRARY_MENU_ITEMS} title='Твоя библиотека' />

			<hr className='border-player-bg my-8' />

			{/* <SidebarPlaylists /> */}
		</aside>
	)
}
