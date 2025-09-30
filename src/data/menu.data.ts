import { Compass, Home, Radio } from 'lucide-react'

import { PagesConfig } from '../config/pages.config'
import type { IMenuItem } from '../types/menu.types'

export const MENU_ITEMS: IMenuItem[] = [
	{
		icon: Home,
		name: 'Главная',
		link: PagesConfig.HOME
	},
	{
		icon: Compass,
		name: 'Поиск',
		link: PagesConfig.DISCOVER
	},
	{
		icon: Radio,
		name: 'Радио',
		link: PagesConfig.RADIO
	}
]

export const LIBRARY_MENU_ITEMS: IMenuItem[] = [
	{
		name: 'Сделано для тебя',
		link: PagesConfig.MADE_FOR_YOU
	},
	{
		name: 'Недавно играли',
		link: PagesConfig.RECENTLY_PLAYED
	},
	{
		name: 'Понравившиеся песни',
		link: PagesConfig.LIKED_SONGS
	},
	{
		name: 'Альбомы',
		link: PagesConfig.ALBUMS()
	},
	{
		name: 'Артисты',
		link: PagesConfig.ARTISTS()
	},
	{
		name: 'Подкаст',
		link: PagesConfig.PODCASTS()
	}
]
