import { Play } from 'lucide-react'

function App() {
	// const [searchTerm, setSearchTerm] = useQueryState('q')

	// const filteredTracks = useMemo(() => {
	// 	if (!searchTerm) return TRACKS

	// 	return TRACKS.filter(track =>
	// 		track.name.toLowerCase().includes(searchTerm.toLowerCase())
	// 	)
	// }, [searchTerm])

	return (
		<div>
			{/* <SearchField
				value={searchTerm || ''}
				onChange={e => setSearchTerm(e.target.value)}
			/> */}

			<div className='relative'>
				<img src='/banner.jpg' alt='' className='rounded-xl' />

				<div className='bottom-layout px-layout absolute left-0 flex w-full items-center justify-between'>
					<div>
						<h1 className='mb-[0.18rem] text-2xl font-semibold text-white'>
							Daft Punk
						</h1>
						<h2 className='text-primary font-medium'>6.8m listeners</h2>
					</div>

					<button className='border-player-bg rounded-full border border-solid bg-gradient-to-r from-[#2F3034] to-[#1F2026] p-5 duration-300 hover:translate-y-[-2px] hover:shadow'>
						<Play className='text-primary' fill='var(--color-primary)' />
					</button>
				</div>
			</div>

			{/* <div className='mt-5'>
				{filteredTracks.map(track => (
					<Track key={track.name} track={track} />
				))}
			</div> */}
		</div>
	)
}

export default App
