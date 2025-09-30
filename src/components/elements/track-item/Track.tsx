import { Heart } from 'lucide-react'

import { TrackInfo } from '@/components/ui/track-info/TrackInfo'

import type { ITrack } from '@/types/track.types'

import { AddToPlaylist } from './AddToPlaylist'
import { favoriteStore } from '@/store/favorite.store'
import { transformDuration } from '@/utils/transform-duration'

interface Props {
	track: ITrack
}

export function Track({ track }: Props) {
	return (
		<div className='border-player-bg/50 flex items-center justify-between border-b py-7 last:border-0'>
			<TrackInfo
				title={track.name}
				subTitle={transformDuration(track.duration)}
				image={track.cover}
				track={track}
			/>

			<div className='flex items-center gap-4'>
				<button
					onClick={() => {
						favoriteStore.toggleFavorite(track.name)
					}}
				>
					<Heart
						className='text-primary opacity-85 duration-300 hover:opacity-100'
						fill={
							favoriteStore.favoritesName.includes(track.name)
								? 'var(--color-primary)'
								: 'none'
						}
					/>
				</button>
				<AddToPlaylist track={track} />
			</div>
		</div>
	)
}
