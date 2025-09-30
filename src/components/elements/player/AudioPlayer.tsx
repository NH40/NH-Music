import {
	Pause,
	Play,
	SkipBack,
	SkipForward,
	Volume,
	Volume1,
	Volume2
} from 'lucide-react'

import { ProgressBar } from '@/components/ui/progress-bar/ProgressBar'
import { TrackInfo } from '@/components/ui/track-info/TrackInfo'

import { useAudioPlayer } from './useAudioPlayer'
import { playerStore } from '@/store/player.store'

export function AudioPlayer() {
	const { audioRef, changeTrack, onSeek, setVolume, togglePlayPause } =
		useAudioPlayer()

	if (!playerStore.currentTrack) {
		return null
	}

	return (
		<div className='bg-player-bg fixed bottom-0 left-0 grid w-full grid-cols-[1fr_5fr] border-t border-white/10 px-10 py-5'>
			<TrackInfo
				title={playerStore.currentTrack.name}
				subTitle={playerStore.currentTrack.artist.name}
				image={playerStore.currentTrack.cover}
			/>

			<audio
				ref={audioRef}
				src={playerStore.currentTrack.file}
				onTimeUpdate={e => {
					const currentTime = Math.floor(e.currentTarget.currentTime)
					// console.log(currentTime)
					playerStore.seek(currentTime)
				}}
				onEnded={() => (playerStore.isPlaying = false)}
			/>

			<div className='grid grid-cols-[1fr_6.9fr_2fr] items-center gap-8'>
				<div className='flex items-center gap-2.5'>
					<button
						className='opacity-80 duration-300 hover:opacity-100'
						onClick={() => changeTrack('prev')}
					>
						<SkipBack size={20} />
					</button>

					<button
						className='text-primary rounded-full border border-solid border-white/5 bg-gradient-to-r from-[#3C3D41] to-[#444549] p-3.5 hover:shadow'
						onClick={togglePlayPause}
					>
						{playerStore.isPlaying ? <Pause size={20} /> : <Play size={20} />}
					</button>

					<button
						className='opacity-80 duration-300 hover:opacity-100'
						onClick={() => changeTrack('next')}
					>
						<SkipForward size={20} />
					</button>
				</div>

				<ProgressBar
					currentValue={playerStore.currentTime}
					value={playerStore.currentTrack.duration}
					progress={playerStore.progress}
					onSeek={(time: number) => onSeek(time)}
					isTextDisplayed
				/>

				<div className='grid max-w-36 grid-cols-[1fr_8fr] items-center gap-1 pl-6'>
					<button onClick={() => setVolume(playerStore.volume === 0 ? 85 : 0)}>
						{playerStore.volume === 0 ? (
							<Volume />
						) : playerStore.volume < 60 ? (
							<Volume1 />
						) : (
							<Volume2 />
						)}
					</button>

					<ProgressBar
						currentValue={playerStore.volume}
						value={100}
						progress={playerStore.volume}
						onSeek={(value: number) => setVolume(value)}
						isThumbDisplayed={false}
					/>
				</div>
			</div>
		</div>
	)
}
