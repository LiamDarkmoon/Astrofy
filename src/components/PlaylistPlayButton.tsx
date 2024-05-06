import { Pause, Play } from './Player.tsx'
import { usePlayerStore } from '@/store/playerStore.ts'

export default function CardPlayButton({ id } : { id: string}) {
    const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore(state => state)

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

    const handleClick = () => {
        if(isPlayingPlaylist) {
            setIsPlaying(false) // Pausar
            return
        }
        
        fetch (`api/get-info-playlist.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
            const { songs, playlist } = data
            setIsPlaying(!isPlaying)
            setCurrentMusic({
                playlist: playlist,
                song: songs[0],
                songs: songs,
            })
        })

    }


    return(
        <button 
            className="rounded-full bg-green-600 hover:bg-green-700 p-2"
            onClick={ handleClick }
        >
          { isPlayingPlaylist ? <Pause /> : <Play />}
        </button>
    )   
}