import { create } from 'zustand'
import type { Playlist, Song } from '@/lib/data'


interface PlayerStore {
    isPlaying: boolean,
    volume: number,
    currentMusic: {
        playlist: Playlist | null
        song: Song | null,
        songs: Song[],
    },
    setIsPlaying: (isPlaying: boolean) => void,
    setVolume: (volume: number) => void,
    setCurrentMusic: (currentMusic: {
        playlist: Playlist
        song: Song | null,
        songs: Song[],
    }) => void,
}

export const usePlayerStore = create<PlayerStore>((set) => ({
    isPlaying: false,
    volume: 0.5,
    currentMusic: {
        playlist: null,
        song: null,
        songs: [],
    },
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setVolume: (volume) => set({ volume }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
}))