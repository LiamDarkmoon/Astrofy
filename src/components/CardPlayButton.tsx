import { Pause, Play } from './Player.tsx'
import { usePlayerStore } from '@/store/playerStore.ts'

export default function CardPlayButton({ id, size = 'small' } : { id: string | undefined, size?: 'small' | 'large' }) {
    const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore(state => state)

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

    const handleClick = () => {
        if(isPlayingPlaylist) {
            setIsPlaying(false)
            return
        }
        
        fetch (`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data
                
                setIsPlaying(!isPlaying)
                setCurrentMusic({ playlist, song: songs[0], songs })
            })
    }

    
    const iconsClassName = size === 'small' ? 'w-10 h-10' : 'w-14 h-14'

    return(
        <button 
            className={`grid place-content-center rounded-full bg-green-600 hover:bg-green-500 hover:scale-105 transition p-2 ${iconsClassName}`}
            onClick={ handleClick }
        >
          { isPlayingPlaylist ? <Pause/> : <Play/>}
        </button>
    )   
}