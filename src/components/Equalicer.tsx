import { usePlayerStore } from '@/store/playerStore.ts'
import type { Playlist } from '../lib/data';

export default function Equalicer({ playlist }: { playlist: Playlist }) {
    const { isPlaying, currentMusic } = usePlayerStore()

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === playlist.id

    return(
        <div className={ isPlayingPlaylist ? 'absolute right-[8px] p-1 bg-green-500' : undefined }>{ isPlayingPlaylist && 'lilil' }</div>
    )
}