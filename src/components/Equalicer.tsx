import { usePlayerStore } from '@/store/playerStore.ts'
import type { Playlist } from '../lib/data';

export default function Equalicer({ playlist }: { playlist: Playlist }) {
    const { isPlaying, currentMusic } = usePlayerStore()

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === playlist.id

    return(
        <>
        { isPlayingPlaylist && 
            <img 
                className='absolute right-[16px] w-[14px] h-[14px] group-hover:hidden'
                src="https://open.spotifycdn.com/cdn/images/equaliser-green.f8937a92.svg" 
            />
        }
        </>
    )
}