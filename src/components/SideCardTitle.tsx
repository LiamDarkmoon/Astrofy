import { usePlayerStore } from '@/store/playerStore.ts'
import type { Playlist } from '../lib/data';

export default function SideCardTitle({ playlist } : { playlist: Playlist}) {
    const { isPlaying, currentMusic } = usePlayerStore()

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === playlist.id

    return(
        <div className="flex flex-col flex-auto truncate">
            <h3 className={ isPlayingPlaylist ? "text-green-500 font-medium" : "text-white font-medium"}>
                { playlist.title }
            </h3>

            <span className="text-sm text-zinc-400">
                { playlist.artists.join(', ') }
            </span>
        </div>
    )

}

