import { makeAutoObservable } from 'mobx'

class PlayerStore {
	isPlaying: boolean = false
	currentTrack: string | null = null
	volume: number = 85
	currentTime: number = 0
	progress: number = 0

	constructor() {
		makeAutoObservable(this)
	}

	play() {
		this.isPlaying = true
	}
}

export const playerStore = new PlayerStore()
