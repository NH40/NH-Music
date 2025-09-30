import { Search } from 'lucide-react'
import type { ChangeEvent } from 'react'

interface Props {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function SearchField({ onChange, value }: Props) {
	return (
		<div>
			<label className='group flex items-center gap-3'>
				<Search className='opacity-40 duration-300 group-focus-within:opacity-100' />
				<input
					type='search'
					placeholder='Search for songs, artists, etc...'
					className='w-full bg-transparent outline-none'
					value={value}
					onChange={onChange}
				/>
			</label>
		</div>
	)
}
