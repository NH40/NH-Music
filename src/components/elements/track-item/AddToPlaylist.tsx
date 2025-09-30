import cn from 'clsx'
import { Ellipsis } from 'lucide-react'
import { useState } from 'react'

import { CustomMenu } from '@/components/ui/custom-menu/CustomMenu'

import type { ITrack } from '@/types/track.types'

import { playlistStore } from '@/store/playlist.store'

interface Props {
	track: ITrack
}

export function AddToPlaylist({ track }: Props) {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className='relative'>
			<button onClick={() => setIsShow(prev => !prev)}>
				<Ellipsis className='opacity-30 duration-300 hover:opacity-100' />
			</button>

			{isShow && (
				<CustomMenu side='right'>
					<div className='space-y-1.5 p-1.5'>
						{playlistStore.playlists.map(playlist => {
							const isAdded = playlistStore.isTrackInPlaylist(
								playlist.name,
								track.name
							)

							return (
								<button
									key={playlist.name}
									className={cn(
										'w-full text-left text-sm transition-opacity duration-300 hover:opacity-100',
										isAdded ? 'font-semibold opacity-100' : 'opacity-60'
									)}
									onClick={() => {
										playlistStore.toggleTrackInPlaylist(
											playlist.name,
											track.name
										)
									}}
								>
									<span>{playlist.name}</span>
								</button>
							)
						})}
					</div>
				</CustomMenu>
			)}
		</div>
	)
}
