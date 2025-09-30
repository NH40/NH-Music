import type { PropsWithChildren } from 'react'

import { LeftSidebar } from './left-sidebar/LeftSidebar'
import { RightSidebar } from './right-sidebar/RightSidebar'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<div className='grid h-full min-h-screen grid-cols-[1fr_3.5fr_1.1fr] pb-20'>
				<LeftSidebar />
				<main className='py-layout px-8'>{children}</main>
				<RightSidebar />
			</div>
			{/* <AudioPlayer /> */}
		</>
	)
}
